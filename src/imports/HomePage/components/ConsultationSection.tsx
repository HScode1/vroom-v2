import { useState } from "react";
import svgPaths from "../svg-gblhduksgt";

function scrollToConsultationCalendar() {
  const calendarId =
    window.innerWidth < 1024
      ? "home-consultation-calendar-mobile"
      : window.innerWidth < 1440
        ? "home-consultation-calendar-tablet"
        : "home-consultation-calendar";
  document.getElementById(calendarId)?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function Svg26() {
  return (
    <div className="-translate-y-1/2 absolute left-[12px] size-[13px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_1_556)" id="SVG">
          <path d={svgPaths.p3a487780} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.19167" />
          <path d={svgPaths.p1d11280} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.19167" />
        </g>
        <defs>
          <clipPath id="clip0_1_556">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[28px] left-[126px] rounded-[8px] top-[5811px] w-[205.25px]" data-name="Overlay+Border">
      <Svg26 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[31px] text-[12px] text-[rgba(255,255,255,0.6)] top-1/2 w-[160.699px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Visio · Téléphone · WhatsApp</p>
      </div>
    </div>
  );
}

function Svg27() {
  return (
    <div className="-translate-y-1/2 absolute left-[12px] size-[13px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="SVG">
          <path d={svgPaths.p3b7aed80} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.19167" />
          <path d="M8.66667 1.08333V3.25" id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.19167" />
          <path d="M4.33333 1.08333V3.25" id="Vector_3" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.19167" />
          <path d="M1.625 5.41667H11.375" id="Vector_4" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.19167" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[28px] left-[339.25px] rounded-[8px] top-[5811px] w-[143.19px]" data-name="Overlay+Border">
      <Svg27 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[31px] text-[12px] text-[rgba(255,255,255,0.6)] top-1/2 w-[98.542px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">30 ou 45 minutes</p>
      </div>
    </div>
  );
}

function Svg28() {
  return (
    <div className="-translate-y-1/2 absolute left-[12px] size-[13px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="SVG">
          <path d={svgPaths.p24454500} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.19167" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[28px] left-[126px] rounded-[8px] top-[5851px] w-[250.92px]" data-name="Overlay+Border">
      <Svg28 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[31px] text-[12px] text-[rgba(255,255,255,0.6)] top-1/2 w-[206.6px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">{`Accompagnement jusqu'à la livraison`}</p>
      </div>
    </div>
  );
}

function Svg29() {
  return (
    <div className="-translate-y-1/2 absolute left-[235.36px] size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p25acf100} id="Vector" stroke="var(--stroke-0, #0D0D0D)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

const WEEK_DAYS = ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"];
const CONSULTATION_TIMES = ["09:00", "10:30", "11:00", "14:00", "15:30", "16:00", "17:00", "18:00"];
const CONSULTATION_DURATIONS = [
  { value: 30, label: "30 min", detail: "Conseil rapide" },
  { value: 45, label: "45 min", detail: "Analyse complète" },
];

function getDateKey(date: Date) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

function getMonthLabel(date: Date) {
  const label = date.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
  return label.charAt(0).toUpperCase() + label.slice(1);
}

function getSelectedDateLabel(date: Date) {
  return date.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
}

function isBookableDate(date: Date) {
  const day = date.getDay();
  const isWeekday = day !== 0 && day !== 6;
  const firstAvailableDate = new Date(date.getFullYear(), date.getMonth(), 11);

  return isWeekday && date >= firstAvailableDate;
}

function getFirstBookableDate(monthDate: Date) {
  const date = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);

  while (date.getMonth() === monthDate.getMonth()) {
    if (isBookableDate(date)) {
      return new Date(date);
    }

    date.setDate(date.getDate() + 1);
  }

  return new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
}

function getCalendarCells(monthDate: Date) {
  const firstDay = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
  const mondayOffset = (firstDay.getDay() + 6) % 7;
  const startDate = new Date(firstDay);
  startDate.setDate(firstDay.getDate() - mondayOffset);

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + index);
    return date;
  });
}

function Button3() {
  return (
    <button className="absolute bg-[#bcff3d] h-[45px] left-[126px] rounded-[100px] top-[5919px] w-[277.36px] cursor-pointer transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/60 focus:ring-offset-2 focus:ring-offset-[#181818]" data-name="Button" onClick={scrollToConsultationCalendar} type="button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[calc(50%-15.68px)] text-[#0d0d0d] text-[14px] text-center top-1/2 tracking-[0.14px] w-[216px]">
        <p className="leading-[normal]">Réserver un créneau</p>
      </div>
      <Svg29 />
    </button>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.09)] border-solid left-[347.44px] rounded-[8px] size-[30px] top-[36px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Arial:Regular',sans-serif] h-[16px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[14px] text-[rgba(255,255,255,0.4)] text-center top-1/2 w-[5.053px]">
        <p className="leading-[normal]">‹</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.09)] border-solid left-[383.44px] rounded-[8px] size-[30px] top-[36px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[calc(50%+0.19px)] text-[14px] text-[rgba(255,255,255,0.4)] text-center top-1/2 w-[5.053px]">
        <p className="leading-[normal]">›</p>
      </div>
    </div>
  );
}

function OverlayBorder6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] border-solid h-[42px] left-[56px] right-[328.58px] rounded-[9px] top-[493.22px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[14px] text-[rgba(255,255,255,0.4)] text-center top-[20px] w-[40.683px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">09:00</p>
      </div>
    </div>
  );
}

function OverlayBorder7() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.11)] border border-[#bcff3d] border-solid h-[42px] left-[146.86px] right-[237.72px] rounded-[9px] top-[493.22px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[18px] justify-center leading-[0] left-[calc(50%+0.42px)] text-[#bcff3d] text-[14px] text-center top-[20px] w-[36.153px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">10:30</p>
      </div>
    </div>
  );
}

function OverlayBorder8() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] border-solid h-[42px] left-[237.72px] right-[146.86px] rounded-[9px] top-[493.22px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[calc(50%+0.18px)] text-[14px] text-[rgba(255,255,255,0.4)] text-center top-[20px] w-[31.106px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">11:00</p>
      </div>
    </div>
  );
}

