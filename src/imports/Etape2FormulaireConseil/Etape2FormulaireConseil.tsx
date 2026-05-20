import { useNavigate, useSearchParams } from "react-router";
import svgPaths from "./svg-t3kgt1lbc3";

function formatBookingDate(value: string | null) {
  if (!value) {
    return "Vendredi 13 mars 2026";
  }

  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) {
    return "Vendredi 13 mars 2026";
  }

  const weekday = new Intl.DateTimeFormat("fr-FR", { weekday: "long" }).format(date);
  const day = new Intl.DateTimeFormat("fr-FR", { day: "2-digit" }).format(date);
  const month = new Intl.DateTimeFormat("fr-FR", { month: "long" }).format(date);
  const year = new Intl.DateTimeFormat("fr-FR", { year: "numeric" }).format(date);
  return `${weekday.charAt(0).toUpperCase()}${weekday.slice(1)} ${day} ${month} ${year}`;
}

function formatBookingTime(slot: string | null, duration: string | null) {
  return `${slot || "10:30"} — ${duration || "30 min"}`;
}

function formatBookingFormat(value: string | null) {
  switch (value) {
    case "telephone":
      return "Consultation par téléphone";
    case "whatsapp":
      return "Consultation sur WhatsApp";
    case "visio":
    default:
      return "Consultation en visio";
  }
}

function formatFullName(firstName: string | null, lastName: string | null) {
  const fullName = `${firstName || "Jean"} ${lastName || "Dupont"}`.trim();
  return fullName || "Jean Dupont";
}

function Group() {
  return (
    <div className="absolute inset-[1.58%_46.71%_95.73%_46.74%]">
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

function Heading() {
  return (
    <div className="absolute font-['Syne:ExtraBold',sans-serif] font-extrabold h-[245.88px] leading-[0] left-[160px] right-[160px] text-[58px] text-center top-[230px] tracking-[-1.74px]" data-name="Heading 1">
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
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15px] top-1/2" data-name="SVG">
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

function OverlayBorder1() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.1)] border border-[rgba(188,255,61,0.2)] border-solid left-[36px] rounded-[10px] size-[36px] top-1/2" data-name="Overlay+Border">
      <Svg />
    </div>
  );
}

function Svg1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[9px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g id="SVG">
          <path d={svgPaths.p5b35118} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.15)] border border-[rgba(188,255,61,0.3)] border-solid left-[318.88px] rounded-[11px] size-[22px] top-1/2" data-name="Overlay+Border">
      <Svg1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[9px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g id="SVG">
          <path d={svgPaths.p5b35118} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.15)] border border-[rgba(188,255,61,0.3)] border-solid left-[421.73px] rounded-[11px] size-[22px] top-1/2" data-name="Overlay+Border">
      <Svg2 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[9px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g id="SVG">
          <path d={svgPaths.p5b35118} id="Vector" stroke="var(--stroke-0, #0C0D0C)" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#bcff3d] border border-[#bcff3d] border-solid left-[506.19px] rounded-[11px] size-[22px] top-1/2" data-name="Background+Border">
      <Svg3 />
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)] border-b border-solid h-[73px] left-0 right-0 top-0" data-name="TOP BAR">
      <OverlayBorder1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[84px] text-[14px] text-white top-[28px] w-[212.035px]">
        <p className="leading-[normal]">VroomAdvisor · Réservation</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[84px] text-[11px] text-[rgba(255,255,255,0.4)] top-[45.5px] w-[149.969px]">
        <p className="leading-[normal]">Étape 3 sur 3 — Confirmation</p>
      </div>
      <OverlayBorder2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[346.88px] text-[#bcff3d] text-[11px] top-1/2 w-[45px]">
        <p className="leading-[normal]">Créneau</p>
      </div>
      <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.3)] h-px left-[395.73px] top-1/2 w-[20px]" data-name="Horizontal Divider" />
      <OverlayBorder3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[453.88px] text-[#bcff3d] text-[11px] top-1/2 w-[26px]">
        <p className="leading-[normal]">Infos</p>
      </div>
      <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.3)] h-px left-[480.19px] top-1/2 w-[20px]" data-name="Horizontal Divider" />
      <BackgroundBorder />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[14px] justify-center leading-[0] left-[542.88px] text-[11px] text-white top-1/2 w-[73px]">
        <p className="leading-[normal]">Confirmation</p>
      </div>
    </div>
  );
}

