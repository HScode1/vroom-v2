import { useState } from "react";
import { useAdminData } from "../context/AdminDataContext";
import { ShoppingCart, ChevronDown, ChevronUp, Phone, Mail } from "lucide-react";
import type { BuyRequest, RequestStatus } from "../data/mockData";

const STATUS_STYLES: Record<RequestStatus, string> = {
  Nouveau: "bg-[#bcff3d]/15 text-[#bcff3d]",
  "En cours": "bg-blue-500/15 text-blue-400",
  Traité: "bg-white/10 text-white/40",
  Annulé: "bg-red-500/15 text-red-400",
};

const STATUS_OPTIONS: RequestStatus[] = ["Nouveau", "En cours", "Traité", "Annulé"];

export default function AdminDemandesAchat() {
  const { buyRequests, updateBuyRequestStatus } = useAdminData();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<RequestStatus | "Tous">("Tous");

  const filtered = buyRequests.filter(
    (r) => statusFilter === "Tous" || r.status === statusFilter
  );

  function formatDate(d: string) {
    return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  }

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Demandes d'achat</h1>
          <p className="text-white/40 text-sm mt-0.5">{buyRequests.length} demandes reçues</p>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap">
        {(["Tous", ...STATUS_OPTIONS] as const).map((s) => {
          const count = s === "Tous" ? buyRequests.length : buyRequests.filter((r) => r.status === s).length;
          return (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                statusFilter === s
                  ? "bg-[#bcff3d] text-black"
                  : "bg-[#1e1e1e] border border-white/8 text-white/60 hover:text-white"
              }`}
            >
              {s}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${statusFilter === s ? "bg-black/20" : "bg-white/10"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 bg-[#1e1e1e] rounded-2xl border border-white/8 text-white/30">
            <ShoppingCart size={40} className="mb-3" />
            <p className="font-medium">Aucune demande</p>
          </div>
        ) : (
          filtered.map((req) => (
            <RequestCard
              key={req.id}
              req={req}
              expanded={expanded === req.id}
              onToggle={() => setExpanded(expanded === req.id ? null : req.id)}
              onStatusChange={(status) => updateBuyRequestStatus(req.id, status)}
              formatDate={formatDate}
            />
          ))
        )}
      </div>
    </div>
  );
}

function RequestCard({
  req,
  expanded,
  onToggle,
  onStatusChange,
  formatDate,
}: {
  req: BuyRequest;
  expanded: boolean;
  onToggle: () => void;
  onStatusChange: (s: RequestStatus) => void;
  formatDate: (d: string) => string;
}) {
  const STATUS_STYLES: Record<RequestStatus, string> = {
    Nouveau: "bg-[#bcff3d]/15 text-[#bcff3d]",
    "En cours": "bg-blue-500/15 text-blue-400",
    Traité: "bg-white/10 text-white/40",
    Annulé: "bg-red-500/15 text-red-400",
  };

  const TIMEFRAME_LABELS: Record<string, string> = {
    immediat: "Immédiat",
    "1-3 mois": "1 à 3 mois",
    "3-6 mois": "3 à 6 mois",
    "plus-6 mois": "Plus de 6 mois",
  };

  return (
    <div className="bg-[#1e1e1e] rounded-2xl border border-white/8 overflow-hidden">
      <button onClick={onToggle} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/3 transition-colors">
        <div className="flex items-center gap-4 min-w-0">
          <div className="size-10 rounded-xl bg-white/8 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold text-white/60">
              {req.customer.firstName[0]}{req.customer.lastName[0]}
            </span>
          </div>
          <div className="min-w-0">
            <p className="font-medium text-white text-sm">
              {req.customer.firstName} {req.customer.lastName}
            </p>
            <p className="text-xs text-white/40 truncate">
              {req.vehicleCriteria.brand} {req.vehicleCriteria.model} · Budget {req.vehicleCriteria.maxBudget.toLocaleString("fr-FR")} €
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0 ml-4">
          <span className="text-xs text-white/30 hidden sm:block">{formatDate(req.createdAt)}</span>
          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${STATUS_STYLES[req.status]}`}>{req.status}</span>
          {expanded ? <ChevronUp size={16} className="text-white/40" /> : <ChevronDown size={16} className="text-white/40" />}
        </div>
      </button>

      {expanded && (
        <div className="px-5 pb-5 border-t border-white/8 pt-4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wide">Client</h3>
              <div className="space-y-2">
                <a href={`tel:${req.customer.phone}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                  <Phone size={14} className="text-[#bcff3d]" />
                  {req.customer.phone}
                </a>
                <a href={`mailto:${req.customer.email}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                  <Mail size={14} className="text-[#bcff3d]" />
                  {req.customer.email}
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wide">Critères recherchés</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                <span className="text-white/40">Marque</span><span className="text-white">{req.vehicleCriteria.brand}</span>
                <span className="text-white/40">Modèle</span><span className="text-white">{req.vehicleCriteria.model}</span>
                <span className="text-white/40">Finition</span><span className="text-white">{req.vehicleCriteria.trim || "–"}</span>
                <span className="text-white/40">Année</span><span className="text-white">{req.vehicleCriteria.year}</span>
                <span className="text-white/40">Boîte</span><span className="text-white">{req.vehicleCriteria.gearbox}</span>
                <span className="text-white/40">Carburant</span><span className="text-white">{req.vehicleCriteria.fuel}</span>
                <span className="text-white/40">Km max</span><span className="text-white">{req.vehicleCriteria.maxMileage.toLocaleString("fr-FR")} km</span>
                <span className="text-white/40">Budget max</span><span className="text-white font-semibold">{req.vehicleCriteria.maxBudget.toLocaleString("fr-FR")} €</span>
                <span className="text-white/40">Délai</span><span className="text-white">{TIMEFRAME_LABELS[req.vehicleCriteria.timeframe] ?? req.vehicleCriteria.timeframe}</span>
              </div>
            </div>
          </div>
          {req.vehicleCriteria.notes && (
            <div className="bg-white/5 rounded-xl p-3.5">
              <p className="text-xs text-white/40 mb-1 uppercase tracking-wide font-medium">Notes</p>
              <p className="text-sm text-white/70">{req.vehicleCriteria.notes}</p>
            </div>
          )}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-xs text-white/40 mr-1">Statut :</span>
            {(["Nouveau", "En cours", "Traité", "Annulé"] as RequestStatus[]).map((s) => (
              <button
                key={s}
                onClick={() => onStatusChange(s)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors border ${
                  req.status === s
                    ? "bg-[#bcff3d] text-black border-transparent"
                    : "border-white/10 text-white/50 hover:text-white hover:border-white/20"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
