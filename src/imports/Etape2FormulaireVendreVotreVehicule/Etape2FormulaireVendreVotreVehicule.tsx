import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router";

function useRequestId() {
  const location = useLocation();
  return useMemo(() => {
    const params = new URLSearchParams(location.search);
    const requestId = params.get("requestId");
    if (requestId) return requestId;

    const state = location.state as { requestId?: string } | null;
    return state?.requestId ?? null;
  }, [location.search, location.state]);
}

export default function Etape2FormulaireVendreVotreVehicule() {
  const navigate = useNavigate();
  const requestId = useRequestId();

  return (
    <div className="min-h-screen bg-[#181818] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-[-120px] mx-auto h-[420px] w-[760px] max-w-full rounded-full bg-[radial-gradient(circle_at_center,_rgba(200,236,102,0.28),_rgba(114,249,216,0.06)_45%,_rgba(24,24,24,0)_75%)] blur-[90px]" />
      <div className="relative mx-auto flex min-h-screen max-w-[980px] items-center px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid w-full gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-[28px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-6 sm:p-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(188,255,61,0.22)] bg-[rgba(188,255,61,0.09)] px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-[#bcff3d]">
              <span className="size-[6px] rounded-full bg-[#bcff3d]" />
              Dossier transmis
            </div>

            <h1 className="mt-6 font-['Syne',sans-serif] text-[38px] font-extrabold leading-[0.98] tracking-[-0.05em] text-white sm:text-[52px]">
              Votre demande
              <span className="block text-[#bcff3d]">a bien été reçue</span>
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[rgba(255,255,255,0.58)]">
              Notre équipe étudie maintenant votre dossier de reprise. Vous recevrez une réponse sous 24h ouvrées par email.
            </p>

            <div className="mt-8 rounded-[20px] border border-[rgba(188,255,61,0.15)] bg-[rgba(188,255,61,0.05)] p-5">
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#bcff3d]">Référence dossier</div>
              <div className="mt-2 font-['Syne',sans-serif] text-[20px] font-bold text-white">
                {requestId ?? "Non transmise"}
              </div>
              <div className="mt-2 text-[13px] leading-6 text-[rgba(255,255,255,0.52)]">
                Si vous avez été redirigé ici après l&apos;envoi, cette référence permet de suivre votre dossier.
                L&apos;accès direct à cette page reste possible sans la référence.
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Analyse du véhicule et des photos",
                "Validation interne du dossier",
                "Retour personnalisé sous 24h",
                "Reprise ou rendez-vous de finalisation",
              ].map((item, index) => (
                <div key={item} className="flex items-start gap-3 rounded-[14px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-4">
                  <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-[999px] bg-[rgba(188,255,61,0.12)] text-[11px] font-bold text-[#bcff3d]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="text-[13px] leading-6 text-[rgba(255,255,255,0.6)]">{item}</div>
                </div>
              ))}
            </div>
          </section>

          <aside className="space-y-5">
            <div className="rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[#111411] p-6">
              <div className="text-[14px] font-bold text-white">Ce que nous faisons maintenant</div>
              <div className="mt-4 space-y-3 text-[13px] leading-6 text-[rgba(255,255,255,0.58)]">
                <div>Nous vérifions les informations transmises.</div>
                <div>Nous examinons les photos si vous en avez ajouté.</div>
                <div>Nous préparons ensuite votre estimation ou la suite du dossier.</div>
              </div>
            </div>

            <div className="rounded-[24px] border border-[rgba(188,255,61,0.15)] bg-[rgba(188,255,61,0.05)] p-6">
              <div className="text-[14px] font-bold text-[#bcff3d]">Besoin d&apos;ajouter une précision ?</div>
              <div className="mt-4 space-y-3 text-[13px] leading-6 text-[rgba(255,255,255,0.62)]">
                <div>06 19 93 37 65</div>
                <div>contact@vroomparis.fr</div>
                <div>Lun - Sam · 9h à 19h</div>
              </div>
              <button
                type="button"
                onClick={() => navigate("/vendre-votre-vehicule")}
                className="mt-6 rounded-[12px] bg-[#bcff3d] px-4 py-3 text-[13px] font-bold text-[#0c0d0c]"
              >
                Revenir au formulaire
              </button>
            </div>

            <div className="rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-6 text-[13px] leading-6 text-[rgba(255,255,255,0.5)]">
              Vous pouvez fermer cette page si vous avez déjà terminé le formulaire.
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