function Paragraph({ fullName, email }: { fullName: string; email: string }) {
  return (
    <div className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[69.28px] leading-[0] left-1/2 text-[14px] text-[rgba(255,255,255,0.55)] text-center top-[211.89px] w-[420px]" data-name="Paragraph">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[18px] justify-center left-[calc(50%-0.5px)] top-[12.11px] w-[393px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p>
          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[23.1px]">{`Votre consultation est réservée, `}</span>
          <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[23.1px] text-[rgba(255,255,255,0.85)]">{fullName}</span>
          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[23.1px]">. Un email de</span>
        </p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[41px] justify-center left-[calc(50%-0.5px)] top-[46.61px] w-[403px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="mb-0">
          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[23.1px]">{`confirmation a été envoyé à `}</span>
          <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[23.1px] text-[rgba(255,255,255,0.85)]">{email}</span>
          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[23.1px]">. Votre</span>
        </p>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] leading-[23.1px]">{`conseiller vous contactera à l'heure choisie.`}</p>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[26px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="SVG">
          <path d={svgPaths.p28226b00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="2.16667" />
          <path d={svgPaths.p6b23800} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="2.16667" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.12)] border border-[rgba(188,255,61,0.28)] border-solid inset-[64px_287px_189.17px_287px] rounded-[32px]" data-name="Overlay+Border">
      <Svg4 />
    </div>
  );
}

function SuccessHero({ fullName, email }: { fullName: string; email: string }) {
  return (
    <div className="absolute h-[317.17px] left-0 right-0 top-[73px]" data-name="SUCCESS HERO">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[31px] justify-center leading-[0] left-[calc(50%+0.19px)] text-[26px] text-center text-white top-[186.5px] w-[489.691px]">
        <p className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif]">
          <span className="leading-[29.9px]">{`Rendez-vous `}</span>
          <span className="leading-[29.9px] text-[#bcff3d]">confirmé !</span>
        </p>
      </div>
      <Paragraph fullName={fullName} email={email} />
      <div className="absolute border border-[rgba(188,255,61,0.18)] border-solid inset-[52px_275px_177.17px_275px] rounded-[44px]" data-name="Border" />
      <div className="absolute border border-[rgba(188,255,61,0.18)] border-solid inset-[52px_275px_177.17px_275px] rounded-[44px]" data-name="Border" />
      <div className="absolute border border-[rgba(188,255,61,0.18)] border-solid inset-[52px_275px_177.17px_275px] rounded-[44px]" data-name="Border" />
      <OverlayBorder4 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[11px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="SVG">
          <path d={svgPaths.p2388ff00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
          <path d="M1.375 4.58333H9.625" id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
        </g>
      </svg>
    </div>
  );
}

function OverlayHorizontalBorder() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.05)] border-[rgba(188,255,61,0.1)] border-b border-solid h-[43px] left-0 right-0 top-0" data-name="Overlay+HorizontalBorder">
      <Svg5 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[13px] justify-center leading-[0] left-[42px] text-[10px] text-[rgba(188,255,61,0.65)] top-1/2 tracking-[1.3px] uppercase w-[236.694px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Récapitulatif de votre rendez-vous</p>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[13px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="SVG">
          <path d={svgPaths.p3b7aed80} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
          <path d="M1.625 5.41667H11.375" id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.07)] border border-[rgba(188,255,61,0.13)] border-solid left-[24px] rounded-[9px] size-[32px] top-1/2" data-name="Overlay+Border">
      <Svg6 />
    </div>
  );
}

