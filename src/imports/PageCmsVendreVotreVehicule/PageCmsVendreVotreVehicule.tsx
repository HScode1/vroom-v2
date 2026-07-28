import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { requests, uploads } from "../../lib/api";
import svgPaths from "./svg-njp194lwj3";

async function submitSellRequest(navigate: (path: string) => void, formElement: HTMLFormElement) {
  const formData = new FormData(formElement);
  const getValue = (name: string) => String(formData.get(name) ?? "").trim();
  const requiredFields = ["brand", "model", "year", "mileage", "gearbox", "fuel", "color", "doors", "firstName", "lastName", "email", "phone"];
  const missingField = requiredFields.find((field) => !getValue(field));

  if (missingField) {
    window.alert("Merci de compléter tous les champs obligatoires.");
    return;
  }

  const photoFiles = formData
    .getAll("photos")
    .filter((file): file is File => file instanceof File && file.size > 0);

  try {
    const photoUrls = photoFiles.length > 0 ? (await uploads.sellImages(photoFiles)).urls : [];
    const response = await requests.createSell({
      customer: {
        firstName: getValue("firstName"),
        lastName: getValue("lastName"),
        email: getValue("email"),
        phone: getValue("phone"),
      },
      vehicle: {
        brand: getValue("brand"),
        model: getValue("model"),
        trim: getValue("trim"),
        year: Number(getValue("year")),
        mileage: Number(getValue("mileage")),
        gearbox: getValue("gearbox"),
        fuel: getValue("fuel"),
        color: getValue("color"),
        doors: Number(getValue("doors")),
        notes: getValue("notes"),
        photos: photoUrls,
      },
    });

    navigate(`/vendre-votre-vehicule/formulaire?requestId=${encodeURIComponent(response.id)}`);
  } catch (error) {
    console.error("Impossible d'enregistrer la demande de reprise", error);
    window.alert(error instanceof Error ? error.message : "Impossible d'envoyer votre demande.");
  }
}

function Group() {
  return (
    <div className="absolute inset-[1.05%_46.71%_97.15%_46.74%]">
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

function OverlayBorder() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.18)] border-solid left-[80px] rounded-[14px] size-[28px] top-[calc(50%+142.8px)]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[#bcff3d] text-[11px] text-center top-1/2 w-[12.763px]">
        <p className="leading-[normal]">01</p>
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.18)] border-solid left-[80px] rounded-[14px] size-[28px] top-[calc(50%+182.8px)]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[calc(50%+0.18px)] text-[#bcff3d] text-[11px] text-center top-1/2 w-[15.355px]">
        <p className="leading-[normal]">02</p>
      </div>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.18)] border-solid left-[80px] rounded-[14px] size-[28px] top-[calc(50%+222.8px)]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[calc(50%+0.18px)] text-[#bcff3d] text-[11px] text-center top-1/2 w-[15.547px]">
        <p className="leading-[normal]">03</p>
      </div>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.18)] border-solid left-[80px] rounded-[14px] size-[28px] top-[calc(50%+262.8px)]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-bold h-[13px] justify-center leading-[0] left-[calc(50%+0.19px)] text-[#bcff3d] text-[11px] text-center top-1/2 w-[16.337px]">
        <p className="leading-[normal]">04</p>
      </div>
    </div>
  );
}

function ParagraphBackground() {
  return (
    <div className="absolute bg-[#111411] inset-[0_298px_0_0]" data-name="Paragraph+Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-extrabold h-[31px] justify-center left-[calc(50%+0.16px)] text-[#bcff3d] text-[26px] top-[33.5px] w-[81.055px]">
        <p className="leading-[normal]">24h</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center left-1/2 text-[11px] text-[rgba(255,255,255,0.4)] top-[62px] w-[98px]">
        <p className="leading-[14.3px]">délai de réponse</p>
      </div>
    </div>
  );
}

function ParagraphBackground1() {
  return (
    <div className="absolute bg-[#111411] inset-[0_149px]" data-name="Paragraph+Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-extrabold h-[31px] justify-center left-[calc(50%+0.17px)] text-[#bcff3d] text-[26px] top-[33.5px] w-[103.279px]">
        <p className="leading-[normal]">100%</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[28px] justify-center left-1/2 text-[11px] text-[rgba(255,255,255,0.4)] top-[69px] w-[82px]">
        <p className="leading-[14.3px] mb-0">{`gratuit & sans`}</p>
        <p className="leading-[14.3px]">engagement</p>
      </div>
    </div>
  );
}

function ParagraphBackground2() {
  return (
    <div className="absolute bg-[#111411] inset-[0_0_0_298px]" data-name="Paragraph+Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-extrabold h-[31px] justify-center left-[calc(50%+0.17px)] text-[#bcff3d] text-[26px] top-[33.5px] w-[101.947px]">
        <p className="leading-[normal]">+500</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center left-[calc(50%-0.5px)] text-[11px] text-[rgba(255,255,255,0.4)] top-[63px] w-[93px]">
        <p className="leading-[14.3px]">véhicules repris</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.08)] h-[99.59px] leading-[0] left-[36px] overflow-clip right-[36px] rounded-[14px] text-center top-[143px]" data-name="Overlay">
      <ParagraphBackground />
      <ParagraphBackground1 />
      <ParagraphBackground2 />
    </div>
  );
}

function Svg() {
  return (
    <div className="-translate-y-1/2 absolute left-[12px] size-[12px] top-[calc(50%+0.5px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_6_1691)" id="SVG">
          <path d="M7.5 5L5.5 7L4.5 6" id="Vector" stroke="var(--stroke-0, #BCFF3D)" />
          <path d={svgPaths.p3e7757b0} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" />
        </g>
        <defs>
          <clipPath id="clip0_6_1691">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid bottom-[76.41px] left-[36px] rounded-[8px] top-[266.59px] w-[183.39px]" data-name="Overlay+Border">
      <Svg />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[30px] text-[12px] text-[rgba(255,255,255,0.55)] top-[calc(50%+0.5px)] w-[139.914px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Estimation personnalisée</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="-translate-y-1/2 absolute left-[12px] size-[12px] top-[calc(50%+0.5px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.p8610900} id="Vector" stroke="var(--stroke-0, #BCFF3D)" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid bottom-[76.41px] left-[227.39px] rounded-[8px] top-[266.59px] w-[141.14px]" data-name="Overlay+Border">
      <Svg1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[30px] text-[12px] text-[rgba(255,255,255,0.55)] top-[calc(50%+0.5px)] w-[97.64px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Zéro engagement</p>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="-translate-y-1/2 absolute left-[12px] size-[12px] top-[calc(50%+0.5px)]" data-name="SVG">
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

function OverlayBorder6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid bottom-[24px] left-[36px] rounded-[8px] top-[319px] w-[145.27px]" data-name="Overlay+Border">
      <Svg2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[30px] text-[12px] text-[rgba(255,255,255,0.55)] top-[calc(50%+0.5px)] w-[101.627px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Réponse sous 24h</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute border border-[rgba(188,255,61,0.13)] border-solid h-[390px] left-[680px] overflow-clip right-[80px] rounded-[24px] top-[143px]" style={{ backgroundImage: "linear-gradient(133.956deg, rgba(188, 255, 61, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)" }} data-name="Background+Border">
      <div className="absolute right-[-60px] size-[200px] top-[-60px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(14.142 0 0 14.142 100 100)\\'><stop stop-color=\\'rgba(188,255,61,0.1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[13px] justify-center leading-[0] left-[36px] opacity-70 text-[#bcff3d] text-[10px] top-[42.5px] tracking-[1.4px] uppercase w-[227px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Vroom advisor · Reprise véhicule</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-bold h-[51px] justify-center leading-[0] left-[36px] text-[20px] text-white top-[88.5px] w-[232.09px]">
        <p className="leading-[26px] mb-0">Un processus</p>
        <p className="leading-[26px] text-[#bcff3d]">rapide et transparent</p>
      </div>
      <Overlay />
      <OverlayBorder4 />
      <OverlayBorder5 />
      <OverlayBorder6 />
    </div>
  );
}

function OverlayBorder7() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.22)] border-solid h-[29px] left-[80px] rounded-[100px] top-[72px] w-[353.39px]" data-name="Overlay+Border">
      <div className="-translate-y-1/2 absolute bg-[#bcff3d] left-[18px] rounded-[3px] size-[6px] top-1/2" data-name="Background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[13px] justify-center leading-[0] left-[32px] text-[#bcff3d] text-[11px] top-1/2 tracking-[1.32px] uppercase w-[301.707px]">
        <p className="leading-[normal]">Service personnalisé · Réponse sous 24h</p>
      </div>
    </div>
  );
}

function SectionHero() {
  return (
    <div className="absolute h-[697.61px] left-[80px] right-[80px] top-[143px]" data-name="Section - HERO">
      <div className="absolute h-[500px] right-[-100px] top-[-60px] w-[700px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 700 500\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(49.497 0 0 35.355 350 250)\\'><stop stop-color=\\'rgba(60,110,5,0.18)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(60,110,5,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
      <div className="absolute bottom-[-40px] left-[-80px] size-[400px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 400 400\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(28.284 0 0 28.284 200 200)\\'><stop stop-color=\\'rgba(188,255,61,0.06)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-extrabold h-[227.33px] justify-center leading-[0] left-[80px] text-[52px] text-white top-[231.67px] tracking-[-1.56px] w-[482.76px]">
        <p className="leading-[55.12px] mb-0">Vendez</p>
        <p className="leading-[55.12px] mb-0">votre</p>
        <p className="leading-[55.12px] mb-0">véhicule</p>
        <p className="leading-[55.12px] text-[#bcff3d]">simplement</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[74px] justify-center leading-[0] left-[80px] text-[16px] text-[rgba(255,255,255,0.55)] top-[401px] w-[483px]">
        <p className="leading-[26.4px] mb-0">Remplissez le formulaire ci-dessous avec les informations</p>
        <p className="leading-[26.4px] mb-0">{`de votre véhicule. Notre équipe l'étudie et vous recontacte`}</p>
        <p className="leading-[26.4px]">rapidement pour vous faire une estimation personnalisée.</p>
      </div>
      <OverlayBorder />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[122px] text-[14px] text-[rgba(255,255,255,0.55)] top-[calc(50%+142.8px)] w-[368px]">
        <p className="leading-[normal]">Remplissez le formulaire avec les infos du véhicule</p>
      </div>
      <OverlayBorder1 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[122px] text-[14px] text-[rgba(255,255,255,0.55)] top-[calc(50%+182.8px)] w-[256px]">
        <p className="leading-[normal]">Notre équipe analyse votre dossier</p>
      </div>
      <OverlayBorder2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[122px] text-[14px] text-[rgba(255,255,255,0.55)] top-[calc(50%+222.8px)] w-[281px]">
        <p className="leading-[normal]">Vous recevez une estimation sous 24h</p>
      </div>
      <OverlayBorder3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[122px] text-[14px] text-[rgba(255,255,255,0.55)] top-[calc(50%+263.2px)] w-[429px]">
        <p className="leading-[normal]">Après validation vous déposez le véhicule pour finaliser la reprise</p>
      </div>
      <BackgroundBorder />
      <OverlayBorder7 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[calc(32.6%-0.35px)_calc(31.58%-0.37px)_calc(30.58%-0.39px)_calc(28.95%-0.42px)]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13.99">
        <g id="Group 80">
          <path d={svgPaths.p144dc800} fill="var(--fill-0, #BCFF3D)" id="Vector" />
          <g id="Group 78">
            <path d={svgPaths.p20c2a270} fill="var(--fill-0, #BCFF3D)" id="Vector_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder8() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.1)] border border-[rgba(188,255,61,0.2)] border-solid left-[36px] rounded-[10px] size-[38px] top-1/2" data-name="Overlay+Border">
      <Group6 />
    </div>
  );
}

function OverlayHorizontalBorder() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)] border-b border-solid h-[79px] left-0 right-0 top-0" data-name="Overlay+HorizontalBorder">
      <OverlayBorder8 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-bold h-[18px] justify-center leading-[0] left-[88px] text-[15px] text-white top-[30px] w-[246.451px]">
        <p className="leading-[normal]">Formulaire de reprise véhicule</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[88px] text-[12px] text-[rgba(255,255,255,0.4)] top-[49px] w-[419.457px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Renseignez les informations de votre véhicule pour recevoir une estimation.</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[7.96%_98.56%_64.06%_0]">
      <div className="absolute inset-[7.96%_98.56%_64.06%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 8.39401">
          <path d={svgPaths.p1be12b80} fill="var(--fill-0, #BCFF3D)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[calc(7.97%+0.08px)_98.56%_calc(64.05%-0.36px)_0]">
      <div className="absolute inset-[21.95%_98.78%_73.39%_0.22%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.3 1.39978">
          <path d={svgPaths.p3f0f8670} fill="var(--fill-0, #BCFF3D)" id="Vector" />
        </svg>
      </div>
      <Group4 />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[30px] left-0 right-0 top-0" data-name="HorizontalBorder">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[13px] justify-center leading-[0] left-[21px] text-[10px] text-[rgba(255,255,255,0.25)] top-[calc(50%-8px)] tracking-[1.4px] uppercase w-[171.633px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Informations du véhicule</p>
      </div>
      <Group5 />
    </div>
  );
}

