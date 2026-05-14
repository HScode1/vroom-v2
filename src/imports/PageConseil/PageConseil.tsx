import { useState } from "react";
import { useSearchParams } from "react-router";
import svgPaths from "./svg-38w28sfzwv";

type BookingMonth = {
  id: string;
  label: string;
  leadingPreview: number[];
  trailingPreview: number[];
  dates: {
    day: number;
    weekday: string;
    available: boolean;
    isToday?: boolean;
  }[];
};

const BOOKING_MONTHS: BookingMonth[] = [
  {
    id: "2026-03",
    label: "Mars 2026",
    leadingPreview: [23, 24, 25, 26, 27, 28, 1],
    trailingPreview: [28, 29],
    dates: [
      { day: 9, weekday: "Lu", available: true },
      { day: 10, weekday: "Ma", available: true },
      { day: 11, weekday: "Me", available: true },
      { day: 12, weekday: "Je", available: true },
      { day: 13, weekday: "Ve", available: true, isToday: true },
      { day: 14, weekday: "Sa", available: true },
      { day: 15, weekday: "Di", available: true },
      { day: 16, weekday: "Lu", available: true },
      { day: 17, weekday: "Ma", available: true },
      { day: 18, weekday: "Me", available: true },
      { day: 19, weekday: "Je", available: true },
      { day: 20, weekday: "Ve", available: false },
      { day: 21, weekday: "Sa", available: true },
      { day: 22, weekday: "Di", available: true },
      { day: 23, weekday: "Lu", available: true },
      { day: 24, weekday: "Ma", available: true },
      { day: 25, weekday: "Me", available: true },
      { day: 26, weekday: "Je", available: true },
      { day: 27, weekday: "Ve", available: true },
      { day: 28, weekday: "Sa", available: true },
      { day: 29, weekday: "Di", available: true },
      { day: 30, weekday: "Lu", available: true },
      { day: 31, weekday: "Ma", available: true },
    ],
  },
  {
    id: "2026-04",
    label: "Avril 2026",
    leadingPreview: [30, 31, 1, 2, 3, 4, 5],
    trailingPreview: [18, 19],
    dates: [
      { day: 1, weekday: "Me", available: true },
      { day: 2, weekday: "Je", available: true },
      { day: 3, weekday: "Ve", available: true },
      { day: 6, weekday: "Lu", available: true },
      { day: 7, weekday: "Ma", available: true },
      { day: 8, weekday: "Me", available: false },
      { day: 9, weekday: "Je", available: true },
      { day: 10, weekday: "Ve", available: true },
      { day: 13, weekday: "Lu", available: true },
      { day: 14, weekday: "Ma", available: true },
      { day: 15, weekday: "Me", available: true },
      { day: 16, weekday: "Je", available: true },
      { day: 17, weekday: "Ve", available: true },
    ],
  },
];

const BOOKING_DURATIONS = [
  { id: "30", label: "30 min", description: "Conseil rapide", recommended: true },
  { id: "45", label: "45 min", description: "Analyse complète", recommended: false },
] as const;

const BOOKING_FORMATS = [
  { id: "visio", label: "Visio" },
  { id: "telephone", label: "Téléphone" },
  { id: "whatsapp", label: "WhatsApp" },
] as const;

const CALENDAR_WEEKDAYS = ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"] as const;

const BOOKING_SLOTS = [
  { time: "09:00", available: true },
  { time: "10:30", available: true },
  { time: "11:00", available: true },
  { time: "14:00", available: true },
  { time: "15:00", available: false },
  { time: "15:30", available: true },
  { time: "16:00", available: true },
  { time: "17:00", available: true },
  { time: "18:00", available: true },
] as const;

const FAQ_ITEMS = [
  {
    question: "Comment se déroule la consultation ?",
    answer:
      "Entièrement en ligne, en visio, au téléphone ou via WhatsApp selon votre préférence. Votre conseiller vous appelle à l'heure convenue, sans déplacement nécessaire.",
  },
  {
    question: "Quelle différence entre 30 et 45 minutes ?",
    answer:
      "30 minutes conviennent si votre projet est déjà bien cadré. 45 minutes permettent une analyse plus complète avec financement, reprise et comparatif détaillé.",
  },
  {
    question: "VroomAdvisor peut-il trouver n'importe quel véhicule ?",
    answer:
      "Les conseillers accèdent à l'ensemble du marché: occasion, neuf et commande constructeur. Le service n'est pas limité à un stock propriétaire.",
  },
  {
    question: "Puis-je annuler ou reporter mon rendez-vous ?",
    answer:
      "Oui. L'annulation et le report restent gratuits jusqu'à 24 heures avant le créneau choisi, via l'email de confirmation.",
  },
] as const;

