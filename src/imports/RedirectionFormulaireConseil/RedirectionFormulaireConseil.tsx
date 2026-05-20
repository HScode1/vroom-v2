import { useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import { useNavigate, useSearchParams } from "react-router";
import svgPaths from "./svg-r4glvpdzde";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  budget: string;
  vehicleType: string;
  project: string;
};

const DEFAULT_FORM: FormState = {
  firstName: "Jean",
  lastName: "Dupont",
  email: "jean.dupont@email.com",
  phone: "06 00 00 00 00",
  budget: "",
  vehicleType: "",
  project: "Ex : je cherche un SUV familial fiable, idéalement diesel, kilométrage < 80 000 km, pour usage quotidien ville + autoroute…",
};

const BUDGET_OPTIONS = [
  { label: "Sélectionner...", value: "" },
  { label: "Moins de 10 000 €", value: "moins-10k" },
  { label: "10 000 € - 20 000 €", value: "10k-20k" },
  { label: "20 000 € - 35 000 €", value: "20k-35k" },
  { label: "35 000 € - 50 000 €", value: "35k-50k" },
  { label: "Plus de 50 000 €", value: "plus-50k" },
];

const VEHICLE_OPTIONS = [
  { label: "Sélectionner...", value: "" },
  { label: "Citadine", value: "citadine" },
  { label: "Berline", value: "berline" },
  { label: "SUV / 4x4", value: "suv" },
  { label: "Break", value: "break" },
  { label: "Monospace", value: "monospace" },
  { label: "Utilitaire", value: "utilitaire" },
];

function formatBookingDate(value: string | null) {
  if (!value) {
    return "Ven. 13 mars 2026";
  }

  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) {
    return "Ven. 13 mars 2026";
  }

  const weekday = new Intl.DateTimeFormat("fr-FR", { weekday: "short" }).format(date);
  const day = new Intl.DateTimeFormat("fr-FR", { day: "2-digit" }).format(date);
  const month = new Intl.DateTimeFormat("fr-FR", { month: "long" }).format(date);
  const year = new Intl.DateTimeFormat("fr-FR", { year: "numeric" }).format(date);
  const formattedWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);
  return `${formattedWeekday} ${day} ${month} ${year}`;
}

function formatBookingMode(value: string | null) {
  switch (value) {
    case "telephone":
      return "Téléphone";
    case "whatsapp":
      return "WhatsApp";
    case "visio":
    default:
      return "Visio";
  }
}

function Group() {
  return (
    <div className="absolute inset-[1.46%_46.71%_96.06%_46.74%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94.4211 59.6792">
        <g>
          <g>
            <mask fill="white" id="path-1-inside-1_6_286">
              <path d={svgPaths.p7bf8d00} />
            </mask>
            <path d={svgPaths.p7bf8d00} fill="white" mask="url(#path-1-inside-1_6_286)" stroke="white" strokeWidth="2" />
          </g>
          <path d={svgPaths.p23d76a00} fill="white" stroke="white" />
          <path d={svgPaths.p15f5b900} fill="white" stroke="white" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute font-['Syne:ExtraBold',sans-serif] font-extrabold h-[245.88px] leading-[0] left-[161px] right-[159px] text-[58px] text-center top-[282px] tracking-[-1.74px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[131.47px] justify-center left-[calc(50%+0.92px)] text-white top-[60.74px] w-[660.289px]">
        <p className="leading-[61.48px] mb-0">Réservez votre</p>
        <p className="leading-[61.48px]">consultation</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[131.47px] justify-center left-[calc(50%+0.94px)] text-[#bcff3d] top-[183.68px] w-[622.564px]">
        <p className="leading-[61.48px] mb-0">automobile</p>
        <p className="leading-[61.48px]">personnalisée</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.p26763380} stroke="#BCFF3D" strokeWidth="1.33333" />
        <path d={svgPaths.pc93b400} stroke="#BCFF3D" strokeWidth="1.33333" />
      </svg>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.1)] border border-[rgba(188,255,61,0.2)] border-solid left-[36px] rounded-[10px] size-[36px] top-1/2">
      <Svg />
    </div>
  );
}

function Svg1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[9px] top-1/2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <path d={svgPaths.p5b35118} stroke="#BCFF3D" strokeWidth="1.125" />
      </svg>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.15)] border border-[rgba(188,255,61,0.3)] border-solid left-0 rounded-[11px] size-[22px] top-1/2">
      <Svg1 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#bcff3d] border border-[#bcff3d] border-solid left-[102.86px] rounded-[11px] size-[22px] top-1/2">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[#0c0d0c] text-[10px] text-center top-1/2 w-[6.089px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid left-[187.88px] rounded-[11px] size-[22px] top-1/2">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[10px] text-[rgba(255,255,255,0.25)] text-center top-1/2 w-[6.274px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function StepIndicators() {
  return (
    <div className="-translate-y-1/2 absolute h-[22px] left-[359.7px] top-1/2 w-[282.3px]">
      <OverlayBorder2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[28px] text-[#bcff3d] text-[11px] top-1/2 w-[46px]">
        <p className="leading-[normal]">Créneau</p>
      </div>
      <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.3)] h-px left-[76.86px] top-1/2 w-[20px]" />
      <BackgroundBorder />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[14px] justify-center leading-[0] left-[138px] text-[11px] text-white top-1/2 w-[28px]">
        <p className="leading-[normal]">Infos</p>
      </div>
      <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0.08)] h-px left-[161.88px] top-1/2 w-[20px]" />
      <OverlayBorder3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[223.3px] text-[11px] text-[rgba(255,255,255,0.25)] top-1/2 w-[72px]">
        <p className="leading-[normal]">Confirmation</p>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)] border-b border-solid h-[73px] left-0 right-0 top-0">
      <OverlayBorder1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[84px] text-[14px] text-white top-[28px] w-[212.035px]">
        <p className="leading-[normal]">VroomAdvisor · Réservation</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[84px] text-[11px] text-[rgba(255,255,255,0.4)] top-[46.5px] w-[169.475px]">
        <p className="leading-[normal]">Étape 2 sur 3 — Vos informations</p>
      </div>
      <StepIndicators />
    </div>
  );
}

