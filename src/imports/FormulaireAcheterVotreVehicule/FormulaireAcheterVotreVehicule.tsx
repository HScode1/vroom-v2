import { useState } from "react";
import { useNavigate } from "react-router";
import svgPaths from "./svg-fi2qbhww8w";

function OverlayBorder() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.22)] border-solid h-[29px] left-[80px] rounded-[100px] top-[64px] w-[353.39px]" data-name="Overlay+Border">
      <div className="-translate-y-1/2 absolute bg-[#bcff3d] left-[18px] rounded-[3px] size-[6px] top-1/2" data-name="Background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[13px] justify-center leading-[0] left-[32px] text-[#bcff3d] text-[11px] top-1/2 tracking-[1.32px] uppercase w-[301.707px]">
        <p className="leading-[normal]">Service personnalisé · Réponse sous 24h</p>
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.2)] border-solid left-0 rounded-[16px] size-[32px] top-[18px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[#bcff3d] text-[11px] text-center top-1/2 w-[12.763px]">
        <p className="leading-[normal]">01</p>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[73px] left-[80px] right-[680px] top-[431.88px]" data-name="HorizontalBorder">
      <OverlayBorder1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[18px] justify-center leading-[0] left-[48px] text-[14px] text-[rgba(255,255,255,0.85)] top-[25px] w-[175.886px]">
        <p className="leading-[normal]">Vous décrivez votre projet</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[48px] text-[12px] text-[rgba(255,255,255,0.4)] top-[47px] w-[365.922px]">
        <p className="leading-[18px]">Marque, modèle, budget, préférences — tout est pris en compte.</p>
      </div>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.2)] border-solid left-0 rounded-[16px] size-[32px] top-[18px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[calc(50%+0.18px)] text-[#bcff3d] text-[11px] text-center top-1/2 w-[15.355px]">
        <p className="leading-[normal]">02</p>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[73px] left-[80px] right-[680px] top-[504.88px]" data-name="HorizontalBorder">
      <OverlayBorder2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[18px] justify-center leading-[0] left-[48px] text-[14px] text-[rgba(255,255,255,0.85)] top-[25px] w-[239.766px]">
        <p className="leading-[normal]">Notre équipe sélectionne pour vous</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[48px] text-[12px] text-[rgba(255,255,255,0.4)] top-[47px] w-[346.365px]">
        <p className="leading-[18px]">On accède à tout le marché pour trouver les meilleures offres.</p>
      </div>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.2)] border-solid left-[80px] rounded-[16px] size-[32px] top-[595.88px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[calc(50%+0.18px)] text-[#bcff3d] text-[11px] text-center top-1/2 w-[15.547px]">
        <p className="leading-[normal]">03</p>
      </div>
    </div>
  );
}

function ParagraphBackground() {
  return (
    <div className="absolute bg-[#111411] h-[91px] left-0 right-[223.5px] top-0" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[34px] justify-center left-[16px] text-[#bcff3d] text-[28px] top-[37px] w-[109.779px]">
        <p className="leading-[normal]">500+</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center left-[16px] text-[11px] text-[rgba(255,255,255,0.4)] top-[64.5px] w-[95.597px]">
        <p className="leading-[normal]">véhicules en stock</p>
      </div>
    </div>
  );
}

function ParagraphBackground1() {
  return (
    <div className="absolute bg-[#111411] h-[91px] left-[223.5px] right-0 top-0" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[34px] justify-center left-[16px] text-[#bcff3d] text-[28px] top-[37px] w-[87.284px]">
        <p className="leading-[normal]">24h</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center left-[16px] text-[11px] text-[rgba(255,255,255,0.4)] top-[64.5px] w-[87.304px]">
        <p className="leading-[normal]">délai de réponse</p>
      </div>
    </div>
  );
}

function ParagraphBackground2() {
  return (
    <div className="absolute bg-[#111411] h-[91px] left-0 right-[223.5px] top-[92px]" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[34px] justify-center left-[16px] text-[#bcff3d] text-[28px] top-[37px] w-[111.202px]">
        <p className="leading-[normal]">100%</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center left-[16px] text-[11px] text-[rgba(255,255,255,0.4)] top-[64.5px] w-[34.855px]">
        <p className="leading-[normal]">gratuit</p>
      </div>
    </div>
  );
}

function ParagraphBackground3() {
  return (
    <div className="absolute bg-[#111411] h-[91px] left-[223.5px] right-0 top-[92px]" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[34px] justify-center left-[16px] text-[#bcff3d] text-[28px] top-[37px] w-[89.558px]">
        <p className="leading-[normal]">12m</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center left-[16px] text-[11px] text-[rgba(255,255,255,0.4)] top-[64.5px] w-[82.246px]">
        <p className="leading-[normal]">garantie incluse</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.08)] h-[183px] leading-[0] left-[36px] overflow-clip right-[36px] rounded-[16px] top-[148.78px]" data-name="Overlay">
      <ParagraphBackground />
      <ParagraphBackground1 />
      <ParagraphBackground2 />
      <ParagraphBackground3 />
    </div>
  );
}

function Svg() {
  return (
    <div className="-translate-y-1/2 absolute left-[12px] size-[11px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_6_2299)" id="SVG">
          <path d={svgPaths.p33f571e0} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
          <path d={svgPaths.p1f658e00} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_6_2299">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid bottom-[40px] left-[36px] rounded-[8px] top-[355.78px] w-[146.61px]" data-name="Overlay+Border">
      <Svg />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] left-[29px] text-[12px] text-[rgba(255,255,255,0.55)] top-1/2 w-[103.97px]">
        <p className="leading-[normal]">Sans engagement</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="-translate-y-1/2 absolute left-[12px] size-[11px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="SVG">
          <path d={svgPaths.p3aae2680} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid bottom-[40px] left-[190.61px] rounded-[8px] top-[355.78px] w-[125.97px]" data-name="Overlay+Border">
      <Svg1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] left-[29px] text-[12px] text-[rgba(255,255,255,0.55)] top-1/2 w-[83.298px]">
        <p className="leading-[normal]">Achat sécurisé</p>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="-translate-y-1/2 absolute left-[12px] size-[11px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_6_1038)" id="SVG">
          <path d={svgPaths.p1f658e00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
          <path d={svgPaths.p105d7900} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_6_1038">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid bottom-[40px] left-[324.58px] rounded-[8px] top-[355.78px] w-[146.5px]" data-name="Overlay+Border">
      <Svg2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] left-[29px] text-[12px] text-[rgba(255,255,255,0.55)] top-1/2 w-[103.86px]">
        <p className="leading-[normal]">Réponse sous 24h</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute border border-[rgba(188,255,61,0.13)] border-solid h-[428.78px] left-[680px] overflow-clip right-[80px] rounded-[24px] top-[134.55px]" style={{ backgroundImage: "linear-gradient(134.976deg, rgba(188, 255, 61, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)" }} data-name="Background+Border">
      <div className="absolute right-[-80px] size-[250px] top-[-80px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 250 250\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(17.678 0 0 17.678 125 125)\\'><stop stop-color=\\'rgba(188,255,61,0.1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[12px] justify-center leading-[0] left-[36px] opacity-70 text-[#bcff3d] text-[10px] top-[46px] tracking-[1.6px] uppercase w-[200.856px]">
        <p className="leading-[normal]">Vroom · Recherche véhicule</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[52.39px] justify-center leading-[0] left-[36px] text-[22px] text-white top-[94.19px] w-[399.9px]">
        <p className="mb-0">
          <span className="leading-[26.4px]">{`Accès à `}</span>
          <span className="leading-[26.4px] text-[#bcff3d]">tout le marché</span>
        </p>
        <p className="leading-[26.4px]">automobile</p>
      </div>
      <Overlay />
      <OverlayBorder4 />
      <OverlayBorder5 />
      <OverlayBorder6 />
    </div>
  );
}

function SectionHero() {
  return (
    <div className="absolute h-[705.88px] left-[80px] right-[80px] top-[145px]" data-name="Section - HERO">
      <OverlayBorder />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[179.47px] justify-center leading-[0] left-[80px] text-[54px] text-white top-[206.74px] tracking-[-1.62px] w-[505.551px]">
        <p className="leading-[57.24px] mb-0">Décrivez le</p>
        <p className="leading-[57.24px] mb-0">véhicule</p>
        <p>
          <span className="leading-[57.24px]">{`de vos `}</span>
          <span className="leading-[57.24px] text-[#bcff3d]">rêves</span>
        </p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[73px] justify-center leading-[0] left-[80px] text-[16px] text-[rgba(255,255,255,0.55)] top-[351.5px] w-[505px]">
        <p className="leading-[26.4px] mb-0">Remplissez le formulaire ci-dessous. Notre équipe</p>
        <p className="leading-[26.4px] mb-0">analyse votre demande et vous contacte sous 24h avec</p>
        <p className="leading-[26.4px]">une sélection personnalisée de véhicules.</p>
      </div>
      <HorizontalBorder />
      <HorizontalBorder1 />
      <OverlayBorder3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[18px] justify-center leading-[0] left-[128px] text-[14px] text-[rgba(255,255,255,0.85)] top-[602.88px] w-[175.816px]">
        <p className="leading-[normal]">On vous rappelle sous 24h</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[128px] text-[12px] text-[rgba(255,255,255,0.4)] top-[624.88px] w-[384.07px]">
        <p className="leading-[18px]">Avec des propositions concrètes, des prix négociés et zéro surprise.</p>
      </div>
      <BackgroundBorder />
    </div>
  );
}

function OverlayBorder7() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.1)] border border-[rgba(188,255,61,0.2)] border-solid h-[46px] left-[6px] right-[742.67px] rounded-[14px] top-1/2" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#bcff3d] left-[calc(50%-66px)] rounded-[4px] size-[8px] top-1/2" data-name="Background" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[calc(50%+9.2px)] text-[#bcff3d] text-[13px] text-center top-1/2 w-[122.409px]">
        <p className="leading-[normal]">Votre véhicule idéal</p>
      </div>
    </div>
  );
}