function HorizontalBorder({ bookingDate }: { bookingDate: string }) {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[62px] left-0 right-0 top-[51px]" data-name="HorizontalBorder">
      <OverlayBorder5 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[68px] text-[11px] text-[rgba(255,255,255,0.25)] top-[20px] tracking-[0.88px] uppercase w-[29.737px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Date</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-[68px] text-[14px] text-[rgba(255,255,255,0.85)] top-[39px] w-[151.287px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">{bookingDate}</p>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[13px] top-1/2" data-name="SVG">
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

function OverlayBorder6() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.07)] border border-[rgba(188,255,61,0.13)] border-solid left-[24px] rounded-[9px] size-[32px] top-1/2" data-name="Overlay+Border">
      <Svg7 />
    </div>
  );
}

function Svg8() {
  return (
    <div className="-translate-y-1/2 absolute left-[10px] size-[9px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g id="SVG">
          <path d={svgPaths.p5b35118} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.9375" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder7() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.1)] border border-[rgba(188,255,61,0.2)] border-solid h-[24px] left-[456.09px] rounded-[100px] top-1/2 w-[83.91px]" data-name="Overlay+Border">
      <Svg8 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[14px] justify-center leading-[0] left-[24px] text-[#bcff3d] text-[11px] top-1/2 w-[49.136px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Confirmé</p>
      </div>
    </div>
  );
}

function HorizontalBorder1({ bookingTime }: { bookingTime: string }) {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[62px] left-0 right-0 top-[113px]" data-name="HorizontalBorder">
      <OverlayBorder6 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[68px] text-[11px] text-[rgba(255,255,255,0.25)] top-[20px] tracking-[0.88px] uppercase w-[93.113px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">{`Heure & durée`}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-[68px] text-[14px] text-[rgba(255,255,255,0.85)] top-[39px] w-[130.181px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">{bookingTime}</p>
      </div>
      <OverlayBorder7 />
    </div>
  );
}

function Svg9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[13px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="SVG">
          <path d={svgPaths.p2b829a00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder8() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.07)] border border-[rgba(188,255,61,0.13)] border-solid left-[24px] rounded-[9px] size-[32px] top-1/2" data-name="Overlay+Border">
      <Svg9 />
    </div>
  );
}

function HorizontalBorder2({ bookingFormat }: { bookingFormat: string }) {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[62px] left-0 right-0 top-[175px]" data-name="HorizontalBorder">
      <OverlayBorder8 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[68px] text-[11px] text-[rgba(255,255,255,0.25)] top-[20px] tracking-[0.88px] uppercase w-[48.427px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Format</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-[68px] text-[14px] text-[rgba(255,255,255,0.85)] top-[39px] w-[138.437px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">{bookingFormat}</p>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[13px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="SVG">
          <path d={svgPaths.p18e57100} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
          <path d={svgPaths.p27d6f100} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder9() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.07)] border border-[rgba(188,255,61,0.13)] border-solid left-[24px] rounded-[9px] size-[32px] top-1/2" data-name="Overlay+Border">
      <Svg10 />
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[62px] left-0 right-0 top-[237px]" data-name="HorizontalBorder">
      <OverlayBorder9 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[68px] text-[11px] text-[rgba(255,255,255,0.25)] top-[20px] tracking-[0.88px] uppercase w-[127.477px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Conseiller assigné</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-[68px] text-[14px] text-[rgba(255,255,255,0.85)] top-[39px] w-[252.947px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Julien DURANT</p>
      </div>
    </div>
  );
}

function Svg11() {
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

function OverlayBorder10() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.07)] border border-[rgba(188,255,61,0.13)] border-solid left-[24px] rounded-[9px] size-[32px] top-[calc(50%+145.5px)]" data-name="Overlay+Border">
      <Svg11 />
    </div>
  );
}

