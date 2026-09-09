import { useState } from "react";
import svgPaths from "./svg-cac68bpf6v";
import "./hero.css";

/* ── Icônes 22px (tracés Figma, centrés dans leur pastille) ── */

function StepIconChat() {
  return (
    <svg className="block size-full" fill="none" viewBox="0 0 22 22" aria-hidden>
      <path d={svgPaths.pb2b3c00} stroke="#BCFF3D" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StepIconSearch() {
  return (
    <svg className="block size-full" fill="none" viewBox="0 0 22 22" aria-hidden>
      <path d={svgPaths.p26859400} stroke="#BCFF3D" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.25 19.25L15.2625 15.2625" stroke="#BCFF3D" strokeWidth="1.65" strokeLinecap="round" />
    </svg>
  );
}

function StepIconShield() {
  return (
    <svg className="block size-full" fill="none" viewBox="0 0 22 22" aria-hidden>
      <path d={svgPaths.p25473800} stroke="#BCFF3D" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StepIconArrow() {
  return (
    <svg className="block size-full" fill="none" viewBox="0 0 22 22" aria-hidden>
      <path d={svgPaths.pe3be980} stroke="#BCFF3D" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Données ─────────────────────────────────────────────── */

const STEPS = [
  {
    id: "01",
    label: "Étape 01",
    title: "Vous nous présentez votre projet",
    text: "Budget, modèle, options, financement, reprise… Votre conseiller analyse vos besoins pour définir une recherche sur mesure.",
    tags: ["Budget & financement", "Reprise"],
    Icon: StepIconChat,
  },
  {
    id: "02",
    label: "Étape 02",
    title: "Nous trouvons votre véhicule",
    text: "Réseau européen, stock disponible, prochains arrivages, nous vous proposons les meilleures options correspondant à votre demande.",
    tags: ["Réseau européen", "Stock live"],
    Icon: StepIconSearch,
  },
  {
    id: "03",
    label: "Étape 03",
    title: "Nous nous occupons de tout",
    text: "Vérification, négociation, démarches administratives, immatriculation, votre conseiller prend en charge chaque étape.",
    tags: ["Contrôle 100 pts", "Admin inclus"],
    Icon: StepIconShield,
  },
  {
    id: "04",
    label: "Étape 04",
    title: "Livraison ou retrait de votre véhicule",
    text: "Livraison sécurisée à domicile ou retrait en agence, vous choisissez. Nous vous accompagnons jusqu'à la remise des clés.",
    tags: ["Livraison à domicile"],
    Icon: StepIconArrow,
  },
] as const;

const DETAILS = [
  {
    id: "01",
    title: "Vous nous présentez votre projet",
    intro: "Un entretien dédié de 30 à 45 min pour cerner précisément votre projet automobile.",
    Icon: StepIconChat,
    points: [
      "Consultation visio, téléphone ou WhatsApp",
      "Définition de vos critères prioritaires",
      "Étude de votre budget et options de financement",
      "Prise en compte de votre véhicule en reprise",
    ],
  },
  {
    id: "02",
    title: "Nous trouvons votre véhicule",
    intro: "Accès à tout le marché : réseau européen, stock Vroom, arrivages. Réponse sous 24-48h.",
    Icon: StepIconSearch,
    points: [
      "Recherche sur notre stock + réseau partenaires",
      "Sélection des meilleures offres selon vos critères",
      "Présentation de 2 à 3 propositions personnalisées",
      "Comparatif clair pour faciliter votre choix",
    ],
  },
  {
    id: "03",
    title: "Nous nous occupons de tout",
    intro: "Zéro démarche de votre côté. Votre conseiller gère tout de A à Z en toute transparence.",
    Icon: StepIconShield,
    points: [
      "Inspection complète en 100 points du véhicule",
      "Négociation du prix en votre faveur",
      "Gestion de toutes les démarches administratives",
      "Immatriculation et suivi de votre dossier",
    ],
  },
  {
    id: "04",
    title: "Livraison ou retrait",
    intro: "Votre véhicule prêt, contrôlé, garanti — livré chez vous ou à retirer en agence.",
    Icon: StepIconArrow,
    points: [
      "Livraison sécurisée partout en France",
      "Retrait en agence à Soisy-sous-Montmorency",
      "État des lieux contradictoire à la remise",
    ],
  },
] as const;

/* ── Page ────────────────────────────────────────────────── */

export default function PageCommentCaMarche() {
  const [activeStep, setActiveStep] = useState<string>("01");
  return (
    <div className="w-full bg-[#0a0a0a] font-['DM_Sans',sans-serif] text-white">
      {/* ── Hero ── */}
      <section className="how-it-works-hero relative isolate overflow-hidden xl:flex xl:min-h-[100svh] xl:flex-col">
        {/* Une lumière continue derrière le titre et les cartes transparentes. */}
        <div aria-hidden className="how-it-works-hero__halo">
          <div className="how-it-works-hero__halo-lime" />
          <div className="how-it-works-hero__halo-mint" />
        </div>

        {/* wrapper plein-bleed : mêmes gouttières que la grille + barre basse */}
        <div className="how-it-works-hero__intro relative w-full px-6 pt-40 sm:px-10 lg:px-[60px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(188,255,61,0.25)] bg-[rgba(188,255,61,0.07)] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[1.6px] text-[#bcff3d]">
            <span className="size-[5px] rounded-full bg-[#bcff3d]" />
            VroomAdvisor · 4 étapes
          </div>

          {/* titre à gauche / texte à droite, même ligne de base que la maquette */}
          <div className="how-it-works-hero__heading mt-10 flex flex-col gap-5">
            <h1 className="min-w-0 font-['Syne',sans-serif] text-[clamp(32px,3.9vw,76px)] font-extrabold leading-[1.08] tracking-[-0.025em]">
              Comment ça <span className="whitespace-nowrap text-[#bcff3d]">marche ?</span>
            </h1>
            <p className="max-w-[390px] text-[13px] font-light leading-[1.7] text-white/45 lg:text-right">
              Votre conseiller Vroom vous accompagne de la définition de votre projet jusqu&apos;à la remise des clés, en
              prenant en charge l&apos;ensemble des démarches.
            </p>
          </div>
        </div>

        {/* ── 4 étapes (pleine largeur, bord à bord, hauteur viewport) ── */}
        <div className="relative mt-6 border-y border-white/10 xl:mt-4 xl:flex xl:flex-1 xl:flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:flex-1 xl:grid-cols-4">
            {STEPS.map((step, i) => {
              const isActive = activeStep === step.id;
              return (
              <article
                key={step.id}
                onMouseEnter={() => setActiveStep(step.id)}
                onFocus={() => setActiveStep(step.id)}
                className={`how-it-works-hero__step relative flex min-h-[440px] flex-col overflow-hidden border-r border-white/[0.06] p-7 transition-colors duration-300 sm:p-8 xl:min-h-[600px] ${
                  isActive ? "bg-[rgba(188,255,61,0.12)] shadow-[inset_0_0_0_1px_rgba(188,255,61,0.35)]" : "bg-transparent"
                }`}
              >
                {/* label + petit tiret court (maquette : ~28px, pas toute la largeur) */}
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#a4c639]">
                    {step.label}
                  </span>
                  <span aria-hidden className="h-px w-[28px] bg-[#a4c639]/50" />
                </div>

                <div className="mt-5 flex size-[52px] shrink-0 items-center justify-center rounded-[14px] border border-[rgba(188,255,61,0.35)] bg-[rgba(188,255,61,0.07)]">
                  <div className="size-[22px]">
                    <step.Icon />
                  </div>
                </div>

                {/* La description suit la hauteur naturelle de chaque titre. */}
                <h2 className="mt-6 font-['Syne',sans-serif] text-[clamp(23px,1.95vw,34px)] font-extrabold leading-[1.08] tracking-[-0.015em]">
                  {step.title}
                </h2>
                <p className="mt-4 max-w-[34ch] text-[13px] font-light leading-[1.7] text-white/45">{step.text}</p>

                {/* tags plaqués en bas : même wrapper, même ligne de base */}
                <div className="relative z-[1] mt-auto flex flex-wrap gap-2 pt-8">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex h-[24px] items-center whitespace-nowrap rounded-full border border-[rgba(188,255,61,0.25)] bg-[rgba(188,255,61,0.06)] px-2.5 text-[10px] font-normal leading-none text-[#b8d94e]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* grand chiffre : ancré en bas, rogné proprement comme la maquette */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute bottom-[-24px] right-[6px] z-0 select-none font-['Syne',sans-serif] text-[148px] font-extrabold leading-[0.8] tracking-[-0.04em] transition-colors duration-300 xl:bottom-[-28px] xl:text-[190px] ${
                    isActive ? "text-[rgba(188,255,61,0.13)]" : "text-white/[0.045]"
                  }`}
                >
                  {step.id}
                </span>
                {/* ligne verte qui glisse de gauche à droite en haut de la case */}
                <span
                  aria-hidden
                  className={`absolute inset-x-0 top-0 h-[3px] origin-left bg-[#c8f169] transition-transform duration-500 ease-out ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute top-1/2 right-0 z-10 hidden size-[20px] -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(188,255,61,0.25)] bg-[#0c0d0c] xl:flex"
                  >
                    <svg className="size-[12px]" fill="none" viewBox="0 0 10 10">
                      <path d="M2 5h6M5.5 7.5L8 5 5.5 2.5" stroke="#BCFF3D" strokeOpacity="0.7" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
              </article>
              );
            })}
          </div>

          {/* ── barre basse : gauche / droite collés aux bords, mêmes gouttières que le header ── */}
          <div className="border-t border-white/10 xl:shrink-0">
            <div className="flex w-full flex-col gap-4 px-6 py-4 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-[60px]">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px] font-light text-white/45">
              <span className="inline-flex items-center gap-2">
                <svg className="size-3.5" fill="none" viewBox="0 0 12 12" aria-hidden>
                  <circle cx="6" cy="6" r="5" stroke="#BCFF3D" strokeWidth="1" opacity="0.7" />
                  <path d="M4 6l1.5 1.5L8 5" stroke="#BCFF3D" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
                </svg>
                Consultation gratuite
              </span>
              <span className="inline-flex items-center gap-2">
                <svg className="size-3.5" fill="none" viewBox="0 0 12 12" aria-hidden>
                  <circle cx="6" cy="6" r="5" stroke="#BCFF3D" strokeWidth="1" opacity="0.7" />
                  <path d="M4 6l1.5 1.5L8 5" stroke="#BCFF3D" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
                </svg>
                Sans engagement
              </span>
              <span className="inline-flex items-center gap-2">
                <svg className="size-3.5" fill="none" viewBox="0 0 12 12" aria-hidden>
                  <circle cx="6" cy="6" r="5.25" stroke="#BCFF3D" strokeWidth="1" opacity="0.7" />
                  <path d="M6 3.5V6l1.5 1" stroke="#BCFF3D" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
                </svg>
                Réponse sous 24h
              </span>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center lg:ml-auto lg:shrink-0">
              <a
                href="/conseils"
                className="inline-flex h-[46px] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#c6f16b] px-7 font-['Syne',sans-serif] text-[13.5px] font-bold text-[#101210] transition hover:bg-[#d4ff7a]"
              >
                En savoir plus
                <svg className="size-3.5" fill="none" viewBox="0 0 14 14" aria-hidden>
                  <path d="M7 3v8M3.5 7.5L7 11l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="/conseils"
                className="inline-flex h-[46px] items-center justify-center whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-7 text-[13.5px] font-normal text-white/60 transition hover:border-white/25 hover:text-white"
              >
                Réserver ma consultation
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Détails : copie pixel-perfect de la maquette ── */}
      <section className="relative w-full overflow-hidden bg-[#0a0a0a] px-5 pb-4 pt-32 sm:px-8 md:pt-[160px] lg:px-10 lg:pt-[184px] xl:px-[80px] xl:pt-[200px]">
        {/* halo vert diffus derrière le titre */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[40px] h-[480px] w-[880px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(200,241,105,0.07),transparent)] blur-2xl"
        />
        <div className="relative flex justify-center">
          <span className="rounded-full border border-[rgba(200,241,105,0.22)] bg-[rgba(200,241,105,0.06)] px-[18px] py-[9px] text-[11px] font-medium uppercase tracking-[2px] text-[#d7f75b]">
            Les détails qui font la différence
          </span>
        </div>
        <h2 className="relative mx-auto mt-7 w-full max-w-none text-center font-['Syne',sans-serif] text-[32px] font-extrabold leading-[1.08] tracking-[-0.01em] text-white sm:text-[52px] lg:whitespace-nowrap lg:text-[clamp(48px,4.2vw,68px)]">
          Ce qu&apos;on fait <span className="text-[#c8f169]">concrètement</span>
          <br />
          <span className="text-[#f2f2f2]">à chaque étape</span>
        </h2>

        <div className="relative mt-12 grid w-full grid-cols-1 gap-5 md:mt-[68px] md:grid-cols-2 md:gap-[24px]">
          {DETAILS.map((detail) => (
            <article
              key={detail.id}
              className="relative w-full overflow-hidden rounded-[26px] border border-white/[0.07] bg-[#131313] p-7 sm:p-9 lg:p-[42px]"
            >
              {/* reflet vert en haut à droite */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-[70px] -top-[70px] h-[230px] w-[280px] rounded-full bg-[radial-gradient(closest-side,rgba(200,241,105,0.09),transparent)] blur-xl"
              />
              <div className="relative flex w-full items-start gap-5 lg:gap-[24px]">
                <div className="flex w-[62px] shrink-0 flex-col items-center gap-5">
                  <span className="inline-flex h-[54px] w-[62px] items-center justify-center rounded-[15px] border border-[rgba(200,241,105,0.28)] bg-[rgba(200,241,105,0.08)] font-['Syne',sans-serif] text-[19px] font-extrabold tracking-[0.04em] text-[#c8f169]">
                    {detail.id}
                  </span>
                  <span className="text-[#c8f169]">
                    <span className="block size-[22px]">
                      <detail.Icon />
                    </span>
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-[3px]">
                  <h3 className="font-['Syne',sans-serif] text-[20px] font-bold leading-[26px] tracking-[-0.01em] text-white lg:text-[23px] lg:leading-[28px] xl:whitespace-nowrap">
                    {detail.title}
                  </h3>
                  <p className="mt-[10px] w-full text-[14.5px] font-normal leading-[23px] text-[#8e8e8e] xl:whitespace-nowrap">{detail.intro}</p>
                  <ul className="mt-[22px] w-full space-y-[11px]">
                    {detail.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-[10px] text-[14.5px] font-normal leading-[22px] text-[#b9b9b9] xl:whitespace-nowrap"
                      >
                        <span aria-hidden className="mt-[9px] size-[5px] shrink-0 rounded-full bg-[#c8f169]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── CTA final ── */}
        <div className="relative mt-12 overflow-hidden rounded-[24px] border border-[rgba(188,255,61,0.18)] bg-gradient-to-br from-[rgba(188,255,61,0.09)] to-white/[0.02] px-6 py-12 text-center sm:px-10 md:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(188,255,61,0.16),transparent)] blur-2xl"
          />
          <h2 className="relative font-['Syne',sans-serif] text-[28px] font-extrabold leading-[1.15] tracking-tight sm:text-[44px]">
            Prêt à démarrer votre
            <br />
            <span className="text-[#c8f169]">projet automobile ?</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-[440px] text-[14px] font-light leading-[22px] text-white/45">
            Réservez votre consultation gratuite. Votre conseiller vous recontacte sous 24h.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/conseils"
              className="inline-flex h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#c6f16b] px-8 font-['Syne',sans-serif] text-[15px] font-bold text-[#101210] transition hover:bg-[#d4ff7a] sm:w-auto"
            >
              Réserver ma consultation
              <svg className="size-4" fill="none" viewBox="0 0 16 16" aria-hidden>
                <path d="M2 8h11M9 3.5L13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="tel:+33670760719"
              className="inline-flex h-[50px] w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 text-[15px] font-normal text-white/70 transition hover:border-white/25 hover:text-white sm:w-auto"
            >
              <svg className="size-3.5" viewBox="0 0 12 12" aria-hidden>
                <path d={svgPaths.p355422f2} fill="#BCFF3D" />
              </svg>
              06 70 76 07 19
            </a>
          </div>
          <div className="relative mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-light text-white/35">
            <span>Gratuit &amp; sans engagement</span>
            <span>Réponse sous 24h</span>
            <span>Conseiller dédié</span>
            <span>Garantie 12 mois</span>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="mt-16 border-t border-white/[0.06] bg-[#0c0d0c]">
        <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-10 px-6 py-14 text-center sm:grid-cols-3 sm:gap-6">
          <div>
            <p className="font-['Syne',sans-serif] text-[17px] font-bold">Qu&apos;attendez-vous ?</p>
            <a
              href="tel:+33670760719"
              className="mx-auto mt-4 inline-flex h-[42px] items-center gap-2 rounded-[10px] bg-[#d7f884] px-5 text-[15px] font-medium text-[#101210]"
            >
              <svg className="size-4" fill="none" viewBox="0 0 16 16" aria-hidden>
                <path d={svgPaths.p2a44c680} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
              </svg>
              06 70 76 07 19
            </a>
            <a href="mailto:contact@vroomparis.fr" className="mt-5 flex items-center justify-center gap-2 text-[14px] text-white/80">
              <svg className="size-4" fill="none" viewBox="0 0 16 16" aria-hidden>
                <path d={svgPaths.p17070980} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
                <path d={svgPaths.p120c8200} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              </svg>
              contact@vroomparis.fr
            </a>
            <p className="mx-auto mt-3 max-w-[260px] text-[13px] font-light leading-[20px] text-white/55">
              4 bis Av. Alexandre Dumas, 95230 Soisy-sous-Montmorency
            </p>
          </div>
          <nav aria-label="Informations générales">
            <p className="font-['Syne',sans-serif] text-[17px] font-bold">Informations générales :</p>
            <div className="mt-4 space-y-2.5 text-[14px] font-light text-white/75">
              <a href="/showroom" className="block transition hover:text-[#c8f169]">Showroom</a>
              <a href="/acheter-votre-vehicule" className="block transition hover:text-[#c8f169]">Acheter un véhicule</a>
              <a href="/vendre-votre-vehicule" className="block transition hover:text-[#c8f169]">Vendre votre véhicule</a>
              <a href="/conseils" className="block transition hover:text-[#c8f169]">Consultation automobile</a>
              <a href="/a-propos" className="block transition hover:text-[#c8f169]">À propos</a>
              <a href="/comment-ca-marche" className="block font-normal text-[#c8f169]">Comment ça marche</a>
            </div>
          </nav>
          <div>
            <p className="font-['Syne',sans-serif] text-[17px] font-bold">Mentions légales</p>
            <div className="mt-4 space-y-2.5 text-[14px] font-light text-white/75">
              <span className="block">Politique de confidentialité</span>
              <span className="block">Conditions générales</span>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4 text-white/70">
              <a href="#" aria-label="Facebook" className="transition hover:text-[#c8f169]">
                <svg className="size-5" fill="none" viewBox="0 0 20 20" aria-hidden>
                  <path d={svgPaths.p30c8d680} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="transition hover:text-[#c8f169]">
                <svg className="size-5" fill="none" viewBox="0 0 20 20" aria-hidden>
                  <path d={svgPaths.p4b98700} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d={svgPaths.p19f4a800} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </a>
              <a href="#" aria-label="X" className="transition hover:text-[#c8f169]">
                <svg className="size-5" fill="none" viewBox="0 0 20 20" aria-hidden>
                  <path d={svgPaths.p2ffa5d80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.06] py-5 text-center text-[13px] font-light text-white/35">
          © 2026 Vroom Paris. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