function StepsNav() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[60px] left-[80px] right-[42px] rounded-[20px] top-[65.12px]" data-name="Steps nav">
      <OverlayBorder7 />
      <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0.08)] h-[28px] left-[425px] top-1/2 w-px" data-name="Vertical Divider" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0.15)] left-[calc(50%-73.42px)] rounded-[4px] size-[8px] top-1/2" data-name="Overlay" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[calc(50%+10.14px)] text-[13px] text-[rgba(255,255,255,0.4)] text-center top-1/2 w-[139.118px]">
        <p className="leading-[normal]">{`Budget & préférences`}</p>
      </div>
      <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0.08)] h-[28px] left-[793.33px] top-1/2 w-px" data-name="Vertical Divider" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0.15)] left-[calc(50%+309.2px)] rounded-[4px] size-[8px] top-1/2" data-name="Overlay" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-[calc(50%+378.5px)] text-[13px] text-[rgba(255,255,255,0.4)] text-center top-1/2 w-[110.601px]">
        <p className="leading-[normal]">Vos coordonnées</p>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="absolute left-[24px] size-[13px] top-[106px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="SVG">
          <path d={svgPaths.p2a8a0180} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
          <path d={svgPaths.p2be25f80} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Svg4() {
  return (
    <div className="absolute left-[24px] size-[13px] top-[150px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_6_1251)" id="SVG">
          <path d={svgPaths.p1d11280} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
          <path d={svgPaths.p2fb53000} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
        <defs>
          <clipPath id="clip0_6_1251">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder8() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.05)] border border-[rgba(188,255,61,0.15)] border-solid h-[205px] left-[880px] overflow-clip right-[40px] rounded-[20px] top-[566.12px]" data-name="Overlay+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[46px] text-[#bcff3d] text-[14px] top-[calc(50%-69px)] w-[114.326px]">
        <p className="leading-[normal]">Une question ?</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[47px] text-[10px] text-[rgba(188,255,61,0.6)] top-[65.5px] tracking-[0.8px] uppercase w-[119px]">
        <p className="leading-[normal]">Téléphone</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[82.5px] w-[115.378px]">
        <p className="leading-[normal]">06 19 93 37 65</p>
      </div>
      <Svg3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[47px] text-[10px] text-[rgba(188,255,61,0.6)] top-[109.5px] tracking-[0.8px] uppercase w-[32.706px]">
        <p className="leading-[normal]">Email</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[126.11px] w-[164px]">
        <p className="leading-[normal]">contact@vroomparis.fr</p>
      </div>
      <Svg4 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[47px] text-[10px] text-[rgba(188,255,61,0.6)] top-[153.5px] tracking-[0.8px] uppercase w-[144px]">
        <p className="leading-[normal]">Disponibilité</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.7)] top-[170.5px] w-[122.78px]">
        <p className="leading-[normal]">Lun – Sam · 9h à 19h</p>
      </div>
      <div className="absolute bottom-[-30px] right-[-30px] size-[120px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 120 120\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(8.4853 0 0 8.4853 60 60)\\'><stop stop-color=\\'rgba(188,255,61,0.07)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
      <div className="absolute inset-[calc(29.08%-0.42px)_calc(89.72%+0.79px)_calc(65.07%+0.3px)_calc(6.94%-0.86px)]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p355422f2} fill="var(--fill-0, #BCFF3D)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[calc(12.98%-0.74px)_calc(90.56%+0.81px)_calc(81.17%+0.62px)_calc(6.11%-0.88px)]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p355422f2} fill="var(--fill-0, #BCFF3D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[14px] top-[calc(50%-63px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_6_1643)" id="SVG">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.16667" />
          <path d="M7 3.5V7L9.33333 8.16667" id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_6_1643">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg6() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[13px] top-[calc(50%-22.5px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_6_1639)" id="SVG">
          <path d={svgPaths.p3a487780} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
          <path d={svgPaths.p1d11280} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
        <defs>
          <clipPath id="clip0_6_1639">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg7() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[13px] top-[calc(50%+11.5px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_6_1639)" id="SVG">
          <path d={svgPaths.p3a487780} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
          <path d={svgPaths.p1d11280} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
        <defs>
          <clipPath id="clip0_6_1639">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg8() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[13px] top-[calc(50%+37.5px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_6_1639)" id="SVG">
          <path d={svgPaths.p3a487780} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
          <path d={svgPaths.p1d11280} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
        <defs>
          <clipPath id="clip0_6_1639">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg9() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[13px] top-[calc(50%+63.5px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_6_1639)" id="SVG">
          <path d={svgPaths.p3a487780} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
          <path d={svgPaths.p1d11280} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
        <defs>
          <clipPath id="clip0_6_1639">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid h-[193px] left-0 overflow-clip right-[-38px] rounded-[20px] top-[0.12px]" data-name="Background+Border">
      <Svg5 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[46px] text-[14px] text-white top-[calc(50%-63px)] w-[178.558px]">
        <p className="leading-[normal]">Ce qui se passe ensuite</p>
      </div>
      <Svg6 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%-30.5px)] w-[239px]">
        <p className="leading-[normal]">Votre demande est transmise à notre</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%-14.5px)] w-[44.104px]">
        <p className="leading-[normal]">équipe</p>
      </div>
      <Svg7 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%+11.5px)] w-[187.816px]">
        <p className="leading-[normal]">Analyse de tout le marché auto</p>
      </div>
      <Svg8 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%+37.5px)] w-[205.74px]">
        <p className="leading-[normal]">Sélection personnalisée sous 24h</p>
      </div>
      <Svg9 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%+63.5px)] w-[241.828px]">
        <p className="leading-[normal]">On vous rappelle avec nos propositions</p>
      </div>
      <div className="absolute bottom-[-30px] right-[-30px] size-[100px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(7.0711 0 0 7.0711 50 50)\\'><stop stop-color=\\'rgba(188,255,61,0.07)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
    </div>
  );
}

