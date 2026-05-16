import { useState } from "react";
import { useNavigate } from "react-router";
import svgPaths from "./svg-e2a6upuiz3";
import imgPictureA290 from "./adf5b1cba6c70082754343ed9b3203d797ea65f4.png";
import imgPictureA291 from "./ef0d6bd9f0f2987d8c5717276c603f97d24e79a2.png";
import imgPictureA292 from "./ce0bf48746173b617f78e2731bc667f8216b1979.png";
import imgPictureA293 from "./4dd1021abcf1887a4fa3659e4789e8faa4f1c1b7.png";
import imgPictureA294 from "./ea7d54e3e9050633ef9d2cb2c8a99e899ae14ccf.png";
import imgPictureA295 from "./0b7a653a942239bd2b59be1522158006c71986ad.png";
import imgPictureA296 from "./2f0ebbaa1caece13340fb10b2aa9a5c488bff476.png";
import img8301 from "./4685cd6aaefc7c761762a595fa5d5078fbae0729.png";

const galleryImages = [img8301, imgPictureA291, imgPictureA292, imgPictureA293, imgPictureA294, imgPictureA295, imgPictureA296];
const thumbnailImages = [imgPictureA290, imgPictureA291, imgPictureA292, imgPictureA293, imgPictureA294, imgPictureA295, imgPictureA296];
const sellerNotePreview = "BMW X3 xDrive30i AWD 2019 Blanc alpin | 2.0L TwinPower Turbo | Boîte automatique 8 vitesses. Ce BMW X3, ayant appartenu à un seul propriétaire et repris localement, offre l'équilibre parfait entre luxe, performance et technologie.";
const sellerNoteFull = "BMW X3 xDrive30i AWD 2019 Blanc alpin | 2.0L TwinPower Turbo | Boîte automatique 8 vitesses. Ce BMW X3, ayant appartenu à un seul propriétaire et repris localement, offre l'équilibre parfait entre luxe, performance et technologie. Avec la dynamique de conduite légendaire de BMW et sa transmission intégrale intelligente, ce SUV est conçu pour un usage quotidien confortable comme pour les longs trajets.";

function ThumbnailButton({
  index,
  src,
  selected,
  onSelect,
}: {
  index: number;
  src: string;
  selected: boolean;
  onSelect: (index: number) => void;
}) {
  return (
    <button
      aria-label={`Afficher la photo ${index + 1}`}
      className="absolute h-[67.5px] overflow-hidden rounded-[4px] top-0 w-[120px] cursor-pointer transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/70"
      data-name="Item → Button"
      onClick={() => onSelect(index)}
      style={{ left: `${index * 128}px` }}
      type="button"
    >
      <img alt="" className="absolute inset-0 h-full w-full object-cover" src={src} />
      <div className={`absolute border-4 border-solid inset-0 rounded-[4px] ${selected ? "border-white" : "border-transparent"}`} data-name="Border" />
      <div className={`absolute border-2 border-solid inset-0 rounded-[4px] ${selected ? "border-white/90" : "border-transparent"}`} data-name="Border" />
    </button>
  );
}

function List({ selectedIndex, onSelect }: { selectedIndex: number; onSelect: (index: number) => void }) {
  return (
    <div className="absolute bottom-[0.5px] left-0 overflow-x-auto overflow-y-clip top-0 w-[888px]" data-name="List">
      {thumbnailImages.map((src, index) => (
        <ThumbnailButton index={index} key={src} onSelect={onSelect} selected={selectedIndex === index} src={src} />
      ))}
    </div>
  );
}

function Container({ selectedIndex, onSelect }: { selectedIndex: number; onSelect: (index: number) => void }) {
  return (
    <div className="absolute inset-[1176px_639px_1435px_108px] overflow-clip" data-name="Container">
      <List onSelect={onSelect} selectedIndex={selectedIndex} />
    </div>
  );
}

function SparkStackSlot() {
  return (
    <div className="absolute h-[31.2px] leading-[0] left-[24px] right-[24.3px] text-white top-[24px]" data-name="spark-stack → Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[34px] justify-center left-0 text-[46px] top-[16px] tracking-[-0.48px] w-[234px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[31.2px]">16 990 €</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[23px] justify-center left-[316px] not-italic text-[16.3px] top-[15.5px] w-[91px]">
        <p className="leading-[27px]">85 912 km</p>
      </div>
    </div>
  );
}