function RecapChip({ left, width, text, icon }: { left: number; width: number; text: string; icon: ReactNode }) {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.1)] border border-[rgba(188,255,61,0.2)] border-solid h-[28px] rounded-[100px] top-1/2" style={{ left, width }}>
      <div className="-translate-y-1/2 absolute left-[12px] size-[11px] top-1/2">{icon}</div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-[29px] text-[#bcff3d] text-[12px] top-1/2 right-[12px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] whitespace-nowrap overflow-hidden text-ellipsis">{text}</p>
      </div>
    </div>
  );
}

function RecapCreneauChoisi({ dateText, slotText, formatText }: { dateText: string; slotText: string; formatText: string }) {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.06)] border border-[rgba(188,255,61,0.15)] border-solid h-[58px] left-[36px] right-[36px] rounded-[12px] top-[36px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[13px] justify-center leading-[0] left-[18px] text-[10px] text-[rgba(188,255,61,0.55)] top-[28px] tracking-[1px] uppercase w-[105.693px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Votre créneau —</p>
      </div>
      <RecapChip
        left={135.33}
        width={145.36}
        text={dateText}
        icon={
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p2388ff00} stroke="#BCFF3D" strokeWidth="0.916667" />
            <path d="M1.375 4.58333H9.625" stroke="#BCFF3D" strokeWidth="0.916667" />
          </svg>
        }
      />
      <RecapChip
        left={288.69}
        width={121.44}
        text={slotText}
        icon={
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <g clipPath="url(#clip0_6_1038)">
              <path d={svgPaths.p1f658e00} stroke="#BCFF3D" strokeWidth="0.916667" />
              <path d={svgPaths.p105d7900} stroke="#BCFF3D" strokeWidth="0.916667" />
            </g>
            <defs>
              <clipPath id="clip0_6_1038">
                <rect fill="white" height="11" width="11" />
              </clipPath>
            </defs>
          </svg>
        }
      />
      <RecapChip
        left={418.13}
        width={70.52}
        text={formatText}
        icon={
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p3427ff72} stroke="#BCFF3D" strokeWidth="0.916667" />
          </svg>
        }
      />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[73.59px] leading-[0] left-[36px] right-[36px] top-[124px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[26px] justify-center left-0 text-[22px] text-white top-[13px] w-[295.315px]">
        <p className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif]">
          <span className="leading-[normal]">{`Vos `}</span>
          <span className="leading-[normal] text-[#bcff3d]">informations</span>
        </p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[37.8px] justify-center left-0 text-[13px] text-[rgba(255,255,255,0.4)] top-[51.9px] w-[596.127px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[20.8px] mb-0">{`Renseignez vos coordonnées pour finaliser la réservation. Votre conseiller vous contactera à l'heure`}</p>
        <p className="leading-[20.8px]">choisie.</p>
      </div>
    </div>
  );
}