function Group() {
  return (
    <div className="absolute inset-[0.8%_46.71%_97.84%_46.74%]">
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

function Svg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[17px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="SVG">
          <path d={svgPaths.p2cd22c80} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.41667" />
          <path d="M11.3333 1.41667V4.25" id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.41667" />
          <path d="M5.66667 1.41667V4.25" id="Vector_3" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.41667" />
          <path d="M2.125 7.08333H14.875" id="Vector_4" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.41667" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.1)] border border-[rgba(188,255,61,0.2)] border-solid left-[40px] rounded-[10px] size-[38px] top-1/2" data-name="Overlay+Border">
      <Svg />
    </div>
  );
}

function Svg1() {
  return (
    <div className="-translate-y-1/2 absolute left-[16px] size-[11px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_6_740)" id="SVG">
          <path d={svgPaths.p1f658e00} id="Vector" stroke="var(--stroke-0, #0C0D0C)" strokeWidth="1.14583" />
          <path d={svgPaths.p105d7900} id="Vector_2" stroke="var(--stroke-0, #0C0D0C)" strokeWidth="1.14583" />
        </g>
        <defs>
          <clipPath id="clip0_6_740">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#bcff3d] h-[27px] left-[873.44px] rounded-[100px] top-1/2 w-[204.56px]" data-name="Background">
      <Svg1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[33px] text-[#0c0d0c] text-[11px] top-1/2 tracking-[0.44px] w-[155.881px]">
        <p className="leading-[normal]">Prochain dispo : demain</p>
      </div>
    </div>
  );
}

function OverlayHorizontalBorder() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)] border-b border-solid h-[75px] left-0 right-0 top-0" data-name="Overlay+HorizontalBorder">
      <OverlayBorder1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[92px] text-[14px] text-white top-[28px] w-[273.006px]">
        <p className="leading-[normal]">Prise de rendez-vous VroomAdvisor</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[92px] text-[12px] text-[rgba(255,255,255,0.4)] top-[46.44px] w-[439px]">
        <p className="leading-[normal]">Sélectionnez une date, une durée et un créneau — nous faisons le reste.</p>
      </div>
      <Background />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid left-[475px] rounded-[10px] size-[34px] top-[40px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[17px] justify-center leading-[0] left-[calc(50%+0.15px)] not-italic text-[15px] text-[rgba(255,255,255,0.4)] text-center top-1/2 w-[5.3px]">
        <p className="leading-[normal]">‹</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid left-[515px] rounded-[10px] size-[34px] top-[40px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[17px] justify-center leading-[0] left-[calc(50%+0.15px)] not-italic text-[15px] text-[rgba(255,255,255,0.4)] text-center top-1/2 w-[5.3px]">
        <p className="leading-[normal]">›</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute aspect-[66.44000244140625/66.44000244140625] bg-[rgba(255,255,255,0.04)] left-[48px] right-[482.56px] rounded-[10px] top-[210.44px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.2px)] text-[15px] text-[rgba(255,255,255,0.7)] text-center top-1/2 w-[9.277px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="absolute aspect-[66.44000244140625/66.44000244140625] bg-[rgba(255,255,255,0.04)] left-[120.44px] right-[410.12px] rounded-[10px] top-[210.44px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.14px)] text-[15px] text-[rgba(255,255,255,0.7)] text-center top-1/2 w-[9.411px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="absolute aspect-[66.44000244140625/66.44000244140625] bg-[rgba(255,255,255,0.04)] left-[192.88px] right-[337.68px] rounded-[10px] top-[210.44px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[15px] text-[rgba(255,255,255,0.7)] text-center top-1/2 w-[9.462px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">4</p>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="absolute aspect-[66.44000244140625/66.44000244140625] bg-[rgba(255,255,255,0.04)] left-[265.31px] right-[265.25px] rounded-[10px] top-[210.44px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.14px)] text-[15px] text-[rgba(255,255,255,0.7)] text-center top-1/2 w-[9.725px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">5</p>
      </div>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="absolute aspect-[66.44000244140625/66.44000244140625] bg-[rgba(255,255,255,0.04)] left-[337.75px] right-[192.81px] rounded-[10px] top-[210.44px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.18px)] text-[15px] text-[rgba(255,255,255,0.7)] text-center top-1/2 w-[8.396px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">6</p>
      </div>
    </div>
  );
}

function Overlay5() {
  return (
    <div className="absolute aspect-[66.44000244140625/66.44000244140625] bg-[rgba(255,255,255,0.04)] left-[48px] right-[482.56px] rounded-[10px] top-[282.88px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.17px)] text-[15px] text-[rgba(255,255,255,0.7)] text-center top-1/2 w-[15.324px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">9</p>
      </div>
    </div>
  );
}

function Overlay6() {
  return (
    <div className="absolute aspect-[66.44000244140625/66.44000244140625] bg-[rgba(255,255,255,0.04)] left-[120.44px] right-[410.12px] rounded-[10px] top-[282.88px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.34px)] text-[15px] text-[rgba(255,255,255,0.7)] text-center top-[calc(50%+0.34px)] w-[18px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">10</p>
      </div>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="absolute aspect-[66.44000244140625/66.44000244140625] bg-[rgba(255,255,255,0.04)] border border-[rgba(188,255,61,0.38)] border-solid left-[192.88px] right-[337.68px] rounded-[10px] top-[282.88px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[#bcff3d] text-[15px] text-center top-1/2 w-[13.684px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">11</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[5px] left-[calc(50%-0.01px)] opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Overlay7() {
  return (
    <div className="absolute aspect-[66.44000244140625/66.44000244140625] bg-[rgba(255,255,255,0.04)] left-[265.31px] right-[265.25px] rounded-[10px] top-[282.88px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.17px)] text-[15px] text-[rgba(255,255,255,0.7)] text-center top-1/2 w-[13.907px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">12</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[5px] left-1/2 opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute aspect-[66.44000244140625/66.44000244140625] bg-[#bcff3d] left-[337.75px] right-[192.81px] rounded-[12px] top-[282.88px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[calc(50%+0.51px)] text-[#0c0d0c] text-[15px] text-center top-1/2 w-[15.278px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">13</p>
      </div>
    </div>
  );
}

function Overlay8() {
  return (
    <div className="absolute aspect-[66.44000244140625/66.44000244140625] bg-[rgba(255,255,255,0.04)] left-[48px] right-[482.56px] rounded-[10px] top-[355.32px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.28px)] text-[15px] text-[rgba(255,255,255,0.7)] text-center top-[calc(50%-0.1px)] w-[23px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">16</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[5.01px] left-1/2 opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Overlay9() {
  return (
    <div className="absolute aspect-[66.44000244140625/66.44000244140625] bg-[rgba(255,255,255,0.04)] left-[120.44px] right-[410.12px] rounded-[10px] top-[355.32px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.18px)] text-[15px] text-[rgba(255,255,255,0.7)] text-center top-[calc(50%-0.01px)] w-[14.17px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">17</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[5.01px] left-1/2 opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Overlay10() {
  return (
    <div className="absolute aspect-[66.44000244140625/66.44000244140625] bg-[rgba(255,255,255,0.04)] left-[192.88px] right-[337.68px] rounded-[10px] top-[355.32px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.17px)] text-[15px] text-[rgba(255,255,255,0.7)] text-center top-[calc(50%-0.01px)] w-[14.474px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">18</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[5.01px] left-[calc(50%-0.01px)] opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Overlay11() {
  return (
    <div className="absolute aspect-[66.44000244140625/66.44000244140625] bg-[rgba(255,255,255,0.04)] left-[265.31px] right-[265.25px] rounded-[10px] top-[355.32px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[15px] text-[rgba(255,255,255,0.7)] text-center top-[calc(50%-0.01px)] w-[19.081px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">19</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[5.01px] left-1/2 opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Overlay12() {
  return (
    <div className="absolute aspect-[66.44000244140625/66.44000244140625] bg-[rgba(255,255,255,0.04)] left-[337.75px] right-[192.81px] rounded-[10px] top-[355.32px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.53px)] text-[15px] text-[rgba(255,255,255,0.7)] text-center top-[calc(50%-0.1px)] w-[19px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">20</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[5.01px] left-1/2 opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Overlay13() {
  return (
    <div className="absolute aspect-[66.44000244140625/66.44000244140625] bg-[rgba(255,255,255,0.04)] left-[48px] right-[482.56px] rounded-[10px] top-[427.75px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[15px] text-[rgba(255,255,255,0.7)] text-center top-1/2 w-[17.803px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">23</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[5px] left-1/2 opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Overlay14() {
  return (
    <div className="absolute aspect-[66.44000244140625/66.44000244140625] bg-[rgba(255,255,255,0.04)] left-[120.44px] right-[410.12px] rounded-[10px] top-[427.75px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.14px)] text-[15px] text-[rgba(255,255,255,0.7)] text-center top-1/2 w-[18.105px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">24</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[5px] left-1/2 opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Overlay15() {
  return (
    <div className="absolute aspect-[66.44000244140625/66.44000244140625] bg-[rgba(255,255,255,0.04)] left-[120.44px] right-[410.12px] rounded-[10px] top-[500.44px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.14px)] text-[15px] text-[rgba(255,255,255,0.7)] text-center top-1/2 w-[18.105px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">31</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[5px] left-1/2 opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Overlay16() {
  return (
    <div className="absolute aspect-[66.44000244140625/66.44000244140625] bg-[rgba(255,255,255,0.04)] left-[192.88px] right-[337.68px] rounded-[10px] top-[427.75px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.14px)] text-[15px] text-[rgba(255,255,255,0.7)] text-center top-1/2 w-[18.367px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">25</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[5px] left-[calc(50%-0.01px)] opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Overlay17() {
  return (
    <div className="absolute aspect-[66.44000244140625/66.44000244140625] bg-[rgba(255,255,255,0.04)] left-[265.31px] right-[265.25px] rounded-[10px] top-[427.75px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+0.47px)] size-[20px] text-[15px] text-[rgba(255,255,255,0.7)] text-center top-[calc(50%+0.47px)]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">26</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[5px] left-1/2 opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Overlay18() {
  return (
    <div className="absolute aspect-[66.44000244140625/66.44000244140625] bg-[rgba(255,255,255,0.04)] left-[337.75px] right-[192.81px] rounded-[10px] top-[427.75px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.14px)] text-[15px] text-[rgba(255,255,255,0.7)] text-center top-1/2 w-[17.823px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">27</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[5px] left-1/2 opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Overlay19() {
  return (
    <div className="absolute aspect-[66.44000244140625/66.44000244140625] bg-[rgba(255,255,255,0.04)] left-[48px] right-[482.56px] rounded-[10px] top-[500.19px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%-0.22px)] text-[15px] text-[rgba(255,255,255,0.7)] text-center top-[calc(50%+0.03px)] w-[22px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">30</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[5px] left-1/2 opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t h-[35px] left-[48px] right-[48px] top-[588.61px]" data-name="HorizontalBorder">
      <div className="-translate-y-1/2 absolute bg-[#bcff3d] left-0 opacity-55 rounded-[4px] size-[8px] top-[calc(50%+10px)]" data-name="Background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[15px] text-[11px] text-[rgba(255,255,255,0.4)] top-[calc(50%+9.83px)] w-[74px]">
        <p className="leading-[normal]">Disponible</p>
      </div>
      <div className="-translate-y-1/2 absolute bg-[#bcff3d] left-[88.69px] rounded-[4px] size-[8px] top-[calc(50%+10px)]" data-name="Background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[104px] text-[11px] text-[rgba(255,255,255,0.4)] top-[calc(50%+9.83px)] w-[80px]">
        <p className="leading-[normal]">Sélectionné</p>
      </div>
      <div className="-translate-y-1/2 absolute border border-[rgba(188,255,61,0.5)] border-solid left-[183.52px] rounded-[4px] size-[8px] top-[calc(50%+10px)]" data-name="Border" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[199px] text-[11px] text-[rgba(255,255,255,0.4)] top-[calc(50%+9.83px)] w-[77px]">
        <p className="leading-[normal]">{`Aujourd'hui`}</p>
      </div>
    </div>
  );
}

function Calendrier() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-r border-solid inset-[75px_520px_0_0]" data-name="CALENDRIER">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[26px] justify-center leading-[0] left-[48px] text-[22px] text-white top-[57px] w-[125.864px]">
        <p className="leading-[normal]">Mars 2026</p>
      </div>
      <Button />
      <Button1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%-214.54px)] text-[11px] text-[rgba(255,255,255,0.25)] text-center top-[115px] tracking-[0.88px] uppercase w-[14.808px]">
        <p className="leading-[normal]">Lu</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%-142.99px)] text-[11px] text-[rgba(255,255,255,0.25)] text-center top-[115px] tracking-[0.88px] uppercase w-[18.638px]">
        <p className="leading-[normal]">Ma</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%-71.43px)] text-[11px] text-[rgba(255,255,255,0.25)] text-center top-[115px] tracking-[0.88px] uppercase w-[17.531px]">
        <p className="leading-[normal]">Me</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[11px] text-[rgba(255,255,255,0.25)] text-center top-[115px] tracking-[0.88px] uppercase w-[13.856px]">
        <p className="leading-[normal]">Je</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%+71.75px)] text-[11px] text-[rgba(255,255,255,0.25)] text-center top-[115px] tracking-[0.88px] uppercase w-[15.719px]">
        <p className="leading-[normal]">Ve</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%+143.33px)] text-[11px] text-[rgba(255,255,255,0.25)] text-center top-[115px] tracking-[0.88px] uppercase w-[15.831px]">
        <p className="leading-[normal]">Sa</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%+214.87px)] text-[11px] text-[rgba(255,255,255,0.25)] text-center top-[115px] tracking-[0.88px] uppercase w-[12.246px]">
        <p className="leading-[normal]">Di</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%-217.13px)] text-[15px] text-[rgba(255,255,255,0.07)] text-center top-[calc(50%-175.28px)] w-[17.803px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">23</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%-144.7px)] text-[15px] text-[rgba(255,255,255,0.07)] text-center top-[calc(50%-175.28px)] w-[18.105px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">24</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%-72.26px)] text-[15px] text-[rgba(255,255,255,0.07)] text-center top-[calc(50%-175.28px)] w-[18.367px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">25</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+4.5px)] text-[15px] text-[rgba(255,255,255,0.07)] text-center top-[calc(50%-175.06px)] w-[26px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">26</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+72.61px)] text-[15px] text-[rgba(255,255,255,0.07)] text-center top-[calc(50%-175.28px)] w-[17.823px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">27</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+145px)] text-[15px] text-[rgba(255,255,255,0.2)] text-center top-[calc(50%-175.06px)] w-[19px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">28</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+217.54px)] text-[15px] text-[rgba(255,255,255,0.2)] text-center top-[calc(50%-175.28px)] w-[9.031px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">1</p>
      </div>
      <Overlay />
      <Overlay1 />
      <Overlay2 />
      <Overlay3 />
      <Overlay4 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+145.06px)] text-[15px] text-[rgba(255,255,255,0.2)] text-center top-[calc(50%-102.84px)] w-[9.432px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">7</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+217.49px)] text-[15px] text-[rgba(255,255,255,0.2)] text-center top-[calc(50%-102.84px)] w-[9.725px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">8</p>
      </div>
      <Overlay5 />
      <Overlay6 />
      <OverlayBorder2 />
      <Overlay7 />
      <Background1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+145.08px)] text-[15px] text-[rgba(255,255,255,0.2)] text-center top-[calc(50%-30.4px)] w-[14.2px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">14</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+217.52px)] text-[15px] text-[rgba(255,255,255,0.2)] text-center top-[calc(50%-30.4px)] w-[14.474px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">15</p>
      </div>
      <Overlay8 />
      <Overlay9 />
      <Overlay10 />
      <Overlay11 />
      <Overlay12 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+145.06px)] text-[15px] text-[rgba(255,255,255,0.2)] text-center top-[calc(50%+42.03px)] w-[17.582px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">21</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+217.49px)] text-[15px] text-[rgba(255,255,255,0.2)] text-center top-[calc(50%+42.03px)] w-[17.823px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">22</p>
      </div>
      <Overlay13 />
      <Overlay14 />
      <Overlay15 />
      <Overlay16 />
      <Overlay17 />
      <Overlay18 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+145.05px)] text-[15px] text-[rgba(255,255,255,0.2)] text-center top-[calc(50%+114.47px)] w-[18.226px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">28</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+217.5px)] text-[15px] text-[rgba(255,255,255,0.2)] text-center top-[calc(50%+114.47px)] w-[19.453px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">29</p>
      </div>
      <Overlay19 />
      <HorizontalBorder />
    </div>
  );
}

function Svg2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[17px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="SVG">
          <path d={svgPaths.p2cd22c80} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.41667" />
          <path d="M11.3333 1.41667V4.25" id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.41667" />
          <path d="M5.66667 1.41667V4.25" id="Vector_3" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.41667" />
          <path d="M2.125 7.08333H14.875" id="Vector_4" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.41667" />
        </g>
      </svg>
    </div>
  );
}

function Overlay20() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.12)] left-[20px] rounded-[10px] size-[40px] top-1/2" data-name="Overlay">
      <Svg2 />
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.06)] border border-[rgba(188,255,61,0.16)] border-solid h-[74px] left-[44px] right-[44px] rounded-[14px] top-[36px]" data-name="Overlay+Border">
      <Overlay20 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] left-[74px] text-[15px] text-white top-[27.5px] w-[183.813px]">
        <p className="leading-[normal]">Vendredi 13 mars 2026</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[74px] text-[11px] text-[rgba(255,255,255,0.4)] top-[46.5px] w-[206.78px]">
        <p className="leading-[normal]">Cliquez sur une autre date pour modifier</p>
      </div>
    </div>
  );
}

