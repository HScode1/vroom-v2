import svgPaths from "../svg-gblhduksgt";

function PhoneIcon() {
  return (
    <svg className="size-[16px] shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="SVG">
        <path d={svgPaths.p2a44c680} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </g>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="size-[16px] shrink-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="SVG">
        <path d={svgPaths.p17070980} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        <path d={svgPaths.p120c8200} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </g>
    </svg>
  );
}

function AddressIcon() {
  return (
    <svg className="size-[16px] shrink-0 mt-1" fill="none" preserveAspectRatio="none" viewBox="0 0 14.15 16.0018">
      <g id="SVG">
        <path d={svgPaths.p274fd670} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17917" />
        <path d={svgPaths.p1c743f00} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.17917" />
      </g>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <g id="SVG">
        <path d={svgPaths.p30c8d680} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      </g>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <g id="SVG">
        <path d={svgPaths.p4b98700} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d={svgPaths.p19f4a800} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M14.5833 5.41667H14.5917" id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      </g>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <g id="SVG">
        <path d={svgPaths.p2ffa5d80} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      </g>
    </svg>
  );
}

export default function Footer() {
  return (
    <div className="absolute left-0 right-0 top-[7487px] bg-[#181818] lg:top-[7083px]" data-name="Footer">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {/* Colonne gauche — Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-['Wix_Madefor_Display:Regular',sans-serif] font-normal text-[20px] text-white tracking-[-0.4px] leading-[28px]">
              Qu'attendez-vous ?
            </h3>
            <a
              href="tel:+33670760719"
              className="inline-flex items-center gap-2 bg-[#c8ec66] rounded-[8px] px-4 py-2 w-fit"
            >
              <PhoneIcon />
              <span className="font-['Helvetica_Neue:Regular',sans-serif] text-[16px] text-black leading-[24px]">
                06 70 76 07 19
              </span>
            </a>
            <a href="mailto:contact@vroomparis.fr" className="flex items-center gap-2">
              <EmailIcon />
              <span className="font-['Helvetica_Neue:Regular',sans-serif] text-[16px] text-white leading-[24px]">
                contact@vroomparis.fr
              </span>
            </a>
            <div className="flex items-start gap-2">
              <AddressIcon />
              <span className="font-['Helvetica_Neue:Regular',sans-serif] text-[16px] text-white leading-[24px]">
                4 bis Av. Alexandre Dumas, 95230 Soisy-sous-Montmorency
              </span>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" aria-label="Twitter"><TwitterIcon /></a>
            </div>
          </div>

          {/* Colonne centre — Navigation */}
          <div className="flex flex-col gap-2">
            <h3 className="font-['Wix_Madefor_Display:Regular',sans-serif] font-normal text-[20px] text-white tracking-[-0.4px] leading-[28px] mb-2">
              Navigation
            </h3>
            <a href="/showroom" className="font-['Helvetica_Neue:Regular',sans-serif] text-[16px] text-white leading-[24px] hover:text-[#c8ec66] transition-colors">
              Showroom
            </a>
            <a href="/acheter-votre-vehicule" className="font-['Helvetica_Neue:Regular',sans-serif] text-[16px] text-white leading-[24px] hover:text-[#c8ec66] transition-colors">
              Acheter un véhicule
            </a>
            <a href="/vendre-votre-vehicule" className="font-['Helvetica_Neue:Regular',sans-serif] text-[16px] text-white leading-[24px] hover:text-[#c8ec66] transition-colors">
              Vendre votre véhicule
            </a>
            <a href="/conseils" className="font-['Helvetica_Neue:Regular',sans-serif] text-[16px] text-white leading-[24px] hover:text-[#c8ec66] transition-colors">
              Consultation automobile
            </a>
            <a href="/a-propos" className="font-['Helvetica_Neue:Regular',sans-serif] text-[16px] text-white leading-[24px] hover:text-[#c8ec66] transition-colors">
              À propos
            </a>
          </div>

          {/* Colonne droite — Mentions légales */}
          <div className="flex flex-col gap-2">
            <h3 className="font-['Wix_Madefor_Display:Regular',sans-serif] font-normal text-[20px] text-white tracking-[-0.4px] leading-[28px] mb-2">
              Mentions légales
            </h3>
            <span className="font-['Helvetica_Neue:Regular',sans-serif] text-[16px] text-white leading-[24px] cursor-pointer hover:text-[#c8ec66] transition-colors">
              Politique de confidentialité
            </span>
            <span className="font-['Helvetica_Neue:Regular',sans-serif] text-[16px] text-white leading-[24px] cursor-pointer hover:text-[#c8ec66] transition-colors">
              Conditions générales
            </span>
          </div>

        </div>

        {/* Barre de copyright */}
        <div className="mt-10 border-t border-[#1f2937] py-6">
          <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[16px] text-[#9ca3af] text-center leading-[24px]">
            © 2026 Vroom Paris. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
}