function Svg10() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[14px] top-[calc(50%-55px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p1c47d580} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Svg11() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[13px] top-[calc(50%-22.5px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_6_1639)" id="SVG">
          <path d={svgPaths.p3a487780} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
          <path d={svgPaths.p1d11280} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
        <defs>
          <clipPath id="clip0_6_1639">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg12() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[13px] top-[calc(50%+3.5px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_6_1639)" id="SVG">
          <path d={svgPaths.p3a487780} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
          <path d={svgPaths.p1d11280} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
        <defs>
          <clipPath id="clip0_6_1639">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg13() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[13px] top-[calc(50%+29.5px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_6_1639)" id="SVG">
          <path d={svgPaths.p3a487780} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
          <path d={svgPaths.p1d11280} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
        <defs>
          <clipPath id="clip0_6_1639">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg14() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[13px] top-[calc(50%+55.5px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_6_1639)" id="SVG">
          <path d={svgPaths.p3a487780} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
          <path d={svgPaths.p1d11280} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
        <defs>
          <clipPath id="clip0_6_1639">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid h-[177px] left-0 overflow-clip right-[-38px] rounded-[20px] top-[207.12px]" data-name="Background+Border">
      <Svg10 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[46px] text-[14px] text-white top-[calc(50%-55px)] w-[106.164px]">
        <p className="leading-[normal]">Nos garanties</p>
      </div>
      <Svg11 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%-22.5px)] w-[196.332px]">
        <p className="leading-[normal]">100% gratuit, sans engagement</p>
      </div>
      <Svg12 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%+3.5px)] w-[223.854px]">
        <p className="leading-[normal]">Garantie 12 mois sur chaque véhicule</p>
      </div>
      <Svg13 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%+29.5px)] w-[211.004px]">
        <p className="leading-[normal]">Contrôle 100 points avant livraison</p>
      </div>
      <Svg14 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%+55.5px)] w-[187.646px]">
        <p className="leading-[normal]">Livraison à domicile disponible</p>
      </div>
      <div className="absolute bottom-[-30px] right-[-30px] size-[100px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(7.0711 0 0 7.0711 50 50)\\'><stop stop-color=\\'rgba(188,255,61,0.07)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="h-[591px] pointer-events-auto sticky top-0 w-[320px]" data-name="SIDEBAR">
      <BackgroundBorder1 />
      <BackgroundBorder2 />
    </div>
  );
}

function Svg15() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[17px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="SVG">
          <path d={svgPaths.p15e4d100} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.41667" />
          <path d={svgPaths.p17977700} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.41667" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder9() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.1)] border border-[rgba(188,255,61,0.2)] border-solid left-[40px] rounded-[10px] size-[38px] top-1/2" data-name="Overlay+Border">
      <Svg15 />
    </div>
  );
}

function OverlayBorder10() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.08)] border border-[rgba(188,255,61,0.16)] border-solid h-[27px] left-[592.25px] rounded-[100px] top-1/2 w-[137.75px]" data-name="Overlay+Border">
      <div className="-translate-y-1/2 absolute bg-[#bcff3d] left-[14px] rounded-[3px] size-[6px] top-1/2" data-name="Background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[13px] justify-center leading-[0] left-[26px] text-[#bcff3d] text-[11px] top-1/2 w-[96.098px]">
        <p className="leading-[normal]">Réponse sous 24h</p>
      </div>
    </div>
  );
}

function OverlayHorizontalBorder() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)] border-b border-solid h-[79px] left-0 right-0 top-0" data-name="Overlay+HorizontalBorder">
      <OverlayBorder9 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] left-[92px] text-[15px] text-white top-[calc(50%-8.5px)] w-[274.857px]">
        <p className="leading-[normal]">Formulaire de recherche véhicule</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] left-[92px] text-[12px] text-[rgba(255,255,255,0.4)] top-[calc(50%+10px)] w-[425.456px]">
        <p className="leading-[normal]">{`Décrivez le véhicule que vous recherchez — notre équipe s'occupe du reste.`}</p>
      </div>
      <OverlayBorder10 />
    </div>
  );
}