function OverlayBorder9() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] border-solid h-[42px] left-[328.58px] right-[56px] rounded-[9px] top-[493.22px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[calc(50%+0.49px)] text-[14px] text-[rgba(255,255,255,0.4)] text-center top-[19.78px] w-[45px]">
        <p className="leading-[normal]">14:00</p>
      </div>
    </div>
  );
}

function OverlayBorder10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] border-solid h-[42px] left-[56px] right-[328.58px] rounded-[9px] top-[541.22px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[14px] text-[rgba(255,255,255,0.4)] text-center top-[20px] w-[33.892px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">15:30</p>
      </div>
    </div>
  );
}

function OverlayBorder11() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] border-solid h-[42px] left-[146.86px] right-[237.72px] rounded-[9px] top-[541.22px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[14px] text-[rgba(255,255,255,0.4)] text-center top-[20px] w-[35.447px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">16:00</p>
      </div>
    </div>
  );
}

function OverlayBorder12() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] border-solid h-[42px] left-[237.72px] right-[146.86px] rounded-[9px] top-[541.22px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[14px] text-[rgba(255,255,255,0.4)] text-center top-[20px] w-[34.133px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">17:00</p>
      </div>
    </div>
  );
}

function OverlayBorder13() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] border-solid h-[42px] left-[328.58px] right-[56px] rounded-[9px] top-[541.22px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[calc(50%-0.01px)] text-[14px] text-[rgba(255,255,255,0.4)] text-center top-[19.78px] w-[44px]">
        <p className="leading-[normal]">18:00</p>
      </div>
    </div>
  );
}

function ParagraphOverlayBorder() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.07)] border border-[#bcff3d] border-solid inset-[620.22px_238.72px_101px_56px] leading-[0] rounded-[9px] text-center" data-name="Paragraph+Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-bold h-[19px] justify-center left-[calc(50%+0.19px)] text-[#bcff3d] text-[16px] top-[20.5px] w-[59.722px]">
        <p className="leading-[normal]">30 min</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center left-[calc(50%+0.14px)] text-[10px] text-[rgba(188,255,61,0.5)] top-[38.28px] tracking-[0.7px] uppercase w-[103px]">
        <p className="leading-[normal]">Conseil rapide</p>
      </div>
    </div>
  );
}

function ParagraphOverlayBorder1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] border-solid inset-[620.22px_56px_101px_238.72px] leading-[0] rounded-[9px] text-center" data-name="Paragraph+Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[19px] justify-center left-[calc(50%+0.19px)] text-[16px] text-[rgba(255,255,255,0.5)] top-[20.5px] w-[59.993px]">
        <p className="leading-[normal]">45 min</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center left-[calc(50%-0.08px)] text-[10px] text-[rgba(255,255,255,0.25)] top-[39.28px] tracking-[0.7px] uppercase w-[124px]">
        <p className="leading-[normal]">Analyse complète</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#bcff3d] h-[25px] left-[calc(23.13%-0.54px)] right-[calc(23.13%-0.54px)] rounded-[100px] top-[-16px]" data-name="Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[16px] text-[#0c0d0c] text-[11px] top-[12.5px] tracking-[0.44px] w-[226.016px]">
        <p className="leading-[normal]">⚡ Prochain créneau dispo : demain</p>
      </div>
    </div>
  );
}

