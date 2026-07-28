import { useState } from "react";
import svgPaths from "../svg-gblhduksgt";
import imgCommanderUnVehicule from "../28b5e3bd0392406194bedf4941ae0ec6300e0d9b.png";
import imgVendreUnVehicule from "../9ec2680292a070b26eb145624c6ebdf5aa592f21.png";
import imgAcheterUnVehicule from "../e0de623de74cc21ab7c67e1329b4727a39894ea2.png";

type DesktopSolution = "acheter" | "commander" | "vendre";

const desktopSolutionContent: Record<
  DesktopSolution,
  { title: string; buttonLabel: string; href: string; buttonWidthClassName: string }
> = {
  acheter: {
    title: "Trouvez la voiture de vos rêves",
    buttonLabel: "Notre sélection",
    href: "/showroom",
    buttonWidthClassName: "w-[213.913px]",
  },
  commander: {
    title: "Sur mesure selon vos besoins",
    buttonLabel: "Choisir son véhicule",
    href: "/showroom",
    buttonWidthClassName: "w-[236px]",
  },
  vendre: {
    title: "Vendez en toute simplicité",
    buttonLabel: "Vendre votre véhicule",
    href: "/vendre-votre-vehicule",
    buttonWidthClassName: "w-[257px]",
  },
};

function ServiceList({
  activeSolution,
  onHoverSolution,
  onLeaveSolutions,
}: {
  activeSolution: DesktopSolution;
  onHoverSolution: (solution: DesktopSolution) => void;
  onLeaveSolutions: () => void;
}) {
  const getTextClassName = (solution: DesktopSolution) =>
    activeSolution === solution ? "text-[38px] text-white opacity-100" : "text-[41px] text-[#c8ec66] opacity-20";
  const getTextWidthClassName = (solution: DesktopSolution) => {
    if (activeSolution !== solution) {
      return solution === "acheter" ? "w-[760px]" : "w-[793px]";
    }

    if (solution === "commander") {
      return "w-[620px]";
    }

    return "w-[700px]";
  };

  return (
    <div
      className="absolute contents font-['Syne',sans-serif] font-bold leading-[1.5] left-[120px] top-[1812px]"
      onMouseLeave={onLeaveSolutions}
    >
      <p
        className={`absolute left-[120px] z-10 cursor-pointer overflow-hidden whitespace-nowrap transition-all duration-300 top-[1812px] ${getTextWidthClassName("acheter")} ${getTextClassName("acheter")}`}
        onMouseEnter={() => onHoverSolution("acheter")}
      >
        ACHETER UN VÉHICULE
      </p>
      <p
        className={`absolute left-[120px] z-10 cursor-pointer overflow-hidden whitespace-nowrap transition-all duration-300 top-[1919px] ${getTextWidthClassName("commander")} ${getTextClassName("commander")}`}
        onMouseEnter={() => onHoverSolution("commander")}
      >
        COMMANDER UN VÉHICULE
      </p>
      <p
        className={`absolute left-[120px] z-10 cursor-pointer overflow-hidden whitespace-nowrap transition-all duration-300 top-[2019px] ${getTextWidthClassName("vendre")} ${getTextClassName("vendre")}`}
        onMouseEnter={() => onHoverSolution("vendre")}
      >
        VENDRE UN VÉHICULE
      </p>
    </div>
  );
}

function CarKeyImage() {
  return (
    <div className="absolute left-[-7.99%] right-[35.14%] top-[928px] h-[715px]" data-name="COMMANDER UN VÉHICULE">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[13.24%] max-w-none top-0 w-[73.53%]" src={imgCommanderUnVehicule} />
      </div>
    </div>
  );
}

function AcheterImage({ activeSolution }: { activeSolution: DesktopSolution }) {
  return (
    <div className="absolute left-[43.89%] right-[14.61%] top-[1740px] h-[409px]" data-name="ACHETER UN VÉHICULE">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          className={`absolute h-full left-[14.74%] max-w-none top-0 w-[70.52%] transition-all duration-500 ${
            activeSolution === "acheter" ? "translate-y-0 opacity-100 scale-100" : "translate-y-2 opacity-0 scale-[0.985]"
          }`}
          src={imgAcheterUnVehicule}
        />
        <img
          alt=""
          className={`absolute h-full left-[14.74%] max-w-none top-0 w-[70.52%] transition-all duration-500 ${
            activeSolution === "commander" ? "translate-y-0 opacity-100 scale-100" : "translate-y-2 opacity-0 scale-[0.985]"
          }`}
          src={imgCommanderUnVehicule}
        />
        <img
          alt=""
          className={`absolute h-full left-[14.74%] max-w-none top-0 w-[70.52%] transition-all duration-500 ${
            activeSolution === "vendre" ? "translate-y-0 opacity-100 scale-100" : "translate-y-2 opacity-0 scale-[0.985]"
          }`}
          src={imgVendreUnVehicule}
        />
      </div>
    </div>
  );
}