function Svg16() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[12px] top-[calc(50%-8px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.p13452a00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" />
          <path d="M8 4H10.5L11.5 5.5V7.5H8V4Z" id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[29px] left-0 right-0 top-0" data-name="HorizontalBorder">
      <Svg16 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[12px] justify-center leading-[0] left-[21px] text-[10px] text-[rgba(255,255,255,0.25)] top-[calc(50%-8px)] tracking-[1.4px] uppercase w-[155.13px]">
        <p className="leading-[normal]">Le véhicule recherché</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[13px] leading-[0] left-0 right-[468px] text-[11px] top-[53px] tracking-[0.88px] uppercase" data-name="Label">
      <div className="-translate-y-1/2 absolute flex flex-col h-[13px] justify-center left-0 text-[rgba(255,255,255,0.25)] top-1/2 w-[54.175px]">
        <p className="leading-[normal]">Marque</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[13px] justify-center left-[58.81px] text-[#bcff3d] top-1/2 w-[6.95px]">
        <p className="leading-[normal]">*</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-y-1/2 absolute h-[18px] left-[18px] overflow-clip right-[40px] top-1/2" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[14px] text-white top-[9px] w-[89.418px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[18px]">Sélectionner...</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[48px] left-0 right-[468px] rounded-[12px] top-[73px]" data-name="Options">
      <select className="absolute inset-0 bg-transparent border-none outline-none text-white text-[14px] px-[18px] w-full h-full appearance-none cursor-pointer [&>option]:bg-[#181818]">
        <option value="">Sélectionner...</option>
        <option>Audi</option>
        <option>BMW</option>
        <option>Citroën</option>
        <option>Dacia</option>
        <option>Ford</option>
        <option>Mercedes</option>
        <option>Peugeot</option>
        <option>Renault</option>
        <option>Toyota</option>
        <option>Volkswagen</option>
        <option>Autre</option>
      </select>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[18px] left-[18px] overflow-clip right-[18px] top-[14px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[14px] text-[rgba(255,255,255,0.25)] top-[9px] w-[149.125px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Ex : Clio, Golf, 3 Series…</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[48px] left-[234px] overflow-clip right-[234px] rounded-[12px] top-[73px]" data-name="Input">
      <input className="absolute inset-0 bg-transparent border-none outline-none text-white text-[14px] px-[18px] w-full h-full placeholder:text-[rgba(255,255,255,0.25)]" placeholder="Ex : Clio, Golf, 3 Series…" />
    </div>
  );
}

function Container2() {
  return (
    <div className="-translate-y-1/2 absolute h-[18px] left-[18px] overflow-clip right-[40px] top-1/2" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[14px] text-white top-[9px] w-[79.071px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[18px]">Peu importe</p>
      </div>
    </div>
  );
}

function Options1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[48px] left-[468px] right-0 rounded-[12px] top-[73px]" data-name="Options">
      <select className="absolute inset-0 bg-transparent border-none outline-none text-white text-[14px] px-[18px] w-full h-full appearance-none cursor-pointer [&>option]:bg-[#181818]">
        <option value="">Peu importe</option>
        {Array.from({ length: 26 }, (_, i) => 2025 - i).map((y) => (
          <option key={y}>{y}</option>
        ))}
      </select>
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[13px] leading-[0] left-0 right-[351px] text-[11px] top-[145px] tracking-[0.88px] uppercase" data-name="Label">
      <div className="-translate-y-1/2 absolute flex flex-col h-[13px] justify-center left-0 text-[rgba(255,255,255,0.25)] top-1/2 w-[89.818px]">
        <p className="leading-[normal]">Type de boîte</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[13px] justify-center left-[94.48px] text-[#bcff3d] top-1/2 w-[6.95px]">
        <p className="leading-[normal]">*</p>
      </div>
    </div>
  );
}

function OverlayBorder11() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.08)] border border-[#bcff3d] border-solid h-[48px] left-0 right-[579.52px] rounded-[12px] top-[165px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[18px] justify-center leading-[0] left-[calc(50%+0.17px)] text-[#bcff3d] text-[14px] text-center top-[23px] w-[88.817px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Automatique</p>
      </div>
    </div>
  );
}

function OverlayBorder12() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[48px] left-[120.48px] right-[465.25px] rounded-[12px] top-[165px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[calc(50%+0.19px)] text-[14px] text-[rgba(255,255,255,0.4)] text-center top-[23px] w-[57.987px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Manuelle</p>
      </div>
    </div>
  );
}

function OverlayBorder13() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[48px] left-[234.75px] right-[350.98px] rounded-[12px] top-[165px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[14px] text-[rgba(255,255,255,0.4)] text-center top-[23px] w-[79.071px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Peu importe</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="-translate-y-1/2 absolute h-[18px] left-[18px] overflow-clip right-[40px] top-1/2" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[14px] text-white top-[9px] w-[79.071px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[18px]">Peu importe</p>
      </div>
    </div>
  );
}

function Options2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[48px] left-[351px] right-0 rounded-[12px] top-[165px]" data-name="Options">
      <select className="absolute inset-0 bg-transparent border-none outline-none text-white text-[14px] px-[18px] w-full h-full appearance-none cursor-pointer [&>option]:bg-[#181818]">
        <option value="">Peu importe</option>
        <option>Essence</option>
        <option>Diesel</option>
        <option>Hybride</option>
        <option>Hybride rechargeable</option>
        <option>Électrique</option>
        <option>GPL</option>
      </select>
    </div>
  );
}

