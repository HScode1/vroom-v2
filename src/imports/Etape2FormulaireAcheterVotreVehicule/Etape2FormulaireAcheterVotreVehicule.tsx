import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { requests, type BuyRequest } from "../../lib/api";
import svgPaths from "./svg-g9ybnh21zu";

function ConfirmationNotice({
  requestId,
  request,
  isLoading,
  error,
}: {
  requestId: string | null;
  request: BuyRequest | null;
  isLoading: boolean;
  error: string;
}) {
  const hasRequestId = Boolean(requestId);
  const summary = request?.vehicleCriteria;

  return (
    <div className="absolute left-1/2 top-[32px] z-20 w-[min(720px,calc(100vw-32px))] -translate-x-1/2 rounded-[24px] border border-[rgba(188,255,61,0.22)] bg-[rgba(17,20,17,0.92)] px-5 py-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-md">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bcff3d]">
        {hasRequestId ? "Demande enregistrée" : "Confirmation de demande"}
      </p>
      <h1 className="mt-2 text-[20px] font-semibold text-white">
        {hasRequestId
          ? "Votre demande d’achat a bien été transmise."
          : "Merci. Votre demande d’achat est prête."}
      </h1>
      <p className="mt-2 text-[14px] leading-[1.6] text-white/70">
        {hasRequestId
          ? "Un conseiller va étudier votre dossier et vous recontacter rapidement pour la suite."
          : "Si vous arrivez directement sur cette page, vous pouvez simplement la considérer comme une confirmation générale."}
      </p>
      {hasRequestId && (
        <p className="mt-3 text-[12px] text-white/45">
          Référence dossier: <span className="font-mono text-white/70">{requestId}</span>
        </p>
      )}
      {isLoading ? (
        <p className="mt-4 text-[13px] text-white/55">Chargement du récapitulatif…</p>
      ) : null}
      {error ? (
        <p className="mt-4 text-[13px] text-[#ff8e8e]">{error}</p>
      ) : null}
      {summary ? (
        <div className="mt-4 grid gap-3 rounded-[18px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-4 text-[13px] text-white/75 sm:grid-cols-2">
          <div>
            <div className="text-[10px] uppercase tracking-[0.14em] text-white/35">Marque</div>
            <div className="mt-1 text-white">{summary.brand}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.14em] text-white/35">Modèle</div>
            <div className="mt-1 text-white">{summary.model}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.14em] text-white/35">Année</div>
            <div className="mt-1 text-white">{summary.year || "Peu importe"}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.14em] text-white/35">Carburant</div>
            <div className="mt-1 text-white">{summary.fuel}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.14em] text-white/35">Boîte</div>
            <div className="mt-1 text-white">{summary.gearbox}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.14em] text-white/35">Budget max</div>
            <div className="mt-1 text-white">{summary.maxBudget.toLocaleString("fr-FR")} €</div>
          </div>
          <div className="sm:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.14em] text-white/35">Délai</div>
            <div className="mt-1 text-white">{summary.timeframe}</div>
          </div>
          {summary.notes ? (
            <div className="sm:col-span-2">
              <div className="text-[10px] uppercase tracking-[0.14em] text-white/35">Notes</div>
              <div className="mt-1 text-white/75">{summary.notes}</div>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.22)] border-solid h-[29px] left-[80px] rounded-[100px] top-[64px] w-[353.39px]" data-name="Overlay+Border">
      <div className="-translate-y-1/2 absolute bg-[#bcff3d] left-[18px] rounded-[3px] size-[6px] top-1/2" data-name="Background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[13px] justify-center leading-[0] left-[32px] text-[#bcff3d] text-[11px] top-1/2 tracking-[1.32px] uppercase w-[301.707px]">
        <p className="leading-[normal]">Service personnalisé · Réponse sous 24h</p>
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.2)] border-solid left-0 rounded-[16px] size-[32px] top-[18px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[#bcff3d] text-[11px] text-center top-1/2 w-[12.763px]">
        <p className="leading-[normal]">01</p>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[73px] left-[80px] right-[680px] top-[431.88px]" data-name="HorizontalBorder">
      <OverlayBorder1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[18px] justify-center leading-[0] left-[48px] text-[14px] text-[rgba(255,255,255,0.85)] top-[25px] w-[175.886px]">
        <p className="leading-[normal]">Vous décrivez votre projet</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[48px] text-[12px] text-[rgba(255,255,255,0.4)] top-[47px] w-[365.922px]">
        <p className="leading-[18px]">Marque, modèle, budget, préférences — tout est pris en compte.</p>
      </div>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.2)] border-solid left-0 rounded-[16px] size-[32px] top-[18px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[calc(50%+0.18px)] text-[#bcff3d] text-[11px] text-center top-1/2 w-[15.355px]">
        <p className="leading-[normal]">02</p>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[73px] left-[80px] right-[680px] top-[504.88px]" data-name="HorizontalBorder">
      <OverlayBorder2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[18px] justify-center leading-[0] left-[48px] text-[14px] text-[rgba(255,255,255,0.85)] top-[25px] w-[239.766px]">
        <p className="leading-[normal]">Notre équipe sélectionne pour vous</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[48px] text-[12px] text-[rgba(255,255,255,0.4)] top-[47px] w-[346.365px]">
        <p className="leading-[18px]">On accède à tout le marché pour trouver les meilleures offres.</p>
      </div>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.2)] border-solid left-[80px] rounded-[16px] size-[32px] top-[595.88px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[calc(50%+0.18px)] text-[#bcff3d] text-[11px] text-center top-1/2 w-[15.547px]">
        <p className="leading-[normal]">03</p>
      </div>
    </div>
  );
}