function Label() {
  return (
    <div className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] leading-[0] left-0 right-[319px] text-[11px] top-[50px] tracking-[0.88px] uppercase" data-name="Label">
      <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-0 text-[rgba(255,255,255,0.25)] top-1/2 w-[51.296px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Marque</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-[55.94px] text-[#bcff3d] top-[7px] w-[6.612px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">*</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-y-1/2 absolute h-[18px] left-[16px] overflow-clip right-[36px] top-1/2" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[14px] text-white top-[9px] w-[89.418px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[18px]">Sélectionner...</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[46px] left-0 right-[319px] rounded-[11px] top-[70px]" data-name="Options">
      <select name="brand" className="absolute inset-0 bg-transparent border-none outline-none text-white text-[14px] px-[16px] w-full h-full appearance-none cursor-pointer [&>option]:bg-[#181818]">
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

function Label1() {
  return (
    <div className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] leading-[0] left-[319px] right-0 text-[11px] top-[50px] tracking-[0.88px] uppercase" data-name="Label">
      <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-0 text-[rgba(255,255,255,0.25)] top-1/2 w-[49.691px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Modèle</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-[54.34px] text-[#bcff3d] top-[7px] w-[6.612px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">*</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[18px] left-[16px] overflow-clip right-[16px] top-[13px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[14px] text-[rgba(255,255,255,0.25)] top-[9px] w-[123.972px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Ex : Clio, Golf, 308…</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[46px] left-[319px] overflow-clip right-0 rounded-[11px] top-[70px]" data-name="Input">
      <input name="model" className="absolute inset-0 bg-transparent border-none outline-none text-white text-[14px] px-[16px] w-full h-full placeholder:text-[rgba(255,255,255,0.25)]" placeholder="Ex : Clio, Golf, 308…" />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[18px] left-[16px] overflow-clip right-[16px] top-[13px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[14px] text-[rgba(255,255,255,0.25)] top-[9px] w-[183.482px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Ex : Sport, Prestige, GT Line…</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[46px] left-0 overflow-clip right-[319px] rounded-[11px] top-[148px]" data-name="Input">
      <input name="trim" className="absolute inset-0 bg-transparent border-none outline-none text-white text-[14px] px-[16px] w-full h-full placeholder:text-[rgba(255,255,255,0.25)]" placeholder="Ex : Sport, Prestige, GT Line…" />
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] leading-[0] left-[319px] right-0 text-[11px] top-[128px] tracking-[0.88px] uppercase" data-name="Label">
      <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-0 text-[rgba(255,255,255,0.25)] top-1/2 w-[40.212px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Année</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-[44.89px] text-[#bcff3d] top-[7px] w-[6.612px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">*</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="-translate-y-1/2 absolute h-[18px] left-[16px] overflow-clip right-[36px] top-1/2" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[14px] text-white top-[9px] w-[89.418px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[18px]">Sélectionner...</p>
      </div>
    </div>
  );
}

function Options1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[46px] left-[319px] right-0 rounded-[11px] top-[148px]" data-name="Options">
      <select name="year" className="absolute inset-0 bg-transparent border-none outline-none text-white text-[14px] px-[16px] w-full h-full appearance-none cursor-pointer [&>option]:bg-[#181818]">
        <option value="">Sélectionner...</option>
        {Array.from({ length: 26 }, (_, i) => 2025 - i).map((y) => (
          <option key={y}>{y}</option>
        ))}
      </select>
    </div>
  );
}

function Label3() {
  return (
    <div className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] leading-[0] left-0 right-0 text-[11px] top-[206px] tracking-[0.88px] uppercase" data-name="Label">
      <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-0 text-[rgba(255,255,255,0.25)] top-1/2 w-[83.468px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Kilométrage</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-[88.14px] text-[#bcff3d] top-[7px] w-[6.612px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">*</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[18px] left-[16px] overflow-clip right-[16px] top-[13px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[14px] text-[rgba(255,255,255,0.25)] top-[9px] w-[98.231px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Ex : 45 000 km</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[46px] left-0 overflow-clip right-0 rounded-[11px] top-[226px]" data-name="Input">
      <input name="mileage" className="absolute inset-0 bg-transparent border-none outline-none text-white text-[14px] px-[16px] w-full h-full placeholder:text-[rgba(255,255,255,0.25)]" placeholder="Ex : 45 000 km" type="number" min="0" />
    </div>
  );
}

function Section1Vehicule() {
  return (
    <div className="absolute h-[296.39px] left-[36px] right-[36px] top-[115px]" data-name="SECTION 1 : Véhicule">
      <HorizontalBorder />
      <Label />
      <Options />
      <div className="-translate-y-1/2 absolute border-[rgba(255,255,255,0.4)] border-l-4 border-r-4 border-solid border-t-5 h-[5px] right-[333px] top-[calc(50%-55.2px)] w-[8px]" data-name="Border" />
      <Label1 />
      <Input />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-0 text-[11px] text-[rgba(255,255,255,0.25)] top-[calc(50%-13.2px)] tracking-[0.88px] uppercase w-[51.798px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Finition</p>
      </div>
      <Input1 />
      <Label2 />
      <Options1 />
      <div className="-translate-y-1/2 absolute border-[rgba(255,255,255,0.4)] border-l-4 border-r-4 border-solid border-t-5 h-[5px] right-[14px] top-[calc(50%+22.8px)] w-[8px]" data-name="Border" />
      <Label3 />
      <Input2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-0 text-[11px] text-[rgba(255,255,255,0.25)] top-[288px] w-[260.44px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[15.4px]">Indiquez le kilométrage actuel affiché au compteur.</p>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[12px] top-[calc(50%-8px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_6_1673)" id="SVG">
          <path d={svgPaths.p23f3aec0} id="Vector" stroke="var(--stroke-0, #BCFF3D)" />
        </g>
        <defs>
          <clipPath id="clip0_6_1673">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[30px] left-0 right-0 top-0" data-name="HorizontalBorder">
      <Svg3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[13px] justify-center leading-[0] left-[21px] text-[10px] text-[rgba(255,255,255,0.25)] top-[calc(50%-8px)] tracking-[1.4px] uppercase w-[116.039px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Caractéristiques</p>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] leading-[0] left-0 right-[319px] text-[11px] top-[50px] tracking-[0.88px] uppercase" data-name="Label">
      <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-0 text-[rgba(255,255,255,0.25)] top-1/2 w-[87.555px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Type de boîte</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-[92.22px] text-[#bcff3d] top-[7px] w-[6.612px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">*</p>
      </div>
    </div>
  );
}

function OverlayBorder9() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.08)] border border-[#bcff3d] border-solid inset-[70px_476.5px_78px_0] rounded-[11px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[18px] justify-center leading-[0] left-[calc(50%+0.91px)] text-[#bcff3d] text-[14px] text-center top-[22px] w-[60.913px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Manuelle</p>
      </div>
    </div>
  );
}

function OverlayBorder10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid inset-[70px_319px_78px_157.5px] rounded-[11px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[14px] text-[rgba(255,255,255,0.4)] text-center top-[22px] w-[84.6px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Automatique</p>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] leading-[0] left-[319px] right-0 text-[11px] top-[50px] tracking-[0.88px] uppercase" data-name="Label">
      <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-0 text-[rgba(255,255,255,0.25)] top-1/2 w-[120.136px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Nombre de portes</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-[124.75px] text-[#bcff3d] top-[7px] w-[6.612px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">*</p>
      </div>
    </div>
  );
}

function OverlayBorder11() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.08)] border border-[#bcff3d] border-solid inset-[70px_157.5px_78px_319px] rounded-[11px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[18px] justify-center leading-[0] left-[calc(50%+0.52px)] text-[#bcff3d] text-[14px] text-center top-[22px] w-[56.318px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">3 portes</p>
      </div>
    </div>
  );
}

function OverlayBorder12() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid inset-[70px_0_78px_476.5px] rounded-[11px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[calc(50%+0.17px)] text-[14px] text-[rgba(255,255,255,0.4)] text-center top-[22px] w-[55.168px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">5 portes</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="-translate-y-1/2 absolute h-[18px] left-[16px] overflow-clip right-[36px] top-1/2" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[14px] text-white top-[9px] w-[89.418px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[18px]">Sélectionner...</p>
      </div>
    </div>
  );
}

function Options2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[46px] left-0 right-[319px] rounded-[11px] top-[148px]" data-name="Options">
      <select name="fuel" className="absolute inset-0 bg-transparent border-none outline-none text-white text-[14px] px-[16px] w-full h-full appearance-none cursor-pointer [&>option]:bg-[#181818]">
        <option value="">Sélectionner...</option>
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

function Container6() {
  return (
    <div className="absolute h-[18px] left-[16px] overflow-clip right-[16px] top-[13px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[14px] text-[rgba(255,255,255,0.25)] top-[9px] w-[133.393px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Ex : Noir, Blanc, Gris…</p>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[46px] left-[319px] overflow-clip right-0 rounded-[11px] top-[148px]" data-name="Input">
      <input name="color" className="absolute inset-0 bg-transparent border-none outline-none text-white text-[14px] px-[16px] w-full h-full placeholder:text-[rgba(255,255,255,0.25)]" placeholder="Ex : Noir, Blanc, Gris…" />
    </div>
  );
}

function Section2Caracteristiques() {
  const [boite, setBoite] = useState<'manuelle' | 'automatique'>('manuelle');
  const [portes, setPortes] = useState<3 | 5>(3);

  return (
    <div className="absolute h-[194px] left-[36px] right-[36px] top-[447.39px]" data-name="SECTION 2 : Caractéristiques">
      <HorizontalBorder1 />
      <input type="hidden" name="gearbox" value={boite === "manuelle" ? "Manuelle" : "Automatique"} />
      <input type="hidden" name="doors" value={portes} />
      <Label4 />
      <div
        className={`absolute border border-solid inset-[70px_476.5px_78px_0] rounded-[11px] cursor-pointer transition-colors ${boite === 'manuelle' ? 'bg-[rgba(188,255,61,0.08)] border-[#bcff3d]' : 'bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)]'}`}
        onClick={() => setBoite('manuelle')}
      >
        <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[18px] justify-center leading-[0] left-[calc(50%+0.91px)] text-[14px] text-center top-[22px] w-[60.913px] transition-colors ${boite === 'manuelle' ? "font-['DM_Sans:SemiBold',sans-serif] font-semibold text-[#bcff3d]" : "font-['DM_Sans:9pt_Regular',sans-serif] font-normal text-[rgba(255,255,255,0.4)]"}`}>
          <p className="leading-[normal]">Manuelle</p>
        </div>
      </div>
      <div
        className={`absolute border border-solid inset-[70px_319px_78px_157.5px] rounded-[11px] cursor-pointer transition-colors ${boite === 'automatique' ? 'bg-[rgba(188,255,61,0.08)] border-[#bcff3d]' : 'bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)]'}`}
        onClick={() => setBoite('automatique')}
      >
        <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[18px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[14px] text-center top-[22px] w-[84.6px] transition-colors ${boite === 'automatique' ? "font-['DM_Sans:SemiBold',sans-serif] font-semibold text-[#bcff3d]" : "font-['DM_Sans:9pt_Regular',sans-serif] font-normal text-[rgba(255,255,255,0.4)]"}`}>
          <p className="leading-[normal]">Automatique</p>
        </div>
      </div>
      <Label5 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-[379px] text-[#bcff3d] text-[11px] top-[135px] tracking-[0.88px] uppercase w-[6.612px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">*</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-[77px] text-[#bcff3d] text-[11px] top-[135px] tracking-[0.88px] uppercase w-[6.612px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">*</p>
      </div>
      <div
        className={`absolute border border-solid inset-[70px_157.5px_78px_319px] rounded-[11px] cursor-pointer transition-colors ${portes === 3 ? 'bg-[rgba(188,255,61,0.08)] border-[#bcff3d]' : 'bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)]'}`}
        onClick={() => setPortes(3)}
      >
        <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[18px] justify-center leading-[0] left-[calc(50%+0.52px)] text-[14px] text-center top-[22px] w-[56.318px] transition-colors ${portes === 3 ? "font-['DM_Sans:SemiBold',sans-serif] font-semibold text-[#bcff3d]" : "font-['DM_Sans:9pt_Regular',sans-serif] font-normal text-[rgba(255,255,255,0.4)]"}`}>
          <p className="leading-[normal]">3 portes</p>
        </div>
      </div>
      <div
        className={`absolute border border-solid inset-[70px_0_78px_476.5px] rounded-[11px] cursor-pointer transition-colors ${portes === 5 ? 'bg-[rgba(188,255,61,0.08)] border-[#bcff3d]' : 'bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)]'}`}
        onClick={() => setPortes(5)}
      >
        <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[18px] justify-center leading-[0] left-[calc(50%+0.17px)] text-[14px] text-center top-[22px] w-[55.168px] transition-colors ${portes === 5 ? "font-['DM_Sans:SemiBold',sans-serif] font-semibold text-[#bcff3d]" : "font-['DM_Sans:9pt_Regular',sans-serif] font-normal text-[rgba(255,255,255,0.4)]"}`}>
          <p className="leading-[normal]">5 portes</p>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-0 text-[11px] text-[rgba(255,255,255,0.25)] top-[calc(50%+38px)] tracking-[0.88px] uppercase w-[72.341px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Carburant</p>
      </div>
      <Options2 />
      <div className="-translate-y-1/2 absolute border-[rgba(255,255,255,0.4)] border-l-4 border-r-4 border-solid border-t-5 h-[5px] right-[333px] top-[calc(50%+74px)] w-[8px]" data-name="Border" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-[319px] text-[11px] text-[rgba(255,255,255,0.25)] top-[calc(50%+38px)] tracking-[0.88px] uppercase w-[56.502px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Couleur</p>
      </div>
      <Input3 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[12px] top-[calc(50%-8px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.p2471b880} id="Vector" stroke="var(--stroke-0, #BCFF3D)" />
          <path d={svgPaths.p32142a60} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" />
          <path d="M10.5 7.5L8 5L2.5 10.5" id="Vector_3" stroke="var(--stroke-0, #BCFF3D)" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[30px] left-0 right-0 top-0" data-name="HorizontalBorder">
      <Svg4 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[13px] justify-center leading-[0] left-[21px] text-[10px] text-[rgba(255,255,255,0.25)] top-[calc(50%-8px)] tracking-[1.4px] uppercase w-[130.361px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Photos du véhicule</p>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[22px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="SVG">
          <path d={svgPaths.p38ef1ce0} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.65" />
          <path d={svgPaths.p13ced000} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.65" />
          <path d={svgPaths.p7969e40} id="Vector_3" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.65" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder14() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.18)] border-solid left-1/2 rounded-[14px] size-[52px] top-[36px]" data-name="Overlay+Border">
      <Svg5 />
    </div>
  );
}

function OverlayBorder15() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[26px] left-[calc(50%+0.01px)] rounded-[100px] top-[181px] w-[319.69px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%+0.66px)] text-[11px] text-[rgba(255,255,255,0.4)] text-center top-1/2 w-[291.018px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">{`JPG, PNG, HEIC · Max 10 Mo par photo · Jusqu'à 10 photos`}</p>
      </div>
    </div>
  );
}

function OverlayBorder13() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.03)] border border-[rgba(188,255,61,0.25)] border-dashed h-[245px] left-0 right-0 rounded-[16px] top-[50px]" data-name="Overlay+Border">
      <OverlayBorder14 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[18px] justify-center leading-[0] left-[calc(50%+0.15px)] text-[15px] text-center text-white top-[113px] w-[155.52px]">
        <p className="leading-[normal]">Ajoutez vos photos</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[37px] justify-center leading-[0] left-[calc(50%+1px)] text-[13px] text-[rgba(255,255,255,0.4)] text-center top-[151.5px] w-[426px]">
        <p className="leading-[19.5px] mb-0">Glissez-déposez vos photos ici ou cliquez pour les sélectionner.</p>
        <p className="leading-[19.5px]">Pensez à couvrir : face avant, arrière, côtés, intérieur, compteur.</p>
      </div>
      <OverlayBorder15 />
    </div>
  );
}

function OverlayBorder16() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.05)] border border-[rgba(188,255,61,0.2)] border-solid inset-[309px_475.5px_0_0] overflow-clip rounded-[10px]" data-name="Overlay+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[13px] justify-center leading-[0] left-[60.8px] text-[#bcff3d] text-[10px] top-[74.25px] w-[28.223px]">
        <p className="leading-[normal]">Avant</p>
      </div>
    </div>
  );
}