function Section1Identit({ form, setForm }: { form: FormState; setForm: Dispatch<SetStateAction<FormState>> }) {
  return (
    <div className="absolute h-[112px] left-[36px] right-[36px] top-[225.6px]">
      <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[28px] left-0 right-0 top-0">
        <div className="-translate-y-1/2 absolute left-0 size-[12px] top-[calc(50%-7px)]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p1abc700} stroke="#BCFF3D" />
            <path d={svgPaths.p20933800} stroke="#BCFF3D" />
          </svg>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[13px] justify-center leading-[0] left-[22px] text-[10px] text-[rgba(255,255,255,0.25)] top-[calc(50%-7px)] tracking-[1.3px] uppercase w-[52.52px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Identité</p>
        </div>
      </div>

      <div className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] leading-[0] left-0 right-[309px] text-[11px] top-[46px] tracking-[0.88px] uppercase">
        <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-0 text-[rgba(255,255,255,0.25)] top-1/2 w-[50.764px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Prénom</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-[55.41px] text-[#bcff3d] top-[7px] w-[6.612px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">*</p>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[46px] left-0 overflow-clip right-[309px] rounded-[11px] top-[66px]">
        <input
          value={form.firstName}
          onChange={(event) => setForm((current) => ({ ...current, firstName: event.target.value }))}
          className="absolute inset-0 bg-transparent px-[16px] text-[14px] text-[rgba(255,255,255,0.25)] outline-none font-['DM_Sans:9pt_Regular',sans-serif]"
        />
      </div>

      <div className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] leading-[0] left-[309px] right-0 text-[11px] top-[46px] tracking-[0.88px] uppercase">
        <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-0 text-[rgba(255,255,255,0.25)] top-1/2 w-[28.701px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Nom</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-[33.33px] text-[#bcff3d] top-[7px] w-[6.612px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">*</p>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[46px] left-[309px] overflow-clip right-0 rounded-[11px] top-[66px]">
        <input
          value={form.lastName}
          onChange={(event) => setForm((current) => ({ ...current, lastName: event.target.value }))}
          className="absolute inset-0 bg-transparent px-[16px] text-[14px] text-[rgba(255,255,255,0.25)] outline-none font-['DM_Sans:9pt_Regular',sans-serif]"
        />
      </div>
    </div>
  );
}

function Section2Coordonnees({ form, setForm }: { form: FormState; setForm: Dispatch<SetStateAction<FormState>> }) {
  return (
    <div className="absolute h-[236.78px] left-[36px] right-[36px] top-[365.6px]">
      <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[28px] left-0 right-0 top-0">
        <div className="-translate-y-1/2 absolute left-0 size-[12px] top-[calc(50%-7px)]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p13de1180} stroke="#BCFF3D" />
            <path d="M11 3L6 6.5L1 3" stroke="#BCFF3D" />
          </svg>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[13px] justify-center leading-[0] left-[22px] text-[10px] text-[rgba(255,255,255,0.25)] top-[calc(50%-7px)] tracking-[1.3px] uppercase w-[89.538px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Coordonnées</p>
        </div>
      </div>

      <div className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] leading-[0] left-0 right-0 text-[11px] top-[46px] tracking-[0.88px] uppercase">
        <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-0 text-[rgba(255,255,255,0.25)] top-1/2 w-[93.614px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Adresse email</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-[98.27px] text-[#bcff3d] top-[7px] w-[6.612px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">*</p>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[46px] left-0 overflow-clip right-0 rounded-[11px] top-[66px]">
        <input
          value={form.email}
          onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
          className="absolute inset-0 bg-transparent px-[16px] text-[14px] text-[rgba(255,255,255,0.25)] outline-none font-['DM_Sans:9pt_Regular',sans-serif]"
        />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-0 text-[11px] text-[rgba(255,255,255,0.25)] top-[127px] w-[311.739px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[15.4px]">La confirmation de réservation sera envoyée à cette adresse.</p>
      </div>

      <div className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] leading-[0] left-0 right-0 text-[11px] top-[147.39px] tracking-[0.88px] uppercase">
        <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-0 text-[rgba(255,255,255,0.25)] top-1/2 w-[143.941px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Numéro de téléphone</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-[148.63px] text-[#bcff3d] top-[7px] w-[6.612px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">*</p>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)] border-b border-l border-solid border-t bottom-[23.39px] left-0 rounded-bl-[11px] rounded-tl-[11px] top-[167.39px] w-[70.94px]">
        <div className="-translate-y-1/2 absolute flex flex-col h-[16px] justify-center left-[14px] text-[16px] top-[22px] w-[12.024px]" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[16px]">🇫🇷</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col h-[18px] justify-center left-[31.69px] text-[14px] text-[rgba(255,255,255,0.55)] top-1/2 w-[24.595px]" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal]">+33</p>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid inset-[167.39px_0_23.39px_70.94px] overflow-clip rounded-br-[11px] rounded-tr-[11px]">
        <input
          value={form.phone}
          onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
          className="absolute inset-0 bg-transparent px-[16px] text-[14px] text-[rgba(255,255,255,0.25)] outline-none font-['DM_Sans:9pt_Regular',sans-serif]"
        />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-0 text-[11px] text-[rgba(255,255,255,0.25)] top-[228.39px] w-[355.155px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[15.4px]">{`Votre conseiller vous appellera à ce numéro à l'heure du rendez-vous.`}</p>
      </div>
    </div>
  );
}

function Section3Projet({ form, setForm }: { form: FormState; setForm: Dispatch<SetStateAction<FormState>> }) {
  return (
    <div className="absolute h-[232px] left-[36px] right-[36px] top-[630.38px]">
      <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[28px] left-0 right-0 top-0">
        <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[13px] justify-center leading-[0] left-[22px] text-[10px] text-[rgba(255,255,255,0.25)] top-[calc(50%-7px)] tracking-[1.3px] uppercase w-[165.418px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Votre projet automobile</p>
        </div>
        <div className="absolute inset-[24.34%_98.08%_70.66%_0.88%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.3 1.39978">
            <path d={svgPaths.p3f0f8670} fill="#BCFF3D" />
          </svg>
        </div>
        <div className="absolute inset-[9.36%_97.85%_60.66%_0.66%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 8.39401">
            <path d={svgPaths.p1be12b80} fill="#BCFF3D" />
          </svg>
        </div>
      </div>

      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-0 text-[11px] text-[rgba(255,255,255,0.25)] top-[calc(50%-63px)] tracking-[0.88px] uppercase w-[94.566px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Budget estimé</p>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[46px] left-0 right-[309px] rounded-[11px] top-[66px]">
        <select
          value={form.budget}
          onChange={(event) => setForm((current) => ({ ...current, budget: event.target.value }))}
          className="absolute inset-0 appearance-none bg-transparent px-[16px] text-[14px] text-white outline-none font-['DM_Sans:9pt_Regular',sans-serif]"
        >
          {BUDGET_OPTIONS.map((option) => (
            <option key={option.value || "empty"} value={option.value} className="text-black">
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="-translate-y-1/2 absolute border-[rgba(255,255,255,0.4)] border-l-4 border-r-4 border-solid border-t-5 h-[5px] right-[323px] top-[calc(50%-27px)] w-[8px]" />

      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-[309px] text-[11px] text-[rgba(255,255,255,0.25)] top-[calc(50%-63px)] tracking-[0.88px] uppercase w-[186.014px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Type de véhicule recherché</p>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[46px] left-[309px] right-0 rounded-[11px] top-[66px]">
        <select
          value={form.vehicleType}
          onChange={(event) => setForm((current) => ({ ...current, vehicleType: event.target.value }))}
          className="absolute inset-0 appearance-none bg-transparent px-[16px] text-[14px] text-white outline-none font-['DM_Sans:9pt_Regular',sans-serif]"
        >
          {VEHICLE_OPTIONS.map((option) => (
            <option key={option.value || "empty"} value={option.value} className="text-black">
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="-translate-y-1/2 absolute border-[rgba(255,255,255,0.4)] border-l-4 border-r-4 border-solid border-t-5 h-[5px] right-[14px] top-[calc(50%-27px)] w-[8px]" />

      <div className="absolute h-[14px] leading-[0] left-0 right-0 text-[rgba(255,255,255,0.25)] top-[124px] tracking-[0.88px]">
        <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center left-0 text-[11px] top-1/2 uppercase w-[150.086px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Décrivez votre projet</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[13px] justify-center left-[154.77px] text-[10px] top-[7px] w-[60.766px]" style={{ fontVariationSettings: "'opsz' 9" }}>
          <p className="leading-[normal]">(optionnel)</p>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[88px] left-0 overflow-auto right-0 rounded-[11px] top-[144px]">
        <textarea
          value={form.project}
          onChange={(event) => setForm((current) => ({ ...current, project: event.target.value }))}
          className="absolute inset-0 resize-none bg-transparent px-[16px] py-[14px] text-[14px] text-[rgba(255,255,255,0.25)] outline-none font-['DM_Sans:9pt_Regular',sans-serif]"
        />
      </div>
    </div>
  );
}

function Body({ form, setForm, dateText, slotText, formatText }: { form: FormState; setForm: Dispatch<SetStateAction<FormState>>; dateText: string; slotText: string; formatText: string }) {
  return (
    <div className="absolute h-[906.38px] left-0 right-0 top-[73px]">
      <RecapCreneauChoisi dateText={dateText} slotText={slotText} formatText={formatText} />
      <Heading />
      <Section1Identit form={form} setForm={setForm} />
      <Section2Coordonnees form={form} setForm={setForm} />
      <Section3Projet form={form} setForm={setForm} />
    </div>
  );
}

function Footer({ onBack, onSubmit }: { onBack: () => void; onSubmit: () => void }) {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t h-[223px] left-0 right-0 top-[979.38px]">
      <button type="button" onClick={onBack} className="absolute h-[16px] left-[36px] top-[24px] w-[141.72px] cursor-pointer text-left">
        <div className="-translate-y-1/2 absolute left-0 size-[13px] top-1/2">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p10ad7f00} stroke="white" strokeOpacity="0.4" strokeWidth="1.08333" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[calc(50%+15.64px)] text-[12px] text-[rgba(255,255,255,0.4)] text-center top-[calc(50%-0.38px)] w-[133px]">
          <p className="leading-[normal]">Modifier mon créneau</p>
        </div>
      </button>

      <div className="absolute left-[36px] size-[14px] top-[62px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p1c47d580} stroke="#BCFF3D" strokeWidth="1.16667" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[34px] justify-center leading-[0] left-[62px] text-[12px] text-[rgba(255,255,255,0.4)] top-[78px] w-[561.805px]">
        <p className="leading-[18px]">Vos données sont strictement confidentielles et ne seront jamais partagées avec des tiers. Elles sont uniquement utilisées pour organiser votre consultation.</p>
      </div>
      <div className="-translate-y-1/2 absolute left-[181.91px] size-[11px] top-[calc(50%+72px)]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g opacity="0.7">
            <path d={svgPaths.p90d6f00} stroke="#BCFF3D" strokeWidth="0.916667" />
            <path d={svgPaths.p1b2be600} stroke="#BCFF3D" strokeWidth="0.916667" />
          </g>
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%-80px)] text-[11px] text-[rgba(255,255,255,0.25)] text-center top-[calc(50%+71.62px)] w-[134px]">
        <p className="leading-[normal]">Confirmation par email</p>
      </div>
      <div className="-translate-y-1/2 absolute left-[330.23px] size-[11px] top-[calc(50%+72px)]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g opacity="0.7">
            <path d={svgPaths.p3aae2680} stroke="#BCFF3D" strokeWidth="0.916667" />
          </g>
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%+82.89px)] text-[11px] text-[rgba(255,255,255,0.25)] text-center top-[calc(50%+72px)] w-[151.319px]">
        <p className="leading-[normal]">Annulation gratuite 24h avant</p>
      </div>

      <button type="button" onClick={onSubmit} className="absolute bg-[#bcff3d] h-[52px] left-[36px] overflow-clip right-[36px] rounded-[14px] top-[110px] cursor-pointer">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] left-[calc(50%-12.83px)] text-[#0c0d0c] text-[15px] text-center top-1/2 tracking-[0.3px] w-[203.878px]">
          <p className="leading-[normal]">Finaliser ma réservation</p>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+106.75px)] size-[16px] top-1/2">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p25acf100} stroke="#0C0D0C" strokeWidth="1.66667" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function OverlayBorder({ form, setForm, dateText, slotText, formatText, onBack, onSubmit }: { form: FormState; setForm: Dispatch<SetStateAction<FormState>>; dateText: string; slotText: string; formatText: string; onBack: () => void; onSubmit: () => void }) {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[1204.38px] left-[381px] overflow-clip right-[379px] rounded-[28px] top-[calc(50%+71.19px)]">
      <TopBar />
      <Body form={form} setForm={setForm} dateText={dateText} slotText={slotText} formatText={formatText} />
      <Footer onBack={onBack} onSubmit={onSubmit} />
    </div>
  );
}

function Footer1() {
  return (
    <div className="absolute bg-[#181818] h-[413px] left-[-22px] right-[22px] top-[1991px]">
      <div className="absolute h-[317px] left-[208px] right-[208px] top-[48px]">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%-341.1px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[175.161px]">
          <p className="leading-[28px]">Qu’attendez-vous ?</p>
        </div>
        <div className="-translate-x-1/2 absolute bg-[#c8ec66] h-[40px] left-[calc(50%-341.34px)] rounded-[8px] top-[52px] w-[162.76px]">
          <div className="-translate-y-1/2 absolute left-[16px] size-[16px] top-1/2">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p2a44c680} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+12.18px)] not-italic text-[16px] text-black text-center top-[calc(50%-0.25px)] w-[107.125px]">
            <p className="leading-[24px]">06 70 76 07 19</p>
          </div>
        </div>
        <div className="absolute h-[24px] left-[16px] right-[698.67px] top-[116px]">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-84.63px)] size-[16px] top-1/2">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p17070980} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              <path d={svgPaths.p120c8200} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+12.16px)] not-italic text-[16px] text-center text-white top-[calc(50%-0.25px)] w-[161.595px]">
            <p className="leading-[24px]">contact@vroomparis.fr</p>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-[calc(50%-465.93px)] top-[calc(50%+4.5px)] w-[14.15px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.15 16.0018">
            <path d={svgPaths.p274fd670} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17917" />
            <path d={svgPaths.p1c743f00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17917" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[42.5px] justify-center leading-[0] left-[calc(50%-330.17px)] not-italic text-[16px] text-center text-white top-[175.75px] w-[284.77px]">
          <p className="leading-[24px]">4 bis Av. Alexandre Dumas, 95230 Soisy-sous-Montmorency</p>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%+0.26px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[215.174px]">
          <p className="leading-[28px]">Informations générales :</p>
        </div>
        <div className="absolute h-[120px] left-[357.33px] right-[357.33px] top-[48px]">
          <div className="absolute h-[24px] left-0 right-0 top-0"><div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[127.557px]"><p className="leading-[24px]">Showroom</p></div></div>
          <div className="absolute h-[24px] left-0 right-0 top-[32px]"><div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[11.5px] w-[150px]"><p className="leading-[24px]">Acheter un véhicule</p></div></div>
          <div className="absolute h-[24px] left-0 right-0 top-[68px]"><div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[6.5px] w-[170px]"><p className="leading-[24px]">Vendre votre véhicule</p></div></div>
          <div className="absolute h-[24px] left-[357.33px] right-[357.33px] top-[144px]"><div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[11.5px] w-[180px]"><p className="leading-[24px]">Consulation automobile</p></div></div>
          <div className="absolute h-[24px] left-[357.33px] right-[357.33px] top-[180px]"><div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[6.5px] w-[170px]"><p className="leading-[24px]">À propos</p></div></div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%+341.55px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[152.536px]">
          <p className="leading-[28px]">Mentions légales</p>
        </div>
        <div className="absolute h-[88px] left-[698.66px] right-[16px] top-[52px]">
          <div className="absolute h-[24px] left-[0.34px] right-[-0.34px] top-[-4px]"><div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[189.407px]"><p className="leading-[24px]">Politique de confidentialité</p></div></div>
          <div className="absolute h-[24px] left-[0.34px] right-[-0.34px] top-[28px]"><div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[151.447px]"><p className="leading-[24px]">Conditions générales</p></div></div>
        </div>
        <div className="-translate-x-1/2 absolute bottom-[93px] left-[calc(50%+306px)] top-[204px] w-[20px]"><svg className="absolute left-0 top-0 size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={svgPaths.p30c8d680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" /></svg></div>
        <div className="-translate-x-1/2 absolute bottom-[93px] left-[calc(50%+342px)] top-[204px] w-[20px]"><svg className="absolute left-0 top-0 size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={svgPaths.p4b98700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" /><path d={svgPaths.p19f4a800} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" /><path d="M14.5833 5.41667H14.5917" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" /></svg></div>
        <div className="-translate-x-1/2 absolute bottom-[93px] left-[calc(50%+378px)] top-[204px] w-[20px]"><svg className="absolute left-0 top-0 size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><path d={svgPaths.p2ffa5d80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" /></svg></div>
        <div className="absolute border-[#1f2937] border-solid border-t h-[49px] left-[16px] right-[16px] top-[268px]">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[#9ca3af] text-[16px] text-center top-[35.75px] w-[300.597px]">
            <p className="leading-[24px]">© 2026 Vroom Paris. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileInfoForm({
  form,
  setForm,
  dateText,
  slotText,
  formatText,
  onBack,
  onSubmit,
}: {
  form: FormState;
  setForm: Dispatch<SetStateAction<FormState>>;
  dateText: string;
  slotText: string;
  formatText: string;
  onBack: () => void;
  onSubmit: () => void;
}) {
  return (
    <div className="rounded-[28px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]">
      <div className="border-b border-[rgba(255,255,255,0.08)] p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <div className="relative flex size-[40px] shrink-0 items-center justify-center rounded-[10px] border border-[rgba(188,255,61,0.2)] bg-[rgba(188,255,61,0.1)]">
            <Svg />
          </div>
          <div className="min-w-0">
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[15px] font-bold text-white">VroomAdvisor · Réservation</p>
            <p className="mt-1 text-[12px] text-[rgba(255,255,255,0.4)]">Étape 2 sur 3 — Vos informations</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3 text-[11px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(188,255,61,0.3)] bg-[rgba(188,255,61,0.15)] px-3 py-2 text-[#bcff3d]">
            <span className="relative flex size-[22px] items-center justify-center rounded-[11px] border border-[rgba(188,255,61,0.3)] bg-[rgba(188,255,61,0.15)]">
              <Svg1 />
            </span>
            Créneau
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#bcff3d] px-3 py-2 font-semibold text-[#0c0d0c]">
            <span className="inline-flex size-[22px] items-center justify-center rounded-[11px] bg-[#bcff3d] text-[10px]">2</span>
            Infos
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-3 py-2 text-[rgba(255,255,255,0.35)]">
            <span className="inline-flex size-[22px] items-center justify-center rounded-[11px] bg-[rgba(255,255,255,0.04)] text-[10px]">3</span>
            Confirmation
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <div className="rounded-[16px] border border-[rgba(188,255,61,0.15)] bg-[rgba(188,255,61,0.06)] p-4">
          <div className="text-[10px] uppercase tracking-[1px] text-[rgba(188,255,61,0.55)]">Votre créneau</div>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="inline-flex rounded-full border border-[rgba(188,255,61,0.2)] bg-[rgba(188,255,61,0.1)] px-3 py-2 text-[12px] text-[#bcff3d]">{dateText}</span>
            <span className="inline-flex rounded-full border border-[rgba(188,255,61,0.2)] bg-[rgba(188,255,61,0.1)] px-3 py-2 text-[12px] text-[#bcff3d]">{slotText}</span>
            <span className="inline-flex rounded-full border border-[rgba(188,255,61,0.2)] bg-[rgba(188,255,61,0.1)] px-3 py-2 text-[12px] text-[#bcff3d]">{formatText}</span>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] text-[28px] font-extrabold text-white">
            Vos <span className="text-[#bcff3d]">informations</span>
          </h2>
          <p className="mt-3 max-w-[42rem] text-[14px] leading-7 text-[rgba(255,255,255,0.45)]">
            Renseignez vos coordonnées pour finaliser la réservation. Votre conseiller vous contactera à l&apos;heure choisie.
          </p>
        </div>

        <div className="mt-8 space-y-8">
          <section>
            <div className="mb-4 flex items-center gap-3 border-b border-[rgba(255,255,255,0.08)] pb-3">
              <span className="relative flex size-[12px] items-center justify-center">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <path d={svgPaths.p1abc700} stroke="#BCFF3D" />
                  <path d={svgPaths.p20933800} stroke="#BCFF3D" />
                </svg>
              </span>
              <span className="text-[10px] uppercase tracking-[1.3px] text-[rgba(255,255,255,0.25)]">Identité</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.25)]">Prénom <span className="text-[#bcff3d]">*</span></label>
                <input
                  value={form.firstName}
                  onChange={(event) => setForm((current) => ({ ...current, firstName: event.target.value }))}
                  className="h-[46px] w-full rounded-[11px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-[14px] text-white outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.25)]">Nom <span className="text-[#bcff3d]">*</span></label>
                <input
                  value={form.lastName}
                  onChange={(event) => setForm((current) => ({ ...current, lastName: event.target.value }))}
                  className="h-[46px] w-full rounded-[11px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-[14px] text-white outline-none"
                />
              </div>
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center gap-3 border-b border-[rgba(255,255,255,0.08)] pb-3">
              <span className="relative flex size-[12px] items-center justify-center">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <path d={svgPaths.p13de1180} stroke="#BCFF3D" />
                  <path d="M11 3L6 6.5L1 3" stroke="#BCFF3D" />
                </svg>
              </span>
              <span className="text-[10px] uppercase tracking-[1.3px] text-[rgba(255,255,255,0.25)]">Coordonnées</span>
            </div>
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.25)]">Adresse email <span className="text-[#bcff3d]">*</span></label>
                <input
                  value={form.email}
                  onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  className="h-[46px] w-full rounded-[11px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-[14px] text-white outline-none"
                />
                <p className="mt-2 text-[11px] text-[rgba(255,255,255,0.25)]">La confirmation de réservation sera envoyée à cette adresse.</p>
              </div>
              <div>
                <label className="mb-2 block text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.25)]">Numéro de téléphone <span className="text-[#bcff3d]">*</span></label>
                <div className="flex">
                  <div className="flex h-[46px] w-[74px] items-center justify-center rounded-l-[11px] border border-r-0 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] text-[14px] text-[rgba(255,255,255,0.55)]">
                    🇫🇷 +33
                  </div>
                  <input
                    value={form.phone}
                    onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                    className="h-[46px] flex-1 rounded-r-[11px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-[14px] text-white outline-none"
                  />
                </div>
                <p className="mt-2 text-[11px] text-[rgba(255,255,255,0.25)]">Votre conseiller vous appellera à ce numéro à l&apos;heure du rendez-vous.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center gap-3 border-b border-[rgba(255,255,255,0.08)] pb-3">
              <span className="relative flex size-[12px] items-center justify-center">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 8.39401">
                  <path d={svgPaths.p1be12b80} fill="#BCFF3D" />
                </svg>
              </span>
              <span className="text-[10px] uppercase tracking-[1.3px] text-[rgba(255,255,255,0.25)]">Votre projet automobile</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.25)]">Budget estimé</label>
                <select
                  value={form.budget}
                  onChange={(event) => setForm((current) => ({ ...current, budget: event.target.value }))}
                  className="h-[46px] w-full rounded-[11px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-[14px] text-white outline-none"
                >
                  {BUDGET_OPTIONS.map((option) => (
                    <option key={option.value || "empty"} value={option.value} className="text-black">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.25)]">Type de véhicule recherché</label>
                <select
                  value={form.vehicleType}
                  onChange={(event) => setForm((current) => ({ ...current, vehicleType: event.target.value }))}
                  className="h-[46px] w-full rounded-[11px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-[14px] text-white outline-none"
                >
                  {VEHICLE_OPTIONS.map((option) => (
                    <option key={option.value || "empty"} value={option.value} className="text-black">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.25)]">Décrivez votre projet <span className="normal-case tracking-normal text-[10px]">(optionnel)</span></label>
              <textarea
                value={form.project}
                onChange={(event) => setForm((current) => ({ ...current, project: event.target.value }))}
                className="min-h-[120px] w-full rounded-[11px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-[14px] text-white outline-none"
              />
            </div>
          </section>
        </div>

        <div className="mt-8 border-t border-[rgba(255,255,255,0.08)] pt-6">
          <button type="button" onClick={onBack} className="text-[12px] text-[rgba(255,255,255,0.4)]">
            ← Modifier mon créneau
          </button>
          <div className="mt-5 space-y-3 text-[12px] text-[rgba(255,255,255,0.35)]">
            <p>Vos données sont strictement confidentielles et ne seront jamais partagées avec des tiers.</p>
            <div className="flex flex-wrap gap-4 text-[11px] text-[rgba(255,255,255,0.25)]">
              <span>Confirmation par email</span>
              <span>Annulation gratuite 24h avant</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onSubmit}
            className="mt-6 w-full rounded-[14px] bg-[#bcff3d] px-4 py-4 font-['Syne:Bold',sans-serif] text-[15px] font-bold tracking-[0.3px] text-[#0c0d0c]"
          >
            Finaliser ma réservation
          </button>
        </div>
      </div>
    </div>
  );
}

function MobileFooterReservation() {
  return (
    <footer className="mt-24 rounded-[28px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-6 sm:p-8">
      <div className="grid gap-8">
        <div>
          <div className="font-['Wix_Madefor_Display:Regular',sans-serif] text-[22px] text-white">Qu&apos;attendez-vous ?</div>
          <a href="tel:+33670760719" className="mt-4 inline-flex items-center rounded-[10px] bg-[#c8ec66] px-5 py-3 text-[16px] text-black">06 70 76 07 19</a>
          <div className="mt-5 space-y-3 text-[15px] text-white">
            <a href="mailto:contact@vroomparis.fr" className="block break-all">contact@vroomparis.fr</a>
            <span className="block text-[rgba(255,255,255,0.72)]">4 bis Av. Alexandre Dumas, 95230 Soisy-sous-Montmorency</span>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <div className="font-['Wix_Madefor_Display:Regular',sans-serif] text-[20px] text-white">Informations générales</div>
            <div className="mt-4 space-y-3 text-[15px] text-white">
              <a href="/showroom" className="block">Showroom</a>
              <a href="/acheter-votre-vehicule" className="block">Acheter un véhicule</a>
              <a href="/vendre-votre-vehicule" className="block">Vendre votre véhicule</a>
              <a href="/conseils" className="block">Consultation automobile</a>
              <a href="/a-propos" className="block">À propos</a>
            </div>
          </div>
          <div>
            <div className="font-['Wix_Madefor_Display:Regular',sans-serif] text-[20px] text-white">Mentions légales</div>
            <div className="mt-4 space-y-3 text-[15px] text-white">
              <div>Politique de confidentialité</div>
              <div>Conditions générales</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-[#1f2937] pt-5 text-center text-[14px] text-[#9ca3af]">© 2026 Vroom Paris. Tous droits réservés.</div>
    </footer>
  );
}

function MobileRedirectionFormulaireConseil({
  form,
  setForm,
  dateText,
  slotText,
  formatText,
  onBack,
  onSubmit,
}: {
  form: FormState;
  setForm: Dispatch<SetStateAction<FormState>>;
  dateText: string;
  slotText: string;
  formatText: string;
  onBack: () => void;
  onSubmit: () => void;
}) {
  return (
    <div className="relative overflow-x-hidden xl:hidden">
      <div className="pointer-events-none absolute left-1/2 top-[-140px] h-[440px] w-[760px] -translate-x-1/2 opacity-80 blur-[90px]">
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,_rgba(200,236,102,0.35),_rgba(114,249,216,0.08)_45%,_rgba(24,24,24,0)_75%)]" />
      </div>
      <div className="relative mx-auto max-w-[760px] px-5 pb-16 pt-24 sm:px-8 sm:pt-28">
        <section className="text-center">
          <h1 className="font-['Syne:ExtraBold',sans-serif] text-[42px] font-extrabold leading-[0.98] tracking-[-0.05em] text-white sm:text-[54px]">
            Réservez votre
            <span className="block text-[#bcff3d]">consultation automobile</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[34rem] font-['DM_Sans:Regular',sans-serif] text-[16px] leading-7 text-[rgba(255,255,255,0.56)]">
            Choisissez votre créneau. Un expert VroomAdvisor vous rappelle à l&apos;heure choisie.
          </p>
        </section>

        <section className="mt-10">
          <MobileInfoForm form={form} setForm={setForm} dateText={dateText} slotText={slotText} formatText={formatText} onBack={onBack} onSubmit={onSubmit} />
        </section>

        <MobileFooterReservation />
      </div>
    </div>
  );
}

function DesktopRedirectionFormulaireConseil({
  form,
  setForm,
  dateText,
  slotText,
  formatText,
  onBack,
  onSubmit,
}: {
  form: FormState;
  setForm: Dispatch<SetStateAction<FormState>>;
  dateText: string;
  slotText: string;
  formatText: string;
  onBack: () => void;
  onSubmit: () => void;
}) {
  return (
    <div className="relative mx-auto hidden h-[2404px] w-[1440px] bg-[#181818] xl:block">
      <div className="absolute h-[742.871px] left-[-464px] top-[-197px] w-[2664.781px]">
        <div className="absolute inset-[-26.92%_-7.51%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3064.78 1142.87">
            <g filter="url(#filter0_f_6_1034)">
              <path d={svgPaths.pdf2dc00} fill="url(#paint0_linear_6_1034)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1142.87" id="filter0_f_6_1034" width="3064.78" x="-1.17256e-06" y="3.20925e-06">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_6_1034" stdDeviation="100" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_1034" x1="35.5207" x2="1147.95" y1="742.236" y2="-1039.64">
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
      <Group />
      <Heading1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[48.34px] justify-center leading-[0] left-[calc(50%+1.1px)] text-[17px] text-[rgba(255,255,255,0.55)] text-center top-[572.05px] w-[438.59px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[26.35px] mb-0">Choisissez votre créneau. Un expert VroomAdvisor vous</p>
        <p className="leading-[26.35px]">{`rappelle à l'heure choisie.`}</p>
      </div>
      <OverlayBorder form={form} setForm={setForm} dateText={dateText} slotText={slotText} formatText={formatText} onBack={onBack} onSubmit={onSubmit} />
      <Footer1 />
    </div>
  );
}

export default function RedirectionFormulaireConseil() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState(DEFAULT_FORM);

  const dateText = formatBookingDate(searchParams.get("date"));
  const slotText = `${searchParams.get("slot") || "10:30"} · ${searchParams.get("duration") || "30 min"}`;
  const formatText = formatBookingMode(searchParams.get("format"));

  const handleSubmit = () => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set("firstName", form.firstName);
    nextParams.set("lastName", form.lastName);
    nextParams.set("email", form.email);
    nextParams.set("phone", form.phone);
    nextParams.set("budget", form.budget);
    nextParams.set("vehicleType", form.vehicleType);
    nextParams.set("project", form.project);
    navigate(`/conseils/formulaire/etape-2?${nextParams.toString()}`);
  };

  return (
    <div className="w-full bg-[#181818]">
      <MobileRedirectionFormulaireConseil
        form={form}
        setForm={setForm}
        dateText={dateText}
        slotText={slotText}
        formatText={formatText}
        onBack={() => navigate(`/conseils?${searchParams.toString()}`)}
        onSubmit={handleSubmit}
      />
      <DesktopRedirectionFormulaireConseil
        form={form}
        setForm={setForm}
        dateText={dateText}
        slotText={slotText}
        formatText={formatText}
        onBack={() => navigate(`/conseils?${searchParams.toString()}`)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
