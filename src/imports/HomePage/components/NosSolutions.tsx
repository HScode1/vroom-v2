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
    <div className="absolute contents font-['Syne',sans-serif] font-bold leading-[1.5] left-[120px] top-[1173px]">
      <p className="absolute left-[120px] z-10 text-[48px] text-white top-[1173px] w-[760px]">ACHETER UN VÉHICULE</p>
      <p className="absolute left-[120px] z-10 opacity-20 text-[#c8ec66] text-[41px] top-[1280px] w-[793px]">COMMANDER UN VÉHICULE</p>
      <p className="absolute left-[120px] z-10 opacity-20 text-[#c8ec66] text-[41px] top-[1380px] w-[793px]">VENDRE UN VÉHICULE</p>
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
      className="-translate-x-1/2 absolute z-10 bg-[#c8ec66] border-2 border-[#c8ec66] border-solid h-[56px] left-[calc(50%+453.96px)] overflow-clip rounded-[9999px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[1340px] w-[213.913px] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/60"
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

function MobileNosSolutions() {
  return (
    <div className="absolute left-0 top-[928px] w-screen px-5 sm:px-8 lg:hidden">
      <div className="mx-auto max-w-[640px]">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-[100px] border border-[rgba(188,255,61,0.2)] bg-[rgba(188,255,61,0.08)] px-4 py-2">
          <div className="size-[5px] rounded-[2.5px] bg-[#bcff3d]" />
          <p className="font-['DM_Sans:Medium',sans-serif] text-[11px] font-medium uppercase tracking-[1.76px] text-[#bcff3d]">
            Ce que nous faisons
          </p>
        </div>

        <p className="mt-5 text-center font-['Syne',sans-serif] text-[40px] font-extrabold leading-[44px] text-white sm:text-[46px] sm:leading-[50px]">
          <span className="font-['Syne',sans-serif] font-extrabold">{`Nos `}</span>
          <span className="font-['Syne',sans-serif] font-extrabold text-[#c8ec66]">Solutions</span>
        </p>

        <div className="mt-8">
          <div className="space-y-4">
            <p className="font-['Syne',sans-serif] text-[34px] font-bold leading-[36px] text-white sm:text-[38px] sm:leading-[40px]">
              ACHETER UN VÉHICULE
            </p>
            <p className="font-['Syne',sans-serif] text-[30px] font-bold leading-[32px] text-[#c8ec66]/22 sm:text-[34px] sm:leading-[36px]">
              COMMANDER UN VÉHICULE
            </p>
            <p className="font-['Syne',sans-serif] text-[30px] font-bold leading-[32px] text-[#c8ec66]/22 sm:text-[34px] sm:leading-[36px]">
              VENDRE UN VÉHICULE
            </p>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-[26px] border border-[rgba(255,255,255,0.05)] bg-[radial-gradient(circle_at_top_right,rgba(200,236,102,0.14),rgba(24,24,24,0.9)_58%)] px-5 py-6 shadow-[0px_20px_40px_-24px_rgba(0,0,0,0.55)]">
            <div className="pointer-events-none absolute -left-10 top-10 size-24 rounded-full bg-[#bcff3d]/20 blur-[40px]" />
            <div className="pointer-events-none absolute -right-6 bottom-6 size-28 rounded-full bg-[#c8ec66]/15 blur-[45px]" />
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4">
                <div className="max-w-[48%]">
                  <p className="font-['Helvetica_Neue:Light',sans-serif] text-[23px] leading-[27px] text-white">
                    Trouvez la voiture de vos rêves
                  </p>
                </div>
                <div className="w-[42%]">
                  <img alt="" className="ml-auto h-auto w-full max-w-[140px]" src={imgAcheterUnVehicule} />
                </div>
              </div>

              <a
                className="mt-6 inline-flex h-[54px] items-center gap-3 rounded-[9999px] border-2 border-[#c8ec66] bg-[#c8ec66] px-6 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/60"
                href="/showroom"
              >
                <span className="font-['Helvetica_Neue:Bold',sans-serif] text-[17px] font-bold text-[#1f2937]">Notre sélection</span>
                <MobileSolutionArrow />
              </a>
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-[22px] border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.03)] px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="max-w-[52%]">
                <p className="font-['Syne',sans-serif] text-[20px] font-bold leading-[24px] text-[#c8ec66]/75">
                  COMMANDER UN VÉHICULE
                </p>
                <p className="mt-3 font-['Helvetica_Neue:Light',sans-serif] text-[15px] leading-[22px] text-white/70">
                  Nous cherchons le bon véhicule pour votre besoin.
                </p>
              </div>
              <div className="w-[40%]">
                <img alt="" className="ml-auto h-auto w-full max-w-[118px] opacity-90" src={imgCommanderUnVehicule} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabletNosSolutions() {
  return (
    <div className="absolute left-0 top-[928px] hidden w-screen px-10 lg:block xl:hidden">
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-[100px] border border-[rgba(188,255,61,0.2)] bg-[rgba(188,255,61,0.08)] px-4 py-2">
          <div className="size-[5px] rounded-[2.5px] bg-[#bcff3d]" />
          <p
            className="font-['DM_Sans:Medium',sans-serif] text-[11px] font-medium uppercase tracking-[1.76px] text-[#bcff3d]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            Ce que nous faisons
          </p>
        </div>

        <p className="mt-6 text-center font-['Syne',sans-serif] text-[56px] font-extrabold leading-[60px] text-white">
          <span>{`Nos `}</span>
          <span className="text-[#c8ec66]">Solutions</span>
        </p>

        <div className="mt-10 grid grid-cols-[minmax(0,380px)_minmax(0,1fr)] items-start gap-8 xl:gap-10">
          <div className="pt-6">
            <div className="space-y-5">
              <p className="font-['Syne',sans-serif] text-[48px] font-bold leading-[0.95] text-white">
                ACHETER UN VÉHICULE
              </p>
              <p className="font-['Syne',sans-serif] text-[38px] font-bold leading-[1] text-[#c8ec66]/22">
                COMMANDER UN VÉHICULE
              </p>
              <p className="font-['Syne',sans-serif] text-[38px] font-bold leading-[1] text-[#c8ec66]/22">
                VENDRE UN VÉHICULE
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="relative overflow-hidden rounded-[34px] border border-[rgba(255,255,255,0.05)] bg-[radial-gradient(circle_at_top_right,rgba(200,236,102,0.16),rgba(24,24,24,0.9)_58%)] px-8 py-8 shadow-[0px_24px_60px_-30px_rgba(0,0,0,0.6)]">
              <div className="pointer-events-none absolute -left-16 top-10 size-32 rounded-full bg-[#bcff3d]/20 blur-[56px]" />
              <div className="pointer-events-none absolute -right-8 bottom-6 size-40 rounded-full bg-[#c8ec66]/15 blur-[60px]" />

              <div className="relative z-10 flex items-center justify-between gap-8">
                <div className="max-w-[320px]">
                  <p className="font-['Helvetica_Neue:Light',sans-serif] text-[36px] leading-[38px] text-white">
                    Trouvez la voiture de vos rêves
                  </p>

                  <a
                    className="mt-8 inline-flex h-[56px] items-center gap-3 rounded-[9999px] border-2 border-[#c8ec66] bg-[#c8ec66] px-7 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] focus:outline-none focus:ring-2 focus:ring-[#bcff3d]/60"
                    href="/showroom"
                  >
                    <span className="font-['Helvetica_Neue:Bold',sans-serif] text-[18px] font-bold text-[#1f2937]">
                      Notre sélection
                    </span>
                    <MobileSolutionArrow />
                  </a>
                </div>

                <div className="w-[44%] min-w-[260px]">
                  <img alt="" className="ml-auto h-auto w-full max-w-[360px]" src={imgAcheterUnVehicule} />
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.03)] px-6 py-5">
              <div className="flex items-center justify-between gap-6">
                <div className="max-w-[54%]">
                  <p className="font-['Syne',sans-serif] text-[26px] font-bold leading-[28px] text-[#c8ec66]/75">
                    COMMANDER UN VÉHICULE
                  </p>
                  <p className="mt-3 font-['Helvetica_Neue:Light',sans-serif] text-[17px] leading-[25px] text-white/70">
                    Nous cherchons le bon véhicule pour votre besoin.
                  </p>
                </div>

                <div className="w-[32%] min-w-[170px]">
                  <img alt="" className="ml-auto h-auto w-full max-w-[210px] opacity-90" src={imgCommanderUnVehicule} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NosSolutions() {
  return (
    <>
      <MobileNosSolutions />
      <TabletNosSolutions />

      <div className="hidden xl:block">
        <Badge />

        <p className="-translate-x-1/2 absolute z-10 font-['Syne',sans-serif] font-extrabold h-[72px] leading-[0] left-[704.5px] text-[48px] text-center text-white top-[956px] w-[1187px]">
          <span className="font-['Syne',sans-serif] font-extrabold leading-[1.5]">{`Nos `}</span>
          <span className="font-['Syne',sans-serif] font-extrabold leading-[1.5] text-[#c8ec66]">Solutions</span>
        </p>

        <ServiceList />

        <CarKeyImage />

        <div className="absolute contents inset-[14.79%_14.61%_79.72%_43.89%]">
          <AcheterImage />
        </div>

        <div className="-translate-x-1/2 -translate-y-1/2 absolute z-10 flex flex-col font-['Helvetica_Neue:Light',sans-serif] h-[20px] justify-center leading-[0] left-[1170px] not-italic text-[34px] text-center text-white top-[1247px] w-[280px]">
          <p className="leading-[31px]">Trouvez la voiture de vos rêves</p>
        </div>

        <div className="-translate-x-full absolute z-10 font-['Syne',sans-serif] font-bold h-[138px] leading-[0] left-[1286px] text-[0px] text-right text-white top-[1942px] w-[661px] whitespace-pre-wrap">
          <p className="mb-0 text-[35px] font-semibold leading-[1.2]">
            <span>{`Nous croyons que `}</span>
            <span className="text-[#bcff3d]">la meilleur route</span>
            <span>{` est celle qui se construit avec `}</span>
          </p>
          <p className="text-[35px] font-semibold leading-[1.2] text-[#bcff3d]">nos clients</p>
        </div>

        <SelectionButton />
      </div>
    </>
  );
}
