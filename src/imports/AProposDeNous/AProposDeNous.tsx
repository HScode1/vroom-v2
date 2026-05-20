import { useState } from "react";
import svgPaths from "./svg-saghog0tif";
import imgBorder from "./931a34b107fc3c4e1f36267ef0a5e19f63a2f227.png";
import imgOverlayBorderShadow from "./6fe70e2a5397ec3b9133f6ab99aa1ef13cf3c1c2.png";
import imgBorder1 from "./fcdd907733c2793ee67fc155a82d6bb2381771a9.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../app/components/ui/accordion";
import { Input as UITextInput } from "../../app/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../app/components/ui/select";
import { Textarea as UITextarea } from "../../app/components/ui/textarea";
import { cn } from "../../app/components/ui/utils";

const valueCards = [
  {
    id: "transparence",
    title: "Transparence totale",
    description:
      "Prix clairs, historique complet du véhicule, zéro frais cachés. Vous savez exactement ce que vous achetez avant de signer.",
    icon: <Svg3 />,
    accent: false,
    badge: null,
    layout: "h-[279.39px] left-0 right-[757.34px] top-[166px]",
  },
  {
    id: "conseiller",
    title: "Conseiller dédié",
    description:
      "Un expert vous accompagne du premier contact jusqu'à la remise des clés. Vous n'êtes jamais seul dans votre projet.",
    icon: <Svg4 />,
    accent: true,
    badge: "⭐ Notre force principale",
    layout: "h-[279.39px] left-[378.66px] right-[378.67px] top-[166px]",
  },
  {
    id: "qualite",
    title: "Qualité garantie",
    description:
      "Chaque véhicule passe un contrôle rigoureux 100 points avant d'être proposé. Garantie 12 mois incluse sur chaque achat.",
    icon: <Svg5 />,
    accent: false,
    badge: null,
    layout: "h-[279.39px] left-[757.33px] right-[0.01px] top-[166px]",
  },
  {
    id: "livraison",
    title: "Livraison à domicile",
    description:
      "Votre véhicule livré directement chez vous, partout en France. Immatriculation et démarches administratives incluses.",
    icon: <Svg6 />,
    accent: false,
    badge: null,
    layout: "h-[237.39px] left-0 right-[757.34px] top-[461.39px]",
  },
  {
    id: "prix",
    title: "Prix justes",
    description:
      "Accès à tout le marché automobile pour vous trouver la meilleure offre. Nous négocions pour vous, sans commission cachée.",
    icon: <Svg7 />,
    accent: false,
    badge: null,
    layout: "h-[237.39px] left-[378.66px] right-[378.67px] top-[461.39px]",
  },
  {
    id: "reactivite",
    title: "Réactivité 7j/7",
    description:
      "Notre équipe répond sous 24h, 7 jours sur 7. Disponible par téléphone, email ou WhatsApp selon vos préférences.",
    icon: <Svg8 />,
    accent: false,
    badge: null,
    layout: "h-[237.39px] left-[757.33px] right-[0.01px] top-[461.39px]",
  },
];

const faqItems = [
  {
    id: "faq-1",
    question: "Qu'est-ce que Vroom Advisor ?",
    answer:
      "Vroom Advisor est une agence automobile qui accompagne l'achat, la vente et la recherche de véhicules avec un conseiller dédié, de la sélection jusqu'à la remise des clés.",
  },
  {
    id: "faq-2",
    question: "Comment fonctionne le service VroomAdvisor ?",
    answer:
      "Vous échangez avec un conseiller, nous cadrons votre besoin, puis nous recherchons, négocions et sécurisons le véhicule ou la vente selon votre projet.",
  },
  {
    id: "faq-3",
    question: "Est-ce que vous proposez la livraison à domicile ?",
    answer:
      "Oui. La livraison peut être organisée partout en France, avec accompagnement sur l'immatriculation et les démarches administratives.",
  },
  {
    id: "faq-4",
    question: "Quelle garantie est incluse avec l'achat ?",
    answer:
      "Chaque achat inclut une garantie 12 mois et un contrôle rigoureux du véhicule avant livraison.",
  },
  {
    id: "faq-5",
    question: "Comment se passe la reprise de mon véhicule ?",
    answer:
      "Nous évaluons votre véhicule, validons une estimation transparente puis organisons la reprise avec un processus simplifié et encadré.",
  },
  {
    id: "faq-6",
    question: "Proposez-vous des solutions de financement ?",
    answer:
      "Oui. Selon votre dossier et le véhicule visé, nous pouvons vous orienter vers des solutions de financement adaptées.",
  },
];

const contactSubjects = [
  "Achat d'un véhicule",
  "Vente de mon véhicule",
  "Reprise",
  "Financement",
  "Question générale",
];

function OverlayBorder() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.22)] border-solid h-[30px] left-0 right-[814px] rounded-[100px] top-[80px]" data-name="Overlay+Border">
      <div className="-translate-y-1/2 absolute bg-[#bcff3d] left-[18px] rounded-[3px] size-[6px] top-1/2" data-name="Background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-[32px] text-[#bcff3d] text-[11px] top-[calc(50%-0.11px)] tracking-[1.32px] uppercase w-[273px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Vroom Adbisor · Agence automobile</p>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="absolute border border-[rgba(255,255,255,0.08)] border-solid h-[320px] left-[620.22px] overflow-clip right-0 rounded-[20px] top-[64px]" data-name="Border">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[208.44%] left-0 max-w-none top-[-54.22%] w-full" src={imgBorder} />
      </div>
    </div>
  );
}

function OverlayBorderShadow() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] border-2 border-[#0c0d0c] border-solid h-[200px] left-[628px] overflow-clip right-[292px] rounded-[16px] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.08)] top-[339px]" data-name="Overlay+Border+Shadow">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-24.97%] max-w-none top-0 w-[149.94%]" src={imgOverlayBorderShadow} />
      </div>
    </div>
  );
}

function ParagraphOverlayBorderOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(188,255,61,0.1)] border border-[rgba(188,255,61,0.25)] border-solid h-[78px] leading-[0] left-[986.08px] right-0 rounded-[16px] text-center top-[396px]" data-name="Paragraph+Overlay+Border+OverlayBlur">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[26px] justify-center left-[70.17px] text-[#bcff3d] text-[26px] top-[30px] w-[100.502px]">
        <p className="leading-[26px]">⭐ 5,0</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[14px] justify-center left-[65.6px] text-[11px] text-[rgba(255,255,255,0.55)] top-[56px] w-[55.366px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">sur Google</p>
      </div>
    </div>
  );
}

