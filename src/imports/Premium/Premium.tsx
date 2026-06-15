import { useEffect, useState } from "react";
import { vehicles as vehiclesApi } from "../../lib/api";
import type { Vehicle } from "../../lib/api";
import useEmblaCarousel from "embla-carousel-react";
import svgPaths from "./svg-wzz9z1ej01";
import imgCaptureDecran20251209A1739081 from "./c8e73a968bf4d279e3e7f298702c6d9e2caeab3d.png";

const DESKTOP_VEHICLES_PER_PAGE = 12;

const BRAND_OPTIONS = [
  { id: "all", label: "Tous", count: 80 },
  { id: "mercedes-benz", label: "Mercedes-Benz", count: 12 },
  { id: "bmw", label: "BMW", count: 21 },
  { id: "audi", label: "Audi", count: 22 },
  { id: "porsche", label: "Porshe", count: 9 },
  { id: "tesla", label: "Tesla", count: 5 },
  { id: "jaguar", label: "Jaguar", count: 21 },
] as const;

const FILTER_SECTIONS = [
  "Type de carburant",
  "Boîtes de vitesse",
  "Kilométrage",
  "Années",
  "Prix",
] as const;

const MOBILE_FUEL_OPTIONS = ["Essence", "Diesel", "Électrique"] as const;
const MOBILE_GEARBOX_OPTIONS = ["Manuelle", "Automatique"] as const;
const MOBILE_MILEAGE_OPTIONS = [
  { id: "under-50000", label: "< 50 000 km" },
  { id: "50000-80000", label: "50 000 - 80 000 km" },
  { id: "over-80000", label: "> 80 000 km" },
] as const;
const MOBILE_YEAR_OPTIONS = [
  { id: "2024-plus", label: "2024 et +" },
  { id: "2022-2023", label: "2022 - 2023" },
  { id: "2021-and-before", label: "2021 et avant" },
] as const;
const MOBILE_PRICE_OPTIONS = [
  { id: "under-20000", label: "< 20 000 €" },
  { id: "20000-28000", label: "20 000 - 28 000 €" },
  { id: "over-28000", label: "> 28 000 €" },
] as const;

const DEFAULT_DESKTOP_YEAR_MIN = 2014;
const DEFAULT_DESKTOP_YEAR_MAX = 2025;
const DEFAULT_DESKTOP_PRICE_MIN = 5000;
const DEFAULT_DESKTOP_PRICE_MAX = 80000;

const MOBILE_SHOWROOM_VEHICLES = [
  {
    id: 1,
    brandId: "mercedes-benz",
    category: "premium" as const,
    title: "Mercedes-Benz Classe C",
    subtitle: "220 d AMG Line",
    price: "25 799 €",
    priceValue: 25799,
    fuel: "Diesel" as const,
    gearbox: "Automatique" as const,
    mileageValue: 91000,
    yearValue: 2024,
    specs: ["Diesel", "Automatique", "91 000 km", "2024"],
  },
  {
    id: 2,
    brandId: "bmw",
    category: "premium" as const,
    title: "BMW Série 3",
    subtitle: "318d Business Design",
    price: "27 490 €",
    priceValue: 27490,
    fuel: "Diesel" as const,
    gearbox: "Automatique" as const,
    mileageValue: 84500,
    yearValue: 2023,
    specs: ["Diesel", "Automatique", "84 500 km", "2023"],
  },
  {
    id: 3,
    brandId: "audi",
    category: "premium" as const,
    title: "Audi A4",
    subtitle: "35 TDI S tronic",
    price: "29 990 €",
    priceValue: 29990,
    fuel: "Diesel" as const,
    gearbox: "Automatique" as const,
    mileageValue: 72300,
    yearValue: 2024,
    specs: ["Diesel", "Automatique", "72 300 km", "2024"],
  },
  {
    id: 4,
    brandId: "tesla",
    category: "premium" as const,
    title: "Tesla Model 3",
    subtitle: "Propulsion",
    price: "31 900 €",
    priceValue: 31900,
    fuel: "Électrique" as const,
    gearbox: "Automatique" as const,
    mileageValue: 58100,
    yearValue: 2023,
    specs: ["Électrique", "Automatique", "58 100 km", "2023"],
  },
  {
    id: 5,
    brandId: "mercedes-benz",
    category: "citadine" as const,
    title: "Mercedes-Benz Classe A",
    subtitle: "180 Progressive Line",
    price: "17 490 €",
    priceValue: 17490,
    fuel: "Essence" as const,
    gearbox: "Manuelle" as const,
    mileageValue: 49800,
    yearValue: 2022,
    specs: ["Essence", "Manuelle", "49 800 km", "2022"],
  },
  {
    id: 6,
    brandId: "bmw",
    category: "citadine" as const,
    title: "BMW Série 1",
    subtitle: "114i Lounge",
    price: "16 990 €",
    priceValue: 16990,
    fuel: "Essence" as const,
    gearbox: "Manuelle" as const,
    mileageValue: 38400,
    yearValue: 2023,
    specs: ["Essence", "Manuelle", "38 400 km", "2023"],
  },
  {
    id: 7,
    brandId: "audi",
    category: "citadine" as const,
    title: "Audi A1 Sportback",
    subtitle: "25 TFSI Advanced",
    price: "22 490 €",
    priceValue: 22490,
    fuel: "Essence" as const,
    gearbox: "Automatique" as const,
    mileageValue: 44200,
    yearValue: 2022,
    specs: ["Essence", "Automatique", "44 200 km", "2022"],
  },
  {
    id: 8,
    brandId: "bmw",
    category: "citadine" as const,
    title: "BMW Série 1",
    subtitle: "116i Lounge",
    price: "21 900 €",
    priceValue: 21900,
    fuel: "Essence" as const,
    gearbox: "Automatique" as const,
    mileageValue: 63900,
    yearValue: 2021,
    specs: ["Essence", "Automatique", "63 900 km", "2021"],
  },
] as const;

function FilterRadio({
  option,
  top,
  isSelected,
  onSelect,
  withBorder = false,
}: {
  option: (typeof BRAND_OPTIONS)[number];
  top: number;
  isSelected: boolean;
  onSelect: () => void;
  withBorder?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`absolute right-[0.25px] left-0 h-[28px] text-left ${withBorder ? "border-b border-solid border-white h-[61px]" : ""}`}
      style={{ top }}
      data-name="p-radio-button-wrapper"
      aria-pressed={isSelected}
    >
      <div
        className={`absolute left-0 rounded-[14px] size-[28px] border-2 border-solid ${isSelected ? "border-white bg-white" : "border-white bg-transparent"}`}
        style={{ top: withBorder ? 8 : option.id === "audi" ? 0.41 : 0 }}
        data-name="Slot → Input"
      >
        {isSelected ? (
          <div className="absolute left-[2px] top-[2px] size-[24px]">
            <svg className="absolute inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPaths.p3c6311f0} fill="var(--fill-0, #181818)" />
            </svg>
          </div>
        ) : null}
      </div>
      <div
        className="absolute left-[36px] flex h-[24px] -translate-y-1/2 flex-col justify-center font-['Helvetica_Neue:Regular',sans-serif] not-italic leading-[0] text-white"
        style={{ top: withBorder ? 22 : option.id === "all" ? 14 : 14.41 }}
      >
        <p className="text-[16px] leading-[24px]">
          {option.label} <span className="text-white">({option.count})</span>
        </p>
      </div>
    </button>
  );
}

function PRadioButtonWrapper() {
  return (
    <div className="absolute h-[28px] left-0 right-[0.25px] top-[47.59px]" data-name="p-radio-button-wrapper">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[36px] not-italic text-[16px] text-white top-[14px] w-[64.08px]">
        <p>
          <span className="leading-[24px]">{`Tous `}</span>
          <span className="leading-[24px] text-white">(80)</span>
        </p>
      </div>
      <div className="absolute border-2 border-solid border-white left-0 rounded-[14px] size-[28px] top-0" data-name="Slot → Input" />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute left-[2px] size-[24px] top-[2px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image">
          <path d={svgPaths.p3c6311f0} fill="var(--fill-0, #181818)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="absolute left-[-2px] overflow-clip size-[28px] top-[-2px]" data-name="image fill">
      <Image />
    </div>
  );
}

function SlotInput() {
  return (
    <div className="absolute bg-white border-2 border-solid border-white left-0 rounded-[14px] size-[28px] top-[0.41px]" data-name="Slot → Input">
      <ImageFill />
    </div>
  );
}

function PRadioButtonWrapper1() {
  return (
    <div className="absolute h-[28px] left-0 right-[0.25px] top-[91.59px]" data-name="p-radio-button-wrapper">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[36px] not-italic text-[16px] text-white top-[14.41px] w-[148px]">
        <p>
          <span className="leading-[24px]">{`Mercedes-Benz `}</span>
          <span className="leading-[24px] text-white">(</span>
          <span className="leading-[24px]">12</span>
          <span className="leading-[24px] text-white">)</span>
        </p>
      </div>
      <div className="absolute border-2 border-solid border-white left-0 rounded-[14px] size-[28px] top-0" data-name="Slot → Input" />
      <SlotInput />
    </div>
  );
}

function PRadioButtonWrapper2() {
  return (
    <div className="absolute h-[28px] left-0 right-[0.25px] top-[135.59px]" data-name="p-radio-button-wrapper">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[36px] not-italic text-[16px] text-white top-[14.41px] w-[127px]">
        <p>
          <span className="leading-[24px]">{`BMW `}</span>
          <span className="leading-[24px] text-white">(21)</span>
        </p>
      </div>
      <div className="absolute border-2 border-solid border-white left-0 rounded-[14px] size-[28px] top-0" data-name="Slot → Input" />
    </div>
  );
}

function PRadioButtonWrapper3() {
  return (
    <div className="absolute h-[28px] left-0 right-[0.25px] top-[179.59px]" data-name="p-radio-button-wrapper">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[36px] not-italic text-[0px] text-white top-[14.41px] w-[107px]">
        <p className="text-[15.6px]">
          <span className="leading-[24px]">{`Audi `}</span>
          <span className="leading-[24px] text-white">(22)</span>
        </p>
      </div>
      <div className="absolute border-2 border-solid border-white left-0 rounded-[14px] size-[28px] top-[0.41px]" data-name="Slot → Input" />
    </div>
  );
}

function PRadioButtonWrapper4() {
  return (
    <div className="absolute h-[28px] left-0 right-[0.25px] top-[223.59px]" data-name="p-radio-button-wrapper">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[36px] not-italic text-[0px] text-white top-[14px] w-[90.26px]">
        <p className="text-[15.3px]">
          <span className="leading-[24px]">Porshe</span>
          <span className="leading-[24px]">{` `}</span>
          <span className="leading-[24px] text-white">(9)</span>
        </p>
      </div>
      <div className="absolute border-2 border-solid border-white left-0 rounded-[14px] size-[28px] top-0" data-name="Slot → Input" />
    </div>
  );
}

function PRadioButtonWrapper5() {
  return (
    <div className="absolute h-[28px] left-0 right-[0.25px] top-[267.59px]" data-name="p-radio-button-wrapper">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[36px] not-italic text-[15.5px] text-white top-[14px] w-[68.33px]">
        <p className="leading-[24px]">Tesla (5)</p>
      </div>
      <div className="absolute border-2 border-solid border-white left-0 rounded-[14px] size-[28px] top-0" data-name="Slot → Input" />
    </div>
  );
}

function PRadioButtonWrapper6() {
  return (
    <div className="absolute border-b border-solid border-white h-[61px] left-0 right-[0.25px] top-[303.59px]" data-name="p-radio-button-wrapper">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[36px] not-italic text-[0px] text-white top-[22px] w-[90.42px]">
        <p className="text-[15.4px]">
          <span className="leading-[24px]">Jaguar</span>
          <span className="leading-[24px]">{` `}</span>
          <span className="leading-[24px] text-white">(21)</span>
        </p>
      </div>
      <div className="absolute border-2 border-solid border-white left-0 rounded-[14px] size-[28px] top-[8px]" data-name="Slot → Input" />
    </div>
  );
}

function Plus319993ESvg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[19.5px] top-1/2" data-name="plus.319993e.svg">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
        <g id="plus.319993e.svg">
          <path clipRule="evenodd" d={svgPaths.p3721a100} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Plus319993ESvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[19.5px] top-0" data-name="plus.319993e.svg fill">
      <Plus319993ESvg />
    </div>
  );
}

function PIconPlus319993ESvg() {
  return (
    <div className="overflow-clip relative size-[19.5px]" data-name="p-icon → plus.319993e.svg">
      <Plus319993ESvgFill />
    </div>
  );
}

function Heading3Button() {
  return (
    <div className="absolute h-[54px] left-0 right-[0.25px] top-0" data-name="Heading 3 → Button">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[14px] text-white top-1/2 w-[132px]">
        <p className="leading-[24px]">Marques</p>
      </div>
      <div className="absolute flex items-center justify-center left-[279px] size-[19.5px] top-[17.25px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <PIconPlus319993ESvg />
        </div>
      </div>
    </div>
  );
}

function PAccordion() {
  return (
    <div className="absolute border-b border-solid border-white h-[55px] left-[2px] right-0 top-[-23px]" data-name="p-accordion">
      <Heading3Button />
    </div>
  );
}

function Section({ selectedBrand, onSelectBrand }: { selectedBrand: string; onSelectBrand: (brand: string) => void }) {
  return (
    <div className="absolute h-[365px] left-[68px] w-[312px] top-[369px]" data-name="Section">
      <FilterRadio option={BRAND_OPTIONS[0]} top={47.59} isSelected={selectedBrand === BRAND_OPTIONS[0].id} onSelect={() => onSelectBrand(BRAND_OPTIONS[0].id)} />
      <FilterRadio option={BRAND_OPTIONS[1]} top={91.59} isSelected={selectedBrand === BRAND_OPTIONS[1].id} onSelect={() => onSelectBrand(BRAND_OPTIONS[1].id)} />
      <FilterRadio option={BRAND_OPTIONS[2]} top={135.59} isSelected={selectedBrand === BRAND_OPTIONS[2].id} onSelect={() => onSelectBrand(BRAND_OPTIONS[2].id)} />
      <FilterRadio option={BRAND_OPTIONS[3]} top={179.59} isSelected={selectedBrand === BRAND_OPTIONS[3].id} onSelect={() => onSelectBrand(BRAND_OPTIONS[3].id)} />
      <FilterRadio option={BRAND_OPTIONS[4]} top={223.59} isSelected={selectedBrand === BRAND_OPTIONS[4].id} onSelect={() => onSelectBrand(BRAND_OPTIONS[4].id)} />
      <FilterRadio option={BRAND_OPTIONS[5]} top={267.59} isSelected={selectedBrand === BRAND_OPTIONS[5].id} onSelect={() => onSelectBrand(BRAND_OPTIONS[5].id)} />
      <FilterRadio option={BRAND_OPTIONS[6]} top={303.59} isSelected={selectedBrand === BRAND_OPTIONS[6].id} onSelect={() => onSelectBrand(BRAND_OPTIONS[6].id)} withBorder />
      <PAccordion />
    </div>
  );
}