function Section1LeVehicule() {
  const [boite, setBoite] = useState<'automatique' | 'manuelle' | 'peuImporte'>('automatique');

  return (
    <div className="absolute h-[213px] left-[40px] right-[40px] top-[119px]" data-name="SECTION 1 : Le véhicule">
      <HorizontalBorder2 />
      <Label />
      <Options />
      <div className="absolute border-[rgba(255,255,255,0.4)] border-l-4 border-r-4 border-solid border-t-5 h-[5px] left-[198px] right-[484px] top-[94.5px]" data-name="Border" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[13px] justify-center leading-[0] left-[234px] right-[403.78px] text-[11px] text-[rgba(255,255,255,0.25)] top-[59.5px] tracking-[0.88px] uppercase">
        <p className="leading-[normal]">Modèle</p>
      </div>
      <Input />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[13px] justify-center leading-[0] left-[468px] right-[107.04px] text-[11px] text-[rgba(255,255,255,0.25)] top-[59.5px] tracking-[0.88px] uppercase">
        <p className="leading-[normal]">Année souhaitée</p>
      </div>
      <Options1 />
      <div className="absolute border-[rgba(255,255,255,0.4)] border-l-4 border-r-4 border-solid border-t-5 h-[5px] left-[666px] right-[16px] top-[94.5px]" data-name="Border" />
      <Label1 />
      {/* Automatique */}
      <div
        className={`absolute border border-solid h-[48px] left-0 right-[579.52px] rounded-[12px] top-[165px] cursor-pointer transition-colors ${boite === 'automatique' ? 'bg-[rgba(188,255,61,0.08)] border-[#bcff3d]' : 'bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)]'}`}
        onClick={() => setBoite('automatique')}
      >
        <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[18px] justify-center leading-[0] left-[calc(50%+0.17px)] text-[14px] text-center top-[23px] w-[88.817px] transition-colors ${boite === 'automatique' ? "font-['DM_Sans:SemiBold',sans-serif] font-semibold text-[#bcff3d]" : "font-['DM_Sans:Regular',sans-serif] font-normal text-[rgba(255,255,255,0.4)]"}`} style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Automatique</p>
        </div>
      </div>
      {/* Manuelle */}
      <div
        className={`absolute border border-solid h-[48px] left-[120.48px] right-[465.25px] rounded-[12px] top-[165px] cursor-pointer transition-colors ${boite === 'manuelle' ? 'bg-[rgba(188,255,61,0.08)] border-[#bcff3d]' : 'bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)]'}`}
        onClick={() => setBoite('manuelle')}
      >
        <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[18px] justify-center leading-[0] left-[calc(50%+0.19px)] text-[14px] text-center top-[23px] w-[57.987px] transition-colors ${boite === 'manuelle' ? "font-['DM_Sans:SemiBold',sans-serif] font-semibold text-[#bcff3d]" : "font-['DM_Sans:Regular',sans-serif] font-normal text-[rgba(255,255,255,0.4)]"}`} style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Manuelle</p>
        </div>
      </div>
      {/* Peu importe */}
      <div
        className={`absolute border border-solid h-[48px] left-[234.75px] right-[350.98px] rounded-[12px] top-[165px] cursor-pointer transition-colors ${boite === 'peuImporte' ? 'bg-[rgba(188,255,61,0.08)] border-[#bcff3d]' : 'bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)]'}`}
        onClick={() => setBoite('peuImporte')}
      >
        <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[18px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[14px] text-center top-[23px] w-[79.071px] transition-colors ${boite === 'peuImporte' ? "font-['DM_Sans:SemiBold',sans-serif] font-semibold text-[#bcff3d]" : "font-['DM_Sans:Regular',sans-serif] font-normal text-[rgba(255,255,255,0.4)]"}`} style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Peu importe</p>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[13px] justify-center leading-[0] left-[351px] right-[263.16px] text-[11px] text-[rgba(255,255,255,0.25)] top-[151.5px] tracking-[0.88px] uppercase">
        <p className="leading-[normal]">Carburant</p>
      </div>
      <Options2 />
      <div className="absolute border-[rgba(255,255,255,0.4)] border-l-4 border-r-4 border-solid border-t-5 h-[5px] left-[666px] right-[16px] top-[186.5px]" data-name="Border" />
    </div>
  );
}

function Svg17() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[12px] top-[calc(50%-8px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.p26d87d00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[29px] left-0 right-0 top-0" data-name="HorizontalBorder">
      <Svg17 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[12px] justify-center leading-[0] left-[21px] text-[10px] text-[rgba(255,255,255,0.25)] top-[calc(50%-8px)] tracking-[1.4px] uppercase w-[155.09px]">
        <p className="leading-[normal]">Votre budget maximum</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#bcff3d] h-[22px] left-[105.47px] right-[562.53px] rounded-[11px] top-[-9px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[11px] shadow-[0px_0px_0px_4px_rgba(188,255,61,0.15)] size-[22px] top-0" data-name="Overlay+Shadow" />
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.08)] h-[4px] left-0 right-0 rounded-[4px] top-[116px]" data-name="Input">
      <Background />
    </div>
  );
}

function Section2Budget() {
  const [budget, setBudget] = useState(20000);
  const min = 5000;
  const max = 100000;
  const pct = ((budget - min) / (max - min)) * 100;

  return (
    <div className="absolute h-[142px] left-[40px] right-[40px] top-[368px]" data-name="SECTION 2 : Budget">
      <HorizontalBorder3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[32px] justify-center leading-[0] left-0 right-[501.26px] text-[#bcff3d] text-[32px] top-[69px]">
        <p className="leading-[32px]">{budget.toLocaleString("fr-FR")}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] left-[188.39px] right-[489.05px] text-[16px] text-[rgba(255,255,255,0.4)] top-[73.5px]">
        <p className="leading-[16px]">€</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] left-0 right-[566.34px] text-[12px] text-[rgba(255,255,255,0.4)] top-[92.5px]">
        <p className="leading-[normal]">budget maximum TTC</p>
      </div>
      {/* Slider interactif */}
      <div className="absolute left-0 right-0 top-[104px] h-[28px]">
        <div className="absolute left-0 right-0 h-[4px] top-[12px] bg-[rgba(255,255,255,0.08)] rounded-[4px]" />
        <div className="absolute left-0 h-[4px] top-[12px] bg-[#bcff3d] rounded-[4px]" style={{ width: `${pct}%` }} />
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-[22px] bg-[#bcff3d] rounded-full shadow-[0px_0px_0px_4px_rgba(188,255,61,0.15)] pointer-events-none"
          style={{ left: `${pct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={1000}
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[12px] justify-center leading-[0] left-0 right-[650.38px] text-[10px] text-[rgba(255,255,255,0.25)] top-[136px]">
        <p className="leading-[normal]">5 000 €</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[12px] justify-center leading-[0] left-[154.98px] right-[489.38px] text-[10px] text-[rgba(255,255,255,0.25)] top-[136px]">
        <p className="leading-[normal]">25 000 €</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[12px] justify-center leading-[0] left-[315.97px] right-[327.06px] text-[10px] text-[rgba(255,255,255,0.25)] top-[136px]">
        <p className="leading-[normal]">50 000 €</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[12px] justify-center leading-[0] left-[478.28px] right-[166.85px] text-[10px] text-[rgba(255,255,255,0.25)] top-[136px]">
        <p className="leading-[normal]">75 000 €</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[12px] justify-center leading-[0] left-[638.5px] right-[-0.34px] text-[10px] text-[rgba(255,255,255,0.25)] top-[136px]">
        <p className="leading-[normal]">100 000 €</p>
      </div>
    </div>
  );
}

function Svg18() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[12px] top-[calc(50%-8px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_6_1687)" id="SVG">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #BCFF3D)" />
          <path d="M6 3V6L8 7" id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" />
        </g>
        <defs>
          <clipPath id="clip0_6_1687">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[29px] left-0 right-0 top-0" data-name="HorizontalBorder">
      <Svg18 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[12px] justify-center leading-[0] left-[21px] text-[10px] text-[rgba(255,255,255,0.25)] top-[calc(50%-8px)] tracking-[1.4px] uppercase w-[227.296px]">
        <p className="leading-[normal]">Quand souhaitez-vous acheter ?</p>
      </div>
    </div>
  );
}

function ParagraphOverlayBorder() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.08)] border border-[#bcff3d] border-solid h-[98px] leading-[0] left-0 right-[525px] rounded-[12px] text-[#bcff3d] text-center top-[53px]" data-name="Paragraph+Overlay+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[24px] justify-center left-[77px] right-[76.7px] text-[18px] top-[28px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">⚡</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[17px] justify-center left-[31.28px] right-[29.08px] text-[13px] top-[54.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Immédiatement</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[14px] justify-center left-[37.83px] opacity-60 right-[37.51px] text-[11px] top-[73px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Dès que possible</p>
      </div>
    </div>
  );
}

function ParagraphOverlayBorder1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[98px] leading-[0] left-[175px] right-[350px] rounded-[12px] text-[rgba(255,255,255,0.4)] text-center top-[53px]" data-name="Paragraph+Overlay+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[24px] justify-center left-[74.75px] right-[74.39px] text-[18px] top-[28px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">📅</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[17px] justify-center left-[34.58px] right-[33.22px] text-[13px] top-[54.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Dans 1 à 3 mois</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[14px] justify-center left-[24.77px] opacity-60 right-[24.21px] text-[11px] top-[73px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Je prépare mon projet</p>
      </div>
    </div>
  );
}

function ParagraphOverlayBorder2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[98px] leading-[0] left-[350px] right-[175px] rounded-[12px] text-[rgba(255,255,255,0.4)] text-center top-[53px]" data-name="Paragraph+Overlay+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[24px] justify-center left-[74.75px] right-[74.39px] text-[18px] top-[28px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">🗓️</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[17px] justify-center left-[32.73px] right-[31.64px] text-[13px] top-[54.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Dans 3 à 6 mois</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[14px] justify-center left-[39.89px] opacity-60 right-[39.58px] text-[11px] top-[73px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Je me renseigne</p>
      </div>
    </div>
  );
}

function ParagraphOverlayBorder3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[98px] leading-[0] left-[525px] right-0 rounded-[12px] text-[rgba(255,255,255,0.4)] text-center top-[53px]" data-name="Paragraph+Overlay+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[24px] justify-center left-[74.75px] right-[74.39px] text-[18px] top-[28px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">🔭</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[17px] justify-center left-[45.8px] right-[45.17px] text-[13px] top-[54.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">+ de 6 mois</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[14px] justify-center left-[54.06px] opacity-60 right-[53.71px] text-[11px] top-[73px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Pas pressé</p>
      </div>
    </div>
  );
}