function SectionHero() {
  return (
    <div className="absolute h-[616px] left-[160px] right-[160px] top-[128px]" data-name="Section - HERO">
      <OverlayBorder />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[171.19px] justify-center leading-[0] left-0 right-[598.16px] text-[52px] text-white top-[219.71px] tracking-[-1.56px]">
        <p className="leading-[54.6px] mb-0">{`L'automobile`}</p>
        <p className="leading-[54.6px] mb-0">autrement,</p>
        <p className="leading-[54.6px] text-[#bcff3d]">avec vous.</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Light',sans-serif] font-light justify-center leading-[0] left-0 right-[577px] text-[16px] text-[rgba(255,255,255,0.55)] top-[381px] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[28px] mb-0">{`Chez Vroom Advisor , nous avons réinventé l'expérience d'achat et de vente automobile. Plus de stress, et de mauvaises surprises,`}</p>
        <p className="leading-[28px] mb-0">{`juste un conseiller dédié, une sélection rigoureuse `}</p>
        <p className="leading-[28px]">et un accompagnement de A à Z.</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[32px] justify-center leading-[0] left-0 right-[994.58px] text-[#bcff3d] text-[32px] text-center top-[489.89px]">
        <p className="leading-[32px]">500+</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[14.89px] right-[1009.53px] text-[12px] text-[rgba(255,255,255,0.4)] text-center top-[519.89px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">véhicules vendus</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[32px] justify-center leading-[0] left-[157.03px] right-[849.43px] text-[#bcff3d] text-[32px] text-center top-[489.89px]">
        <p className="leading-[32px]">98%</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[168.59px] right-[860.77px] text-[12px] text-[rgba(255,255,255,0.4)] text-center top-[519.89px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">clients satisfaits</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[32px] justify-center leading-[0] left-[302.19px] right-[680.92px] text-[#bcff3d] text-[32px] text-center top-[489.89px]">
        <p className="leading-[32px]">3 ans</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[340.17px] right-[718.83px] text-[12px] text-[rgba(255,255,255,0.4)] text-center top-[519.89px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">{`d'expertise`}</p>
      </div>
      <Border />
      <OverlayBorderShadow />
      <ParagraphOverlayBorderOverlayBlur />
    </div>
  );
}

function Border1() {
  return (
    <div className="absolute aspect-[520/390] border border-[rgba(255,255,255,0.08)] border-solid left-[-34px] overflow-clip right-[560px] rounded-[20px] top-[7px]" data-name="Border">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-6.16%] max-w-none top-0 w-[112.31%]" src={imgBorder1} />
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p21409e00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.18)] border-solid left-[18px] rounded-[10px] size-[36px] top-[17px]" data-name="Overlay+Border">
      <Svg />
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[74.5px] left-[600px] right-0 rounded-[14px] top-[454px]" data-name="Overlay+Border">
      <OverlayBorder2 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[68px] text-[14px] text-white top-[24.5px] w-[155.701px]">
        <p className="leading-[normal]">Transparence totale</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[19.5px] justify-center leading-[0] left-[68px] text-[13px] text-[rgba(255,255,255,0.4)] top-[46.75px] w-[306.864px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[19.5px]">Prix clairs, historique du véhicule, zéro frais cachés.</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p33162d80} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.25" />
          <path d={svgPaths.p2ec9be80} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.18)] border-solid left-[18px] rounded-[10px] size-[36px] top-[17px]" data-name="Overlay+Border">
      <Svg1 />
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[94px] left-[600px] right-0 rounded-[14px] top-[542.5px]" data-name="Overlay+Border">
      <OverlayBorder4 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[68px] text-[14px] text-white top-[24.5px] w-[123.16px]">
        <p className="leading-[normal]">Conseiller dédié</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[36.5px] justify-center leading-[0] left-[68px] text-[13px] text-[rgba(255,255,255,0.4)] top-[56.25px] w-[421.305px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[19.5px] mb-0">{`Un expert vous accompagne du premier contact jusqu'à la remise des`}</p>
        <p className="leading-[19.5px]">clés.</p>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15px] top-1/2" data-name="SVG">
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

function OverlayBorder6() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.18)] border-solid left-[18px] rounded-[10px] size-[36px] top-[17px]" data-name="Overlay+Border">
      <Svg2 />
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[74.5px] left-[600px] right-0 rounded-[14px] top-[650.5px]" data-name="Overlay+Border">
      <OverlayBorder6 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[68px] text-[14px] text-white top-[24.5px] w-[123.701px]">
        <p className="leading-[normal]">Qualité garantie</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[19.5px] justify-center leading-[0] left-[68px] text-[13px] text-[rgba(255,255,255,0.4)] top-[46.75px] w-[408.786px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[19.5px]">{`Chaque véhicule passe un contrôle 100 points avant d'être proposé.`}</p>
      </div>
    </div>
  );
}

function SectionNotreHistoire() {
  return (
    <div className="absolute h-[725px] left-[160px] right-[160px] top-[817px]" data-name="Section - NOTRE HISTOIRE">
      <Border1 />
      <div className="absolute bg-[#bcff3d] h-px left-[600px] opacity-60 right-[492px] top-[6.5px]" data-name="Horizontal Divider" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-[640px] opacity-80 right-[370.25px] text-[#bcff3d] text-[11px] top-[7px] tracking-[1.76px] uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Notre histoire</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[136px] justify-center leading-[0] left-[600px] right-[41.73px] text-[40px] text-white top-[96px] tracking-[-0.8px]">
        <p className="leading-[44px] mb-0">Nés de la</p>
        <p className="leading-[44px] mb-0">passion</p>
        <p className="leading-[44px] text-[#bcff3d]">{`de l'automobile`}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Light',sans-serif] font-light h-[229px] justify-center leading-[0] left-[600px] right-[34px] text-[15px] text-[rgba(255,255,255,0.55)] top-[303.5px] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="mb-0">
          <span className="leading-[27px]">{`Vroom Paris est née d'un constat simple : `}</span>
          <span className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[27px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            acheter ou vendre une voiture ne devrait pas être une épreuve.
          </span>
          <span className="leading-[27px]">{` Trop souvent, les clients se retrouvaient seuls face à des offres opaques, des prix injustes et un manque d'accompagnement.`}</span>
        </p>
        <p className="leading-[27px] mb-0">​</p>
        <p>
          <span className="leading-[27px]">{`Nous avons créé Vroom pour changer ça. Notre agence, installée à `}</span>
          <span className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[27px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Soisy-sous-Montmorency,
          </span>
          <span className="leading-[27px]">{` réunit une équipe de passionnés qui mettent leur expertise au service d'une seule mission : `}</span>
          <span className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[27px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            vous trouver le bon véhicule, au bon prix, sans effort de votre côté.
          </span>
        </p>
      </div>
      <OverlayBorder1 />
      <OverlayBorder3 />
      <OverlayBorder5 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p1529bd80} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder8() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.18)] border-solid left-[28px] rounded-[14px] size-[48px] top-[32px]" data-name="Overlay+Border">
      <Svg3 />
    </div>
  );
}

function OverlayBorder7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid h-[279.39px] left-0 overflow-clip right-[757.34px] rounded-[22px] top-[166px]" data-name="Overlay+Border">
      <OverlayBorder8 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[22px] justify-center leading-[0] left-[28px] right-[40.13px] text-[18px] text-white top-[111px]">
        <p className="leading-[normal]">Transparence totale</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Light',sans-serif] font-light h-[65.59px] justify-center leading-[0] left-[28px] right-[35.1px] text-[14px] text-[rgba(255,255,255,0.45)] top-[166.79px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[23.8px] mb-0">Prix clairs, historique complet du véhicule, zéro</p>
        <p className="leading-[23.8px] mb-0">frais cachés. Vous savez exactement ce que</p>
        <p className="leading-[23.8px]">vous achetez avant de signer.</p>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p27365a00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.66667" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder10() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.12)] border border-[rgba(188,255,61,0.3)] border-solid left-[28px] rounded-[14px] size-[48px] top-[32px]" data-name="Overlay+Border">
      <Svg4 />
    </div>
  );
}

function OverlayBorder11() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.12)] border border-[rgba(188,255,61,0.22)] border-solid h-[26px] left-[28px] rounded-[100px] top-[219.39px] w-[165.31px]" data-name="Overlay+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[14px] justify-center leading-[0] left-[12px] text-[#bcff3d] text-[11px] top-1/2 tracking-[0.66px] w-[146.101px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">⭐ Notre force principale</p>
      </div>
    </div>
  );
}

function OverlayBorder9() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.06)] border border-[rgba(188,255,61,0.22)] border-solid h-[279.39px] left-[378.66px] overflow-clip right-[378.67px] rounded-[22px] top-[166px]" data-name="Overlay+Border">
      <OverlayBorder10 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[22px] justify-center leading-[0] left-[28px] right-[104.32px] text-[18px] text-white top-[111px]">
        <p className="leading-[normal]">Conseiller dédié</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Light',sans-serif] font-light h-[65.59px] justify-center leading-[0] left-[28px] right-[38.83px] text-[14px] text-[rgba(255,255,255,0.55)] top-[166.79px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[23.8px] mb-0">Un expert vous accompagne du premier</p>
        <p className="leading-[23.8px] mb-0">{`contact jusqu'à la remise des clés. Vous n'êtes`}</p>
        <p className="leading-[23.8px]">jamais seul dans votre projet.</p>
      </div>
      <OverlayBorder11 />
      <div className="absolute right-[-60px] size-[180px] top-[-60px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 180 180\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(12.728 0 0 12.728 90 90)\\'><stop stop-color=\\'rgba(188,255,61,0.12)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} data-name="Gradient" />
    </div>
  );
}

function Svg5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_6_322)" id="SVG">
          <path d={svgPaths.p2bd33880} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.66667" />
          <path d={svgPaths.p8e7df80} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_6_322">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder13() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.18)] border-solid left-[28px] rounded-[14px] size-[48px] top-[32px]" data-name="Overlay+Border">
      <Svg5 />
    </div>
  );
}