function Plus319993ESvg1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[19.5px] top-1/2" data-name="plus.319993e.svg">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
        <g id="plus.319993e.svg">
          <path d={svgPaths.p276a4f00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Plus319993ESvgFill1() {
  return (
    <div className="absolute left-0 overflow-clip size-[19.5px] top-0" data-name="plus.319993e.svg fill">
      <Plus319993ESvg1 />
    </div>
  );
}

function PIconPlus319993ESvg1() {
  return (
    <div className="overflow-clip relative size-[19.5px]" data-name="p-icon → plus.319993e.svg">
      <Plus319993ESvgFill1 />
    </div>
  );
}

function Heading3Button1() {
  return (
    <div className="absolute h-[54px] left-0 right-[0.25px] top-0" data-name="Heading 3 → Button">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[14px] text-white top-1/2 w-[132px]">
        <p className="leading-[24px]">Type de carburant</p>
      </div>
      <div className="absolute flex items-center justify-center left-[279px] size-[19.5px] top-[17.25px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <PIconPlus319993ESvg1 />
        </div>
      </div>
    </div>
  );
}

function PAccordion1({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  return (
    <button type="button" onClick={onToggle} className="absolute border-b border-solid border-white h-[55px] left-[70px] w-[310px] top-[734px] text-left" data-name="p-accordion" aria-expanded={isOpen}>
      <div className="absolute h-[54px] left-0 right-[0.25px] top-0" data-name="Heading 3 → Button">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[14px] text-white top-1/2 w-[132px]">
          <p className="leading-[24px]">Type de carburant</p>
        </div>
        <div className="absolute flex items-center justify-center left-[279px] size-[19.5px] top-[17.25px]">
          <div className={`flex-none transition-transform ${isOpen ? "rotate-90" : ""}`}>
            <PIconPlus319993ESvg1 />
          </div>
        </div>
      </div>
    </button>
  );
}

function Plus319993ESvg2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[19.5px] top-1/2" data-name="plus.319993e.svg">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
        <g id="plus.319993e.svg">
          <path d={svgPaths.p276a4f00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Plus319993ESvgFill2() {
  return (
    <div className="absolute left-0 overflow-clip size-[19.5px] top-0" data-name="plus.319993e.svg fill">
      <Plus319993ESvg2 />
    </div>
  );
}

function PIconPlus319993ESvg2() {
  return (
    <div className="overflow-clip relative size-[19.5px]" data-name="p-icon → plus.319993e.svg">
      <Plus319993ESvgFill2 />
    </div>
  );
}

function Heading3Button2() {
  return (
    <div className="absolute h-[54px] left-0 right-[0.25px] top-0" data-name="Heading 3 → Button">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[13.8px] text-white top-1/2 w-[120.67px]">
        <p className="leading-[24px]">{`Boîtes de vitesse `}</p>
      </div>
      <div className="absolute flex items-center justify-center left-[279px] size-[19.5px] top-[17.25px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <PIconPlus319993ESvg2 />
        </div>
      </div>
    </div>
  );
}

function PAccordion2({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  return (
    <button type="button" onClick={onToggle} className="absolute border-b border-solid border-white h-[55px] left-[70px] w-[310px] top-[789px] text-left" data-name="p-accordion" aria-expanded={isOpen}>
      <div className="absolute h-[54px] left-0 right-[0.25px] top-0" data-name="Heading 3 → Button">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[13.8px] text-white top-1/2 w-[120.67px]">
          <p className="leading-[24px]">Boîtes de vitesse</p>
        </div>
        <div className="absolute flex items-center justify-center left-[279px] size-[19.5px] top-[17.25px]">
          <div className={`flex-none transition-transform ${isOpen ? "rotate-90" : ""}`}>
            <PIconPlus319993ESvg2 />
          </div>
        </div>
      </div>
    </button>
  );
}

function Plus319993ESvg3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[19.5px] top-1/2" data-name="plus.319993e.svg">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
        <g id="plus.319993e.svg">
          <path d={svgPaths.p276a4f00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Plus319993ESvgFill3() {
  return (
    <div className="absolute left-0 overflow-clip size-[19.5px] top-0" data-name="plus.319993e.svg fill">
      <Plus319993ESvg3 />
    </div>
  );
}

function PIconPlus319993ESvg3() {
  return (
    <div className="overflow-clip relative size-[19.5px]" data-name="p-icon → plus.319993e.svg">
      <Plus319993ESvgFill3 />
    </div>
  );
}

function Heading3Button3() {
  return (
    <div className="absolute h-[54px] left-0 right-[0.25px] top-0" data-name="Heading 3 → Button">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[14px] text-white top-1/2 w-[88.48px]">
        <p className="leading-[24px]">Kilométrage</p>
      </div>
      <div className="absolute flex items-center justify-center left-[279px] size-[19.5px] top-[17.25px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <PIconPlus319993ESvg3 />
        </div>
      </div>
    </div>
  );
}

function PAccordion3({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  return (
    <button type="button" onClick={onToggle} className="absolute border-b border-solid border-white h-[55px] left-[70px] w-[310px] top-[844px] text-left" data-name="p-accordion" aria-expanded={isOpen}>
      <div className="absolute h-[54px] left-0 right-[0.25px] top-0" data-name="Heading 3 → Button">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[14px] text-white top-1/2 w-[88.48px]">
          <p className="leading-[24px]">Kilométrage</p>
        </div>
        <div className="absolute flex items-center justify-center left-[279px] size-[19.5px] top-[17.25px]">
          <div className={`flex-none transition-transform ${isOpen ? "rotate-90" : ""}`}>
            <PIconPlus319993ESvg3 />
          </div>
        </div>
      </div>
    </button>
  );
}

function Plus319993ESvg4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[19.5px] top-1/2" data-name="plus.319993e.svg">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
        <g id="plus.319993e.svg">
          <path d={svgPaths.p276a4f00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Plus319993ESvgFill4() {
  return (
    <div className="absolute left-0 overflow-clip size-[19.5px] top-0" data-name="plus.319993e.svg fill">
      <Plus319993ESvg4 />
    </div>
  );
}

function PIconPlus319993ESvg4() {
  return (
    <div className="overflow-clip relative size-[19.5px]" data-name="p-icon → plus.319993e.svg">
      <Plus319993ESvgFill4 />
    </div>
  );
}

function Heading3Button4() {
  return (
    <div className="absolute h-[54px] left-0 right-[0.25px] top-0" data-name="Heading 3 → Button">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[14px] text-white top-1/2 w-[120.81px]">
        <p className="leading-[24px]">Années</p>
      </div>
      <div className="absolute flex items-center justify-center left-[279px] size-[19.5px] top-[17.25px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <PIconPlus319993ESvg4 />
        </div>
      </div>
    </div>
  );
}

function PAccordion4({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  return (
    <button type="button" onClick={onToggle} className="absolute border-b border-solid border-white h-[55px] left-[70px] w-[310px] top-[899px] text-left" data-name="p-accordion" aria-expanded={isOpen}>
      <div className="absolute h-[54px] left-0 right-[0.25px] top-0" data-name="Heading 3 → Button">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[14px] text-white top-1/2 w-[120.81px]">
          <p className="leading-[24px]">Années</p>
        </div>
        <div className="absolute flex items-center justify-center left-[279px] size-[19.5px] top-[17.25px]">
          <div className={`flex-none transition-transform ${isOpen ? "rotate-90" : ""}`}>
            <PIconPlus319993ESvg4 />
          </div>
        </div>
      </div>
    </button>
  );
}

function Plus319993ESvg5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[19.5px] top-1/2" data-name="plus.319993e.svg">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
        <g id="plus.319993e.svg">
          <path d={svgPaths.p276a4f00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Plus319993ESvgFill5() {
  return (
    <div className="absolute left-0 overflow-clip size-[19.5px] top-0" data-name="plus.319993e.svg fill">
      <Plus319993ESvg5 />
    </div>
  );
}

function PIconPlus319993ESvg5() {
  return (
    <div className="overflow-clip relative size-[19.5px]" data-name="p-icon → plus.319993e.svg">
      <Plus319993ESvgFill5 />
    </div>
  );
}

function Heading3Button5() {
  return (
    <div className="absolute h-[54px] left-0 right-[0.25px] top-0" data-name="Heading 3 → Button">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[14px] text-white top-1/2 w-[120.81px]">
        <p className="leading-[24px]">Prix</p>
      </div>
      <div className="absolute flex items-center justify-center left-[279px] size-[19.5px] top-[17.25px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <PIconPlus319993ESvg5 />
        </div>
      </div>
    </div>
  );
}

function PAccordion5({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  return (
    <button type="button" onClick={onToggle} className="absolute border-b border-solid border-white h-[55px] left-[70px] w-[310px] top-[954px] text-left" data-name="p-accordion" aria-expanded={isOpen}>
      <div className="absolute h-[54px] left-0 right-[0.25px] top-0" data-name="Heading 3 → Button">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[14px] text-white top-1/2 w-[120.81px]">
          <p className="leading-[24px]">Prix</p>
        </div>
        <div className="absolute flex items-center justify-center left-[279px] size-[19.5px] top-[17.25px]">
          <div className={`flex-none transition-transform ${isOpen ? "rotate-90" : ""}`}>
            <PIconPlus319993ESvg5 />
          </div>
        </div>
      </div>
    </button>
  );
}

function PButtonButton({ onReset }: { onReset: () => void }) {
  return (
    <button type="button" onClick={onReset} className="absolute border-2 border-solid border-white h-[54px] left-[70px] w-[310px] rounded-[4px] top-[1058px] text-left" data-name="p-button → Button">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[87.3px] not-italic text-[15.3px] text-white top-[25px] w-[122.34px]">
        <p className="leading-[24px]">réinitialiser le filtre</p>
      </div>
    </button>
  );
}

function Slot() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[59.08px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.2px] top-[10px] w-[59.28px]">
        <p className="leading-[21.84px]">Électrique</p>
      </div>
    </div>
  );
}

function PTag() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[3044.02px] left-[534px] rounded-[4px] top-[765.14px] w-[71.08px]" data-name="p-tag">
      <Slot />
    </div>
  );
}

function Slot1() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[102.09px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13px] top-[10px] w-[102.29px]">
        <p className="leading-[21.84px]">Propulsion arrière</p>
      </div>
    </div>
  );
}

function PTag1() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[3044.02px] left-[612.88px] rounded-[4px] top-[765.14px] w-[114.09px]" data-name="p-tag">
      <Slot1 />
    </div>
  );
}

function Slot2() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[75.95px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.3px] top-[10px] w-[76.15px]">
        <p className="leading-[21.84px]">Automatique</p>
      </div>
    </div>
  );
}

function PTag2() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[3044.02px] left-[734.77px] rounded-[4px] top-[765.14px] w-[87.95px]" data-name="p-tag">
      <Slot2 />
    </div>
  );
}

function Item() {
  return (
    <div className="absolute h-[51.78px] left-0 right-0 top-[15px]" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[21.84px] justify-center leading-[0] left-0 not-italic text-[#535457] text-[13.1px] top-[19.86px] w-[298.23px]">
        <p className="leading-[21.84px] mb-0">Hybride 145 e-DCS6 • Plus</p>
        <p className="leading-[21.84px]">Voiture 0 km • 2025</p>
      </div>
    </div>
  );
}

function ListPointsFortsTechniques() {
  return (
    <div className="absolute h-[98px] left-[534px] right-[1046px] top-[836px]" data-name="List - Points forts techniques">
      <Item />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[24.8px] top-[-11px] w-[183px]">
        <p className="leading-[37.89px]">Lorem ipsum</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[30px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[16.8px] top-[82px] w-[298px]">
        <p className="leading-[29.94px]">{`Voiture d'occasion • 9 192 km • 2024`}</p>
      </div>
    </div>
  );
}

function PLinkLinkSelectionnerModele() {
  return (
    <a className="absolute bg-[#010205] border-2 border-[#010205] border-solid h-[54px] left-[597px] right-[1112px] rounded-[4px] top-[975px]" data-name="p-link → Link - Sélectionner modèle" href="/showroom/produit">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[108.26px] not-italic text-[#fbfcff] text-[14.8px] text-center top-[25px] w-[136.53px]">
        <p className="leading-[24px]">Voir les détails</p>
      </div>
    </a>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[502px] top-[445px]">
      <div className="absolute bg-white border-2 border-[rgba(24,24,24,0.3)] border-solid h-[640px] left-[502px] right-[1014px] rounded-[24px] top-[445px]" data-name="Background+Border" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-[533px] not-italic text-[#010205] text-[31.8px] top-[731px] w-[183px]">
        <p className="leading-[37.89px]">25 799 €</p>
      </div>
      <PTag />
      <PTag1 />
      <PTag2 />
      <ListPointsFortsTechniques />
      <PLinkLinkSelectionnerModele />
      <div className="absolute h-[237px] left-[504px] rounded-tl-[22px] rounded-tr-[22px] top-[447px] w-[409px]" data-name="Capture d’écran 2025-12-09 à 17.39.08 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[22px] rounded-tr-[22px] size-full" src={imgCaptureDecran20251209A1739081} />
      </div>
    </div>
  );
}

function Slot3() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[59.08px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.2px] top-[10px] w-[59.28px]">
        <p className="leading-[21.84px]">Électrique</p>
      </div>
    </div>
  );
}

function PTag3() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[2351.02px] left-[534px] rounded-[4px] top-[1458.14px] w-[71.08px]" data-name="p-tag">
      <Slot3 />
    </div>
  );
}

function Slot4() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[102.09px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13px] top-[10px] w-[102.29px]">
        <p className="leading-[21.84px]">Propulsion arrière</p>
      </div>
    </div>
  );
}

function PTag4() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[2351.02px] left-[612.88px] rounded-[4px] top-[1458.14px] w-[114.09px]" data-name="p-tag">
      <Slot4 />
    </div>
  );
}

function Slot5() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[75.95px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.3px] top-[10px] w-[76.15px]">
        <p className="leading-[21.84px]">Automatique</p>
      </div>
    </div>
  );
}

function PTag5() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[2351.02px] left-[734.77px] rounded-[4px] top-[1458.14px] w-[87.95px]" data-name="p-tag">
      <Slot5 />
    </div>
  );
}