function OverlayBorder17() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.05)] border border-[rgba(188,255,61,0.2)] border-solid inset-[309px_317px_0_158.5px] overflow-clip rounded-[10px]" data-name="Overlay+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[13px] justify-center leading-[0] left-[58.16px] text-[#bcff3d] text-[10px] top-[74.25px] w-[33.95px]">
        <p className="leading-[normal]">Arrière</p>
      </div>
    </div>
  );
}

function OverlayBorder18() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.05)] border border-[rgba(188,255,61,0.2)] border-solid inset-[309px_158.5px_0_317px] overflow-clip rounded-[10px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[13px] justify-center leading-[0] left-[73.5px] text-[#bcff3d] text-[10px] text-center top-[73.5px] w-[71px]">
        <p className="leading-[normal]">Côté gauche</p>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG" opacity="0.4">
          <path d="M9 3.75V14.25" id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.125" />
          <path d="M3.75 9H14.25" id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function MobilePhotoIcon() {
  return (
    <svg className="block size-[22px]" fill="none" viewBox="0 0 22 22">
      <path d={svgPaths.p38ef1ce0} stroke="#BCFF3D" strokeWidth="1.65" />
      <path d={svgPaths.p13ced000} stroke="#BCFF3D" strokeWidth="1.65" />
      <path d={svgPaths.p7969e40} stroke="#BCFF3D" strokeWidth="1.65" />
    </svg>
  );
}

function MobilePlusIcon() {
  return (
    <svg className="block size-[18px]" fill="none" viewBox="0 0 18 18">
      <g opacity="0.4">
        <path d="M9 3.75V14.25" stroke="#BCFF3D" strokeWidth="1.125" />
        <path d="M3.75 9H14.25" stroke="#BCFF3D" strokeWidth="1.125" />
      </g>
    </svg>
  );
}

function MobileNotesIcon() {
  return (
    <svg className="block size-[12px]" fill="none" viewBox="0 0 12 12">
      <path d={svgPaths.p253c6700} stroke="#BCFF3D" />
      <path d={svgPaths.p37638700} stroke="#BCFF3D" />
      <path d={svgPaths.p5f15a80} stroke="#BCFF3D" />
      <path d="M8 8.5H4" stroke="#BCFF3D" />
      <path d="M5 4.5H4.5H4" stroke="#BCFF3D" />
    </svg>
  );
}

function MobileUserIcon() {
  return (
    <svg className="block size-[12px]" fill="none" viewBox="0 0 12 12">
      <path d={svgPaths.p1abc700} stroke="#BCFF3D" />
      <path d={svgPaths.p20933800} stroke="#BCFF3D" />
    </svg>
  );
}

function OverlayBorder19() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid inset-[309px_0_0_475.5px] overflow-clip rounded-[10px]" data-name="Overlay+Border">
      <Svg6 />
    </div>
  );
}

