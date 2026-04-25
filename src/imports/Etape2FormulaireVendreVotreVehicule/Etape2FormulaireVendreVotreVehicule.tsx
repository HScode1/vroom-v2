import { useNavigate } from "react-router";
import svgPaths from "./svg-k1hd67t7ul";

function Svg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[15px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g clipPath="url(#clip0_6_318)" id="SVG">
          <path d={svgPaths.p2ad7a580} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.25" />
          <path d={svgPaths.p17be1d00} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.25" />
        </g>
        <defs>
          <clipPath id="clip0_6_318">
            <rect fill="white" height="15" width="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.1)] border border-[rgba(188,255,61,0.2)] border-solid h-[36px] left-[36px] rounded-[10px] top-1/2 w-[39px]" data-name="Overlay+Border">
      <Svg />
    </div>
  );
}

function OverlayHorizontalBorder() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)] border-b border-solid h-[73px] left-0 right-0 top-0" data-name="Overlay+HorizontalBorder">
      <OverlayBorder />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[88px] text-[11px] text-[rgba(255,255,255,0.4)] top-[37px] w-[267px]">
        <p className="leading-[normal]">Votre dossier a bien été transmis à notre équipe.</p>
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.05)] border border-[rgba(188,255,61,0.14)] border-solid h-[52px] left-[36px] rounded-[10px] top-[230px] w-[64px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[13px] justify-center leading-[0] left-[calc(50%+2px)] text-[#bcff3d] text-[10px] text-center top-[calc(50%+0.06px)] w-[30px]">
        <p className="leading-[normal]">Avant</p>
      </div>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.05)] border border-[rgba(188,255,61,0.14)] border-solid h-[52px] left-[108px] rounded-[10px] top-[230px] w-[64px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[13px] justify-center leading-[0] left-[calc(50%+2px)] text-[#bcff3d] text-[10px] text-center top-[calc(50%+0.06px)] w-[36px]">
        <p className="leading-[normal]">Arrière</p>
      </div>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.05)] border border-[rgba(188,255,61,0.14)] border-solid h-[52px] left-[180px] rounded-[10px] top-[230px] w-[64px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[13px] justify-center leading-[0] left-[calc(50%+1.5px)] text-[#bcff3d] text-[10px] text-center top-[calc(50%+0.06px)] w-[39px]">
        <p className="leading-[normal]">Côté G.</p>
      </div>
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid bottom-[32px] left-[252px] rounded-[10px] top-[230px] w-[80.48px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[calc(50%+1.76px)] text-[12px] text-[rgba(255,255,255,0.4)] text-center top-[calc(50%-0.44px)] w-[50px]">
        <p className="leading-[normal]">+1 photo</p>
      </div>
    </div>
  );
}

function ParagraphBackground() {
  return (
    <div className="absolute bg-[#1d1d1d] h-[74px] left-0 right-[431.34px] top-0" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center left-[20px] text-[11px] text-[rgba(255,255,255,0.25)] top-[25px] tracking-[0.88px] uppercase w-[55px]">
        <p className="leading-[normal]">Marque</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[18px] justify-center left-[20px] text-[14px] text-[rgba(255,255,255,0.85)] top-[47px] w-[55px]">
        <p className="leading-[normal]">Renault</p>
      </div>
    </div>
  );
}

function ParagraphBackground1() {
  return (
    <div className="absolute bg-[#1d1d1d] h-[74px] left-[215.66px] right-[215.67px] top-0" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center left-[20px] text-[11px] text-[rgba(255,255,255,0.25)] top-[25px] tracking-[0.88px] uppercase w-[53px]">
        <p className="leading-[normal]">Modèle</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[18px] justify-center left-[20px] text-[14px] text-[rgba(255,255,255,0.85)] top-[47px] w-[42px]">
        <p className="leading-[normal]">Clio V</p>
      </div>
    </div>
  );
}

function ParagraphBackground2() {
  return (
    <div className="absolute bg-[#1d1d1d] h-[74px] left-[431.33px] right-0 top-0" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center left-[20px] text-[11px] text-[rgba(255,255,255,0.25)] top-[25px] tracking-[0.88px] uppercase w-[55px]">
        <p className="leading-[normal]">Finition</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[18px] justify-center left-[20px] text-[14px] text-[rgba(255,255,255,0.85)] top-[47px] w-[45px]">
        <p className="leading-[normal]">Intens</p>
      </div>
    </div>
  );
}

function ParagraphBackground3() {
  return (
    <div className="absolute bg-[#1d1d1d] h-[74px] left-0 right-[431.34px] top-[75px]" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center left-[20px] text-[11px] text-[rgba(255,255,255,0.25)] top-[25px] tracking-[0.88px] uppercase w-[43px]">
        <p className="leading-[normal]">Année</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[18px] justify-center left-[20px] text-[14px] text-[rgba(255,255,255,0.85)] top-[47px] w-[33px]">
        <p className="leading-[normal]">2021</p>
      </div>
    </div>
  );
}

function ParagraphBackground4() {
  return (
    <div className="absolute bg-[#1d1d1d] h-[74px] left-[215.66px] right-[215.67px] top-[75px]" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center left-[20px] text-[11px] text-[rgba(255,255,255,0.25)] top-[25px] tracking-[0.88px] uppercase w-[88px]">
        <p className="leading-[normal]">Kilométrage</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[18px] justify-center left-[20px] text-[14px] text-[rgba(255,255,255,0.85)] top-[47px] w-[79px]">
        <p className="leading-[normal]">42 000 km</p>
      </div>
    </div>
  );
}

function ParagraphBackground5() {
  return (
    <div className="absolute bg-[#1d1d1d] h-[74px] left-[431.33px] right-0 top-[75px]" data-name="Paragraph+Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center left-[20px] text-[11px] text-[rgba(255,255,255,0.25)] top-[25px] tracking-[0.88px] uppercase w-[38px]">
        <p className="leading-[normal]">Boîte</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[18px] justify-center left-[20px] text-[14px] text-[rgba(255,255,255,0.85)] top-[47px] w-[66px]">
        <p className="leading-[normal]">Manuelle</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.08)] h-[149px] leading-[0] left-[26px] overflow-clip right-[25px] rounded-[16px] top-[61.56px]" data-name="Overlay">
      <ParagraphBackground />
      <ParagraphBackground1 />
      <ParagraphBackground2 />
      <ParagraphBackground3 />
      <ParagraphBackground4 />
      <ParagraphBackground5 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[10.65%_92.68%_86.09%_5.74%]">
      <div className="absolute inset-[10.65%_92.68%_86.09%_5.74%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 10.2593">
          <path d={svgPaths.p20d85e00} fill="var(--fill-0, #BCFF3D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[calc(10.65%+0.11px)_92.68%_calc(86.09%-0.14px)_5.74%]">
      <div className="absolute inset-[12.28%_92.92%_87.18%_5.98%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.7 1.71084">
          <path d={svgPaths.p96b76f1} fill="var(--fill-0, #BCFF3D)" id="Vector" />
        </svg>
      </div>
      <Group1 />
    </div>
  );
}

