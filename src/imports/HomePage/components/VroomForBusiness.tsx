import {
  ArrowRight,
  Clock3,
  Handshake,
  KeyRound,
  LockKeyhole,
  Monitor,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import svgPaths from "../svg-gblhduksgt";
import mercedesLogo from "../96f8bb8d3678fe064dfed164c840139d345544de.png";
import cerLogo from "../6b0a9a74fd68078c615b59c6501c841e272fa24f.png";
import volkswagenLogo from "../5596e2fbc82a97b91037ff8c9bdec22fa3b7c814.png";
import bmwLogo from "../e8adcabdd63ff6f39fe6365e669108e1edcf7469.png";

const benefits = [
  {
    icon: Monitor,
    label: "Solution dédiée aux professionnels",
  },
  {
    icon: Clock3,
    label: "Outils développés pour votre activité",
  },
  {
    icon: Handshake,
    label: "Accédez à des avantages partenaires",
  },
];

function ProLogo() {
  return (
    <div className="mx-auto w-fit text-center" aria-label="Vroom Solution Pro">
      <p className="font-['Wix_Madefor_Display:Bold',sans-serif] text-[46px] font-bold leading-[0.86] tracking-[-1.8px] text-white sm:text-[54px] xl:text-[58px]">
        vroom
      </p>
      <div className="mt-2 h-[3px] w-full rounded-full bg-[#c8ec66]" />
      <p className="mt-2 font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[16px] font-medium leading-none text-[#c8ec66] sm:text-[18px]">
        Solution Pro
      </p>
    </div>
  );
}

function BenefitItem({ icon: Icon, label }: (typeof benefits)[number]) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center lg:flex-row lg:gap-4">
      <span className="flex size-[38px] shrink-0 items-center justify-center rounded-full border border-[#c8ec66]/25 bg-[#c8ec66]/10 shadow-[inset_0_0_16px_rgba(200,236,102,0.05)] sm:size-[44px] xl:size-[48px]">
        <Icon className="size-[19px] text-[#c8ec66] sm:size-[21px] xl:size-[22px]" strokeWidth={1.8} aria-hidden="true" />
      </span>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[10px] leading-[14px] text-white/90 sm:text-[13px] sm:leading-[18px] lg:max-w-[350px] lg:text-[15px] lg:leading-[21px] xl:text-[16px]">
        {label}
      </p>
    </div>
  );
}

function MainCallToAction() {
  return (
    <a
      className="group relative mx-auto flex min-h-[78px] w-full max-w-[890px] items-center rounded-[24px] border border-white/70 bg-white px-5 text-[#121d28] shadow-[0_0_0_8px_rgba(255,255,255,0.035),-12px_10px_24px_rgba(0,174,255,0.25),12px_10px_26px_rgba(188,255,61,0.28)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8ec66] sm:min-h-[88px] sm:px-7 xl:min-h-[96px] xl:rounded-[28px] xl:px-8"
      href="mailto:contact@vroomparis.fr?subject=Découvrir%20la%20Solution%20Pro"
    >
      <span className="flex size-[48px] shrink-0 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#e8f7d9] to-[#f5f9eb] sm:size-[54px]">
        <KeyRound className="size-[25px] text-[#7ab93d]" strokeWidth={2} aria-hidden="true" />
      </span>

      <span className="flex-1 px-3 text-center font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[18px] leading-[24px] sm:px-6 sm:text-[27px] sm:leading-[32px] xl:text-[31px]">
        Découvrir la <strong className="font-semibold text-[#7ab93d]">solution Pro</strong>
      </span>

      <span className="flex size-[48px] shrink-0 items-center justify-end sm:size-[54px]">
        <ArrowRight
          className="size-[28px] text-[#8bc34a] transition-transform duration-300 group-hover:translate-x-1.5 sm:size-[34px]"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </span>
    </a>
  );
}