function ItemSparkBadge() {
  return (
    <div className="absolute bg-[#e3f4f1] h-[23px] left-0 rounded-[1512px] top-0 w-[107.03px]" data-name="Item → spark-badge">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[15.5px] justify-center leading-[0] left-[calc(50%+8.16px)] text-[#181818] text-[12px] text-center top-[11.25px] w-[75.346px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[15px]">Bonne affaire</p>
      </div>
      <div className="absolute inset-[37.44%_83.18%_32.13%_10.28%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <path d={svgPaths.p1314c380} fill="var(--fill-0, #181818)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ItemSparkBadge1() {
  return (
    <div className="absolute bg-[#f0f2f1] h-[23px] left-[115.03px] rounded-[1512px] top-0 w-[157.42px]" data-name="Item → spark-badge">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-[calc(50%+1.26px)] text-[#181818] text-[12px] text-center top-[11.11px] w-[144px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[15px]">baisse de prix de 1 000 €</p>
      </div>
    </div>
  );
}

function ItemSparkBadge2() {
  return (
    <div className="absolute bg-[#f0f2f1] h-[23px] left-[280.45px] rounded-[1512px] top-0 w-[118.65px]" data-name="Item → spark-badge">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[15.5px] justify-center leading-[0] left-[calc(50%+8.17px)] text-[#181818] text-[12px] text-center top-[11.25px] w-[86.984px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[15px]">Forte demande</p>
      </div>
    </div>
  );
}

function ButtonList() {
  return (
    <div className="absolute h-[23px] left-[24px] top-[90.8px] w-[399.1px]" data-name="Button → List">
      <ItemSparkBadge />
      <ItemSparkBadge1 />
      <ItemSparkBadge2 />
      <div className="absolute inset-[30.43%_25.35%_30.44%_72.9%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.00128 8.99974">
          <path d={svgPaths.p369f8a80} fill="var(--fill-0, #181818)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[145px] left-[1233px] right-[57px] rounded-[10px] shadow-[0px_0px_10px_0px_rgba(68,89,88,0.1)] top-[380px]" data-name="Section">
      <SparkStackSlot />
      <ButtonList />
    </div>
  );
}

function BackgroundShadow() {
  return <div className="absolute bg-[#21a38a] left-[60.45px] rounded-[5px] shadow-[0px_0px_0px_5px_#c6eae3] size-[10px] top-[53px]" data-name="Background+Shadow" />;
}

function Img() {
  return (
    <div className="absolute h-[116px] left-[450.23px] right-[16.01px] top-[31.2px]" data-name="Img">
      <div className="absolute bg-[#b072f9] h-[4px] left-0 right-[111.68px] rounded-[4px] top-[56px]" data-name="Background" />
      <div className="absolute bg-[#21a38a] h-[4px] left-[34.79px] right-[34.78px] rounded-[4px] top-[56px]" data-name="Background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[16px] justify-center leading-[0] left-[44.77px] not-italic text-[9.9px] text-white top-[77.91px] w-[41px]">
        <p className="leading-[18px]">16 990 €</p>
      </div>
      <BackgroundShadow />
      <div className="absolute bg-[#fa7412] h-[4px] left-[111.68px] right-[-0.01px] rounded-[4px] top-[56px]" data-name="Background" />
    </div>
  );
}

function SparkButtonButtonPartBaseSlot() {
  return (
    <div className="absolute h-[40px] left-0 top-[70.2px] w-[402.23px]" data-name="spark-button → Button::part(base) → Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[40px] justify-center leading-[0] left-0 not-italic text-[15.6px] text-white top-[20px] w-[361.39px]">
        <p className="leading-[20px]">Ce véhicule est proposé à un tarif aligné avec les prix constatés sur le marché français.</p>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute h-[147.2px] left-[16px] right-[16.3px] top-[16px]" data-name="Section">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[31.2px] justify-center leading-[0] left-0 text-[26px] text-white top-[15.6px] tracking-[-0.48px] w-[402.587px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="whitespace-pre-wrap">
          <span className="leading-[31.2px]">{`Un prix cohérent  `}</span>
          <span className="leading-[31.2px] text-[#21a38a]">avec le marché</span>
        </p>
      </div>
      <Img />
      <SparkButtonButtonPartBaseSlot />
    </div>
  );
}

function SlotSparkStackSlotSparkStackSlotSparkSvgSvgLit() {
  return (
    <div className="absolute h-[20px] left-0 right-[584.7px] top-[9.59px]" data-name="Slot → spark-stack → Slot → spark-stack → Slot → spark-svg → SVG - lit$198533735">
      <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15">
          <path d={svgPaths.p1075f180} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function SlotSparkStackSlot() {
  return (
    <div className="absolute h-[24px] left-0 right-[328.86px] top-[43.19px]" data-name="Slot → spark-stack → Slot">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[20px] justify-center leading-[0] left-0 not-italic text-[15.6px] text-white top-[31.72px] w-[340px]">
        <p className="leading-[normal]">Ce véhicule a bénéficié d’un ajustement tarifaire pour vous proposer le meilleur prix.</p>
      </div>
    </div>
  );
}

function Lit198533735SvgLit({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`absolute h-[24px] left-[580.7px] right-0 top-[8px] transition-transform ${isOpen ? "" : "rotate-180"}`} data-name="lit$198533735 → SVG - lit$198533735">
      <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[35.75%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7.42">
          <path d={svgPaths.p3abbeb00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ButtonPartButton({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  return (
    <button className="absolute h-[83.2px] left-0 right-0 top-0 cursor-pointer text-left" data-name="Button::part(button)" onClick={onToggle} type="button">
      <SlotSparkStackSlotSparkStackSlotSparkSvgSvgLit />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[34px] justify-center leading-[0] left-[28px] text-[26px] text-white top-[19.5px] tracking-[-0.48px] w-[228.495px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[31.2px]">Évolution du prix</p>
      </div>
      {isOpen ? <SlotSparkStackSlot /> : null}
      <Lit198533735SvgLit isOpen={isOpen} />
    </button>
  );
}

function SectionSparkAccordion({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`absolute border-[rgba(0,0,0,0)] border-b border-solid left-[16px] right-[16.3px] top-[196.2px] transition-[height] ${isOpen ? "h-[84.2px]" : "h-[38px]"}`} data-name="Section → spark-accordion">
      <ButtonPartButton isOpen={isOpen} onToggle={onToggle} />
    </div>
  );
}

function Section1({ isPriceHistoryOpen, onTogglePriceHistory }: { isPriceHistoryOpen: boolean; onTogglePriceHistory: () => void }) {
  return (
    <div className="absolute border border-[#e0e4e3] border-solid h-[327px] left-[1233px] right-[57px] rounded-[10px] top-[592px]" data-name="Section">
      <Section2 />
      <div className="absolute bg-[#e0e4e3] h-px left-[16px] right-[16.3px] top-[179.2px]" data-name="spark-separator" />
      <SectionSparkAccordion isOpen={isPriceHistoryOpen} onToggle={onTogglePriceHistory} />
    </div>
  );
}

function SparkSvgSvgLit() {
  return (
    <div className="absolute h-[18px] left-0 top-[3px] w-[18px]" data-name="spark-svg → SVG - lit$198533735">
      <div className="absolute inset-[10.42%_16.67%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 12.6667">
          <path d={svgPaths.p4fcfb00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-0" data-name="Item">
      <SparkSvgSvgLit />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[24px] not-italic text-[15.9px] text-white top-[12px] w-[213.42px]">
        <p className="leading-[24px]">{`Couleur extérieure Blanc `}</p>
      </div>
    </div>
  );
}

function SparkSvgSvgLit1() {
  return (
    <div className="absolute h-[18px] left-0 top-[3px] w-[18px]" data-name="spark-svg → SVG - lit$198533735">
      <div className="absolute inset-[10.42%_16.67%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 12.6667">
          <path d={svgPaths.p4fcfb00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-[36px]" data-name="Item">
      <SparkSvgSvgLit1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[24px] not-italic text-[16px] text-white top-[12px] w-[93.07px]">
        <p className="leading-[24px]">intérieur noir</p>
      </div>
    </div>
  );
}

function SparkSvgSvgLit2() {
  return (
    <div className="absolute h-[18px] left-0 top-[3px] w-[18px]" data-name="spark-svg → SVG - lit$198533735">
      <div className="absolute inset-[12.5%_14.58%_12.5%_16.67%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 12">
          <path d={svgPaths.p1c49cb80} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-[72px]" data-name="Item">
      <SparkSvgSvgLit2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[24px] not-italic text-[15.6px] text-white top-[12px] w-[189.48px]">
        <p className="leading-[24px]">Type de carburant essence</p>
      </div>
    </div>
  );
}

function SparkSvgSvgLit3() {
  return (
    <div className="absolute h-[18px] left-0 top-[3px] w-[18px]" data-name="spark-svg → SVG - lit$198533735">
      <div className="absolute inset-[16.67%_4.17%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 10.6667">
          <path d={svgPaths.p67fb5f1} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="absolute h-[96px] left-0 right-0 top-[108px]" data-name="Item">
      <SparkSvgSvgLit3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[92px] justify-center leading-[0] left-[24px] not-italic text-[15.8px] text-white top-[48px] w-[276.68px]">
        <p className="leading-[24px] mb-0">Moteur essence 4 cylindres en ligne de</p>
        <p className="leading-[24px] mb-0">2 litres à injection directe, double arbre</p>
        <p className="leading-[24px] mb-0">à cames en tête (DACT), distribution</p>
        <p className="leading-[24px]">variable</p>
      </div>
    </div>
  );
}

function SparkListSlotList() {
  return (
    <div className="absolute h-[204px] left-0 right-[335.36px] top-0" data-name="spark-list → Slot → List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

function SparkSvgSvgLit4() {
  return (
    <div className="absolute h-[18px] left-0 top-[3px] w-[18px]" data-name="spark-svg → SVG - lit$198533735">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <path d={svgPaths.p3a933b00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-0" data-name="Item">
      <SparkSvgSvgLit4 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[24px] not-italic text-[15.1px] text-white top-[12px] w-[74.75px]">
        <p className="leading-[24px]">22-29 mpg</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[16.67%_2.08%_16.37%_4.17%]" data-name="Group">
      <div className="absolute inset-[16.67%_2.08%_16.37%_4.17%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10.7143">
          <path d={svgPaths.p3fe0e2c0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function PowerTrain() {
  return (
    <div className="absolute contents inset-[16.67%_2.08%_16.37%_4.17%]" data-name="power-train">
      <Group />
    </div>
  );
}

function SparkSvgSvgLit5() {
  return (
    <div className="absolute h-[18px] left-0 top-[3px] w-[18px]" data-name="spark-svg → SVG - lit$198533735">
      <PowerTrain />
    </div>
  );
}

function Item5() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-[36px]" data-name="Item">
      <SparkSvgSvgLit5 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[24px] not-italic text-[15.5px] text-white top-[12px] w-[154.36px]">
        <p className="leading-[24px]">Transmission intégrale</p>
      </div>
    </div>
  );
}

function SparkSvgSvgLit6() {
  return (
    <div className="absolute h-[18px] left-0 top-[3px] w-[18px]" data-name="spark-svg → SVG - lit$198533735">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 13.3333">
          <path d={svgPaths.p2d1c6bd0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-[72px]" data-name="Item">
      <SparkSvgSvgLit6 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[24px] not-italic text-[15.5px] text-white top-[12px] w-[182.18px]">
        <p className="leading-[24px]">Transmission automatique</p>
      </div>
    </div>
  );
}

function SparkSvgSvgLit7() {
  return (
    <div className="absolute h-[18px] left-0 top-[3px] w-[18px]" data-name="spark-svg → SVG - lit$198533735">
      <div className="absolute inset-[23.29%_12.5%_20.83%_14.58%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 8.94">
          <path d={svgPaths.p54fdc00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function SparkSvgImgPartBaseOuvreDansUneNouvelleFenetreSvgLit() {
  return <div className="absolute h-[16px] left-[61.28px] right-[181.7px] top-[26px]" data-name="spark-svg → Img::part(base) - , ouvre dans une nouvelle fenêtre → SVG - lit$198533735" />;
}

function SparkLinkSlotLink() {
  return (
    <div className="absolute h-[44px] left-[24px] top-[2px] w-[258.98px]" data-name="spark-link → Slot → Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[44px] justify-center leading-[0] left-0 not-italic text-[15.1px] text-white top-[22px] w-[259.18px]">
        <p className="leading-[24px] mb-0">{`Aucun accident ni dommage n'a été`}</p>
        <p className="leading-[24px]">{`signalé. `}</p>
      </div>
      <SparkSvgImgPartBaseOuvreDansUneNouvelleFenetreSvgLit />
    </div>
  );
}

function Item7() {
  return (
    <div className="absolute h-[48px] left-0 right-0 top-[108px]" data-name="Item">
      <SparkSvgSvgLit7 />
      <SparkLinkSlotLink />
    </div>
  );
}

function SparkListSlotList1() {
  return (
    <div className="absolute h-[156px] left-[335.34px] right-[0.02px] top-0" data-name="spark-list → Slot → List">
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
    </div>
  );
}

function SparkStackSlot1() {
  return (
    <div className="absolute h-[204px] left-0 right-0 top-[83.2px]" data-name="spark-stack → Slot">
      <SparkListSlotList />
      <SparkListSlotList1 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute h-[357.2px] left-[1233px] right-[57.3px] top-[983.28px]" data-name="Section">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[34px] justify-center leading-[0] left-0 text-[26px] text-white top-[15.72px] tracking-[-0.48px] w-[529px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[31.2px]">Caractéristiques principales du véhicule</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[15.5px] justify-center leading-[0] left-0 not-italic text-[11.4px] text-white top-[49.95px] w-[485.59px]">
        <p className="leading-[18px]">{`Numéro d'identification du véhicule (VIN) : 5UXTR9C52KLP97298 / Numéro de stock : LX14141`}</p>
      </div>
      <SparkStackSlot1 />
    </div>
  );
}

function SlotSparkSvgSvgLit() {
  return (
    <div className="absolute h-[14px] left-[209.4px] right-[15.99px] top-[10.5px]" data-name="Slot → spark-svg → SVG - lit$198533735">
      <div className="absolute inset-[17%_17.33%_17%_16.67%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.24 9.24">
          <path d={svgPaths.p29757800} fill="var(--fill-0, #181818)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function SparkButtonLinkPartBase() {
  return (
    <div className="absolute bg-white border border-solid border-white h-[37px] left-[373.3px] right-[24.01px] rounded-[1512px] top-[69.5px]" data-name="spark-button → Link::part(base)">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[17.5px] justify-center leading-[0] left-[calc(50%-10.9px)] not-italic text-[#181818] text-[13.3px] text-center top-[17.5px] w-[185.59px]">
        <p className="leading-[17.5px]">Contacter un conseiller</p>
      </div>
      <SlotSparkSvgSvgLit />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#c8ec66] h-[176px] left-0 right-0 rounded-[10px] top-[55.19px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[119px] justify-center leading-[0] left-[176px] not-italic text-[#181818] text-[15.3px] text-center top-[82.83px] w-[304px]">
        <p>
          <span className="leading-[24px]">{`Contactez-nous dès maintenant pour `}</span>
          <span className="font-['Helvetica_Neue:Bold',sans-serif] leading-[24px] not-italic">vérifier</span>
          <span className="leading-[24px]">{` la disponibilité, `}</span>
          <span className="font-['Helvetica_Neue:Bold',sans-serif] leading-[24px] not-italic">réserver</span>
          <span className="leading-[24px]">{` le véhicule ou obtenir un `}</span>
          <span className="font-['Helvetica_Neue:Bold',sans-serif] leading-[24px] not-italic">accompagnement personnalisé.</span>
        </p>
      </div>
      <a className="absolute inset-0" href="mailto:contact@vroomparis.fr?subject=BMW%20X3%20xDrive30i%20d%27occasion" aria-label="Contacter un conseiller" />
      <SparkButtonLinkPartBase />
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute h-[297.2px] left-[1233px] right-[57.3px] top-[1327px]" data-name="Section">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[34px] justify-center leading-[0] left-0 text-[26px] text-white top-[15.52px] tracking-[-0.48px] w-[514px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[31.2px]">Contacter un conseiller pour ce véhicule</p>
      </div>
      <Background />
    </div>
  );
}

function Section5({ sellerNotesExpanded, onToggleSellerNotes }: { sellerNotesExpanded: boolean; onToggleSellerNotes: () => void }) {
  return (
    <div className="absolute left-[1233px] right-[57.3px] top-[1597px]" data-name="Section">
      <div className="flex flex-col gap-6 text-white">
        <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold leading-[0] text-[26px] tracking-[-0.48px] w-[214.703px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[31.2px]">Notes du vendeur</p>
        </div>
        <p className="max-w-[624px] font-['Helvetica_Neue:Regular',sans-serif] text-[15.8px] leading-[24px]">
          {sellerNotesExpanded ? sellerNoteFull : sellerNotePreview}
        </p>
        <button
          className="inline-flex w-fit items-center gap-3 font-['Helvetica_Neue:Bold',sans-serif] text-[15.1px] leading-[24px] text-white cursor-pointer"
          data-name="Button::part(base)"
          onClick={onToggleSellerNotes}
          type="button"
        >
          <span>{sellerNotesExpanded ? "Réduire les notes du vendeur" : "Afficher plus de notes du vendeur"}</span>
          <span className={`inline-flex transition-transform ${sellerNotesExpanded ? "rotate-180" : ""}`}>
            <svg className="block h-3 w-3" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.94667">
              <path d={svgPaths.p3eb4b800} fill="var(--fill-0, white)" />
            </svg>
          </span>
        </button>
        <a
          className="inline-flex w-fit items-center gap-3 font-['Helvetica_Neue:Bold',sans-serif] text-[15.4px] leading-[24px] text-white"
          data-name="spark-link → Slot → Link"
          href="https://www.vroomparis.fr"
          rel="noreferrer"
          target="_blank"
        >
          <span>Voir le véhicule sur le site web du concessionnaire</span>
          <svg className="block h-4 w-4 flex-none" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
            <path d={svgPaths.p1773e480} fill="var(--fill-0, white)" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[0_0_23.81%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119.983 27.0746">
        <g id="Group">
          <path d={svgPaths.p178f5b00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2d14eb00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute contents inset-[0_0_23.81%_0]" data-name="Layer 1">
      <Group1 />
    </div>
  );
}

function AutocheckSvg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[35.54px] left-1/2 overflow-clip top-1/2 w-[119.98px]" data-name="autocheck.svg">
      <Layer />
    </div>
  );
}

function AutocheckSvgFill() {
  return (
    <div className="absolute h-[35.54px] left-0 overflow-clip top-0 w-[120px]" data-name="autocheck.svg fill">
      <AutocheckSvg />
    </div>
  );
}

function AutoCheckParExperian() {
  return (
    <div className="absolute aspect-[120/35.540000915527344] left-0 overflow-clip right-[518.7px] top-[47.19px]" data-name="AutoCheck par Experian">
      <AutocheckSvgFill />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[18.94%_78.87%_77.5%_19.41%]" data-name="Group">
      <div className="absolute inset-[18.94%_79.76%_78.25%_19.41%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2556 8.92723">
          <path d={svgPaths.p16e9ef00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[19.76%_78.87%_77.5%_20.3%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.2897 8.7149">
          <path d={svgPaths.p4632100} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function SparkSvgSvgLit8() {
  return (
    <div className="absolute h-[20px] left-0 top-[2px] w-[20px]" data-name="spark-svg → SVG - lit$198533735">
      <div className="absolute inset-[23.29%_12.5%_20.83%_14.58%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0417 12.2925">
          <path d={svgPaths.p1ee0d00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="absolute h-[24.2px] left-0 right-[298.85px] top-0" data-name="Item">
      <SparkSvgSvgLit8 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[30px] not-italic text-[16px] text-white top-[12px] w-[177.77px]">
        <p className="leading-[24px]">Titre de propriété propre</p>
      </div>
    </div>
  );
}

function SparkSvgSvgLit9() {
  return (
    <div className="absolute h-[20px] left-0 top-[2px] w-[20px]" data-name="spark-svg → SVG - lit$198533735">
      <div className="absolute inset-[23.29%_12.5%_20.83%_14.58%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0417 12.2925">
          <path d={svgPaths.p1ee0d00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="absolute h-[24.2px] left-0 right-[298.85px] top-[36.2px]" data-name="Item">
      <SparkSvgSvgLit9 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[30px] not-italic text-[15.4px] text-white top-[12px] w-[305.83px]">
        <p className="leading-[24px]">{`Aucun accident ni dommage n'a été signalé.`}</p>
      </div>
    </div>
  );
}

function SparkSvgSvgLit10() {
  return (
    <div className="absolute h-[20px] left-0 top-[2px] w-[20px]" data-name="spark-svg → SVG - lit$198533735">
      <div className="absolute inset-[23.29%_12.5%_20.83%_14.58%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0417 12.2925">
          <path d={svgPaths.p1ee0d00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="absolute h-[24.2px] left-0 right-[298.85px] top-[72.39px]" data-name="Item">
      <SparkSvgSvgLit10 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[30px] not-italic text-[15.8px] text-white top-[12px] w-[93.9px]">
        <p className="leading-[24px]">1 propriétaire</p>
      </div>
    </div>
  );
}

function SparkSvgSvgLit11() {
  return (
    <div className="absolute h-[20px] left-0 top-[2px] w-[20px]" data-name="spark-svg → SVG - lit$198533735">
      <div className="absolute inset-[23.29%_12.5%_20.83%_14.58%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0417 12.2925">
          <path d={svgPaths.p1ee0d00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="absolute h-[24.2px] left-[339.85px] right-[0.01px] top-0" data-name="Item">
      <SparkSvgSvgLit11 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[30px] not-italic text-[15.6px] text-white top-[12px] w-[204.86px]">
        <p className="leading-[24px]">Usage personnel uniquement</p>
      </div>
    </div>
  );
}

function SparkSvgSvgLit12() {
  return (
    <div className="absolute h-[20px] left-0 top-[2px] w-[20px]" data-name="spark-svg → SVG - lit$198533735">
      <div className="absolute inset-[23.29%_12.5%_20.83%_14.58%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0417 12.2925">
          <path d={svgPaths.p1ee0d00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="absolute h-[24.2px] left-[339.85px] right-[0.01px] top-[36.2px]" data-name="Item">
      <SparkSvgSvgLit12 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[30px] not-italic text-[15.4px] text-white top-[12px] w-[264.83px]">
        <p className="leading-[24px]">{`Aucun rappel en cours n'a été signalé.`}</p>
      </div>
    </div>
  );
}

function SparkListSlotList2() {
  return (
    <div className="absolute h-[96.59px] left-0 right-0 top-[98.73px]" data-name="spark-list → Slot → List">
      <Item8 />
      <Item9 />
      <Item10 />
      <Item11 />
      <Item12 />
    </div>
  );
}

function Section6() {
  return (
    <div className="absolute h-[317.52px] left-[1233px] right-[57.3px] top-[1880.2px]" data-name="Section">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[34px] justify-center leading-[0] left-0 text-[26px] text-white top-[2.13px] tracking-[-0.48px] w-[431px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[31.2px]">{`Rapport d'historique du véhicule`}</p>
      </div>
      <AutoCheckParExperian />
      <Group2 />
      <div className="absolute h-[21px] left-[141px] top-[51.13px] w-[30px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 21">
          <g id="Vector">
            <path d={svgPaths.p755da00} fill="#181818" />
            <path d={svgPaths.p3b768d00} fill="#181818" />
            <path d={svgPaths.p3ac9b280} fill="#181818" />
            <path d={svgPaths.p19a60800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1a9c8f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1a8a7472} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3acc7b00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33447080} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3d200200} fill="var(--fill-0, white)" />
            <path d={svgPaths.p30a5b680} fill="var(--fill-0, white)" />
            <path d={svgPaths.p20679400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p33694800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1bc0f800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1753ba80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p15605a80} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
      <SparkListSlotList2 />
    </div>
  );
}

function Svg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p3f7ac500} fill="var(--fill-0, #626366)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonPreviousSlide() {
  return (
    <div className="absolute bg-white left-[125px] size-[34px] top-[753px]" data-name="Button - Previous slide">
      <Svg />
    </div>
  );
}

function Svg1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-[calc(50%+0.5px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p3473e500} fill="var(--fill-0, #626366)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonNextSlide() {
  return (
    <div className="absolute bg-white h-[35px] right-[815px] top-[755px] w-[34px]" data-name="Button - Next slide">
      <Svg1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[calc(18.75%-0.63px)] left-1/2 top-[calc(18.75%-0.63px)] w-[20px]" data-name="SVG">
      <div className="absolute inset-[23.83%_14%_25.25%_14%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 8.91114">
          <path d={svgPaths.p20624700} fill="var(--fill-0, #626366)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[13.5%_3.75%_14.83%_3.75%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5 12.5417">
          <path clipRule="evenodd" d={svgPaths.p19778772} fill="var(--fill-0, #626366)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white border border-[#f2f5fc] border-solid left-[1074px] rounded-[2px] size-[28px] top-[1079px]" data-name="Button">
      <Svg2 />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#626366] bottom-[1608px] h-[22px] left-[134px] rounded-[16px] w-[33px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Light',sans-serif] h-[15px] justify-center leading-[0] left-[calc(50%+0.59px)] not-italic text-[9.6px] text-center text-white top-[calc(50%-0.5px)] uppercase w-[19.22px]">
        <p className="leading-[12px]">7 / 7</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[0.88%_44.69%_96.92%_49.97%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 59.6789">
        <g id="Group 72">
          <g id="Vector">
            <mask fill="white" id="path-1-inside-1_6_3014">
              <path d={svgPaths.p32c9100} />
            </mask>
            <path d={svgPaths.p32c9100} fill="var(--fill-0, white)" mask="url(#path-1-inside-1_6_3014)" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </g>
          <path d={svgPaths.p213c4b00} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, white)" />
          <path d={svgPaths.p4662c70} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

function Svg3() {
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
      <Svg3 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+12.18px)] not-italic text-[16px] text-black text-center top-[calc(50%-0.25px)] w-[107.125px]">
        <p className="leading-[24px]">06 70 76 07 19</p>
      </div>
    </a>
  );
}

function Svg4() {
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
      <Svg4 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+12.16px)] not-italic text-[16px] text-center text-white top-[calc(50%-0.25px)] w-[161.595px]">
        <p className="leading-[24px]">contact@vroomparis.fr</p>
      </div>
    </a>
  );
}

function Svg5() {
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

function Svg6() {
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
      <Svg6 />
    </div>
  );
}

function Svg7() {
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
      <Svg7 />
    </div>
  );
}

function Svg8() {
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
      <Svg8 />
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

function Container2() {
  return (
    <div className="absolute h-[317px] left-1/2 top-[48px] w-[1504px] -translate-x-1/2" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%-341.1px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[175.161px]">
        <p className="leading-[28px]">Qu’attendez-vous ?</p>
      </div>
      <Link />
      <Link1 />
      <Svg5 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[42.5px] justify-center leading-[0] left-[calc(50%-330.16px)] not-italic text-[16px] text-center text-white top-[175.75px] w-[284.77px]">
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
      <HorizontalBorder />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#181818] h-[413px] left-0 right-0 top-[2306px]" data-name="Footer">
      <Container2 />
    </div>
  );
}

export default function PageProduitPremium() {
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isPriceHistoryOpen, setIsPriceHistoryOpen] = useState(true);
  const [sellerNotesExpanded, setSellerNotesExpanded] = useState(false);

  const selectedImage = galleryImages[selectedImageIndex];
  const goToPreviousImage = () => setSelectedImageIndex((current) => (current === 0 ? galleryImages.length - 1 : current - 1));
  const goToNextImage = () => setSelectedImageIndex((current) => (current === galleryImages.length - 1 ? 0 : current + 1));
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate("/showroom");
  };

  return (
    <div className="bg-[#181818] relative size-full" data-name="page produit premium">
      <div className="absolute h-[742.871px] left-[-793px] top-[-242px] w-[2664.781px]" data-name="Union">
        <div className="absolute inset-[-26.92%_-7.51%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3064.78 1142.87">
            <g filter="url(#filter0_f_6_3338)" id="Union">
              <path d={svgPaths.p57e6680} fill="url(#paint0_linear_6_3338)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1142.87" id="filter0_f_6_3338" width="3064.78" x="2.20415e-06" y="3.20925e-06">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_6_3338" stdDeviation="100" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_3338" x1="35.5207" x2="1147.95" y1="742.236" y2="-1039.64">
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
      <button className="absolute h-[78px] left-[110px] top-[225px] w-[220px] cursor-pointer text-left" onClick={handleBack} type="button">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[78px] justify-center leading-[0] left-[48px] not-italic text-[33.9px] text-white top-[39px] w-[150px]">
          <p className="leading-[62.88px]">Retour</p>
        </div>
        <div className="-translate-y-1/2 absolute flex items-center justify-center left-[15px] size-[21.31px] top-[39px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="-rotate-130 flex-none">
            <div className="border-r-2 border-solid border-t-2 border-white size-[15.126px]" data-name="Border" />
          </div>
        </div>
      </button>
      <Container onSelect={setSelectedImageIndex} selectedIndex={selectedImageIndex} />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[46.5px] justify-center leading-[0] left-[1233px] text-[40px] text-white top-[326.25px] tracking-[-0.48px] w-[587.768px]">
        <p className="leading-[43.2px]">{`BMW X3 xDrive30i d'occasion`}</p>
      </div>
      <Section />
      <Section1 isPriceHistoryOpen={isPriceHistoryOpen} onTogglePriceHistory={() => setIsPriceHistoryOpen((current) => !current)} />
      <Section3 />
      <Section4 />
      <Section5 onToggleSellerNotes={() => setSellerNotesExpanded((current) => !current)} sellerNotesExpanded={sellerNotesExpanded} />
      <Section6 />
      <div className="absolute h-[768px] left-[106px] top-[371px] w-[1024px]" data-name="8301">
        <img alt="BMW X3 xDrive30i" className="absolute inset-0 max-w-none object-cover size-full" src={selectedImage} />
      </div>
      <button className="absolute bg-white left-[125px] size-[34px] top-[753px] cursor-pointer" data-name="Button - Previous slide" onClick={goToPreviousImage} type="button">
        <Svg />
      </button>
      <button className="absolute bg-white h-[35px] right-[815px] top-[755px] w-[34px] cursor-pointer" data-name="Button - Next slide" onClick={goToNextImage} type="button">
        <Svg1 />
      </button>
      <button className="absolute bg-white border border-[#f2f5fc] border-solid left-[1074px] rounded-[2px] size-[28px] top-[1079px] cursor-pointer" data-name="Button" onClick={() => window.open(selectedImage, "_blank", "noopener,noreferrer")} type="button">
        <Svg2 />
      </button>
      <Group3 />
      <div className="absolute bg-[#626366] bottom-[1608px] h-[22px] left-[134px] rounded-[16px] w-[33px]" data-name="Background">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Light',sans-serif] h-[15px] justify-center leading-[0] left-[calc(50%+0.59px)] not-italic text-[9.6px] text-center text-white top-[calc(50%-0.5px)] uppercase w-[22px]">
          <p className="leading-[12px]">{selectedImageIndex + 1} / 7</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
