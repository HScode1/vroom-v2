import { useAdminData } from "../context/AdminDataContext";
import { Car, ShoppingCart, Tag, CalendarDays, TrendingUp, Clock } from "lucide-react";
import { useNavigate } from "react-router";

function StatCard({
  label,
  value,
  sub,
  icon: Icon,
  accent,
  onClick,
}: {
  label: string;
  value: string | number;
  sub?: string;
  icon: React.ElementType;
  accent?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-left p-5 rounded-2xl border transition-all hover:scale-[1.02] ${
        accent
          ? "bg-[#bcff3d] border-transparent text-black"
          : "bg-[#1e1e1e] border-white/8 text-white hover:border-white/20"
      }`}
    >
      <div className={`inline-flex p-2.5 rounded-xl mb-4 ${accent ? "bg-black/10" : "bg-white/8"}`}>
        <Icon size={20} className={accent ? "text-black" : "text-[#bcff3d]"} />
      </div>
      <p className={`text-3xl font-bold mb-1 ${accent ? "text-black" : "text-white"}`}>{value}</p>
      <p className={`text-sm font-medium ${accent ? "text-black/70" : "text-white/60"}`}>{label}</p>
      {sub && <p className={`text-xs mt-1 ${accent ? "text-black/50" : "text-white/35"}`}>{sub}</p>}
    </button>
  );
}

export default function AdminDashboard() {
  const { vehicles, buyRequests, sellRequests, appointments } = useAdminData();
  const navigate = useNavigate();

  const activeVehicles = vehicles.filter((v) => v.status === "En ligne").length;
  const newBuyRequests = buyRequests.filter((r) => r.status === "Nouveau").length;
  const newSellRequests = sellRequests.filter((r) => r.status === "Nouveau").length;
  const upcomingAppts = appointments.filter(
    (a) => (a.status === "Confirmé" || a.status === "En attente") && a.booking.date >= new Date().toISOString().split("T")[0]
  );

  const recentVehicles = [...vehicles]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 5);

  const FORMAT_LABELS: Record<string, string> = {
    visio: "Visio",
    telephone: "Téléphone",
    whatsapp: "WhatsApp",
  };

  function formatDate(d: string) {
    return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long" });
  }

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-white/40 text-sm mt-1">
          {new Date().toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Véhicules en ligne"
          value={activeVehicles}
          sub={`${vehicles.length} au total`}
          icon={Car}
          accent
          onClick={() => navigate("/admin/vehicules")}
        />
        <StatCard
          label="Nouvelles demandes achat"
          value={newBuyRequests}
          sub={`${buyRequests.length} au total`}
          icon={ShoppingCart}
          onClick={() => navigate("/admin/demandes/achat")}
        />
        <StatCard
          label="Nouvelles reprises"
          value={newSellRequests}
          sub={`${sellRequests.length} au total`}
          icon={Tag}
          onClick={() => navigate("/admin/demandes/vente")}
        />
        <StatCard
          label="RDV à venir"
          value={upcomingAppts.length}
          sub="confirmés ou en attente"
          icon={CalendarDays}
          onClick={() => navigate("/admin/rendez-vous")}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#1e1e1e] rounded-2xl border border-white/8 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-white flex items-center gap-2">
              <TrendingUp size={16} className="text-[#bcff3d]" />
              Véhicules récents
            </h2>
            <button
              onClick={() => navigate("/admin/vehicules")}
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              Voir tout
            </button>
          </div>
          <div className="space-y-3">
            {recentVehicles.map((v) => (
              <div
                key={v.id}
                className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0"
              >
                <div>
                  <p className="text-sm font-medium text-white">
                    {v.brand} {v.model}
                  </p>
                  <p className="text-xs text-white/40">{v.subtitle}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-white">
                    {v.price.toLocaleString("fr-FR")} €
                  </p>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      v.status === "En ligne"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : v.status === "Vendu"
                        ? "bg-white/10 text-white/40"
                        : "bg-amber-500/15 text-amber-400"
                    }`}
                  >
                    {v.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1e1e1e] rounded-2xl border border-white/8 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-white flex items-center gap-2">
              <Clock size={16} className="text-[#bcff3d]" />
              Prochains rendez-vous
            </h2>
            <button
              onClick={() => navigate("/admin/rendez-vous")}
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              Voir tout
            </button>
          </div>
          {upcomingAppts.length === 0 ? (
            <p className="text-white/40 text-sm py-4 text-center">Aucun rendez-vous à venir</p>
          ) : (
            <div className="space-y-3">
              {upcomingAppts.slice(0, 5).map((a) => (
                <div
                  key={a.id}
                  className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0"
                >
                  <div>
                    <p className="text-sm font-medium text-white">
                      {a.customer.firstName} {a.customer.lastName}
                    </p>
                    <p className="text-xs text-white/40">
                      {formatDate(a.booking.date)} à {a.booking.time} · {FORMAT_LABELS[a.booking.format]}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-white/60">{a.project.budget}</p>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        a.status === "Confirmé"
                          ? "bg-[#bcff3d]/15 text-[#bcff3d]"
                          : "bg-amber-500/15 text-amber-400"
                      }`}
                    >
                      {a.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