function Item1() {
  return (
    <div className="absolute h-[51.78px] left-0 right-0 top-[15px]" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[21.84px] justify-center leading-[0] left-0 not-italic text-[#535457] text-[13.1px] top-[19.86px] w-[298.23px]">
        <p className="leading-[21.84px] mb-0">Hybride 145 e-DCS6 • Plus</p>
        <p className="leading-[21.84px]">Voiture 0 km • 2025</p>
      </div>
    </div>
  );
}

function ListPointsFortsTechniques1() {
  return (
    <div className="absolute h-[98px] left-[534px] right-[1046px] top-[1529px]" data-name="List - Points forts techniques">
      <Item1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[24.8px] top-[-11px] w-[183px]">
        <p className="leading-[37.89px]">Lorem ipsum</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[30px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[16.8px] top-[82px] w-[298px]">
        <p className="leading-[29.94px]">{`Voiture d'occasion • 9 192 km • 2024`}</p>
      </div>
    </div>
  );
}

function PLinkLinkSelectionnerModele1() {
  return (
    <a className="absolute bg-[#010205] border-2 border-[#010205] border-solid h-[54px] left-[597px] right-[1112px] rounded-[4px] top-[1668px]" data-name="p-link → Link - Sélectionner modèle" href="/showroom/produit">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[108.26px] not-italic text-[#fbfcff] text-[14.8px] text-center top-[25px] w-[136.53px]">
        <p className="leading-[24px]">Voir les détails</p>
      </div>
    </a>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[502px] top-[1138px]">
      <div className="absolute bg-white border-2 border-[rgba(24,24,24,0.3)] border-solid h-[640px] left-[502px] right-[1014px] rounded-[24px] top-[1138px]" data-name="Background+Border" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-[533px] not-italic text-[#010205] text-[31.8px] top-[1424px] w-[183px]">
        <p className="leading-[37.89px]">25 799 €</p>
      </div>
      <PTag3 />
      <PTag4 />
      <PTag5 />
      <ListPointsFortsTechniques1 />
      <PLinkLinkSelectionnerModele1 />
      <div className="absolute h-[237px] left-[504px] rounded-tl-[22px] rounded-tr-[22px] top-[1140px] w-[409px]" data-name="Capture d’écran 2025-12-09 à 17.39.08 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[22px] rounded-tr-[22px] size-full" src={imgCaptureDecran20251209A1739081} />
      </div>
    </div>
  );
}

function Slot6() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[59.08px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.2px] top-[10px] w-[59.28px]">
        <p className="leading-[21.84px]">Électrique</p>
      </div>
    </div>
  );
}

function PTag6() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[965.02px] left-[534px] rounded-[4px] top-[2844.14px] w-[71.08px]" data-name="p-tag">
      <Slot6 />
    </div>
  );
}

function Slot7() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[102.09px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13px] top-[10px] w-[102.29px]">
        <p className="leading-[21.84px]">Propulsion arrière</p>
      </div>
    </div>
  );
}

function PTag7() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[965.02px] left-[612.88px] rounded-[4px] top-[2844.14px] w-[114.09px]" data-name="p-tag">
      <Slot7 />
    </div>
  );
}

function Slot8() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[75.95px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.3px] top-[10px] w-[76.15px]">
        <p className="leading-[21.84px]">Automatique</p>
      </div>
    </div>
  );
}

function PTag8() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[965.02px] left-[734.77px] rounded-[4px] top-[2844.14px] w-[87.95px]" data-name="p-tag">
      <Slot8 />
    </div>
  );
}

function Item2() {
  return (
    <div className="absolute h-[51.78px] left-0 right-0 top-[15px]" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[21.84px] justify-center leading-[0] left-0 not-italic text-[#535457] text-[13.1px] top-[19.86px] w-[298.23px]">
        <p className="leading-[21.84px] mb-0">Hybride 145 e-DCS6 • Plus</p>
        <p className="leading-[21.84px]">Voiture 0 km • 2025</p>
      </div>
    </div>
  );
}

function ListPointsFortsTechniques2() {
  return (
    <div className="absolute h-[98px] left-[534px] right-[1046px] top-[2915px]" data-name="List - Points forts techniques">
      <Item2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[24.8px] top-[-11px] w-[183px]">
        <p className="leading-[37.89px]">Lorem ipsum</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[30px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[16.8px] top-[82px] w-[298px]">
        <p className="leading-[29.94px]">{`Voiture d'occasion • 9 192 km • 2024`}</p>
      </div>
    </div>
  );
}

function PLinkLinkSelectionnerModele2() {
  return (
    <a className="absolute bg-[#010205] border-2 border-[#010205] border-solid h-[54px] left-[597px] right-[1112px] rounded-[4px] top-[3054px]" data-name="p-link → Link - Sélectionner modèle" href="/showroom/produit">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[108.26px] not-italic text-[#fbfcff] text-[14.8px] text-center top-[25px] w-[136.53px]">
        <p className="leading-[24px]">Voir les détails</p>
      </div>
    </a>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[502px] top-[2524px]">
      <div className="absolute bg-white border-2 border-[rgba(24,24,24,0.3)] border-solid h-[640px] left-[502px] right-[1014px] rounded-[24px] top-[2524px]" data-name="Background+Border" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-[533px] not-italic text-[#010205] text-[31.8px] top-[2810px] w-[183px]">
        <p className="leading-[37.89px]">25 799 €</p>
      </div>
      <PTag6 />
      <PTag7 />
      <PTag8 />
      <ListPointsFortsTechniques2 />
      <PLinkLinkSelectionnerModele2 />
      <div className="absolute h-[237px] left-[504px] rounded-tl-[22px] rounded-tr-[22px] top-[2526px] w-[409px]" data-name="Capture d’écran 2025-12-09 à 17.39.08 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[22px] rounded-tr-[22px] size-full" src={imgCaptureDecran20251209A1739081} />
      </div>
    </div>
  );
}

function Slot9() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[59.08px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.2px] top-[10px] w-[59.28px]">
        <p className="leading-[21.84px]">Électrique</p>
      </div>
    </div>
  );
}

function PTag9() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[1658.02px] left-[534px] rounded-[4px] top-[2151.14px] w-[71.08px]" data-name="p-tag">
      <Slot9 />
    </div>
  );
}

function Slot10() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[102.09px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13px] top-[10px] w-[102.29px]">
        <p className="leading-[21.84px]">Propulsion arrière</p>
      </div>
    </div>
  );
}

function PTag10() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[1658.02px] left-[612.88px] rounded-[4px] top-[2151.14px] w-[114.09px]" data-name="p-tag">
      <Slot10 />
    </div>
  );
}

function Slot11() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[75.95px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.3px] top-[10px] w-[76.15px]">
        <p className="leading-[21.84px]">Automatique</p>
      </div>
    </div>
  );
}

function PTag11() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[1658.02px] left-[734.77px] rounded-[4px] top-[2151.14px] w-[87.95px]" data-name="p-tag">
      <Slot11 />
    </div>
  );
}

function Item3() {
  return (
    <div className="absolute h-[51.78px] left-0 right-0 top-[15px]" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[21.84px] justify-center leading-[0] left-0 not-italic text-[#535457] text-[13.1px] top-[19.86px] w-[298.23px]">
        <p className="leading-[21.84px] mb-0">Hybride 145 e-DCS6 • Plus</p>
        <p className="leading-[21.84px]">Voiture 0 km • 2025</p>
      </div>
    </div>
  );
}

function ListPointsFortsTechniques3() {
  return (
    <div className="absolute h-[98px] left-[534px] right-[1046px] top-[2222px]" data-name="List - Points forts techniques">
      <Item3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[24.8px] top-[-11px] w-[183px]">
        <p className="leading-[37.89px]">Lorem ipsum</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[30px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[16.8px] top-[82px] w-[298px]">
        <p className="leading-[29.94px]">{`Voiture d'occasion • 9 192 km • 2024`}</p>
      </div>
    </div>
  );
}

function PLinkLinkSelectionnerModele3() {
  return (
    <a className="absolute bg-[#010205] border-2 border-[#010205] border-solid h-[54px] left-[597px] right-[1112px] rounded-[4px] top-[2361px]" data-name="p-link → Link - Sélectionner modèle" href="/showroom/produit">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[108.26px] not-italic text-[#fbfcff] text-[14.8px] text-center top-[25px] w-[136.53px]">
        <p className="leading-[24px]">Voir les détails</p>
      </div>
    </a>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[502px] top-[1831px]">
      <div className="absolute bg-white border-2 border-[rgba(24,24,24,0.3)] border-solid h-[640px] left-[502px] right-[1014px] rounded-[24px] top-[1831px]" data-name="Background+Border" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-[533px] not-italic text-[#010205] text-[31.8px] top-[2117px] w-[183px]">
        <p className="leading-[37.89px]">25 799 €</p>
      </div>
      <PTag9 />
      <PTag10 />
      <PTag11 />
      <ListPointsFortsTechniques3 />
      <PLinkLinkSelectionnerModele3 />
      <div className="absolute h-[237px] left-[504px] rounded-tl-[22px] rounded-tr-[22px] top-[1833px] w-[409px]" data-name="Capture d’écran 2025-12-09 à 17.39.08 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[22px] rounded-tr-[22px] size-full" src={imgCaptureDecran20251209A1739081} />
      </div>
    </div>
  );
}

function Slot12() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[59.08px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.2px] top-[10px] w-[59.28px]">
        <p className="leading-[21.84px]">Électrique</p>
      </div>
    </div>
  );
}

function PTag12() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[3044.02px] left-[1015px] rounded-[4px] top-[765.14px] w-[71.08px]" data-name="p-tag">
      <Slot12 />
    </div>
  );
}

function Slot13() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[102.09px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13px] top-[10px] w-[102.29px]">
        <p className="leading-[21.84px]">Propulsion arrière</p>
      </div>
    </div>
  );
}

function PTag13() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[3044.02px] left-[1093.88px] rounded-[4px] top-[765.14px] w-[114.09px]" data-name="p-tag">
      <Slot13 />
    </div>
  );
}

function Slot14() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[75.95px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.3px] top-[10px] w-[76.15px]">
        <p className="leading-[21.84px]">Automatique</p>
      </div>
    </div>
  );
}

function PTag14() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[3044.02px] left-[1215.77px] rounded-[4px] top-[765.14px] w-[87.95px]" data-name="p-tag">
      <Slot14 />
    </div>
  );
}

function Item4() {
  return (
    <div className="absolute h-[51.78px] left-0 right-0 top-[15px]" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[21.84px] justify-center leading-[0] left-0 not-italic text-[#535457] text-[13.1px] top-[19.86px] w-[298.23px]">
        <p className="leading-[21.84px] mb-0">Hybride 145 e-DCS6 • Plus</p>
        <p className="leading-[21.84px]">Voiture 0 km • 2025</p>
      </div>
    </div>
  );
}

function ListPointsFortsTechniques4() {
  return (
    <div className="absolute h-[98px] left-[1015px] right-[565px] top-[836px]" data-name="List - Points forts techniques">
      <Item4 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[24.8px] top-[-11px] w-[183px]">
        <p className="leading-[37.89px]">Lorem ipsum</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[30px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[16.8px] top-[82px] w-[298px]">
        <p className="leading-[29.94px]">{`Voiture d'occasion • 9 192 km • 2024`}</p>
      </div>
    </div>
  );
}

function PLinkLinkSelectionnerModele4() {
  return (
    <a className="absolute bg-[#c8ec66] border-2 border-[#c8ec66] border-solid h-[54px] left-[1078px] right-[631px] rounded-[4px] top-[975px]" data-name="p-link → Link - Sélectionner modèle" href="/showroom/produit">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[108.26px] not-italic text-[#010205] text-[14.8px] text-center top-[25px] w-[136.53px]">
        <p className="leading-[24px]">Voir les détails</p>
      </div>
    </a>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[983px] top-[445px]">
      <div className="absolute bg-white border-2 border-[rgba(24,24,24,0.3)] border-solid h-[640px] left-[983px] right-[533px] rounded-[24px] top-[445px]" data-name="Background+Border" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-[1014px] not-italic text-[#010205] text-[31.8px] top-[731px] w-[183px]">
        <p className="leading-[37.89px]">25 799 €</p>
      </div>
      <PTag12 />
      <PTag13 />
      <PTag14 />
      <ListPointsFortsTechniques4 />
      <div className="absolute h-[237px] left-[985px] rounded-tl-[22px] rounded-tr-[22px] top-[447px] w-[409px]" data-name="Capture d’écran 2025-12-09 à 17.39.08 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[22px] rounded-tr-[22px] size-full" src={imgCaptureDecran20251209A1739081} />
      </div>
      <PLinkLinkSelectionnerModele4 />
    </div>
  );
}

function Slot15() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[59.08px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.2px] top-[10px] w-[59.28px]">
        <p className="leading-[21.84px]">Électrique</p>
      </div>
    </div>
  );
}

function PTag15() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[2351.02px] left-[1015px] rounded-[4px] top-[1458.14px] w-[71.08px]" data-name="p-tag">
      <Slot15 />
    </div>
  );
}

function Slot16() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[102.09px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13px] top-[10px] w-[102.29px]">
        <p className="leading-[21.84px]">Propulsion arrière</p>
      </div>
    </div>
  );
}

function PTag16() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[2351.02px] left-[1093.88px] rounded-[4px] top-[1458.14px] w-[114.09px]" data-name="p-tag">
      <Slot16 />
    </div>
  );
}

function Slot17() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[75.95px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.3px] top-[10px] w-[76.15px]">
        <p className="leading-[21.84px]">Automatique</p>
      </div>
    </div>
  );
}

function PTag17() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[2351.02px] left-[1215.77px] rounded-[4px] top-[1458.14px] w-[87.95px]" data-name="p-tag">
      <Slot17 />
    </div>
  );
}