function RdvRecapCard({
  bookingDate,
  bookingTime,
  bookingFormat,
  email,
}: {
  bookingDate: string;
  bookingTime: string;
  bookingFormat: string;
  email: string;
}) {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid h-[370px] left-[36px] overflow-clip right-[36px] rounded-[20px] top-[422.17px]" data-name="RDV RECAP CARD">
      <OverlayHorizontalBorder />
      <HorizontalBorder bookingDate={bookingDate} />
      <HorizontalBorder1 bookingTime={bookingTime} />
      <HorizontalBorder2 bookingFormat={bookingFormat} />
      <HorizontalBorder3 />
      <OverlayBorder10 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[68px] text-[11px] text-[rgba(255,255,255,0.25)] top-[319px] tracking-[0.88px] uppercase w-[160.044px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Confirmation envoyée à</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[18px] justify-center leading-[0] left-[68px] text-[14px] text-[rgba(255,255,255,0.85)] top-[338px] w-[161.235px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">{email}</p>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-89.58px)] size-[15px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p191ca500} id="Vector" stroke="var(--stroke-0, #0C0D0C)" strokeWidth="1.25" />
          <path d="M10 1.25V3.75" id="Vector_2" stroke="var(--stroke-0, #0C0D0C)" strokeWidth="1.25" />
          <path d="M5 1.25V3.75" id="Vector_3" stroke="var(--stroke-0, #0C0D0C)" strokeWidth="1.25" />
          <path d="M1.875 6.25H13.125" id="Vector_4" stroke="var(--stroke-0, #0C0D0C)" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <button type="button" className="absolute bg-[#bcff3d] h-[50px] left-[36px] right-[325px] rounded-[12px] top-0" data-name="Button">
      <Svg12 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[calc(50%+12.17px)] text-[#0c0d0c] text-[14px] text-center top-1/2 w-[170.492px]">
        <p className="leading-[normal]">Ajouter à mon agenda</p>
      </div>
    </button>
  );
}

function Svg13() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-55.39px)] size-[14px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p24145f80} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.55" strokeWidth="1.16667" />
          <path d={svgPaths.p3ef43c00} id="Vector_2" stroke="var(--stroke-0, white)" strokeOpacity="0.55" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <button type="button" className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[50px] left-[323px] right-[36px] rounded-[12px] top-0" data-name="Button">
      <Svg13 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[calc(50%+11.67px)] text-[14px] text-[rgba(255,255,255,0.55)] text-center top-1/2 w-[102.127px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">{`Renvoyer l'email`}</p>
      </div>
    </button>
  );
}

function Link({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button type="button" onClick={onClick} className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-[calc(50%-115.85px)] top-[calc(50%+23.5px)] w-[134.75px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%+0.2px)] text-[#bcff3d] text-[11px] text-center top-[7px] w-[135.159px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">{label}</p>
      </div>
    </button>
  );
}

function Link1({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button type="button" onClick={onClick} className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-[calc(50%+24.59px)] top-[calc(50%+23.5px)] w-[117.73px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%+0.46px)] text-[#bcff3d] text-[11px] text-center top-[7px] w-[118.66px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">{label}</p>
      </div>
    </button>
  );
}

function Link2({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button type="button" onClick={onClick} className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-[calc(50%+140.43px)] top-[calc(50%+23.5px)] w-[85.58px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%+0.3px)] text-[#bcff3d] text-[11px] text-center top-[7px] w-[86.176px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">{label}</p>
      </div>
    </button>
  );
}