function Section3Photos() {
  const [photos, setPhotos] = useState<{ avant?: string; arriere?: string; coteGauche?: string; autre?: string }>({});

  const handlePhoto = (slot: keyof typeof photos) => (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPhotos(prev => ({ ...prev, [slot]: URL.createObjectURL(file) }));
  };

  const slotBase = "absolute overflow-clip rounded-[10px] cursor-pointer";
  const slotBg = "bg-[rgba(188,255,61,0.05)] border border-[rgba(188,255,61,0.2)] border-solid";

  return (
    <div className="absolute h-[459.5px] left-[36px] right-[36px] top-[677.39px]" data-name="SECTION 3 : Photos">
      <HorizontalBorder2 />
      <OverlayBorder13 />
      {/* Avant */}
      <label className={`${slotBase} ${slotBg} inset-[309px_475.5px_0_0]`}>
        <input type="file" name="photos" accept="image/*" className="hidden" onChange={handlePhoto('avant')} />
        {photos.avant && <img src={photos.avant} className="absolute inset-0 w-full h-full object-cover" alt="avant" />}
        <div className={`-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[13px] justify-center leading-[0] left-[60.8px] text-[#bcff3d] text-[10px] top-[74.25px] w-[28.223px] ${photos.avant ? 'drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]' : ''}`}>
          <p className="leading-[normal]">Avant</p>
        </div>
      </label>
      {/* Arrière */}
      <label className={`${slotBase} ${slotBg} inset-[309px_317px_0_158.5px]`}>
        <input type="file" name="photos" accept="image/*" className="hidden" onChange={handlePhoto('arriere')} />
        {photos.arriere && <img src={photos.arriere} className="absolute inset-0 w-full h-full object-cover" alt="arriere" />}
        <div className={`-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[13px] justify-center leading-[0] left-[58.16px] text-[#bcff3d] text-[10px] top-[74.25px] w-[33.95px] ${photos.arriere ? 'drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]' : ''}`}>
          <p className="leading-[normal]">Arrière</p>
        </div>
      </label>
      {/* Côté gauche */}
      <label className={`${slotBase} ${slotBg} inset-[309px_158.5px_0_317px]`}>
        <input type="file" name="photos" accept="image/*" className="hidden" onChange={handlePhoto('coteGauche')} />
        {photos.coteGauche && <img src={photos.coteGauche} className="absolute inset-0 w-full h-full object-cover" alt="cote-gauche" />}
        <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold h-[13px] justify-center leading-[0] left-[73.5px] text-[#bcff3d] text-[10px] text-center top-[73.5px] w-[71px] ${photos.coteGauche ? 'drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]' : ''}`}>
          <p className="leading-[normal]">Côté gauche</p>
        </div>
      </label>
      {/* + autres */}
      <label className={`${slotBase} bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid inset-[309px_0_0_475.5px]`}>
        <input type="file" name="photos" accept="image/*" className="hidden" onChange={handlePhoto('autre')} />
        {photos.autre && <img src={photos.autre} className="absolute inset-0 w-full h-full object-cover" alt="autre" />}
        {!photos.autre && <Svg6 />}
      </label>
    </div>
  );
}

function Svg7() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[12px] top-[calc(50%-8px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.p2755b100} id="Vector" stroke="var(--stroke-0, #BCFF3D)" />
          <path d="M7 1V4H10" id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" />
          <path d="M8 6.5H4" id="Vector_3" stroke="var(--stroke-0, #BCFF3D)" />
          <path d="M8 8.5H4" id="Vector_4" stroke="var(--stroke-0, #BCFF3D)" />
          <path d="M5 4.5H4.5H4" id="Vector_5" stroke="var(--stroke-0, #BCFF3D)" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[30px] left-0 right-0 top-0" data-name="HorizontalBorder">
      <Svg7 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[13px] justify-center leading-[0] left-[21px] text-[10px] text-[rgba(255,255,255,0.25)] top-[calc(50%-8px)] tracking-[1.4px] uppercase w-[177.718px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">{`Remarques & observations`}</p>
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="absolute h-[14px] leading-[0] left-0 right-0 text-[rgba(255,255,255,0.25)] top-[50px] tracking-[0.88px]" data-name="Label">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center left-0 text-[11px] top-1/2 uppercase w-[210.203px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Informations complémentaires</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[13px] justify-center left-[214.84px] text-[10px] top-[7px] w-[60.766px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">(optionnel)</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[96px] left-0 overflow-auto right-0 rounded-[11px] top-[70px]" data-name="Textarea">
      <textarea name="notes" className="absolute inset-0 bg-transparent border-none outline-none text-white text-[14px] px-[16px] py-[14px] w-full h-full resize-none placeholder:text-[rgba(255,255,255,0.25)]" placeholder="Indiquez ici tout élément utile à signaler : dommages carrosserie, véhicule accidenté, problème moteur ou mécanique, historique d'entretien, équipements optionnels…" />
    </div>
  );
}

function Section4NotesObservations() {
  return (
    <div className="absolute h-[166px] left-[36px] right-[36px] top-[1172.89px]" data-name="SECTION 4 : Notes & observations">
      <HorizontalBorder3 />
      <Label6 />
      <Textarea />
    </div>
  );
}

function Svg8() {
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

function HorizontalBorder4() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[30px] left-0 right-0 top-0" data-name="HorizontalBorder">
      <Svg8 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[13px] justify-center leading-[0] left-[21px] text-[10px] text-[rgba(255,255,255,0.25)] top-[calc(50%-8px)] tracking-[1.4px] uppercase w-[119.044px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Vos coordonnées</p>
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] leading-[0] left-0 right-[319px] text-[11px] top-[50px] tracking-[0.88px] uppercase" data-name="Label">
      <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-0 text-[rgba(255,255,255,0.25)] top-1/2 w-[50.764px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Prénom</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-[55.41px] text-[#bcff3d] top-[7px] w-[6.612px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">*</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[18px] left-[16px] overflow-clip right-[16px] top-[13px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[14px] text-[rgba(255,255,255,0.25)] top-[9px] w-[31.015px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Jean</p>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[46px] left-0 overflow-clip right-[319px] rounded-[11px] top-[70px]" data-name="Input">
      <input name="firstName" className="absolute inset-0 bg-transparent border-none outline-none text-white text-[14px] px-[16px] w-full h-full placeholder:text-[rgba(255,255,255,0.25)]" placeholder="Jean" type="text" autoComplete="given-name" />
    </div>
  );
}

function Label8() {
  return (
    <div className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] leading-[0] left-[319px] right-0 text-[11px] top-[50px] tracking-[0.88px] uppercase" data-name="Label">
      <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-0 text-[rgba(255,255,255,0.25)] top-1/2 w-[28.701px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Nom</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-[33.33px] text-[#bcff3d] top-[7px] w-[6.612px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">*</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[18px] left-[16px] overflow-clip right-[16px] top-[13px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[14px] text-[rgba(255,255,255,0.25)] top-[9px] w-[48.598px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Dupont</p>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[46px] left-[319px] overflow-clip right-0 rounded-[11px] top-[70px]" data-name="Input">
      <input name="lastName" className="absolute inset-0 bg-transparent border-none outline-none text-white text-[14px] px-[16px] w-full h-full placeholder:text-[rgba(255,255,255,0.25)]" placeholder="Dupont" type="text" autoComplete="family-name" />
    </div>
  );
}

function Label9() {
  return (
    <div className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] leading-[0] left-0 right-[319px] text-[11px] top-[128px] tracking-[0.88px] uppercase" data-name="Label">
      <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-0 text-[rgba(255,255,255,0.25)] top-1/2 w-[36.48px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Email</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-[41.17px] text-[#bcff3d] top-[7px] w-[6.612px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">*</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[18px] left-[16px] overflow-clip right-[16px] top-[13px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[14px] text-[rgba(255,255,255,0.25)] top-[9px] w-[157.652px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">jean.dupont@email.com</p>
      </div>
    </div>
  );
}

function Input6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[46px] left-0 overflow-clip right-[319px] rounded-[11px] top-[148px]" data-name="Input">
      <input name="email" className="absolute inset-0 bg-transparent border-none outline-none text-white text-[14px] px-[16px] w-full h-full placeholder:text-[rgba(255,255,255,0.25)]" placeholder="jean.dupont@email.com" type="email" autoComplete="email" />
    </div>
  );
}

function Label10() {
  return (
    <div className="absolute font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] leading-[0] left-[319px] right-0 text-[11px] top-[128px] tracking-[0.88px] uppercase" data-name="Label">
      <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-0 text-[rgba(255,255,255,0.25)] top-1/2 w-[69.647px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Téléphone</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[14px] justify-center left-[74.34px] text-[#bcff3d] top-[7px] w-[6.612px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">*</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[18px] left-[16px] overflow-clip right-[16px] top-[13px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[14px] text-[rgba(255,255,255,0.25)] top-[9px] w-[128.679px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">+33 6 00 00 00 00</p>
      </div>
    </div>
  );
}

function Input7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[46px] left-[319px] overflow-clip right-0 rounded-[11px] top-[148px]" data-name="Input">
      <input name="phone" className="absolute inset-0 bg-transparent border-none outline-none text-white text-[14px] px-[16px] w-full h-full placeholder:text-[rgba(255,255,255,0.25)]" placeholder="+33 6 00 00 00 00" type="tel" autoComplete="tel" />
    </div>
  );
}

function Section5Coordonnees() {
  return (
    <div className="absolute h-[218.39px] left-[36px] right-[36px] top-[1374.89px]" data-name="SECTION 5 : Coordonnées">
      <HorizontalBorder4 />
      <Label7 />
      <Input4 />
      <Label8 />
      <Input5 />
      <Label9 />
      <Input6 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-0 text-[11px] text-[rgba(255,255,255,0.25)] top-[210px] w-[242.744px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[15.4px]">{`L'estimation vous sera envoyée à cette adresse.`}</p>
      </div>
      <Label10 />
      <Input7 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[319px] text-[11px] text-[rgba(255,255,255,0.25)] top-[210px] w-[178.642px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[15.4px]">Pour vous recontacter rapidement.</p>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="absolute left-[36px] size-[14px] top-[26px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p1c47d580} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Svg10() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+142.66px)] size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p25acf100} id="Vector" stroke="var(--stroke-0, #0C0D0C)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <button type="submit" className="absolute bg-[#bcff3d] h-[52px] left-[36px] right-[36px] rounded-[14px] top-[76px] cursor-pointer" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-bold h-[18px] justify-center leading-[0] left-[calc(50%-12.85px)] text-[#0c0d0c] text-[15px] text-center top-1/2 tracking-[0.3px] w-[275.637px]">
        <p className="leading-[normal]">Envoyer ma demande de reprise</p>
      </div>
      <Svg10 />
    </button>
  );
}

function Svg11() {
  return (
    <div className="-translate-y-1/2 absolute left-[131.55px] size-[11px] top-[calc(50%+54px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="SVG" opacity="0.7">
          <path d={svgPaths.p3aae2680} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
        </g>
      </svg>
    </div>
  );
}

function Svg12() {
  return (
    <div className="-translate-y-1/2 absolute left-[254.2px] size-[11px] top-[calc(50%+54px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_6_1678)" id="SVG" opacity="0.7">
          <path d={svgPaths.p1f658e00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
          <path d={svgPaths.p105d7900} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_6_1678">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg13() {
  return (
    <div className="-translate-y-1/2 absolute left-[388.95px] size-[11px] top-[calc(50%+54px)]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="SVG" opacity="0.7">
          <path d={svgPaths.p90d6f00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
          <path d={svgPaths.p1b2be600} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="0.916667" />
        </g>
      </svg>
    </div>
  );
}

function FormBody() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t h-[187px] left-0 right-0 top-[1629.28px]" data-name="form-body">
      <Svg9 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[34px] justify-center leading-[0] left-[60px] text-[12px] text-[rgba(255,255,255,0.4)] top-[42.11px] w-[602px]">
        <p className="leading-[18px] mb-0">Vos données sont strictement confidentielles et utilisées uniquement pour vous contacter au sujet de la</p>
        <p className="leading-[18px]">reprise de votre véhicule.</p>
      </div>
      <Button />
      <Svg11 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%-155px)] text-[11px] text-[rgba(255,255,255,0.25)] text-center top-[calc(50%+54.11px)] w-[96px]">
        <p className="leading-[normal]">Sans engagement</p>
      </div>
      <Svg12 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%-24px)] text-[11px] text-[rgba(255,255,255,0.25)] text-center top-[calc(50%+54.11px)] w-[104px]">
        <p className="leading-[normal]">Estimation sous 24h</p>
      </div>
      <Svg13 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[calc(50%+141.5px)] text-[11px] text-[rgba(255,255,255,0.25)] text-center top-[calc(50%+54.11px)] w-[165px]">
        <p className="leading-[normal]">Réponse par email et téléphone</p>
      </div>
    </div>
  );
}

function FormCard({ onSubmit }: { onSubmit: (event: FormEvent<HTMLFormElement>) => void }) {
  return (
    <form onSubmit={onSubmit} className="absolute bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[1818.28px] left-0 overflow-clip right-[420px] rounded-[28px] top-0" data-name="FORM CARD">
      <OverlayHorizontalBorder />
      <Section1Vehicule />
      <Section2Caracteristiques />
      <Section3Photos />
      <Section4NotesObservations />
      <Section5Coordonnees />
      <FormBody />
    </form>
  );
}

function Svg14() {
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

function Background() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#bcff3d] left-[calc(50%-142px)] rounded-[13px] size-[26px] top-[11px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[calc(50%+0.17px)] text-[#0c0d0c] text-[10px] text-center top-1/2 w-[6.581px]">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[69px] left-[24px] right-[24px] top-[59px]" data-name="HorizontalBorder">
      <div className="-translate-x-1/2 absolute bg-[rgba(188,255,61,0.25)] bottom-[16px] left-[calc(50%-142px)] top-[42px] w-px" data-name="Vertical Divider" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[40px] text-[13px] text-[rgba(255,255,255,0.8)] top-[23.5px] w-[115.025px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Formulaire soumis</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[40px] text-[12px] text-[rgba(255,255,255,0.4)] top-[43px] w-[140.726px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[17.4px]">{`Dossier reçu · Aujourd'hui`}</p>
      </div>
      <Background />
    </div>
  );
}

function HorizontalBorder6() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[69px] left-[24px] right-[24px] top-[128px]" data-name="HorizontalBorder">
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.08)] bottom-[16px] left-[calc(50%-142px)] top-[42px] w-px" data-name="Vertical Divider" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[40px] text-[13px] text-[rgba(255,255,255,0.8)] top-[23.5px] w-[157.557px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Analyse par notre équipe</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[40px] text-[12px] text-[rgba(255,255,255,0.4)] top-[43px] w-[244.035px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[17.4px]">Étude des informations et photos · En cours</p>
      </div>
    </div>
  );
}