function Overlay10() {
  return (
    <div className="absolute aspect-[44.20000076293945/44.20000076293945] bg-[rgba(255,255,255,0.04)] left-[56px] right-[369.24px] rounded-[10px] top-[171.2px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.2px)] text-[15px] text-[rgba(255,255,255,0.72)] text-center top-1/2 w-[9.277px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Overlay11() {
  return (
    <div className="absolute aspect-[44.20000076293945/44.20000076293945] bg-[rgba(255,255,255,0.04)] left-[108.21px] right-[317.03px] rounded-[10px] top-[171.2px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[15px] text-[rgba(255,255,255,0.72)] text-center top-1/2 w-[9.411px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function Overlay12() {
  return (
    <div className="absolute aspect-[44.20000076293945/44.20000076293945] bg-[rgba(255,255,255,0.04)] left-[160.41px] right-[264.83px] rounded-[10px] top-[171.2px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.14px)] text-[15px] text-[rgba(255,255,255,0.72)] text-center top-1/2 w-[9.462px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">4</p>
      </div>
    </div>
  );
}

function Overlay13() {
  return (
    <div className="absolute aspect-[44.20000076293945/44.20000076293945] bg-[rgba(255,255,255,0.04)] left-[212.61px] right-[212.63px] rounded-[10px] top-[171.2px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[15px] text-[rgba(255,255,255,0.72)] text-center top-1/2 w-[9.725px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">5</p>
      </div>
    </div>
  );
}

function Overlay14() {
  return (
    <div className="absolute aspect-[44.20000076293945/44.20000076293945] bg-[rgba(255,255,255,0.04)] left-[264.82px] right-[160.42px] rounded-[10px] top-[171.2px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.19px)] text-[15px] text-[rgba(255,255,255,0.72)] text-center top-1/2 w-[8.396px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">6</p>
      </div>
    </div>
  );
}

function Overlay15() {
  return (
    <div className="absolute aspect-[44.20000076293945/44.20000076293945] bg-[rgba(255,255,255,0.04)] left-[56px] right-[369.24px] rounded-[10px] top-[223.41px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.19px)] text-[15px] text-[rgba(255,255,255,0.72)] text-center top-[calc(50%-0.01px)] w-[15.324px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">9</p>
      </div>
    </div>
  );
}

function Overlay16() {
  return (
    <div className="absolute aspect-[44.20000076293945/44.20000076293945] bg-[rgba(255,255,255,0.04)] left-[108.21px] right-[317.03px] rounded-[10px] top-[223.41px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.19px)] text-[15px] text-[rgba(255,255,255,0.72)] text-center top-[calc(50%+0.49px)] w-[15px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">10</p>
      </div>
    </div>
  );
}

function OverlayBorder14() {
  return (
    <div className="absolute aspect-[44.20000076293945/44.20000076293945] bg-[rgba(255,255,255,0.04)] border border-[rgba(188,255,61,0.35)] border-solid left-[160.41px] right-[264.83px] rounded-[10px] top-[223.41px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.18px)] text-[#bcff3d] text-[15px] text-center top-[calc(50%-0.01px)] w-[13.684px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">11</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[4px] left-[calc(50%-0.01px)] opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Overlay17() {
  return (
    <div className="absolute aspect-[44.20000076293945/44.20000076293945] bg-[rgba(255,255,255,0.04)] left-[212.61px] right-[212.63px] rounded-[10px] top-[223.41px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.18px)] text-[15px] text-[rgba(255,255,255,0.72)] text-center top-[calc(50%-0.01px)] w-[13.907px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">12</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[4px] left-1/2 opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute aspect-[44.20000076293945/44.20000076293945] bg-[#bcff3d] left-[264.82px] right-[160.42px] rounded-[10px] top-[223.41px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[calc(50%+0.5px)] text-[#0c0d0c] text-[15px] text-center top-[calc(50%-0.01px)] w-[15.278px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">13</p>
      </div>
    </div>
  );
}

function Overlay18() {
  return (
    <div className="absolute aspect-[44.20000076293945/44.20000076293945] bg-[rgba(255,255,255,0.04)] left-[56px] right-[369.24px] rounded-[10px] top-[275.61px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.4px)] text-[15px] text-[rgba(255,255,255,0.72)] text-center top-[calc(50%+0.29px)] w-[19px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">16</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[4px] left-1/2 opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Overlay19() {
  return (
    <div className="absolute aspect-[44.20000076293945/44.20000076293945] bg-[rgba(255,255,255,0.04)] left-[108.21px] right-[317.03px] rounded-[10px] top-[275.61px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.17px)] text-[15px] text-[rgba(255,255,255,0.72)] text-center top-[calc(50%-0.01px)] w-[14.17px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">17</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[4px] left-[calc(50%-0.01px)] opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Overlay20() {
  return (
    <div className="absolute aspect-[44.20000076293945/44.20000076293945] bg-[rgba(255,255,255,0.04)] left-[160.41px] right-[264.83px] rounded-[10px] top-[275.61px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.19px)] text-[15px] text-[rgba(255,255,255,0.72)] text-center top-[calc(50%-0.01px)] w-[14.474px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">18</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[4px] left-[calc(50%-0.01px)] opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Overlay21() {
  return (
    <div className="absolute aspect-[44.20000076293945/44.20000076293945] bg-[rgba(255,255,255,0.04)] left-[212.61px] right-[212.63px] rounded-[10px] top-[275.61px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[15px] text-[rgba(255,255,255,0.72)] text-center top-[calc(50%-0.01px)] w-[19.081px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">19</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[4px] left-1/2 opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Overlay22() {
  return (
    <div className="absolute aspect-[44.20000076293945/44.20000076293945] bg-[rgba(255,255,255,0.04)] left-[264.82px] right-[160.42px] rounded-[10px] top-[275.61px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+0.08px)] size-[20px] text-[15px] text-[rgba(255,255,255,0.72)] text-center top-[calc(50%+0.29px)]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">20</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[4px] left-[calc(50%-0.01px)] opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Overlay23() {
  return (
    <div className="absolute aspect-[44.20000076293945/44.20000076293945] bg-[rgba(255,255,255,0.04)] left-[56px] right-[369.24px] rounded-[10px] top-[327.81px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[15px] text-[rgba(255,255,255,0.72)] text-center top-1/2 w-[17.803px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">23</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[3.99px] left-1/2 opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Overlay24() {
  return (
    <div className="absolute aspect-[44.20000076293945/44.20000076293945] bg-[rgba(255,255,255,0.04)] left-[108.21px] right-[317.03px] rounded-[10px] top-[327.81px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[15px] text-[rgba(255,255,255,0.72)] text-center top-1/2 w-[18.105px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">24</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[3.99px] left-[calc(50%-0.01px)] opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Overlay25() {
  return (
    <div className="absolute aspect-[44.20000076293945/44.20000076293945] bg-[rgba(255,255,255,0.04)] left-[108.21px] right-[317.03px] rounded-[10px] top-[380px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[15px] text-[rgba(255,255,255,0.72)] text-center top-1/2 w-[18.105px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">31</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[3.99px] left-[calc(50%-0.01px)] opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Overlay26() {
  return (
    <div className="absolute aspect-[44.20000076293945/44.20000076293945] bg-[rgba(255,255,255,0.04)] left-[160.41px] right-[264.83px] rounded-[10px] top-[327.81px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.14px)] text-[15px] text-[rgba(255,255,255,0.72)] text-center top-1/2 w-[18.367px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">25</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[3.99px] left-[calc(50%-0.01px)] opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Overlay27() {
  return (
    <div className="absolute aspect-[44.20000076293945/44.20000076293945] bg-[rgba(255,255,255,0.04)] left-[212.61px] right-[212.63px] rounded-[10px] top-[327.81px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.79px)] text-[15px] text-[rgba(255,255,255,0.72)] text-center top-[calc(50%+0.09px)] w-[23px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">26</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[3.99px] left-1/2 opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Overlay28() {
  return (
    <div className="absolute aspect-[44.20000076293945/44.20000076293945] bg-[rgba(255,255,255,0.04)] left-[264.82px] right-[160.42px] rounded-[10px] top-[327.81px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[15px] text-[rgba(255,255,255,0.72)] text-center top-1/2 w-[17.823px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">27</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[3.99px] left-[calc(50%-0.01px)] opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function Overlay29() {
  return (
    <div className="absolute aspect-[44.20000076293945/44.20000076293945] bg-[rgba(255,255,255,0.04)] left-[56px] right-[369.24px] rounded-[10px] top-[380.02px]" data-name="Overlay">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+0.4px)] text-[15px] text-[rgba(255,255,255,0.72)] text-center top-[calc(50%-0.12px)] w-[21px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">30</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[4px] left-1/2 opacity-55 rounded-[2px] size-[4px]" data-name="Background" />
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="-translate-y-1/2 absolute backdrop-blur-[10px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid h-[782.22px] left-0 right-0 rounded-[24px] top-1/2" data-name="Overlay+Border+OverlayBlur">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[22px] justify-center leading-[0] left-[56px] text-[18px] text-white top-[51px] w-[103.019px]">
        <p className="leading-[normal]">Mars 2026</p>
      </div>
      <Button4 />
      <Button5 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[calc(50%-153.02px)] text-[10px] text-[rgba(255,255,255,0.22)] text-center top-[100.5px] tracking-[0.9px] uppercase w-[13.684px]">
        <p className="leading-[normal]">Lu</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[calc(50%-101.93px)] text-[10px] text-[rgba(255,255,255,0.22)] text-center top-[100.5px] tracking-[0.9px] uppercase w-[17.258px]">
        <p className="leading-[normal]">Ma</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[calc(50%-50.87px)] text-[10px] text-[rgba(255,255,255,0.22)] text-center top-[100.5px] tracking-[0.9px] uppercase w-[16.266px]">
        <p className="leading-[normal]">Me</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[calc(50%+0.18px)] text-[10px] text-[rgba(255,255,255,0.22)] text-center top-[100.5px] tracking-[0.9px] uppercase w-[12.813px]">
        <p className="leading-[normal]">Je</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[calc(50%+51.24px)] text-[10px] text-[rgba(255,255,255,0.22)] text-center top-[100.5px] tracking-[0.9px] uppercase w-[14.504px]">
        <p className="leading-[normal]">Ve</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[calc(50%+102.31px)] text-[10px] text-[rgba(255,255,255,0.22)] text-center top-[100.5px] tracking-[0.9px] uppercase w-[14.616px]">
        <p className="leading-[normal]">Sa</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[calc(50%+153.35px)] text-[10px] text-[rgba(255,255,255,0.22)] text-center top-[100.5px] tracking-[0.9px] uppercase w-[11.355px]">
        <p className="leading-[normal]">Di</p>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.06)] h-px left-[56px] right-[56px] top-[446.22px]" data-name="Horizontal Divider" />
      <OverlayBorder6 />
      <OverlayBorder7 />
      <OverlayBorder8 />
      <OverlayBorder9 />
      <OverlayBorder10 />
      <OverlayBorder11 />
      <OverlayBorder12 />
      <OverlayBorder13 />
      <ParagraphOverlayBorder />
      <ParagraphOverlayBorder1 />
      <Background />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%-157.22px)] text-[15px] text-[rgba(255,255,255,0.09)] text-center top-[calc(50%-249.11px)] w-[25px]">
        <p className="leading-[normal]">23</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%-104.72px)] text-[15px] text-[rgba(255,255,255,0.09)] text-center top-[calc(50%-249.11px)] w-[26px]">
        <p className="leading-[normal]">24</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%-52.07px)] text-[15px] text-[rgba(255,255,255,0.09)] text-center top-[calc(50%-249.02px)] w-[18.367px]">
        <p className="leading-[normal]">25</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%-0.72px)] text-[15px] text-[rgba(255,255,255,0.09)] text-center top-[calc(50%-249.02px)] w-[19px]">
        <p className="leading-[normal]">26</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+53.78px)] size-[20px] text-[15px] text-[rgba(255,255,255,0.09)] text-center top-[calc(50%-249.02px)]">
        <p className="leading-[normal]">27</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+104.28px)] size-[20px] text-[15px] text-[rgba(255,255,255,0.28)] text-center top-[calc(50%-249.11px)]">
        <p className="leading-[normal]">28</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+156.8px)] text-[15px] text-[rgba(255,255,255,0.28)] text-center top-[calc(50%-249.02px)] w-[9.031px]">
        <p className="leading-[normal]">1</p>
      </div>
      <Overlay10 />
      <Overlay11 />
      <Overlay12 />
      <Overlay13 />
      <Overlay14 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+104.55px)] text-[15px] text-[rgba(255,255,255,0.28)] text-center top-[calc(50%-196.81px)] w-[9.432px]">
        <p className="leading-[normal]">7</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+156.75px)] text-[15px] text-[rgba(255,255,255,0.28)] text-center top-[calc(50%-196.81px)] w-[9.725px]">
        <p className="leading-[normal]">8</p>
      </div>
      <Overlay15 />
      <Overlay16 />
      <OverlayBorder14 />
      <Overlay17 />
      <Background1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+104.28px)] size-[20px] text-[15px] text-[rgba(255,255,255,0.28)] text-center top-[calc(50%-145.11px)]">
        <p className="leading-[normal]">14</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+156.78px)] text-[15px] text-[rgba(255,255,255,0.28)] text-center top-[calc(50%-145.11px)] w-[17px]">
        <p className="leading-[normal]">15</p>
      </div>
      <Overlay18 />
      <Overlay19 />
      <Overlay20 />
      <Overlay21 />
      <Overlay22 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+105.25px)] text-[15px] text-[rgba(255,255,255,0.28)] text-center top-[calc(50%-92.41px)] w-[19px]">
        <p className="leading-[normal]">21</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+156.78px)] text-[15px] text-[rgba(255,255,255,0.28)] text-center top-[calc(50%-92.11px)] w-[19px]">
        <p className="leading-[normal]">22</p>
      </div>
      <Overlay23 />
      <Overlay24 />
      <Overlay25 />
      <Overlay26 />
      <Overlay27 />
      <Overlay28 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+104.28px)] text-[15px] text-[rgba(255,255,255,0.28)] text-center top-[calc(50%-40.11px)] w-[22px]">
        <p className="leading-[normal]">28</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+155.78px)] text-[15px] text-[rgba(255,255,255,0.28)] text-center top-[calc(50%-40.11px)] w-[25px]">
        <p className="leading-[normal]">29</p>
      </div>
      <Overlay29 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[13px] justify-center leading-[0] left-[56px] text-[10px] text-[rgba(255,255,255,0.22)] top-[476.5px] tracking-[1.2px] uppercase w-[186px]">
        <p className="leading-[normal]">Créneaux disponibles</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[14px] justify-center leading-[0] left-[324.64px] text-[#bcff3d] text-[11px] top-[476.22px] w-[91.607px]">
        <p className="leading-[normal]">Vendredi 13 mars</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[13px] justify-center leading-[0] left-[56px] text-[10px] text-[rgba(255,255,255,0.22)] top-[605.5px] tracking-[1.2px] uppercase w-[209px]">
        <p className="leading-[normal]">Durée de la consultation</p>
      </div>
    </div>
  );
}

