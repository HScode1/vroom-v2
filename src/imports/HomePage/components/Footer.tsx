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
    <div className="absolute left-0 right-0 top-[8389px] bg-[#181818] lg:top-[7083px]" data-name="Footer">
      <div className="mx-auto max-w-[1200px] px-4 pb-8 pt-10 sm:px-6 lg:hidden">
        <div className="overflow-hidden rounded-[30px] border border-[rgba(255,255,255,0.06)] bg-[radial-gradient(circle_at_top_left,rgba(200,236,102,0.1),rgba(24,24,24,0.98)_45%)] p-5 shadow-[0px_24px_60px_-24px_rgba(0,0,0,0.7)]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(200,236,102,0.18)] bg-[rgba(200,236,102,0.08)] px-3 py-1.5">
            <div className="size-2 rounded-full bg-[#c8ec66]" />
            <p className="font-['DM_Sans:Medium',sans-serif] text-[11px] font-medium uppercase tracking-[1.6px] text-[#c8ec66]">
              Contact Vroom
            </p>
          </div>

          <p className="mt-5 font-['Syne:ExtraBold',sans-serif] text-[34px] font-extrabold leading-[36px] tracking-[-1px] text-white">
            Qu&apos;attendez-vous ?
          </p>
          <p className="mt-3 max-w-[28rem] font-['Plus_Jakarta_Sans:Light',sans-serif] text-[15px] font-light leading-[24px] text-[rgba(255,255,255,0.72)]">
            Contactez Vroom Paris pour acheter, vendre ou trouver le bon véhicule avec un accompagnement direct.
          </p>

          <a
            href="tel:+33670760719"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-[12px] bg-[#c8ec66] px-4 py-3 shadow-[0px_16px_32px_-18px_rgba(200,236,102,0.55)]"
          >
            <PhoneIcon />
            <span className="font-['Helvetica_Neue:Regular',sans-serif] text-[16px] leading-[24px] text-black">
              06 70 76 07 19
            </span>
          </a>

          <div className="mt-6 space-y-4">
            <a href="mailto:contact@vroomparis.fr" className="flex items-center gap-3 rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-4 py-3">
              <EmailIcon />
              <span className="font-['Helvetica_Neue:Regular',sans-serif] text-[15px] leading-[22px] text-white">
                contact@vroomparis.fr
              </span>
            </a>
            <div className="flex items-start gap-3 rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-4 py-3">
              <AddressIcon />
              <span className="font-['Helvetica_Neue:Regular',sans-serif] text-[15px] leading-[22px] text-white">
                4 bis Av. Alexandre Dumas, 95230 Soisy-sous-Montmorency
              </span>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 font-['Wix_Madefor_Display:Regular',sans-serif] text-[18px] font-normal leading-[26px] tracking-[-0.3px] text-white">
                Navigation
              </h3>
              <div className="space-y-2">
                <a href="/showroom" className="block font-['Helvetica_Neue:Regular',sans-serif] text-[15px] leading-[22px] text-white/88 transition-colors hover:text-[#c8ec66]">Showroom</a>
                <a href="/acheter-votre-vehicule" className="block font-['Helvetica_Neue:Regular',sans-serif] text-[15px] leading-[22px] text-white/88 transition-colors hover:text-[#c8ec66]">Acheter un véhicule</a>
                <a href="/vendre-votre-vehicule" className="block font-['Helvetica_Neue:Regular',sans-serif] text-[15px] leading-[22px] text-white/88 transition-colors hover:text-[#c8ec66]">Vendre un véhicule</a>
                <a href="/conseils" className="block font-['Helvetica_Neue:Regular',sans-serif] text-[15px] leading-[22px] text-white/88 transition-colors hover:text-[#c8ec66]">Consultation automobile</a>
                <a href="/a-propos" className="block font-['Helvetica_Neue:Regular',sans-serif] text-[15px] leading-[22px] text-white/88 transition-colors hover:text-[#c8ec66]">À propos</a>
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-['Wix_Madefor_Display:Regular',sans-serif] text-[18px] font-normal leading-[26px] tracking-[-0.3px] text-white">
                Mentions légales
              </h3>
              <div className="space-y-2">
                <span className="block cursor-pointer font-['Helvetica_Neue:Regular',sans-serif] text-[15px] leading-[22px] text-white/88 transition-colors hover:text-[#c8ec66]">Politique de confidentialité</span>
                <span className="block cursor-pointer font-['Helvetica_Neue:Regular',sans-serif] text-[15px] leading-[22px] text-white/88 transition-colors hover:text-[#c8ec66]">Conditions générales</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="Twitter"><TwitterIcon /></a>
          </div>

          <div className="mt-8 border-t border-[#1f2937] pt-5">
            <p className="text-center font-['Helvetica_Neue:Regular',sans-serif] text-[14px] leading-[22px] text-[#9ca3af]">
              © 2026 Vroom Paris. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>

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