function Actions({
  onEdit,
  onCancel,
  onHome,
}: {
  onEdit: () => void;
  onCancel: () => void;
  onHome: () => void;
}) {
  return (
    <div className="absolute h-[133px] left-0 right-0 top-[824.17px]" data-name="ACTIONS">
      <Button />
      <Button1 />
      <div className="absolute bg-[rgba(255,255,255,0.08)] h-px left-[36px] right-[36px] top-[66px]" data-name="Horizontal Divider" />
      <Link onClick={onEdit} label="Modifier mon rendez-vous" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%-41.22px)] text-[11px] text-[rgba(255,255,255,0.08)] text-center top-[90px] w-[2.509px]">
        <p className="leading-[normal]">·</p>
      </div>
      <Link1 onClick={onCancel} label="Annuler ma réservation" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%+90.7px)] text-[11px] text-[rgba(255,255,255,0.08)] text-center top-[90px] w-[2.509px]">
        <p className="leading-[normal]">·</p>
      </div>
      <Link2 onClick={onHome} label="Retour à l'accueil" />
    </div>
  );
}

function Svg14() {
  return (
    <div className="-translate-y-1/2 absolute left-[116px] size-[12px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_6_1263)" id="SVG" opacity="0.7">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #BCFF3D)" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" />
        </g>
        <defs>
          <clipPath id="clip0_6_1263">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg15() {
  return <div className="-translate-y-1/2 absolute left-[464.03px] opacity-70 size-[12px] top-1/2" data-name="SVG" />;
}

function MdiPhone() {
  return (
    <div className="absolute left-[363.92px] size-[13px] top-[17.83px]" data-name="mdi:phone">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="mdi:phone">
          <path d={svgPaths.pa082c00} fill="var(--fill-0, #BCFF3D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[363.92px] top-[15.83px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[381.92px] text-[11px] text-[rgba(255,255,255,0.4)] top-[calc(50%+0.33px)] w-[133px]">
        <p className="leading-[normal]">Support disponible 7j/7</p>
      </div>
      <MdiPhone />
    </div>
  );
}

function BottomStrip() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.08)] border-solid border-t h-[47px] left-0 right-0 top-[957.17px]" data-name="BOTTOM STRIP">
      <Svg14 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[135px] text-[11px] text-[rgba(255,255,255,0.4)] top-1/2 w-[189.862px]">
        <p className="leading-[normal]">{`Annulation gratuite jusqu'à 24h avant`}</p>
      </div>
      <Svg15 />
      <Group1 />
    </div>
  );
}

function OverlayBorder({
  fullName,
  email,
  bookingDate,
  bookingTime,
  bookingFormat,
  onEdit,
  onCancel,
  onHome,
}: {
  fullName: string;
  email: string;
  bookingDate: string;
  bookingTime: string;
  bookingFormat: string;
  onEdit: () => void;
  onCancel: () => void;
  onHome: () => void;
}) {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[1006.17px] left-[416px] overflow-clip right-[384px] rounded-[28px] top-[calc(50%+15.58px)]" data-name="Overlay+Border">
      <TopBar />
      <SuccessHero fullName={fullName} email={email} />
      <RdvRecapCard bookingDate={bookingDate} bookingTime={bookingTime} bookingFormat={bookingFormat} email={email} />
      <Actions onEdit={onEdit} onCancel={onCancel} onHome={onHome} />
      <BottomStrip />
    </div>
  );
}

function Svg16() {
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

function Link3() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#c8ec66] h-[40px] left-[calc(50%-341.34px)] rounded-[8px] top-[52px] w-[162.76px]" data-name="Link">
      <Svg16 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+12.18px)] not-italic text-[16px] text-black text-center top-[calc(50%-0.25px)] w-[107.125px]">
        <p className="leading-[24px]">06 70 76 07 19</p>
      </div>
    </div>
  );
}

function Svg17() {
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

function Link4() {
  return (
    <div className="absolute h-[24px] left-[16px] right-[698.67px] top-[116px]" data-name="Link">
      <Svg17 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+12.16px)] not-italic text-[16px] text-center text-white top-[calc(50%-0.25px)] w-[161.595px]">
        <p className="leading-[24px]">contact@vroomparis.fr</p>
      </div>
    </div>
  );
}