function Calendar() {
  const [viewMonth, setViewMonth] = useState(new Date(2026, 2, 1));
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 2, 13));
  const [selectedTime, setSelectedTime] = useState("10:30");
  const [selectedDuration, setSelectedDuration] = useState(30);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const calendarCells = getCalendarCells(viewMonth);
  const selectedDateKey = getDateKey(selectedDate);

  const changeMonth = (direction: number) => {
    const nextMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + direction, 1);
    const nextDate = getFirstBookableDate(nextMonth);

    setViewMonth(nextMonth);
    setSelectedDate(nextDate);
    setSelectedTime("10:30");
    setIsConfirmed(false);
  };

  const selectDate = (date: Date) => {
    if (!isBookableDate(date)) {
      return;
    }

    setViewMonth(new Date(date.getFullYear(), date.getMonth(), 1));
    setSelectedDate(date);
    setIsConfirmed(false);
  };

  return (
    <div className="absolute hidden h-[782.22px] left-[832px] right-[136.56px] top-[5232px] lg:block" data-name="CALENDAR" id="home-consultation-calendar">
      <div className="absolute inset-[-30px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 531.44 842.22\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(42.515 0 0 67.378 265.72 421.11)\\'><stop stop-color=\\'rgba(188,255,61,0.05)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
      <div className="-translate-y-1/2 absolute backdrop-blur-[10px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid h-[782.22px] left-0 right-0 rounded-[24px] top-1/2" data-name="Overlay+Border+OverlayBlur">
        <div className="absolute bg-[#bcff3d] h-[25px] left-[calc(23.13%-0.54px)] right-[calc(23.13%-0.54px)] rounded-[100px] top-[-16px]" data-name="Background">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[16px] text-[#0c0d0c] text-[11px] top-[12.5px] tracking-[0.44px] w-[226.016px]">
            <p className="leading-[normal]">⚡ Prochain créneau dispo : demain</p>
          </div>
        </div>

        <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[22px] justify-center leading-[0] left-[56px] text-[18px] text-white top-[51px] w-[180px]">
          <p className="leading-[normal]">{getMonthLabel(viewMonth)}</p>
        </div>

        <button aria-label="Mois précédent" className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.09)] border-solid left-[347.44px] rounded-[8px] size-[30px] top-[36px] text-[14px] text-[rgba(255,255,255,0.4)] transition-colors hover:border-[#bcff3d]/50 hover:text-[#bcff3d] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/50" onClick={() => changeMonth(-1)} type="button">
          ‹
        </button>
        <button aria-label="Mois suivant" className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.09)] border-solid left-[383.44px] rounded-[8px] size-[30px] top-[36px] text-[14px] text-[rgba(255,255,255,0.4)] transition-colors hover:border-[#bcff3d]/50 hover:text-[#bcff3d] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/50" onClick={() => changeMonth(1)} type="button">
          ›
        </button>

        <div className="absolute grid grid-cols-7 gap-[8px] left-[56px] right-[56px] top-[94px]">
          {WEEK_DAYS.map((day) => (
            <div className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[13px] text-[10px] text-[rgba(255,255,255,0.22)] text-center tracking-[0.9px] uppercase" key={day}>
              {day}
            </div>
          ))}
        </div>

        <div className="absolute grid grid-cols-7 gap-[8px] left-[56px] right-[56px] top-[126px]">
          {calendarCells.map((date) => {
            const isCurrentMonth = date.getMonth() === viewMonth.getMonth();
            const isSelected = getDateKey(date) === selectedDateKey;
            const isBookable = isCurrentMonth && isBookableDate(date);

            return (
              <button
                aria-pressed={isSelected}
                className={`relative aspect-square rounded-[10px] font-['DM_Sans:9pt_Regular',sans-serif] text-[15px] transition-all focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/50 ${
                  isSelected
                    ? "bg-[#bcff3d] font-bold text-[#0c0d0c]"
                    : isBookable
                      ? "bg-[rgba(255,255,255,0.04)] text-[rgba(255,255,255,0.72)] hover:bg-[rgba(188,255,61,0.12)] hover:text-[#bcff3d]"
                      : "cursor-not-allowed text-[rgba(255,255,255,0.20)]"
                }`}
                disabled={!isBookable}
                key={getDateKey(date)}
                onClick={() => selectDate(date)}
                type="button"
              >
                {date.getDate()}
                {isBookable && !isSelected ? <span className="-translate-x-1/2 absolute bg-[#bcff3d] bottom-[4px] left-1/2 opacity-55 rounded-[2px] size-[4px]" /> : null}
              </button>
            );
          })}
        </div>

        <div className="absolute bg-[rgba(255,255,255,0.06)] h-px left-[56px] right-[56px] top-[446.22px]" data-name="Horizontal Divider" />
        <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[13px] justify-center leading-[0] left-[56px] text-[10px] text-[rgba(255,255,255,0.22)] top-[476.5px] tracking-[1.2px] uppercase w-[186px]">
          <p className="leading-[normal]">Créneaux disponibles</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[14px] justify-center leading-[0] left-[286px] right-[56px] text-[#bcff3d] text-[11px] text-right top-[476.22px] capitalize">
          <p className="leading-[normal]">{getSelectedDateLabel(selectedDate)}</p>
        </div>

        <div className="absolute grid grid-cols-4 gap-[6px] left-[56px] right-[56px] top-[493.22px]">
          {CONSULTATION_TIMES.map((time) => {
            const isSelected = selectedTime === time;

            return (
              <button
                aria-pressed={isSelected}
                className={`h-[42px] rounded-[9px] border font-['DM_Sans:9pt_Regular',sans-serif] text-[14px] transition-all focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/50 ${
                  isSelected
                    ? "bg-[rgba(188,255,61,0.11)] border-[#bcff3d] font-semibold text-[#bcff3d]"
                    : "bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.07)] text-[rgba(255,255,255,0.4)] hover:border-[#bcff3d]/50 hover:text-[#bcff3d]"
                }`}
                key={time}
                onClick={() => {
                  setSelectedTime(time);
                  setIsConfirmed(false);
                }}
                type="button"
              >
                {time}
              </button>
            );
          })}
        </div>

        <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[13px] justify-center leading-[0] left-[56px] text-[10px] text-[rgba(255,255,255,0.22)] top-[605.5px] tracking-[1.2px] uppercase w-[209px]">
          <p className="leading-[normal]">Durée de la consultation</p>
        </div>
        <div className="absolute grid grid-cols-2 gap-[8px] left-[56px] right-[56px] top-[620.22px]">
          {CONSULTATION_DURATIONS.map((duration) => {
            const isSelected = selectedDuration === duration.value;

            return (
              <button
                aria-pressed={isSelected}
                className={`h-[58px] rounded-[9px] border text-center transition-all focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/50 ${
                  isSelected
                    ? "bg-[rgba(188,255,61,0.07)] border-[#bcff3d] text-[#bcff3d]"
                    : "bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.07)] text-[rgba(255,255,255,0.5)] hover:border-[#bcff3d]/50 hover:text-[#bcff3d]"
                }`}
                key={duration.value}
                onClick={() => {
                  setSelectedDuration(duration.value);
                  setIsConfirmed(false);
                }}
                type="button"
              >
                <span className="block font-['Syne',sans-serif] font-bold text-[16px] leading-[19px]">{duration.label}</span>
                <span className={`block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal mt-[3px] text-[10px] tracking-[0.7px] uppercase ${isSelected ? "text-[rgba(188,255,61,0.5)]" : "text-[rgba(255,255,255,0.25)]"}`}>
                  {duration.detail}
                </span>
              </button>
            );
          })}
        </div>

        <div className="absolute left-[56px] right-[56px] top-[698px]">
          <button className="h-[44px] w-full rounded-[100px] bg-[#bcff3d] font-['Syne',sans-serif] font-bold text-[#0d0d0d] text-[13px] tracking-[0.13px] transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/60" onClick={() => setIsConfirmed(true)} type="button">
            Confirmer ce créneau
          </button>
          <p className={`mt-[10px] text-center font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[11px] transition-opacity ${isConfirmed ? "text-[#bcff3d] opacity-100" : "text-[rgba(255,255,255,0.35)] opacity-100"}`}>
            {isConfirmed
              ? `Créneau confirmé : ${getSelectedDateLabel(selectedDate)} à ${selectedTime}, ${selectedDuration} min.`
              : `${getSelectedDateLabel(selectedDate)} à ${selectedTime}, ${selectedDuration} min.`}
          </p>
        </div>
      </div>
    </div>
  );
}