function OverlayBorder20() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid left-[calc(50%-142px)] rounded-[13px] size-[26px] top-[12px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[10px] text-[rgba(255,255,255,0.25)] text-center top-1/2 w-[6.755px]">
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-142px)] top-[12px]">
      <OverlayBorder20 />
    </div>
  );
}

function HorizontalBorder7() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid h-[69px] left-[24px] right-[24px] top-[197px]" data-name="HorizontalBorder">
      <Group2 />
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.08)] bottom-[16px] left-[calc(50%-142px)] top-[42px] w-px" data-name="Vertical Divider" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[40px] text-[13px] text-[rgba(255,255,255,0.4)] top-[23.5px] w-[106.453px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Estimation reçue</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[40px] text-[12px] text-[rgba(255,255,255,0.4)] top-[43px] w-[184.679px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[17.4px]">Par email et téléphone · Sous 24h</p>
      </div>
    </div>
  );
}

function OverlayBorder21() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid left-[calc(50%-142px)] rounded-[13px] size-[26px] top-[278px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[calc(50%+0.18px)] text-[10px] text-[rgba(255,255,255,0.25)] text-center top-1/2 w-[7.483px]">
        <p className="leading-[normal]">4</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid h-[344.39px] left-0 overflow-clip right-0 rounded-[20px] top-0" data-name="Background+Border">
      <Svg14 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[46px] text-[14px] text-white top-[calc(50%-138.7px)] w-[143.541px]">
        <p className="leading-[normal]">Prochaines étapes</p>
      </div>
      <HorizontalBorder5 />
      <HorizontalBorder6 />
      <HorizontalBorder7 />
      <OverlayBorder21 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[64px] text-[13px] text-[rgba(255,255,255,0.4)] top-[289.5px] w-[123.409px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">{`Dépôt & finalisation`}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[64px] text-[12px] text-[rgba(255,255,255,0.4)] top-[309px] w-[243.159px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[17.4px]">{`Si l'offre vous convient, dépôt en showroom`}</p>
      </div>
      <div className="absolute bottom-[-30px] right-[-30px] size-[120px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 120 120\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(8.4853 0 0 8.4853 60 60)\\'><stop stop-color=\\'rgba(188,255,61,0.07)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
    </div>
  );
}