function Section3HorizonDachat() {
  const [horizon, setHorizon] = useState<'immediat' | '1-3mois' | '3-6mois' | '6plus'>('immediat');

  const card = (val: typeof horizon, active: boolean) =>
    `absolute border border-solid h-[98px] rounded-[12px] top-[53px] cursor-pointer transition-colors ${active ? 'bg-[rgba(188,255,61,0.08)] border-[#bcff3d] text-[#bcff3d]' : 'bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.4)]'}`;

  return (
    <div className="absolute h-[151px] left-[40px] right-[40px] top-[542px]" data-name="SECTION 3 : Horizon d'achat">
      <HorizontalBorder4 />
      {/* Immédiatement */}
      <div className={`${card('immediat', horizon === 'immediat')} left-0 right-[525px]`} onClick={() => setHorizon('immediat')}>
        <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[24px] justify-center left-[77px] right-[76.7px] text-[18px] top-[28px]" style={{ fontVariationSettings: "'opsz' 14" }}><p>⚡</p></div>
        <div className={`-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[17px] justify-center left-[31.28px] right-[29.08px] text-[13px] top-[54.5px]`} style={{ fontVariationSettings: "'opsz' 14" }}><p className="leading-[normal]">Immédiatement</p></div>
        <div className={`-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[14px] justify-center left-[37.83px] opacity-60 right-[37.51px] text-[11px] top-[73px]`} style={{ fontVariationSettings: "'opsz' 14" }}><p className="leading-[normal]">Dès que possible</p></div>
      </div>
      {/* Dans 1 à 3 mois */}
      <div className={`${card('1-3mois', horizon === '1-3mois')} left-[175px] right-[350px]`} onClick={() => setHorizon('1-3mois')}>
        <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[24px] justify-center left-[74.75px] right-[74.39px] text-[18px] top-[28px]" style={{ fontVariationSettings: "'opsz' 14" }}><p>📅</p></div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[17px] justify-center left-[34.58px] right-[33.22px] text-[13px] top-[54.5px]" style={{ fontVariationSettings: "'opsz' 14" }}><p className="leading-[normal]">Dans 1 à 3 mois</p></div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[14px] justify-center left-[24.77px] opacity-60 right-[24.21px] text-[11px] top-[73px]" style={{ fontVariationSettings: "'opsz' 14" }}><p className="leading-[normal]">Je prépare mon projet</p></div>
      </div>
      {/* Dans 3 à 6 mois */}
      <div className={`${card('3-6mois', horizon === '3-6mois')} left-[350px] right-[175px]`} onClick={() => setHorizon('3-6mois')}>
        <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[24px] justify-center left-[74.75px] right-[74.39px] text-[18px] top-[28px]" style={{ fontVariationSettings: "'opsz' 14" }}><p>🗓️</p></div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[17px] justify-center left-[32.73px] right-[31.64px] text-[13px] top-[54.5px]" style={{ fontVariationSettings: "'opsz' 14" }}><p className="leading-[normal]">Dans 3 à 6 mois</p></div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[14px] justify-center left-[39.89px] opacity-60 right-[39.58px] text-[11px] top-[73px]" style={{ fontVariationSettings: "'opsz' 14" }}><p className="leading-[normal]">Je me renseigne</p></div>
      </div>
      {/* + de 6 mois */}
      <div className={`${card('6plus', horizon === '6plus')} left-[525px] right-0`} onClick={() => setHorizon('6plus')}>
        <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[24px] justify-center left-[74.75px] right-[74.39px] text-[18px] top-[28px]" style={{ fontVariationSettings: "'opsz' 14" }}><p>🔭</p></div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[17px] justify-center left-[45.8px] right-[45.17px] text-[13px] top-[54.5px]" style={{ fontVariationSettings: "'opsz' 14" }}><p className="leading-[normal]">+ de 6 mois</p></div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[14px] justify-center left-[54.06px] opacity-60 right-[53.71px] text-[11px] top-[73px]" style={{ fontVariationSettings: "'opsz' 14" }}><p className="leading-[normal]">Pas pressé</p></div>
      </div>
    </div>
  );
}

function Svg19() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[12px] top-[calc(50%-8px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.p2755b100} id="Vector" stroke="var(--stroke-0, #BCFF3D)" />
          <path d="M7 1V4H10" id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[29px] left-0 right-0 top-0" data-name="HorizontalBorder">
      <Svg19 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[12px] justify-center leading-[0] left-[21px] text-[10px] text-[rgba(255,255,255,0.25)] top-[calc(50%-8px)] tracking-[1.4px] uppercase w-[223.393px]">
        <p className="leading-[normal]">Précisions sur votre recherche</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute h-[13px] leading-[0] left-0 right-0 text-[rgba(255,255,255,0.25)] top-[53px] tracking-[0.88px]" data-name="Label">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[13px] justify-center left-0 text-[11px] top-1/2 uppercase w-[153.589px]">
        <p className="leading-[normal]">Décrivez votre projet</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[12px] justify-center left-[158.27px] text-[10px] top-1/2 w-[61.719px]">
        <p className="leading-[normal]">(optionnel)</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[88px] left-0 overflow-auto right-0 rounded-[12px] top-[73px]" data-name="Textarea">
      <textarea className="absolute inset-0 bg-transparent border-none outline-none text-white text-[14px] px-[18px] py-[14px] w-full h-full resize-none placeholder:text-[rgba(255,255,255,0.25)]" placeholder="Ex : je cherche une berline familiale fiable pour usage quotidien + autoroute, kilométrage < 60 000 km, de préférence en noir ou gris…" />
    </div>
  );
}

function Section4Notes() {
  return (
    <div className="absolute h-[161px] left-[40px] right-[40px] top-[729px]" data-name="SECTION 4 : Notes">
      <HorizontalBorder5 />
      <Label2 />
      <Textarea />
    </div>
  );
}

