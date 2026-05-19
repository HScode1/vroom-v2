import svgPaths from "../svg-gblhduksgt";
import imgCommanderUnVehicule from "../28b5e3bd0392406194bedf4941ae0ec6300e0d9b.png";
import imgAcheterUnVehicule from "../e0de623de74cc21ab7c67e1329b4727a39894ea2.png";

function Badge() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(188,255,61,0.08)] border border-[rgba(188,255,61,0.2)] border-solid h-[28px] left-[calc(50%+7.93px)] rounded-[100px] top-[928px] w-[248px]" data-name="Overlay+Border">
      <div className="-translate-y-1/2 absolute bg-[#bcff3d] left-[18px] rounded-[2.5px] size-[5px] top-1/2" data-name="Background" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-[calc(50%+6.66px)] text-[#bcff3d] text-[11px] text-center top-1/2 tracking-[1.76px] uppercase w-[196px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Ce que nous faisons</p>
      </div>
    </div>
  );
}

function ServiceList() {
  return (
    <div className="absolute contents font-['Syne:Bold',sans-serif] font-bold leading-[1.5] left-[120px] top-[1173px]">
      <p className="absolute left-[120px] text-[48px] text-white top-[1173px] w-[760px]">ACHETER UN VÉHICULE</p>
      <p className="absolute left-[120px] opacity-20 text-[#c8ec66] text-[41px] top-[1280px] w-[793px]">COMMANDER UN VÉHICULE</p>
      <p className="absolute left-[120px] opacity-20 text-[#c8ec66] text-[41px] top-[1380px] w-[793px]">VENDRE UN VÉHICULE</p>
    </div>
  );
}

function CarKeyImage() {
  return (
    <div className="absolute inset-[21.42%_35.14%_68.98%_-7.99%]" data-name="COMMANDER UN VÉHICULE">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[13.24%] max-w-none top-0 w-[73.53%]" src={imgCommanderUnVehicule} />
      </div>
    </div>
  );
}

function AcheterImage() {
  return (
    <div className="absolute inset-[14.79%_14.61%_79.72%_43.89%]" data-name="ACHETER UN VÉHICULE">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[14.74%] max-w-none top-0 w-[70.52%]" src={imgAcheterUnVehicule} />
      </div>
    </div>
  );
}

function SelectionButton() {
  return (
    <a
      className="-translate-x-1/2 absolute bg-[#c8ec66] border-2 border-[#c8ec66] border-solid h-[56px] left-[calc(50%+453.96px)] overflow-clip rounded-[9999px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[1340px] w-[213.913px] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/60"
      data-name="Button"
      href="/showroom"
    >
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[21.5px] justify-center leading-[0] left-[calc(50%-16.3px)] not-italic text-[#1f2937] text-[18px] text-center top-[calc(50%-0.25px)] w-[155.32px]">
        <p className="leading-[28px]">Notre sélection</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+83.04px)] size-[20px] top-1/2" data-name="SVG">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="SVG">
            <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      </div>
    </a>
  );
}

export default function NosSolutions() {
  return (
    <>
      <Badge />

      <p className="-translate-x-1/2 absolute font-['Lexend:Medium',sans-serif] font-medium h-[72px] leading-[0] left-[704.5px] text-[48px] text-center text-white top-[956px] w-[1187px]">
        <span className="font-['Syne:ExtraBold',sans-serif] font-extrabold leading-[1.5]">{`Nos `}</span>
        <span className="font-['Syne:ExtraBold',sans-serif] font-extrabold leading-[1.5] text-[#c8ec66]">Solutions</span>
      </p>

      <ServiceList />

      <CarKeyImage />

      <div className="absolute contents inset-[14.79%_14.61%_79.72%_43.89%]">
        <AcheterImage />
      </div>

      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Light',sans-serif] h-[20px] justify-center leading-[0] left-[1170px] not-italic text-[34px] text-center text-white top-[1247px] w-[280px]">
        <p className="leading-[31px]">Trouvez la voiture de vos rêves</p>
      </div>

      <SelectionButton />
    </>
  );
}