function ParagraphBackground() {
  return (
    <div className="absolute bg-[#111411] h-[91px] left-0 right-[223.5px] top-0" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-extrabold h-[34px] justify-center left-[16px] text-[#bcff3d] text-[28px] top-[37px] w-[109.779px]">
        <p className="leading-[normal]">500+</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center left-[16px] text-[11px] text-[rgba(255,255,255,0.4)] top-[64.5px] w-[95.597px]">
        <p className="leading-[normal]">véhicules en stock</p>
      </div>
    </div>
  );
}

function ParagraphBackground1() {
  return (
    <div className="absolute bg-[#111411] h-[91px] left-[223.5px] right-0 top-0" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-extrabold h-[34px] justify-center left-[16px] text-[#bcff3d] text-[28px] top-[37px] w-[87.284px]">
        <p className="leading-[normal]">24h</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center left-[16px] text-[11px] text-[rgba(255,255,255,0.4)] top-[64.5px] w-[87.304px]">
        <p className="leading-[normal]">délai de réponse</p>
      </div>
    </div>
  );
}

function ParagraphBackground2() {
  return (
    <div className="absolute bg-[#111411] h-[91px] left-0 right-[223.5px] top-[92px]" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-extrabold h-[34px] justify-center left-[16px] text-[#bcff3d] text-[28px] top-[37px] w-[111.202px]">
        <p className="leading-[normal]">100%</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center left-[16px] text-[11px] text-[rgba(255,255,255,0.4)] top-[64.5px] w-[34.855px]">
        <p className="leading-[normal]">gratuit</p>
      </div>
    </div>
  );
}

function ParagraphBackground3() {
  return (
    <div className="absolute bg-[#111411] h-[91px] left-[223.5px] right-0 top-[92px]" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-extrabold h-[34px] justify-center left-[16px] text-[#bcff3d] text-[28px] top-[37px] w-[89.558px]">
        <p className="leading-[normal]">12m</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center left-[16px] text-[11px] text-[rgba(255,255,255,0.4)] top-[64.5px] w-[82.246px]">
        <p className="leading-[normal]">garantie incluse</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.08)] h-[183px] leading-[0] left-[36px] overflow-clip right-[36px] rounded-[16px] top-[148.78px]" data-name="Overlay">
      <ParagraphBackground />
      <ParagraphBackground1 />
      <ParagraphBackground2 />
      <ParagraphBackground3 />
    </div>
  );
}

function Svg() {
  return (
    <div className="-translate-y-1/2 absolute left-[12px] size-[11px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_6_2299)" id="SVG">
          <path d={svgPaths.p33f571e0} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
          <path d={svgPaths.p1f658e00} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_6_2299">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid bottom-[40px] left-[36px] rounded-[8px] top-[355.78px] w-[146.61px]" data-name="Overlay+Border">
      <Svg />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] left-[29px] text-[12px] text-[rgba(255,255,255,0.55)] top-1/2 w-[103.97px]">
        <p className="leading-[normal]">Sans engagement</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="-translate-y-1/2 absolute left-[12px] size-[11px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="SVG">
          <path d={svgPaths.p3aae2680} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid bottom-[40px] left-[190.61px] rounded-[8px] top-[355.78px] w-[125.97px]" data-name="Overlay+Border">
      <Svg1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] left-[29px] text-[12px] text-[rgba(255,255,255,0.55)] top-1/2 w-[83.298px]">
        <p className="leading-[normal]">Achat sécurisé</p>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="-translate-y-1/2 absolute left-[12px] size-[11px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_6_1038)" id="SVG">
          <path d={svgPaths.p1f658e00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
          <path d={svgPaths.p105d7900} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_6_1038">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid bottom-[40px] left-[324.58px] rounded-[8px] top-[355.78px] w-[146.5px]" data-name="Overlay+Border">
      <Svg2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] left-[29px] text-[12px] text-[rgba(255,255,255,0.55)] top-1/2 w-[103.86px]">
        <p className="leading-[normal]">Réponse sous 24h</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute border border-[rgba(188,255,61,0.13)] border-solid h-[428.78px] left-[680px] overflow-clip right-[80px] rounded-[24px] top-[134.55px]" style={{ backgroundImage: "linear-gradient(134.976deg, rgba(188, 255, 61, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)" }} data-name="Background+Border">
      <div className="absolute right-[-80px] size-[250px] top-[-80px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 250 250\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(17.678 0 0 17.678 125 125)\\'><stop stop-color=\\'rgba(188,255,61,0.1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[12px] justify-center leading-[0] left-[36px] opacity-70 text-[#bcff3d] text-[10px] top-[46px] tracking-[1.6px] uppercase w-[200.856px]">
        <p className="leading-[normal]">Vroom · Recherche véhicule</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-extrabold h-[52.39px] justify-center leading-[0] left-[36px] text-[22px] text-white top-[94.19px] w-[399.9px]">
        <p className="mb-0">
          <span className="leading-[26.4px]">{`Accès à `}</span>
          <span className="leading-[26.4px] text-[#bcff3d]">tout le marché</span>
        </p>
        <p className="leading-[26.4px]">automobile</p>
      </div>
      <Overlay />
      <OverlayBorder4 />
      <OverlayBorder5 />
      <OverlayBorder6 />
    </div>
  );
}

function SectionHero() {
  return (
    <div className="absolute h-[705.88px] left-[80px] right-[80px] top-[145px]" data-name="Section - HERO">
      <OverlayBorder />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-extrabold h-[179.47px] justify-center leading-[0] left-[80px] text-[54px] text-white top-[206.74px] tracking-[-1.62px] w-[505.551px]">
        <p className="leading-[57.24px] mb-0">Décrivez le</p>
        <p className="leading-[57.24px] mb-0">véhicule</p>
        <p>
          <span className="leading-[57.24px]">{`de vos `}</span>
          <span className="leading-[57.24px] text-[#bcff3d]">rêves</span>
        </p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[73px] justify-center leading-[0] left-[80px] text-[16px] text-[rgba(255,255,255,0.55)] top-[351.5px] w-[505px]">
        <p className="leading-[26.4px] mb-0">Remplissez le formulaire ci-dessous. Notre équipe</p>
        <p className="leading-[26.4px] mb-0">analyse votre demande et vous contacte sous 24h avec</p>
        <p className="leading-[26.4px]">une sélection personnalisée de véhicules.</p>
      </div>
      <HorizontalBorder />
      <HorizontalBorder1 />
      <OverlayBorder3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[18px] justify-center leading-[0] left-[128px] text-[14px] text-[rgba(255,255,255,0.85)] top-[602.88px] w-[175.816px]">
        <p className="leading-[normal]">On vous rappelle sous 24h</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[128px] text-[12px] text-[rgba(255,255,255,0.4)] top-[624.88px] w-[384.07px]">
        <p className="leading-[18px]">Avec des propositions concrètes, des prix négociés et zéro surprise.</p>
      </div>
      <BackgroundBorder />
    </div>
  );
}

function Svg3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[15px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g clipPath="url(#clip0_6_318)" id="SVG">
          <path d={svgPaths.p2ad7a580} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.25" />
          <path d={svgPaths.p17be1d00} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.25" />
        </g>
        <defs>
          <clipPath id="clip0_6_318">
            <rect fill="white" height="15" width="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder7() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.1)] border border-[rgba(188,255,61,0.2)] border-solid h-[36px] left-[36px] rounded-[10px] top-[calc(50%-0.01px)] w-[37px]" data-name="Overlay+Border">
      <Svg3 />
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)] border-b border-solid h-[118.92px] left-0 right-0 top-0" data-name="top bar">
      <OverlayBorder7 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[85px] text-[14px] text-white top-[51.5px] w-[274px]">
        <p className="leading-[normal]">Demande reçue · Vroom Advisor</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[85px] text-[11px] text-[rgba(255,255,255,0.4)] top-[68.45px] w-[366px]">
        <p className="leading-[normal]">Notre équipe va analyser votre demande et vous contacter sous 24h.</p>
      </div>
    </div>
  );
}

