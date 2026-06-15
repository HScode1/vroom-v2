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
    <div className="absolute left-0 right-0 top-[8437px] bg-[#181818] lg:top-[7083px]" data-name="Footer">
      <footer className="mt-10 border-t border-[#1f2937] py-8 lg:hidden w-screen max-w-full">
        <div className="mx-auto max-w-[760px] px-5 sm:px-8">
          <div className="space-y-8 rounded-[24px] bg-[#111411] p-5 sm:p-6">
            <div>
              <div className="font-['Wix_Madefor_Display:Regular',sans-serif] text-[20px] text-white">Qu’attendez-vous ?</div>
              <a href="tel:+33670760719" className="mt-4 inline-flex items-center rounded-[10px] bg-[#c8ec66] px-4 py-3 text-[15px] text-black">
                06 70 76 07 19
              </a>
              <div className="mt-4 text-[15px] text-white">contact@vroomparis.fr</div>
              <div className="mt-4 text-[15px] leading-6 text-white">4 bis Av. Alexandre Dumas, 95230 Soisy-sous-Montmorency</div>
            </div>
            <div>
              <div className="font-['Wix_Madefor_Display:Regular',sans-serif] text-[20px] text-white">Informations générales</div>
              <div className="mt-4 space-y-2 text-[15px] text-white flex flex-col">
                <a href="/showroom">Showroom</a>
                <a href="/acheter-votre-vehicule">Acheter un véhicule</a>
                <a href="/vendre-votre-vehicule">Vendre votre véhicule</a>
                <a href="/conseils">Consultation automobile</a>
                <a href="/a-propos">À propos</a>
              </div>
            </div>
            <div>
              <div className="font-['Wix_Madefor_Display:Regular',sans-serif] text-[20px] text-white">Mentions légales</div>
              <div className="mt-4 space-y-2 text-[15px] text-white flex flex-col">
                <div>Politique de confidentialité</div>
                <div>Conditions générales</div>
              </div>
            </div>
            <div className="border-t border-[#1f2937] pt-4 text-center text-[14px] text-[#9ca3af]">
              © 2026 Vroom Paris. Tous droits réservés.
            </div>
          </div>
        </div>
      </footer>

      <div className="mx-auto hidden max-w-[1200px] px-4 pt-12 sm:px-6 lg:block lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <h3 className="font-['Wix_Madefor_Display:Regular',sans-serif] text-[20px] font-normal leading-[28px] tracking-[-0.4px] text-white">
              Qu&apos;attendez-vous ?
            </h3>
            <a href="tel:+33670760719" className="inline-flex w-fit items-center gap-2 rounded-[8px] bg-[#c8ec66] px-4 py-2">
              <PhoneIcon />
              <span className="font-['Helvetica_Neue:Regular',sans-serif] text-[16px] leading-[24px] text-black">
                06 70 76 07 19
              </span>
            </a>
            <a href="mailto:contact@vroomparis.fr" className="flex items-center gap-2">
              <EmailIcon />
              <span className="font-['Helvetica_Neue:Regular',sans-serif] text-[16px] leading-[24px] text-white">
                contact@vroomparis.fr
              </span>
            </a>
            <div className="flex items-start gap-2">
              <AddressIcon />
              <span className="font-['Helvetica_Neue:Regular',sans-serif] text-[16px] leading-[24px] text-white">
                4 bis Av. Alexandre Dumas, 95230 Soisy-sous-Montmorency
              </span>
            </div>
            <div className="mt-2 flex items-center gap-4">
              <a href="#" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" aria-label="Twitter"><TwitterIcon /></a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="mb-2 font-['Wix_Madefor_Display:Regular',sans-serif] text-[20px] font-normal leading-[28px] tracking-[-0.4px] text-white">
              Navigation
            </h3>
            <a href="/showroom" className="font-['Helvetica_Neue:Regular',sans-serif] text-[16px] leading-[24px] text-white transition-colors hover:text-[#c8ec66]">Showroom</a>
            <a href="/acheter-votre-vehicule" className="font-['Helvetica_Neue:Regular',sans-serif] text-[16px] leading-[24px] text-white transition-colors hover:text-[#c8ec66]">Acheter un véhicule</a>
            <a href="/vendre-votre-vehicule" className="font-['Helvetica_Neue:Regular',sans-serif] text-[16px] leading-[24px] text-white transition-colors hover:text-[#c8ec66]">Vendre un véhicule</a>
            <a href="/conseils" className="font-['Helvetica_Neue:Regular',sans-serif] text-[16px] leading-[24px] text-white transition-colors hover:text-[#c8ec66]">Consultation automobile</a>
            <a href="/a-propos" className="font-['Helvetica_Neue:Regular',sans-serif] text-[16px] leading-[24px] text-white transition-colors hover:text-[#c8ec66]">À propos</a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="mb-2 font-['Wix_Madefor_Display:Regular',sans-serif] text-[20px] font-normal leading-[28px] tracking-[-0.4px] text-white">
              Mentions légales
            </h3>
            <span className="cursor-pointer font-['Helvetica_Neue:Regular',sans-serif] text-[16px] leading-[24px] text-white transition-colors hover:text-[#c8ec66]">Politique de confidentialité</span>
            <span className="cursor-pointer font-['Helvetica_Neue:Regular',sans-serif] text-[16px] leading-[24px] text-white transition-colors hover:text-[#c8ec66]">Conditions générales</span>
          </div>
        </div>

        <div className="mt-10 border-t border-[#1f2937] py-6">
          <p className="text-center font-['Helvetica_Neue:Regular',sans-serif] text-[16px] leading-[24px] text-[#9ca3af]">
            © 2026 Vroom Paris. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
}