function Svg18() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-[calc(50%-465.93px)] top-[calc(50%+4.5px)] w-[14.15px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.15 16.0018">
        <g id="SVG">
          <path d={svgPaths.p274fd670} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17917" />
          <path d={svgPaths.p1c743f00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17917" />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-0" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[127.557px]">
        <p className="leading-[24px]">Showroom</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-[32px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[11.5px] w-[150px]">
        <p className="leading-[24px]">Acheter un véhicule</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-[68px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[6.5px] w-[170px]">
        <p className="leading-[24px]">Vendre votre véhicule</p>
      </div>
    </div>
  );
}

function Link8() {
  return <div className="absolute h-[24px] left-0 right-0 top-[96px]" data-name="Link" />;
}

function Nav() {
  return (
    <div className="absolute h-[120px] left-[357.33px] right-[357.33px] top-[48px]" data-name="Nav">
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute h-[24px] left-[357.33px] right-[357.33px] top-[144px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[11.5px] w-[180px]">
        <p className="leading-[24px]">Consulation automobile</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute h-[24px] left-[357.33px] right-[357.33px] top-[180px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[6.5px] w-[170px]">
        <p className="leading-[24px]">À propos</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute h-[24px] left-[0.34px] right-[-0.34px] top-[-4px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[189.407px]">
        <p className="leading-[24px]">Politique de confidentialité</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute h-[24px] left-[0.34px] right-[-0.34px] top-[28px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[151.447px]">
        <p className="leading-[24px]">Conditions générales</p>
      </div>
    </div>
  );
}

function Nav1() {
  return (
    <div className="absolute h-[88px] left-[698.66px] right-[16px] top-[52px]" data-name="Nav">
      <Link11 />
      <Link12 />
    </div>
  );
}

function Svg19() {
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

function Link13() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[93px] left-[calc(50%+306px)] top-[204px] w-[20px]" data-name="Link">
      <Svg19 />
    </div>
  );
}

function Svg20() {
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

function Link14() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[93px] left-[calc(50%+342px)] top-[204px] w-[20px]" data-name="Link">
      <Svg20 />
    </div>
  );
}

function Svg21() {
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

function Link15() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[93px] left-[calc(50%+378px)] top-[204px] w-[20px]" data-name="Link">
      <Svg21 />
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="absolute border-[#1f2937] border-solid border-t h-[49px] left-[16px] right-[16px] top-[268px]" data-name="HorizontalBorder">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[#9ca3af] text-[16px] text-center top-[35.75px] w-[300.597px]">
        <p className="leading-[24px]">© 2026 Vroom Paris. Tous droits réservés.</p>
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
      <Link3 />
      <Link4 />
      <Svg18 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[42.5px] justify-center leading-[0] left-[calc(50%-330.17px)] not-italic text-[16px] text-center text-white top-[175.75px] w-[284.77px]">
        <p className="leading-[24px]">4 bis Av. Alexandre Dumas, 95230 Soisy-sous-Montmorency</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%+0.26px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[215.174px]">
        <p className="leading-[28px]">Informations générales :</p>
      </div>
      <Nav />
      <Link9 />
      <Link10 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%+341.55px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[152.536px]">
        <p className="leading-[28px]">Mentions légales</p>
      </div>
      <Nav1 />
      <Link13 />
      <Link14 />
      <Link15 />
      <HorizontalBorder4 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#181818] h-[413px] left-0 right-0 top-[1806px]" data-name="Footer">
      <Container />
    </div>
  );
}

function MobileConfirmationCard({
  fullName,
  email,
  bookingDate,
  bookingTime,
  bookingFormat,
  onEdit,
  onCancel,
  onHome,
}: {
  fullName: string;
  email: string;
  bookingDate: string;
  bookingTime: string;
  bookingFormat: string;
  onEdit: () => void;
  onCancel: () => void;
  onHome: () => void;
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
            <p className="mt-1 text-[12px] text-[rgba(255,255,255,0.4)]">Étape 3 sur 3 — Confirmation</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3 text-[11px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(188,255,61,0.3)] bg-[rgba(188,255,61,0.15)] px-3 py-2 text-[#bcff3d]">
            <span className="inline-flex size-[22px] items-center justify-center rounded-[11px] border border-[rgba(188,255,61,0.3)] bg-[rgba(188,255,61,0.15)]">•</span>
            Créneau
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(188,255,61,0.3)] bg-[rgba(188,255,61,0.15)] px-3 py-2 text-[#bcff3d]">
            <span className="inline-flex size-[22px] items-center justify-center rounded-[11px] border border-[rgba(188,255,61,0.3)] bg-[rgba(188,255,61,0.15)]">•</span>
            Infos
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#bcff3d] px-3 py-2 font-semibold text-[#0c0d0c]">
            <span className="inline-flex size-[22px] items-center justify-center rounded-[11px] bg-[#bcff3d]">•</span>
            Confirmation
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex justify-center">
          <div className="relative flex size-[92px] items-center justify-center rounded-[32px] border border-[rgba(188,255,61,0.18)] bg-[rgba(188,255,61,0.12)]">
            <div className="relative flex size-[72px] items-center justify-center rounded-[28px] border border-[rgba(188,255,61,0.18)]">
              <Svg4 />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h2 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] text-[28px] font-extrabold text-white">
            Rendez-vous <span className="text-[#bcff3d]">confirmé !</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[36rem] text-[14px] leading-7 text-[rgba(255,255,255,0.55)]">
            Votre consultation est réservée, <span className="font-medium text-[rgba(255,255,255,0.9)]">{fullName}</span>. Un email de confirmation
            a été envoyé à <span className="font-medium text-[rgba(255,255,255,0.9)] break-all">{email}</span>. Votre conseiller vous contactera à l&apos;heure choisie.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <div className="rounded-[16px] border border-[rgba(188,255,61,0.15)] bg-[rgba(188,255,61,0.06)] p-4">
            <div className="text-[10px] uppercase tracking-[1px] text-[rgba(188,255,61,0.55)]">Créneau confirmé</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-flex rounded-full border border-[rgba(188,255,61,0.2)] bg-[rgba(188,255,61,0.1)] px-3 py-2 text-[12px] text-[#bcff3d]">{bookingDate}</span>
              <span className="inline-flex rounded-full border border-[rgba(188,255,61,0.2)] bg-[rgba(188,255,61,0.1)] px-3 py-2 text-[12px] text-[#bcff3d]">{bookingTime}</span>
            </div>
          </div>

          <div className="rounded-[16px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-4">
            <div className="text-[10px] uppercase tracking-[1px] text-[rgba(255,255,255,0.3)]">Format</div>
            <div className="mt-2 text-[14px] text-white">{bookingFormat}</div>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <button
            type="button"
            onClick={onHome}
            className="w-full rounded-[14px] bg-[#bcff3d] px-4 py-4 font-['Syne:Bold',sans-serif] text-[15px] font-bold tracking-[0.3px] text-[#0c0d0c]"
          >
            Retour à l&apos;accueil
          </button>
          <button
            type="button"
            onClick={onEdit}
            className="w-full rounded-[14px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-4 text-[14px] text-white"
          >
            Modifier mes informations
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="w-full rounded-[14px] border border-[rgba(255,255,255,0.08)] bg-transparent px-4 py-4 text-[14px] text-[rgba(255,255,255,0.65)]"
          >
            Annuler ce rendez-vous
          </button>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4 text-[11px] text-[rgba(255,255,255,0.28)]">
          <span>Confirmation par email</span>
          <span>Annulation gratuite 24h avant</span>
        </div>
      </div>
    </div>
  );
}

function MobileFooterConfirmation() {
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

function MobileEtape2FormulaireConseil({
  fullName,
  email,
  bookingDate,
  bookingTime,
  bookingFormat,
  onEdit,
  onCancel,
  onHome,
}: {
  fullName: string;
  email: string;
  bookingDate: string;
  bookingTime: string;
  bookingFormat: string;
  onEdit: () => void;
  onCancel: () => void;
  onHome: () => void;
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
          <MobileConfirmationCard
            fullName={fullName}
            email={email}
            bookingDate={bookingDate}
            bookingTime={bookingTime}
            bookingFormat={bookingFormat}
            onEdit={onEdit}
            onCancel={onCancel}
            onHome={onHome}
          />
        </section>

        <MobileFooterConfirmation />
      </div>
    </div>
  );
}

function DesktopEtape2FormulaireConseil({
  fullName,
  email,
  bookingDate,
  bookingTime,
  bookingFormat,
  onEdit,
  onCancel,
  onHome,
}: {
  fullName: string;
  email: string;
  bookingDate: string;
  bookingTime: string;
  bookingFormat: string;
  onEdit: () => void;
  onCancel: () => void;
  onHome: () => void;
}) {
  return (
    <div className="relative mx-auto hidden h-[2219px] w-[1440px] bg-[#181818] xl:block" data-name="etape 2 formulaire conseil">
      <div className="absolute h-[742.871px] left-[-464px] top-[-197px] w-[2664.781px]" data-name="Union">
        <div className="absolute inset-[-26.92%_-7.51%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3064.78 1142.87">
            <g filter="url(#filter0_f_6_1267)" id="Union">
              <path d={svgPaths.pd515c00} fill="url(#paint0_linear_6_1267)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1142.87" id="filter0_f_6_1267" width="3064.78" x="1.39163e-06" y="3.20925e-06">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_6_1267" stdDeviation="100" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_1267" x1="35.5207" x2="1147.95" y1="742.236" y2="-1039.64">
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
      <Heading />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[48.34px] justify-center leading-[0] left-[calc(50%+0.1px)] text-[17px] text-[rgba(255,255,255,0.55)] text-center top-[520.05px] w-[438.59px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[26.35px] mb-0">Choisissez votre créneau. Un expert VroomAdvisor vous</p>
        <p className="leading-[26.35px]">{`rappelle à l'heure choisie.`}</p>
      </div>
      <OverlayBorder fullName={fullName} email={email} bookingDate={bookingDate} bookingTime={bookingTime} bookingFormat={bookingFormat} onEdit={onEdit} onCancel={onCancel} onHome={onHome} />
      <Footer />
    </div>
  );
}

export default function Etape2FormulaireConseil() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const bookingDate = formatBookingDate(searchParams.get("date"));
  const bookingTime = formatBookingTime(searchParams.get("slot"), searchParams.get("duration"));
  const bookingFormat = formatBookingFormat(searchParams.get("format"));
  const fullName = formatFullName(searchParams.get("firstName"), searchParams.get("lastName"));
  const email = searchParams.get("email") || "jean.dupont@email.com";

  return (
    <div className="w-full bg-[#181818]">
      <MobileEtape2FormulaireConseil
        fullName={fullName}
        email={email}
        bookingDate={bookingDate}
        bookingTime={bookingTime}
        bookingFormat={bookingFormat}
        onEdit={() => navigate(`/conseils/formulaire?${searchParams.toString()}`)}
        onCancel={() => navigate(`/conseils?${searchParams.toString()}`)}
        onHome={() => navigate("/")}
      />
      <DesktopEtape2FormulaireConseil
        fullName={fullName}
        email={email}
        bookingDate={bookingDate}
        bookingTime={bookingTime}
        bookingFormat={bookingFormat}
        onEdit={() => navigate(`/conseils/formulaire?${searchParams.toString()}`)}
        onCancel={() => navigate(`/conseils?${searchParams.toString()}`)}
        onHome={() => navigate("/")}
      />
    </div>
  );
}