function RecapVehicule() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[315px] left-0 right-0 top-[468.44px]" data-name="recap véhicule">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[13px] justify-center leading-[0] left-[56px] text-[10px] text-[rgba(255,255,255,0.25)] top-[calc(50%-118.5px)] tracking-[1.4px] uppercase w-[205px]">
        <p className="leading-[normal]">Véhicule soumis à la reprise</p>
      </div>
      <OverlayBorder1 />
      <OverlayBorder2 />
      <OverlayBorder3 />
      <OverlayBorder4 />
      <Overlay />
      <Group2 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="-translate-y-1/2 absolute h-[11px] left-[36px] top-[calc(50%-41px)] w-[12px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11">
        <g id="SVG">
          <path d={svgPaths.p23a731c0} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
          <path d={svgPaths.p18b54af2} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
        </g>
      </svg>
    </div>
  );
}

function Svg2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[13px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="SVG">
          <path d={svgPaths.p2a8a0180} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
          <path d={svgPaths.p2be25f80} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder6() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.08)] border border-[rgba(188,255,61,0.14)] border-solid left-[18px] rounded-[9px] size-[34px] top-1/2" data-name="Overlay+Border">
      <Svg2 />
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid inset-[55px_365px_28px_36px] rounded-[14px]" data-name="Overlay+Border">
      <OverlayBorder6 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[64px] text-[10px] text-[rgba(255,255,255,0.25)] top-[22.5px] tracking-[0.8px] uppercase w-[35px]">
        <p className="leading-[normal]">Email</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] left-[64px] text-[13px] text-[rgba(255,255,255,0.8)] top-[41.5px] w-[161px]">
        <p className="leading-[normal]">jean.dupont@email.com</p>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[13px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_6_1943)" id="SVG">
          <path d={svgPaths.p2873ba00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.08333" />
        </g>
        <defs>
          <clipPath id="clip0_6_1943">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder8() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.08)] border border-[rgba(188,255,61,0.14)] border-solid h-[34px] left-[18px] rounded-[9px] top-1/2 w-[37px]" data-name="Overlay+Border">
      <Svg3 />
    </div>
  );
}

