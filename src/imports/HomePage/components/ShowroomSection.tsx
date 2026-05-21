import React, { useState, useEffect } from "react";
import svgPaths from "../svg-gblhduksgt";
import { vehicles as vehiclesApi } from "../../../lib/api";
import type { Vehicle } from "../../../lib/api";

function formatPrice(p: number) {
  return p.toLocaleString("fr-FR") + " €";
}

function formatMileage(m: number) {
  return m.toLocaleString("fr-FR") + " km";
}

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

function Slide({ vehicle }: { vehicle: Vehicle }) {
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
      <ShowroomSpecBox className="inset-[216.85px_785.66px_243.15px_253px]" label="Année" labelClassName="left-[14px] right-[102.92px]" value={String(vehicle.specs.year)} valueClassName="left-[14px] right-[99.52px]" />
      <ShowroomSpecBox className="inset-[286.85px_975.66px_173.15px_64px]" label="Kilométrage" labelClassName="left-[14px] right-[64.27px]" value={formatMileage(vehicle.specs.mileage)} valueClassName="left-[14px] right-[55.37px]" />
      <ShowroomSpecBox className="inset-[286.85px_785.66px_173.15px_253px]" label="Boîte" labelClassName="left-[14px] right-[107.23px]" value={vehicle.specs.gearbox} valueClassName="left-[14px] right-[29.41px]" />
      <div className="absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold inset-[410px_910.66px_73px_64px] justify-center leading-[0] text-[#bcff3d] text-[32px]">
        <p className="leading-[32px]">{formatPrice(vehicle.price)}</p>
      </div>
      <a className="absolute bg-[#bcff3d] border border-[#bcff3d] border-solid bottom-[70px] h-[44px] left-[307px] rounded-[100px] w-[156px] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/60" href={`/showroom/${vehicle.id}`}>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-[22px] text-[#0c0d0c] text-[13px] top-1/2 w-[132.893px]">
          <p className="leading-[normal]">En savoir plus</p>
        </div>
        <Svg32 />
      </a>
      {vehicle.image && (
        <div className="absolute h-[454px] left-[542px] top-[51px] w-[676px]">
          <img alt={`${vehicle.brand} ${vehicle.model}`} className="absolute inset-0 max-w-none object-cover object-center pointer-events-none size-full" src={vehicle.image} />
        </div>
      )}
    </div>
  );
}

function Container2({ vehicle }: { vehicle: Vehicle }) {
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

function HorizontalBorder1({ vehicles, activeIndex, onPrevious, onNext, onSelect }: { vehicles: Vehicle[]; activeIndex: number; onPrevious: () => void; onNext: () => void; onSelect: (index: number) => void }) {
  return (
    <div className="absolute h-[103px] left-[136px] right-[66px] top-[3690px]" data-name="HorizontalBorder">
      <Button6 onClick={onPrevious} />
      <Button7 onClick={onNext} />
      <div className="-translate-y-1/2 absolute flex gap-2 left-[565px] top-[calc(50%+3.5px)]">
        {vehicles.map((vehicle, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              aria-label={`Afficher ${vehicle.brand} ${vehicle.model}`}
              aria-pressed={isActive}
              className={`${isActive ? "h-[6px] w-[22px] bg-[#bcff3d]" : "size-[6px] bg-[rgba(255,255,255,0.15)]"} rounded-[3px] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/50`}
              key={vehicle.id}
              onClick={() => onSelect(index)}
              type="button"
            />
          );
        })}
      </div>
      <a className="-translate-y-1/2 absolute h-[16px] left-[1014px] top-[calc(50%+3.5px)] w-[180.88px] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/50" href="/showroom">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] left-0 text-[13px] text-[rgba(255,255,255,0.4)] top-1/2 w-[160.204px]">
          <p className="leading-[normal]">Voir tous nos véhicules</p>
        </div>
        <Svg35 />
      </a>
    </div>
  );
}

function MobileShowroomArrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg className="size-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <path
        d={direction === "left" ? svgPaths.pf1d5f80 : svgPaths.p3f191380}
        stroke="var(--stroke-0, white)"
        strokeOpacity="0.4"
        strokeWidth="1.33333"
      />
    </svg>
  );
}

function MobileCtaArrow() {
  return (
    <svg className="size-3" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
      <path d={svgPaths.p14d62980} stroke="var(--stroke-0, #0C0D0C)" strokeWidth="1.25" />
    </svg>
  );
}

function MobileShowroom({ vehicles }: { vehicles: Vehicle[] }) {
  const [showroomIndex, setShowroomIndex] = useState(0);
  const vehicle = vehicles[showroomIndex];

  const showPreviousVehicle = () => {
    setShowroomIndex((i) => (i - 1 + vehicles.length) % vehicles.length);
  };
  const showNextVehicle = () => {
    setShowroomIndex((i) => (i + 1) % vehicles.length);
  };

  if (!vehicle) return null;

  return (
    <div className="absolute left-0 top-[3215px] w-screen px-5 sm:px-8 lg:hidden">
      <div className="mx-auto max-w-[640px]">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-[100px] border border-[rgba(188,255,61,0.2)] bg-[rgba(188,255,61,0.08)] px-4 py-2">
          <div className="size-[5px] rounded-[2.5px] bg-[#bcff3d]" />
          <p className="font-['DM_Sans:Medium',sans-serif] text-[11px] font-medium uppercase tracking-[1.76px] text-[#bcff3d]">
            Véhicules disponibles
          </p>
        </div>

        <p className="mt-5 text-center font-['Syne:ExtraBold',sans-serif] text-[38px] font-extrabold leading-[42px] tracking-[-1.2px] text-white sm:text-[46px] sm:leading-[50px]">
          Notre <span className="text-[#bcff3d]">showroom</span>
        </p>

        <div className="mt-6 overflow-hidden rounded-[24px] border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.03)]">
          {vehicle.image && (
            <div className="aspect-[1.22] w-full">
              <img alt={`${vehicle.brand} ${vehicle.model}`} className="size-full object-cover object-center" src={vehicle.image} />
            </div>
          )}

          <div className="p-5">
            <div className="flex items-center gap-3">
              <p className="font-['Syne:Bold',sans-serif] text-[11px] font-bold uppercase tracking-[1.76px] text-[rgba(255,255,255,0.2)]">
                {String(showroomIndex + 1).padStart(2, "0")}
              </p>
              <div className="h-px flex-1 bg-[rgba(255,255,255,0.15)]" />
            </div>

            <p className="mt-4 font-['DM_Sans:SemiBold',sans-serif] text-[12px] font-semibold uppercase tracking-[1.68px] text-[#bcff3d]">
              {vehicle.brand}
            </p>
            <p className="mt-2 font-['Syne:ExtraBold',sans-serif] text-[36px] font-extrabold leading-[36px] tracking-[-1.4px] text-white">
              {vehicle.model}
            </p>
            <p className="mt-3 font-['DM_Sans:Regular',sans-serif] text-[12px] uppercase tracking-[1.04px] text-[rgba(255,255,255,0.35)]">
              {vehicle.subtitle}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                ["Carburant", vehicle.specs.fuel],
                ["Année", String(vehicle.specs.year)],
                ["Kilométrage", formatMileage(vehicle.specs.mileage)],
                ["Boîte", vehicle.specs.gearbox],
              ].map(([label, value]) => (
                <div className="rounded-[12px] border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.03)] px-3 py-3" key={label}>
                  <p className="font-['DM_Sans:Regular',sans-serif] text-[10px] uppercase tracking-[0.8px] text-[rgba(255,255,255,0.3)]">{label}</p>
                  <p className="mt-2 font-['Syne:Bold',sans-serif] text-[15px] font-bold text-white">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="font-['Syne:ExtraBold',sans-serif] text-[30px] font-extrabold leading-[30px] text-[#bcff3d]">
                {formatPrice(vehicle.price)}
              </p>
              <a
                className="flex h-[44px] items-center gap-2 rounded-[100px] border border-[#bcff3d] bg-[#bcff3d] px-5 text-[#0c0d0c] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/60"
                href={`/showroom/${vehicle.id}`}
              >
                <span className="font-['Syne:Bold',sans-serif] text-[13px] font-bold">En savoir plus</span>
                <MobileCtaArrow />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            <button aria-label="Véhicule précédent" className="flex size-[46px] items-center justify-center rounded-[23px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/50" onClick={showPreviousVehicle} type="button">
              <MobileShowroomArrow direction="left" />
            </button>
            <button aria-label="Véhicule suivant" className="flex size-[46px] items-center justify-center rounded-[23px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/50" onClick={showNextVehicle} type="button">
              <MobileShowroomArrow direction="right" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {vehicles.map((item, index) => {
              const isActive = showroomIndex === index;
              return (
                <button
                  aria-label={`Afficher ${item.brand} ${item.model}`}
                  aria-pressed={isActive}
                  className={`${isActive ? "h-[6px] w-[22px] bg-[#bcff3d]" : "size-[6px] bg-[rgba(255,255,255,0.15)]"} rounded-[3px] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/50`}
                  key={item.id}
                  onClick={() => setShowroomIndex(index)}
                  type="button"
                />
              );
            })}
          </div>
        </div>

        <a className="mt-5 inline-flex items-center gap-2 font-['Syne:Bold',sans-serif] text-[13px] font-bold text-[rgba(255,255,255,0.4)] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/50" href="/showroom">
          <span>Voir tous nos véhicules</span>
          <svg className="size-[13px]" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p3be6c058} stroke="var(--stroke-0, white)" strokeOpacity="0.4" strokeWidth="1.35417" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function ShowroomSection() {
  const [showroomVehicles, setShowroomVehicles] = useState<Vehicle[]>([]);
  const [showroomIndex, setShowroomIndex] = useState(0);

  useEffect(() => {
    vehiclesApi.list({ status: "En ligne", limit: 6 }).then((res) => {
      setShowroomVehicles(res.data);
    }).catch(() => {});
  }, []);

  const activeVehicle = showroomVehicles[showroomIndex];

  const showPreviousVehicle = () => {
    setShowroomIndex((i) => (i - 1 + showroomVehicles.length) % showroomVehicles.length);
  };
  const showNextVehicle = () => {
    setShowroomIndex((i) => (i + 1) % showroomVehicles.length);
  };

  if (showroomVehicles.length === 0) return null;

  return (
    <>
      <MobileShowroom vehicles={showroomVehicles} />

      <div className="hidden lg:block">
        <div className="-translate-x-1/2 absolute bg-[rgba(188,255,61,0.08)] border border-[rgba(188,255,61,0.2)] border-solid h-[28px] left-[calc(50%+10px)] rounded-[100px] top-[3035px] w-[208px]">
          <div className="-translate-y-1/2 absolute bg-[#bcff3d] left-[18px] rounded-[2.5px] size-[5px] top-1/2" />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-[calc(50%+8.5px)] text-[#bcff3d] text-[11px] text-center top-1/2 tracking-[1.76px] uppercase w-[177px]">
            <p className="leading-[normal]">Véhicules disponibles</p>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[62px] justify-center leading-[0] left-[383px] right-[382.58px] text-[52px] text-white top-[3099px] tracking-[-1.56px]">
          <p>
            <span className="leading-[54.6px]">{`Notre `}</span>
            <span className="leading-[54.6px] text-[#bcff3d]">showroom</span>
          </p>
        </div>
        {activeVehicle && <Container2 vehicle={activeVehicle} />}
        <HorizontalBorder1
          vehicles={showroomVehicles}
          activeIndex={showroomIndex}
          onNext={showNextVehicle}
          onPrevious={showPreviousVehicle}
          onSelect={setShowroomIndex}
        />
      </div>
    </>
  );
}