function MobileInfoChip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-3 py-2">
      <div className="flex size-[16px] shrink-0 items-center justify-center">{icon}</div>
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] text-[12px] leading-[16px] text-[rgba(255,255,255,0.72)]">
        {text}
      </p>
    </div>
  );
}

function MobileChannelIcon() {
  return (
    <svg className="size-[13px]" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
      <g clipPath="url(#mobile-channel-icon)">
        <path d={svgPaths.p3a487780} stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.19167" />
        <path d={svgPaths.p1d11280} stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.19167" />
      </g>
      <defs>
        <clipPath id="mobile-channel-icon">
          <rect fill="white" height="13" width="13" />
        </clipPath>
      </defs>
    </svg>
  );
}

function MobileDurationIcon() {
  return (
    <svg className="size-[13px]" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
      <g>
        <path d={svgPaths.p3b7aed80} stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.19167" />
        <path d="M8.66667 1.08333V3.25" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.19167" />
        <path d="M4.33333 1.08333V3.25" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.19167" />
        <path d="M1.625 5.41667H11.375" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.19167" />
      </g>
    </svg>
  );
}

function MobileSupportIcon() {
  return (
    <svg className="size-[13px]" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
      <path d={svgPaths.p24454500} stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.19167" />
    </svg>
  );
}