function OverlayBorder7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid inset-[55px_36px_28px_365px] rounded-[14px]" data-name="Overlay+Border">
      <OverlayBorder8 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[67px] text-[10px] text-[rgba(255,255,255,0.25)] top-[22.5px] tracking-[0.8px] uppercase w-[68px]">
        <p className="leading-[normal]">Téléphone</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] left-[67px] text-[13px] text-[rgba(255,255,255,0.8)] top-[41.5px] w-[115px]">
        <p className="leading-[normal]">+33 6 12 34 56 78</p>
      </div>
    </div>
  );
}

function Coordonnees() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[152px] left-0 right-0 top-[783.44px]" data-name="coordonnées">
      <Svg1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[13px] justify-center leading-[0] left-[56px] text-[10px] text-[rgba(255,255,255,0.25)] top-[calc(50%-41px)] tracking-[1.4px] uppercase w-[183px]">
        <p className="leading-[normal]">Coordonnées de contact</p>
      </div>
      <OverlayBorder5 />
      <OverlayBorder7 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-101.53px)] size-[15px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p11cf9000} id="Vector" stroke="var(--stroke-0, #0C0D0C)" strokeWidth="1.25" />
          <path d={svgPaths.p20471ed0} id="Vector_2" stroke="var(--stroke-0, #0C0D0C)" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#bcff3d] h-[50px] left-[36px] right-[365px] rounded-[12px] top-[28px]" data-name="Button">
      <Svg4 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[calc(50%+19px)] text-[#0c0d0c] text-[14px] text-center top-[calc(50%+0.06px)] w-[208px]">
        <p className="leading-[normal]">Renvoyer la confirmation</p>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-[calc(50%-96.11px)] top-1/2 w-[15px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
        <g id="SVG">
          <path d={svgPaths.p27160a00} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.55" strokeWidth="1.16667" />
          <path d={svgPaths.p1d424b80} id="Vector_2" stroke="var(--stroke-0, white)" strokeOpacity="0.55" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  const navigate = useNavigate();
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[50px] left-[363px] right-[36px] rounded-[12px] top-[28px] cursor-pointer" data-name="Button" onClick={() => navigate("/vendre-votre-vehicule")}>
      <Svg5 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[calc(50%+20.39px)] text-[14px] text-[rgba(255,255,255,0.55)] text-center top-1/2 w-[198px]">
        <p className="leading-[normal]">Soumettre un autre véhicule</p>
      </div>
    </div>
  );
}

function Link() {
  const navigate = useNavigate();
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-[calc(50%-110.99px)] top-[calc(50%+29px)] w-[111.86px] cursor-pointer" data-name="Link" onClick={() => navigate("/vendre-votre-vehicule")}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%+4.49px)] text-[#bcff3d] text-[11px] text-center top-[6.56px] w-[120px]">
        <p className="leading-[normal]">Modifier ma demande</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-[calc(50%+13.65px)] top-[calc(50%+29px)] w-[109.03px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%+4.36px)] text-[#bcff3d] text-[11px] text-center top-[6.56px] w-[117px]">
        <p className="leading-[normal]">Annuler ma demande</p>
      </div>
    </div>
  );
}