function OverlayBorder12() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid h-[279.39px] left-[757.33px] overflow-clip right-[0.01px] rounded-[22px] top-[166px]" data-name="Overlay+Border">
      <OverlayBorder13 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[22px] justify-center leading-[0] left-[28px] right-[104.4px] text-[18px] text-white top-[111px]">
        <p className="leading-[normal]">Qualité garantie</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Light',sans-serif] font-light h-[65.59px] justify-center leading-[0] left-[28px] right-[45.2px] text-[14px] text-[rgba(255,255,255,0.45)] top-[166.79px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[23.8px] mb-0">Chaque véhicule passe un contrôle rigoureux</p>
        <p className="leading-[23.8px] mb-0">{`100 points avant d'être proposé. Garantie 12`}</p>
        <p className="leading-[23.8px]">mois incluse sur chaque achat.</p>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p2213f00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder15() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.18)] border-solid left-[28px] rounded-[14px] size-[48px] top-[32px]" data-name="Overlay+Border">
      <Svg6 />
    </div>
  );
}

function OverlayBorder14() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid h-[237.39px] left-0 overflow-clip right-[757.34px] rounded-[22px] top-[461.39px]" data-name="Overlay+Border">
      <OverlayBorder15 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[22px] justify-center leading-[0] left-[28px] right-[51.58px] text-[18px] text-white top-[111px]">
        <p className="leading-[normal]">Livraison à domicile</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Light',sans-serif] font-light h-[65.59px] justify-center leading-[0] left-[28px] right-[59.6px] text-[14px] text-[rgba(255,255,255,0.45)] top-[166.79px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[23.8px] mb-0">Votre véhicule livré directement chez vous,</p>
        <p className="leading-[23.8px] mb-0">partout en France. Immatriculation et</p>
        <p className="leading-[23.8px]">démarches administratives incluses.</p>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.pb94cf80} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder17() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.18)] border-solid left-[28px] rounded-[14px] size-[48px] top-[32px]" data-name="Overlay+Border">
      <Svg7 />
    </div>
  );
}

function OverlayBorder16() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid h-[237.39px] left-[378.66px] overflow-clip right-[378.67px] rounded-[22px] top-[461.39px]" data-name="Overlay+Border">
      <OverlayBorder17 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[22px] justify-center leading-[0] left-[28px] right-[187.23px] text-[18px] text-white top-[111px]">
        <p className="leading-[normal]">Prix justes</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Light',sans-serif] font-light h-[65.59px] justify-center leading-[0] left-[28px] right-[34.36px] text-[14px] text-[rgba(255,255,255,0.45)] top-[166.79px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[23.8px] mb-0">Accès à tout le marché automobile pour vous</p>
        <p className="leading-[23.8px] mb-0">trouver la meilleure offre. Nous négocions pour</p>
        <p className="leading-[23.8px]">vous, sans commission cachée.</p>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_6_308)" id="SVG">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.66667" />
          <path d="M10 5V10L13.3333 11.6667" id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_6_308">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder19() {
  return (
    <div className="absolute bg-[rgba(188,255,61,0.09)] border border-[rgba(188,255,61,0.18)] border-solid left-[28px] rounded-[14px] size-[48px] top-[32px]" data-name="Overlay+Border">
      <Svg8 />
    </div>
  );
}

function OverlayBorder18() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] border-solid h-[237.39px] left-[757.33px] overflow-clip right-[0.01px] rounded-[22px] top-[461.39px]" data-name="Overlay+Border">
      <OverlayBorder19 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[22px] justify-center leading-[0] left-[28px] right-[120.41px] text-[18px] text-white top-[111px]">
        <p className="leading-[normal]">Réactivité 7j/7</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Light',sans-serif] font-light h-[65.59px] justify-center leading-[0] left-[28px] right-[40.76px] text-[14px] text-[rgba(255,255,255,0.45)] top-[166.79px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[23.8px] mb-0">Notre équipe répond sous 24h, 7 jours sur 7.</p>
        <p className="leading-[23.8px] mb-0">Disponible par téléphone, email ou WhatsApp</p>
        <p className="leading-[23.8px]">selon vos préférences.</p>
      </div>
    </div>
  );
}

function SectionNosValeurs() {
  const [activeValue, setActiveValue] = useState("conseiller");

  return (
    <div className="absolute h-[770.78px] left-[160px] right-[160px] top-[1615px]" data-name="Section - NOS VALEURS">
      <div className="absolute bg-[#bcff3d] h-px left-0 opacity-60 right-[1092px] top-[6.5px]" data-name="Horizontal Divider" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-[40px] opacity-80 right-[935.64px] text-[#bcff3d] text-[11px] top-[7px] tracking-[1.76px] uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Ce qui nous définit</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[92px] justify-center leading-[0] left-0 right-[630.14px] text-[40px] text-white top-[74px] tracking-[-0.8px]">
        <p className="leading-[44px] mb-0">Nos valeurs,</p>
        <p className="leading-[44px] text-[#bcff3d]">votre confiance</p>
      </div>
      <div className="absolute left-[418px] right-0 top-[52px]">
        <div className="inline-flex rounded-full border border-[rgba(188,255,61,0.18)] bg-[rgba(188,255,61,0.08)] px-4 py-2 text-[11px] uppercase tracking-[1.1px] text-[#bcff3d]">
          {valueCards.find((card) => card.id === activeValue)?.title}
        </div>
      </div>
      <div className="absolute left-[418px] right-[80px] top-[88px] text-[14px] leading-[24px] text-[rgba(255,255,255,0.5)]">
        {valueCards.find((card) => card.id === activeValue)?.description}
      </div>
      {valueCards.map((card) => {
        const isActive = activeValue === card.id;

        return (
          <button
            key={card.id}
            type="button"
            onMouseEnter={() => setActiveValue(card.id)}
            onFocus={() => setActiveValue(card.id)}
            onClick={() => setActiveValue(card.id)}
            className={cn(
              "absolute overflow-clip rounded-[22px] border text-left transition-all duration-200",
              card.layout,
              card.accent || isActive
                ? "border-[rgba(188,255,61,0.26)] bg-[rgba(188,255,61,0.06)] shadow-[0_0_0_1px_rgba(188,255,61,0.08)]"
                : "border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]",
              isActive ? "translate-y-[-4px]" : "hover:translate-y-[-4px]",
            )}
            data-name="Overlay+Border"
          >
            <div
              className={cn(
                "absolute left-[28px] top-[32px] size-[48px] rounded-[14px] border",
                card.accent || isActive
                  ? "border-[rgba(188,255,61,0.3)] bg-[rgba(188,255,61,0.12)]"
                  : "border-[rgba(188,255,61,0.18)] bg-[rgba(188,255,61,0.09)]",
              )}
            >
              {card.icon}
            </div>
            <div className="absolute left-[28px] right-[28px] top-[100px] font-['Syne:ExtraBold',sans-serif] text-[18px] text-white">
              {card.title}
            </div>
            <div className="absolute left-[28px] right-[28px] top-[140px] text-[14px] leading-[23.8px] text-[rgba(255,255,255,0.5)]">
              {card.description}
            </div>
            {card.badge ? (
              <div className="absolute left-[28px] top-[219.39px] rounded-[100px] border border-[rgba(188,255,61,0.22)] bg-[rgba(188,255,61,0.12)] px-3 py-[5px] text-[11px] font-semibold tracking-[0.66px] text-[#bcff3d]">
                {card.badge}
              </div>
            ) : null}
            {card.id === "conseiller" ? (
              <div className="absolute right-[-60px] top-[-60px] size-[180px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 180 180\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(12.728 0 0 12.728 90 90)\\'><stop stop-color=\\'rgba(188,255,61,0.12)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(188,255,61,0)\\' offset=\\'0.65\\'/></radialGradient></defs></svg>')" }} />
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

function Svg9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1f31df00} fill="var(--fill-0, #BCFF3D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder20() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.1)] border border-[rgba(188,255,61,0.2)] border-solid left-[22px] rounded-[12px] size-[42px] top-1/2" data-name="Overlay+Border">
      <Svg9 />
    </div>
  );
}

function Link() {
  return (
    <a
      href="tel:+33670760719"
      className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[80px] left-0 right-[600px] rounded-[16px] top-[222.5px] transition-all duration-200 hover:border-[rgba(188,255,61,0.22)] hover:bg-[rgba(188,255,61,0.05)]"
      data-name="Link"
    >
      <OverlayBorder20 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[78px] text-[11px] text-[rgba(255,255,255,0.3)] top-[calc(50%-11px)] tracking-[0.88px] uppercase w-[68.836px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Téléphone</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[19px] justify-center leading-[0] left-[78px] text-[16px] text-white top-[calc(50%+8.5px)] w-[121.548px]">
        <p className="leading-[normal]">06 70 76 07 19</p>
      </div>
    </a>
  );
}

function Svg10() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p33da2400} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.33333" />
          <path d={svgPaths.p1e10f200} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder21() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.1)] border border-[rgba(188,255,61,0.2)] border-solid left-[22px] rounded-[12px] size-[42px] top-1/2" data-name="Overlay+Border">
      <Svg10 />
    </div>
  );
}

