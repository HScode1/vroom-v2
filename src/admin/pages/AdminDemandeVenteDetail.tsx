import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useAdminData } from "../context/AdminDataContext";
import { ChevronLeft, Phone, Mail, ChevronLeft as PrevIcon, ChevronRight as NextIcon } from "lucide-react";
import type { RequestStatus } from "../context/AdminDataContext";

const STATUS_STYLES: Record<RequestStatus, string> = {
  Nouveau: "bg-[#bcff3d]/15 text-[#bcff3d]",
  "En cours": "bg-blue-500/15 text-blue-400",
  Traité: "bg-white/10 text-white/40",
  Annulé: "bg-red-500/15 text-red-400",
};

export default function AdminDemandeVenteDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { sellRequests, updateSellRequestStatus } = useAdminData();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const req = sellRequests.find((r) => r.id === id);

  if (!req) {
    return (
      <div className="p-6 text-center">
        <p className="text-white/40">Dossier introuvable.</p>
        <button onClick={() => navigate("/admin/demandes/vente")} className="mt-4 text-[#bcff3d] text-sm hover:underline">
          Retour à la liste
        </button>
      </div>
    );
  }

  function formatDate(d: string) {
    return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  }

  const photos = req.vehicle.photos;

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/admin/demandes/vente")}
          className="p-2 rounded-xl text-white/40 hover:text-white hover:bg-white/10 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl font-bold text-white">
            {req.vehicle.brand} {req.vehicle.model}
          </h1>
          <p className="text-white/40 text-sm mt-0.5">
            Dossier de reprise · {formatDate(req.createdAt)}
          </p>
        </div>
        <span className={`text-sm px-3 py-1.5 rounded-full font-medium ${STATUS_STYLES[req.status]}`}>
          {req.status}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-[#1e1e1e] rounded-2xl border border-white/8 p-5 space-y-4">
            <h2 className="text-sm font-semibold text-white/60 uppercase tracking-wider">Véhicule proposé</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 text-sm">
              {[
                ["Marque", req.vehicle.brand],
                ["Modèle", req.vehicle.model],
                ["Finition", req.vehicle.trim],
                ["Année", req.vehicle.year],
                ["Kilométrage", `${req.vehicle.mileage.toLocaleString("fr-FR")} km`],
                ["Carburant", req.vehicle.fuel],
                ["Boîte", req.vehicle.gearbox],
                ["Couleur", req.vehicle.color],
                ["Portes", req.vehicle.doors],
              ].map(([k, v]) => (
                <div key={String(k)}>
                  <p className="text-white/40 text-xs mb-0.5">{k}</p>
                  <p className="text-white font-medium">{v}</p>
                </div>
              ))}
            </div>
            {req.vehicle.notes && (
              <div className="bg-white/5 rounded-xl p-3.5 mt-2">
                <p className="text-xs text-white/40 mb-1 font-medium uppercase tracking-wide">Remarques du propriétaire</p>
                <p className="text-sm text-white/70">{req.vehicle.notes}</p>
              </div>
            )}
          </div>

          <div className="bg-[#1e1e1e] rounded-2xl border border-white/8 p-5 space-y-4">
            <h2 className="text-sm font-semibold text-white/60 uppercase tracking-wider">
              Photos du véhicule ({photos.length})
            </h2>
            {photos.length === 0 ? (
              <p className="text-white/30 text-sm text-center py-6">Aucune photo fournie</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {photos.map((url, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className="aspect-video rounded-xl overflow-hidden bg-white/5 hover:ring-2 hover:ring-[#bcff3d]/50 transition-all group"
                  >
                    <img
                      src={url}
                      alt={`Photo ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-5">
          <div className="bg-[#1e1e1e] rounded-2xl border border-white/8 p-5 space-y-4">
            <h2 className="text-sm font-semibold text-white/60 uppercase tracking-wider">Client</h2>
            <div>
              <p className="text-white font-semibold text-lg">
                {req.customer.firstName} {req.customer.lastName}
              </p>
              <p className="text-white/40 text-sm mt-0.5">Reçu le {formatDate(req.createdAt)}</p>
            </div>
            <div className="space-y-2 pt-1">
              <a
                href={`tel:${req.customer.phone}`}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-sm text-white group"
              >
                <Phone size={15} className="text-[#bcff3d] flex-shrink-0" />
                <span>{req.customer.phone}</span>
              </a>
              <a
                href={`mailto:${req.customer.email}`}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-sm text-white group"
              >
                <Mail size={15} className="text-[#bcff3d] flex-shrink-0" />
                <span className="truncate">{req.customer.email}</span>
              </a>
            </div>
          </div>

          <div className="bg-[#1e1e1e] rounded-2xl border border-white/8 p-5 space-y-3">
            <h2 className="text-sm font-semibold text-white/60 uppercase tracking-wider">Changer le statut</h2>
            <div className="space-y-2">
              {(["Nouveau", "En cours", "Traité", "Annulé"] as RequestStatus[]).map((s) => (
                <button
                  key={s}
                  onClick={() => updateSellRequestStatus(req.id, s)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                    req.status === s
                      ? "bg-[#bcff3d] text-black border-transparent"
                      : "border-white/10 text-white/50 hover:text-white hover:border-white/20"
                  }`}
                >
                  {s}
                  {req.status === s && (
                    <span className="size-2 rounded-full bg-black/30" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[lightboxIndex]}
              alt={`Photo ${lightboxIndex + 1}`}
              className="w-full rounded-2xl object-contain max-h-[80vh]"
            />
            <div className="absolute inset-y-0 left-0 flex items-center -ml-4">
              <button
                onClick={() => setLightboxIndex((i) => (i! - 1 + photos.length) % photos.length)}
                className="p-2.5 rounded-full bg-black/60 text-white hover:bg-white/20 transition-colors"
                disabled={photos.length <= 1}
              >
                <PrevIcon size={20} />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center -mr-4">
              <button
                onClick={() => setLightboxIndex((i) => (i! + 1) % photos.length)}
                className="p-2.5 rounded-full bg-black/60 text-white hover:bg-white/20 transition-colors"
                disabled={photos.length <= 1}
              >
                <NextIcon size={20} />
              </button>
            </div>
            <div className="absolute top-3 right-3">
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2 rounded-full bg-black/60 text-white/60 hover:text-white transition-colors text-sm"
              >
                ✕
              </button>
            </div>
            <p className="text-center text-white/40 text-sm mt-3">
              {lightboxIndex + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