function Link2() {
  const navigate = useNavigate();
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-[calc(50%+125.13px)] top-[calc(50%+29px)] w-[85.58px] cursor-pointer" data-name="Link" onClick={() => navigate("/")}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%+3.87px)] text-[#bcff3d] text-[11px] text-center top-[6.56px] w-[93px]">
        <p className="leading-[normal]">{`Retour à l'accueil`}</p>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="absolute h-[136px] left-0 right-0 top-[935.44px]" data-name="actions">
      <Button />
      <Button1 />
      <Link />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%-47.56px)] text-[11px] text-[rgba(255,255,255,0.1)] text-center top-[97px] w-[3px]">
        <p className="leading-[normal]">·</p>
      </div>
      <Link1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%+85.44px)] text-[11px] text-[rgba(255,255,255,0.1)] text-center top-[97px] w-[3px]">
        <p className="leading-[normal]">·</p>
      </div>
      <Link2 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[28px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="SVG">
          <path d={svgPaths.p1c099080} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="2.33333" />
          <path d={svgPaths.p39589180} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder9() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.12)] border border-[rgba(188,255,61,0.28)] border-solid inset-[59.22px_297.02px_267.22px_331.98px] rounded-[34px]" data-name="Overlay+Border">
      <Svg6 />
    </div>
  );
}

function Svg7() {
  return (
    <div className="-translate-y-1/2 absolute left-[18px] size-[12px] top-1/2" data-name="SVG">
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

function OverlayBorder10() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(188,255,61,0.08)] border border-[rgba(188,255,61,0.18)] border-solid h-[34px] left-[calc(50%+17.98px)] rounded-[100px] top-[320.22px] w-[391px]" data-name="Overlay+Border">
      <Svg7 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-[calc(50%+11.23px)] text-[#bcff3d] text-[12px] text-center top-1/2 w-[307.469px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Vous serez recontacté sous 24h avec votre estimation</p>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[395.44px] left-0 overflow-clip right-0 top-[73px]" data-name="HorizontalBorder">
      <div className="absolute border border-[rgba(188,255,61,0.16)] border-solid inset-[45.22px_278.02px_253.22px_312.98px] rounded-[48px]" data-name="Border" />
      <div className="absolute border border-[rgba(188,255,61,0.16)] border-solid inset-[45.22px_278.02px_253.22px_312.98px] rounded-[48px]" data-name="Border" />
      <div className="absolute border border-[rgba(188,255,61,0.16)] border-solid inset-[45.22px_278.02px_253.22px_312.98px] rounded-[48px]" data-name="Border" />
      <OverlayBorder9 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[34px] justify-center leading-[0] left-[calc(50%+0.69px)] text-[28px] text-center text-white top-[196px] w-[488.28px]">
        <p>
          <span className="leading-[32.2px]">{`Demande `}</span>
          <span className="leading-[32.2px] text-[#bcff3d]">bien reçue !</span>
        </p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[70px] justify-center leading-[0] left-[calc(50%+17.98px)] text-[15px] text-[rgba(255,255,255,0.55)] text-center top-[261.22px] w-[497px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="mb-0">
          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24.75px]">{`Merci `}</span>
          <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24.75px] text-[rgba(255,255,255,0.85)]">Jean Dupont</span>
          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24.75px]">. Votre dossier de reprise a été transmis à notre</span>
        </p>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] leading-[24.75px] mb-0">équipe. Un email de confirmation a été envoyé à</p>
        <p>
          <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[24.75px] text-[rgba(255,255,255,0.85)]">jean.dupont@email.com</span>
          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[24.75px]">.</span>
        </p>
      </div>
      <OverlayBorder10 />
    </div>
  );
}

function ConfirmationCard() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[1073px] left-[166px] overflow-clip right-[575px] rounded-[28px] top-[205px]" data-name="CONFIRMATION CARD">
      <OverlayHorizontalBorder />
      <RecapVehicule />
      <Coordonnees />
      <Actions />
      <HorizontalBorder />
    </div>
  );
}