function Item5() {
  return (
    <div className="absolute h-[51.78px] left-0 right-0 top-[15px]" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[21.84px] justify-center leading-[0] left-0 not-italic text-[#535457] text-[13.1px] top-[19.86px] w-[298.23px]">
        <p className="leading-[21.84px] mb-0">Hybride 145 e-DCS6 • Plus</p>
        <p className="leading-[21.84px]">Voiture 0 km • 2025</p>
      </div>
    </div>
  );
}

function ListPointsFortsTechniques5() {
  return (
    <div className="absolute h-[98px] left-[1015px] right-[565px] top-[1529px]" data-name="List - Points forts techniques">
      <Item5 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[24.8px] top-[-11px] w-[183px]">
        <p className="leading-[37.89px]">Lorem ipsum</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[30px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[16.8px] top-[82px] w-[298px]">
        <p className="leading-[29.94px]">{`Voiture d'occasion • 9 192 km • 2024`}</p>
      </div>
    </div>
  );
}

function PLinkLinkSelectionnerModele5() {
  return (
    <a className="absolute bg-[#010205] border-2 border-[#010205] border-solid h-[54px] left-[1078px] right-[631px] rounded-[4px] top-[1668px]" data-name="p-link → Link - Sélectionner modèle" href="/showroom/produit">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[108.26px] not-italic text-[#fbfcff] text-[14.8px] text-center top-[25px] w-[136.53px]">
        <p className="leading-[24px]">Voir les détails</p>
      </div>
    </a>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[983px] top-[1138px]">
      <div className="absolute bg-white border-2 border-[rgba(24,24,24,0.3)] border-solid h-[640px] left-[983px] right-[533px] rounded-[24px] top-[1138px]" data-name="Background+Border" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-[1014px] not-italic text-[#010205] text-[31.8px] top-[1424px] w-[183px]">
        <p className="leading-[37.89px]">25 799 €</p>
      </div>
      <PTag15 />
      <PTag16 />
      <PTag17 />
      <ListPointsFortsTechniques5 />
      <div className="absolute h-[237px] left-[985px] rounded-tl-[22px] rounded-tr-[22px] top-[1140px] w-[409px]" data-name="Capture d’écran 2025-12-09 à 17.39.08 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[22px] rounded-tr-[22px] size-full" src={imgCaptureDecran20251209A1739081} />
      </div>
      <PLinkLinkSelectionnerModele5 />
    </div>
  );
}

function Slot18() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[59.08px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.2px] top-[10px] w-[59.28px]">
        <p className="leading-[21.84px]">Électrique</p>
      </div>
    </div>
  );
}

function PTag18() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[965.02px] left-[1015px] rounded-[4px] top-[2844.14px] w-[71.08px]" data-name="p-tag">
      <Slot18 />
    </div>
  );
}

function Slot19() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[102.09px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13px] top-[10px] w-[102.29px]">
        <p className="leading-[21.84px]">Propulsion arrière</p>
      </div>
    </div>
  );
}

function PTag19() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[965.02px] left-[1093.88px] rounded-[4px] top-[2844.14px] w-[114.09px]" data-name="p-tag">
      <Slot19 />
    </div>
  );
}

function Slot20() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[75.95px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.3px] top-[10px] w-[76.15px]">
        <p className="leading-[21.84px]">Automatique</p>
      </div>
    </div>
  );
}

function PTag20() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[965.02px] left-[1215.77px] rounded-[4px] top-[2844.14px] w-[87.95px]" data-name="p-tag">
      <Slot20 />
    </div>
  );
}

function Item6() {
  return (
    <div className="absolute h-[51.78px] left-0 right-0 top-[15px]" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[21.84px] justify-center leading-[0] left-0 not-italic text-[#535457] text-[13.1px] top-[19.86px] w-[298.23px]">
        <p className="leading-[21.84px] mb-0">Hybride 145 e-DCS6 • Plus</p>
        <p className="leading-[21.84px]">Voiture 0 km • 2025</p>
      </div>
    </div>
  );
}

function ListPointsFortsTechniques6() {
  return (
    <div className="absolute h-[98px] left-[1015px] right-[565px] top-[2915px]" data-name="List - Points forts techniques">
      <Item6 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[24.8px] top-[-11px] w-[183px]">
        <p className="leading-[37.89px]">Lorem ipsum</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[30px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[16.8px] top-[82px] w-[298px]">
        <p className="leading-[29.94px]">{`Voiture d'occasion • 9 192 km • 2024`}</p>
      </div>
    </div>
  );
}

function PLinkLinkSelectionnerModele6() {
  return (
    <a className="absolute bg-[#010205] border-2 border-[#010205] border-solid h-[54px] left-[1078px] right-[631px] rounded-[4px] top-[3054px]" data-name="p-link → Link - Sélectionner modèle" href="/showroom/produit">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[108.26px] not-italic text-[#fbfcff] text-[14.8px] text-center top-[25px] w-[136.53px]">
        <p className="leading-[24px]">Voir les détails</p>
      </div>
    </a>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[983px] top-[2524px]">
      <div className="absolute bg-white border-2 border-[rgba(24,24,24,0.3)] border-solid h-[640px] left-[983px] right-[533px] rounded-[24px] top-[2524px]" data-name="Background+Border" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-[1014px] not-italic text-[#010205] text-[31.8px] top-[2810px] w-[183px]">
        <p className="leading-[37.89px]">25 799 €</p>
      </div>
      <PTag18 />
      <PTag19 />
      <PTag20 />
      <ListPointsFortsTechniques6 />
      <div className="absolute h-[237px] left-[985px] rounded-tl-[22px] rounded-tr-[22px] top-[2526px] w-[409px]" data-name="Capture d’écran 2025-12-09 à 17.39.08 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[22px] rounded-tr-[22px] size-full" src={imgCaptureDecran20251209A1739081} />
      </div>
      <PLinkLinkSelectionnerModele6 />
    </div>
  );
}

function Slot21() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[59.08px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.2px] top-[10px] w-[59.28px]">
        <p className="leading-[21.84px]">Électrique</p>
      </div>
    </div>
  );
}

function PTag21() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[1658.02px] left-[1015px] rounded-[4px] top-[2151.14px] w-[71.08px]" data-name="p-tag">
      <Slot21 />
    </div>
  );
}

function Slot22() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[102.09px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13px] top-[10px] w-[102.29px]">
        <p className="leading-[21.84px]">Propulsion arrière</p>
      </div>
    </div>
  );
}

function PTag22() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[1658.02px] left-[1093.88px] rounded-[4px] top-[2151.14px] w-[114.09px]" data-name="p-tag">
      <Slot22 />
    </div>
  );
}

function Slot23() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[75.95px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.3px] top-[10px] w-[76.15px]">
        <p className="leading-[21.84px]">Automatique</p>
      </div>
    </div>
  );
}

function PTag23() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[1658.02px] left-[1215.77px] rounded-[4px] top-[2151.14px] w-[87.95px]" data-name="p-tag">
      <Slot23 />
    </div>
  );
}

function Item7() {
  return (
    <div className="absolute h-[51.78px] left-0 right-0 top-[15px]" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[21.84px] justify-center leading-[0] left-0 not-italic text-[#535457] text-[13.1px] top-[19.86px] w-[298.23px]">
        <p className="leading-[21.84px] mb-0">Hybride 145 e-DCS6 • Plus</p>
        <p className="leading-[21.84px]">Voiture 0 km • 2025</p>
      </div>
    </div>
  );
}

function ListPointsFortsTechniques7() {
  return (
    <div className="absolute h-[98px] left-[1015px] right-[565px] top-[2222px]" data-name="List - Points forts techniques">
      <Item7 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[24.8px] top-[-11px] w-[183px]">
        <p className="leading-[37.89px]">Lorem ipsum</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[30px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[16.8px] top-[82px] w-[298px]">
        <p className="leading-[29.94px]">{`Voiture d'occasion • 9 192 km • 2024`}</p>
      </div>
    </div>
  );
}

function PLinkLinkSelectionnerModele7() {
  return (
    <a className="absolute bg-[#010205] border-2 border-[#010205] border-solid h-[54px] left-[1078px] right-[631px] rounded-[4px] top-[2361px]" data-name="p-link → Link - Sélectionner modèle" href="/showroom/produit">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[108.26px] not-italic text-[#fbfcff] text-[14.8px] text-center top-[25px] w-[136.53px]">
        <p className="leading-[24px]">Voir les détails</p>
      </div>
    </a>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[983px] top-[1831px]">
      <div className="absolute bg-white border-2 border-[rgba(24,24,24,0.3)] border-solid h-[640px] left-[983px] right-[533px] rounded-[24px] top-[1831px]" data-name="Background+Border" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-[1014px] not-italic text-[#010205] text-[31.8px] top-[2117px] w-[183px]">
        <p className="leading-[37.89px]">25 799 €</p>
      </div>
      <PTag21 />
      <PTag22 />
      <PTag23 />
      <ListPointsFortsTechniques7 />
      <div className="absolute h-[237px] left-[985px] rounded-tl-[22px] rounded-tr-[22px] top-[1833px] w-[409px]" data-name="Capture d’écran 2025-12-09 à 17.39.08 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[22px] rounded-tr-[22px] size-full" src={imgCaptureDecran20251209A1739081} />
      </div>
      <PLinkLinkSelectionnerModele7 />
    </div>
  );
}

function Slot24() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[59.08px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.2px] top-[10px] w-[59.28px]">
        <p className="leading-[21.84px]">Électrique</p>
      </div>
    </div>
  );
}

function PTag24() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[3044.02px] left-[1500px] rounded-[4px] top-[765.14px] w-[71.08px]" data-name="p-tag">
      <Slot24 />
    </div>
  );
}

function Slot25() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[102.09px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13px] top-[10px] w-[102.29px]">
        <p className="leading-[21.84px]">Propulsion arrière</p>
      </div>
    </div>
  );
}

function PTag25() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[3044.02px] left-[1578.88px] rounded-[4px] top-[765.14px] w-[114.09px]" data-name="p-tag">
      <Slot25 />
    </div>
  );
}

function Slot26() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[75.95px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.3px] top-[10px] w-[76.15px]">
        <p className="leading-[21.84px]">Automatique</p>
      </div>
    </div>
  );
}

function PTag26() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[3044.02px] left-[1700.77px] rounded-[4px] top-[765.14px] w-[87.95px]" data-name="p-tag">
      <Slot26 />
    </div>
  );
}

function Item8() {
  return (
    <div className="absolute h-[51.78px] left-0 right-0 top-[15px]" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[21.84px] justify-center leading-[0] left-0 not-italic text-[#535457] text-[13.1px] top-[19.86px] w-[298.23px]">
        <p className="leading-[21.84px] mb-0">Hybride 145 e-DCS6 • Plus</p>
        <p className="leading-[21.84px]">Voiture 0 km • 2025</p>
      </div>
    </div>
  );
}

function ListPointsFortsTechniques8() {
  return (
    <div className="absolute h-[98px] left-[1500px] right-[80px] top-[836px]" data-name="List - Points forts techniques">
      <Item8 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[24.8px] top-[-11px] w-[183px]">
        <p className="leading-[37.89px]">Lorem ipsum</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[30px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[16.8px] top-[82px] w-[298px]">
        <p className="leading-[29.94px]">{`Voiture d'occasion • 9 192 km • 2024`}</p>
      </div>
    </div>
  );
}

function PLinkLinkSelectionnerModele8() {
  return (
    <a className="absolute bg-[#010205] border-2 border-[#010205] border-solid h-[54px] left-[1563px] right-[146px] rounded-[4px] top-[975px]" data-name="p-link → Link - Sélectionner modèle" href="/showroom/produit">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[108.26px] not-italic text-[#fbfcff] text-[14.8px] text-center top-[25px] w-[136.53px]">
        <p className="leading-[24px]">Voir les détails</p>
      </div>
    </a>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[1468px] top-[445px]">
      <div className="absolute bg-white border-2 border-[rgba(24,24,24,0.3)] border-solid h-[640px] left-[1468px] right-[48px] rounded-[24px] top-[445px]" data-name="Background+Border" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-[1499px] not-italic text-[#010205] text-[31.8px] top-[731px] w-[183px]">
        <p className="leading-[37.89px]">25 799 €</p>
      </div>
      <PTag24 />
      <PTag25 />
      <PTag26 />
      <ListPointsFortsTechniques8 />
      <div className="absolute h-[237px] left-[1470px] rounded-tl-[22px] rounded-tr-[22px] top-[447px] w-[409px]" data-name="Capture d’écran 2025-12-09 à 17.39.08 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[22px] rounded-tr-[22px] size-full" src={imgCaptureDecran20251209A1739081} />
      </div>
      <PLinkLinkSelectionnerModele8 />
    </div>
  );
}

function Slot27() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[59.08px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.2px] top-[10px] w-[59.28px]">
        <p className="leading-[21.84px]">Électrique</p>
      </div>
    </div>
  );
}

function PTag27() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[2351.02px] left-[1500px] rounded-[4px] top-[1458.14px] w-[71.08px]" data-name="p-tag">
      <Slot27 />
    </div>
  );
}

function Slot28() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[102.09px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13px] top-[10px] w-[102.29px]">
        <p className="leading-[21.84px]">Propulsion arrière</p>
      </div>
    </div>
  );
}

function PTag28() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[2351.02px] left-[1578.88px] rounded-[4px] top-[1458.14px] w-[114.09px]" data-name="p-tag">
      <Slot28 />
    </div>
  );
}

function Slot29() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[75.95px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.3px] top-[10px] w-[76.15px]">
        <p className="leading-[21.84px]">Automatique</p>
      </div>
    </div>
  );
}

function PTag29() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[2351.02px] left-[1700.77px] rounded-[4px] top-[1458.14px] w-[87.95px]" data-name="p-tag">
      <Slot29 />
    </div>
  );
}

function Item9() {
  return (
    <div className="absolute h-[51.78px] left-0 right-0 top-[15px]" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[21.84px] justify-center leading-[0] left-0 not-italic text-[#535457] text-[13.1px] top-[19.86px] w-[298.23px]">
        <p className="leading-[21.84px] mb-0">Hybride 145 e-DCS6 • Plus</p>
        <p className="leading-[21.84px]">Voiture 0 km • 2025</p>
      </div>
    </div>
  );
}

function ListPointsFortsTechniques9() {
  return (
    <div className="absolute h-[98px] left-[1500px] right-[80px] top-[1529px]" data-name="List - Points forts techniques">
      <Item9 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[24.8px] top-[-11px] w-[183px]">
        <p className="leading-[37.89px]">Lorem ipsum</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[30px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[16.8px] top-[82px] w-[298px]">
        <p className="leading-[29.94px]">{`Voiture d'occasion • 9 192 km • 2024`}</p>
      </div>
    </div>
  );
}

function PLinkLinkSelectionnerModele9() {
  return (
    <a className="absolute bg-[#010205] border-2 border-[#010205] border-solid h-[54px] left-[1563px] right-[146px] rounded-[4px] top-[1668px]" data-name="p-link → Link - Sélectionner modèle" href="/showroom/produit">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[108.26px] not-italic text-[#fbfcff] text-[14.8px] text-center top-[25px] w-[136.53px]">
        <p className="leading-[24px]">Voir les détails</p>
      </div>
    </a>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[1468px] top-[1138px]">
      <div className="absolute bg-white border-2 border-[rgba(24,24,24,0.3)] border-solid h-[640px] left-[1468px] right-[48px] rounded-[24px] top-[1138px]" data-name="Background+Border" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-[1499px] not-italic text-[#010205] text-[31.8px] top-[1424px] w-[183px]">
        <p className="leading-[37.89px]">25 799 €</p>
      </div>
      <PTag27 />
      <PTag28 />
      <PTag29 />
      <ListPointsFortsTechniques9 />
      <div className="absolute h-[237px] left-[1470px] rounded-tl-[22px] rounded-tr-[22px] top-[1140px] w-[409px]" data-name="Capture d’écran 2025-12-09 à 17.39.08 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[22px] rounded-tr-[22px] size-full" src={imgCaptureDecran20251209A1739081} />
      </div>
      <PLinkLinkSelectionnerModele9 />
    </div>
  );
}

function Slot30() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[59.08px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.2px] top-[10px] w-[59.28px]">
        <p className="leading-[21.84px]">Électrique</p>
      </div>
    </div>
  );
}

function PTag30() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[965.02px] left-[1500px] rounded-[4px] top-[2844.14px] w-[71.08px]" data-name="p-tag">
      <Slot30 />
    </div>
  );
}