function ParagraphBackground4() {
  return (
    <div className="absolute bg-[#111411] h-[73px] left-0 right-[436.67px] top-0" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center left-[20px] text-[11px] text-[rgba(255,255,255,0.25)] top-[24.5px] tracking-[0.88px] uppercase w-[53.162px]">
        <p className="leading-[normal]">Marque</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[18px] justify-center left-[20px] text-[14px] text-[rgba(255,255,255,0.85)] top-[46px] w-[79.06px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Volkswagen</p>
      </div>
    </div>
  );
}

function ParagraphBackground5() {
  return (
    <div className="absolute bg-[#111411] h-[73px] left-[218.33px] right-[218.34px] top-0" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center left-[20px] text-[11px] text-[rgba(255,255,255,0.25)] top-[24.5px] tracking-[0.88px] uppercase w-[51.968px]">
        <p className="leading-[normal]">Modèle</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[18px] justify-center left-[20px] text-[14px] text-[rgba(255,255,255,0.85)] top-[46px] w-[27.993px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Golf</p>
      </div>
    </div>
  );
}

function ParagraphBackground6() {
  return (
    <div className="absolute bg-[#111411] h-[73px] left-[436.66px] right-[0.01px] top-0" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center left-[20px] text-[11px] text-[rgba(255,255,255,0.25)] top-[24.5px] tracking-[0.88px] uppercase w-[41.556px]">
        <p className="leading-[normal]">Année</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[18px] justify-center left-[20px] text-[14px] text-[rgba(255,255,255,0.85)] top-[46px] w-[84.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">2022 – 2023</p>
      </div>
    </div>
  );
}

function ParagraphBackground7() {
  return (
    <div className="absolute bg-[#111411] h-[73px] left-0 right-[436.67px] top-[74px]" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center left-[20px] text-[11px] text-[rgba(255,255,255,0.25)] top-[24.5px] tracking-[0.88px] uppercase w-[37.192px]">
        <p className="leading-[normal]">Boîte</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[18px] justify-center left-[20px] text-[14px] text-[rgba(255,255,255,0.85)] top-[46px] w-[88.632px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Automatique</p>
      </div>
    </div>
  );
}

function ParagraphBackground8() {
  return (
    <div className="absolute bg-[#111411] h-[73px] left-[218.33px] right-[218.34px] top-[74px]" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center left-[20px] text-[11px] text-[rgba(255,255,255,0.25)] top-[24.5px] tracking-[0.88px] uppercase w-[74.334px]">
        <p className="leading-[normal]">Carburant</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[18px] justify-center left-[20px] text-[14px] text-[rgba(255,255,255,0.85)] top-[46px] w-[56.131px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Essence</p>
      </div>
    </div>
  );
}

function ParagraphBackground9() {
  return (
    <div className="absolute bg-[#111411] h-[73px] left-[436.66px] right-[0.01px] top-[74px]" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center left-[20px] text-[11px] text-[rgba(255,255,255,0.25)] top-[24.5px] tracking-[0.88px] uppercase w-[86.523px]">
        <p className="leading-[normal]">Kilométrage</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[18px] justify-center left-[20px] text-[14px] text-[rgba(255,255,255,0.85)] top-[46px] w-[86.995px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">{`< 60 000 km`}</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.08)] h-[147px] leading-[0] left-[36px] overflow-clip right-[16px] rounded-[16px] top-[64px]" data-name="Overlay">
      <ParagraphBackground4 />
      <ParagraphBackground5 />
      <ParagraphBackground6 />
      <ParagraphBackground7 />
      <ParagraphBackground8 />
      <ParagraphBackground9 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.pa521800} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder9() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.1)] border border-[rgba(188,255,61,0.2)] border-solid left-[20px] rounded-[10px] size-[40px] top-1/2" data-name="Overlay+Border">
      <Svg4 />
    </div>
  );
}

function OverlayBorder8() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.05)] border border-[rgba(188,255,61,0.14)] border-solid h-[77px] left-[36px] right-[16px] rounded-[14px] top-[227px]" data-name="Overlay+Border">
      <OverlayBorder9 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[76px] text-[11px] text-[rgba(255,255,255,0.4)] top-[22.5px] tracking-[0.88px] uppercase w-[111.292px]">
        <p className="leading-[normal]">Budget maximum</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-extrabold h-[26px] justify-center leading-[0] left-[76px] text-[#bcff3d] text-[22px] top-[46.4px] w-[191px]">
        <p className="leading-[normal]">20 000 €</p>
      </div>
    </div>
  );
}

function RecapVehiculeRecherch() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[337px] left-0 right-0 top-[521.36px]" data-name="récap véhicule recherch">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[12px] justify-center leading-[0] left-[56px] text-[10px] text-[rgba(255,255,255,0.25)] top-[calc(50%-130px)] tracking-[1.4px] uppercase w-[141px]">
        <p className="leading-[normal]">Véhicule recherché</p>
      </div>
      <Overlay1 />
      <OverlayBorder8 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="-translate-y-1/2 absolute left-[36px] size-[11px] top-[calc(50%-40.5px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="SVG">
          <path d={svgPaths.p20829f80} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
          <path d={svgPaths.p2b87e740} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
        </g>
      </svg>
    </div>
  );
}

function Svg6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[13px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="SVG">
          <path d={svgPaths.p2a8a0180} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
          <path d={svgPaths.p2be25f80} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder11() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.08)] border border-[rgba(188,255,61,0.14)] border-solid left-[18px] rounded-[9px] size-[34px] top-1/2" data-name="Overlay+Border">
      <Svg6 />
    </div>
  );
}

function OverlayBorder10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid inset-[54.4px_402px_27.6px_36px] rounded-[14px]" data-name="Overlay+Border">
      <OverlayBorder11 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[12px] justify-center leading-[0] left-[64px] text-[10px] text-[rgba(255,255,255,0.25)] top-[22.5px] tracking-[0.8px] uppercase w-[33.279px]">
        <p className="leading-[normal]">Email</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] left-[64px] text-[13px] text-[rgba(255,255,255,0.8)] top-[41px] w-[149.736px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">jean.dupont@email.com</p>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[13px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_6_1943)" id="SVG">
          <path d={svgPaths.p2873ba00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
        <defs>
          <clipPath id="clip0_6_1943">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder13() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.08)] border border-[rgba(188,255,61,0.14)] border-solid left-[18px] rounded-[9px] size-[34px] top-1/2" data-name="Overlay+Border">
      <Svg7 />
    </div>
  );
}

