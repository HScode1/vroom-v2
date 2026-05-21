import { useEffect, useState } from "react";
import svgPaths from "../svg-gblhduksgt";
import imgImage6 from "../18bcc12168a0b83331f4e8f2123cf6e5d012abb2.png";
import imgImageRemovebg1 from "../68297c37c62088e6f25beeb99b890264d41ec9fd.png";
import imgHeroBackgroundMobile from "../sans_voiture.png";

function BrandBar() {
  return (
    <div className="absolute h-[30px] left-[103px] right-[48px] top-[25px]">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1289.75 31">
          <g id="Group 82">
            <g id="Group 24">
              <path d={svgPaths.p20d54300} fill="var(--fill-0, #C8C8C8)" id="Vector" />
              <path d={svgPaths.p3554500} fill="var(--fill-0, #C8C8C8)" id="Vector_2" />
              <path d={svgPaths.p40a2e00} fill="var(--fill-0, #C8C8C8)" id="Vector_3" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function MobileBrandMark() {
  return (
    <div className="absolute left-6 top-6 z-20 h-[22px] w-[72px] overflow-hidden">
      <svg className="h-full w-[946px] max-w-none" fill="none" preserveAspectRatio="xMinYMid meet" viewBox="0 0 1289.75 31">
        <g>
          <g>
            <path d={svgPaths.p20d54300} fill="var(--fill-0, #C8C8C8)" />
            <path d={svgPaths.p3554500} fill="var(--fill-0, #C8C8C8)" />
            <path d={svgPaths.p40a2e00} fill="var(--fill-0, #C8C8C8)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MobileHeroSection() {
  return (
    <div className="relative h-[100dvh] min-h-[700px] w-screen overflow-hidden bg-[#050808] lg:hidden">
      <img
        alt=""
        className="absolute inset-0 size-full object-cover object-center opacity-95"
        src={imgHeroBackgroundMobile}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,8,0.12)_0%,rgba(5,8,8,0)_42%,rgba(5,8,8,0.74)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-[150px] bg-[linear-gradient(180deg,rgba(5,8,8,0.72),rgba(5,8,8,0))]" />

      <MobileBrandMark />

      <div
        className="pointer-events-none absolute right-0 top-0 z-10 h-[104px] w-[118px]"
        style={{ background: "radial-gradient(circle at top right, rgba(5,8,12,0.98) 0%, rgba(5,8,12,0.9) 42%, rgba(5,8,12,0) 100%)" }}
      />

      <div className="absolute inset-x-5 top-[47dvh] z-10 text-center font-['Syne:ExtraBold',sans-serif] font-extrabold leading-none tracking-[0px] text-white sm:top-[44dvh]">
        <p className="text-[76px] leading-[0.82] sm:text-[96px]">Acheter</p>
        <p className="mt-1 text-[70px] leading-[0.82] text-[#bcff3d] sm:text-[88px]">simplement.</p>
      </div>

      <div className="absolute inset-x-[-42vw] bottom-[156px] z-20 sm:inset-x-[-28vw]">
        <img
          alt=""
          className="h-auto w-full max-w-none"
          src={imgImageRemovebg1}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-30 h-[210px] bg-[linear-gradient(180deg,rgba(5,8,8,0)_0%,rgba(24,24,24,0.68)_42%,#181818_100%)]" />

      <div className="absolute bottom-[76px] left-5 right-5 z-40">
        <a
          className="flex h-[54px] w-full items-center justify-center gap-3 rounded-[100px] bg-[#bcff3d] font-['Syne:ExtraBold',sans-serif] text-[14px] font-extrabold tracking-[0.52px] text-[#0c0d0c] shadow-[0px_18px_40px_-22px_rgba(188,255,61,0.9)]"
          href="/acheter-votre-vehicule"
        >
          <span>Acheter votre véhicule</span>
          <svg className="size-[13px]" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p3d0c5000} stroke="var(--stroke-0, #0C0D0C)" strokeWidth="1.35417" />
          </svg>
        </a>
      </div>

      <div className="absolute bottom-6 left-5 z-40 space-y-2">
        <div className="flex items-center gap-2">
          <svg className="size-[12px]" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p8610900} stroke="var(--stroke-0, #BCFF3D)" />
          </svg>
          <p className="font-['DM_Sans:Regular',sans-serif] text-[12px] text-[rgba(255,255,255,0.45)]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Garantie 12 mois incluse
          </p>
        </div>
        <p className="font-['DM_Sans:Light',sans-serif] text-[12px] font-light text-[rgba(255,255,255,0.36)]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Contrôlés · Garantis · Livrés à domicile
        </p>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const scaleX = window.innerWidth / 1440;
      const scaleY = window.innerHeight / 860;
      setScale(Math.max(scaleX, scaleY));
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <section
      className="absolute left-0 top-0 z-20 h-[100dvh] w-screen overflow-hidden lg:left-[calc((1440px-100vw)/2)]"
      data-name="fullscreen hero"
    >
      <MobileHeroSection />

      <div className="relative hidden h-[100dvh] w-screen overflow-hidden lg:block">
        <div
          className="absolute left-0 top-0 origin-top-left overflow-hidden bg-[#181818]"
          style={{ width: "1440px", height: "860px", transform: `scale(${scale})` }}
          data-name="Hero Section"
        >
          <div
            className="pointer-events-none absolute right-0 top-0 z-10 h-[96px] w-[120px]"
            style={{ background: "radial-gradient(circle at top right, rgba(5,8,12,0.98) 0%, rgba(5,8,12,0.96) 38%, rgba(5,8,12,0.78) 62%, rgba(5,8,12,0) 100%)" }}
          />

          <div className="absolute h-[1038.64px] left-[-280px] top-[-259px] w-[1841.571px]" data-name="Union">
            <div className="absolute inset-[-19.26%_-10.86%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2241.57 1438.64">
                <g filter="url(#filter0_f_hero_main)" id="Union">
                  <path d={svgPaths.p3b211180} fill="url(#paint0_linear_hero_main)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1438.64" id="filter0_f_hero_main" width="2241.57" x="-5.29191e-06" y="6.17938e-06">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_hero_main" stdDeviation="100" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_hero_main" x1="86.332" x2="1771.33" y1="958.124" y2="-375.954">
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

          <div className="absolute h-[965px] left-[-4px] top-[-155px] w-[1448px]" data-name="image 6">
            <img alt="" className="absolute inset-0 size-full max-w-none object-cover pointer-events-none" src={imgImage6} />
          </div>

          <BrandBar />

          <div className="absolute left-0 right-0 top-[148px] flex h-[303px] flex-col justify-center text-center font-['Syne:ExtraBold',sans-serif] text-[0px] font-extrabold leading-[0] tracking-[-11px] text-white">
            <p className="mb-0 text-[150px] leading-[113.6px]">Acheter</p>
            <p className="text-[130px] leading-[113.6px] text-[#bcff3d]">simplement.</p>
          </div>

          <div className="absolute h-[471px] left-[-46px] top-[353px] w-[1500px]" data-name="image-removebg 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 top-[-112.31%] h-[212.31%] w-full max-w-none" src={imgImageRemovebg1} />
            </div>
          </div>

          <div className="-translate-y-1/2 absolute left-[55px] top-[743px] size-[12px]" data-name="SVG">
            <svg className="absolute inset-0 block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <g id="SVG">
                <path d={svgPaths.p8610900} id="Vector" stroke="var(--stroke-0, #BCFF3D)" />
              </g>
            </svg>
          </div>
          <div
            className="-translate-y-1/2 absolute left-[75px] top-[743px] flex h-[16px] w-[134.475px] flex-col justify-center font-['DM_Sans:Regular',sans-serif] text-[12px] font-normal leading-[0] text-[rgba(255,255,255,0.35)]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="leading-[normal]">Garantie 12 mois incluse</p>
          </div>

          <div
            className="-translate-y-1/2 absolute left-[55px] right-[1174.62px] top-[769px] flex h-[16px] flex-col justify-center font-['DM_Sans:Light',sans-serif] text-[12px] font-light leading-[0] text-[rgba(255,255,255,0.3)]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="leading-[normal]">Contrôlés · Garantis · Livrés à domicile</p>
          </div>

          <div className="absolute right-[65px] top-[710px] h-[69px] w-[271.64px]" data-name="CTA BAS DROITE">
            <div className="absolute right-[-0.36px] top-0 h-[44px] w-[306px] rounded-[100px] bg-[#bcff3d]" data-name="Link">
              <div className="absolute left-[18px] top-1/2 flex h-[16px] w-[247px] -translate-y-1/2 flex-col justify-center font-['Syne:ExtraBold',sans-serif] text-[13px] font-extrabold leading-[0] tracking-[0.52px] text-[#0c0d0c]">
                <p className="leading-[normal]">Acheter votre véhicule</p>
              </div>
              <div className="absolute left-[265px] top-1/2 size-[13px] -translate-y-1/2" data-name="SVG">
                <svg className="absolute inset-0 block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                  <g id="SVG">
                    <path d={svgPaths.p3d0c5000} id="Vector" stroke="var(--stroke-0, #0C0D0C)" strokeWidth="1.35417" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="absolute right-[151.92px] top-[62px] h-px w-[24px] bg-[rgba(255,255,255,0.15)]" data-name="Horizontal Divider" />

            <div
              className="-translate-y-1/2 absolute right-[143.92px] top-[62.5px] flex h-[13px] w-[144.232px] translate-x-full flex-col justify-center font-['DM_Sans:Regular',sans-serif] text-[10px] font-normal uppercase leading-[0] tracking-[1.4px] text-[rgba(255,255,255,0.18)]"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              <p className="leading-[normal]">Scroll pour explorer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