function Svg8() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[14px] top-[calc(50%-138.7px)]" data-name="SVG">
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

function Svg9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[10px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="SVG">
          <path d={svgPaths.p1098da98} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder11() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(188,255,61,0.15)] border border-[rgba(188,255,61,0.3)] border-solid left-[calc(50%-142px)] rounded-[13px] size-[26px] top-[12px]" data-name="Overlay+Border">
      <Svg9 />
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[69px] left-[24px] right-[24px] top-[59px]" data-name="HorizontalBorder">
      <OverlayBorder11 />
      <div className="-translate-x-1/2 absolute bg-[rgba(188,255,61,0.25)] bottom-[16px] left-[calc(50%-142px)] top-[42px] w-px" data-name="Vertical Divider" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[40px] text-[13px] text-[rgba(255,255,255,0.8)] top-[23.5px] w-[115.025px]">
        <p className="leading-[normal]">Formulaire soumis</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[40px] text-[12px] text-[rgba(255,255,255,0.4)] top-[43px] w-[156px]">
        <p className="leading-[17.4px]">{`Dossier reçu · Aujourd'hui`}</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#bcff3d] left-[calc(50%-142px)] rounded-[13px] size-[26px] top-[12px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[calc(50%+0.17px)] text-[#0c0d0c] text-[10px] text-center top-1/2 w-[6.581px]">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[69px] left-[24px] right-[24px] top-[128px]" data-name="HorizontalBorder">
      <Background />
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.08)] bottom-[16px] left-[calc(50%-142px)] top-[42px] w-px" data-name="Vertical Divider" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[40px] text-[13px] text-[rgba(255,255,255,0.8)] top-[23.5px] w-[157.557px]">
        <p className="leading-[normal]">Analyse par notre équipe</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[40px] text-[12px] text-[rgba(255,255,255,0.4)] top-[43px] w-[271px]">
        <p className="leading-[17.4px]">Étude des informations et photos · En cours</p>
      </div>
    </div>
  );
}

function OverlayBorder12() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid left-[calc(50%-142px)] rounded-[13px] size-[26px] top-[12px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[10px] text-[rgba(255,255,255,0.25)] text-center top-1/2 w-[6.755px]">
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[69px] left-[24px] right-[24px] top-[197px]" data-name="HorizontalBorder">
      <OverlayBorder12 />
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.08)] bottom-[16px] left-[calc(50%-142px)] top-[42px] w-px" data-name="Vertical Divider" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[40px] text-[13px] text-[rgba(255,255,255,0.4)] top-[23.5px] w-[106.453px]">
        <p className="leading-[normal]">Estimation reçue</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[40px] text-[12px] text-[rgba(255,255,255,0.4)] top-[43px] w-[205px]">
        <p className="leading-[17.4px]">Par email et téléphone · Sous 24h</p>
      </div>
    </div>
  );
}

function OverlayBorder13() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid left-[calc(50%-142px)] rounded-[13px] size-[26px] top-[278px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[calc(50%+0.18px)] text-[10px] text-[rgba(255,255,255,0.25)] text-center top-1/2 w-[7.483px]">
        <p className="leading-[normal]">4</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid h-[344.39px] left-0 overflow-clip right-0 rounded-[20px] top-0" data-name="Background+Border">
      <Svg8 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[46px] text-[14px] text-white top-[calc(50%-138.7px)] w-[143.541px]">
        <p className="leading-[normal]">Prochaines étapes</p>
      </div>
      <HorizontalBorder1 />
      <HorizontalBorder2 />
      <HorizontalBorder3 />
      <OverlayBorder13 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[64px] text-[13px] text-[rgba(255,255,255,0.4)] top-[289.5px] w-[123.409px]">
        <p className="leading-[normal]">{`Dépôt & finalisation`}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[64px] text-[12px] text-[rgba(255,255,255,0.4)] top-[309px] w-[270px]">
        <p className="leading-[17.4px]">{`Si l'offre vous convient, dépôt en showroom`}</p>
      </div>
      <div className="absolute bottom-[-30px] right-[-30px] size-[120px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 120 120\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(8.4853 0 0 8.4853 60 60)\\'><stop stop-color=\\'rgba(188,255,61,0.07)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
    </div>
  );
}