function Svg15() {
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

function Svg16() {
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

function Svg17() {
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

function Svg18() {
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

function Svg19() {
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

function BackgroundBorder2() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid h-[183px] left-0 overflow-clip right-0 rounded-[20px] top-[358.39px]" data-name="Background+Border">
      <Svg15 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[46px] text-[14px] text-white top-[calc(50%-58px)] w-[60.515px]">
        <p className="leading-[normal]">À savoir</p>
      </div>
      <Svg16 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%-23px)] w-[168.07px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Gratuit et sans engagement</p>
      </div>
      <Svg17 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%+4px)] w-[209.295px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Estimation personnalisée sous 24h</p>
      </div>
      <Svg18 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%+31px)] w-[232.35px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">{`Vous restez libre d'accepter ou refuser`}</p>
      </div>
      <Svg19 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[calc(50%+58px)] w-[190.928px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Paiement rapide à la finalisation</p>
      </div>
      <div className="absolute bottom-[-30px] right-[-30px] size-[120px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 120 120\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(8.4853 0 0 8.4853 60 60)\\'><stop stop-color=\\'rgba(188,255,61,0.07)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
    </div>
  );
}

function Svg20() {
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

function Svg21() {
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

function OverlayBorder22() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.05)] border border-[rgba(188,255,61,0.15)] border-solid h-[205px] left-0 overflow-clip right-0 rounded-[20px] top-[555.39px]" data-name="Overlay+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[46px] text-[#bcff3d] text-[14px] top-[calc(50%-69px)] w-[114.326px]">
        <p className="leading-[normal]">Une question ?</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[47px] text-[10px] text-[rgba(188,255,61,0.6)] top-[65.5px] tracking-[0.8px] uppercase w-[62.692px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Téléphone</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[82.5px] w-[115.378px]">
        <p className="leading-[normal]">06 19 93 37 65</p>
      </div>
      <Svg20 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[47px] text-[10px] text-[rgba(188,255,61,0.6)] top-[109.5px] tracking-[0.8px] uppercase w-[32.706px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Email</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.55)] top-[126.11px] w-[164px]">
        <p className="leading-[normal]">contact@vroomparis.fr</p>
      </div>
      <Svg21 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[47px] text-[10px] text-[rgba(188,255,61,0.6)] top-[153.5px] tracking-[0.8px] uppercase w-[75.766px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">Disponibilité</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[47px] text-[13px] text-[rgba(255,255,255,0.7)] top-[170.5px] w-[122.78px]" style={{ fontVariationSettings: "'opsz' 9" }}>
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
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <OverlayBorder22 />
    </div>
  );
}

function Section() {
  const navigate = useNavigate();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void submitSellRequest(navigate, event.currentTarget);
  };
  return (
    <div className="absolute h-[1818.28px] left-[80px] right-[80px] top-[73px]" data-name="Section">
      <FormCard onSubmit={handleSubmit} />
      <div className="absolute h-[1817.890029296875px] inset-[0.39px_17px_0_743px] pointer-events-none">
        <Sidebar />
      </div>
    </div>
  );
}

function FormSection() {
  return (
    <div className="absolute h-[1991.28px] left-[80px] right-[80px] top-[840.61px]" data-name="FORM SECTION">
      <div className="absolute bg-[rgba(255,255,255,0.08)] h-px left-[80px] right-[80px] top-0" data-name="Horizontal Divider" />
      <Section />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[80px] right-[80px] top-[840.61px]">
      <FormSection />
    </div>
  );
}

function OverlayBorder23() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid left-[calc(50%+221px)] rounded-[13px] size-[26px] top-[1056px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne',sans-serif] font-bold h-[12px] justify-center leading-[0] left-[calc(50%+0.16px)] text-[10px] text-[rgba(255,255,255,0.25)] text-center top-1/2 w-[6.755px]">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+221px)] top-[1056px]">
      <OverlayBorder23 />
    </div>
  );
}

function Svg22() {
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
      <Svg22 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+12.18px)] not-italic text-[16px] text-black text-center top-[calc(50%-0.25px)] w-[107.125px]">
        <p className="leading-[24px]">06 70 76 07 19</p>
      </div>
    </div>
  );
}

function Svg23() {
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
      <Svg23 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+12.16px)] not-italic text-[16px] text-center text-white top-[calc(50%-0.25px)] w-[161.595px]">
        <p className="leading-[24px]">contact@vroomparis.fr</p>
      </div>
    </div>
  );
}