function MobileArrowIcon() {
  return (
    <svg className="size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <path d={svgPaths.p25acf100} stroke="var(--stroke-0, #0D0D0D)" strokeWidth="1.66667" />
    </svg>
  );
}

function MobileCalendar({ calendarId = "home-consultation-calendar-mobile" }: { calendarId?: string }) {
  const [viewMonth, setViewMonth] = useState(new Date(2026, 2, 1));
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 2, 13));
  const [selectedTime, setSelectedTime] = useState("10:30");
  const [selectedDuration, setSelectedDuration] = useState(30);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const calendarCells = getCalendarCells(viewMonth);
  const selectedDateKey = getDateKey(selectedDate);

  const changeMonth = (direction: number) => {
    const nextMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + direction, 1);
    const nextDate = getFirstBookableDate(nextMonth);

    setViewMonth(nextMonth);
    setSelectedDate(nextDate);
    setSelectedTime("10:30");
    setIsConfirmed(false);
  };

  const selectDate = (date: Date) => {
    if (!isBookableDate(date)) {
      return;
    }

    setViewMonth(new Date(date.getFullYear(), date.getMonth(), 1));
    setSelectedDate(date);
    setIsConfirmed(false);
  };

  return (
    <div
      className="rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-4 backdrop-blur-[10px] sm:p-5"
      id={calendarId}
    >
      <div className="mx-auto mb-3 w-fit rounded-full bg-[#bcff3d] px-4 py-1">
        <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[11px] font-bold tracking-[0.44px] text-[#0c0d0c]">
          ⚡ Prochain créneau dispo : demain
        </p>
      </div>

      <div className="flex items-center justify-between gap-3">
        <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[18px] font-bold text-white">
          {getMonthLabel(viewMonth)}
        </p>
        <div className="flex gap-2">
          <button
            aria-label="Mois précédent"
            className="flex size-8 items-center justify-center rounded-[8px] border border-[rgba(255,255,255,0.09)] bg-[rgba(255,255,255,0.04)] text-[rgba(255,255,255,0.4)] transition-colors hover:border-[#bcff3d]/50 hover:text-[#bcff3d] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/50"
            onClick={() => changeMonth(-1)}
            type="button"
          >
            ‹
          </button>
          <button
            aria-label="Mois suivant"
            className="flex size-8 items-center justify-center rounded-[8px] border border-[rgba(255,255,255,0.09)] bg-[rgba(255,255,255,0.04)] text-[rgba(255,255,255,0.4)] transition-colors hover:border-[#bcff3d]/50 hover:text-[#bcff3d] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/50"
            onClick={() => changeMonth(1)}
            type="button"
          >
            ›
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1.5">
        {WEEK_DAYS.map((day) => (
          <div
            className="text-center font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[10px] uppercase tracking-[0.9px] text-[rgba(255,255,255,0.22)]"
            key={day}
          >
            {day}
          </div>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-1.5">
        {calendarCells.map((date) => {
          const isCurrentMonth = date.getMonth() === viewMonth.getMonth();
          const isSelected = getDateKey(date) === selectedDateKey;
          const isBookable = isCurrentMonth && isBookableDate(date);

          return (
            <button
              aria-pressed={isSelected}
              className={`relative aspect-square rounded-[10px] font-['DM_Sans:9pt_Regular',sans-serif] text-[13px] transition-all focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/50 ${
                isSelected
                  ? "bg-[#bcff3d] font-bold text-[#0c0d0c]"
                  : isBookable
                    ? "bg-[rgba(255,255,255,0.04)] text-[rgba(255,255,255,0.72)] hover:bg-[rgba(188,255,61,0.12)] hover:text-[#bcff3d]"
                    : "cursor-not-allowed text-[rgba(255,255,255,0.18)]"
              }`}
              disabled={!isBookable}
              key={getDateKey(date)}
              onClick={() => selectDate(date)}
              type="button"
            >
              {date.getDate()}
              {isBookable && !isSelected ? <span className="absolute bottom-[3px] left-1/2 size-[4px] -translate-x-1/2 rounded-[2px] bg-[#bcff3d] opacity-55" /> : null}
            </button>
          );
        })}
      </div>

      <div className="mt-5 border-t border-[rgba(255,255,255,0.06)] pt-4">
        <div className="flex items-center justify-between gap-3">
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[10px] uppercase tracking-[1.2px] text-[rgba(255,255,255,0.22)]">
            Créneaux disponibles
          </p>
          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[11px] capitalize text-[#bcff3d]">
            {getSelectedDateLabel(selectedDate)}
          </p>
        </div>

        <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-2.5">
          {CONSULTATION_TIMES.map((time) => {
            const isSelected = selectedTime === time;

            return (
              <button
                aria-pressed={isSelected}
                className={`h-[40px] rounded-[9px] border font-['DM_Sans:9pt_Regular',sans-serif] text-[13px] transition-all focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/50 ${
                  isSelected
                    ? "border-[#bcff3d] bg-[rgba(188,255,61,0.11)] font-semibold text-[#bcff3d]"
                    : "border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.04)] text-[rgba(255,255,255,0.4)] hover:border-[#bcff3d]/50 hover:text-[#bcff3d]"
                }`}
                key={time}
                onClick={() => {
                  setSelectedTime(time);
                  setIsConfirmed(false);
                }}
                type="button"
              >
                {time}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-5">
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[10px] uppercase tracking-[1.2px] text-[rgba(255,255,255,0.22)]">
          Durée de la consultation
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {CONSULTATION_DURATIONS.map((duration) => {
            const isSelected = selectedDuration === duration.value;

            return (
              <button
                aria-pressed={isSelected}
                className={`h-[58px] rounded-[9px] border text-center transition-all focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/50 ${
                  isSelected
                    ? "border-[#bcff3d] bg-[rgba(188,255,61,0.07)] text-[#bcff3d]"
                    : "border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.04)] text-[rgba(255,255,255,0.5)] hover:border-[#bcff3d]/50 hover:text-[#bcff3d]"
                }`}
                key={duration.value}
                onClick={() => {
                  setSelectedDuration(duration.value);
                  setIsConfirmed(false);
                }}
                type="button"
              >
                <span className="block font-['Syne',sans-serif] text-[15px] font-bold leading-[18px]">{duration.label}</span>
                <span className={`mt-[3px] block font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[10px] uppercase tracking-[0.7px] ${isSelected ? "text-[rgba(188,255,61,0.5)]" : "text-[rgba(255,255,255,0.25)]"}`}>
                  {duration.detail}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-5">
        <button
          className="h-[44px] w-full rounded-[100px] bg-[#bcff3d] font-['Syne',sans-serif] text-[13px] font-bold tracking-[0.13px] text-[#0d0d0d] transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/60"
          onClick={() => setIsConfirmed(true)}
          type="button"
        >
          Confirmer ce créneau
        </button>
        <p className={`mt-3 text-center font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[11px] ${isConfirmed ? "text-[#bcff3d]" : "text-[rgba(255,255,255,0.35)]"}`}>
          {isConfirmed
            ? `Créneau confirmé : ${getSelectedDateLabel(selectedDate)} à ${selectedTime}, ${selectedDuration} min.`
            : `${getSelectedDateLabel(selectedDate)} à ${selectedTime}, ${selectedDuration} min.`}
        </p>
      </div>
    </div>
  );
}

function TabletConsultationSection() {
  return (
    <div className="absolute left-0 top-[5200px] hidden w-screen px-10 lg:block xl:hidden">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[minmax(0,420px)_minmax(0,1fr)] items-start gap-8">
        <div className="pt-4">
          <div className="font-['Syne',sans-serif] font-extrabold leading-[0] text-[0px] tracking-[0.5px] text-white">
            <p className="mb-0 text-[52px] leading-[50px]">{`Votre `}</p>
            <p className="mb-0 text-[52px] leading-[50px]">
              <span>prochain véhicule,</span>
              <br aria-hidden="true" />
              <span>{`conseillé `}</span>
            </p>
            <p className="text-[52px] leading-[50px]">
              <span>{`par `}</span>
              <span className="text-[#c8ec66]">Un expert</span>
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3">
            <MobileInfoChip icon={<MobileChannelIcon />} text="Visio · Téléphone · WhatsApp" />
            <MobileInfoChip icon={<MobileDurationIcon />} text="30 ou 45 minutes" />
            <MobileInfoChip icon={<MobileSupportIcon />} text="Accompagnement jusqu'à la livraison" />
          </div>

          <div className="mt-7">
            <p className="font-['Roboto:SemiBold',sans-serif] text-[32px] font-semibold leading-[38px] text-white">
              L'expertise qui change tout. En 30 minutes.
            </p>
            <p className="mt-4 font-['Plus_Jakarta_Sans:Light',sans-serif] text-[17px] font-light leading-[28px] text-white/90">
              Nos experts analysent votre profil, comparent les meilleures options du marché et vous accompagnent jusqu&apos;à la livraison, en visio, par téléphone ou WhatsApp.
            </p>
          </div>

          <div className="mt-7 max-w-[360px]">
            <button
              className="flex h-[50px] w-full items-center justify-center gap-2 rounded-[100px] bg-[#bcff3d] px-5 font-['Syne',sans-serif] text-[15px] font-bold tracking-[0.14px] text-[#0d0d0d] transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/60"
              onClick={scrollToConsultationCalendar}
              type="button"
            >
              <span>Réserver un créneau</span>
              <MobileArrowIcon />
            </button>
          </div>
        </div>

        <div className="max-w-[640px]">
          <MobileCalendar calendarId="home-consultation-calendar-tablet" />
        </div>
      </div>
    </div>
  );
}

export default function ConsultationSection() {
  return (
    <>
      <div className="absolute left-0 top-[6102px] w-screen px-5 sm:px-8 lg:hidden">
        <div className="mx-auto max-w-[640px]">
          <div className="font-['Syne',sans-serif] font-extrabold leading-[0] text-[0px] text-white tracking-[0.32px]">
            <p className="mb-0 font-['Syne',sans-serif] text-[40px] font-extrabold leading-[38px] sm:text-[48px] sm:leading-[44px]">{`Votre `}</p>
            <p className="mb-0 font-['Syne',sans-serif] text-[40px] font-extrabold leading-[38px] sm:text-[48px] sm:leading-[44px]">
              <span>prochain véhicule,</span>
              <br aria-hidden="true" />
              <span>{`conseillé `}</span>
            </p>
            <p className="font-['Syne',sans-serif] text-[40px] font-extrabold leading-[38px] sm:text-[48px] sm:leading-[44px]">
              <span>{`par `}</span>
              <span className="text-[#c8ec66]">Un expert</span>
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
            <MobileInfoChip icon={<MobileChannelIcon />} text="Visio · Téléphone · WhatsApp" />
            <MobileInfoChip icon={<MobileDurationIcon />} text="30 ou 45 minutes" />
            <MobileInfoChip icon={<MobileSupportIcon />} text="Accompagnement jusqu'à la livraison" />
          </div>

          <div className="mt-7">
            <p className="font-['Roboto:SemiBold',sans-serif] text-[28px] font-semibold leading-[34px] text-white sm:text-[32px] sm:leading-[38px]">
              L'expertise qui change tout. En 30 minutes.
            </p>
            <p className="mt-4 font-['Plus_Jakarta_Sans:Light',sans-serif] text-[16px] font-light leading-[26px] text-white/90">
              Nos experts analysent votre profil, comparent les meilleures options du marché et vous accompagnent jusqu&apos;à la livraison, en visio, par téléphone ou WhatsApp.
            </p>
          </div>

          <button
            className="mt-6 flex h-[46px] w-full items-center justify-center gap-2 rounded-[100px] bg-[#bcff3d] px-5 font-['Syne',sans-serif] text-[14px] font-bold tracking-[0.14px] text-[#0d0d0d] transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/60"
            onClick={scrollToConsultationCalendar}
            type="button"
          >
            <span>Réserver un créneau</span>
            <MobileArrowIcon />
          </button>

          <div className="mt-6">
            <MobileCalendar />
          </div>
        </div>
      </div>

      <TabletConsultationSection />

      <div className="hidden xl:block">
        <div className="absolute font-['Syne',sans-serif] font-extrabold h-[305px] leading-[0] left-[126px] text-[0px] text-white top-[5200px] tracking-[0.58px] w-[665px] whitespace-pre-wrap">
          <p className="font-['Syne',sans-serif] font-extrabold leading-none mb-0 text-[58px]">{`Votre `}</p>
          <p className="font-['Syne',sans-serif] font-extrabold mb-0 text-[58px]">
            <span className="leading-none">prochain véhicul</span>
            <span className="leading-[1.08]">
              e,
              <br aria-hidden="true" />
              {`conseillé `}
            </span>
          </p>
          <p className="font-['Syne',sans-serif] font-extrabold text-[58px]">
            <span className="leading-none">{`par `}</span>
            <span className="leading-none text-[#c8ec66]">Un expert</span>
          </p>
        </div>
        <OverlayBorder3 />
        <OverlayBorder4 />
        <OverlayBorder5 />
        <Button3 />
        <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[105px] justify-center leading-[0] left-[126px] text-[35px] text-white top-[5605.5px] w-[501px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[42px] mb-0">{`L'expertise qui change tout. `}</p>
          <p className="leading-[42px]">En 30 minutes.</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Light',sans-serif] font-light h-[137px] justify-center leading-[0] left-[126px] text-[19px] text-white top-[5726.5px] w-[468px]">
          <p className="leading-[28px]">{`Nos experts analysent votre profil, comparent les meilleures options du marché et vous accompagnent jusqu'à la livraison — en visio, par téléphone ou WhatsApp.`}</p>
        </div>
        <Calendar />
      </div>
    </>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[0.33%_3.35%_99.28%_7.15%]">
      <div className="absolute inset-[-3.33%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1289.75 31">
          <g id="Group 82">
            <g id="Group 24">
              <path d={svgPaths.p20d54300} fill="var(--fill-0, #C8C8C8)" id="Vector" />
              <path d={svgPaths.p3554500} fill="var(--fill-0, #C8C8C8)" id="Vector_2" />
              <path d={svgPaths.p40a2e00} fill="var(--fill-0, #C8C8C8)" id="Vector_3" />
            </g>
            <path d={svgPaths.p3c030100} id="Vector_4" stroke="var(--stroke-0, #C8C8C8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}