function Link1() {
  return (
    <a
      href="mailto:contact@vroomparis.fr"
      className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[80px] left-0 right-[600px] rounded-[16px] top-[318.5px] transition-all duration-200 hover:border-[rgba(188,255,61,0.22)] hover:bg-[rgba(188,255,61,0.05)]"
      data-name="Link"
    >
      <OverlayBorder21 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[78px] text-[11px] text-[rgba(255,255,255,0.3)] top-[calc(50%-11px)] tracking-[0.88px] uppercase w-[35.858px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Email</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[19px] justify-center leading-[0] left-[78px] text-[16px] text-white top-[calc(50%+8.5px)] w-[204.379px]">
        <p className="leading-[normal]">contact@vroomparis.fr</p>
      </div>
    </a>
  );
}

function Svg11() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6_301)" id="SVG">
          <path d={svgPaths.p276a7e00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_6_301">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function OverlayBorder23() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.1)] border border-[rgba(188,255,61,0.2)] border-solid left-[22px] rounded-[12px] size-[42px] top-1/2" data-name="Overlay+Border">
      <Svg11 />
    </div>
  );
}

function OverlayBorder22() {
  return (
    <a
      href="https://maps.google.com/?q=4+bis+Av.+Alexandre+Dumas,+95230+Soisy-sous-Montmorency"
      target="_blank"
      rel="noreferrer"
      className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[89px] left-0 right-[600px] rounded-[16px] top-[414.5px] transition-all duration-200 hover:border-[rgba(188,255,61,0.22)] hover:bg-[rgba(188,255,61,0.05)]"
      data-name="Overlay+Border"
    >
      <OverlayBorder23 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[78px] text-[11px] text-[rgba(255,255,255,0.3)] top-[calc(50%-18.5px)] tracking-[0.88px] uppercase w-[53.132px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Adresse</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[34px] justify-center leading-[0] left-[78px] text-[14px] text-white top-[calc(50%+8.5px)] w-[255.58px]">
        <p className="leading-[normal] mb-0">4 bis Av. Alexandre Dumas, 95230</p>
        <p className="leading-[normal]">Soisy-sous-Montmorency</p>
      </div>
    </a>
  );
}

function Svg12() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p21ee9780} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder24() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(188,255,61,0.1)] border border-[rgba(188,255,61,0.2)] border-solid left-[28px] rounded-[9px] size-[34px] top-1/2" data-name="Overlay+Border">
      <Svg12 />
    </div>
  );
}