function Overlay21() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(188,255,61,0.14)] h-[18px] left-[calc(50%-0.01px)] rounded-[100px] top-[65px] w-[92.3px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[calc(50%+0.32px)] text-[#bcff3d] text-[9px] text-center top-[9px] tracking-[0.9px] uppercase w-[72.946px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Recommandé</p>
      </div>
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.07)] border border-[#bcff3d] border-solid inset-[155px_265px_437px_44px] rounded-[14px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[25px] justify-center leading-[0] left-[calc(50%+0.18px)] text-[#bcff3d] text-[20px] text-center top-[28.5px] w-[109.319px]">
        <p className="leading-[normal]">30 min</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-1/2 text-[11px] text-[rgba(188,255,61,0.45)] text-center top-[49.44px] w-[91px]">
        <p className="leading-[normal]">Conseil rapide</p>
      </div>
      <Overlay21 />
    </div>
  );
}

function ParagraphOverlayBorder() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid inset-[155px_44px_437px_265px] leading-[0] rounded-[14px] text-center" data-name="Paragraph+Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[25px] justify-center left-[calc(50%+0.17px)] text-[20px] text-[rgba(255,255,255,0.4)] top-[28.5px] w-[109.068px]">
        <p className="leading-[normal]">45 min</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center left-[calc(50%-0.5px)] text-[11px] text-[rgba(255,255,255,0.25)] top-[49.44px] w-[100px]">
        <p className="leading-[normal]">Analyse complète</p>
      </div>
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[44px] left-[44px] right-[337.34px] rounded-[11px] top-[301px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[14px] text-[rgba(255,255,255,0.4)] text-center top-[21px] w-[40.683px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">09:00</p>
      </div>
    </div>
  );
}

function OverlayBorder6() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.1)] border border-[#bcff3d] border-solid h-[44px] left-[190.66px] right-[190.67px] rounded-[11px] top-[301px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[18px] justify-center leading-[0] left-[calc(50%+0.41px)] text-[#bcff3d] text-[14px] text-center top-[21px] w-[36.153px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">10:30</p>
      </div>
    </div>
  );
}

function OverlayBorder7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[44px] left-[337.33px] right-[44px] rounded-[11px] top-[301px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[calc(50%+0.19px)] text-[14px] text-[rgba(255,255,255,0.4)] text-center top-[21px] w-[31.106px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">11:00</p>
      </div>
    </div>
  );
}

function OverlayBorder8() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[44px] left-[44px] right-[337.34px] rounded-[11px] top-[353px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[calc(50%+0.14px)] text-[14px] text-[rgba(255,255,255,0.4)] text-center top-[21px] w-[35.166px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">14:00</p>
      </div>
    </div>
  );
}

function OverlayBorder9() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[44px] left-[190.66px] opacity-25 right-[190.67px] rounded-[11px] top-[353px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[calc(50%+0.18px)] text-[12px] text-[rgba(255,255,255,0.4)] text-center top-[20px] w-[30.291px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[normal] line-through">15:00</p>
      </div>
    </div>
  );
}

function OverlayBorder10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[44px] left-[337.33px] right-[44px] rounded-[11px] top-[353px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[calc(50%+0.14px)] text-[14px] text-[rgba(255,255,255,0.4)] text-center top-[21px] w-[33.892px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">15:30</p>
      </div>
    </div>
  );
}

function OverlayBorder11() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[44px] left-[44px] right-[337.34px] rounded-[11px] top-[405px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[calc(50%+0.14px)] text-[14px] text-[rgba(255,255,255,0.4)] text-center top-[21px] w-[35.447px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">16:00</p>
      </div>
    </div>
  );
}

function OverlayBorder12() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[44px] left-[190.66px] right-[190.67px] rounded-[11px] top-[405px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[14px] text-[rgba(255,255,255,0.4)] text-center top-[21px] w-[34.133px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">17:00</p>
      </div>
    </div>
  );
}