function SelectionButton({
  buttonLabel,
  href,
  buttonWidthClassName,
}: {
  buttonLabel: string;
  href: string;
  buttonWidthClassName: string;
}) {
  return (
    <a
      className={`-translate-x-1/2 absolute z-10 bg-[#c8ec66] border-2 border-[#c8ec66] border-solid h-[56px] left-[calc(50%+453.96px)] overflow-clip rounded-[9999px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[1979px] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/60 ${buttonWidthClassName}`}
      data-name="Button"
      href={href}
    >
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Bold',sans-serif] h-[21.5px] justify-center leading-[0] left-[calc(50%-16.3px)] not-italic text-[#1f2937] text-[18px] text-center top-[calc(50%-0.25px)] w-[180px]">
        <p className="leading-[28px]">{buttonLabel}</p>
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

function MobileSolutionArrow() {
  return (
    <svg className="size-5" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <g>
        <path d="M4.16667 10H15.8333" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d={svgPaths.p1ae0b780} stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      </g>
    </svg>
  );
}

const solutionsData = [
  {
    key: "acheter" as const,
    num: "01",
    title: "ACHETER UN VÉHICULE",
    slogan: "Trouvez la voiture de vos rêves",
    description: "Découvrez notre sélection exclusive de véhicules d'exception, méticuleusement inspectés, préparés et garantis pour une sérénité totale.",
    image: imgAcheterUnVehicule,
    buttonLabel: "Notre sélection",
    href: "/showroom",
  },
  {
    key: "commander" as const,
    num: "02",
    title: "COMMANDER UN VÉHICULE",
    slogan: "Sur mesure selon vos critères",
    description: "Vous recherchez une configuration précise ? Notre service de recherche personnalisée trouve et importe pour vous le véhicule parfait.",
    image: imgCommanderUnVehicule,
    buttonLabel: "Choisir son véhicule",
    href: "/showroom",
  },
  {
    key: "vendre" as const,
    num: "03",
    title: "VENDRE UN VÉHICULE",
    slogan: "Vendez en toute simplicité",
    description: "Estimez gratuitement votre voiture et vendez-la au meilleur prix du marché, rapidement et sans aucun tracas administratif.",
    image: imgVendreUnVehicule,
    buttonLabel: "Vendre votre véhicule",
    href: "/vendre-votre-vehicule",
  },
];

function MobileNosSolutions() {
  const [activeSolution, setActiveSolution] = useState<"acheter" | "commander" | "vendre">("acheter");

  return (
    <div className="absolute left-0 top-[928px] w-screen px-5 sm:px-8 lg:hidden">
      <div className="mx-auto max-w-[640px]">
        {/* Section Title */}
        <p className="text-center font-['Syne',sans-serif] text-[40px] font-extrabold leading-[44px] text-white sm:text-[46px] sm:leading-[50px]">
          <span className="font-['Syne',sans-serif] font-extrabold">{`Nos `}</span>
          <span className="font-['Syne',sans-serif] font-extrabold text-[#c8ec66]">Solutions</span>
        </p>

        {/* Interactive Accordion */}
        <div className="mt-8 space-y-4">
          {solutionsData.map((sol) => {
            const isExpanded = activeSolution === sol.key;
            return (
              <div 
                key={sol.key} 
                className="overflow-hidden rounded-[24px] border border-white/[0.04] bg-white/[0.01] transition-all duration-300"
              >
                {/* Header Button */}
                <button
                  onClick={() => setActiveSolution(sol.key)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left outline-none transition-colors duration-300 hover:bg-white/[0.02]"
                  type="button"
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-['Syne',sans-serif] text-xs font-semibold tracking-wider transition-colors duration-300 ${isExpanded ? "text-[#c8ec66]" : "text-white/30"}`}>
                      {sol.num}
                    </span>
                    <span className={`font-['Syne',sans-serif] text-base sm:text-lg font-bold tracking-wide transition-all duration-300 ${isExpanded ? "text-[#c8ec66]" : "text-white/60"}`}>
                      {sol.title}
                    </span>
                  </div>
                  
                  {/* Morphing Plus/Minus Icon */}
                  <div className={`relative flex size-8 items-center justify-center rounded-full border transition-all duration-300 ${isExpanded ? "border-[#c8ec66] bg-[#c8ec66]/10 text-[#c8ec66] rotate-180" : "border-white/10 text-white/40"}`}>
                    <span className="h-[1.5px] w-3.5 bg-current rounded-full" />
                    <span className={`absolute h-3.5 w-[1.5px] bg-current rounded-full transition-transform duration-300 ${isExpanded ? "scale-0" : "scale-100"}`} />
                  </div>
                </button>

                {/* Animated Body Content */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isExpanded ? "grid-rows-[1fr] opacity-100 border-t border-white/[0.03]" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden min-h-0">
                    <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(200,236,102,0.06),rgba(24,24,24,0)_70%)] px-5 py-6">
                      
                      {/* Ambient light glow behind the floating image */}
                      <div className="pointer-events-none absolute -right-4 top-10 size-24 rounded-full bg-[#c8ec66]/10 blur-[40px]" />
                      
                      <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        {/* Text details */}
                        <div className="flex-1 min-w-0">
                          <p className="font-['Helvetica_Neue:Light',sans-serif] text-[20px] sm:text-[22px] leading-tight text-white">
                            {sol.slogan}
                          </p>
                          <p className="mt-2 font-['Helvetica_Neue',sans-serif] text-sm leading-relaxed text-white/60">
                            {sol.description}
                          </p>
                          
                          {/* CTA Button */}
                          <div className="mt-5">
                            <a
                              className="inline-flex h-[48px] items-center gap-2.5 rounded-full border border-[#c8ec66] bg-[#c8ec66] px-5 shadow-[0px_10px_20px_-5px_rgba(200,236,102,0.15)] transition-all active:scale-[0.97] hover:bg-[#d4f67a] hover:border-[#d4f67a]"
                              href={sol.href}
                            >
                              <span className="font-['Helvetica_Neue:Bold',sans-serif] text-[14px] font-bold text-[#1f2937]">
                                {sol.buttonLabel}
                              </span>
                              <MobileSolutionArrow />
                            </a>
                          </div>
                        </div>

                        {/* Floating Car Image */}
                        <div className="relative mt-2 flex w-[58%] max-w-[220px] self-center aspect-[4/3] items-center justify-center sm:mt-0 sm:w-[45%] sm:max-w-[160px] sm:self-auto">
                          <img
                            alt={sol.title}
                            className="relative z-10 w-full max-h-[140px] object-contain drop-shadow-[0_12px_12px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out hover:scale-105 sm:max-h-[100px]"
                            src={sol.image}
                          />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function TabletNosSolutions() {
  const [activeSolution, setActiveSolution] = useState<"acheter" | "commander" | "vendre">("acheter");

  const sol = solutionsData.find((s) => s.key === activeSolution) || solutionsData[0];

  return (
    <div className="absolute left-0 top-[928px] hidden w-screen px-10 lg:block xl:hidden">
      <div className="mx-auto max-w-[1180px]">
        {/* Section Title */}
        <p className="text-center font-['Syne',sans-serif] text-[56px] font-extrabold leading-[60px] text-white">
          <span>{`Nos `}</span>
          <span className="text-[#c8ec66]">Solutions</span>
        </p>

        {/* Dynamic Split Layout */}
        <div className="mt-10 grid grid-cols-[minmax(0,380px)_minmax(0,1fr)] items-center gap-8 xl:gap-10">
          
          {/* Left Menu Selection */}
          <div className="space-y-6">
            {solutionsData.map((s) => {
              const isActive = activeSolution === s.key;
              return (
                <button
                  key={s.key}
                  onClick={() => setActiveSolution(s.key)}
                  className={`block w-full text-left font-['Syne',sans-serif] font-bold transition-all duration-300 outline-none ${
                    isActive 
                      ? "text-[42px] leading-[44px] text-white opacity-100 translate-x-2" 
                      : "text-[34px] leading-[36px] text-[#c8ec66]/20 hover:text-[#c8ec66]/40 hover:translate-x-1"
                  }`}
                  type="button"
                >
                  {s.title}
                </button>
              );
            })}
          </div>

          {/* Right Card View */}
          <div className="relative overflow-hidden rounded-[34px] border border-[rgba(255,255,255,0.05)] bg-[radial-gradient(circle_at_top_right,rgba(200,236,102,0.16),rgba(24,24,24,0.9)_58%)] px-8 py-8 shadow-[0px_24px_60px_-30px_rgba(0,0,0,0.6)] min-h-[320px] flex flex-col justify-between">
            {/* Ambient background glows */}
            <div className="pointer-events-none absolute -left-16 top-10 size-32 rounded-full bg-[#bcff3d]/15 blur-[56px]" />
            <div className="pointer-events-none absolute -right-8 bottom-6 size-40 rounded-full bg-[#c8ec66]/10 blur-[60px]" />

            <div className="relative z-10 flex items-center justify-between gap-8 h-full">
              <div className="max-w-[340px] flex flex-col justify-center">
                <p className="font-['Helvetica_Neue:Light',sans-serif] text-[32px] leading-[36px] text-white">
                  {sol.slogan}
                </p>
                <p className="mt-3 text-[16px] leading-[24px] text-white/60">
                  {sol.description}
                </p>

                <div className="mt-6">
                  <a
                    className="inline-flex h-[54px] items-center gap-3 rounded-[9999px] border border-[#c8ec66] bg-[#c8ec66] px-7 shadow-[0px_20px_40px_-10px_rgba(200,236,102,0.2)] transition-all active:scale-[0.97] hover:bg-[#d4f67a] hover:border-[#d4f67a]"
                    href={sol.href}
                  >
                    <span className="font-['Helvetica_Neue:Bold',sans-serif] text-[16px] font-bold text-[#1f2937]">
                      {sol.buttonLabel}
                    </span>
                    <MobileSolutionArrow />
                  </a>
                </div>
              </div>

              {/* Floating Image */}
              <div className="w-[40%] min-w-[240px] flex items-center justify-center relative aspect-[4/3]">
                <img
                  alt={sol.title}
                  className="h-auto w-full max-w-[320px] object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.6)] transition-all duration-500 ease-out transform hover:scale-[1.03]"
                  src={sol.image}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function NosSolutions() {
  const [activeDesktopSolution, setActiveDesktopSolution] = useState<DesktopSolution>("acheter");
  const activeDesktopContent = desktopSolutionContent[activeDesktopSolution];

  return (
    <>
      <MobileNosSolutions />
      <TabletNosSolutions />

      <div className="hidden xl:block">
        <CarKeyImage />

        <div className="-translate-x-full absolute z-10 font-['Syne',sans-serif] font-bold h-[138px] leading-[0] left-[1286px] text-[0px] text-right text-white top-[1275px] w-[661px] whitespace-pre-wrap">
          <p className="mb-0 text-[35px] font-semibold leading-[1.2]">
            <span>{`Nous croyons que `}</span>
            <span className="text-[#bcff3d]">la meilleur route</span>
            <span>{` est celle qui se construit avec `}</span>
          </p>
          <p className="text-[35px] font-semibold leading-[1.2] text-[#bcff3d]">nos clients</p>
        </div>

        <p className="-translate-x-1/2 absolute z-10 font-['Syne',sans-serif] font-extrabold h-[72px] leading-[0] left-[704.5px] text-[48px] text-center text-white top-[1595px] w-[1187px]">
          <span className="font-['Syne',sans-serif] font-extrabold leading-[1.5]">{`Nos `}</span>
          <span className="font-['Syne',sans-serif] font-extrabold leading-[1.5] text-[#c8ec66]">Solutions</span>
        </p>

        <ServiceList
          activeSolution={activeDesktopSolution}
          onHoverSolution={setActiveDesktopSolution}
          onLeaveSolutions={() => setActiveDesktopSolution("acheter")}
        />

        <AcheterImage activeSolution={activeDesktopSolution} />

        <div className="-translate-x-1/2 -translate-y-1/2 absolute z-10 flex flex-col font-['Helvetica_Neue:Light',sans-serif] h-[20px] justify-center leading-[0] left-[1170px] not-italic text-[34px] text-center text-white top-[1886px] w-[280px]">
          <p className="leading-[31px]">{activeDesktopContent.title}</p>
        </div>

        <SelectionButton
          buttonLabel={activeDesktopContent.buttonLabel}
          href={activeDesktopContent.href}
          buttonWidthClassName={activeDesktopContent.buttonWidthClassName}
        />
      </div>
    </>
  );
}