function Svg24() {
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
    <div className="absolute h-[24px] left-0 right-0 top-0" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[127.557px]">
        <p className="leading-[24px]">Showroom</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-[32px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[11.5px] w-[150px]">
        <p className="leading-[24px]">Acheter un véhicule</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[24px] left-0 right-0 top-[68px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[6.5px] w-[170px]">
        <p className="leading-[24px]">Vendre votre véhicule</p>
      </div>
    </div>
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
    <div className="absolute h-[24px] left-[357.33px] right-[357.33px] top-[144px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[11.5px] w-[180px]">
        <p className="leading-[24px]">Consulation automobile</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute h-[24px] left-[357.33px] right-[357.33px] top-[180px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[6.5px] w-[170px]">
        <p className="leading-[24px]">À propos</p>
      </div>
    </div>
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

function Svg25() {
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
      <Svg25 />
    </div>
  );
}

function Svg26() {
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
      <Svg26 />
    </div>
  );
}

function Svg27() {
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
      <Svg27 />
    </div>
  );
}

function HorizontalBorder8() {
  return (
    <div className="absolute border-[#1f2937] border-solid border-t h-[49px] left-[16px] right-[16px] top-[268px]" data-name="HorizontalBorder">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[#9ca3af] text-[16px] text-center top-[35.75px] w-[300.597px]">
        <p className="leading-[24px]">© 2026 Vroom Paris. Tous droits réservés.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[317px] left-[208px] right-[208px] top-[48px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%-341.1px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[175.161px]">
        <p className="leading-[28px]">Qu’attendez-vous ?</p>
      </div>
      <Link />
      <Link1 />
      <Svg24 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[42.5px] justify-center leading-[0] left-[calc(50%-330.17px)] not-italic text-[16px] text-center text-white top-[175.75px] w-[284.77px]">
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
      <HorizontalBorder8 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#181818] h-[413px] left-0 right-0 top-[2880px]" data-name="Footer">
      <Container11 />
    </div>
  );
}

function MobileFooterSell() {
  return (
    <footer className="mt-24 rounded-[28px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-6 sm:p-8">
      <div className="grid gap-8">
        <div>
          <div className="font-['Wix_Madefor_Display:Regular',sans-serif] text-[22px] text-white">Qu&apos;attendez-vous ?</div>
          <a href="tel:+33670760719" className="mt-4 inline-flex items-center rounded-[10px] bg-[#c8ec66] px-5 py-3 text-[16px] text-black">06 70 76 07 19</a>
          <div className="mt-5 space-y-3 text-[15px] text-white">
            <a href="mailto:contact@vroomparis.fr" className="block break-all">contact@vroomparis.fr</a>
            <span className="block text-[rgba(255,255,255,0.72)]">4 bis Av. Alexandre Dumas, 95230 Soisy-sous-Montmorency</span>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <div className="text-[20px] text-white">Informations générales</div>
            <div className="mt-4 space-y-3 text-[15px] text-white">
              <a href="/showroom" className="block">Showroom</a>
              <a href="/acheter-votre-vehicule" className="block">Acheter un véhicule</a>
              <a href="/vendre-votre-vehicule" className="block">Vendre votre véhicule</a>
              <a href="/conseils" className="block">Consultation automobile</a>
              <a href="/a-propos" className="block">À propos</a>
            </div>
          </div>
          <div>
            <div className="text-[20px] text-white">Mentions légales</div>
            <div className="mt-4 space-y-3 text-[15px] text-white">
              <div>Politique de confidentialité</div>
              <div>Conditions générales</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-[#1f2937] pt-5 text-center text-[14px] text-[#9ca3af]">© 2026 Vroom Paris. Tous droits réservés.</div>
    </footer>
  );
}

function MobilePageCmsVendreVotreVehicule() {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState<{ avant?: string; arriere?: string; coteGauche?: string; autre?: string }>({});

  const handlePhoto = (slot: keyof typeof photos) => (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPhotos((prev) => ({ ...prev, [slot]: URL.createObjectURL(file) }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void submitSellRequest(navigate, event.currentTarget);
  };

  return (
    <div className="relative overflow-x-hidden xl:hidden">
      <div className="pointer-events-none absolute left-1/2 top-[-140px] h-[440px] w-[760px] -translate-x-1/2 opacity-80 blur-[90px]">
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,_rgba(200,236,102,0.35),_rgba(114,249,216,0.08)_45%,_rgba(24,24,24,0)_75%)]" />
      </div>
      <div className="relative mx-auto max-w-[760px] px-5 pb-16 pt-24 sm:px-8 sm:pt-28">
        <section>
          <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(188,255,61,0.22)] bg-[rgba(188,255,61,0.09)] px-4 py-2 text-[11px] uppercase tracking-[1.32px] text-[#bcff3d]">
            <span className="size-[6px] rounded-full bg-[#bcff3d]" />
            Service personnalisé · Réponse sous 24h
          </div>
          <h1 className="mt-6 font-['Syne',sans-serif] text-[42px] font-extrabold leading-[0.98] tracking-[-0.05em] text-white sm:text-[54px]">
            Vendez votre
            <span className="block text-[#bcff3d]">véhicule simplement</span>
          </h1>
          <p className="mt-5 max-w-[34rem] text-[16px] leading-7 text-[rgba(255,255,255,0.56)]">
            Remplissez le formulaire avec les informations de votre véhicule. Notre équipe l&apos;étudie et vous recontacte rapidement pour vous faire une estimation personnalisée.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="rounded-[18px] bg-[#111411] px-4 py-4 text-center">
              <div className="font-['Syne',sans-serif] text-[28px] font-extrabold text-[#bcff3d]">24h</div>
              <div className="mt-1 text-[12px] text-[rgba(255,255,255,0.45)]">délai de réponse</div>
            </div>
            <div className="rounded-[18px] bg-[#111411] px-4 py-4 text-center">
              <div className="font-['Syne',sans-serif] text-[28px] font-extrabold text-[#bcff3d]">100%</div>
              <div className="mt-1 text-[12px] text-[rgba(255,255,255,0.45)]">gratuit</div>
            </div>
            <div className="rounded-[18px] bg-[#111411] px-4 py-4 text-center">
              <div className="font-['Syne',sans-serif] text-[28px] font-extrabold text-[#bcff3d]">+500</div>
              <div className="mt-1 text-[12px] text-[rgba(255,255,255,0.45)]">véhicules repris</div>
            </div>
          </div>

          <div className="mt-8 rounded-[24px] border border-[rgba(188,255,61,0.13)] p-6" style={{ backgroundImage: "linear-gradient(133.956deg, rgba(188, 255, 61, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)" }}>
            <div className="text-[10px] uppercase tracking-[1.4px] text-[#bcff3d]">Vroom advisor · Reprise véhicule</div>
            <h2 className="mt-3 font-['Syne',sans-serif] text-[24px] font-bold text-white">
              Un processus
              <span className="block text-[#bcff3d]">rapide et transparent</span>
            </h2>
            <div className="mt-6 space-y-3">
              {[
                "Estimation personnalisée",
                "Zéro engagement",
                "Réponse sous 24h",
              ].map((item) => (
                <div key={item} className="rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-[13px] text-[rgba(255,255,255,0.65)]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 space-y-4">
            {[
              "Remplissez le formulaire avec les infos du véhicule",
              "Notre équipe analyse votre dossier",
              "Vous recevez une estimation sous 24h",
              "Après validation vous déposez le véhicule pour finaliser la reprise",
            ].map((item, index) => (
              <div key={item} className="flex items-start gap-4">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-[14px] border border-[rgba(188,255,61,0.18)] bg-[rgba(188,255,61,0.09)] text-[11px] font-bold text-[#bcff3d]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="pt-1 text-[14px] leading-6 text-[rgba(255,255,255,0.6)]">{item}</div>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-[rgba(255,255,255,0.08)] pt-10">
            <form onSubmit={handleSubmit} className="rounded-[28px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-5 sm:p-6">
              <div className="border-b border-[rgba(255,255,255,0.08)] pb-5">
                <div className="flex items-start gap-4">
                  <div className="relative flex size-[38px] shrink-0 items-center justify-center rounded-[10px] border border-[rgba(188,255,61,0.2)] bg-[rgba(188,255,61,0.1)]">
                    <Group6 />
                  </div>
                  <div>
                    <div className="font-['Syne',sans-serif] text-[18px] font-bold text-white">Formulaire de reprise véhicule</div>
                    <div className="mt-1 text-[13px] text-[rgba(255,255,255,0.45)]">
                      Renseignez les informations de votre véhicule pour recevoir une estimation.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-8">
                <section>
                  <div className="mb-4 flex items-center gap-3 border-b border-[rgba(255,255,255,0.08)] pb-3">
                    <div className="relative flex size-[12px] items-center justify-center">
                      <Group5 />
                    </div>
                    <span className="text-[10px] uppercase tracking-[1.4px] text-[rgba(255,255,255,0.25)]">Informations du véhicule</span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.25)]">Marque <span className="text-[#bcff3d]">*</span></label>
                      <select name="brand" className="h-[46px] w-full rounded-[11px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-[14px] text-white outline-none">
                        <option value="">Sélectionner...</option>
                        <option>Audi</option>
                        <option>BMW</option>
                        <option>Citroën</option>
                        <option>Renault</option>
                        <option>Toyota</option>
                        <option>Volkswagen</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.25)]">Modèle <span className="text-[#bcff3d]">*</span></label>
                      <input name="model" className="h-[46px] w-full rounded-[11px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-[14px] text-white outline-none placeholder:text-[rgba(255,255,255,0.25)]" placeholder="Ex : Clio, Golf, 308…" />
                    </div>
                    <div>
                      <label className="mb-2 block text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.25)]">Finition</label>
                      <input name="trim" className="h-[46px] w-full rounded-[11px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-[14px] text-white outline-none placeholder:text-[rgba(255,255,255,0.25)]" placeholder="Ex : Sport, Prestige, GT Line…" />
                    </div>
                    <div>
                      <label className="mb-2 block text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.25)]">Année <span className="text-[#bcff3d]">*</span></label>
                      <select name="year" className="h-[46px] w-full rounded-[11px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-[14px] text-white outline-none">
                        <option value="">Sélectionner...</option>
                        {Array.from({ length: 26 }, (_, i) => 2025 - i).map((y) => (
                          <option key={y}>{y}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="mb-2 block text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.25)]">Kilométrage <span className="text-[#bcff3d]">*</span></label>
                    <input name="mileage" className="h-[46px] w-full rounded-[11px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-[14px] text-white outline-none placeholder:text-[rgba(255,255,255,0.25)]" placeholder="Ex : 45 000 km" type="number" min="0" />
                    <p className="mt-2 text-[11px] text-[rgba(255,255,255,0.25)]">Indiquez le kilométrage actuel affiché au compteur.</p>
                  </div>
                </section>

                <section>
                  <div className="mb-4 flex items-center gap-3 border-b border-[rgba(255,255,255,0.08)] pb-3">
                    <Svg3 />
                    <span className="text-[10px] uppercase tracking-[1.4px] text-[rgba(255,255,255,0.25)]">Caractéristiques</span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input type="hidden" name="gearbox" value="Manuelle" />
                    <input type="hidden" name="doors" value="3" />
                    <div>
                      <label className="mb-2 block text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.25)]">Type de boîte <span className="text-[#bcff3d]">*</span></label>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-[11px] border border-[#bcff3d] bg-[rgba(188,255,61,0.08)] px-4 py-3 text-center text-[14px] font-semibold text-[#bcff3d]">Manuelle</div>
                        <div className="rounded-[11px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-center text-[14px] text-[rgba(255,255,255,0.4)]">Automatique</div>
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.25)]">Nombre de portes <span className="text-[#bcff3d]">*</span></label>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-[11px] border border-[#bcff3d] bg-[rgba(188,255,61,0.08)] px-4 py-3 text-center text-[14px] font-semibold text-[#bcff3d]">3 portes</div>
                        <div className="rounded-[11px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-center text-[14px] text-[rgba(255,255,255,0.4)]">5 portes</div>
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.25)]">Carburant <span className="text-[#bcff3d]">*</span></label>
                      <select name="fuel" className="h-[46px] w-full rounded-[11px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-[14px] text-white outline-none">
                        <option value="">Sélectionner...</option>
                        <option>Essence</option>
                        <option>Diesel</option>
                        <option>Hybride</option>
                        <option>Électrique</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.25)]">Couleur <span className="text-[#bcff3d]">*</span></label>
                      <input name="color" className="h-[46px] w-full rounded-[11px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-[14px] text-white outline-none placeholder:text-[rgba(255,255,255,0.25)]" placeholder="Ex : Noir, Blanc, Gris…" />
                    </div>
                  </div>
                </section>

                <section>
                  <div className="mb-4 flex items-center gap-3 border-b border-[rgba(255,255,255,0.08)] pb-3">
                    <MobilePhotoIcon />
                    <span className="text-[10px] uppercase tracking-[1.4px] text-[rgba(255,255,255,0.25)]">Photos du véhicule</span>
                  </div>
                  <div className="rounded-[18px] border border-[rgba(188,255,61,0.2)] bg-[rgba(188,255,61,0.05)] p-6 text-center">
                    <div className="mx-auto flex size-[64px] items-center justify-center rounded-[18px] border border-[rgba(188,255,61,0.2)] bg-[rgba(188,255,61,0.08)]">
                      <MobilePhotoIcon />
                    </div>
                    <div className="mt-4 font-['Syne',sans-serif] text-[16px] font-bold text-white">Ajoutez vos photos</div>
                    <p className="mx-auto mt-3 max-w-[30rem] text-[13px] leading-6 text-[rgba(255,255,255,0.45)]">
                      Glissez-déposez vos photos ici ou cliquez pour les sélectionner. Pensez à couvrir : face avant, arrière, côtés, intérieur, compteur.
                    </p>
                    <div className="mx-auto mt-4 inline-flex rounded-full bg-[rgba(255,255,255,0.08)] px-4 py-2 text-[12px] text-[rgba(255,255,255,0.35)]">
                      JPG, PNG, HEIC · Max 10 Mo par photo · Jusqu&apos;à 10 photos
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                      ["avant", "Avant"],
                      ["arriere", "Arrière"],
                      ["coteGauche", "Côté gauche"],
                      ["autre", "+1 photo"],
                    ].map(([slot, label]) => (
                      <label key={slot} className={`relative min-h-[120px] overflow-hidden rounded-[10px] border ${slot === "autre" ? "border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)]" : "border-[rgba(188,255,61,0.2)] bg-[rgba(188,255,61,0.05)]"} cursor-pointer`}>
                        <input type="file" name="photos" accept="image/*" className="hidden" onChange={handlePhoto(slot as keyof typeof photos)} />
                        {photos[slot as keyof typeof photos] ? (
                          <img src={photos[slot as keyof typeof photos]} className="absolute inset-0 h-full w-full object-cover" alt={label} />
                        ) : slot === "autre" ? (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <MobilePlusIcon />
                          </div>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <MobilePhotoIcon />
                          </div>
                        )}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-[rgba(0,0,0,0.35)] px-3 py-1 text-[10px] font-semibold text-[#bcff3d]">
                          {label}
                        </div>
                      </label>
                    ))}
                  </div>
                </section>

                <section>
                  <div className="mb-4 flex items-center gap-3 border-b border-[rgba(255,255,255,0.08)] pb-3">
                    <MobileNotesIcon />
                    <span className="text-[10px] uppercase tracking-[1.4px] text-[rgba(255,255,255,0.25)]">Remarques & observations</span>
                  </div>
                  <label className="mb-2 block text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.25)]">Informations complémentaires <span className="normal-case tracking-normal text-[10px]">(optionnel)</span></label>
                  <textarea name="notes" className="min-h-[120px] w-full rounded-[11px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-[14px] text-white outline-none placeholder:text-[rgba(255,255,255,0.25)]" placeholder="Indiquez ici tout élément utile à signaler : dommages carrosserie, véhicule accidenté, problème moteur ou mécanique, historique d'entretien, équipements optionnels…" />
                </section>

                <section>
                  <div className="mb-4 flex items-center gap-3 border-b border-[rgba(255,255,255,0.08)] pb-3">
                    <MobileUserIcon />
                    <span className="text-[10px] uppercase tracking-[1.4px] text-[rgba(255,255,255,0.25)]">Vos coordonnées</span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.25)]">Prénom <span className="text-[#bcff3d]">*</span></label>
                      <input name="firstName" className="h-[46px] w-full rounded-[11px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-[14px] text-white outline-none placeholder:text-[rgba(255,255,255,0.25)]" placeholder="Jean" />
                    </div>
                    <div>
                      <label className="mb-2 block text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.25)]">Nom <span className="text-[#bcff3d]">*</span></label>
                      <input name="lastName" className="h-[46px] w-full rounded-[11px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-[14px] text-white outline-none placeholder:text-[rgba(255,255,255,0.25)]" placeholder="Dupont" />
                    </div>
                    <div>
                      <label className="mb-2 block text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.25)]">Email <span className="text-[#bcff3d]">*</span></label>
                      <input name="email" className="h-[46px] w-full rounded-[11px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-[14px] text-white outline-none placeholder:text-[rgba(255,255,255,0.25)]" placeholder="jean.dupont@email.com" type="email" />
                      <p className="mt-2 text-[11px] text-[rgba(255,255,255,0.25)]">L&apos;estimation vous sera envoyée à cette adresse.</p>
                    </div>
                    <div>
                      <label className="mb-2 block text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.25)]">Téléphone <span className="text-[#bcff3d]">*</span></label>
                      <input name="phone" className="h-[46px] w-full rounded-[11px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-[14px] text-white outline-none placeholder:text-[rgba(255,255,255,0.25)]" placeholder="+33 6 00 00 00 00" type="tel" />
                      <p className="mt-2 text-[11px] text-[rgba(255,255,255,0.25)]">Pour vous recontacter rapidement.</p>
                    </div>
                  </div>
                </section>

                <section className="border-t border-[rgba(255,255,255,0.08)] pt-6">
                  <p className="max-w-[36rem] text-[12px] leading-6 text-[rgba(255,255,255,0.4)]">
                    Vos données sont strictement confidentielles et utilisées uniquement pour vous contacter au sujet de la reprise de votre véhicule.
                  </p>
                  <button
                    type="submit"
                    className="mt-6 w-full rounded-[14px] bg-[#bcff3d] px-4 py-4 font-['Syne',sans-serif] text-[15px] font-bold tracking-[0.3px] text-[#0c0d0c]"
                  >
                    Envoyer ma demande de reprise
                  </button>
                  <div className="mt-4 flex flex-wrap justify-center gap-4 text-[11px] text-[rgba(255,255,255,0.25)]">
                    <span>Sans engagement</span>
                    <span>Estimation sous 24h</span>
                    <span>Réponse par email et téléphone</span>
                  </div>
                </section>
              </div>
            </form>

            <div className="mt-6 grid gap-5">
              <div className="rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[#111411] p-5">
                <div className="text-[14px] font-bold text-white">Prochaines étapes</div>
                <div className="mt-5 space-y-4">
                  {[
                    "Formulaire soumis",
                    "Analyse par notre équipe",
                    "Estimation reçue",
                    "Dépôt & finalisation",
                  ].map((item, index) => (
                    <div key={item} className="flex items-start gap-4">
                      <div className={`mt-1 flex size-7 shrink-0 items-center justify-center rounded-[13px] ${index === 0 ? "bg-[#bcff3d] text-[#0c0d0c]" : "bg-[rgba(255,255,255,0.04)] text-[rgba(255,255,255,0.35)]"} text-[10px] font-bold`}>
                        {index + 1}
                      </div>
                      <div>
                        <div className={`text-[13px] font-semibold ${index < 2 ? "text-[rgba(255,255,255,0.85)]" : "text-[rgba(255,255,255,0.4)]"}`}>{item}</div>
                        <div className="mt-1 text-[12px] text-[rgba(255,255,255,0.45)]">
                          {index === 0 && "Dossier reçu · Aujourd'hui"}
                          {index === 1 && "Étude des informations et photos · En cours"}
                          {index === 2 && "Par email et téléphone · Sous 24h"}
                          {index === 3 && "Si l'offre vous convient, dépôt en showroom"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[#111411] p-5">
                <div className="text-[14px] font-bold text-white">À savoir</div>
                <div className="mt-4 space-y-3 text-[13px] text-[rgba(255,255,255,0.6)]">
                  <div>Gratuit et sans engagement</div>
                  <div>Estimation personnalisée sous 24h</div>
                  <div>Vous restez libre d&apos;accepter ou refuser</div>
                  <div>Paiement rapide à la finalisation</div>
                </div>
              </div>

              <div className="rounded-[20px] border border-[rgba(188,255,61,0.15)] bg-[rgba(188,255,61,0.05)] p-5">
                <div className="text-[14px] font-bold text-[#bcff3d]">Une question ?</div>
                <div className="mt-4 space-y-3 text-[13px] text-[rgba(255,255,255,0.65)]">
                  <div>06 19 93 37 65</div>
                  <div>contact@vroomparis.fr</div>
                  <div>Lun – Sam · 9h à 19h</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MobileFooterSell />
      </div>
    </div>
  );
}

function DesktopPageCmsVendreVotreVehicule() {
  return (
    <div className="relative mx-auto hidden h-[3293px] w-[1440px] bg-[#181818] xl:block" data-name="page cms vendre votre vehicule">
      <div className="absolute h-[742.871px] left-[-464px] top-[-197px] w-[2664.781px]" data-name="Union">
        <div className="absolute inset-[-26.92%_-7.51%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3064.78 1142.87">
            <g filter="url(#filter0_f_6_1267)" id="Union">
              <path d={svgPaths.pd515c00} fill="url(#paint0_linear_6_1267)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1142.87" id="filter0_f_6_1267" width="3064.78" x="1.39163e-06" y="3.20925e-06">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_6_1267" stdDeviation="100" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_1267" x1="35.5207" x2="1147.95" y1="742.236" y2="-1039.64">
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
      <Group />
      <SectionHero />
      <Group1 />
      <Group3 />
      <Footer />
    </div>
  );
}

export default function PageCmsVendreVotreVehicule() {
  return (
    <div className="w-full bg-[#181818]">
      <MobilePageCmsVendreVotreVehicule />
      <DesktopPageCmsVendreVotreVehicule />
    </div>
  );
}