function Slot31() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[102.09px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13px] top-[10px] w-[102.29px]">
        <p className="leading-[21.84px]">Propulsion arrière</p>
      </div>
    </div>
  );
}

function PTag31() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[965.02px] left-[1578.88px] rounded-[4px] top-[2844.14px] w-[114.09px]" data-name="p-tag">
      <Slot31 />
    </div>
  );
}

function Slot32() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[75.95px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.3px] top-[10px] w-[76.15px]">
        <p className="leading-[21.84px]">Automatique</p>
      </div>
    </div>
  );
}

function PTag32() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[965.02px] left-[1700.77px] rounded-[4px] top-[2844.14px] w-[87.95px]" data-name="p-tag">
      <Slot32 />
    </div>
  );
}

function Item10() {
  return (
    <div className="absolute h-[51.78px] left-0 right-0 top-[15px]" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[21.84px] justify-center leading-[0] left-0 not-italic text-[#535457] text-[13.1px] top-[19.86px] w-[298.23px]">
        <p className="leading-[21.84px] mb-0">Hybride 145 e-DCS6 • Plus</p>
        <p className="leading-[21.84px]">Voiture 0 km • 2025</p>
      </div>
    </div>
  );
}

function ListPointsFortsTechniques10() {
  return (
    <div className="absolute h-[98px] left-[1500px] right-[80px] top-[2915px]" data-name="List - Points forts techniques">
      <Item10 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[24.8px] top-[-11px] w-[183px]">
        <p className="leading-[37.89px]">Lorem ipsum</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[30px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[16.8px] top-[82px] w-[298px]">
        <p className="leading-[29.94px]">{`Voiture d'occasion • 9 192 km • 2024`}</p>
      </div>
    </div>
  );
}

function PLinkLinkSelectionnerModele10() {
  return (
    <a className="absolute bg-[#010205] border-2 border-[#010205] border-solid h-[54px] left-[1563px] right-[146px] rounded-[4px] top-[3054px]" data-name="p-link → Link - Sélectionner modèle" href="/showroom/produit">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[108.26px] not-italic text-[#fbfcff] text-[14.8px] text-center top-[25px] w-[136.53px]">
        <p className="leading-[24px]">Voir les détails</p>
      </div>
    </a>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[1468px] top-[2524px]">
      <div className="absolute bg-white border-2 border-[rgba(24,24,24,0.3)] border-solid h-[640px] left-[1468px] right-[48px] rounded-[24px] top-[2524px]" data-name="Background+Border" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-[1499px] not-italic text-[#010205] text-[31.8px] top-[2810px] w-[183px]">
        <p className="leading-[37.89px]">25 799 €</p>
      </div>
      <PTag30 />
      <PTag31 />
      <PTag32 />
      <ListPointsFortsTechniques10 />
      <div className="absolute h-[237px] left-[1470px] rounded-tl-[22px] rounded-tr-[22px] top-[2526px] w-[409px]" data-name="Capture d’écran 2025-12-09 à 17.39.08 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[22px] rounded-tr-[22px] size-full" src={imgCaptureDecran20251209A1739081} />
      </div>
      <PLinkLinkSelectionnerModele10 />
    </div>
  );
}

function Slot33() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[59.08px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.2px] top-[10px] w-[59.28px]">
        <p className="leading-[21.84px]">Électrique</p>
      </div>
    </div>
  );
}

function PTag33() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[1658.02px] left-[1500px] rounded-[4px] top-[2151.14px] w-[71.08px]" data-name="p-tag">
      <Slot33 />
    </div>
  );
}

function Slot34() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[102.09px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13px] top-[10px] w-[102.29px]">
        <p className="leading-[21.84px]">Propulsion arrière</p>
      </div>
    </div>
  );
}

function PTag34() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[1658.02px] left-[1578.88px] rounded-[4px] top-[2151.14px] w-[114.09px]" data-name="p-tag">
      <Slot34 />
    </div>
  );
}

function Slot35() {
  return (
    <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[75.95px]" data-name="Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.3px] top-[10px] w-[76.15px]">
        <p className="leading-[21.84px]">Automatique</p>
      </div>
    </div>
  );
}

function PTag35() {
  return (
    <div className="absolute bg-[#eeeff2] bottom-[1658.02px] left-[1700.77px] rounded-[4px] top-[2151.14px] w-[87.95px]" data-name="p-tag">
      <Slot35 />
    </div>
  );
}

function Item11() {
  return (
    <div className="absolute h-[51.78px] left-0 right-0 top-[15px]" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[21.84px] justify-center leading-[0] left-0 not-italic text-[#535457] text-[13.1px] top-[19.86px] w-[298.23px]">
        <p className="leading-[21.84px] mb-0">Hybride 145 e-DCS6 • Plus</p>
        <p className="leading-[21.84px]">Voiture 0 km • 2025</p>
      </div>
    </div>
  );
}

function ListPointsFortsTechniques11() {
  return (
    <div className="absolute h-[98px] left-[1500px] right-[80px] top-[2222px]" data-name="List - Points forts techniques">
      <Item11 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[24.8px] top-[-11px] w-[183px]">
        <p className="leading-[37.89px]">Lorem ipsum</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[30px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[16.8px] top-[82px] w-[298px]">
        <p className="leading-[29.94px]">{`Voiture d'occasion • 9 192 km • 2024`}</p>
      </div>
    </div>
  );
}

function PLinkLinkSelectionnerModele11() {
  return (
    <a className="absolute bg-[#010205] border-2 border-[#010205] border-solid h-[54px] left-[1563px] right-[146px] rounded-[4px] top-[2361px]" data-name="p-link → Link - Sélectionner modèle" href="/showroom/produit">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[108.26px] not-italic text-[#fbfcff] text-[14.8px] text-center top-[25px] w-[136.53px]">
        <p className="leading-[24px]">Voir les détails</p>
      </div>
    </a>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[1468px] top-[1831px]">
      <div className="absolute bg-white border-2 border-[rgba(24,24,24,0.3)] border-solid h-[640px] left-[1468px] right-[48px] rounded-[24px] top-[1831px]" data-name="Background+Border" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-[1499px] not-italic text-[#010205] text-[31.8px] top-[2117px] w-[183px]">
        <p className="leading-[37.89px]">25 799 €</p>
      </div>
      <PTag33 />
      <PTag34 />
      <PTag35 />
      <ListPointsFortsTechniques11 />
      <div className="absolute h-[237px] left-[1470px] rounded-tl-[22px] rounded-tr-[22px] top-[1833px] w-[409px]" data-name="Capture d’écran 2025-12-09 à 17.39.08 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[22px] rounded-tr-[22px] size-full" src={imgCaptureDecran20251209A1739081} />
      </div>
      <PLinkLinkSelectionnerModele11 />
    </div>
  );
}

function VehicleCardDesktop({
  leftBase,
  topBase,
  vehicle,
  isGreen = false,
}: {
  leftBase: number;
  topBase: number;
  vehicle: Vehicle | undefined;
  isGreen?: boolean;
}) {
  if (!vehicle) return null;

  const priceLabel = vehicle.price.toLocaleString("fr-FR") + " €";
  const tag1Text = vehicle.specs.fuel;
  const tag2Text = vehicle.specs.engine || String(vehicle.specs.year);
  const tag3Text = vehicle.specs.gearbox;
  const nameText = `${vehicle.brand} ${vehicle.model}`;
  const detailsText = `Voiture d'occasion • ${vehicle.specs.mileage.toLocaleString("fr-FR")} km • ${vehicle.specs.year}`;
  const href = `/showroom/${vehicle.id}`;

  return (
    <>
      <div
        className="absolute bg-white border-2 border-[rgba(24,24,24,0.3)] border-solid h-[640px] rounded-[24px]"
        data-name="Background+Border"
        style={{ left: leftBase, top: topBase, right: 1920 - leftBase - 404 }}
      />
      <div
        className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] not-italic text-[#010205] text-[31.8px] w-[183px]"
        style={{ left: leftBase + 31, top: topBase + 286 }}
      >
        <p className="leading-[37.89px]">{priceLabel}</p>
      </div>
      <div
        className="absolute bg-[#eeeff2] rounded-[4px] w-[71.08px] h-[23.84px]"
        data-name="p-tag"
        style={{ left: leftBase + 32, top: topBase + 320.14 }}
      >
        <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[59.08px]">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.2px] top-[10px] w-[59.28px]">
            <p className="leading-[21.84px]">{tag1Text}</p>
          </div>
        </div>
      </div>
      <div
        className="absolute bg-[#eeeff2] rounded-[4px] w-[114.09px] h-[23.84px]"
        data-name="p-tag"
        style={{ left: leftBase + 110.88, top: topBase + 320.14 }}
      >
        <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[102.09px]">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13px] top-[10px] w-[102.29px]">
            <p className="leading-[21.84px]">{tag2Text}</p>
          </div>
        </div>
      </div>
      <div
        className="absolute bg-[#eeeff2] rounded-[4px] w-[87.95px] h-[23.84px]"
        data-name="p-tag"
        style={{ left: leftBase + 232.77, top: topBase + 320.14 }}
      >
        <div className="absolute h-[21.84px] left-[6px] overflow-clip top-px w-[75.95px]">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[13.3px] top-[10px] w-[76.15px]">
            <p className="leading-[21.84px]">{tag3Text}</p>
          </div>
        </div>
      </div>
      <div
        className="absolute h-[98px]"
        data-name="List - Points forts techniques"
        style={{ left: leftBase + 32, right: 1920 - leftBase - 372, top: topBase + 391 }}
      >
        <div className="absolute h-[51.78px] left-0 right-0 top-[15px]" data-name="Item">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[21.84px] justify-center leading-[0] left-0 not-italic text-[#535457] text-[13.1px] top-[19.86px] w-[298.23px]">
            <p className="leading-[21.84px] mb-0">{vehicle.subtitle}</p>
            <p className="leading-[21.84px]">{`${vehicle.specs.fuel} • ${vehicle.specs.gearbox}`}</p>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[24.8px] top-[-11px] w-[183px]">
          <p className="leading-[37.89px]">{nameText}</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[30px] justify-center leading-[0] left-0 not-italic text-[#010205] text-[16.8px] top-[82px] w-[298px]">
          <p className="leading-[29.94px]">{detailsText}</p>
        </div>
      </div>
      <a
        className={`absolute border-2 border-solid h-[54px] rounded-[4px] ${isGreen ? "bg-[#c8ec66] border-[#c8ec66]" : "bg-[#010205] border-[#010205]"}`}
        data-name="p-link → Link - Sélectionner modèle"
        href={href}
        style={{ left: leftBase + 95, right: 1920 - leftBase - 306, top: topBase + 530 }}
      >
        <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[24px] justify-center leading-[0] left-[108.26px] not-italic text-[14.8px] text-center top-[25px] w-[136.53px] ${isGreen ? "text-[#010205]" : "text-[#fbfcff]"}`}>
          <p className="leading-[24px]">Voir les détails</p>
        </div>
      </a>
      <div
        className="absolute h-[237px] rounded-tl-[22px] rounded-tr-[22px] w-[400px] overflow-hidden"
        style={{ left: leftBase + 2, top: topBase + 2 }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-tl-[22px] rounded-tr-[22px] size-full"
          src={vehicle.image || vehicle.gallery?.[0] || imgCaptureDecran20251209A1739081}
        />
      </div>
    </>
  );
}

function Link({ isActive, onClick, light }: { isActive: boolean; onClick: () => void; light?: boolean }) {
  return (
    <button type="button" onClick={onClick} className={`-translate-y-1/2 absolute h-[59px] left-[1031px] rounded-[9999px] top-[calc(50%-1693px)] w-[188px] ${isActive ? "bg-[#c8ec66] shadow-[3px_4px_4px_0px_rgba(0,0,0,0.25)]" : light ? "bg-neutral-100 border border-[#181818]/15 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)]" : "bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}`} data-name="Link" aria-pressed={isActive}>
      <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Medium',sans-serif] h-[19px] justify-center leading-[0] left-[112.5px] not-italic text-[24px] text-center top-[29.5px] w-[165px] ${isActive ? "text-white" : "text-[#010205]"}`}>
        <p className="leading-[24px]">Citadine</p>
      </div>
    </button>
  );
}

function Link1({ isActive, onClick, light }: { isActive: boolean; onClick: () => void; light?: boolean }) {
  return (
    <button type="button" onClick={onClick} className={`-translate-y-1/2 absolute h-[59px] left-[926px] rounded-[9999px] top-[calc(50%-1693px)] w-[164px] ${isActive ? "bg-[#c8ec66] shadow-[3px_4px_4px_0px_rgba(0,0,0,0.25)]" : light ? "bg-neutral-100 border border-[#181818]/15 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)]" : "bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"}`} data-name="Link" aria-pressed={isActive}>
      <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Medium',sans-serif] h-[19px] justify-center leading-[0] left-[76px] not-italic text-[24px] text-center top-1/2 w-[176px] ${isActive ? "text-white" : "text-[#010205]"}`}>
        <p className="leading-[24px]">Premium</p>
      </div>
    </button>
  );
}

function Group12({
  light,
  totalPages,
  currentPage,
  onSelectPage,
}: {
  light?: boolean;
  totalPages: number;
  currentPage: number;
  onSelectPage: (page: number) => void;
}) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="absolute left-[1178px] top-[3253px] flex items-center gap-[6.5px]">
      {Array.from({ length: totalPages }, (_, index) => {
        const isActive = index === currentPage;
        const backgroundColor = isActive
          ? light ? "#181818" : "#FFFAFA"
          : light ? "#cfcfcf" : "#4F4F4F";

        return (
          <button
            key={index}
            type="button"
            onClick={() => onSelectPage(index)}
            aria-label={`Aller à la page ${index + 1}`}
            aria-pressed={isActive}
            className="size-[14.813px] rounded-full transition-transform hover:scale-110"
            style={{ backgroundColor }}
          />
        );
      })}
    </div>
  );
}

function Group13({ light }: { light?: boolean }) {
  const color = light ? "#181818" : "white";
  return (
    <div className="absolute inset-[0.6%_47.33%_97.84%_47.33%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 59.6789">
        <g id="Group 72">
          <g id="Vector">
            <mask fill="white" id="path-1-inside-1_6_3014">
              <path d={svgPaths.p32c9100} fill="white" />
            </mask>
            <path d={svgPaths.p32c9100} fill={color} mask="url(#path-1-inside-1_6_3014)" stroke={color} strokeWidth="2" />
          </g>
          <path d={svgPaths.p213c4b00} fill={color} id="Vector_2" stroke={color} />
          <path d={svgPaths.p4662c70} fill={color} id="Vector_3" stroke={color} />
        </g>
      </svg>
    </div>
  );
}

function Svg() {
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

function Link2() {
  return (
    <a className="-translate-x-1/2 absolute bg-[#c8ec66] h-[40px] left-[calc(50%-341.34px)] rounded-[8px] top-[52px] w-[162.76px]" data-name="Link" href="tel:+33670760719">
      <Svg />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+12.18px)] not-italic text-[16px] text-black text-center top-[calc(50%-0.25px)] w-[107.125px]">
        <p className="leading-[24px]">06 70 76 07 19</p>
      </div>
    </a>
  );
}

function Svg1() {
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

function Link3() {
  return (
    <a className="absolute h-[24px] left-[16px] right-[698.67px] top-[116px]" data-name="Link" href="mailto:contact@vroomparis.fr">
      <Svg1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+12.16px)] not-italic text-[16px] text-center text-white top-[calc(50%-0.25px)] w-[161.595px]">
        <p className="leading-[24px]">contact@vroomparis.fr</p>
      </div>
    </a>
  );
}

function Svg2() {
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

function Link4() {
  return (
    <a className="absolute h-[24px] left-0 right-0 top-0" data-name="Link" href="/showroom">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[127.557px]">
        <p className="leading-[24px]">Showroom</p>
      </div>
    </a>
  );
}

function Link5() {
  return (
    <a className="absolute h-[24px] left-0 right-0 top-[32px]" data-name="Link" href="/acheter-votre-vehicule">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[11.5px] w-[150px]">
        <p className="leading-[24px]">Acheter un véhicule</p>
      </div>
    </a>
  );
}

function Link6() {
  return (
    <a className="absolute h-[24px] left-0 right-0 top-[68px]" data-name="Link" href="/vendre-votre-vehicule">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[6.5px] w-[170px]">
        <p className="leading-[24px]">Vendre votre véhicule</p>
      </div>
    </a>
  );
}

function Link7() {
  return <div className="absolute h-[24px] left-0 right-0 top-[96px]" data-name="Link" />;
}

function Nav() {
  return (
    <div className="absolute h-[120px] left-[357.33px] right-[357.33px] top-[48px]" data-name="Nav">
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
    </div>
  );
}

function Link8() {
  return (
    <a className="absolute h-[24px] left-[357.33px] right-[357.33px] top-[144px]" data-name="Link" href="/conseils">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[11.5px] w-[180px]">
        <p className="leading-[24px]">Consulation automobile</p>
      </div>
    </a>
  );
}

function Link9() {
  return (
    <a className="absolute h-[24px] left-[357.33px] right-[357.33px] top-[180px]" data-name="Link" href="/a-propos">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[6.5px] w-[170px]">
        <p className="leading-[24px]">À propos</p>
      </div>
    </a>
  );
}

function Link10() {
  return (
    <div className="absolute h-[24px] left-[0.34px] right-[-0.34px] top-[-4px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[189.407px]">
        <p className="leading-[24px]">Politique de confidentialité</p>
      </div>
    </div>
  );
}

function Link11() {
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
      <Link10 />
      <Link11 />
    </div>
  );
}

function Svg3() {
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

function Link12() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[93px] left-[calc(50%+306px)] top-[204px] w-[20px]" data-name="Link">
      <Svg3 />
    </div>
  );
}

function Svg4() {
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

function Link13() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[93px] left-[calc(50%+342px)] top-[204px] w-[20px]" data-name="Link">
      <Svg4 />
    </div>
  );
}

function Svg5() {
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

function Link14() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[93px] left-[calc(50%+378px)] top-[204px] w-[20px]" data-name="Link">
      <Svg5 />
    </div>
  );
}