function OverlayBorder12() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid inset-[54px_16px_28px_379px] rounded-[14px]" data-name="Overlay+Border">
      <OverlayBorder13 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[12px] justify-center leading-[0] left-[64px] text-[10px] text-[rgba(255,255,255,0.25)] top-[22.5px] tracking-[0.8px] uppercase w-[66.221px]">
        <p className="leading-[normal]">Téléphone</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] left-[64px] text-[13px] text-[rgba(255,255,255,0.8)] top-[41px] w-[106.444px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">+33 6 12 34 56 78</p>
      </div>
    </div>
  );
}

function Coordonnees() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[151px] left-0 right-0 top-[858.36px]" data-name="coordonnées">
      <Svg5 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[12px] justify-center leading-[0] left-[56px] text-[10px] text-[rgba(255,255,255,0.25)] top-[calc(50%-41px)] tracking-[1.4px] uppercase w-[183px]">
        <p className="leading-[normal]">Coordonnées de contact</p>
      </div>
      <OverlayBorder10 />
      <OverlayBorder12 />
    </div>
  );
}

function Svg8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-101.03px)] size-[15px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p11cf9000} id="Vector" stroke="var(--stroke-0, #0C0D0C)" strokeWidth="1.25" />
          <path d={svgPaths.p20471ed0} id="Vector_2" stroke="var(--stroke-0, #0C0D0C)" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bg-[#bcff3d] inset-[28px_359px_61px_36px] rounded-[12px]" data-name="Link">
      <Svg8 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[calc(50%+12.18px)] text-[#0c0d0c] text-[14px] text-center top-1/2 w-[193.41px]">
        <p className="leading-[normal]">Renvoyer la confirmation</p>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-68.87px)] size-[14px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p30e96b00} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.55" strokeWidth="1.16667" />
          <path d={svgPaths.p13bcd800} id="Vector_2" stroke="var(--stroke-0, white)" strokeOpacity="0.55" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  const navigate = useNavigate();
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid inset-[28px_16px_61px_377px] rounded-[12px] cursor-pointer" data-name="Link" onClick={() => navigate("/acheter-votre-vehicule")}>
      <Svg9 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[calc(50%+11.7px)] text-[14px] text-[rgba(255,255,255,0.55)] text-center top-1/2 w-[129.15px]">
        <p className="leading-[normal]">Nouvelle recherche</p>
      </div>
    </div>
  );
}

function Link2() {
  const navigate = useNavigate();
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[13px] left-[calc(50%-113.92px)] top-[calc(50%+27px)] w-[113.95px] cursor-pointer" data-name="Link" onClick={() => navigate("/acheter-votre-vehicule")}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[calc(50%+1.92px)] text-[#bcff3d] text-[11px] text-center top-[6.14px] w-[118px]">
        <p className="leading-[normal]">Modifier ma demande</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[13px] left-[calc(50%+13.17px)] top-[calc(50%+27px)] w-[109.89px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[calc(50%+1.83px)] text-[#bcff3d] text-[11px] text-center top-[6.14px] w-[114px]">
        <p className="leading-[normal]">Annuler ma demande</p>
      </div>
    </div>
  );
}

function Link4() {
  const navigate = useNavigate();
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[13px] left-[calc(50%+127.07px)] top-[calc(50%+27px)] w-[87.61px] cursor-pointer" data-name="Link" onClick={() => navigate("/")}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[calc(50%+1.43px)] text-[#bcff3d] text-[11px] text-center top-[6.14px] w-[91px]">
        <p className="leading-[normal]">{`Retour à l'accueil`}</p>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="absolute h-[139px] left-0 right-0 top-[1009.36px]" data-name="actions">
      <Link />
      <Link1 />
      <Link2 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[calc(50%-40.5px)] text-[11px] text-[rgba(255,255,255,0.25)] text-center top-[96.5px] w-[3px]">
        <p className="leading-[normal]">·</p>
      </div>
      <Link3 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[calc(50%+88px)] text-[11px] text-[rgba(255,255,255,0.25)] text-center top-[96.5px] w-[4px]">
        <p className="leading-[normal]">·</p>
      </div>
      <Link4 />
    </div>
  );
}

function Svg10() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[28px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="SVG">
          <path d={svgPaths.p1c099080} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="2.33333" />
          <path d={svgPaths.p39589180} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder14() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.12)] border border-[rgba(188,255,61,0.28)] border-solid inset-[75.84px_334px_257.6px_351px] rounded-[34px]" data-name="Overlay+Border">
      <Svg10 />
    </div>
  );
}

function Svg11() {
  return (
    <div className="-translate-y-1/2 absolute left-[18px] size-[12px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_6_1687)" id="SVG">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #BCFF3D)" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" />
        </g>
        <defs>
          <clipPath id="clip0_6_1687">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder15() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(188,255,61,0.08)] border border-[rgba(188,255,61,0.18)] border-solid h-[33px] left-[calc(50%+7.5px)] rounded-[100px] top-[324.22px] w-[477px]" data-name="Overlay+Border">
      <Svg11 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-[calc(50%+10.78px)] text-[#bcff3d] text-[12px] text-center top-1/2 w-[404.557px]">
        <p className="leading-[normal]">Notre équipe vous contacte sous 24h avec une sélection personnalisée</p>
      </div>
    </div>
  );
}

function SuccessHero() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[402.44px] left-0 overflow-clip right-0 top-[118.92px]" data-name="success hero">
      <div className="-translate-x-1/2 absolute h-[300px] left-[calc(50%+7.5px)] top-[-79.78px] w-[515px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 515 300\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(36.416 0 0 21.213 257.5 150)\\'><stop stop-color=\\'rgba(60,110,5,0.22)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(60,110,5,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
      <div className="absolute border border-[rgba(188,255,61,0.16)] border-solid inset-[61.84px_324px_243.6px_340px] rounded-[48px]" data-name="Border" />
      <div className="absolute border border-[rgba(188,255,61,0.16)] border-solid inset-[61.84px_324px_243.6px_340px] rounded-[48px]" data-name="Border" />
      <div className="absolute border border-[rgba(188,255,61,0.16)] border-solid inset-[61.84px_324px_243.6px_340px] rounded-[48px]" data-name="Border" />
      <OverlayBorder14 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-extrabold h-[34px] justify-center leading-[0] left-[calc(50%+7.5px)] text-[28px] text-center text-white top-[200.22px] w-[503px]">
        <p>
          <span className="leading-[32.2px]">{`Demande `}</span>
          <span className="leading-[32.2px] text-[#bcff3d]">bien reçue !</span>
        </p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[69px] justify-center leading-[0] left-[calc(50%+8px)] text-[15px] text-[rgba(255,255,255,0.55)] text-center top-[264.72px] w-[506px]">
        <p className="mb-0">
          <span className="leading-[24.75px]">{`Merci `}</span>
          <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24.75px] text-[rgba(255,255,255,0.85)]">Jean Dupont</span>
          <span className="leading-[24.75px]">. Votre recherche de véhicule a bien été transmise à</span>
        </p>
        <p className="leading-[24.75px] mb-0">notre équipe. Un email de confirmation a été envoyé à</p>
        <p>
          <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24.75px] text-[rgba(255,255,255,0.85)]">jean.dupont@email.com</span>
          <span className="leading-[24.75px]">.</span>
        </p>
      </div>
      <OverlayBorder15 />
    </div>
  );
}