function OverlayHorizontalBorder() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)] border-b border-solid h-[71px] left-0 right-0 top-0" data-name="Overlay+HorizontalBorder">
      <OverlayBorder24 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[74px] text-[14px] text-white top-[calc(50%-8px)] w-[205.63px]">
        <p className="leading-[normal]">Envoyez-nous un message</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[74px] text-[11px] text-[rgba(255,255,255,0.4)] top-[calc(50%+9.5px)] w-[162.889px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Nous vous répondons sous 24h.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[18px] left-[16px] overflow-clip right-[16px] top-[13px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[14px] text-[rgba(255,255,255,0.25)] top-[9px] w-[31.015px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Jean</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[46px] left-[28px] overflow-clip right-[265px] rounded-[11px] top-[119px]" data-name="Input">
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[18px] left-[16px] overflow-clip right-[16px] top-[13px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[14px] text-[rgba(255,255,255,0.25)] top-[9px] w-[48.598px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Dupont</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[46px] left-[265px] overflow-clip right-[28px] rounded-[11px] top-[119px]" data-name="Input">
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[18px] left-[16px] overflow-clip right-[16px] top-[13px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[14px] text-[rgba(255,255,255,0.25)] top-[9px] w-[107.526px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">jean@email.com</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[46px] left-[28px] overflow-clip right-[28px] rounded-[11px] top-[197px]" data-name="Input">
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="-translate-y-1/2 absolute h-[18px] left-[16px] overflow-clip right-[36px] top-1/2" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[14px] text-white top-[9px] w-[89.418px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[18px]">Sélectionner...</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[46px] left-[28px] right-[28px] rounded-[11px] top-[275px]" data-name="Options">
      <Container3 />
    </div>
  );
}

function Textarea() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[80px] left-[28px] overflow-auto right-[28px] rounded-[11px] top-[353px]" data-name="Textarea">
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] left-[16px] right-[339.58px] text-[14px] text-[rgba(255,255,255,0.25)] top-[22px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Votre message…</p>
      </div>
    </div>
  );
}

function Svg13() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+80.03px)] size-[14px] top-1/2" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p12068718} id="Vector" stroke="var(--stroke-0, #0C0D0C)" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#bcff3d] h-[49px] left-[28px] right-[28px] rounded-[13px] top-[16px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Syne:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] left-[calc(50%-10.85px)] text-[#0c0d0c] text-[14px] text-center top-1/2 w-[152.398px]">
        <p className="leading-[normal]">Envoyer le message</p>
      </div>
      <Svg13 />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t h-[114px] left-0 right-0 top-[473px]" data-name="HorizontalBorder">
      <Button />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[147.41px] right-[146.7px] text-[11px] text-[rgba(255,255,255,0.25)] text-center top-[82px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Données confidentielles · Réponse sous 24h</p>
      </div>
    </div>
  );
}

function FormulaireSimple() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Record<string, string> = {};

    if (!form.firstName.trim()) nextErrors.firstName = "Le prénom est requis.";
    if (!form.lastName.trim()) nextErrors.lastName = "Le nom est requis.";
    if (!form.email.trim()) nextErrors.email = "L'email est requis.";
    if (!form.message.trim()) nextErrors.message = "Le message est requis.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("success");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] border-solid h-[589px] left-[600px] overflow-clip right-0 rounded-[24px] top-0"
      data-name="FORMULAIRE SIMPLE"
    >
      <OverlayHorizontalBorder />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-[28px] right-[429.22px] text-[11px] text-[rgba(255,255,255,0.25)] top-[106px] tracking-[0.88px] uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p>
          <span className="leading-[normal]">{`Prénom `}</span>
          <span className="leading-[normal] text-[#bcff3d]">*</span>
        </p>
      </div>
      <div className="absolute left-[28px] right-[265px] top-[119px]">
        <UITextInput
          value={form.firstName}
          onChange={(event) => setForm((current) => ({ ...current, firstName: event.target.value }))}
          placeholder="Jean"
          aria-invalid={Boolean(errors.firstName)}
          className="h-[46px] rounded-[11px] border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-white placeholder:text-[rgba(255,255,255,0.25)]"
        />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-[265px] right-[214.37px] text-[11px] text-[rgba(255,255,255,0.25)] top-[106px] tracking-[0.88px] uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p>
          <span className="leading-[normal]">{`Nom `}</span>
          <span className="leading-[normal] text-[#bcff3d]">*</span>
        </p>
      </div>
      <div className="absolute left-[265px] right-[28px] top-[119px]">
        <UITextInput
          value={form.lastName}
          onChange={(event) => setForm((current) => ({ ...current, lastName: event.target.value }))}
          placeholder="Dupont"
          aria-invalid={Boolean(errors.lastName)}
          className="h-[46px] rounded-[11px] border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-white placeholder:text-[rgba(255,255,255,0.25)]"
        />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-[28px] right-[443.52px] text-[11px] text-[rgba(255,255,255,0.25)] top-[184px] tracking-[0.88px] uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p>
          <span className="leading-[normal]">{`Email `}</span>
          <span className="leading-[normal] text-[#bcff3d]">*</span>
        </p>
      </div>
      <div className="absolute left-[28px] right-[28px] top-[197px]">
        <UITextInput
          type="email"
          value={form.email}
          onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
          placeholder="jean@email.com"
          aria-invalid={Boolean(errors.email)}
          className="h-[46px] rounded-[11px] border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-white placeholder:text-[rgba(255,255,255,0.25)]"
        />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-[28px] right-[453.28px] text-[11px] text-[rgba(255,255,255,0.25)] top-[262px] tracking-[0.88px] uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Sujet</p>
      </div>
      <div className="absolute left-[28px] right-[28px] top-[275px]">
        <Select value={form.subject} onValueChange={(value) => setForm((current) => ({ ...current, subject: value }))}>
          <SelectTrigger className="h-[46px] rounded-[11px] border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-white data-[placeholder]:text-[rgba(255,255,255,0.6)]">
            <SelectValue placeholder="Sélectionner..." />
          </SelectTrigger>
          <SelectContent className="border-[rgba(255,255,255,0.08)] bg-[#181818] text-white">
            {contactSubjects.map((subject) => (
              <SelectItem key={subject} value={subject}>
                {subject}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-[28px] right-[423.23px] text-[11px] text-[rgba(255,255,255,0.25)] top-[340px] tracking-[0.88px] uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p>
          <span className="leading-[normal]">{`Message `}</span>
          <span className="leading-[normal] text-[#bcff3d]">*</span>
        </p>
      </div>
      <div className="absolute left-[28px] right-[28px] top-[353px]">
        <UITextarea
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          placeholder="Votre message…"
          aria-invalid={Boolean(errors.message)}
          className="h-[80px] rounded-[11px] border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-white placeholder:text-[rgba(255,255,255,0.25)]"
        />
      </div>
      <div className="absolute right-[28px] top-[441px] text-[11px] text-[rgba(255,255,255,0.3)]">
        {form.message.length}/500
      </div>
      <div className="absolute left-[28px] top-[441px] text-[11px] text-[#ff8e8e]">
        {errors.firstName || errors.lastName || errors.email || errors.message || ""}
      </div>
      <div className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t left-0 right-0 top-[473px]">
        <button
          type="submit"
          className="absolute left-[28px] right-[28px] top-[16px] h-[49px] rounded-[13px] bg-[#bcff3d] transition-transform duration-200 hover:scale-[1.01]"
        >
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-10.85px)] top-1/2 flex h-[17px] w-[152.398px] flex-col justify-center text-center font-['Syne:Bold',sans-serif] text-[14px] font-bold text-[#0c0d0c] leading-[0]">
            <p className="leading-[normal]">Envoyer le message</p>
          </div>
          <Svg13 />
        </button>
        <div className="-translate-y-1/2 absolute left-[147.41px] right-[146.7px] top-[82px] flex flex-col justify-center text-center font-['DM_Sans:Regular',sans-serif] text-[11px] leading-[0] text-[rgba(255,255,255,0.25)]">
          <p className="leading-[normal]">
            {status === "success" ? "Message prêt à être envoyé · Vérifiez vos informations" : "Données confidentielles · Réponse sous 24h"}
          </p>
        </div>
      </div>
    </form>
  );
}

function SectionContact() {
  return (
    <div className="absolute h-[589px] left-[166px] right-[154px] top-[2459px]" data-name="Section - CONTACT">
      <div className="absolute bg-[#bcff3d] h-px left-0 opacity-60 right-[1092px] top-[6.5px]" data-name="Horizontal Divider" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-[40px] opacity-80 right-[958.38px] text-[#bcff3d] text-[11px] top-[7px] tracking-[1.76px] uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Nous contacter</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[92px] justify-center leading-[0] left-0 right-[662.17px] text-[40px] text-white top-[74px] tracking-[-0.8px]">
        <p className="leading-[44px] mb-0">Une question ?</p>
        <p className="leading-[44px] text-[#bcff3d]">Écrivez-nous.</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Light',sans-serif] font-light h-[46.25px] justify-center leading-[0] left-0 right-[605.14px] text-[15px] text-[rgba(255,255,255,0.45)] top-[160.13px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26.25px] mb-0">Notre équipe est disponible du lundi au samedi pour répondre à toutes vos</p>
        <p className="leading-[26.25px]">questions. Nous vous répondons sous 24h.</p>
      </div>
      <Link />
      <Link1 />
      <OverlayBorder22 />
      <FormulaireSimple />
    </div>
  );
}

function Svg14() {
  return (
    <div className="absolute h-[14px] left-[512px] overflow-clip right-[26px] top-[24px]" data-name="SVG">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-11.79%_-5.89%_-23.57%_-5.89%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82496 4.73744">
            <path d={svgPaths.p10e7bf00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid h-[67px] left-0 right-[566px] rounded-[16px] top-[166px]" data-name="Background+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:SemiBold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[26px] right-[306.94px] text-[14px] text-white top-[32.5px]">
        <p className="leading-[normal]">{`Qu'est-ce que Vroom Advisor ?`}</p>
      </div>
      <Svg14 />
    </div>
  );
}

function Svg15() {
  return (
    <div className="absolute h-[14px] left-[512px] overflow-clip right-[26px] top-[24px]" data-name="SVG">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-11.79%_-5.89%_-23.57%_-5.89%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82496 4.73744">
            <path d={svgPaths.p10e7bf00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid h-[67px] left-[566px] right-0 rounded-[16px] top-[166px]" data-name="Background+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:SemiBold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[26px] right-[186.97px] text-[14px] text-white top-[32.5px]">
        <p className="leading-[normal]">Comment fonctionne le service VroomAdvisor ?</p>
      </div>
      <Svg15 />
    </div>
  );
}

function Svg16() {
  return (
    <div className="absolute h-[14px] left-[512px] overflow-clip right-[26px] top-[24px]" data-name="SVG">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-11.79%_-5.89%_-23.57%_-5.89%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82496 4.73744">
            <path d={svgPaths.p10e7bf00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid h-[67px] left-0 right-[566px] rounded-[16px] top-[245px]" data-name="Background+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:SemiBold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[26px] right-[175.71px] text-[14px] text-white top-[32.5px]">
        <p className="leading-[normal]">Est-ce que vous proposez la livraison à domicile ?</p>
      </div>
      <Svg16 />
    </div>
  );
}

function Svg17() {
  return (
    <div className="absolute h-[14px] left-[512px] overflow-clip right-[26px] top-[24px]" data-name="SVG">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-11.79%_-5.89%_-23.57%_-5.89%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82496 4.73744">
            <path d={svgPaths.p10e7bf00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid h-[67px] left-[566px] right-0 rounded-[16px] top-[245px]" data-name="Background+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:SemiBold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[26px] right-[238.16px] text-[14px] text-white top-[32.5px]">
        <p className="leading-[normal]">{`Quelle garantie est incluse avec l'achat ?`}</p>
      </div>
      <Svg17 />
    </div>
  );
}

function Svg18() {
  return (
    <div className="absolute h-[14px] left-[512px] overflow-clip right-[26px] top-[24px]" data-name="SVG">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-11.79%_-5.89%_-23.57%_-5.89%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82496 4.73744">
            <path d={svgPaths.p10e7bf00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid h-[67px] left-0 right-[566px] rounded-[16px] top-[324px]" data-name="Background+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:SemiBold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[26px] right-[189.23px] text-[14px] text-white top-[32.5px]">
        <p className="leading-[normal]">Comment se passe la reprise de mon véhicule ?</p>
      </div>
      <Svg18 />
    </div>
  );
}

function Svg19() {
  return (
    <div className="absolute h-[14px] left-[512px] overflow-clip right-[26px] top-[24px]" data-name="SVG">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-11.79%_-5.89%_-23.57%_-5.89%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.82496 4.73744">
            <path d={svgPaths.p10e7bf00} id="Vector" stroke="var(--stroke-0, #BCFF3D)" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="absolute bg-[#111411] border border-[rgba(255,255,255,0.08)] border-solid h-[67px] left-[566px] right-0 rounded-[16px] top-[324px]" data-name="Background+Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:SemiBold',sans-serif] font-semibold h-[17px] justify-center leading-[0] left-[26px] right-[195.45px] text-[14px] text-white top-[32.5px]">
        <p className="leading-[normal]">Proposez-vous des solutions de financement ?</p>
      </div>
      <Svg19 />
    </div>
  );
}

function SectionFaq() {
  const [openItem, setOpenItem] = useState<string | undefined>("faq-1");
  const leftColumnItems = faqItems.filter((_, index) => index % 2 === 0);
  const rightColumnItems = faqItems.filter((_, index) => index % 2 === 1);

  return (
    <div className="absolute h-[491px] left-[160px] right-[160px] top-[3220px]" data-name="Section - FAQ">
      <div className="absolute bg-[#bcff3d] h-px left-0 opacity-60 right-[1092px] top-[6.5px]" data-name="Horizontal Divider" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-[40px] opacity-80 right-[913.65px] text-[#bcff3d] text-[11px] top-[7px] tracking-[1.76px] uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Questions fréquentes</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Syne:ExtraBold',sans-serif] font-extrabold h-[92px] justify-center leading-[0] left-0 right-[595.12px] text-[40px] text-white top-[74px] tracking-[-0.8px]">
        <p className="leading-[44px] mb-0">Tout ce que vous</p>
        <p className="leading-[44px] text-[#bcff3d]">voulez savoir</p>
      </div>
      <Accordion
        type="single"
        collapsible
        value={openItem}
        onValueChange={setOpenItem}
        className="absolute left-0 right-0 top-[166px] flex items-start gap-x-[22px]"
      >
        <div className="flex-1 space-y-[12px]">
          {leftColumnItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className={cn(
                "rounded-[16px] border px-[26px] transition-all duration-200",
                openItem === item.id
                  ? "border-[rgba(188,255,61,0.22)] bg-[rgba(188,255,61,0.06)]"
                  : "border-[rgba(255,255,255,0.08)] bg-[#111411]",
              )}
            >
              <AccordionTrigger className="py-[22px] font-['Syne:SemiBold',sans-serif] text-[14px] font-semibold text-white hover:no-underline [&>svg]:text-[#bcff3d]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-[22px] font-['DM_Sans:Regular',sans-serif] text-[14px] leading-[24px] text-[rgba(255,255,255,0.55)]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </div>
        <div className="flex-1 space-y-[12px]">
          {rightColumnItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className={cn(
                "rounded-[16px] border px-[26px] transition-all duration-200",
                openItem === item.id
                  ? "border-[rgba(188,255,61,0.22)] bg-[rgba(188,255,61,0.06)]"
                  : "border-[rgba(255,255,255,0.08)] bg-[#111411]",
              )}
            >
              <AccordionTrigger className="py-[22px] font-['Syne:SemiBold',sans-serif] text-[14px] font-semibold text-white hover:no-underline [&>svg]:text-[#bcff3d]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-[22px] font-['DM_Sans:Regular',sans-serif] text-[14px] leading-[24px] text-[rgba(255,255,255,0.55)]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </div>
      </Accordion>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0.81%_46.71%_97.82%_46.74%]">
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

function Svg20() {
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

function Link2() {
  return (
    <a className="-translate-x-1/2 absolute bg-[#c8ec66] h-[40px] left-[calc(50%-341.34px)] rounded-[8px] top-[52px] w-[162.76px]" data-name="Link" href="tel:+33670760719">
      <Svg20 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+12.18px)] not-italic text-[16px] text-black text-center top-[calc(50%-0.25px)] w-[107.125px]">
        <p className="leading-[24px]">06 70 76 07 19</p>
      </div>
    </a>
  );
}

function Svg21() {
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

function Link3() {
  return (
    <a className="absolute h-[24px] left-[16px] right-[698.67px] top-[116px]" data-name="Link" href="mailto:contact@vroomparis.fr">
      <Svg21 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+12.16px)] not-italic text-[16px] text-center text-white top-[calc(50%-0.25px)] w-[161.595px]">
        <p className="leading-[24px]">contact@vroomparis.fr</p>
      </div>
    </a>
  );
}

function Svg22() {
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

function Link4() {
  return (
    <a className="absolute h-[24px] left-0 right-0 top-0" data-name="Link" href="/showroom">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[127.557px]">
        <p className="leading-[24px]">Showroom</p>
      </div>
    </a>
  );
}

function Link5() {
  return (
    <a className="absolute h-[24px] left-0 right-0 top-[32px]" data-name="Link" href="/acheter-votre-vehicule">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[11.5px] w-[150px]">
        <p className="leading-[24px]">Acheter un véhicule</p>
      </div>
    </a>
  );
}

function Link6() {
  return (
    <a className="absolute h-[24px] left-0 right-0 top-[68px]" data-name="Link" href="/vendre-votre-vehicule">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[6.5px] w-[170px]">
        <p className="leading-[24px]">Vendre votre véhicule</p>
      </div>
    </a>
  );
}

function Link7() {
  return <div className="absolute h-[24px] left-0 right-0 top-[96px]" data-name="Link" />;
}

function Nav() {
  return (
    <div className="absolute h-[120px] left-[357.33px] right-[357.33px] top-[48px]" data-name="Nav">
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
    </div>
  );
}

function Link8() {
  return (
    <a className="absolute h-[24px] left-[357.33px] right-[357.33px] top-[144px]" data-name="Link" href="/conseils">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[11.5px] w-[180px]">
        <p className="leading-[24px]">Consulation automobile</p>
      </div>
    </a>
  );
}

function Link9() {
  return (
    <a className="absolute h-[24px] left-[357.33px] right-[357.33px] top-[180px]" data-name="Link" href="/a-propos">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[19px] justify-center leading-[0] left-1/2 not-italic text-[16px] text-center text-white top-[6.5px] w-[170px]">
        <p className="leading-[24px]">À propos</p>
      </div>
    </a>
  );
}

function Link10() {
  return (
    <div className="absolute h-[24px] left-[0.34px] right-[-0.34px] top-[-4px]" data-name="Link">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.17px)] not-italic text-[16px] text-center text-white top-[11.75px] w-[189.407px]">
        <p className="leading-[24px]">Politique de confidentialité</p>
      </div>
    </div>
  );
}

function Link11() {
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
      <Link10 />
      <Link11 />
    </div>
  );
}

function Svg23() {
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

function Link12() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[93px] left-[calc(50%+306px)] top-[204px] w-[20px]" data-name="Link">
      <Svg23 />
    </div>
  );
}

function Svg24() {
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

function Link13() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[93px] left-[calc(50%+342px)] top-[204px] w-[20px]" data-name="Link">
      <Svg24 />
    </div>
  );
}

function Svg25() {
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

function Link14() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[93px] left-[calc(50%+378px)] top-[204px] w-[20px]" data-name="Link">
      <Svg25 />
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="absolute border-[#1f2937] border-solid border-t h-[49px] left-[16px] right-[16px] top-[268px]" data-name="HorizontalBorder">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[#9ca3af] text-[16px] text-center top-[35.75px] w-[300.597px]">
        <p className="leading-[24px]">© 2026 Vroom Paris. Tous droits réservés.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[317px] left-[208px] right-[208px] top-[48px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%-341.1px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[175.161px]">
        <p className="leading-[28px]">Qu’attendez-vous ?</p>
      </div>
      <Link2 />
      <Link3 />
      <Svg22 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[42.5px] justify-center leading-[0] left-[calc(50%-330.17px)] not-italic text-[16px] text-center text-white top-[175.75px] w-[284.77px]">
        <p className="leading-[24px]">4 bis Av. Alexandre Dumas, 95230 Soisy-sous-Montmorency</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%+0.26px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[215.174px]">
        <p className="leading-[28px]">Informations générales :</p>
      </div>
      <Nav />
      <Link8 />
      <Link9 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[calc(50%+341.55px)] text-[20px] text-center text-white top-[14px] tracking-[-0.4px] w-[152.536px]">
        <p className="leading-[28px]">Mentions légales</p>
      </div>
      <Nav1 />
      <Link12 />
      <Link13 />
      <Link14 />
      <HorizontalBorder1 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#181818] h-[413px] left-0 right-0 top-[3934px]" data-name="Footer">
      <Container4 />
    </div>
  );
}

function MobileSectionHeader({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description?: string;
}) {
  return (
    <div className="space-y-4">
      <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(188,255,61,0.18)] bg-[rgba(188,255,61,0.08)] px-4 py-2 text-[11px] font-medium uppercase tracking-[1.32px] text-[#bcff3d]">
        <span className="size-[6px] rounded-full bg-[#bcff3d]" />
        {eyebrow}
      </div>
      <div className="space-y-3">
        <h2 className="font-['Syne:ExtraBold',sans-serif] text-[34px] font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-[40px]">
          {title}
          <span className="block text-[#bcff3d]">{accent}</span>
        </h2>
        {description ? (
          <p className="max-w-[38rem] font-['DM_Sans:Light',sans-serif] text-[15px] leading-7 text-[rgba(255,255,255,0.58)]">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function MobileValueCard({
  title,
  description,
  icon,
  badge,
  accent = false,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: string | null;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[22px] border p-6",
        accent
          ? "border-[rgba(188,255,61,0.24)] bg-[rgba(188,255,61,0.07)]"
          : "border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]",
      )}
    >
      <div
        className={cn(
          "relative mb-5 flex size-12 items-center justify-center rounded-[14px] border",
          accent
            ? "border-[rgba(188,255,61,0.3)] bg-[rgba(188,255,61,0.12)]"
            : "border-[rgba(188,255,61,0.18)] bg-[rgba(188,255,61,0.09)]",
        )}
      >
        {icon}
      </div>
      <h3 className="font-['Syne:ExtraBold',sans-serif] text-[20px] font-extrabold text-white">{title}</h3>
      <p className="mt-3 font-['DM_Sans:Light',sans-serif] text-[14px] leading-7 text-[rgba(255,255,255,0.5)]">{description}</p>
      {badge ? (
        <div className="mt-5 inline-flex rounded-full border border-[rgba(188,255,61,0.22)] bg-[rgba(188,255,61,0.12)] px-3 py-[6px] text-[11px] font-semibold tracking-[0.66px] text-[#bcff3d]">
          {badge}
        </div>
      ) : null}
    </div>
  );
}

function MobileContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Record<string, string> = {};

    if (!form.firstName.trim()) nextErrors.firstName = "Le prénom est requis.";
    if (!form.lastName.trim()) nextErrors.lastName = "Le nom est requis.";
    if (!form.email.trim()) nextErrors.email = "L'email est requis.";
    if (!form.message.trim()) nextErrors.message = "Le message est requis.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("success");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-5 sm:p-6"
    >
      <div className="mb-6 flex items-start gap-4 rounded-[18px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-4">
        <div className="relative flex size-[42px] shrink-0 items-center justify-center rounded-[12px] border border-[rgba(188,255,61,0.2)] bg-[rgba(188,255,61,0.1)]">
          <Svg12 />
        </div>
        <div>
          <div className="font-['Syne:Bold',sans-serif] text-[16px] font-bold text-white">Envoyez-nous un message</div>
          <div className="mt-1 font-['DM_Sans:Regular',sans-serif] text-[12px] text-[rgba(255,255,255,0.45)]">
            Nous vous répondons sous 24h.
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-[11px] font-medium uppercase tracking-[0.88px] text-[rgba(255,255,255,0.35)]">
            Prénom <span className="text-[#bcff3d]">*</span>
          </label>
          <UITextInput
            value={form.firstName}
            onChange={(event) => setForm((current) => ({ ...current, firstName: event.target.value }))}
            placeholder="Jean"
            aria-invalid={Boolean(errors.firstName)}
            className="h-12 rounded-[11px] border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-white placeholder:text-[rgba(255,255,255,0.25)]"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[11px] font-medium uppercase tracking-[0.88px] text-[rgba(255,255,255,0.35)]">
            Nom <span className="text-[#bcff3d]">*</span>
          </label>
          <UITextInput
            value={form.lastName}
            onChange={(event) => setForm((current) => ({ ...current, lastName: event.target.value }))}
            placeholder="Dupont"
            aria-invalid={Boolean(errors.lastName)}
            className="h-12 rounded-[11px] border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-white placeholder:text-[rgba(255,255,255,0.25)]"
          />
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <label className="text-[11px] font-medium uppercase tracking-[0.88px] text-[rgba(255,255,255,0.35)]">
          Email <span className="text-[#bcff3d]">*</span>
        </label>
        <UITextInput
          type="email"
          value={form.email}
          onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
          placeholder="jean@email.com"
          aria-invalid={Boolean(errors.email)}
          className="h-12 rounded-[11px] border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-white placeholder:text-[rgba(255,255,255,0.25)]"
        />
      </div>

      <div className="mt-5 space-y-2">
        <label className="text-[11px] font-medium uppercase tracking-[0.88px] text-[rgba(255,255,255,0.35)]">Sujet</label>
        <Select value={form.subject} onValueChange={(value) => setForm((current) => ({ ...current, subject: value }))}>
          <SelectTrigger className="h-12 rounded-[11px] border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-white data-[placeholder]:text-[rgba(255,255,255,0.6)]">
            <SelectValue placeholder="Sélectionner..." />
          </SelectTrigger>
          <SelectContent className="border-[rgba(255,255,255,0.08)] bg-[#181818] text-white">
            {contactSubjects.map((subject) => (
              <SelectItem key={subject} value={subject}>
                {subject}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mt-5 space-y-2">
        <label className="text-[11px] font-medium uppercase tracking-[0.88px] text-[rgba(255,255,255,0.35)]">
          Message <span className="text-[#bcff3d]">*</span>
        </label>
        <UITextarea
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value.slice(0, 500) }))}
          placeholder="Votre message…"
          aria-invalid={Boolean(errors.message)}
          className="min-h-[120px] rounded-[11px] border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-white placeholder:text-[rgba(255,255,255,0.25)]"
        />
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-[#ff8e8e]">{errors.firstName || errors.lastName || errors.email || errors.message || ""}</span>
          <span className="text-[rgba(255,255,255,0.3)]">{form.message.length}/500</span>
        </div>
      </div>

      <div className="mt-6 border-t border-[rgba(255,255,255,0.08)] pt-5">
        <button
          type="submit"
          className="relative h-[52px] w-full rounded-[13px] bg-[#bcff3d] transition-transform duration-200 hover:scale-[1.01]"
        >
          <span className="font-['Syne:Bold',sans-serif] text-[14px] font-bold text-[#0c0d0c]">Envoyer le message</span>
        </button>
        <div className="mt-4 text-center font-['DM_Sans:Regular',sans-serif] text-[11px] text-[rgba(255,255,255,0.28)]">
          {status === "success" ? "Message prêt à être envoyé · Vérifiez vos informations" : "Données confidentielles · Réponse sous 24h"}
        </div>
      </div>
    </form>
  );
}

function MobileAboutPage() {
  const [openItem, setOpenItem] = useState<string | undefined>("faq-1");

  return (
    <div className="relative overflow-x-hidden xl:hidden">
      <div className="pointer-events-none absolute left-1/2 top-[-120px] h-[420px] w-[760px] -translate-x-1/2 opacity-80 blur-[90px]">
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,_rgba(200,236,102,0.35),_rgba(114,249,216,0.08)_45%,_rgba(24,24,24,0)_75%)]" />
      </div>

      <div className="relative mx-auto max-w-[720px] px-5 pb-16 pt-24 sm:px-8 sm:pt-28">
        <section className="space-y-8">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(188,255,61,0.18)] bg-[rgba(188,255,61,0.08)] px-4 py-2 text-[11px] font-medium uppercase tracking-[1.32px] text-[#bcff3d]">
              <span className="size-[6px] rounded-full bg-[#bcff3d]" />
              Vroom Advisor · Agence automobile
            </div>
            <h1 className="font-['Syne:ExtraBold',sans-serif] text-[42px] font-extrabold leading-[0.98] tracking-[-0.05em] text-white sm:text-[52px]">
              L&apos;automobile
              <span className="block">autrement,</span>
              <span className="block text-[#bcff3d]">avec vous.</span>
            </h1>
            <p className="max-w-[34rem] font-['DM_Sans:Light',sans-serif] text-[15px] leading-7 text-[rgba(255,255,255,0.58)]">
              Chez Vroom Advisor, nous avons réinventé l&apos;expérience d&apos;achat et de vente automobile. Plus de stress,
              plus de mauvaises surprises, juste un conseiller dédié, une sélection rigoureuse et un accompagnement de A à Z.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:max-w-[420px]">
            {[
              ["500+", "véhicules vendus"],
              ["98%", "clients satisfaits"],
              ["3 ans", "d'expertise"],
            ].map(([value, label]) => (
              <div key={value} className="rounded-[18px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-4 text-center">
                <div className="font-['Syne:ExtraBold',sans-serif] text-[28px] font-extrabold text-[#bcff3d]">{value}</div>
                <div className="mt-1 text-[12px] text-[rgba(255,255,255,0.45)]">{label}</div>
              </div>
            ))}
          </div>

          <div className="relative pt-2">
            <div className="overflow-hidden rounded-[26px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]">
              <img alt="Agence Vroom Advisor" className="h-[320px] w-full object-cover sm:h-[380px]" src={imgBorder} />
            </div>
            <div className="absolute bottom-[-24px] left-5 w-[42%] overflow-hidden rounded-[18px] border-2 border-[#0c0d0c] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
              <img alt="Intérieur de l'agence Vroom Advisor" className="h-[150px] w-full object-cover sm:h-[180px]" src={imgOverlayBorderShadow} />
            </div>
            <div className="absolute right-0 top-5 rounded-[16px] border border-[rgba(188,255,61,0.25)] bg-[rgba(188,255,61,0.1)] px-5 py-4 text-center backdrop-blur-[10px]">
              <div className="font-['Syne:ExtraBold',sans-serif] text-[26px] font-extrabold text-[#bcff3d]">⭐ 5,0</div>
              <div className="text-[11px] text-[rgba(255,255,255,0.55)]">sur Google</div>
            </div>
          </div>
        </section>

        <section className="mt-24">
          <MobileSectionHeader
            eyebrow="Notre histoire"
            title="Nés de la passion"
            accent="de l'automobile"
            description="Une agence créée pour rendre l'achat et la vente d'un véhicule plus clairs, plus justes et beaucoup plus sereins."
          />
          <div className="mt-8 grid gap-8">
            <div className="overflow-hidden rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]">
              <img alt="Bureaux Vroom Advisor" className="h-[280px] w-full object-cover sm:h-[360px]" src={imgBorder1} />
            </div>
            <div className="space-y-5 font-['DM_Sans:Light',sans-serif] text-[15px] leading-7 text-[rgba(255,255,255,0.58)]">
              <p>
                Vroom Paris est née d&apos;un constat simple :
                <span className="font-['DM_Sans:Bold',sans-serif] font-bold text-white"> acheter ou vendre une voiture ne devrait pas être une épreuve.</span>
                {" "}Trop souvent, les clients se retrouvent seuls face à des offres opaques, des prix injustes et un manque d&apos;accompagnement.
              </p>
              <p>
                Nous avons créé Vroom pour changer ça. Notre agence, installée à
                <span className="font-['DM_Sans:Bold',sans-serif] font-bold text-white"> Soisy-sous-Montmorency</span>,
                {" "}réunit une équipe de passionnés avec une mission claire :
                <span className="font-['DM_Sans:Bold',sans-serif] font-bold text-white"> vous trouver le bon véhicule, au bon prix, sans effort de votre côté.</span>
              </p>
            </div>
            <div className="grid gap-4">
              {valueCards.slice(0, 3).map((card) => (
                <div key={card.id} className="rounded-[18px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-4">
                  <div className="relative mb-3 flex size-10 items-center justify-center rounded-[12px] border border-[rgba(188,255,61,0.18)] bg-[rgba(188,255,61,0.09)]">
                    {card.icon}
                  </div>
                  <div className="font-['Syne:Bold',sans-serif] text-[16px] font-bold text-white">{card.title}</div>
                  <div className="mt-2 text-[13px] leading-6 text-[rgba(255,255,255,0.45)]">{card.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24">
          <MobileSectionHeader
            eyebrow="Ce qui nous définit"
            title="Nos valeurs,"
            accent="votre confiance"
            description="Un accompagnement pensé pour simplifier chaque étape et sécuriser chaque décision."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {valueCards.map((card) => (
              <MobileValueCard
                key={card.id}
                title={card.title}
                description={card.description}
                icon={card.icon}
                badge={card.badge}
                accent={card.accent}
              />
            ))}
          </div>
        </section>

        <section className="mt-24">
          <MobileSectionHeader
            eyebrow="Nous contacter"
            title="Une question ?"
            accent="Écrivez-nous."
            description="Notre équipe est disponible du lundi au samedi pour répondre à toutes vos questions."
          />
          <div className="mt-8 grid gap-4">
            <a
              href="tel:+33670760719"
              className="rounded-[18px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-5 transition-all duration-200 hover:border-[rgba(188,255,61,0.22)] hover:bg-[rgba(188,255,61,0.05)]"
            >
              <div className="text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.3)]">Téléphone</div>
              <div className="mt-2 font-['Syne:Bold',sans-serif] text-[20px] font-bold text-white">06 70 76 07 19</div>
            </a>
            <a
              href="mailto:contact@vroomparis.fr"
              className="rounded-[18px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-5 transition-all duration-200 hover:border-[rgba(188,255,61,0.22)] hover:bg-[rgba(188,255,61,0.05)]"
            >
              <div className="text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.3)]">Email</div>
              <div className="mt-2 break-all font-['Syne:Bold',sans-serif] text-[20px] font-bold text-white">contact@vroomparis.fr</div>
            </a>
            <a
              href="https://maps.google.com/?q=4+bis+Av.+Alexandre+Dumas,+95230+Soisy-sous-Montmorency"
              target="_blank"
              rel="noreferrer"
              className="rounded-[18px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-5 transition-all duration-200 hover:border-[rgba(188,255,61,0.22)] hover:bg-[rgba(188,255,61,0.05)]"
            >
              <div className="text-[11px] uppercase tracking-[0.88px] text-[rgba(255,255,255,0.3)]">Adresse</div>
              <div className="mt-2 font-['Syne:Bold',sans-serif] text-[18px] font-bold leading-7 text-white">
                4 bis Av. Alexandre Dumas, 95230 Soisy-sous-Montmorency
              </div>
            </a>
          </div>
          <div className="mt-8">
            <MobileContactForm />
          </div>
        </section>

        <section className="mt-24">
          <MobileSectionHeader
            eyebrow="Questions fréquentes"
            title="Tout ce que vous"
            accent="voulez savoir"
          />
          <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem} className="mt-8 space-y-3">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className={cn(
                  "rounded-[16px] border px-5 transition-all duration-200",
                  openItem === item.id
                    ? "border-[rgba(188,255,61,0.22)] bg-[rgba(188,255,61,0.06)]"
                    : "border-[rgba(255,255,255,0.08)] bg-[#111411]",
                )}
              >
                <AccordionTrigger className="py-5 text-left font-['Syne:SemiBold',sans-serif] text-[14px] font-semibold text-white hover:no-underline [&>svg]:text-[#bcff3d]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 font-['DM_Sans:Regular',sans-serif] text-[14px] leading-7 text-[rgba(255,255,255,0.55)]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <footer className="mt-24 rounded-[28px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] p-6 sm:p-8">
          <div className="grid gap-8">
            <div>
              <div className="font-['Wix_Madefor_Display:Regular',sans-serif] text-[22px] text-white">Qu&apos;attendez-vous ?</div>
              <a
                href="tel:+33670760719"
                className="mt-4 inline-flex items-center rounded-[10px] bg-[#c8ec66] px-5 py-3 font-['Helvetica_Neue:Regular',sans-serif] text-[16px] text-black"
              >
                06 70 76 07 19
              </a>
              <div className="mt-5 space-y-3 text-[15px] text-white">
                <a href="mailto:contact@vroomparis.fr" className="block break-all">contact@vroomparis.fr</a>
                <a
                  href="https://maps.google.com/?q=4+bis+Av.+Alexandre+Dumas,+95230+Soisy-sous-Montmorency"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-[rgba(255,255,255,0.72)]"
                >
                  4 bis Av. Alexandre Dumas, 95230 Soisy-sous-Montmorency
                </a>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <div className="font-['Wix_Madefor_Display:Regular',sans-serif] text-[20px] text-white">Informations générales</div>
                <div className="mt-4 space-y-3 text-[15px] text-white">
                  <a href="/showroom" className="block">Showroom</a>
                  <a href="/acheter-votre-vehicule" className="block">Acheter un véhicule</a>
                  <a href="/vendre-votre-vehicule" className="block">Vendre votre véhicule</a>
                  <a href="/conseils" className="block">Consultation automobile</a>
                  <a href="/a-propos" className="block">À propos</a>
                </div>
              </div>

              <div>
                <div className="font-['Wix_Madefor_Display:Regular',sans-serif] text-[20px] text-white">Mentions légales</div>
                <div className="mt-4 space-y-3 text-[15px] text-white">
                  <div>Politique de confidentialité</div>
                  <div>Conditions générales</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-[#1f2937] pt-5 text-center font-['Helvetica_Neue:Regular',sans-serif] text-[14px] text-[#9ca3af]">
            © 2026 Vroom Paris. Tous droits réservés.
          </div>
        </footer>
      </div>
    </div>
  );
}

function DesktopAPropos() {
  return (
    <div className="relative mx-auto hidden h-[4347px] w-[1440px] bg-[#181818] xl:block" data-name="A propos de nous">
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
      <SectionHero />
      <SectionNotreHistoire />
      <SectionNosValeurs />
      <SectionContact />
      <SectionFaq />
      <Group />
      <Footer />
    </div>
  );
}

export default function AProposDeNous() {
  return (
    <div className="w-full bg-[#181818]">
      <MobileAboutPage />
      <DesktopAPropos />
    </div>
  );
}
