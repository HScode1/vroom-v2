import React, { useState } from "react";
import svgPaths from "../svg-gblhduksgt";
import imgBmw from "../bmw.webp";
import imgGolf from "../golf.webp";
import imgClio from "../clio-3.jpg";

type ShowroomVehicle = {
  brand: string;
  model: string;
  subtitle: string;
  price: string;
  image: string;
  specs: {
    fuel: string;
    year: string;
    mileage: string;
    gearbox: string;
  };
};

const SHOWROOM_VEHICLES: ShowroomVehicle[] = [
  {
    brand: "BMW",
    model: "Série 7",
    subtitle: "740Ld xDrive M Sport",
    price: "24 990 €",
    image: imgBmw,
    specs: {
      fuel: "Diesel",
      year: "2021",
      mileage: "88 500 km",
      gearbox: "Automatique",
    },
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    subtitle: "4 Phase 2 1.4",
    price: "3 490 €",
    image: imgGolf,
    specs: {
      fuel: "Essence",
      year: "2008",
      mileage: "172 000 km",
      gearbox: "Manuelle",
    },
  },
  {
    brand: "Renault",
    model: "Clio 3",
    subtitle: "1.2 75ch Dynamique",
    price: "3 890 €",
    image: imgClio,
    specs: {
      fuel: "Essence",
      year: "2012",
      mileage: "190 200 km",
      gearbox: "Manuelle",
    },
  },
];

function Svg30() {
  return (
    <div className="-translate-y-1/2 absolute left-[55px] size-[12px] top-[calc(50%-3101.5px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.p8610900} id="Vector" stroke="var(--stroke-0, #BCFF3D)" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[55px] top-[calc(50%-3101.5px)]">
      <Svg30 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[75px] text-[12px] text-[rgba(255,255,255,0.35)] top-[calc(50%-3101.5px)] w-[134.475px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Garantie 12 mois incluse</p>
      </div>
    </div>
  );
}

function Svg31() {
  return (
    <div className="-translate-y-1/2 absolute left-[265px] size-[13px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="SVG">
          <path d={svgPaths.p3be6c058} id="Vector" stroke="var(--stroke-0, #0C0D0C)" strokeWidth="1.35417" />
        </g>
      </svg>
    </div>
  );
}

function Link13() {
  return (
    <div className="absolute bg-[#bcff3d] h-[44px] right-[-0.36px] rounded-[100px] top-0 w-[306px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[16px] justify-center leading-[0] left-[18px] text-[#0c0d0c] text-[13px] top-1/2 tracking-[0.52px] w-[247px]">
        <p className="leading-[normal]">Acheter votre véhicule</p>
      </div>
      <Svg31 />
    </div>
  );
}

function CtaBasDroite() {
  return (
    <div className="absolute bottom-[6899px] h-[69px] right-[65.36px] w-[271.64px]" data-name="CTA BAS DROITE">
      <Link13 />
      <div className="absolute bg-[rgba(255,255,255,0.15)] h-px right-[151.92px] top-[62px] w-[24px]" data-name="Horizontal Divider" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] right-[143.92px] text-[10px] text-[rgba(255,255,255,0.18)] top-[62.5px] tracking-[1.4px] translate-x-full uppercase w-[144.232px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Scroll pour explorer</p>
      </div>
    </div>
  );
}

function OverlayBorder16() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(188,255,61,0.08)] border border-[rgba(188,255,61,0.2)] border-solid h-[28px] left-[calc(50%+10px)] rounded-[100px] top-[3035px] w-[208px]" data-name="Overlay+Border">
      <div className="-translate-y-1/2 absolute bg-[#bcff3d] left-[18px] rounded-[2.5px] size-[5px] top-1/2" data-name="Background" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-[calc(50%+8.5px)] text-[#bcff3d] text-[11px] text-center top-1/2 tracking-[1.76px] uppercase w-[177px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Véhicules disponibles</p>
      </div>
    </div>
  );
}

function ShowroomSpecBox({ label, value, className, labelClassName, valueClassName }: { label: string; value: string; className: string; labelClassName: string; valueClassName: string }) {
  return (
    <div className={`absolute bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] border-solid leading-[0] rounded-[12px] ${className}`} data-name="Paragraph+Overlay+Border">
      <div className={`-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[13px] justify-center text-[10px] text-[rgba(255,255,255,0.3)] top-[18.5px] tracking-[0.8px] uppercase ${labelClassName}`} style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">{label}</p>
      </div>
      <div className={`-translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[18px] justify-center text-[15px] text-white top-[37px] ${valueClassName}`}>
        <p className="leading-[normal]">{value}</p>
      </div>
    </div>
  );
}

function ParagraphOverlayBorder2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] border-solid inset-[216.85px_975.66px_243.15px_64px] leading-[0] rounded-[12px]" data-name="Paragraph+Overlay+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[13px] justify-center left-[14px] right-[74.13px] text-[10px] text-[rgba(255,255,255,0.3)] top-[18.5px] tracking-[0.8px] uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Carburant</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[18px] justify-center left-[14px] right-[73.14px] text-[15px] text-white top-[37px]">
        <p className="leading-[normal]">Hybride</p>
      </div>
    </div>
  );
}