function ConfirmationCard() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[1150px] left-[81px] overflow-clip right-[429px] rounded-[28px] top-[47.24px]" data-name="CONFIRMATION CARD">
      <TopBar />
      <RecapVehiculeRecherch />
      <Coordonnees />
      <Actions />
      <SuccessHero />
    </div>
  );
}

function Svg12() {
  return (
    <div className="absolute left-[24px] size-[13px] top-[106px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="SVG">
          <path d={svgPaths.p2a8a0180} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
          <path d={svgPaths.p2be25f80} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Svg13() {
  return (
    <div className="absolute left-[24px] size-[13px] top-[150px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_6_1251)" id="SVG">
          <path d={svgPaths.p1d11280} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
          <path d={svgPaths.p2fb53000} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
        <defs>
          <clipPath id="clip0_6_1251">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder16() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.05)] border border-[rgba(188,255,61,0.15)] border-solid h-[205px] left-[880px] overflow-clip right-[40px] rounded-[20px] top-[445.24px]" data-name="Overlay+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[46px] text-[#bcff3d] text-[14px] top-[calc(50%-69px)] w-[114.326px]">
        <p className="leading-[normal]">Une question ?</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[47px] text-[10px] text-[rgba(188,255,61,0.6)] top-[65.5px] tracking-[0.8px] uppercase w-[119px]">
        <p className="leading-[normal]">Téléphone</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[82.5px] w-[115.378px]">
        <p className="leading-[normal]">06 19 93 37 65</p>
      </div>
      <Svg12 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[47px] text-[10px] text-[rgba(188,255,61,0.6)] top-[109.5px] tracking-[0.8px] uppercase w-[32.706px]">
        <p className="leading-[normal]">Email</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[126.11px] w-[164px]">
        <p className="leading-[normal]">contact@vroomparis.fr</p>
      </div>
      <Svg13 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[47px] text-[10px] text-[rgba(188,255,61,0.6)] top-[153.5px] tracking-[0.8px] uppercase w-[144px]">
        <p className="leading-[normal]">Disponibilité</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.7)] top-[170.5px] w-[122.78px]">
        <p className="leading-[normal]">Lun – Sam · 9h à 19h</p>
      </div>
      <div className="absolute bottom-[-30px] right-[-30px] size-[120px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 120 120\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(8.4853 0 0 8.4853 60 60)\\'><stop stop-color=\\'rgba(188,255,61,0.07)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
      <div className="absolute inset-[calc(29.08%-0.42px)_calc(89.72%+0.79px)_calc(65.07%+0.3px)_calc(6.94%-0.86px)]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p355422f2} fill="var(--fill-0, #BCFF3D)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[calc(12.98%-0.74px)_calc(90.56%+0.81px)_calc(81.17%+0.62px)_calc(6.11%-0.88px)]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p355422f2} fill="var(--fill-0, #BCFF3D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg14() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[14px] top-[calc(50%-63px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_6_1643)" id="SVG">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.16667" />
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_6_1643">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg15() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[13px] top-[calc(50%-22.5px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_6_1639)" id="SVG">
          <path d={svgPaths.p3a487780} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
          <path d={svgPaths.p1d11280} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
        <defs>
          <clipPath id="clip0_6_1639">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg16() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[13px] top-[calc(50%+11.5px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_6_1639)" id="SVG">
          <path d={svgPaths.p3a487780} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
          <path d={svgPaths.p1d11280} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
        <defs>
          <clipPath id="clip0_6_1639">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg17() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[13px] top-[calc(50%+37.5px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_6_1639)" id="SVG">
          <path d={svgPaths.p3a487780} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
          <path d={svgPaths.p1d11280} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
        <defs>
          <clipPath id="clip0_6_1639">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg18() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[13px] top-[calc(50%+63.5px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_6_1639)" id="SVG">
          <path d={svgPaths.p3a487780} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
          <path d={svgPaths.p1d11280} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
        <defs>
          <clipPath id="clip0_6_1639">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid h-[193px] left-0 overflow-clip right-[-38px] rounded-[20px] top-[0.12px]" data-name="Background+Border">
      <Svg14 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[46px] text-[14px] text-white top-[calc(50%-63px)] w-[178.558px]">
        <p className="leading-[normal]">Ce qui se passe ensuite</p>
      </div>
      <Svg15 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%-30.5px)] w-[239px]">
        <p className="leading-[normal]">Votre demande est transmise à notre</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%-14.5px)] w-[44.104px]">
        <p className="leading-[normal]">équipe</p>
      </div>
      <Svg16 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%+11.5px)] w-[187.816px]">
        <p className="leading-[normal]">Analyse de tout le marché auto</p>
      </div>
      <Svg17 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%+37.5px)] w-[205.74px]">
        <p className="leading-[normal]">Sélection personnalisée sous 24h</p>
      </div>
      <Svg18 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%+63.5px)] w-[241.828px]">
        <p className="leading-[normal]">On vous rappelle avec nos propositions</p>
      </div>
      <div className="absolute bottom-[-30px] right-[-30px] size-[100px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(7.0711 0 0 7.0711 50 50)\\'><stop stop-color=\\'rgba(188,255,61,0.07)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
    </div>
  );
}

function Svg19() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[14px] top-[calc(50%-55px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p1c47d580} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Svg20() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[13px] top-[calc(50%-22.5px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_6_1639)" id="SVG">
          <path d={svgPaths.p3a487780} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
          <path d={svgPaths.p1d11280} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
        <defs>
          <clipPath id="clip0_6_1639">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg21() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[13px] top-[calc(50%+3.5px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_6_1639)" id="SVG">
          <path d={svgPaths.p3a487780} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
          <path d={svgPaths.p1d11280} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
        <defs>
          <clipPath id="clip0_6_1639">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg22() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[13px] top-[calc(50%+29.5px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_6_1639)" id="SVG">
          <path d={svgPaths.p3a487780} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
          <path d={svgPaths.p1d11280} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
        <defs>
          <clipPath id="clip0_6_1639">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg23() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[13px] top-[calc(50%+55.5px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_6_1639)" id="SVG">
          <path d={svgPaths.p3a487780} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
          <path d={svgPaths.p1d11280} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
        <defs>
          <clipPath id="clip0_6_1639">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid h-[177px] left-0 overflow-clip right-[-38px] rounded-[20px] top-[207.12px]" data-name="Background+Border">
      <Svg19 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[46px] text-[14px] text-white top-[calc(50%-55px)] w-[106.164px]">
        <p className="leading-[normal]">Nos garanties</p>
      </div>
      <Svg20 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%-22.5px)] w-[196.332px]">
        <p className="leading-[normal]">100% gratuit, sans engagement</p>
      </div>
      <Svg21 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%+3.5px)] w-[223.854px]">
        <p className="leading-[normal]">Garantie 12 mois sur chaque véhicule</p>
      </div>
      <Svg22 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%+29.5px)] w-[211.004px]">
        <p className="leading-[normal]">Contrôle 100 points avant livraison</p>
      </div>
      <Svg23 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%+55.5px)] w-[187.646px]">
        <p className="leading-[normal]">Livraison à domicile disponible</p>
      </div>
      <div className="absolute bottom-[-30px] right-[-30px] size-[100px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(7.0711 0 0 7.0711 50 50)\\'><stop stop-color=\\'rgba(188,255,61,0.07)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="h-[591px] pointer-events-auto sticky top-0 w-[320px]" data-name="SIDEBAR">
      <BackgroundBorder1 />
      <BackgroundBorder2 />
    </div>
  );
}