function Svg10() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[14px] top-[calc(50%-58px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_6_1651)" id="SVG">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.16667" />
          <path d="M7 4.66667V7" id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.16667" />
          <path d="M7 9.33333H7.00583" id="Vector_3" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_6_1651">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg11() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[13px] top-[calc(50%-23px)]" data-name="SVG">
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
    <div className="-translate-y-1/2 absolute left-[24px] size-[13px] top-[calc(50%+4px)]" data-name="SVG">
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
    <div className="-translate-y-1/2 absolute left-[24px] size-[13px] top-[calc(50%+31px)]" data-name="SVG">
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
    <div className="-translate-y-1/2 absolute left-[24px] size-[13px] top-[calc(50%+58px)]" data-name="SVG">
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
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid h-[183px] left-0 overflow-clip right-0 rounded-[20px] top-[358.39px]" data-name="Background+Border">
      <Svg10 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[46px] text-[14px] text-white top-[calc(50%-58px)] w-[60.515px]">
        <p className="leading-[normal]">À savoir</p>
      </div>
      <Svg11 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%-23px)] w-[203px]">
        <p className="leading-[normal]">Gratuit et sans engagement</p>
      </div>
      <Svg12 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%+4px)] w-[252px]">
        <p className="leading-[normal]">Estimation personnalisée sous 24h</p>
      </div>
      <Svg13 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%+31px)] w-[280px]">
        <p className="leading-[normal]">{`Vous restez libre d'accepter ou refuser`}</p>
      </div>
      <Svg14 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%+58px)] w-[230px]">
        <p className="leading-[normal]">Paiement rapide à la finalisation</p>
      </div>
      <div className="absolute bottom-[-30px] right-[-30px] size-[120px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 120 120\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(8.4853 0 0 8.4853 60 60)\\'><stop stop-color=\\'rgba(188,255,61,0.07)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
    </div>
  );
}

function Svg15() {
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

function Svg16() {
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

function OverlayBorder14() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.05)] border border-[rgba(188,255,61,0.15)] border-solid h-[205px] left-0 overflow-clip right-0 rounded-[20px] top-[555.39px]" data-name="Overlay+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[46px] text-[#bcff3d] text-[14px] top-[calc(50%-69px)] w-[114.326px]">
        <p className="leading-[normal]">Une question ?</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[47px] text-[10px] text-[rgba(188,255,61,0.6)] top-[65.5px] tracking-[0.8px] uppercase w-[119px]">
        <p className="leading-[normal]">Téléphone</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[82.5px] w-[115.378px]">
        <p className="leading-[normal]">06 19 93 37 65</p>
      </div>
      <Svg15 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[47px] text-[10px] text-[rgba(188,255,61,0.6)] top-[109.5px] tracking-[0.8px] uppercase w-[32.706px]">
        <p className="leading-[normal]">Email</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[126.11px] w-[164px]">
        <p className="leading-[normal]">contact@vroomparis.fr</p>
      </div>
      <Svg16 />
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

function Sidebar() {
  return (
    <div className="h-[760.39px] pointer-events-auto sticky top-0" data-name="SIDEBAR">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <OverlayBorder14 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[1.9%_46.71%_94.87%_46.74%]">
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

function Svg17() {
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

function Link3() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#c8ec66] h-[40px] left-[calc(50%-341.34px)] rounded-[8px] top-[52px] w-[162.76px]" data-name="Link">
      <Svg17 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+12.18px)] not-italic text-[16px] text-black text-center top-[calc(50%-0.25px)] w-[107.125px]">
        <p className="leading-[24px]">06 70 76 07 19</p>
      </div>
    </div>
  );
}

function Svg18() {
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

function Link4() {
  return (
    <div className="absolute h-[24px] left-[16px] right-[698.67px] top-[116px]" data-name="Link">
      <Svg18 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+12.16px)] not-italic text-[16px] text-center text-white top-[calc(50%-0.25px)] w-[161.595px]">
        <p className="leading-[24px]">contact@vroomparis.fr</p>
      </div>
    </div>
  );
}