function ParagraphOverlayBorder3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] border-solid inset-[216.85px_785.66px_243.15px_253px] leading-[0] rounded-[12px]" data-name="Paragraph+Overlay+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[13px] justify-center left-[14px] right-[102.92px] text-[10px] text-[rgba(255,255,255,0.3)] top-[18.5px] tracking-[0.8px] uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Année</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[18px] justify-center left-[14px] right-[99.52px] text-[15px] text-white top-[37px]">
        <p className="leading-[normal]">2022</p>
      </div>
    </div>
  );
}

function ParagraphOverlayBorder4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] border-solid inset-[286.85px_975.66px_173.15px_64px] leading-[0] rounded-[12px]" data-name="Paragraph+Overlay+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[13px] justify-center left-[14px] right-[64.27px] text-[10px] text-[rgba(255,255,255,0.3)] top-[18.5px] tracking-[0.8px] uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Kilométrage</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[18px] justify-center left-[14px] right-[55.37px] text-[15px] text-white top-[37px]">
        <p className="leading-[normal]">76 987 km</p>
      </div>
    </div>
  );
}

function ParagraphOverlayBorder5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] border-solid inset-[286.85px_785.66px_173.15px_253px] leading-[0] rounded-[12px]" data-name="Paragraph+Overlay+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[13px] justify-center left-[14px] right-[107.23px] text-[10px] text-[rgba(255,255,255,0.3)] top-[18.5px] tracking-[0.8px] uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Boîte</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[18px] justify-center left-[14px] right-[29.41px] text-[15px] text-white top-[37px]">
        <p className="leading-[normal]">Automatique</p>
      </div>
    </div>
  );
}

function Svg32() {
  return (
    <div className="-translate-y-1/2 absolute left-[130px] size-[12px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.p14d62980} id="Vector" stroke="var(--stroke-0, #0C0D0C)" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Link14() {
  return (
    <a className="absolute bg-[#bcff3d] border border-[#bcff3d] border-solid bottom-[70px] h-[44px] left-[307px] rounded-[100px] w-[156px] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/60" data-name="Link" href="/showroom/produit">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-[22px] text-[#0c0d0c] text-[13px] top-1/2 w-[132.893px]">
        <p className="leading-[normal]">En savoir plus</p>
      </div>
      <Svg32 />
    </a>
  );
}

function Slide({ vehicle }: { vehicle: ShowroomVehicle }) {
  return (
    <div className="absolute inset-[0_0.34px_0_0]" data-name="SLIDE 1">
      <div className="absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold inset-[48px_798.33px_459px_64px] justify-center leading-[0] text-[11px] text-[rgba(255,255,255,0.2)] tracking-[1.76px] uppercase">
        <p className="leading-[normal]">01</p>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.15)] inset-[54px_760.72px_465px_89.94px]" data-name="Horizontal Divider" />
      <div className="absolute flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold inset-[81px_752.25px_423px_64px] justify-center leading-[0] opacity-80 text-[#bcff3d] text-[12px] tracking-[1.68px] uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">{vehicle.brand}</p>
      </div>
      <div className="absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold inset-[97px_572.03px_353px_64px] justify-center leading-[0] text-[58px] text-white tracking-[-2.32px]">
        <p className="leading-[55.1px]">{vehicle.model}</p>
      </div>
      <div className="absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal inset-[168.1px_640.21px_334.9px_64px] justify-center leading-[0] text-[13px] text-[rgba(255,255,255,0.35)] tracking-[1.04px] uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">{vehicle.subtitle}</p>
      </div>
      <ShowroomSpecBox className="inset-[216.85px_975.66px_243.15px_64px]" label="Carburant" labelClassName="left-[14px] right-[74.13px]" value={vehicle.specs.fuel} valueClassName="left-[14px] right-[73.14px]" />
      <ShowroomSpecBox className="inset-[216.85px_785.66px_243.15px_253px]" label="Année" labelClassName="left-[14px] right-[102.92px]" value={vehicle.specs.year} valueClassName="left-[14px] right-[99.52px]" />
      <ShowroomSpecBox className="inset-[286.85px_975.66px_173.15px_64px]" label="Kilométrage" labelClassName="left-[14px] right-[64.27px]" value={vehicle.specs.mileage} valueClassName="left-[14px] right-[55.37px]" />
      <ShowroomSpecBox className="inset-[286.85px_785.66px_173.15px_253px]" label="Boîte" labelClassName="left-[14px] right-[107.23px]" value={vehicle.specs.gearbox} valueClassName="left-[14px] right-[29.41px]" />
      <div className="absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold inset-[410px_910.66px_73px_64px] justify-center leading-[0] text-[#bcff3d] text-[32px]">
        <p className="leading-[32px]">{vehicle.price}</p>
      </div>
      <Link14 />
      <div className="absolute h-[454px] left-[542px] top-[51px] w-[676px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover object-center pointer-events-none size-full" src={vehicle.image} />
      </div>
    </div>
  );
}

function Container2({ vehicle }: { vehicle: ShowroomVehicle }) {
  return (
    <div className="absolute h-[520px] left-[126px] overflow-clip right-[96px] top-[3158px]" data-name="Container">
      <Slide vehicle={vehicle} />
    </div>
  );
}

function Svg33() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.pf1d5f80} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.4" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6({ onClick }: { onClick: () => void }) {
  return (
    <button aria-label="Véhicule précédent" className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid left-[64px] rounded-[23px] size-[46px] top-[calc(50%+0.5px)] transition-colors hover:border-[#bcff3d]/40 focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/50" data-name="Button" onClick={onClick} type="button">
      <Svg33 />
    </button>
  );
}