function FormSection() {
  return (
    <div className="absolute h-[1241px] left-[80px] right-[80px] top-[851px]" data-name="FORM SECTION">
      <div className="absolute bg-[rgba(255,255,255,0.08)] h-px left-[80px] right-[80px] top-0" data-name="Horizontal Divider" />
      <ConfirmationCard />
      <OverlayBorder16 />
      <div className="absolute bottom-0 h-[1196.88px] left-[880px] pointer-events-none top-[44.12px]">
        <Sidebar />
      </div>
    </div>
  );
}

function Svg24() {
  return (
    <div className="-translate-y-1/2 absolute left-[16px] size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p2a44c680} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#c8ec66] h-[40px] left-[calc(50%-341.34px)] rounded-[8px] top-[52px] w-[162.76px]" data-name="Link">
      <Svg24 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+12.18px)] not-italic text-[16px] text-black text-center top-[calc(50%-0.25px)] w-[107.125px]">
        <p className="leading-[24px]">06 19 93 37 65</p>
      </div>
    </div>
  );
}

function Svg25() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-84.63px)] size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p17070980} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p120c8200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute h-[24px] left-[16px] right-[698.67px] top-[116px]" data-name="Link">
      <Svg25 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+12.16px)] not-italic text-[16px] text-center text-white top-[calc(50%-0.25px)] w-[161.595px]">
        <p className="leading-[24px]">contact@vroomparis.fr</p>
      </div>
    </div>
  );
}

function Svg26() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-[calc(50%-483.93px)] top-[calc(50%+4.5px)] w-[14.15px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.15 16.0018">
        <g id="SVG">
          <path d={svgPaths.p274fd670} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17917" />
          <path d={svgPaths.p1c743f00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17917" />
        </g>
      </svg>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-0" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[127.557px]">
        <p className="leading-[24px]">À propos de nous</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-[32px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[92.182px]">
        <p className="leading-[24px]">Nos services</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-[64px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.14px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[138.727px]">
        <p className="leading-[24px]">Nos emplacements</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-[96px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[31.227px]">
        <p className="leading-[24px]">FAQ</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute h-[120px] left-[357.33px] right-[357.33px] top-[116px]" data-name="Nav">
      <Link7 />
      <Link8 />
      <Link9 />
      <Link10 />
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-0" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[189.407px]">
        <p className="leading-[24px]">Politique de confidentialité</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-[32px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[151.447px]">
        <p className="leading-[24px]">Conditions générales</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-[64px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.15px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[152.928px]">
        <p className="leading-[24px]">Politique des cookies</p>
      </div>
    </div>
  );
}

function Nav1() {
  return (
    <div className="absolute h-[88px] left-[698.66px] right-[16px] top-[52px]" data-name="Nav">
      <Link11 />
      <Link12 />
      <Link13 />
    </div>
  );
}

function Svg27() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p30c8d680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link14() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[133px] left-[calc(50%+305.33px)] top-[164px] w-[20px]" data-name="Link">
      <Svg27 />
    </div>
  );
}

function Svg28() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p4b98700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p19f4a800} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M14.5833 5.41667H14.5917" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link15() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[133px] left-[calc(50%+341.33px)] top-[164px] w-[20px]" data-name="Link">
      <Svg28 />
    </div>
  );
}