function HorizontalBorder() {
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
    <div className="absolute h-[317px] left-1/2 top-[48px] w-[1504px] -translate-x-1/2" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%-341.1px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[175.161px]">
        <p className="leading-[28px]">Qu’attendez-vous ?</p>
      </div>
      <Link2 />
      <Link3 />
      <Svg2 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[42.5px] justify-center leading-[0] left-[calc(50%-330.16px)] not-italic text-[16px] text-center text-white top-[175.75px] w-[284.77px]">
        <p className="leading-[24px]">4 bis Av. Alexandre Dumas, 95230 Soisy-sous-Montmorency</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%+0.26px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[215.174px]">
        <p className="leading-[28px]">Informations générales :</p>
      </div>
      <Nav />
      <Link8 />
      <Link9 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%+341.55px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[152.536px]">
        <p className="leading-[28px]">Mentions légales</p>
      </div>
      <Nav1 />
      <Link12 />
      <Link13 />
      <Link14 />
      <HorizontalBorder />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#181818] h-[413px] left-0 right-[-31px] top-[3420px]" data-name="Footer">
      <Container />
    </div>
  );
}

function MobileFilterChip({
  active,
  children,
  onClick,
  light,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
  light?: boolean;
}) {
  return (
    <button
      className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-colors ${
        active
          ? "border-[#c8ec66] bg-[#c8ec66] text-[#010205]"
          : light
            ? "border-[#181818]/12 bg-[#181818]/5 text-[#181818]"
            : "border-white/12 bg-white/5 text-white"
      }`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

function MobileFilterSection({
  children,
  isOpen,
  title,
  onToggle,
  light,
}: {
  children?: React.ReactNode;
  isOpen: boolean;
  title: string;
  onToggle: () => void;
  light?: boolean;
}) {
  return (
    <div className={`border-b pb-3 ${light ? "border-[#181818]/10" : "border-white/10"}`}>
      <button
        className="flex w-full items-center justify-between text-left font-['Helvetica_Neue:Bold',sans-serif] text-sm"
        onClick={onToggle}
        type="button"
      >
        <span>{title}</span>
        <span className={`transition-transform ${light ? "text-[#181818]/60" : "text-white/60"} ${isOpen ? "rotate-45" : ""}`}>+</span>
      </button>
      {isOpen ? <div className="flex flex-wrap gap-2 pt-3">{children}</div> : null}
    </div>
  );
}

function MobileVehicleCard({
  id,
  title,
  subtitle,
  price,
  specs,
  image,
  light,
}: {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  specs: readonly string[];
  image?: string;
  light?: boolean;
}) {
  return (
    <article className={`overflow-hidden rounded-[24px] border bg-white text-[#010205] shadow-[0_20px_60px_rgba(0,0,0,0.25)] ${light ? "border-[#181818]/10" : "border-white/10"}`}>
      <img alt={title} className="h-52 w-full object-cover rounded-tl-[24px] rounded-tr-[24px]" src={image || imgCaptureDecran20251209A1739081} />
      <div className="space-y-5 p-5">
        <div className="space-y-2">
          <p className="font-['Helvetica_Neue:Bold',sans-serif] text-[30px] leading-none">{price}</p>
          <div>
            <p className="font-['Helvetica_Neue:Bold',sans-serif] text-xl leading-tight">{title}</p>
            <p className="mt-1 font-['Helvetica_Neue:Regular',sans-serif] text-sm text-[#535457]">{subtitle}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {specs.map((spec) => (
            <span
              className="rounded-md bg-[#eeeff2] px-2.5 py-1 font-['Helvetica_Neue:Regular',sans-serif] text-xs text-[#010205]"
              key={spec}
            >
              {spec}
            </span>
          ))}
        </div>
        <a
          className="block rounded-[10px] bg-[#010205] px-4 py-3 text-center font-['Helvetica_Neue:Regular',sans-serif] text-sm text-white"
          href={`/showroom/${id}`}
        >
          Voir les détails
        </a>
      </div>
    </article>
  );
}

function MobileFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 text-white">
      <div className="mx-auto max-w-md space-y-6 md:max-w-3xl md:px-3">
        <div className="space-y-3">
          <p className="font-['Wix_Madefor_Display:Regular',sans-serif] text-xl">Qu’attendez-vous ?</p>
          <a className="inline-flex rounded-[10px] bg-[#c8ec66] px-4 py-3 text-sm text-[#010205]" href="tel:+33670760719">
            06 70 76 07 19
          </a>
          <div className="space-y-2 font-['Helvetica_Neue:Regular',sans-serif] text-sm text-white/75">
            <a className="block" href="mailto:contact@vroomparis.fr">contact@vroomparis.fr</a>
            <p>4 bis Av. Alexandre Dumas, 95230 Soisy-sous-Montmorency</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 font-['Helvetica_Neue:Regular',sans-serif] text-sm text-white/75">
          <a href="/showroom">Showroom</a>
          <a href="/acheter-votre-vehicule">Acheter un véhicule</a>
          <a href="/vendre-votre-vehicule">Vendre votre véhicule</a>
          <a href="/conseils">Consultation automobile</a>
          <a href="/a-propos">À propos</a>
        </div>
        <p className="border-t border-white/10 pt-4 font-['Helvetica_Neue:Regular',sans-serif] text-xs text-white/50">
          © 2026 Vroom Paris. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

function MobilePremiumView({
  openSection,
  onReset,
  onSelectBrand,
  onToggleSection,
  selectedBrand,
  selectedCategory,
  setSelectedCategory,
  apiVehicles,
}: {
  openSection: Array<(typeof FILTER_SECTIONS)[number]>;
  onReset: () => void;
  onSelectBrand: (brand: (typeof BRAND_OPTIONS)[number]["id"]) => void;
  onToggleSection: (section: (typeof FILTER_SECTIONS)[number]) => void;
  selectedBrand: (typeof BRAND_OPTIONS)[number]["id"];
  selectedCategory: "premium" | "citadine";
  setSelectedCategory: (category: "premium" | "citadine") => void;
  apiVehicles: Vehicle[];
}) {
  const mappedVehicles = apiVehicles.map((v) => ({
    id: v.id,
    brandId: v.brand.toLowerCase().replace(/\s+/g, "-"),
    category: (v.price > 20000 ? "premium" : "citadine") as "premium" | "citadine",
    title: `${v.brand} ${v.model}`,
    subtitle: v.subtitle,
    price: v.price.toLocaleString("fr-FR") + " €",
    priceValue: v.price,
    fuel: v.specs.fuel as (typeof MOBILE_FUEL_OPTIONS)[number],
    gearbox: v.specs.gearbox as (typeof MOBILE_GEARBOX_OPTIONS)[number],
    mileageValue: v.specs.mileage,
    yearValue: v.specs.year,
    specs: [v.specs.fuel, v.specs.gearbox, v.specs.mileage.toLocaleString("fr-FR") + " km", String(v.specs.year)] as readonly string[],
    image: v.image || v.gallery?.[0],
  }));
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedFuel, setSelectedFuel] = useState<(typeof MOBILE_FUEL_OPTIONS)[number] | null>(null);
  const [selectedGearbox, setSelectedGearbox] = useState<(typeof MOBILE_GEARBOX_OPTIONS)[number] | null>(null);
  const [selectedMileage, setSelectedMileage] = useState<(typeof MOBILE_MILEAGE_OPTIONS)[number]["id"] | null>(null);
  const [selectedYear, setSelectedYear] = useState<(typeof MOBILE_YEAR_OPTIONS)[number]["id"] | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<(typeof MOBILE_PRICE_OPTIONS)[number]["id"] | null>(null);

  const matchesMileage = (
    mileageValue: number,
    option: (typeof MOBILE_MILEAGE_OPTIONS)[number]["id"] | null,
  ) => {
    if (!option) return true;
    if (option === "under-50000") return mileageValue < 50000;
    if (option === "50000-80000") return mileageValue >= 50000 && mileageValue <= 80000;
    return mileageValue > 80000;
  };

  const matchesYear = (
    yearValue: number,
    option: (typeof MOBILE_YEAR_OPTIONS)[number]["id"] | null,
  ) => {
    if (!option) return true;
    if (option === "2024-plus") return yearValue >= 2024;
    if (option === "2022-2023") return yearValue >= 2022 && yearValue <= 2023;
    return yearValue <= 2021;
  };

  const matchesPrice = (
    priceValue: number,
    option: (typeof MOBILE_PRICE_OPTIONS)[number]["id"] | null,
  ) => {
    if (!option) return true;
    if (option === "under-20000") return priceValue < 20000;
    if (option === "20000-28000") return priceValue >= 20000 && priceValue <= 28000;
    return priceValue > 28000;
  };

  const visibleVehicles = mappedVehicles.filter((vehicle) => {
    const matchesBrand = selectedBrand === "all" || vehicle.brandId === selectedBrand;
    const matchesFuel = selectedFuel === null || vehicle.fuel === selectedFuel;
    const matchesGearbox = selectedGearbox === null || vehicle.gearbox === selectedGearbox;

    return (
      matchesBrand &&
      vehicle.category === selectedCategory &&
      matchesFuel &&
      matchesGearbox &&
      matchesMileage(vehicle.mileageValue, selectedMileage) &&
      matchesYear(vehicle.yearValue, selectedYear) &&
      matchesPrice(vehicle.priceValue, selectedPrice)
    );
  });
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
  const [selectedSlide, setSelectedSlide] = useState(0);

  const resetMobileFilters = () => {
    onReset();
    setSelectedFuel(null);
    setSelectedGearbox(null);
    setSelectedMileage(null);
    setSelectedYear(null);
    setSelectedPrice(null);
  };

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const onSelect = () => setSelectedSlide(emblaApi.selectedScrollSnap());

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    emblaApi.reInit();
    emblaApi.scrollTo(0);
    setSelectedSlide(0);
  }, [emblaApi, selectedBrand, selectedCategory, selectedFuel, selectedGearbox, selectedMileage, selectedPrice, selectedYear]);

  const isCitadine = selectedCategory === "citadine";
  const isSectionOpen = (section: (typeof FILTER_SECTIONS)[number]) => openSection.includes(section);

  return (
    <div className={`min-h-screen xl:hidden transition-colors duration-150 ${isCitadine ? "bg-white text-[#181818]" : "bg-[#181818] text-white"}`}>
      <div className="relative overflow-hidden px-5 pb-8 pt-24 md:px-8 md:pb-10 md:pt-28 lg:px-10">
        <div className="pointer-events-none absolute inset-x-[-25%] top-[-140px] h-[320px] rounded-full bg-[radial-gradient(circle_at_center,rgba(200,236,102,0.3),rgba(114,249,216,0.12),transparent_70%)] blur-3xl" />
        <div className="relative mx-auto max-w-md space-y-6 md:max-w-5xl md:space-y-8">
          <div className="space-y-2">
            <p className={`font-['Helvetica_Neue:Regular',sans-serif] text-sm uppercase tracking-[0.18em] ${isCitadine ? "text-[#181818]/45" : "text-white/45"}`}>
              Showroom
            </p>
            <h1 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[34px] leading-none md:text-[52px] md:leading-[0.95]">
              Aperçu du modèle
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <div className="flex gap-3 md:gap-4">
              <MobileFilterChip active={selectedCategory === "premium"} onClick={() => setSelectedCategory("premium")} light={isCitadine}>
                Premium
              </MobileFilterChip>
              <MobileFilterChip active={selectedCategory === "citadine"} onClick={() => setSelectedCategory("citadine")} light={isCitadine}>
                Citadine
              </MobileFilterChip>
            </div>
            <button
              className={`rounded-full border px-4 py-2 text-sm md:ml-auto ${isCitadine ? "border-[#181818]/12 bg-[#181818]/5 text-[#181818]" : "border-white/12 bg-white/5 text-white"}`}
              onClick={() => setFiltersOpen((current) => !current)}
              type="button"
            >
              Filtres
            </button>
          </div>

          {filtersOpen ? (
            <div className={`space-y-5 rounded-[24px] border p-4 backdrop-blur-sm md:p-5 ${isCitadine ? "border-[#181818]/10 bg-[#181818]/5" : "border-white/10 bg-white/5"}`}>
              <div className="flex flex-wrap gap-2">
                {BRAND_OPTIONS.map((option) => (
                  <MobileFilterChip
                    active={selectedBrand === option.id}
                    key={option.id}
                    onClick={() => onSelectBrand(option.id)}
                    light={isCitadine}
                  >
                    {option.label}
                  </MobileFilterChip>
                ))}
              </div>

              <div className="space-y-3">
                <MobileFilterSection
                  isOpen={isSectionOpen("Type de carburant")}
                  onToggle={() => onToggleSection("Type de carburant")}
                  title="Type de carburant"
                  light={isCitadine}
                >
                  {MOBILE_FUEL_OPTIONS.map((option) => (
                    <MobileFilterChip
                      active={selectedFuel === option}
                      key={option}
                      onClick={() => setSelectedFuel((current) => current === option ? null : option)}
                      light={isCitadine}
                    >
                      {option}
                    </MobileFilterChip>
                  ))}
                </MobileFilterSection>
                <MobileFilterSection
                  isOpen={isSectionOpen("Boîtes de vitesse")}
                  onToggle={() => onToggleSection("Boîtes de vitesse")}
                  title="Boîtes de vitesse"
                  light={isCitadine}
                >
                  {MOBILE_GEARBOX_OPTIONS.map((option) => (
                    <MobileFilterChip
                      active={selectedGearbox === option}
                      key={option}
                      onClick={() => setSelectedGearbox((current) => current === option ? null : option)}
                      light={isCitadine}
                    >
                      {option}
                    </MobileFilterChip>
                  ))}
                </MobileFilterSection>
                <MobileFilterSection
                  isOpen={isSectionOpen("Kilométrage")}
                  onToggle={() => onToggleSection("Kilométrage")}
                  title="Kilométrage"
                  light={isCitadine}
                >
                  {MOBILE_MILEAGE_OPTIONS.map((option) => (
                    <MobileFilterChip
                      active={selectedMileage === option.id}
                      key={option.id}
                      onClick={() => setSelectedMileage((current) => current === option.id ? null : option.id)}
                      light={isCitadine}
                    >
                      {option.label}
                    </MobileFilterChip>
                  ))}
                </MobileFilterSection>
                <MobileFilterSection
                  isOpen={isSectionOpen("Années")}
                  onToggle={() => onToggleSection("Années")}
                  title="Années"
                  light={isCitadine}
                >
                  {MOBILE_YEAR_OPTIONS.map((option) => (
                    <MobileFilterChip
                      active={selectedYear === option.id}
                      key={option.id}
                      onClick={() => setSelectedYear((current) => current === option.id ? null : option.id)}
                      light={isCitadine}
                    >
                      {option.label}
                    </MobileFilterChip>
                  ))}
                </MobileFilterSection>
                <MobileFilterSection
                  isOpen={isSectionOpen("Prix")}
                  onToggle={() => onToggleSection("Prix")}
                  title="Prix"
                  light={isCitadine}
                >
                  {MOBILE_PRICE_OPTIONS.map((option) => (
                    <MobileFilterChip
                      active={selectedPrice === option.id}
                      key={option.id}
                      onClick={() => setSelectedPrice((current) => current === option.id ? null : option.id)}
                      light={isCitadine}
                    >
                      {option.label}
                    </MobileFilterChip>
                  ))}
                </MobileFilterSection>
              </div>

              <button
                className={`w-full rounded-[10px] border px-4 py-3 font-['Helvetica_Neue:Regular',sans-serif] text-sm ${isCitadine ? "border-[#181818]/20 hover:bg-[#181818]/5" : "border-white/20 hover:bg-white/5"}`}
                onClick={resetMobileFilters}
                type="button"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : null}

          <div className="space-y-4">
            {visibleVehicles.length > 0 ? (
              <>
                <div className="overflow-hidden md:hidden" ref={emblaRef}>
                  <div className="-ml-4 flex">
                    {visibleVehicles.map((vehicle) => (
                      <div className="min-w-0 flex-[0_0_100%] pl-4" key={vehicle.id}>
                        <MobileVehicleCard
                          id={vehicle.id}
                          image={vehicle.image}
                          price={vehicle.price}
                          specs={vehicle.specs}
                          subtitle={vehicle.subtitle}
                          title={vehicle.title}
                          light={isCitadine}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden gap-6 md:grid md:grid-cols-2">
                  {visibleVehicles.map((vehicle) => (
                    <MobileVehicleCard
                      id={vehicle.id}
                      image={vehicle.image}
                      key={vehicle.id}
                      price={vehicle.price}
                      specs={vehicle.specs}
                      subtitle={vehicle.subtitle}
                      title={vehicle.title}
                      light={isCitadine}
                    />
                  ))}
                </div>
                {visibleVehicles.length > 1 ? (
                  <div className="flex items-center justify-center gap-2 md:hidden">
                    {visibleVehicles.map((vehicle, index) => (
                      <button
                        aria-label={`Aller au véhicule ${index + 1}`}
                        aria-pressed={selectedSlide === index}
                        className={`h-2.5 rounded-full transition-all ${
                          selectedSlide === index ? "w-6 bg-[#c8ec66]" : isCitadine ? "w-2.5 bg-[#181818]/25" : "w-2.5 bg-white/25"
                        }`}
                        key={vehicle.id}
                        onClick={() => emblaApi?.scrollTo(index)}
                        type="button"
                      />
                    ))}
                  </div>
                ) : null}
              </>
            ) : (
              <div className={`rounded-[24px] border p-6 text-center font-['Helvetica_Neue:Regular',sans-serif] text-sm ${isCitadine ? "border-[#181818]/10 bg-[#181818]/5 text-[#181818]/70" : "border-white/10 bg-white/5 text-white/70"}`}>
                Aucun véhicule ne correspond à ces filtres.
              </div>
            )}
          </div>
        </div>
      </div>
      <MobileFooter />
    </div>
  );
}

function DesktopFilterSidebar({
  brands,
  selectedBrand,
  onSelectBrand,
  selectedFuel,
  onSelectFuel,
  selectedGearbox,
  onSelectGearbox,
  selectedMileage,
  onSelectMileage,
  yearLowerBound,
  yearUpperBound,
  yearMin,
  yearMax,
  onYearMinChange,
  onYearMaxChange,
  priceLowerBound,
  priceUpperBound,
  priceMin,
  priceMax,
  onPriceMinChange,
  onPriceMaxChange,
  openSection,
  onToggleSection,
  onReset,
  selectedCategory,
}: {
  brands: { id: string; label: string; count: number }[];
  selectedBrand: string;
  onSelectBrand: (brand: string) => void;
  selectedFuel: string | null;
  onSelectFuel: (val: string | null) => void;
  selectedGearbox: string | null;
  onSelectGearbox: (val: string | null) => void;
  selectedMileage: string | null;
  onSelectMileage: (val: string | null) => void;
  yearLowerBound: number;
  yearUpperBound: number;
  yearMin: number;
  yearMax: number;
  onYearMinChange: (value: number) => void;
  onYearMaxChange: (value: number) => void;
  priceLowerBound: number;
  priceUpperBound: number;
  priceMin: number;
  priceMax: number;
  onPriceMinChange: (value: number) => void;
  onPriceMaxChange: (value: number) => void;
  openSection: string[];
  onToggleSection: (section: string) => void;
  onReset: () => void;
  selectedCategory: "premium" | "citadine";
}) {
  const isCitadine = selectedCategory === "citadine";
  const sectionBorder = isCitadine ? "border-[#181818]/18" : "border-white/18";
  const titleColor = isCitadine ? "text-[#181818]" : "text-white";
  const subtleColor = isCitadine ? "text-[#181818]/55" : "text-white/55";
  const inputBorder = isCitadine ? "border-[#181818]/18 bg-white" : "border-white/18 bg-white/6";
  const trackColor = isCitadine ? "bg-[#181818]/25" : "bg-white/25";
  const thumbColor = isCitadine ? "bg-[#6b7280]" : "bg-white/75";
  const isSectionOpen = (section: string) => openSection.includes(section);
  const yearRange = Math.max(1, yearUpperBound - yearLowerBound);
  const priceRange = Math.max(1, priceUpperBound - priceLowerBound);
  const yearLeftPercent = ((yearMin - yearLowerBound) / yearRange) * 100;
  const yearRightPercent = ((yearMax - yearLowerBound) / yearRange) * 100;
  const priceLeftPercent = ((priceMin - priceLowerBound) / priceRange) * 100;
  const priceRightPercent = ((priceMax - priceLowerBound) / priceRange) * 100;
  const formatPrice = (value: number) => `${value.toLocaleString("fr-FR")}€`;

  const renderRadioOption = (
    label: string,
    active: boolean,
    onClick: () => void,
    count?: number,
  ) => (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-3 text-left pointer-events-auto cursor-pointer"
    >
      <div
        className={`flex size-7 items-center justify-center rounded-full border-2 ${
          isCitadine ? "border-[#6b7280]" : "border-white/80"
        } ${active ? (isCitadine ? "border-[#181818] bg-[#181818]" : "border-white bg-white") : ""}`}
      >
        {active ? (
          <div className={`size-2.5 rounded-full ${isCitadine ? "bg-white" : "bg-[#181818]"}`} />
        ) : null}
      </div>
      <span className={`font-['Helvetica_Neue:Regular',sans-serif] text-[16px] ${titleColor}`}>
        {label} {typeof count === "number" ? <span className={subtleColor}>({count})</span> : null}
      </span>
    </button>
  );

  return (
    <div className="absolute left-[68px] top-[369px] w-[310px]">
      <div className={`border-b pb-6 ${sectionBorder}`}>
        <div className="flex items-center justify-between h-[55px]">
          <span className={`font-['Helvetica_Neue:Bold',sans-serif] text-[14px] font-bold ${titleColor}`}>Marques</span>
          <span className={`${titleColor} text-xl leading-none`}>—</span>
        </div>
        <div className="flex flex-col gap-4">
          {brands.map((option) =>
            renderRadioOption(option.label, selectedBrand === option.id, () => onSelectBrand(option.id), option.count),
          )}
        </div>
      </div>

      {[
        {
          title: "Type de carburant",
          content: (
            <div className="flex flex-col gap-4 pt-2 pb-6">
              {renderRadioOption("Tous", selectedFuel === null, () => onSelectFuel(null))}
              {MOBILE_FUEL_OPTIONS.map((option) =>
                renderRadioOption(option, selectedFuel === option, () => onSelectFuel(selectedFuel === option ? null : option)),
              )}
            </div>
          ),
        },
        {
          title: "Boîtes de vitesse",
          content: (
            <div className="flex flex-col gap-4 pt-2 pb-6">
              {renderRadioOption("Toutes", selectedGearbox === null, () => onSelectGearbox(null))}
              {MOBILE_GEARBOX_OPTIONS.map((option) =>
                renderRadioOption(option, selectedGearbox === option, () => onSelectGearbox(selectedGearbox === option ? null : option)),
              )}
            </div>
          ),
        },
        {
          title: "Kilométrage",
          content: (
            <div className="flex flex-col gap-4 pt-2 pb-6">
              {renderRadioOption("Toutes", selectedMileage === null, () => onSelectMileage(null))}
              {MOBILE_MILEAGE_OPTIONS.map((option) =>
                renderRadioOption(option.label, selectedMileage === option.id, () => onSelectMileage(selectedMileage === option.id ? null : option.id)),
              )}
            </div>
          ),
        },
        {
          title: "Années",
          content: (
            <div className="pt-3 pb-6">
              <div className="relative mb-5 h-5">
                <div className={`absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full ${trackColor}`} />
                <div
                  className="absolute top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-[#c8ec66]"
                  style={{ left: `${yearLeftPercent}%`, right: `${100 - yearRightPercent}%` }}
                />
                <input
                  type="range"
                  min={yearLowerBound}
                  max={yearUpperBound}
                  step={1}
                  value={yearMin}
                  onChange={(event) => onYearMinChange(Number(event.target.value))}
                  className="range-slider absolute inset-0 z-20 w-full"
                  aria-label="Année minimale"
                />
                <input
                  type="range"
                  min={yearLowerBound}
                  max={yearUpperBound}
                  step={1}
                  value={yearMax}
                  onChange={(event) => onYearMaxChange(Number(event.target.value))}
                  className="range-slider absolute inset-0 z-30 w-full"
                  aria-label="Année maximale"
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className={`text-[14px] ${subtleColor}`}>De</span>
                  <div className={`flex h-8 min-w-[74px] items-center rounded-[10px] border px-3 text-[14px] ${inputBorder} ${titleColor}`}>
                    {yearMin}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[14px] ${subtleColor}`}>À</span>
                  <div className={`flex h-8 min-w-[74px] items-center rounded-[10px] border px-3 text-[14px] ${inputBorder} ${titleColor}`}>
                    {yearMax}
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Prix",
          content: (
            <div className="pt-3 pb-6">
              <div className="relative mb-3 h-5">
                <div className={`absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full ${trackColor}`} />
                <div
                  className="absolute top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-[#c8ec66]"
                  style={{ left: `${priceLeftPercent}%`, right: `${100 - priceRightPercent}%` }}
                />
                <input
                  type="range"
                  min={priceLowerBound}
                  max={priceUpperBound}
                  step={500}
                  value={priceMin}
                  onChange={(event) => onPriceMinChange(Number(event.target.value))}
                  className="range-slider absolute inset-0 z-20 w-full"
                  aria-label="Prix minimum"
                />
                <input
                  type="range"
                  min={priceLowerBound}
                  max={priceUpperBound}
                  step={500}
                  value={priceMax}
                  onChange={(event) => onPriceMaxChange(Number(event.target.value))}
                  className="range-slider absolute inset-0 z-30 w-full"
                  aria-label="Prix maximum"
                />
              </div>
              <div className={`mb-1 flex justify-between text-[12px] ${subtleColor}`}>
                <span>Minimum</span>
                <span>Maximum</span>
              </div>
              <div className="flex items-center gap-3">
                <div className={`flex h-8 min-w-[108px] items-center rounded-[10px] border px-3 text-[14px] ${inputBorder} ${titleColor}`}>
                  {formatPrice(priceMin)}
                </div>
                <span className={titleColor}>-</span>
                <div className={`flex h-8 min-w-[108px] items-center rounded-[10px] border px-3 text-[14px] ${inputBorder} ${titleColor}`}>
                  {formatPrice(priceMax)}
                </div>
              </div>
            </div>
          ),
        },
      ].map((section) => (
        <div key={section.title} className={`border-b ${sectionBorder}`}>
          <button
            type="button"
            onClick={() => onToggleSection(section.title)}
            className="flex items-center justify-between w-full h-[55px] text-left pointer-events-auto cursor-pointer"
            aria-expanded={isSectionOpen(section.title)}
          >
            <span className={`font-['Helvetica_Neue:Bold',sans-serif] text-[14px] ${titleColor}`}>
              {section.title}
            </span>
            <span
              className={`inline-flex transition-transform duration-200 ${
                isSectionOpen(section.title) ? "rotate-45" : ""
              }`}
            >
              <svg fill="none" height="19.5" viewBox="0 0 19.5 19.5" width="19.5">
                <path d={svgPaths.p276a4f00} fill={isCitadine ? "#181818" : "white"} />
              </svg>
            </span>
          </button>
          {isSectionOpen(section.title) ? section.content : null}
        </div>
      ))}
      <button
        type="button"
        onClick={onReset}
        className={`mt-6 w-full border-2 rounded-[4px] h-[54px] font-['Helvetica_Neue:Regular',sans-serif] text-[15px] ${
          isCitadine ? "border-[#181818] text-[#181818] hover:bg-[#181818]/5" : "border-white text-white hover:bg-white/5"
        }`}
      >
        réinitialiser le filtre
      </button>
    </div>
  );
}

export default function Premium() {
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<"premium" | "citadine">("premium");
  const [openSection, setOpenSection] = useState<string[]>(["Type de carburant"]);
  const [apiVehicles, setApiVehicles] = useState<Vehicle[]>([]);
  const [apiBrands, setApiBrands] = useState<{ id: string; label: string; count: number }[]>([]);
  const [desktopPage, setDesktopPage] = useState(0);
  const [desktopSelectedFuel, setDesktopSelectedFuel] = useState<string | null>(null);
  const [desktopSelectedGearbox, setDesktopSelectedGearbox] = useState<string | null>(null);
  const [desktopSelectedMileage, setDesktopSelectedMileage] = useState<string | null>(null);
  const [desktopYearMin, setDesktopYearMin] = useState(DEFAULT_DESKTOP_YEAR_MIN);
  const [desktopYearMax, setDesktopYearMax] = useState(DEFAULT_DESKTOP_YEAR_MAX);
  const [desktopPriceMin, setDesktopPriceMin] = useState(DEFAULT_DESKTOP_PRICE_MIN);
  const [desktopPriceMax, setDesktopPriceMax] = useState(DEFAULT_DESKTOP_PRICE_MAX);
  const fullYearMin = apiVehicles.length > 0
    ? Math.max(DEFAULT_DESKTOP_YEAR_MIN, Math.min(...apiVehicles.map((vehicle) => vehicle.specs.year)))
    : DEFAULT_DESKTOP_YEAR_MIN;
  const fullYearMax = apiVehicles.length > 0
    ? Math.max(fullYearMin, Math.max(...apiVehicles.map((vehicle) => vehicle.specs.year)))
    : DEFAULT_DESKTOP_YEAR_MAX;
  const fullPriceMin = apiVehicles.length > 0
    ? Math.max(DEFAULT_DESKTOP_PRICE_MIN, Math.min(...apiVehicles.map((vehicle) => vehicle.price)))
    : DEFAULT_DESKTOP_PRICE_MIN;
  const fullPriceMax = apiVehicles.length > 0
    ? Math.max(fullPriceMin, Math.max(...apiVehicles.map((vehicle) => vehicle.price)))
    : DEFAULT_DESKTOP_PRICE_MAX;

  useEffect(() => {
    const isCitadine = selectedCategory === "citadine";
    const scrollContainer = document.querySelector(".h-\\[100dvh\\]");
    
    // Ensure transition classes are applied
    document.body.classList.add("transition-colors", "duration-150");

    if (isCitadine) {
      document.body.classList.add("light-showroom");
      if (scrollContainer) {
        scrollContainer.classList.remove("bg-[#181818]");
        scrollContainer.classList.add("bg-white");
      }
    } else {
      document.body.classList.remove("light-showroom");
      if (scrollContainer) {
        scrollContainer.classList.remove("bg-white");
        scrollContainer.classList.add("bg-[#181818]");
      }
    }
    return () => {
      document.body.classList.remove("light-showroom");
      document.body.classList.remove("transition-colors", "duration-150");
      if (scrollContainer) {
        scrollContainer.classList.remove("bg-white");
        scrollContainer.classList.add("bg-[#181818]");
      }
    };
  }, [selectedCategory]);

  useEffect(() => {
    vehiclesApi.list({ status: "En ligne", limit: 50 }).then((res) => {
      setApiVehicles(res.data);
    }).catch(() => {});
    vehiclesApi.getFilters().then((res) => {
      const total = res.brands.reduce((sum, b) => sum + b.count, 0);
      setApiBrands([{ id: "all", label: "Tous", count: total }, ...res.brands]);
    }).catch(() => {});
  }, []);

  const matchesMileageDesktop = (mileageValue: number, option: string | null) => {
    if (!option) return true;
    if (option === "under-50000") return mileageValue < 50000;
    if (option === "50000-80000") return mileageValue >= 50000 && mileageValue <= 80000;
    return mileageValue > 80000;
  };

  const desktopFilteredVehicles = apiVehicles.filter((v) => {
    const brandId = v.brand.toLowerCase().replace(/\s+/g, "-");
    const matchesBrand = selectedBrand === "all" || brandId === selectedBrand;
    const matchesFuel = !desktopSelectedFuel || v.specs.fuel === desktopSelectedFuel;
    const matchesGearbox = !desktopSelectedGearbox || v.specs.gearbox === desktopSelectedGearbox;
    return (
      matchesBrand &&
      matchesFuel &&
      matchesGearbox &&
      matchesMileageDesktop(v.specs.mileage, desktopSelectedMileage) &&
      v.specs.year >= desktopYearMin &&
      v.specs.year <= desktopYearMax &&
      v.price >= desktopPriceMin &&
      v.price <= desktopPriceMax
    );
  });

  const totalDesktopPages = Math.ceil(desktopFilteredVehicles.length / DESKTOP_VEHICLES_PER_PAGE);
  const safeDesktopPage = totalDesktopPages === 0 ? 0 : Math.min(desktopPage, totalDesktopPages - 1);
  const paginatedDesktopVehicles = desktopFilteredVehicles.slice(
    safeDesktopPage * DESKTOP_VEHICLES_PER_PAGE,
    (safeDesktopPage + 1) * DESKTOP_VEHICLES_PER_PAGE,
  );

  useEffect(() => {
    setDesktopPage(0);
  }, [
    selectedBrand,
    selectedCategory,
    desktopSelectedFuel,
    desktopSelectedGearbox,
    desktopSelectedMileage,
    desktopYearMin,
    desktopYearMax,
    desktopPriceMin,
    desktopPriceMax,
  ]);

  useEffect(() => {
    if (apiVehicles.length === 0) {
      return;
    }

    setDesktopYearMin(fullYearMin);
    setDesktopYearMax(fullYearMax);
    setDesktopPriceMin(fullPriceMin);
    setDesktopPriceMax(fullPriceMax);
  }, [apiVehicles, fullYearMin, fullYearMax, fullPriceMin, fullPriceMax]);

  useEffect(() => {
    if (desktopPage !== safeDesktopPage) {
      setDesktopPage(safeDesktopPage);
    }
  }, [desktopPage, safeDesktopPage]);

  const DESKTOP_SLOTS: Array<{ leftBase: number; topBase: number; isGreen?: boolean }> = [
    { leftBase: 502, topBase: 445 },
    { leftBase: 983, topBase: 445, isGreen: true },
    { leftBase: 1468, topBase: 445 },
    { leftBase: 502, topBase: 1138 },
    { leftBase: 983, topBase: 1138 },
    { leftBase: 1468, topBase: 1138 },
    { leftBase: 502, topBase: 1831 },
    { leftBase: 983, topBase: 1831 },
    { leftBase: 1468, topBase: 1831 },
    { leftBase: 502, topBase: 2524 },
    { leftBase: 983, topBase: 2524 },
    { leftBase: 1468, topBase: 2524 },
  ];

  const resetFilters = () => {
    setSelectedBrand("all");
    setSelectedCategory("premium");
    setOpenSection(["Type de carburant"]);
    setDesktopSelectedFuel(null);
    setDesktopSelectedGearbox(null);
    setDesktopSelectedMileage(null);
    setDesktopYearMin(fullYearMin);
    setDesktopYearMax(fullYearMax);
    setDesktopPriceMin(fullPriceMin);
    setDesktopPriceMax(fullPriceMax);
  };

  const selectedBrandLabel = apiBrands.find((option) => option.id === selectedBrand)?.label ?? "Tous";

  return (
    <>
      <MobilePremiumView
        apiVehicles={apiVehicles}
        onReset={resetFilters}
        onSelectBrand={setSelectedBrand}
        onToggleSection={(section) =>
          setOpenSection((current) =>
            current.includes(section) ? current.filter((item) => item !== section) : [...current, section],
          )
        }
        openSection={openSection as Array<(typeof FILTER_SECTIONS)[number]>}
        selectedBrand={selectedBrand as (typeof BRAND_OPTIONS)[number]["id"]}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className={`relative hidden size-full xl:block transition-colors duration-150 ${selectedCategory === "citadine" ? "bg-white text-[#181818]" : "bg-[#181818] text-white"}`} data-name="premium">
        <div className="absolute h-[742.872px] left-[-793px] top-[-242px] w-[2664.781px]" data-name="Union">
          <div className="absolute inset-[-26.92%_-7.51%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3064.78 1142.87">
              <g filter="url(#filter0_f_6_3027)" id="Union">
                <path d={svgPaths.p321ebd00} fill="url(#paint0_linear_6_3027)" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1142.87" id="filter0_f_6_3027" width="3064.78" x="-3.22549e-06" y="3.20925e-06">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_6_3027" stdDeviation="100" />
                </filter>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_3027" x1="35.5207" x2="1147.95" y1="742.236" y2="-1039.64">
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
        <DesktopFilterSidebar
          brands={apiBrands}
          selectedBrand={selectedBrand}
          onSelectBrand={setSelectedBrand}
          selectedFuel={desktopSelectedFuel}
          onSelectFuel={(val) => setDesktopSelectedFuel((c) => c === val ? null : val)}
          selectedGearbox={desktopSelectedGearbox}
          onSelectGearbox={(val) => setDesktopSelectedGearbox((c) => c === val ? null : val)}
          selectedMileage={desktopSelectedMileage}
          onSelectMileage={(val) => setDesktopSelectedMileage((c) => c === val ? null : val)}
          yearLowerBound={fullYearMin}
          yearUpperBound={fullYearMax}
          yearMin={desktopYearMin}
          yearMax={desktopYearMax}
          onYearMinChange={(value) => setDesktopYearMin(Math.min(value, desktopYearMax))}
          onYearMaxChange={(value) => setDesktopYearMax(Math.max(value, desktopYearMin))}
          priceLowerBound={fullPriceMin}
          priceUpperBound={fullPriceMax}
          priceMin={desktopPriceMin}
          priceMax={desktopPriceMax}
          onPriceMinChange={(value) => setDesktopPriceMin(Math.min(value, desktopPriceMax))}
          onPriceMaxChange={(value) => setDesktopPriceMax(Math.max(value, desktopPriceMin))}
          openSection={openSection}
          onToggleSection={(section) =>
            setOpenSection((current) =>
              current.includes(section) ? current.filter((item) => item !== section) : [...current, section],
            )
          }
          onReset={resetFilters}
          selectedCategory={selectedCategory}
        />
        {DESKTOP_SLOTS.map((slot, i) => (
          <VehicleCardDesktop
            key={paginatedDesktopVehicles[i]?.id ?? i}
            isGreen={!!slot.isGreen}
            leftBase={slot.leftBase}
            topBase={slot.topBase}
            vehicle={paginatedDesktopVehicles[i]}
          />
        ))}
        <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[38px] justify-center leading-[0] left-[517px] not-italic text-[24.8px] text-[transparent] top-[373px] w-[118px]">
          <p className="leading-[37.89px]">{selectedBrandLabel}</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[78px] justify-center leading-[0] left-[68px] text-[43.9px] top-[194px] w-[472px]">
          <p className={`leading-[62.88px] ${selectedCategory === "citadine" ? "text-[#181818]" : "text-white"}`}>Aperçu du modèle</p>
        </div>
        <Link isActive={selectedCategory === "citadine"} onClick={() => setSelectedCategory("citadine")} light={selectedCategory === "citadine"} />
        <Link1 isActive={selectedCategory === "premium"} onClick={() => setSelectedCategory("premium")} light={selectedCategory === "citadine"} />
        <Group12
          light={selectedCategory === "citadine"}
          totalPages={totalDesktopPages}
          currentPage={safeDesktopPage}
          onSelectPage={setDesktopPage}
        />
        <Group13 light={selectedCategory === "citadine"} />
        <Footer />
      </div>
    </>
  );
}