function Svg34() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p3f191380} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.4" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7({ onClick }: { onClick: () => void }) {
  return (
    <button aria-label="Véhicule suivant" className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid left-[120px] rounded-[23px] size-[46px] top-[calc(50%+0.5px)] transition-colors hover:border-[#bcff3d]/40 focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/50" data-name="Button" onClick={onClick} type="button">
      <Svg34 />
    </button>
  );
}

function Svg35() {
  return (
    <div className="-translate-y-1/2 absolute left-[167.88px] size-[13px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="SVG">
          <path d={svgPaths.p3be6c058} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.4" strokeWidth="1.35417" />
        </g>
      </svg>
    </div>
  );
}

function Link15() {
  return (
    <a className="-translate-y-1/2 absolute h-[16px] left-[1014px] top-[calc(50%+3.5px)] w-[180.88px] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/50" data-name="Link" href="/showroom">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-0 text-[13px] text-[rgba(255,255,255,0.4)] top-1/2 w-[160.204px]">
        <p className="leading-[normal]">Voir tous nos véhicules</p>
      </div>
      <Svg35 />
    </a>
  );
}

function HorizontalBorder1({ activeIndex, onPrevious, onNext, onSelect }: { activeIndex: number; onPrevious: () => void; onNext: () => void; onSelect: (index: number) => void }) {
  return (
    <div className="absolute h-[103px] left-[136px] right-[66px] top-[3690px]" data-name="HorizontalBorder">
      <Button6 onClick={onPrevious} />
      <Button7 onClick={onNext} />
      {SHOWROOM_VEHICLES.map((vehicle, index) => {
        const isActive = activeIndex === index;
        const leftClassName =
          activeIndex === 0
            ? index === 0
              ? "left-[565px]"
              : index === 1
                ? "left-[595px]"
                : "left-[609px]"
            : activeIndex === 1
              ? index === 0
                ? "left-[565px]"
                : index === 1
                  ? "left-[579px]"
                  : "left-[609px]"
              : index === 0
                ? "left-[565px]"
                : index === 1
                  ? "left-[579px]"
                  : "left-[593px]";
        const sizeClassName = isActive ? "h-[6px] w-[22px]" : "size-[6px]";

        return (
          <button
            aria-label={`Afficher ${vehicle.brand} ${vehicle.model}`}
            aria-pressed={isActive}
            className={`-translate-y-1/2 absolute ${isActive ? "bg-[#bcff3d]" : "bg-[rgba(255,255,255,0.15)]"} ${leftClassName} ${sizeClassName} rounded-[3px] top-[calc(50%+3.5px)] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/50`}
            data-name={isActive ? "Background" : "Overlay"}
            key={vehicle.model}
            onClick={() => onSelect(index)}
            type="button"
          />
        );
      })}
      <Link15 />
    </div>
  );
}


export default function ShowroomSection() {
  const [showroomIndex, setShowroomIndex] = useState(0);
  const activeShowroomVehicle = SHOWROOM_VEHICLES[showroomIndex];
  const showPreviousVehicle = () => {
    setShowroomIndex((currentIndex) => (currentIndex - 1 + SHOWROOM_VEHICLES.length) % SHOWROOM_VEHICLES.length);
  };
  const showNextVehicle = () => {
    setShowroomIndex((currentIndex) => (currentIndex + 1) % SHOWROOM_VEHICLES.length);
  };

  return (
    <>
      <OverlayBorder16 />
      <div className="-translate-y-1/2 absolute flex flex-col font-[\'Syne:ExtraBold\',sans-serif] font-extrabold h-[62px] justify-center leading-[0] left-[383px] right-[382.58px] text-[52px] text-white top-[3099px] tracking-[-1.56px]">
        <p>
          <span className="leading-[54.6px]">{`Notre `}</span>
          <span className="leading-[54.6px] text-[#bcff3d]">showroom</span>
        </p>
      </div>
      <Container2 vehicle={activeShowroomVehicle} />
      <HorizontalBorder1 activeIndex={showroomIndex} onNext={showNextVehicle} onPrevious={showPreviousVehicle} onSelect={setShowroomIndex} />
    </>
  );
}
