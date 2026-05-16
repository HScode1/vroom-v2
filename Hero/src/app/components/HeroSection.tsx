import { useState, useEffect } from "react";
import svgPaths from "../../imports/HomePage/svg-2nn18gd49d";
import imgImage6 from "figma:asset/18bcc12168a0b83331f4e8f2123cf6e5d012abb2.png";
import imgImageRemovebg1 from "figma:asset/68297c37c62088e6f25beeb99b890264d41ec9fd.png";

// Thin brand/logo bar at very top of page
// Converted from inset-[0.33%_3.35%_99.28%_7.15%] on a 7689px × 1440px full page
function BrandBar() {
  return (
    <div className="absolute h-[30px] left-[103px] right-[48px] top-[25px]">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1289.75 31"
        >
          <g id="Group 82">
            <g id="Group 24">
              <path
                d={svgPaths.p20d54300}
                fill="var(--fill-0, #C8C8C8)"
                id="Vector"
              />
              <path
                d={svgPaths.p3554500}
                fill="var(--fill-0, #C8C8C8)"
                id="Vector_2"
              />
              <path
                d={svgPaths.p40a2e00}
                fill="var(--fill-0, #C8C8C8)"
                id="Vector_3"
              />
            </g>
            <path
              d={svgPaths.p3c030100}
              id="Vector_4"
              stroke="var(--stroke-0, #C8C8C8)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function HeroSection() {
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
    <div className="w-screen h-screen overflow-hidden relative">
    <div
      className="absolute top-0 left-0 origin-top-left bg-[#181818] overflow-hidden"
      style={{ width: "1440px", height: "860px", transform: `scale(${scale})` }}
      data-name="Hero Section"
    >
      {/* Green/yellow/cyan gradient glow blob — top left */}
      <div
        className="absolute h-[1038.64px] left-[-280px] top-[-259px] w-[1841.571px]"
        data-name="Union"
      >
        <div className="absolute inset-[-19.26%_-10.86%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 2241.57 1438.64"
          >
            <g filter="url(#filter0_f_hero_main)" id="Union">
              <path
                d={svgPaths.p3b211180}
                fill="url(#paint0_linear_hero_main)"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="1438.64"
                id="filter0_f_hero_main"
                width="2241.57"
                x="-5.29191e-06"
                y="6.17938e-06"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_hero_main"
                  stdDeviation="100"
                />
              </filter>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_hero_main"
                x1="86.332"
                x2="1771.33"
                y1="958.124"
                y2="-375.954"
              >
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

      {/* Full-bleed background image (car scene) */}
      <div
        className="absolute h-[965px] left-[-4px] top-[-155px] w-[1448px]"
        data-name="image 6"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage6}
        />
      </div>

      {/* Vroom brand bar SVG at very top */}
      <BrandBar />

      {/* Hero headline: "Acheter" + "simplement." */}
      {/* Converted from inset-[1.92%_0_94.16%_0] on a 7689px page */}
      {/* top = 1.92% × 7689 ≈ 148px  |  height ≈ 303px */}
      <div className="absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[303px] justify-center leading-[0] left-0 right-0 text-[0px] text-center text-white top-[148px] tracking-[-11px]">
        <p className="leading-[113.6px] mb-0 text-[150px]">Acheter</p>
        <p className="leading-[113.6px] text-[#bcff3d] text-[130px]">
          simplement.
        </p>
      </div>

      {/* Car PNG cutout overlaid on hero */}
      <div
        className="absolute h-[471px] left-[-46px] top-[353px] w-[1500px]"
        data-name="image-removebg 1"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[212.31%] left-0 max-w-none top-[-112.31%] w-full"
            src={imgImageRemovebg1}
          />
        </div>
      </div>

      {/* Bottom-left: "Garantie 12 mois incluse" shield icon */}
      {/* Converted from top-[calc(50%-3101.5px)] on 7689px page = 743px */}
      <div
        className="-translate-y-1/2 absolute left-[55px] size-[12px] top-[743px]"
        data-name="SVG"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 12 12"
        >
          <g id="SVG">
            <path
              d={svgPaths.p8610900}
              id="Vector"
              stroke="var(--stroke-0, #BCFF3D)"
            />
          </g>
        </svg>
      </div>
      <div
        className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[75px] text-[12px] text-[rgba(255,255,255,0.35)] top-[743px] w-[134.475px]"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="leading-[normal]">Garantie 12 mois incluse</p>
      </div>

      {/* Bottom-left: "Contrôlés · Garantis · Livrés à domicile" */}
      <div
        className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Light',sans-serif] font-light h-[16px] justify-center leading-[0] left-[55px] right-[1174.62px] text-[12px] text-[rgba(255,255,255,0.3)] top-[769px]"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="leading-[normal]">Contrôlés · Garantis · Livrés à domicile</p>
      </div>

      {/* Bottom-right CTA area */}
      {/* Converted from bottom-[6899px] on 7689px page = top-[790px] */}
      <div
        className="absolute h-[69px] right-[65px] top-[710px] w-[271.64px]"
        data-name="CTA BAS DROITE"
      >
        {/* "Acheter votre véhicule" lime-green pill button */}
        <div
          className="absolute bg-[#bcff3d] h-[44px] right-[-0.36px] rounded-[100px] top-0 w-[306px]"
          data-name="Link"
        >
          <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[16px] justify-center leading-[0] left-[18px] text-[#0c0d0c] text-[13px] top-1/2 tracking-[0.52px] w-[247px]">
            <p className="leading-[normal]">Acheter votre véhicule</p>
          </div>
          {/* Arrow right icon */}
          <div
            className="absolute left-[265px] size-[13px] top-1/2 -translate-y-1/2"
            data-name="SVG"
          >
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 13 13"
            >
              <g id="SVG">
                <path
                  d={svgPaths.p3d0c5000}
                  id="Vector"
                  stroke="var(--stroke-0, #0C0D0C)"
                  strokeWidth="1.35417"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* Thin divider line */}
        <div
          className="absolute bg-[rgba(255,255,255,0.15)] h-px right-[151.92px] top-[62px] w-[24px]"
          data-name="Horizontal Divider"
        />

        {/* "Scroll pour explorer" label */}
        <div
          className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] right-[143.92px] text-[10px] text-[rgba(255,255,255,0.18)] top-[62.5px] tracking-[1.4px] translate-x-full uppercase w-[144.232px]"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          <p className="leading-[normal]">Scroll pour explorer</p>
        </div>
      </div>
    </div>
    </div>
  );
}