function Svg19() {
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

function Link5() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-0" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[127.557px]">
        <p className="leading-[24px]">Showroom</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-[32px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[11.5px] w-[150px]">
        <p className="leading-[24px]">Acheter un véhicule</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-[68px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[6.5px] w-[170px]">
        <p className="leading-[24px]">Vendre votre véhicule</p>
      </div>
    </div>
  );
}

function Link8() {
  return <div className="absolute h-[24px] left-0 right-0 top-[96px]" data-name="Link" />;
}

function Nav() {
  return (
    <div className="absolute h-[120px] left-[357.33px] right-[357.33px] top-[48px]" data-name="Nav">
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute h-[24px] left-[357.33px] right-[357.33px] top-[144px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[11.5px] w-[180px]">
        <p className="leading-[24px]">Consulation automobile</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute h-[24px] left-[357.33px] right-[357.33px] top-[180px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[6.5px] w-[170px]">
        <p className="leading-[24px]">À propos</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute h-[24px] left-[0.34px] right-[-0.34px] top-[-4px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[189.407px]">
        <p className="leading-[24px]">Politique de confidentialité</p>
      </div>
    </div>
  );
}

function Link12() {
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
      <Link11 />
      <Link12 />
    </div>
  );
}

function Svg20() {
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

function Link13() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[93px] left-[calc(50%+306px)] top-[204px] w-[20px]" data-name="Link">
      <Svg20 />
    </div>
  );
}

function Svg21() {
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

function Link14() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[93px] left-[calc(50%+342px)] top-[204px] w-[20px]" data-name="Link">
      <Svg21 />
    </div>
  );
}

function Svg22() {
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

function Link15() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[93px] left-[calc(50%+378px)] top-[204px] w-[20px]" data-name="Link">
      <Svg22 />
    </div>
  );
}

function HorizontalBorder4() {
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
    <div className="absolute h-[317px] left-[208px] right-[208px] top-[48px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%-341.1px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[175.161px]">
        <p className="leading-[28px]">Qu’attendez-vous ?</p>
      </div>
      <Link3 />
      <Link4 />
      <Svg19 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[42.5px] justify-center leading-[0] left-[calc(50%-330.17px)] not-italic text-[16px] text-center text-white top-[175.75px] w-[284.77px]">
        <p className="leading-[24px]">4 bis Av. Alexandre Dumas, 95230 Soisy-sous-Montmorency</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%+0.26px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[215.174px]">
        <p className="leading-[28px]">Informations générales :</p>
      </div>
      <Nav />
      <Link9 />
      <Link10 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%+341.55px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[152.536px]">
        <p className="leading-[28px]">Mentions légales</p>
      </div>
      <Nav1 />
      <Link13 />
      <Link14 />
      <Link15 />
      <HorizontalBorder4 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#181818] h-[413px] left-0 right-0 top-[1420px]" data-name="Footer">
      <Container />
    </div>
  );
}

export default function Etape2FormulaireVendreVotreVehicule() {
  return (
    <div className="bg-[#181818] relative size-full" data-name="etape 2 formulaire vendre votre véhicule">
      <div className="absolute h-[742.871px] left-[-464px] top-[-197px] w-[2664.782px]" data-name="Union">
        <div className="absolute inset-[-26.92%_-7.51%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3064.78 1142.87">
            <g filter="url(#filter0_f_6_334)" id="Union">
              <path d={svgPaths.p541d700} fill="url(#paint0_linear_6_334)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1142.87" id="filter0_f_6_334" width="3064.78" x="6.36565e-06" y="3.20925e-06">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_6_334" stdDeviation="100" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_334" x1="35.5207" x2="1147.95" y1="742.236" y2="-1039.64">
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
      <ConfirmationCard />
      <div className="absolute h-[1638px] inset-[207px_167px_0_913px] pointer-events-none">
        <Sidebar />
      </div>
      <div className="absolute flex inset-[2.22%_2.86%_96.48%_94.02%] items-center justify-center" style={{ containerType: "size" }}>
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
      <Footer />
    </div>
  );
}