function Svg29() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p2ffa5d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link16() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[133px] left-[calc(50%+377.33px)] top-[164px] w-[20px]" data-name="Link">
      <Svg29 />
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="absolute border-[#1f2937] border-solid border-t h-[49px] left-[16px] right-[16px] top-[268px]" data-name="HorizontalBorder">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[#9ca3af] text-[16px] text-center top-[35.75px] w-[300.597px]">
        <p className="leading-[24px]">© 2025 Vroom Paris. Tous droits réservés.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[317px] left-[208px] right-[208px] top-[48px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%-341.1px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[175.161px]">
        <p className="leading-[28px]">Qu’attendez-vous ?</p>
      </div>
      <Link5 />
      <Link6 />
      <Svg26 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[42.5px] justify-center leading-[0] left-[calc(50%-330.17px)] not-italic text-[16px] text-center text-white top-[175.75px] w-[284.77px]">
        <p className="leading-[24px] mb-0">75 Avenue des Champs-Élysées, 75008</p>
        <p className="leading-[24px]">Paris</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%+0.26px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[215.174px]">
        <p className="leading-[28px]">Informations générales :</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[42.5px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[#9ca3af] text-[16px] text-center top-[75.75px] w-[225.4px]">
        <p className="leading-[24px] mb-0">Bienvenue chez Vroom Paris, la</p>
        <p className="leading-[24px]">concession automobile.</p>
      </div>
      <Nav />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%+341.55px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[152.536px]">
        <p className="leading-[28px]">Mentions légales</p>
      </div>
      <Nav1 />
      <Link14 />
      <Link15 />
      <Link16 />
      <HorizontalBorder2 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#181818] h-[413px] left-0 right-0 top-[2171px]" data-name="Footer">
      <Container />
    </div>
  );
}

function MobileHero() {
  return (
    <section className="mx-auto max-w-[760px] px-5 pt-24 sm:px-8 sm:pt-28">
      <div className="rounded-[24px] border border-[rgba(188,255,61,0.16)] bg-[linear-gradient(145deg,rgba(188,255,61,0.1),rgba(255,255,255,0.02))] p-5 sm:p-6">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(188,255,61,0.22)] bg-[rgba(188,255,61,0.09)] px-3 py-2 text-[10px] font-semibold uppercase tracking-[1.2px] text-[#bcff3d]">
          <span className="size-1.5 rounded-full bg-[#bcff3d]" />
          Service personnalisé · Réponse sous 24h
        </div>
        <h1 className="font-['Syne',sans-serif] text-[34px] leading-[1.02] tracking-[-1.2px] text-white">
          Décrivez le véhicule
          <br />
          de vos <span className="text-[#bcff3d]">rêves</span>
        </h1>
        <p className="mt-4 text-[14px] leading-6 text-[rgba(255,255,255,0.62)]">
          Remplissez le formulaire ci-dessous. Notre équipe analyse votre demande et vous contacte sous 24h avec une sélection personnalisée de véhicules.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {[
            ["500+", "véhicules en stock"],
            ["24h", "délai de réponse"],
            ["100%", "gratuit"],
            ["12m", "garantie incluse"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-[16px] bg-[#111411] px-4 py-4">
              <div className="font-['Syne',sans-serif] text-[26px] text-[#bcff3d]">{value}</div>
              <div className="mt-1 text-[11px] text-[rgba(255,255,255,0.42)]">{label}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-4">
          {[
            ["01", "Vous décrivez votre projet", "Marque, modèle, budget, préférences."],
            ["02", "Notre équipe sélectionne pour vous", "Nous analysons tout le marché auto."],
            ["03", "On vous rappelle sous 24h", "Avec des propositions concrètes et négociées."],
          ].map(([index, title, desc]) => (
            <div key={index} className="flex gap-3 border-b border-[rgba(255,255,255,0.08)] pb-4 last:border-b-0 last:pb-0">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-[12px] border border-[rgba(188,255,61,0.2)] bg-[rgba(188,255,61,0.09)] text-[11px] font-bold text-[#bcff3d]">
                {index}
              </div>
              <div>
                <div className="text-[14px] font-semibold text-[rgba(255,255,255,0.88)]">{title}</div>
                <div className="mt-1 text-[12px] leading-5 text-[rgba(255,255,255,0.42)]">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileSidebarCards() {
  return (
    <div className="space-y-3">
      <div className="rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[#111411] p-5">
        <div className="font-['Syne',sans-serif] text-[16px] text-white">Ce qui se passe ensuite</div>
        <div className="mt-4 space-y-3 text-[13px] text-[rgba(255,255,255,0.58)]">
          <div>Votre demande est transmise à notre équipe</div>
          <div>Analyse de tout le marché auto</div>
          <div>Sélection personnalisée sous 24h</div>
          <div>On vous rappelle avec nos propositions</div>
        </div>
      </div>
      <div className="rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[#111411] p-5">
        <div className="font-['Syne',sans-serif] text-[16px] text-white">Nos garanties</div>
        <div className="mt-4 space-y-3 text-[13px] text-[rgba(255,255,255,0.58)]">
          <div>100% gratuit, sans engagement</div>
          <div>Garantie 12 mois sur chaque véhicule</div>
          <div>Contrôle 100 points avant livraison</div>
          <div>Livraison à domicile disponible</div>
        </div>
      </div>
      <div className="rounded-[20px] border border-[rgba(188,255,61,0.15)] bg-[rgba(188,255,61,0.05)] p-5">
        <div className="font-['Syne',sans-serif] text-[16px] text-[#bcff3d]">Une question ?</div>
        <div className="mt-4 space-y-3 text-[13px] text-[rgba(255,255,255,0.66)]">
          <div>06 19 93 37 65</div>
          <div>contact@vroomparis.fr</div>
          <div>Lun – Sam · 9h à 19h</div>
        </div>
      </div>
    </div>
  );
}

function MobileConfirmationSection() {
  const navigate = useNavigate();

  return (
    <section className="px-4 py-8">
      <div className="mx-auto max-w-[760px] border-t border-[rgba(255,255,255,0.08)] px-5 pt-6 sm:px-8">
        <div className="rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] overflow-hidden">
          <div className="border-b border-[rgba(255,255,255,0.08)] px-5 py-5">
            <div className="flex items-start gap-3">
              <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] border border-[rgba(188,255,61,0.18)] bg-[rgba(188,255,61,0.08)]">
                <div className="text-[18px]">🚚</div>
              </div>
              <div>
                <div className="font-['Syne',sans-serif] text-[18px] text-white">Demande reçue · Vroom Advisor</div>
                <div className="mt-2 text-[13px] leading-5 text-[rgba(255,255,255,0.45)]">
                  Notre équipe va analyser votre demande et vous contacter sous 24h.
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-[rgba(255,255,255,0.08)] px-5 py-8 text-center">
            <div className="mx-auto flex size-[68px] items-center justify-center rounded-full border border-[rgba(188,255,61,0.28)] bg-[rgba(188,255,61,0.12)] text-[28px]">
              ✓
            </div>
            <h2 className="mt-6 font-['Syne',sans-serif] text-[28px] leading-[1.15] text-white">
              Demande <span className="text-[#bcff3d]">bien reçue !</span>
            </h2>
            <p className="mt-4 text-[15px] leading-[24px] text-[rgba(255,255,255,0.55)]">
              Merci <span className="font-medium text-[rgba(255,255,255,0.85)]">Jean Dupont</span>. Votre recherche de véhicule a bien été transmise à notre équipe. Un email de confirmation a été envoyé à <span className="font-medium text-[rgba(255,255,255,0.85)]">jean.dupont@email.com</span>.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[rgba(188,255,61,0.18)] bg-[rgba(188,255,61,0.08)] px-4 py-2 text-[12px] font-medium text-[#bcff3d]">
              <span>⏱️</span>
              Notre équipe vous contacte sous 24h avec une sélection personnalisée
            </div>
          </div>

          <div className="space-y-6 px-5 py-6">
            <div>
              <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[1.4px] text-[rgba(255,255,255,0.28)]">
                <span className="text-[#bcff3d]">🚘</span>
                <span>Véhicule recherché</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["Marque", "Volkswagen"],
                  ["Modèle", "Golf"],
                  ["Année", "2022 – 2023"],
                  ["Boîte", "Automatique"],
                  ["Carburant", "Essence"],
                  ["Kilométrage", "< 60 000 km"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[14px] bg-[#111411] px-4 py-4">
                    <div className="text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.25)]">{label}</div>
                    <div className="mt-2 text-[14px] font-semibold text-[rgba(255,255,255,0.85)]">{value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-[14px] border border-[rgba(188,255,61,0.14)] bg-[rgba(188,255,61,0.05)] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-[10px] border border-[rgba(188,255,61,0.2)] bg-[rgba(188,255,61,0.1)] text-[#bcff3d]">💶</div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.4)]">Budget maximum</div>
                    <div className="mt-1 font-['Syne',sans-serif] text-[22px] text-[#bcff3d]">20 000 €</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[1.4px] text-[rgba(255,255,255,0.28)]">
                <span className="text-[#bcff3d]">📇</span>
                <span>Coordonnées de contact</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[14px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-4">
                  <div className="text-[11px] uppercase tracking-[0.8px] text-[rgba(255,255,255,0.25)]">Email</div>
                  <div className="mt-2 text-[13px] font-medium text-[rgba(255,255,255,0.8)]">jean.dupont@email.com</div>
                </div>
                <div className="rounded-[14px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-4">
                  <div className="text-[11px] uppercase tracking-[0.8px] text-[rgba(255,255,255,0.25)]">Téléphone</div>
                  <div className="mt-2 text-[13px] font-medium text-[rgba(255,255,255,0.8)]">+33 6 12 34 56 78</div>
                </div>
              </div>
            </div>

            <div className="space-y-3 border-t border-[rgba(255,255,255,0.08)] pt-5">
              <button className="h-[54px] w-full rounded-[14px] bg-[#bcff3d] font-['Syne',sans-serif] text-[15px] font-bold text-[#0c0d0c]">
                Renvoyer la confirmation
              </button>
              <button
                type="button"
                onClick={() => navigate("/acheter-votre-vehicule")}
                className="h-[54px] w-full rounded-[14px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] text-[14px] text-[rgba(255,255,255,0.6)]"
              >
                Nouvelle recherche
              </button>
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-center text-[11px] text-[#bcff3d]">
                <button type="button" onClick={() => navigate("/acheter-votre-vehicule")}>Modifier ma demande</button>
                <span className="text-[rgba(255,255,255,0.25)]">·</span>
                <button type="button">Annuler ma demande</button>
                <span className="text-[rgba(255,255,255,0.25)]">·</span>
                <button type="button" onClick={() => navigate("/")}>Retour à l&apos;accueil</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <MobileSidebarCards />
        </div>
      </div>
    </section>
  );
}

function MobileFooter() {
  return (
    <footer className="mt-8 border-t border-[rgba(255,255,255,0.08)] py-8">
      <div className="mx-auto max-w-[760px] px-5 sm:px-8">
        <div className="space-y-8 rounded-[24px] bg-[#111411] p-5 sm:p-6">
          <div>
            <div className="font-['Wix_Madefor_Display:Regular',sans-serif] text-[20px] text-white">Qu’attendez-vous ?</div>
            <a href="tel:0619933765" className="mt-4 inline-flex items-center rounded-[10px] bg-[#c8ec66] px-4 py-3 text-[15px] text-black">
              06 19 93 37 65
            </a>
            <div className="mt-4 text-[15px] text-white">contact@vroomparis.fr</div>
            <div className="mt-4 text-[15px] leading-6 text-white">75 Avenue des Champs-Élysées, 75008 Paris</div>
          </div>
          <div>
            <div className="font-['Wix_Madefor_Display:Regular',sans-serif] text-[20px] text-white">Informations générales</div>
            <div className="mt-3 text-[15px] leading-6 text-[#9ca3af]">Bienvenue chez Vroom Paris, la concession automobile.</div>
            <div className="mt-4 space-y-2 text-[15px] text-white">
              <div>À propos de nous</div>
              <div>Nos services</div>
              <div>Nos emplacements</div>
              <div>FAQ</div>
            </div>
          </div>
          <div>
            <div className="font-['Wix_Madefor_Display:Regular',sans-serif] text-[20px] text-white">Mentions légales</div>
            <div className="mt-4 space-y-2 text-[15px] text-white">
              <div>Politique de confidentialité</div>
              <div>Conditions générales</div>
              <div>Politique des cookies</div>
            </div>
          </div>
          <div className="border-t border-[#1f2937] pt-4 text-center text-[14px] text-[#9ca3af]">
            © 2025 Vroom Paris. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}

function MobilePage() {
  return (
    <div className="relative overflow-hidden xl:hidden">
      <div className="pointer-events-none absolute left-1/2 top-[-120px] h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(188,255,61,0.18)_0%,rgba(188,255,61,0)_68%)]" />
      <MobileHero />
      <MobileConfirmationSection />
      <MobileFooter />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[1.35%_46.71%_96.34%_46.74%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94.4211 59.6792">
        <g id="Group 72">
          <g id="Vector">
            <mask fill="white" id="path-1-inside-1_6_286">
              <path d={svgPaths.p7bf8d00} />
            </mask>
            <path d={svgPaths.p7bf8d00} fill="var(--fill-0, white)" mask="url(#path-1-inside-1_6_286)" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </g>
          <path d={svgPaths.p23d76a00} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, white)" />
          <path d={svgPaths.p15f5b900} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[56.31%_85.35%_43.37%_14.03%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 8.3942">
        <g id="Group 79">
          <path d={svgPaths.p1180e180} fill="var(--fill-0, #BCFF3D)" id="Vector" />
          <g id="Group 78">
            <path d={svgPaths.p6df80} fill="var(--fill-0, #BCFF3D)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Etape2FormulaireAcheterVotreVehicule() {
  const [searchParams] = useSearchParams();
  const requestId = searchParams.get("requestId");
  const [request, setRequest] = useState<BuyRequest | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!requestId) return;

    let cancelled = false;

    const loadRequest = async () => {
      setIsLoading(true);
      setError("");

      try {
        const response = await requests.getBuy(requestId);
        if (!cancelled) {
          setRequest(response);
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError instanceof Error ? loadError.message : "Impossible de charger le récapitulatif.");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    void loadRequest();

    return () => {
      cancelled = true;
    };
  }, [requestId]);

  return (
    <div className="bg-[#181818] relative min-h-screen size-full" data-name="Etape 2 formulaire acheter votre vehicule">
      <ConfirmationNotice requestId={requestId} request={request} isLoading={isLoading} error={error} />
      <MobilePage />
      <div className="relative mx-auto hidden min-h-[2584px] w-[1440px] xl:block">
        <div className="absolute h-[742.87px] left-[-464px] top-[-197px] w-[2664.782px]" data-name="Union">
          <div className="absolute inset-[-26.92%_-7.51%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3064.78 1142.87">
              <g filter="url(#filter0_f_6_2618)" id="Union">
                <path d={svgPaths.p368f3900} fill="url(#paint0_linear_6_2618)" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1142.87" id="filter0_f_6_2618" width="3064.78" x="-7.48091e-06" y="3.20925e-06">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_6_2618" stdDeviation="100" />
                </filter>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_2618" x1="35.5207" x2="1147.95" y1="742.236" y2="-1039.64">
                  <stop stopColor="#C8EC66" />
                  <stop offset="0.25" stopColor="#D4FF60" />
                  <stop offset="0.5" stopColor="#72F9D8" />
                  <stop offset="0.75" stopColor="#FCFFB4" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <SectionHero />
        <FormSection />
        <Footer />
        <Group />
        <Group1 />
      </div>
    </div>
  );
}