function Svg20() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[12px] top-[calc(50%-8px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.p1abc700} id="Vector" stroke="var(--stroke-0, #BCFF3D)" />
          <path d={svgPaths.p20933800} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalBorder6() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[29px] left-0 right-0 top-0" data-name="HorizontalBorder">
      <Svg20 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[12px] justify-center leading-[0] left-[21px] text-[10px] text-[rgba(255,255,255,0.25)] top-[calc(50%-8px)] tracking-[1.4px] uppercase w-[126.345px]">
        <p className="leading-[normal]">Vos coordonnées</p>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[13px] leading-[0] left-0 right-[351px] text-[11px] top-[53px] tracking-[0.88px] uppercase" data-name="Label">
      <div className="-translate-y-1/2 absolute flex flex-col h-[13px] justify-center left-0 text-[rgba(255,255,255,0.25)] top-1/2 w-[53.954px]">
        <p className="leading-[normal]">Prénom</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[13px] justify-center left-[58.59px] text-[#bcff3d] top-1/2 w-[6.95px]">
        <p className="leading-[normal]">*</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[18px] left-[18px] overflow-clip right-[18px] top-[14px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[14px] text-[rgba(255,255,255,0.25)] top-[9px] w-[31.015px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Jean</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[48px] left-0 overflow-clip right-[351px] rounded-[12px] top-[73px]" data-name="Input">
      <input className="absolute inset-0 bg-transparent border-none outline-none text-white text-[14px] px-[18px] w-full h-full placeholder:text-[rgba(255,255,255,0.25)]" placeholder="Jean" type="text" autoComplete="given-name" />
    </div>
  );
}

function Label4() {
  return (
    <div className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[13px] leading-[0] left-[351px] right-0 text-[11px] top-[53px] tracking-[0.88px] uppercase" data-name="Label">
      <div className="-translate-y-1/2 absolute flex flex-col h-[13px] justify-center left-0 text-[rgba(255,255,255,0.25)] top-1/2 w-[30.432px]">
        <p className="leading-[normal]">Nom</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[13px] justify-center left-[35.05px] text-[#bcff3d] top-1/2 w-[6.95px]">
        <p className="leading-[normal]">*</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[18px] left-[18px] overflow-clip right-[18px] top-[14px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[14px] text-[rgba(255,255,255,0.25)] top-[9px] w-[48.598px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Dupont</p>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[48px] left-[351px] overflow-clip right-0 rounded-[12px] top-[73px]" data-name="Input">
      <input className="absolute inset-0 bg-transparent border-none outline-none text-white text-[14px] px-[18px] w-full h-full placeholder:text-[rgba(255,255,255,0.25)]" placeholder="Dupont" type="text" autoComplete="family-name" />
    </div>
  );
}

function Label5() {
  return (
    <div className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[13px] leading-[0] left-0 right-0 text-[11px] top-[133px] tracking-[0.88px] uppercase" data-name="Label">
      <div className="-translate-y-1/2 absolute flex flex-col h-[13px] justify-center left-0 text-[rgba(255,255,255,0.25)] top-1/2 w-[37.483px]">
        <p className="leading-[normal]">Email</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[13px] justify-center left-[42.17px] text-[#bcff3d] top-1/2 w-[6.95px]">
        <p className="leading-[normal]">*</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[18px] left-[18px] overflow-clip right-[18px] top-[14px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[14px] text-[rgba(255,255,255,0.25)] top-[9px] w-[157.652px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">jean.dupont@email.com</p>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[48px] left-0 overflow-clip right-0 rounded-[12px] top-[153px]" data-name="Input">
      <input className="absolute inset-0 bg-transparent border-none outline-none text-white text-[14px] px-[18px] w-full h-full placeholder:text-[rgba(255,255,255,0.25)]" placeholder="jean.dupont@email.com" type="email" autoComplete="email" />
    </div>
  );
}

function Label6() {
  return (
    <div className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[13px] leading-[0] left-0 right-0 text-[11px] top-[235.39px] tracking-[0.88px] uppercase" data-name="Label">
      <div className="-translate-y-1/2 absolute flex flex-col h-[13px] justify-center left-0 text-[rgba(255,255,255,0.25)] top-1/2 w-[72.832px]">
        <p className="leading-[normal]">Téléphone</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[13px] justify-center left-[77.52px] text-[#bcff3d] top-1/2 w-[6.95px]">
        <p className="leading-[normal]">*</p>
      </div>
    </div>
  );
}

function OverlayBorder14() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)] border-b border-l border-solid border-t h-[48px] left-0 right-[608.23px] rounded-bl-[12px] rounded-tl-[12px] top-[255.39px]" data-name="Overlay+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[14px] text-[14px] text-[rgba(255,255,255,0.55)] top-1/2 w-[53.132px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">🇫🇷 +33</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[18px] left-[18px] overflow-clip right-[18px] top-[14px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[14px] text-[rgba(255,255,255,0.25)] top-[9px] w-[100.655px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">6 00 00 00 00</p>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[48px] left-[81.77px] overflow-clip right-0 rounded-br-[12px] rounded-tr-[12px] top-[255.39px]" data-name="Input">
      <input className="absolute inset-0 bg-transparent border-none outline-none text-white text-[14px] px-[18px] w-full h-full placeholder:text-[rgba(255,255,255,0.25)]" placeholder="6 00 00 00 00" type="tel" autoComplete="tel" />
    </div>
  );
}

function Section4Coordonnees() {
  return (
    <div className="absolute h-[325.78px] left-[40px] right-[40px] top-[926px]" data-name="SECTION 4 : Coordonnées">
      <HorizontalBorder6 />
      <Label3 />
      <Input2 />
      <Label4 />
      <Input3 />
      <Label5 />
      <Input4 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-0 right-[339.91px] text-[11px] text-[rgba(255,255,255,0.25)] top-[215.5px]">
        <p className="leading-[15.4px]">Notre équipe vous enverra la sélection de véhicules à cette adresse.</p>
      </div>
      <Label6 />
      <OverlayBorder14 />
      <Input5 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-0 right-[405.99px] text-[11px] text-[rgba(255,255,255,0.25)] top-[317.89px]">
        <p className="leading-[15.4px]">Pour vous rappeler directement avec nos propositions.</p>
      </div>
    </div>
  );
}

function Svg21() {
  return (
    <div className="absolute h-[14px] left-[40px] overflow-clip right-[716px] top-[26px]" data-name="SVG">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.34%_-6.25%_-5.59%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 12.9419">
            <path d={svgPaths.p23267600} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg22() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+98.88px)] size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p25acf100} id="Vector" stroke="var(--stroke-0, #0C0D0C)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  const navigate = useNavigate();
  return (
    <div className="absolute bg-[#bcff3d] h-[54px] left-[40px] right-[40px] rounded-[14px] top-[61.18px] cursor-pointer" data-name="Button" onClick={() => navigate("/acheter-votre-vehicule/etape-2")}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] left-[calc(50%-12.82px)] text-[#0c0d0c] text-[15px] text-center top-1/2 tracking-[0.3px] w-[188.096px]">
        <p className="leading-[normal]">Envoyer ma demande</p>
      </div>
      <Svg22 />
    </div>
  );
}

function Svg23() {
  return (
    <div className="absolute h-[11px] left-[187.2px] opacity-70 overflow-clip right-[571.8px] top-[128.18px]" data-name="SVG">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.34%_-6.25%_-5.59%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.25 10.1686">
            <path d={svgPaths.p11f38900} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg24() {
  return (
    <div className="absolute h-[11px] left-[318.17px] opacity-70 overflow-clip right-[440.83px] top-[128.18px]" data-name="SVG">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0833 10.0833">
            <path d={svgPaths.p3a33bd80} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[0_-11.18%_-11.18%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.49664 4.07661">
            <path d={svgPaths.p3a71a880} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg25() {
  return (
    <div className="absolute h-[11px] left-[449.05px] opacity-70 overflow-clip right-[309.95px] top-[128.18px]" data-name="SVG">
      <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0833 8.25">
            <path d={svgPaths.p20fdb200} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[8.33%] right-[8.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-11.7%_-2.87%_-17.44%_-2.87%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.69234 4.14328">
            <path d={svgPaths.p3bda5600} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FormBody() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t h-[177.19px] left-0 right-0 top-[1303.78px]" data-name="form-body">
      <Svg21 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] left-[64px] right-[62.54px] text-[12px] text-[rgba(255,255,255,0.4)] top-[33.5px]">
        <p className="leading-[19.2px]">Vos données sont strictement confidentielles et utilisées uniquement pour répondre à votre demande de véhicule.</p>
      </div>
      <Button />
      <Svg23 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[203.2px] right-[471.48px] text-[11px] text-[rgba(255,255,255,0.25)] text-center top-[133.68px]">
        <p className="leading-[normal]">Sans engagement</p>
      </div>
      <Svg24 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[334.17px] right-[340.6px] text-[11px] text-[rgba(255,255,255,0.25)] text-center top-[133.68px]">
        <p className="leading-[normal]">Réponse sous 24h</p>
      </div>
      <Svg25 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[465.05px] right-[186.82px] text-[11px] text-[rgba(255,255,255,0.25)] text-center top-[133.68px]">
        <p className="leading-[normal]">Confirmation par email</p>
      </div>
    </div>
  );
}

function FormCard() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[1482.97px] left-[87px] overflow-clip right-[421px] rounded-[28px] top-[165.12px]" data-name="FORM CARD">
      <OverlayHorizontalBorder />
      <Section1LeVehicule />
      <Section2Budget />
      <Section3HorizonDachat />
      <Section4Notes />
      <Section4Coordonnees />
      <FormBody />
    </div>
  );
}

function FormSection() {
  return (
    <div className="absolute h-[1560.97px] left-[80px] right-[80px] top-[850.88px]" data-name="FORM SECTION">
      <div className="absolute bg-[rgba(255,255,255,0.08)] h-px left-[80px] right-[80px] top-0" data-name="Horizontal Divider" />
      <StepsNav />
      <OverlayBorder8 />
      <div className="absolute bottom-0 h-[1395.969970703125px] left-[880px] pointer-events-none top-[165px]">
        <Sidebar />
      </div>
      <FormCard />
    </div>
  );
}

function Svg26() {
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
    <div className="-translate-x-1/2 absolute bg-[#c8ec66] h-[40px] left-[calc(50%-341.34px)] rounded-[8px] top-[52px] w-[162.76px]" data-name="Link">
      <Svg26 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+12.18px)] not-italic text-[16px] text-black text-center top-[calc(50%-0.25px)] w-[107.125px]">
        <p className="leading-[24px]">06 19 93 37 65</p>
      </div>
    </div>
  );
}

function Svg27() {
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
    <div className="absolute h-[24px] left-[16px] right-[698.67px] top-[116px]" data-name="Link">
      <Svg27 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+12.16px)] not-italic text-[16px] text-center text-white top-[calc(50%-0.25px)] w-[161.595px]">
        <p className="leading-[24px]">contact@vroomparis.fr</p>
      </div>
    </div>
  );
}

function Svg28() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.002px] left-[calc(50%-483.93px)] top-[calc(50%+4.5px)] w-[14.15px]" data-name="SVG">
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
    <div className="absolute h-[24px] left-0 right-0 top-0" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[127.557px]">
        <p className="leading-[24px]">À propos de nous</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-[32px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[92.182px]">
        <p className="leading-[24px]">Nos services</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-[64px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.14px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[138.727px]">
        <p className="leading-[24px]">Nos emplacements</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-[96px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[31.227px]">
        <p className="leading-[24px]">FAQ</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute h-[120px] left-[357.33px] right-[357.33px] top-[116px]" data-name="Nav">
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-0" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[189.407px]">
        <p className="leading-[24px]">Politique de confidentialité</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-[32px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[151.447px]">
        <p className="leading-[24px]">Conditions générales</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-[64px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.15px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[152.928px]">
        <p className="leading-[24px]">Politique des cookies</p>
      </div>
    </div>
  );
}

function Nav1() {
  return (
    <div className="absolute h-[88px] left-[698.66px] right-[16px] top-[52px]" data-name="Nav">
      <Link6 />
      <Link7 />
      <Link8 />
    </div>
  );
}

function Svg29() {
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

function Link9() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[133px] left-[calc(50%+305.33px)] top-[164px] w-[20px]" data-name="Link">
      <Svg29 />
    </div>
  );
}

function Svg30() {
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

function Link10() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[133px] left-[calc(50%+341.33px)] top-[164px] w-[20px]" data-name="Link">
      <Svg30 />
    </div>
  );
}

function Svg31() {
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

function Link11() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[133px] left-[calc(50%+377.33px)] top-[164px] w-[20px]" data-name="Link">
      <Svg31 />
    </div>
  );
}