function ReservedAccess() {
  return (
    <div className="mx-auto flex w-full max-w-[1020px] items-center gap-4 sm:gap-7">
      <span className="h-px flex-1 bg-white/20" />
      <div className="flex shrink-0 items-center gap-3">
        <span className="flex size-[38px] items-center justify-center rounded-full border border-[#c8ec66]/30 bg-[#c8ec66]/8">
          <LockKeyhole className="size-[19px] text-[#c8ec66]" strokeWidth={1.8} aria-hidden="true" />
        </span>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[13px] text-white/85 sm:text-[15px]">
          Accès réservé aux professionnels
        </p>
      </div>
      <span className="h-px flex-1 bg-white/20" />
    </div>
  );
}

function RenaultLogo() {
  return (
    <svg className="h-[28px] w-auto sm:h-[34px]" fill="none" viewBox="0 0 71 62" aria-label="Renault">
      <path d={svgPaths.pd950980} fill="white" />
      <path clipRule="evenodd" d={svgPaths.p3d22ab00} fill="white" fillRule="evenodd" />
      <path clipRule="evenodd" d={svgPaths.p54d7200} fill="white" fillRule="evenodd" />
      <path d={svgPaths.p37bc6400} fill="white" />
      <path d={svgPaths.p26420110} fill="white" />
      <path d={svgPaths.pb398400} fill="white" />
      <path d={svgPaths.p28afc700} fill="white" />
      <path d={svgPaths.p1298c780} fill="white" />
    </svg>
  );
}

function PartnerLogos() {
  return (
    <div className="mx-auto flex w-full max-w-[720px] items-center justify-between gap-5 px-2 opacity-80 sm:gap-10">
      <img className="h-[28px] w-auto object-contain sm:h-[34px]" src={cerLogo} alt="CER" />
      <RenaultLogo />
      <img className="h-[30px] w-auto object-contain sm:h-[38px]" src={mercedesLogo} alt="Mercedes-Benz" />
      <img className="h-[29px] w-auto object-contain sm:h-[36px]" src={volkswagenLogo} alt="Volkswagen" />
      <img className="h-[30px] w-auto object-contain sm:h-[38px]" src={bmwLogo} alt="BMW" />
    </div>
  );
}

function SecurityNotice() {
  return (
    <div className="flex items-center justify-start gap-2 text-left font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[10px] text-white/72 sm:text-[12px]">
      <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#c8ec66]/30 bg-[#c8ec66]/8">
        <ShieldCheck className="size-[16px] text-[#c8ec66]" strokeWidth={1.8} aria-hidden="true" />
      </span>
      <p>Solution sécurisée&nbsp; · &nbsp;Hébergée en France&nbsp; · &nbsp;Conformité RGPD</p>
    </div>
  );
}

type ActionCardProps = {
  icon: typeof Handshake;
  title: string;
  description: React.ReactNode;
  linkLabel: string;
  subject: string;
};

function ActionCard({ icon: Icon, title, description, linkLabel, subject }: ActionCardProps) {
  return (
    <a
      className="group flex min-h-[116px] flex-1 flex-col items-center justify-center gap-2 px-3 py-3 text-center focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#c8ec66] sm:min-h-[126px] sm:flex-row sm:gap-5 sm:px-6 sm:py-5 xl:px-8"
      href={`mailto:contact@vroomparis.fr?subject=${encodeURIComponent(subject)}`}
    >
      <span className="flex size-[42px] shrink-0 items-center justify-center rounded-[12px] border border-[#c8ec66]/50 bg-[#c8ec66]/5 sm:size-[58px] sm:rounded-[16px] xl:size-[64px]">
        <Icon className="size-[23px] text-[#c8ec66] sm:size-[29px] xl:size-[31px]" strokeWidth={1.7} aria-hidden="true" />
      </span>

      <span className="min-w-0 flex-1 text-center">
        <span className="block font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[12px] font-semibold leading-[16px] text-white sm:text-[16px] sm:leading-[22px] xl:text-[18px]">
          {title}
        </span>
        <span className="mt-1 hidden font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] leading-[18px] text-white/65 sm:block xl:text-[13px]">
          {description}
        </span>
        <span className="mt-2 inline-flex items-center justify-center gap-1 font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[10px] font-medium leading-[14px] text-[#c8ec66] sm:mt-3 sm:gap-2 sm:text-[13px] xl:text-[14px]">
          {linkLabel}
          <ArrowRight className="size-[14px] shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:size-[17px]" strokeWidth={1.8} aria-hidden="true" />
        </span>
      </span>
    </a>
  );
}

