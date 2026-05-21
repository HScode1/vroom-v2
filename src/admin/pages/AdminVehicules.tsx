import { useState } from "react";
import { useNavigate } from "react-router";
import { useAdminData } from "../context/AdminDataContext";
import { Plus, Search, Pencil, Trash2, Car } from "lucide-react";
import type { Vehicle } from "../../lib/api";
type VehicleStatus = Vehicle["status"];

const STATUS_STYLES: Record<VehicleStatus, string> = {
  "En ligne": "bg-emerald-500/15 text-emerald-400",
  Vendu: "bg-white/10 text-white/40",
  Brouillon: "bg-amber-500/15 text-amber-400",
};

const TAG_STYLES: Record<string, string> = {
  "Bonne affaire": "bg-[#bcff3d]/15 text-[#bcff3d]",
  "Forte demande": "bg-orange-500/15 text-orange-400",
  "Baisse de prix": "bg-blue-500/15 text-blue-400",
  Nouveauté: "bg-purple-500/15 text-purple-400",
};

export default function AdminVehicules() {
  const { vehicles, deleteVehicle } = useAdminData();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<VehicleStatus | "Tous">("Tous");
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const filtered = vehicles.filter((v) => {
    const matchSearch =
      search === "" ||
      `${v.brand} ${v.model} ${v.subtitle}`.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "Tous" || v.status === statusFilter;
    return matchSearch && matchStatus;
  });

  async function handleDelete(id: string) {
    if (deleteConfirm === id) {
      await deleteVehicle(id);
      setDeleteConfirm(null);
    } else {
      setDeleteConfirm(id);
    }
  }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Véhicules</h1>
          <p className="text-white/40 text-sm mt-0.5">{vehicles.length} véhicules au total</p>
        </div>
        <button
          onClick={() => navigate("/admin/vehicules/nouveau")}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#bcff3d] text-black rounded-xl font-semibold text-sm hover:bg-[#d4ff5c] transition-colors"
        >
          <Plus size={16} />
          Nouveau véhicule
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            type="text"
            placeholder="Rechercher un véhicule…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-10 pl-10 pr-4 rounded-xl bg-[#1e1e1e] border border-white/8 text-white text-sm placeholder-white/25 focus:outline-none focus:border-white/20 transition-colors"
          />
        </div>
        <div className="flex gap-2">
          {(["Tous", "En ligne", "Brouillon", "Vendu"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                statusFilter === s
                  ? "bg-[#bcff3d] text-black"
                  : "bg-[#1e1e1e] border border-white/8 text-white/60 hover:text-white"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-[#1e1e1e] rounded-2xl border border-white/8 overflow-hidden">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-white/30">
            <Car size={40} className="mb-3" />
            <p className="font-medium">Aucun véhicule trouvé</p>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left px-5 py-3.5 text-xs font-medium text-white/40 uppercase tracking-wide">
                  Véhicule
                </th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-white/40 uppercase tracking-wide hidden md:table-cell">
                  Caractéristiques
                </th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-white/40 uppercase tracking-wide">
                  Prix
                </th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-white/40 uppercase tracking-wide hidden lg:table-cell">
                  Tags
                </th>
                <th className="text-left px-5 py-3.5 text-xs font-medium text-white/40 uppercase tracking-wide">
                  Statut
                </th>
                <th className="px-5 py-3.5" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((v) => (
                <tr key={v.id} className="border-b border-white/5 last:border-0 hover:bg-white/3 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-xl bg-white/8 flex items-center justify-center flex-shrink-0">
                        <Car size={16} className="text-white/40" />
                      </div>
                      <div>
                        <p className="font-medium text-white text-sm">
                          {v.brand} {v.model}
                        </p>
                        <p className="text-xs text-white/40">{v.subtitle}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <p className="text-sm text-white/70">{v.specs.year} · {v.specs.gearbox}</p>
                    <p className="text-xs text-white/35">{v.specs.mileage.toLocaleString("fr-FR")} km · {v.specs.fuel}</p>
                  </td>
                  <td className="px-5 py-4">
                    <p className="font-semibold text-white text-sm">{v.price.toLocaleString("fr-FR")} €</p>
                  </td>
                  <td className="px-5 py-4 hidden lg:table-cell">
                    <div className="flex flex-wrap gap-1">
                      {v.tags.map((tag) => (
                        <span key={tag} className={`text-xs px-2 py-0.5 rounded-full font-medium ${TAG_STYLES[tag]}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${STATUS_STYLES[v.status]}`}>
                      {v.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1 justify-end">
                      <button
                        onClick={() => navigate(`/admin/vehicules/${v.id}/edit`)}
                        className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                        title="Modifier"
                      >
                        <Pencil size={15} />
                      </button>
                      <button
                        onClick={() => handleDelete(v.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          deleteConfirm === v.id
                            ? "bg-red-500/20 text-red-400"
                            : "text-white/40 hover:text-red-400 hover:bg-red-500/10"
                        }`}
                        title={deleteConfirm === v.id ? "Cliquer pour confirmer" : "Supprimer"}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-end justify-center pb-6 pointer-events-none">
          <div className="bg-[#1e1e1e] border border-red-500/30 rounded-2xl px-5 py-3.5 flex items-center gap-3 pointer-events-auto shadow-xl">
            <span className="text-sm text-white/70">Cliquez à nouveau sur la corbeille pour confirmer la suppression.</span>
            <button onClick={() => setDeleteConfirm(null)} className="text-white/40 hover:text-white text-xs px-2 py-1 rounded-lg hover:bg-white/10 transition-colors">Annuler</button>
          </div>
        </div>
      )}
    </div>
  );
}
