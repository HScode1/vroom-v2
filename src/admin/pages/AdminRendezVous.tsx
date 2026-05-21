import { useState } from "react";
import { useAdminData } from "../context/AdminDataContext";
import { CalendarDays, Phone, Mail, Video, MessageCircle } from "lucide-react";
import type { AppointmentStatus } from "../context/AdminDataContext";
import type { Appointment } from "../../lib/api";
type BookingFormat = Appointment["booking"]["format"];

const STATUS_STYLES: Record<AppointmentStatus, string> = {
  Confirmé: "bg-[#bcff3d]/15 text-[#bcff3d]",
  "En attente": "bg-amber-500/15 text-amber-400",
  Annulé: "bg-red-500/15 text-red-400",
  Effectué: "bg-white/10 text-white/40",
};

const FORMAT_CONFIG: Record<BookingFormat, { label: string; icon: React.ElementType; color: string }> = {
  visio: { label: "Visio", icon: Video, color: "text-blue-400" },
  telephone: { label: "Téléphone", icon: Phone, color: "text-green-400" },
  whatsapp: { label: "WhatsApp", icon: MessageCircle, color: "text-emerald-400" },
};

export default function AdminRendezVous() {
  const { appointments, updateAppointmentStatus } = useAdminData();
  const [statusFilter, setStatusFilter] = useState<AppointmentStatus | "Tous">("Tous");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = appointments.filter(
    (a) => statusFilter === "Tous" || a.status === statusFilter
  );

  const sorted = [...filtered].sort((a, b) => {
    const da = `${a.booking.date} ${a.booking.time}`;
    const db = `${b.booking.date} ${b.booking.time}`;
    return da.localeCompare(db);
  });

  function formatDate(d: string) {
    return new Date(d).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
  }

  function isToday(d: string) {
    return d === new Date().toISOString().split("T")[0];
  }

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Rendez-vous</h1>
        <p className="text-white/40 text-sm mt-0.5">{appointments.length} consultations planifiées</p>
      </div>

      <div className="flex gap-2 flex-wrap">
        {(["Tous", "Confirmé", "En attente", "Annulé", "Effectué"] as const).map((s) => {
          const count = s === "Tous" ? appointments.length : appointments.filter((a) => a.status === s).length;
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

      {sorted.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 bg-[#1e1e1e] rounded-2xl border border-white/8 text-white/30">
          <CalendarDays size={40} className="mb-3" />
          <p className="font-medium">Aucun rendez-vous</p>
        </div>
      ) : (
        <div className="space-y-3">
          {sorted.map((appt) => {
            const fmt = FORMAT_CONFIG[appt.booking.format];
            const FormatIcon = fmt.icon;
            const isExp = expanded === appt.id;

            return (
              <div key={appt.id} className="bg-[#1e1e1e] rounded-2xl border border-white/8 overflow-hidden">
                <button
                  onClick={() => setExpanded(isExp ? null : appt.id)}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-white/3 transition-colors"
                >
                  <div className={`size-12 rounded-xl flex flex-col items-center justify-center flex-shrink-0 ${isToday(appt.booking.date) ? "bg-[#bcff3d]/15 border border-[#bcff3d]/30" : "bg-white/8"}`}>
                    <span className={`text-xs font-medium ${isToday(appt.booking.date) ? "text-[#bcff3d]" : "text-white/40"}`}>
                      {new Date(appt.booking.date).toLocaleDateString("fr-FR", { day: "2-digit" })}
                    </span>
                    <span className={`text-xs ${isToday(appt.booking.date) ? "text-[#bcff3d]/70" : "text-white/30"}`}>
                      {new Date(appt.booking.date).toLocaleDateString("fr-FR", { month: "short" })}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-medium text-white text-sm">
                        {appt.customer.firstName} {appt.customer.lastName}
                      </p>
                      {isToday(appt.booking.date) && (
                        <span className="text-xs bg-[#bcff3d]/15 text-[#bcff3d] px-2 py-0.5 rounded-full font-medium">Aujourd'hui</span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 mt-0.5 flex-wrap">
                      <span className="text-xs text-white/40">{appt.booking.time} · {appt.booking.duration} min</span>
                      <span className={`flex items-center gap-1 text-xs ${fmt.color}`}>
                        <FormatIcon size={11} />
                        {fmt.label}
                      </span>
                      <span className="text-xs text-white/30 hidden sm:inline">{appt.project.budget}</span>
                    </div>
                  </div>

                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium flex-shrink-0 ${STATUS_STYLES[appt.status]}`}>
                    {appt.status}
                  </span>
                </button>

                {isExp && (
                  <div className="px-5 pb-5 border-t border-white/8 pt-4 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-3">
                        <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wide">Contact</h3>
                        <p className="text-white font-medium">{formatDate(appt.booking.date)}</p>
                        <div className="space-y-2">
                          <a href={`tel:${appt.customer.phone}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                            <Phone size={14} className="text-[#bcff3d]" />
                            {appt.customer.phone}
                          </a>
                          <a href={`mailto:${appt.customer.email}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                            <Mail size={14} className="text-[#bcff3d]" />
                            {appt.customer.email}
                          </a>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wide">Projet client</h3>
                        <div className="space-y-1.5 text-sm">
                          <div className="flex gap-2">
                            <span className="text-white/40 w-24 flex-shrink-0">Budget</span>
                            <span className="text-white">{appt.project.budget}</span>
                          </div>
                          <div className="flex gap-2">
                            <span className="text-white/40 w-24 flex-shrink-0">Véhicule</span>
                            <span className="text-white">{appt.project.vehicleType}</span>
                          </div>
                        </div>
                        {appt.project.description && (
                          <p className="text-xs text-white/50 bg-white/5 rounded-xl p-3">{appt.project.description}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap pt-1">
                      <span className="text-xs text-white/40 mr-1">Statut :</span>
                      {(["Confirmé", "En attente", "Effectué", "Annulé"] as AppointmentStatus[]).map((s) => (
                        <button
                          key={s}
                          onClick={() => updateAppointmentStatus(appt.id, s)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors border ${
                            appt.status === s
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
          })}
        </div>
      )}
    </div>
  );
}