export default function VroomForBusiness() {
  return (
    <section
      className="absolute left-0 top-[7650px] h-[787px] w-screen overflow-hidden bg-[#073250] lg:top-[6296px] xl:left-[calc((1440px-100vw)/2)]"
      data-name="Vroom Solution Pro"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(0,153,255,0.16),transparent_38%),radial-gradient(circle_at_86%_14%,rgba(200,236,102,0.23),transparent_42%),linear-gradient(112deg,#062d4c_0%,#07394d_49%,#204b36_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-b from-transparent via-[#102126]/70 to-[#181818]" />

      <div className="relative mx-auto flex h-full w-full max-w-[1180px] flex-col px-5 py-5 sm:px-8 sm:py-8 lg:px-10 xl:px-0 xl:py-9">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[0.92fr_1.08fr] md:gap-10 lg:gap-20 xl:gap-28">
          <div>
            <ProLogo />

            <div className="mt-5 grid grid-cols-3 gap-3 lg:mt-7 lg:grid-cols-1 lg:gap-4">
              {benefits.map((benefit) => (
                <BenefitItem key={benefit.label} {...benefit} />
              ))}
            </div>
          </div>

          <div className="text-left md:pt-2 lg:pt-3">
            <SecurityNotice />

            <h2 className="mt-5 max-w-[620px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[26px] font-normal leading-[1.22] tracking-[-0.7px] text-white sm:text-[32px] lg:text-[34px] xl:text-[38px]">
              Une solution pensée pour
              <br className="hidden sm:block" /> les <span className="font-medium text-[#a8d447]">professionnels</span> de l&apos;automobile.
            </h2>
            <p className="mt-4 max-w-[590px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[13px] leading-[21px] text-white/72 sm:text-[15px] sm:leading-[25px] lg:text-[16px]">
              Développez votre activité grâce à une solution conçue pour simplifier votre quotidien.
              <br className="hidden xl:block" /> Découvrez nos outils et les opportunités de partenariat réservées aux professionnels.
            </p>
          </div>
        </div>

        <div className="mt-4 sm:mt-7 lg:mt-9">
          <MainCallToAction />
        </div>

        <div className="mt-3 sm:mt-5">
          <ReservedAccess />
        </div>

        <div className="mx-auto mt-3 grid w-full max-w-[1040px] grid-cols-[1fr_auto_1fr] overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:mt-4 sm:rounded-[22px]">
          <ActionCard
            icon={Handshake}
            title="Devenir partenaire"
            description={<>Rejoignez notre réseau de partenaires<br className="hidden xl:block" /> et bénéficiez d&apos;avantages exclusifs.</>}
            linkLabel="En savoir plus"
            subject="Devenir partenaire Solution Pro"
          />

          <div className="relative w-px bg-white/15">
            <span className="absolute left-1/2 top-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#184554] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[10px] uppercase text-white/70">
              ou
            </span>
          </div>

          <ActionCard
            icon={UserRound}
            title="Être informé du lancement"
            description={<>Recevez toutes les informations sur le lancement<br className="hidden xl:block" /> de la Solution Pro.</>}
            linkLabel="S'inscrire à la liste d'attente"
            subject="Inscription à la liste d’attente Solution Pro"
          />
        </div>

        <div className="mt-auto pt-4 sm:pt-5">
          <PartnerLogos />
        </div>
      </div>
    </section>
  );
}
