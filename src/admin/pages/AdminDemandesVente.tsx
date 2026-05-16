import { useAdminData } from "../context/AdminDataContext";
import { useNavigate } from "react-router";
import { Tag, Eye } from "lucide-react";
import type { RequestStatus } from "../data/mockData";
import { useState } from "react";

const STATUS_STYLES: Record<RequestStatus, string> = {
  Nouveau: "bg-[#bcff3d]/15 text-[#bcff3d]",
  "En cours": "bg-blue-500/15 text-blue-400",
  Traité: "bg-white/10 text-white/40",
  Annulé: "bg-red-500/15 text-red-400",
};

export default function AdminDemandesVente() {
  const { sellRequests } = useAdminData();
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState<RequestStatus | "Tous">("Tous");

  const filtered = sellRequests.filter(
    (r) => statusFilter === "Tous" || r.status === statusFilter
  );

  function formatDate(d: string) {
    return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  }

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Demandes de vente (Reprises)</h1>
        <p className="text-white/40 text-sm mt-0.5">{sellRequests.length} dossiers reçus</p>
      </div>

      <div className="flex gap-2 flex-wrap">
        {(["Tous", "Nouveau", "En cours", "Traité", "Annulé"] as const).map((s) => {
          const count = s === "Tous" ? sellRequests.length : sellRequests.filter((r) => r.status === s).length;
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

      <div className="bg-[#1e1e1e] rounded-2xl border border-white/8 overflow-hidden">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-white/30">
            <Tag size={40} className="mb-3" />
            <p className="font-medium">Aucun dossier</p>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left px-5 py-3.5 text-xs font-medium text-white/40 uppercase tracking-wide">Client</th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-white/40 uppercase tracking-wide">Véhicule</th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-white/40 uppercase tracking-wide hidden md:table-cell">Kilométrage</th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-white/40 uppercase tracking-wide hidden sm:table-cell">Photos</th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-white/40 uppercase tracking-wide hidden lg:table-cell">Date</th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-white/40 uppercase tracking-wide">Statut</th>
                <th className="px-5 py-3.5" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((req) => (
                <tr
                  key={req.id}
                  className="border-b border-white/5 last:border-0 hover:bg-white/3 transition-colors cursor-pointer"
                  onClick={() => navigate(`/admin/demandes/vente/${req.id}`)}
                >
                  <td className="px-5 py-4">
                    <p className="font-medium text-white text-sm">
                      {req.customer.firstName} {req.customer.lastName}
                    </p>
                    <p className="text-xs text-white/40">{req.customer.phone}</p>
                  </td>
                  <td className="px-5 py-4">
                    <p className="text-sm font-medium text-white">
                      {req.vehicle.brand} {req.vehicle.model}
                    </p>
                    <p className="text-xs text-white/40">{req.vehicle.trim} · {req.vehicle.year}</p>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <p className="text-sm text-white/70">{req.vehicle.mileage.toLocaleString("fr-FR")} km</p>
                    <p className="text-xs text-white/35">{req.vehicle.fuel} · {req.vehicle.gearbox}</p>
                  </td>
                  <td className="px-5 py-4 hidden sm:table-cell">
                    <span className="text-sm text-white/70">{req.vehicle.photos.length} photo{req.vehicle.photos.length > 1 ? "s" : ""}</span>
                  </td>
                  <td className="px-5 py-4 hidden lg:table-cell">
                    <span className="text-sm text-white/50">{formatDate(req.createdAt)}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${STATUS_STYLES[req.status]}`}>
                      {req.status}
                    </span>
                  </td>
                  <td className="px-5 py-4" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => navigate(`/admin/demandes/vente/${req.id}`)}
                      className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                      title="Voir le détail"
                    >
                      <Eye size={15} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