function OverlayBorder13() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[44px] left-[337.33px] right-[44px] rounded-[11px] top-[405px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[14px] text-[rgba(255,255,255,0.4)] text-center top-[21px] w-[35.186px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">18:00</p>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative size-[15px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p27db0c80} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder14() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.07)] border border-[#bcff3d] border-solid inset-[494px_337.33px_136px_44px] rounded-[12px]" data-name="Overlay+Border">
      <Svg3 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[calc(50%+0.44px)] text-[#bcff3d] text-[12px] text-center top-[41px] w-[28.383px]">
        <p className="leading-[normal]">Visio</p>
      </div>
    </div>
  );
}

function MdiPhone() {
  return (
    <div className="relative size-[18px]" data-name="mdi:phone">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="mdi:phone">
          <path d={svgPaths.p3416a200} fill="var(--fill-0, #757575)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder15() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid inset-[494px_190.66px_136px_190.67px] rounded-[12px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[calc(50%+0.49px)] text-[12px] text-[rgba(255,255,255,0.4)] text-center top-[42.44px] w-[69px]">
        <p className="leading-[normal]">Téléphone</p>
      </div>
      <MdiPhone />
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative size-[15px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p21ee9780} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.4" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder16() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid inset-[494px_43.99px_136px_337.34px] rounded-[12px]" data-name="Overlay+Border">
      <Svg4 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[calc(50%+0.33px)] text-[12px] text-[rgba(255,255,255,0.4)] text-center top-[42.44px] w-[64px]">
        <p className="leading-[normal]">WhatsApp</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#bcff3d] h-[52px] left-[44px] right-[44px] rounded-[14px] top-[581px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] left-[calc(50%+0.19px)] text-[#0c0d0c] text-[15px] text-center top-1/2 tracking-[0.3px] w-[238.055px]">
        <p className="leading-[normal]">Confirmer ma réservation →</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="absolute inset-[75px_0_0_598px]" data-name="OPTIONS">
      <OverlayBorder3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[13px] justify-center leading-[0] left-[44px] text-[10px] text-[rgba(255,255,255,0.25)] top-[140.94px] tracking-[1.4px] uppercase w-[201px]">
        <p className="leading-[normal]">Durée de la consultation</p>
      </div>
      <OverlayBorder4 />
      <ParagraphOverlayBorder />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[13px] justify-center leading-[0] left-[44px] text-[10px] text-[rgba(255,255,255,0.25)] top-[286.5px] tracking-[1.4px] uppercase w-[143.511px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Créneaux disponibles</p>
      </div>
      <OverlayBorder5 />
      <OverlayBorder6 />
      <OverlayBorder7 />
      <OverlayBorder8 />
      <OverlayBorder9 />
      <OverlayBorder10 />
      <OverlayBorder11 />
      <OverlayBorder12 />
      <OverlayBorder13 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[13px] justify-center leading-[0] left-[44px] text-[10px] text-[rgba(255,255,255,0.25)] top-[479.5px] tracking-[1.4px] uppercase w-[156.902px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Format du rendez-vous</p>
      </div>
      <OverlayBorder14 />
      <OverlayBorder15 />
      <OverlayBorder16 />
      <Button2 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%+1.01px)] text-[11px] text-[rgba(255,255,255,0.25)] text-center top-[650px] w-[314.586px]">
        <p className="leading-[normal]">{`Confirmation par email · Annulation gratuite jusqu'à 24h avant`}</p>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[770px] left-[80px] overflow-clip right-[80px] rounded-[28px] top-0" data-name="Overlay+Border">
      <OverlayHorizontalBorder />
      <Calendrier />
      <Options />
    </div>
  );
}

function BookingCard() {
  const [searchParams] = useSearchParams();
  const requestedDate = searchParams.get("date");
  const requestedMonthId = requestedDate?.slice(0, 7);
  const requestedDay = Number(requestedDate?.slice(8, 10));
  const requestedDurationLabel = searchParams.get("duration");
  const requestedSlot = searchParams.get("slot");
  const requestedFormat = searchParams.get("format");

  const initialMonthIndex = Math.max(
    0,
    BOOKING_MONTHS.findIndex((month) => month.id === requestedMonthId),
  );
  const initialMonth = BOOKING_MONTHS[initialMonthIndex] ?? BOOKING_MONTHS[0];
  const initialDate =
    initialMonth.dates.find((date) => date.day === requestedDay && date.available)?.day ??
    initialMonth.dates.find((date) => date.available)?.day ??
    initialMonth.dates[0].day;
  const initialDuration =
    BOOKING_DURATIONS.find((duration) => duration.label === requestedDurationLabel)?.id ?? "30";
  const initialSlot =
    BOOKING_SLOTS.find((slot) => slot.time === requestedSlot && slot.available)?.time ?? "10:30";
  const initialFormat =
    BOOKING_FORMATS.find((format) => format.id === requestedFormat)?.id ?? "visio";

  const [activeMonthIndex, setActiveMonthIndex] = useState(initialMonthIndex);
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [selectedDuration, setSelectedDuration] = useState(initialDuration);
  const [selectedSlot, setSelectedSlot] = useState(initialSlot);
  const [selectedFormat, setSelectedFormat] = useState(initialFormat);

  const activeMonth = BOOKING_MONTHS[activeMonthIndex];
  const selectedDateItem = activeMonth.dates.find((date) => date.day === selectedDate) ?? activeMonth.dates[0];
  const selectedDurationItem = BOOKING_DURATIONS.find((duration) => duration.id === selectedDuration) ?? BOOKING_DURATIONS[0];
  let currentRow = 0;
  let previousWeekdayIndex = -1;
  const calendarCells = activeMonth.dates.map((date) => {
    const weekdayIndex = CALENDAR_WEEKDAYS.indexOf(date.weekday);

    if (previousWeekdayIndex !== -1 && weekdayIndex <= previousWeekdayIndex) {
      currentRow += 1;
    }

    previousWeekdayIndex = weekdayIndex;

    return {
      ...date,
      row: currentRow,
      col: weekdayIndex,
    };
  });

  return (
    <div className="absolute h-[850px] left-[80px] right-[80px] top-[658.56px]" data-name="BOOKING CARD">
      <div className="absolute bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid inset-x-0 top-0 h-[770px] overflow-hidden rounded-[28px]">
        <div className="absolute bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)] border-b border-solid h-[75px] inset-x-0 top-0">
          <div className="absolute bg-[rgba(188,255,61,0.1)] border border-[rgba(188,255,61,0.2)] border-solid left-[40px] rounded-[10px] size-[38px] top-[18px]">
            <Svg />
          </div>
          <div className="absolute left-[92px] top-[18px]">
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[14px] text-white">Prise de rendez-vous VroomAdvisor</p>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-[rgba(255,255,255,0.4)]">
              Sélectionnez une date, une durée et un créneau.
            </p>
          </div>
          <div className="absolute bg-[#bcff3d] h-[27px] right-[42px] rounded-[100px] top-[24px] w-[204px]">
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[27px] text-[#0c0d0c] text-[11px] text-center tracking-[0.44px]">
              Prochain dispo : demain
            </p>
          </div>
        </div>

        <div className="absolute border-[rgba(255,255,255,0.08)] border-r border-solid bottom-0 left-0 top-[75px] w-[598px]">
          <div className="absolute left-[48px] top-[42px]">
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[22px] text-white">{activeMonth.label}</p>
          </div>
          <button
            type="button"
            className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid left-[475px] rounded-[10px] size-[34px] top-[40px] text-[rgba(255,255,255,0.4)]"
            onClick={() =>
              setActiveMonthIndex((current) => {
                const nextIndex = Math.max(0, current - 1);
                setSelectedDate(BOOKING_MONTHS[nextIndex].dates[0].day);
                return nextIndex;
              })
            }
          >
            ‹
          </button>
          <button
            type="button"
            className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid left-[515px] rounded-[10px] size-[34px] top-[40px] text-[rgba(255,255,255,0.4)]"
            onClick={() =>
              setActiveMonthIndex((current) => {
                const nextIndex = Math.min(BOOKING_MONTHS.length - 1, current + 1);
                setSelectedDate(BOOKING_MONTHS[nextIndex].dates[0].day);
                return nextIndex;
              })
            }
          >
            ›
          </button>

          {CALENDAR_WEEKDAYS.map((weekday, index) => (
            <div
              key={weekday}
              className="absolute text-[11px] text-[rgba(255,255,255,0.25)] text-center tracking-[0.88px] uppercase"
              style={{ left: `${48 + index * 72.44}px`, top: "104px", width: "66.44px" }}
            >
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] leading-[14px]">{weekday}</p>
            </div>
          ))}

          {activeMonth.leadingPreview.map((day, index) => (
            <div
              key={`leading-${activeMonth.id}-${day}-${index}`}
              className="absolute text-[15px] text-[rgba(255,255,255,0.07)] text-center"
              style={{ left: `${48 + (index % 7) * 72.44}px`, top: "150px", width: "66.44px" }}
            >
              <p className="font-['DM_Sans:9pt_Regular',sans-serif] leading-[66.44px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                {day}
              </p>
            </div>
          ))}

          {calendarCells.map((date) => {
            const isSelected = date.day === selectedDate;
            const isDisabled = !date.available;
            const left = 48 + date.col * 72.44;
            const top = 210.44 + date.row * 72.44;

            let className =
              "absolute aspect-square w-[66.44px] rounded-[10px] border transition-colors duration-150 ";

            if (isSelected) {
              className += "bg-[#bcff3d] border-[#bcff3d] text-[#0c0d0c]";
            } else if (date.isToday) {
              className += "bg-[rgba(255,255,255,0.04)] border-[rgba(188,255,61,0.38)] text-[#bcff3d]";
            } else if (isDisabled) {
              className += "bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.4)] opacity-25";
            } else {
              className += "bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.7)] hover:border-[rgba(188,255,61,0.38)]";
            }

            return (
              <button
                key={`${activeMonth.id}-${date.day}`}
                type="button"
                disabled={isDisabled}
                onClick={() => setSelectedDate(date.day)}
                className={`${className} p-0`}
                style={{ left: `${left}px`, top: `${top}px` }}
              >
                <span
                  className={`absolute inset-0 flex items-center justify-center font-['DM_Sans:9pt_Regular',sans-serif] text-[15px] ${
                    isSelected ? "font-bold" : ""
                  }`}
                  style={{ fontVariationSettings: "'opsz' 9" }}
                >
                  {date.day}
                </span>
                {!isSelected && !isDisabled && (
                  <span className="absolute bg-[#bcff3d] bottom-[5px] left-1/2 opacity-55 rounded-[2px] size-[4px] -translate-x-1/2" />
                )}
                {date.isToday && !isSelected && (
                  <span className="absolute bg-[#bcff3d] bottom-[5px] left-1/2 opacity-55 rounded-[2px] size-[4px] -translate-x-1/2" />
                )}
              </button>
            );
          })}

          {activeMonth.trailingPreview.map((day, index) => (
            <div
              key={`trailing-${activeMonth.id}-${day}-${index}`}
              className="absolute text-[15px] text-[rgba(255,255,255,0.2)] text-center"
              style={{ left: `${48 + (5 + index) * 72.44}px`, top: "500.19px", width: "66.44px" }}
            >
              <p className="font-['DM_Sans:9pt_Regular',sans-serif] leading-[66.44px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                {day}
              </p>
            </div>
          ))}

          <div className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t bottom-[34px] left-[48px] right-[48px] top-[590px]">
            <div className="absolute flex gap-6 left-0 top-[16px]">
              <div className="flex items-center gap-2 text-[11px] text-[rgba(255,255,255,0.4)]">
                <span className="bg-[#bcff3d] opacity-55 rounded-[4px] size-[8px]" />
                <span>Disponible</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[rgba(255,255,255,0.4)]">
                <span className="bg-[#bcff3d] rounded-[4px] size-[8px]" />
                <span>Sélectionné</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[rgba(255,255,255,0.4)]">
                <span className="border border-[rgba(188,255,61,0.5)] rounded-[4px] size-[8px]" />
                <span>Aujourd&apos;hui</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-[598px] right-0 top-[75px]">
          <div className="absolute bg-[rgba(188,255,61,0.06)] border border-[rgba(188,255,61,0.16)] border-solid left-[44px] right-[44px] rounded-[14px] top-[36px] h-[74px] pl-[74px] pr-[32px] py-[18px]">
            <div className="absolute bg-[rgba(188,255,61,0.12)] left-[20px] rounded-[10px] size-[40px] top-[17px]">
              <Svg2 />
            </div>
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[15px] text-white">
              {selectedDateItem.weekday} {selectedDate} {activeMonth.label}
            </p>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[11px] text-[rgba(255,255,255,0.4)]">
              Créneau choisi : {selectedSlot} · Format : {BOOKING_FORMATS.find((item) => item.id === selectedFormat)?.label}
            </p>
          </div>

          <div className="absolute left-[44px] top-[140px]">
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[10px] text-[rgba(255,255,255,0.25)] tracking-[1.4px] uppercase">
              Durée de la consultation
            </p>
          </div>
          <div className="absolute grid grid-cols-2 gap-4 left-[44px] right-[44px] top-[155px]">
            {BOOKING_DURATIONS.map((duration) => {
              const isSelected = duration.id === selectedDuration;
              return (
                <button
                  key={duration.id}
                  type="button"
                  onClick={() => setSelectedDuration(duration.id)}
                  className={`relative h-[88px] rounded-[14px] border text-center transition-colors ${
                    isSelected
                      ? "bg-[rgba(188,255,61,0.07)] border-[#bcff3d]"
                      : "bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)] hover:border-[rgba(188,255,61,0.28)]"
                  }`}
                >
                  <p className={`font-['Syne:ExtraBold',sans-serif] mt-[18px] text-[20px] ${isSelected ? "text-[#bcff3d]" : "text-[rgba(255,255,255,0.4)]"}`}>
                    {duration.label}
                  </p>
                  <p className={`font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[11px] ${isSelected ? "text-[rgba(188,255,61,0.45)]" : "text-[rgba(255,255,255,0.25)]"}`}>
                    {duration.description}
                  </p>
                  {duration.recommended && (
                    <span className="absolute bg-[rgba(188,255,61,0.14)] rounded-[100px] px-3 py-1 right-[14px] top-[10px] text-[#bcff3d] text-[9px] tracking-[0.9px] uppercase">
                      Recommandé
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="absolute left-[44px] top-[286px]">
            <p className="font-['DM_Sans:Medium',sans-serif] text-[10px] text-[rgba(255,255,255,0.25)] tracking-[1.4px] uppercase">
              Créneaux disponibles
            </p>
          </div>
          <div className="absolute grid grid-cols-3 gap-4 left-[44px] right-[44px] top-[301px]">
            {BOOKING_SLOTS.map((slot) => {
              const isSelected = slot.time === selectedSlot;
              return (
                <button
                  key={slot.time}
                  type="button"
                  disabled={!slot.available}
                  onClick={() => setSelectedSlot(slot.time)}
                  className={`h-[44px] rounded-[11px] border text-[14px] transition-colors ${
                    isSelected
                      ? "bg-[rgba(188,255,61,0.1)] border-[#bcff3d] text-[#bcff3d]"
                      : slot.available
                        ? "bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.4)] hover:border-[rgba(188,255,61,0.28)]"
                        : "bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.25)] line-through opacity-25"
                  }`}
                >
                  {slot.time}
                </button>
              );
            })}
          </div>

          <div className="absolute left-[44px] top-[479px]">
            <p className="font-['DM_Sans:Medium',sans-serif] text-[10px] text-[rgba(255,255,255,0.25)] tracking-[1.4px] uppercase">
              Format du rendez-vous
            </p>
          </div>
          <div className="absolute grid grid-cols-3 gap-4 left-[44px] right-[44px] top-[494px]">
            {BOOKING_FORMATS.map((format) => {
              const isSelected = format.id === selectedFormat;
              return (
                <button
                  key={format.id}
                  type="button"
                  onClick={() => setSelectedFormat(format.id)}
                  className={`h-[88px] rounded-[12px] border text-center transition-colors ${
                    isSelected
                      ? "bg-[rgba(188,255,61,0.07)] border-[#bcff3d] text-[#bcff3d]"
                      : "bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.4)] hover:border-[rgba(188,255,61,0.28)]"
                  }`}
                >
                  <span className="relative block h-full">
                    {format.id === "visio" && (
                      <span className="absolute left-1/2 top-[14px] -translate-x-1/2">
                        <Svg3 />
                      </span>
                    )}
                    {format.id === "telephone" && (
                      <span className="absolute left-1/2 top-[14px] -translate-x-1/2">
                        <MdiPhone />
                      </span>
                    )}
                    {format.id === "whatsapp" && (
                      <span className="absolute left-1/2 top-[14px] -translate-x-1/2">
                        <Svg4 />
                      </span>
                    )}
                    <span className="block pt-[42px] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[12px]">{format.label}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <a
            href={`/conseils/formulaire?date=${activeMonth.id}-${String(selectedDate).padStart(2, "0")}&duration=${selectedDurationItem.label}&slot=${selectedSlot}&format=${selectedFormat}`}
            className="absolute bg-[#bcff3d] h-[52px] left-[44px] right-[44px] rounded-[14px] top-[596px]"
          >
            <span className="block font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[52px] text-[#0c0d0c] text-[15px] text-center tracking-[0.3px]">
              Confirmer ma réservation →
            </span>
          </a>

          <div className="absolute left-[44px] right-[44px] top-[664px]">
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[11px] text-[rgba(255,255,255,0.25)] text-center">
              Confirmation par email · Annulation gratuite jusqu&apos;à 24h avant
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[113.59px] left-0 top-[88px] w-[290.86px]" data-name="Container">
      <div className="-translate-y-1/2 absolute bg-[#bcff3d] h-px left-0 opacity-60 top-[calc(50%-49.79px)] w-[28px]" data-name="Horizontal Divider" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-[40px] opacity-80 text-[#bcff3d] text-[11px] top-[7px] tracking-[1.76px] uppercase w-[76.457px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Le service</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[86.8px] justify-center leading-[0] left-0 text-[38px] text-white top-[71.4px] tracking-[-0.76px] w-[291.626px]">
        <p className="leading-[41.8px] mb-0">Ce qui est</p>
        <p className="leading-[41.8px] text-[#bcff3d]">inclus</p>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[22px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="SVG">
          <path d={svgPaths.p2c7d5b00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.65" />
          <path d={svgPaths.p34f9e600} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.65" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder17() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.16)] border-solid left-1/2 rounded-[14px] size-[48px] top-[28px]" data-name="Overlay+Border">
      <Svg5 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid inset-[261px_943.34px_80px_0] overflow-clip rounded-[20px]" data-name="Background+Border">
      <OverlayBorder17 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[12px] text-center text-white top-[99px] w-[137.997px]">
        <p className="leading-[15.6px]">Consultation en ligne</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%+0.37px)] text-[11px] text-[rgba(255,255,255,0.4)] text-center top-[120.6px] w-[117.794px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[15.4px]">Visio, tél. ou WhatsApp</p>
      </div>
      <div className="absolute bottom-[-30.01px] right-[-30px] size-[80px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 80 80\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(5.6569 0 0 5.6569 40 40)\\'><stop stop-color=\\'rgba(188,255,61,0.08)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
    </div>
  );
}

function Svg6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[22px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="SVG">
          <path d={svgPaths.p26859400} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.65" />
          <path d="M19.25 19.25L15.2625 15.2625" id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.65" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder18() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.16)] border-solid left-[calc(50%-0.01px)] rounded-[14px] size-[48px] top-[28px]" data-name="Overlay+Border">
      <Svg6 />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid inset-[261px_754.67px_80px_188.66px] overflow-clip rounded-[20px]" data-name="Background+Border">
      <OverlayBorder18 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[calc(50%+0.18px)] text-[12px] text-center text-white top-[99px] w-[108.978px]">
        <p className="leading-[15.6px]">Analyse de profil</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%+0.36px)] text-[11px] text-[rgba(255,255,255,0.4)] text-center top-[120.6px] w-[114.458px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[15.4px]">Budget, usage, fiabilité</p>
      </div>
      <div className="absolute bottom-[-30.01px] right-[-30px] size-[80px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 80 80\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(5.6569 0 0 5.6569 40 40)\\'><stop stop-color=\\'rgba(188,255,61,0.08)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
    </div>
  );
}

function Svg7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[22px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="SVG">
          <path d={svgPaths.p3e29e880} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.65" />
          <path d="M7.33333 19.25H14.6667" id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.65" />
          <path d="M11 15.5833V19.25" id="Vector_3" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.65" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder19() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.16)] border-solid left-1/2 rounded-[14px] size-[48px] top-[28px]" data-name="Overlay+Border">
      <Svg7 />
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid inset-[261px_566px_80px_377.33px] overflow-clip rounded-[20px]" data-name="Background+Border">
      <OverlayBorder19 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[calc(50%+0.19px)] text-[12px] text-center text-white top-[99px] w-[104.441px]">
        <p className="leading-[15.6px]">Sélection ciblée</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%+0.33px)] text-[11px] text-[rgba(255,255,255,0.4)] text-center top-[120.6px] w-[100.433px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[15.4px]">Comparatif objectif</p>
      </div>
      <div className="absolute bottom-[-30.01px] right-[-30px] size-[80px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 80 80\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(5.6569 0 0 5.6569 40 40)\\'><stop stop-color=\\'rgba(188,255,61,0.08)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
    </div>
  );
}

function MaterialSymbolsEuroRounded() {
  return (
    <div className="absolute left-[12.67px] size-[21px] top-[12px]" data-name="material-symbols:euro-rounded">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="material-symbols:euro-rounded">
          <path d={svgPaths.p117da600} fill="var(--fill-0, #BCFF3D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder20() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.16)] border-solid left-1/2 rounded-[14px] size-[48px] top-[28px]" data-name="Overlay+Border">
      <MaterialSymbolsEuroRounded />
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid inset-[261px_377.34px_80px_566px] overflow-clip rounded-[20px]" data-name="Background+Border">
      <OverlayBorder20 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[12px] text-center text-white top-[99px] w-[80.984px]">
        <p className="leading-[15.6px]">Négociation</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%+0.4px)] text-[11px] text-[rgba(255,255,255,0.4)] text-center top-[120.6px] w-[128.705px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[15.4px]">Prix, reprise, financement</p>
      </div>
      <div className="absolute bottom-[-30.01px] right-[-30px] size-[80px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 80 80\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(5.6569 0 0 5.6569 40 40)\\'><stop stop-color=\\'rgba(188,255,61,0.08)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
    </div>
  );
}

function Svg8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[22px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="SVG">
          <path d={svgPaths.p1e919e00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.65" />
          <path d={svgPaths.p1621c00} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.65" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder21() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.16)] border-solid left-[calc(50%-0.01px)] rounded-[14px] size-[48px] top-[28px]" data-name="Overlay+Border">
      <Svg8 />
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid inset-[261px_188.67px_80px_754.66px] overflow-clip rounded-[20px]" data-name="Background+Border">
      <OverlayBorder21 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[12px] text-center text-white top-[99px] w-[130.961px]">
        <p className="leading-[15.6px]">Livraison à domicile</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%+0.28px)] text-[11px] text-[rgba(255,255,255,0.4)] text-center top-[120.6px] w-[120.04px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[15.4px]">Clé en main, si souhaité</p>
      </div>
      <div className="absolute bottom-[-30.01px] right-[-30px] size-[80px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 80 80\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(5.6569 0 0 5.6569 40 40)\\'><stop stop-color=\\'rgba(188,255,61,0.08)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
    </div>
  );
}

function Svg9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[22px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="SVG">
          <path d={svgPaths.p25473800} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.65" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder22() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.16)] border-solid left-1/2 rounded-[14px] size-[48px] top-[28px]" data-name="Overlay+Border">
      <Svg9 />
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid inset-[261px_0_80px_943.33px] overflow-clip rounded-[20px]" data-name="Background+Border">
      <OverlayBorder22 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[14px] justify-center leading-[0] left-[calc(50%+0.17px)] text-[12px] text-center text-white top-[99px] w-[97.57px]">
        <p className="leading-[15.6px]">Achat sécurisé</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%+0.46px)] text-[11px] text-[rgba(255,255,255,0.4)] text-center top-[120.6px] w-[118.629px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[15.4px]">Zéro mauvaise surprise</p>
      </div>
      <div className="absolute bottom-[-30.01px] right-[-30px] size-[80px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 80 80\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(5.6569 0 0 5.6569 40 40)\\'><stop stop-color=\\'rgba(188,255,61,0.08)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
    </div>
  );
}

function SectionServiceIconesVisuelles() {
  return (
    <div className="absolute h-[495.98px] left-[80px] right-[80px] top-px" data-name="Section - SERVICE — ICÔNES VISUELLES">
      <Container />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[98.75px] justify-center leading-[0] left-[740px] text-[15px] text-[rgba(255,255,255,0.4)] top-[152.38px] w-[372.26px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[26.25px] mb-0">{`VroomAdvisor, c'est bien plus qu'un simple conseil.`}</p>
        <p className="leading-[26.25px] mb-0">{`C'est un accompagnement complet, de la définition`}</p>
        <p className="leading-[26.25px] mb-0">{`de vos besoins jusqu'à la remise des clés, par un`}</p>
        <p className="leading-[26.25px]">expert dédié.</p>
      </div>
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder3 />
      <BackgroundBorder4 />
      <BackgroundBorder5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[113.59px] left-0 top-[72px] w-[396.23px]" data-name="Container">
      <div className="-translate-y-1/2 absolute bg-[#bcff3d] h-px left-0 opacity-60 top-[calc(50%-49.79px)] w-[28px]" data-name="Horizontal Divider" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-[40px] opacity-80 text-[#bcff3d] text-[11px] top-[7px] tracking-[1.76px] uppercase w-[99.133px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Le processus</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[86.79px] justify-center leading-[0] left-0 text-[38px] text-white top-[71.4px] tracking-[-0.76px] w-[397.048px]">
        <p className="leading-[41.8px] mb-0">Comment ça</p>
        <p className="leading-[41.8px] text-[#bcff3d]">marche ?</p>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="-translate-y-1/2 absolute left-[12px] size-[10px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="SVG">
          <path d={svgPaths.p6dda540} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.833333" />
          <path d="M1.25 4.16667H8.75" id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.833333" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder23() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.08)] border border-[rgba(188,255,61,0.14)] border-solid h-[26px] left-[142.95px] rounded-[100px] top-[152.99px] w-[215.52px]" data-name="Overlay+Border">
      <Svg10 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[28px] text-[#bcff3d] text-[11px] top-1/2 w-[173.855px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Confirmation immédiate par email</p>
      </div>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid h-[236.78px] left-0 overflow-clip right-[568px] rounded-[22px] top-[241.59px]" data-name="Background+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[52px] justify-center leading-[0] left-[36px] text-[52px] text-[rgba(188,255,61,0.12)] top-[62px] w-[83.278px]">
        <p className="leading-[52px]">01</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[22px] justify-center leading-[0] left-[142.95px] text-[18px] text-white top-[46px] w-[251.505px]">
        <p className="leading-[21.6px]">Vous réservez un créneau</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[65.6px] justify-center leading-[0] left-[142.95px] text-[14px] text-[rgba(255,255,255,0.4)] top-[102.39px] w-[367.14px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[23.8px] mb-0">Choisissez directement depuis le calendrier ci-dessus le</p>
        <p className="leading-[23.8px] mb-0">format et la durée qui vous conviennent — visio,</p>
        <p className="leading-[23.8px]">téléphone ou WhatsApp, 30 ou 45 minutes.</p>
      </div>
      <OverlayBorder23 />
      <div className="absolute right-[-60px] size-[160px] top-[-60px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 160 160\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(11.314 0 0 11.314 80 80)\\'><stop stop-color=\\'rgba(188,255,61,0.06)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
    </div>
  );
}

function Svg11() {
  return (
    <div className="-translate-y-1/2 absolute left-[12px] size-[10px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_6_753)" id="SVG">
          <path d={svgPaths.p1495330} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.833333" />
          <path d="M8.75 8.75L6.9375 6.9375" id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_6_753">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder24() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.08)] border border-[rgba(188,255,61,0.14)] border-solid h-[26px] left-[167.59px] rounded-[100px] top-[176.78px] w-[185.58px]" data-name="Overlay+Border">
      <Svg11 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[28px] text-[#bcff3d] text-[11px] top-1/2 w-[144.226px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Analyse 100% personnalisée</p>
      </div>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid h-[236.78px] left-[568px] overflow-clip right-0 rounded-[22px] top-[241.59px]" data-name="Background+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[52px] justify-center leading-[0] left-[36px] text-[52px] text-[rgba(188,255,61,0.12)] top-[62px] w-[107.957px]">
        <p className="leading-[52px]">02</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[22px] justify-center leading-[0] left-[167.59px] text-[18px] text-white top-[46px] w-[235.773px]">
        <p className="leading-[21.6px]">On analyse votre besoin</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[89.4px] justify-center leading-[0] left-[167.59px] text-[14px] text-[rgba(255,255,255,0.4)] top-[114.29px] w-[301.97px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[23.8px] mb-0">Budget, usage quotidien, fiabilité, entretien,</p>
        <p className="leading-[23.8px] mb-0">financement… votre conseiller pose les bonnes</p>
        <p className="leading-[23.8px] mb-0">questions pour établir un profil précis et</p>
        <p className="leading-[23.8px]">personnalisé.</p>
      </div>
      <OverlayBorder24 />
      <div className="absolute right-[-60px] size-[160px] top-[-60px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 160 160\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(11.314 0 0 11.314 80 80)\\'><stop stop-color=\\'rgba(188,255,61,0.06)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
    </div>
  );
}

function Svg12() {
  return (
    <div className="-translate-y-1/2 absolute left-[12px] size-[10px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_6_766)" id="SVG">
          <path d={svgPaths.p22872100} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_6_766">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder25() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.08)] border border-[rgba(188,255,61,0.14)] border-solid h-[26px] left-[170.3px] rounded-[100px] top-[152.99px] w-[185.45px]" data-name="Overlay+Border">
      <Svg12 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[28px] text-[#bcff3d] text-[11px] top-1/2 w-[144.429px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Accès à tout le marché auto</p>
      </div>
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid h-[212.98px] left-0 overflow-clip right-[568px] rounded-[22px] top-[494.37px]" data-name="Background+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[52px] justify-center leading-[0] left-[36px] text-[52px] text-[rgba(188,255,61,0.12)] top-[62px] w-[110.671px]">
        <p className="leading-[52px]">03</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[22px] justify-center leading-[0] left-[170.3px] text-[18px] text-white top-[46px] w-[329.968px]">
        <p className="leading-[21.6px]">On propose les meilleures options</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[65.59px] justify-center leading-[0] left-[170.3px] text-[14px] text-[rgba(255,255,255,0.4)] top-[102.39px] w-[313.51px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[23.8px] mb-0">Sélection ciblée de véhicules, comparatif clair et</p>
        <p className="leading-[23.8px] mb-0">objectif, conseils sur la négociation du prix et la</p>
        <p className="leading-[23.8px]">valeur de reprise de votre véhicule actuel.</p>
      </div>
      <OverlayBorder25 />
      <div className="absolute right-[-60px] size-[160px] top-[-60px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 160 160\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(11.314 0 0 11.314 80 80)\\'><stop stop-color=\\'rgba(188,255,61,0.06)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
    </div>
  );
}

function Svg13() {
  return (
    <div className="-translate-y-1/2 absolute left-[12px] size-[10px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="SVG">
          <path d={svgPaths.p29441b00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.833333" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder26() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.08)] border border-[rgba(188,255,61,0.14)] border-solid h-[26px] left-[172.33px] rounded-[100px] top-[152.99px] w-[207.78px]" data-name="Overlay+Border">
      <Svg13 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[28px] text-[#bcff3d] text-[11px] top-1/2 w-[166.366px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">{`Accompagnement jusqu'au bout`}</p>
      </div>
    </div>
  );
}

function BackgroundBorder9() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid h-[212.98px] left-[568px] overflow-clip right-0 rounded-[22px] top-[494.37px]" data-name="Background+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[52px] justify-center leading-[0] left-[36px] text-[52px] text-[rgba(188,255,61,0.12)] top-[62px] w-[112.704px]">
        <p className="leading-[52px]">04</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[22px] justify-center leading-[0] left-[172.33px] text-[18px] text-white top-[46px] w-[206.34px]">
        <p className="leading-[21.6px]">On finalise ensemble</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[65.59px] justify-center leading-[0] left-[172.33px] text-[14px] text-[rgba(255,255,255,0.4)] top-[102.39px] w-[340.78px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[23.8px] mb-0">{`Aide à l'immatriculation, au financement et à la`}</p>
        <p className="leading-[23.8px] mb-0">livraison clé en main si vous le souhaitez. Votre</p>
        <p className="leading-[23.8px]">{`conseiller reste disponible jusqu'à la remise des clés.`}</p>
      </div>
      <OverlayBorder26 />
      <div className="absolute right-[-60px] size-[160px] top-[-60px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 160 160\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(11.314 0 0 11.314 80 80)\\'><stop stop-color=\\'rgba(188,255,61,0.06)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
    </div>
  );
}

function SectionCommentCaMarche4Cartes() {
  return (
    <div className="absolute h-[787.36px] left-[80px] right-[80px] top-[497.99px]" data-name="Section - COMMENT ÇA MARCHE — 4 CARTES">
      <Container1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[72.5px] justify-center leading-[0] left-[740px] text-[15px] text-[rgba(255,255,255,0.4)] top-[123.25px] w-[364.75px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[26.25px] mb-0">En quatre étapes simples, votre conseiller</p>
        <p className="leading-[26.25px] mb-0">{`VroomAdvisor vous guide de la réservation jusqu'à la`}</p>
        <p className="leading-[26.25px]">remise des clés, sans effort de votre côté.</p>
      </div>
      <BackgroundBorder6 />
      <BackgroundBorder7 />
      <BackgroundBorder8 />
      <BackgroundBorder9 />
    </div>
  );
}

function Emphasis() {
  return (
    <div className="absolute h-[70.5px] left-0 text-[#bcff3d] top-[68px] w-[380.83px]" data-name="Emphasis">
      <div className="-translate-y-1/2 absolute flex flex-col h-[36px] justify-center left-[118.5px] top-[18px] w-[262.632px]">
        <p className="leading-[34.5px]">faire le bon</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[36px] justify-center left-0 top-[52.5px] w-[131.181px]">
        <p className="leading-[34.5px]">choix</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute font-['Syne:ExtraBold',sans-serif] font-extrabold h-[138px] left-0 right-0 text-[30px] top-0" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col h-[105px] justify-center left-0 text-white top-[51.5px] w-[427.79px]">
        <p className="leading-[34.5px] mb-0">Une seule</p>
        <p className="leading-[34.5px] mb-0">consultation suffit</p>
        <p className="leading-[34.5px]">{`pour `}</p>
      </div>
      <Emphasis />
    </div>
  );
}

function Container2() {
  return (
    <div className="-translate-y-1/2 absolute h-[254px] leading-[0] left-[64px] top-1/2 w-[460px]" data-name="Container">
      <Heading1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[96.5px] justify-center left-0 text-[15px] text-[rgba(255,255,255,0.4)] top-[202.25px] w-[444.29px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[25.5px] mb-0">{`Bénéficiez de l'expertise VroomAdvisor pour trouver, négocier et`}</p>
        <p className="leading-[25.5px] mb-0">sécuriser votre prochain véhicule. En 30 à 45 minutes, nos</p>
        <p className="leading-[25.5px] mb-0">conseillers vous accompagnent pas à pas — depuis la définition</p>
        <p className="leading-[25.5px]">{`de vos besoins jusqu'à la signature finale.`}</p>
      </div>
    </div>
  );
}

function OverlayBorder27() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[39px] left-[797.89px] right-[64px] rounded-[100px] top-[86px]" data-name="Overlay+Border">
      <div className="-translate-y-1/2 absolute bg-[#bcff3d] left-[18px] rounded-[4px] size-[8px] top-1/2" data-name="Background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[38px] text-[13px] text-[rgba(255,255,255,0.7)] top-1/2 w-[134.164px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Gain de temps garanti</p>
      </div>
    </div>
  );
}

function OverlayBorder28() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[39px] left-[797.89px] right-[64px] rounded-[100px] top-[135px]" data-name="Overlay+Border">
      <div className="-translate-y-1/2 absolute bg-[#bcff3d] left-[18px] rounded-[4px] size-[8px] top-1/2" data-name="Background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[38px] text-[13px] text-[rgba(255,255,255,0.7)] top-1/2 w-[139.526px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Zéro mauvaise surprise</p>
      </div>
    </div>
  );
}

function OverlayBorder29() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[39px] left-[797.89px] right-[64px] rounded-[100px] top-[184px]" data-name="Overlay+Border">
      <div className="-translate-y-1/2 absolute bg-[#bcff3d] left-[18px] rounded-[4px] size-[8px] top-1/2" data-name="Background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[38px] text-[13px] text-[rgba(255,255,255,0.7)] top-1/2 w-[198.464px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Conseiller dédié du début à la fin</p>
      </div>
    </div>
  );
}

function OverlayBorder30() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[39px] left-[797.89px] right-[64px] rounded-[100px] top-[233px]" data-name="Overlay+Border">
      <div className="-translate-y-1/2 absolute bg-[#bcff3d] left-[18px] rounded-[4px] size-[8px] top-1/2" data-name="Background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[38px] text-[13px] text-[rgba(255,255,255,0.7)] top-1/2 w-[136.381px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">{`Sécurité d'achat totale`}</p>
      </div>
    </div>
  );
}

function SectionPromesse() {
  return (
    <div className="absolute border border-[rgba(188,255,61,0.13)] border-solid h-[360px] left-[80px] overflow-clip right-[80px] rounded-[24px] top-[1358.35px]" style={{ backgroundImage: "linear-gradient(134.892deg, rgba(188, 255, 61, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)" }} data-name="Section - PROMESSE">
      <Container2 />
      <OverlayBorder27 />
      <OverlayBorder28 />
      <OverlayBorder29 />
      <OverlayBorder30 />
      <div className="absolute right-[-100px] size-[380px] top-[-100px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 380 380\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(26.87 0 0 26.87 190 190)\\'><stop stop-color=\\'rgba(188,255,61,0.09)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[155.39px] left-0 top-[72px] w-[480px]" data-name="Container">
      <div className="-translate-y-1/2 absolute bg-[#bcff3d] h-px left-0 opacity-60 top-[calc(50%-70.69px)] w-[28px]" data-name="Horizontal Divider" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-[40px] opacity-80 text-[#bcff3d] text-[11px] top-[7px] tracking-[1.76px] uppercase w-[166.349px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Questions fréquentes</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[128.59px] justify-center leading-[0] left-0 text-[38px] text-white top-[92.29px] tracking-[-0.76px] w-[377.677px]">
        <p className="leading-[41.8px] mb-0">Tout ce que</p>
        <p className="leading-[41.8px] mb-0">vous</p>
        <p className="leading-[41.8px] text-[#bcff3d]">voulez savoir</p>
      </div>
    </div>
  );
}

function Svg14() {
  return (
    <div className="absolute left-[511px] size-[14px] top-[28px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p26a937c0} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder10() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid h-[125.06px] left-0 right-[565px] rounded-[16px] top-[271.39px]" data-name="Background+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:SemiBold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[28px] text-[14px] text-white top-[34.5px] w-[269.355px]">
        <p className="leading-[18.2px]">Comment se déroule la consultation ?</p>
      </div>
      <Svg14 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[38.44px] justify-center leading-[0] left-[28px] text-[13px] text-[rgba(255,255,255,0.4)] top-[75.4px] w-[476.707px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[21.45px] mb-0">Entièrement en ligne — visio, téléphone ou WhatsApp selon votre préférence.</p>
        <p className="leading-[21.45px]">{`Votre conseiller vous appelle à l'heure convenue, sans déplacement nécessaire.`}</p>
      </div>
    </div>
  );
}

function Svg15() {
  return (
    <div className="absolute left-[511px] size-[14px] top-[28px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p26a937c0} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder11() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid h-[125.06px] left-[565px] right-0 rounded-[16px] top-[271.39px]" data-name="Background+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:SemiBold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[28px] text-[14px] text-white top-[34.5px] w-[294.655px]">
        <p className="leading-[18.2px]">Quelle différence entre 30 et 45 minutes ?</p>
      </div>
      <Svg15 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[38.44px] justify-center leading-[0] left-[28px] text-[13px] text-[rgba(255,255,255,0.4)] top-[75.4px] w-[452.594px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[21.45px] mb-0">30 minutes si vous avez déjà une idée de votre projet. 45 minutes pour une</p>
        <p className="leading-[21.45px]">analyse complète incluant financement, reprise et comparatif détaillé.</p>
      </div>
    </div>
  );
}

function Svg16() {
  return (
    <div className="absolute left-[511px] size-[14px] top-[28px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p26a937c0} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder12() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid h-[125.06px] left-0 right-[565px] rounded-[16px] top-[406.45px]" data-name="Background+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:SemiBold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[28px] text-[14px] text-white top-[34.5px] w-[383.959px]">
        <p className="leading-[18.2px]">{`VroomAdvisor peut-il trouver n'importe quel véhicule ?`}</p>
      </div>
      <Svg16 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[38.43px] justify-center leading-[0] left-[28px] text-[13px] text-[rgba(255,255,255,0.4)] top-[75.4px] w-[496.5px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[21.45px] mb-0">{`Nos conseillers accèdent à l'ensemble du marché — occasions, neufs, commandes`}</p>
        <p className="leading-[21.45px]">constructeur. Aucune limite de stock, votre intérêt prime toujours.</p>
      </div>
    </div>
  );
}

function Svg17() {
  return (
    <div className="absolute left-[511px] size-[14px] top-[28px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p26a937c0} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder13() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid h-[125.06px] left-[565px] right-0 rounded-[16px] top-[406.45px]" data-name="Background+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:SemiBold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[28px] text-[14px] text-white top-[34.5px] w-[327.357px]">
        <p className="leading-[18.2px]">Puis-je annuler ou reporter mon rendez-vous ?</p>
      </div>
      <Svg17 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[38.43px] justify-center leading-[0] left-[28px] text-[13px] text-[rgba(255,255,255,0.4)] top-[75.4px] w-[492.878px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[21.45px] mb-0">{`Oui, annulation et report gratuits jusqu'à 24h avant. Un email de confirmation avec`}</p>
        <p className="leading-[21.45px]">le lien de gestion vous est envoyé dès la réservation.</p>
      </div>
    </div>
  );
}

function SectionFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="absolute h-[631.52px] left-[80px] right-[80px] top-[1799.35px]" data-name="Section - FAQ">
      <Container3 />
      <div className="absolute grid grid-cols-2 gap-[20px] left-0 right-0 top-[271.39px]">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = index === openIndex;
          return (
            <button
              key={item.question}
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className={`bg-[#111411] border border-[rgba(255,255,255,0.08)] rounded-[16px] px-[28px] pt-[24px] text-left transition-colors ${
                isOpen ? "min-h-[140px] border-[rgba(188,255,61,0.32)]" : "h-[92px] hover:border-[rgba(188,255,61,0.18)]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <p className="font-['Syne:SemiBold',sans-serif] text-[14px] leading-[18.2px] text-white">{item.question}</p>
                <span className={`mt-1 text-[#bcff3d] text-[18px] transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
              </div>
              {isOpen && (
                <p className="font-['DM_Sans:9pt_Regular',sans-serif] mt-5 text-[13px] leading-[21.45px] text-[rgba(255,255,255,0.4)]">
                  {item.answer}
                </p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function PageContent() {
  return (
    <div className="absolute h-[2430.86px] left-[81px] right-[79px] top-[1509px]" data-name="PAGE CONTENT">
      <div className="absolute bg-[rgba(255,255,255,0.08)] h-px left-[80px] right-[80px] top-0" data-name="Horizontal Divider" />
      <SectionServiceIconesVisuelles />
      <div className="absolute bg-[rgba(255,255,255,0.08)] h-px left-[80px] right-[80px] top-[496.99px]" data-name="Horizontal Divider" />
      <SectionCommentCaMarche4Cartes />
      <div className="absolute bg-[rgba(255,255,255,0.08)] h-px left-[80px] right-[80px] top-[1285.35px]" data-name="Horizontal Divider" />
      <SectionPromesse />
      <div className="absolute bg-[rgba(255,255,255,0.08)] h-px left-[80px] right-[80px] top-[1798.35px]" data-name="Horizontal Divider" />
      <SectionFaq />
    </div>
  );
}

function OverlayBorder31() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.22)] border-solid h-[30px] left-[calc(50%+1px)] rounded-[100px] top-[226px] w-[356.34px]" data-name="Overlay+Border">
      <div className="-translate-y-1/2 absolute bg-[#bcff3d] left-[18px] rounded-[3px] size-[6px] top-1/2" data-name="Background" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-[calc(50%+7.16px)] text-[#bcff3d] text-[11px] text-center top-1/2 tracking-[1.32px] uppercase w-[304.659px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Un conseiller · Disponible demain</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute font-['Syne:ExtraBold',sans-serif] font-extrabold h-[245.88px] leading-[0] left-[161px] right-[159px] text-[58px] text-center top-[282px] tracking-[-1.74px]" data-name="Heading 1">
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

function Svg18() {
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

function Link() {
  return (
    <a className="-translate-x-1/2 absolute bg-[#c8ec66] h-[40px] left-[calc(50%-341.34px)] rounded-[8px] top-[52px] w-[162.76px]" data-name="Link" href="tel:+33670760719">
      <Svg18 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+12.18px)] not-italic text-[16px] text-black text-center top-[calc(50%-0.25px)] w-[107.125px]">
        <p className="leading-[24px]">06 70 76 07 19</p>
      </div>
    </a>
  );
}

function Svg19() {
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

function Link1() {
  return (
    <a className="absolute h-[24px] left-[16px] right-[698.67px] top-[116px]" data-name="Link" href="mailto:contact@vroomparis.fr">
      <Svg19 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+12.16px)] not-italic text-[16px] text-center text-white top-[calc(50%-0.25px)] w-[161.595px]">
        <p className="leading-[24px]">contact@vroomparis.fr</p>
      </div>
    </a>
  );
}

function Svg20() {
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

function Link2() {
  return (
    <a className="absolute h-[24px] left-0 right-0 top-0" data-name="Link" href="/showroom">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[127.557px]">
        <p className="leading-[24px]">Showroom</p>
      </div>
    </a>
  );
}

function Link3() {
  return (
    <a className="absolute h-[24px] left-0 right-0 top-[32px]" data-name="Link" href="/acheter-votre-vehicule">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[11.5px] w-[150px]">
        <p className="leading-[24px]">Acheter un véhicule</p>
      </div>
    </a>
  );
}

function Link4() {
  return (
    <a className="absolute h-[24px] left-0 right-0 top-[68px]" data-name="Link" href="/vendre-votre-vehicule">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[6.5px] w-[170px]">
        <p className="leading-[24px]">Vendre votre véhicule</p>
      </div>
    </a>
  );
}

function Link5() {
  return <div className="absolute h-[24px] left-0 right-0 top-[96px]" data-name="Link" />;
}

function Nav() {
  return (
    <div className="absolute h-[120px] left-[357.33px] right-[357.33px] top-[48px]" data-name="Nav">
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Link6() {
  return (
    <a className="absolute h-[24px] left-[357.33px] right-[357.33px] top-[144px]" data-name="Link" href="/conseils">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[11.5px] w-[180px]">
        <p className="leading-[24px]">Consulation automobile</p>
      </div>
    </a>
  );
}

function Link7() {
  return (
    <a className="absolute h-[24px] left-[357.33px] right-[357.33px] top-[180px]" data-name="Link" href="/a-propos">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[6.5px] w-[170px]">
        <p className="leading-[24px]">À propos</p>
      </div>
    </a>
  );
}

function Link8() {
  return (
    <div className="absolute h-[24px] left-[0.34px] right-[-0.34px] top-[-4px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[189.407px]">
        <p className="leading-[24px]">Politique de confidentialité</p>
      </div>
    </div>
  );
}

function Link9() {
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
      <Link8 />
      <Link9 />
    </div>
  );
}

function Svg21() {
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

function Link10() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[93px] left-[calc(50%+306px)] top-[204px] w-[20px]" data-name="Link">
      <Svg21 />
    </div>
  );
}

function Svg22() {
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

function Link11() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[93px] left-[calc(50%+342px)] top-[204px] w-[20px]" data-name="Link">
      <Svg22 />
    </div>
  );
}

function Svg23() {
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

function Link12() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[93px] left-[calc(50%+378px)] top-[204px] w-[20px]" data-name="Link">
      <Svg23 />
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="absolute border-[#1f2937] border-solid border-t h-[49px] left-[16px] right-[16px] top-[268px]" data-name="HorizontalBorder">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[#9ca3af] text-[16px] text-center top-[35.75px] w-[300.597px]">
        <p className="leading-[24px]">© 2026 Vroom Paris. Tous droits réservés.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[317px] left-[208px] right-[208px] top-[48px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%-341.1px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[175.161px]">
        <p className="leading-[28px]">Qu’attendez-vous ?</p>
      </div>
      <Link />
      <Link1 />
      <Svg20 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[42.5px] justify-center leading-[0] left-[calc(50%-330.17px)] not-italic text-[16px] text-center text-white top-[175.75px] w-[284.77px]">
        <p className="leading-[24px]">4 bis Av. Alexandre Dumas, 95230 Soisy-sous-Montmorency</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%+0.26px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[215.174px]">
        <p className="leading-[28px]">Informations générales :</p>
      </div>
      <Nav />
      <Link6 />
      <Link7 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%+341.55px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[152.536px]">
        <p className="leading-[28px]">Mentions légales</p>
      </div>
      <Nav1 />
      <Link10 />
      <Link11 />
      <Link12 />
      <HorizontalBorder1 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#181818] h-[413px] left-[-5px] right-[5px] top-[3966px]" data-name="Footer">
      <Container4 />
    </div>
  );
}

export default function PageConseil() {
  return (
    <div className="bg-[#181818] relative size-full" data-name="page conseil">
      <div className="absolute h-[742.871px] left-[-464px] top-[-197px] w-[2664.782px]" data-name="Union">
        <div className="absolute inset-[-26.92%_-7.51%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3064.78 1142.87">
            <g filter="url(#filter0_f_6_799)" id="Union">
              <path d={svgPaths.p12d0a100} fill="url(#paint0_linear_6_799)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1142.87" id="filter0_f_6_799" width="3064.78" x="-4.43406e-06" y="3.20925e-06">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_6_799" stdDeviation="100" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_799" x1="35.5207" x2="1147.95" y1="742.236" y2="-1039.64">
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
      <div className="absolute bottom-[3808px] right-[-210px] size-[500px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 500 500\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(35.355 0 0 35.355 250 250)\\'><stop stop-color=\\'rgba(188,255,61,0.05)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
      <div className="absolute flex inset-[0.93%_2.86%_98.52%_94.02%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-2.22%_-4.17%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 47">
                <path d="M25 1V46M13 1V46M1 1V46" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Group />
      <BookingCard />
      <PageContent />
      <OverlayBorder31 />
      <Heading />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[48.34px] justify-center leading-[0] left-[calc(50%+1.1px)] text-[17px] text-[rgba(255,255,255,0.55)] text-center top-[572.05px] w-[438.59px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[26.35px] mb-0">Choisissez votre créneau. Un expert VroomAdvisor vous</p>
        <p className="leading-[26.35px]">{`rappelle à l'heure choisie.`}</p>
      </div>
      <Footer />
    </div>
  );
}