function HorizontalBorder7() {
  return (
    <div className="absolute border-[#1f2937] border-solid border-t h-[49px] left-[16px] right-[16px] top-[268px]" data-name="HorizontalBorder">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[#9ca3af] text-[16px] text-center top-[35.75px] w-[300.597px]">
        <p className="leading-[24px]">© 2025 Vroom Paris. Tous droits réservés.</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[317px] left-[208px] right-[208px] top-[48px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%-341.1px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[175.161px]">
        <p className="leading-[28px]">Qu’attendez-vous ?</p>
      </div>
      <Link />
      <Link1 />
      <Svg28 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[42.5px] justify-center leading-[0] left-[calc(50%-330.17px)] not-italic text-[16px] text-center text-white top-[175.75px] w-[284.77px]">
        <p className="leading-[24px] mb-0">75 Avenue des Champs-Élysées, 75008</p>
        <p className="leading-[24px]">Paris</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%+0.26px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[215.174px]">
        <p className="leading-[28px]">Informations générales :</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[42.5px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[#9ca3af] text-[16px] text-center top-[75.75px] w-[225.4px]">
        <p className="leading-[24px] mb-0">Bienvenue chez Vroom Paris, la</p>
        <p className="leading-[24px]">concession automobile.</p>
      </div>
      <Nav />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%+341.55px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[152.536px]">
        <p className="leading-[28px]">Mentions légales</p>
      </div>
      <Nav1 />
      <Link9 />
      <Link10 />
      <Link11 />
      <HorizontalBorder7 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#181818] h-[413px] left-[-2px] right-[2px] top-[2520px]" data-name="Footer">
      <Container8 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[1.24%_46.71%_96.65%_46.74%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94.4211 59.6792">
        <g id="Group 72">
          <g id="Vector">
            <mask fill="white" id="path-1-inside-1_6_286">
              <path d={svgPaths.p7bf8d00} />
            </mask>
            <path d={svgPaths.p7bf8d00} fill="var(--fill-0, white)" mask="url(#path-1-inside-1_6_286)" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </g>
          <path d={svgPaths.p23d76a00} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, white)" />
          <path d={svgPaths.p15f5b900} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

export default function FormulaireAcheterVotreVehicule() {
  return (
    <div className="bg-[#181818] relative size-full" data-name="Formulaire acheter votre véhicule">
      <div className="absolute h-[742.87px] left-[-464px] top-[-197px] w-[2664.781px]" data-name="Union">
        <div className="absolute inset-[-26.92%_-7.51%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3064.78 1142.87">
            <g filter="url(#filter0_f_6_2326)" id="Union">
              <path d={svgPaths.p3dd141f0} fill="url(#paint0_linear_6_2326)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1142.87" id="filter0_f_6_2326" width="3064.78" x="-7.33021e-06" y="3.20925e-06">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_6_2326" stdDeviation="100" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_2326" x1="35.5207" x2="1147.95" y1="742.236" y2="-1039.64">
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
      <SectionHero />
      <FormSection />
      <Footer />
      <div className="absolute flex inset-[1.45%_2.86%_97.7%_94.02%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-2.22%_-4.17%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 47">
                <path d="M25 1V46M13 1V46M1 1V46" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Group />
    </div>
  );
}