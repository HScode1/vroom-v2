import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate, useLocation } from "react-router";
import appLogo from "../imports/HomePage/logo.png";
import HomePage from "../imports/HomePage/HomePage";
import AProposDeNous from "../imports/AProposDeNous/AProposDeNous";
import PageConseil from "../imports/PageConseil/PageConseil";
import RedirectionFormulaireConseil from "../imports/RedirectionFormulaireConseil/RedirectionFormulaireConseil";
import Etape2FormulaireConseil from "../imports/Etape2FormulaireConseil/Etape2FormulaireConseil";
import PageCmsVendreVotreVehicule from "../imports/PageCmsVendreVotreVehicule/PageCmsVendreVotreVehicule";
import Etape2FormulaireVendreVotreVehicule from "../imports/Etape2FormulaireVendreVotreVehicule/Etape2FormulaireVendreVotreVehicule";
import FormulaireAcheterVotreVehicule from "../imports/FormulaireAcheterVotreVehicule/FormulaireAcheterVotreVehicule";
import Etape2FormulaireAcheterVotreVehicule from "../imports/Etape2FormulaireAcheterVotreVehicule/Etape2FormulaireAcheterVotreVehicule";
import Premium from "../imports/Premium/Premium";
import PageProduitPremium from "../imports/PageProduitPremium/PageProduitPremium";
import { AdminAuthProvider, useAdminAuth } from "../admin/context/AdminAuthContext";
import { AdminDataProvider } from "../admin/context/AdminDataContext";
import AdminLayout from "../admin/layout/AdminLayout";
import AdminLogin from "../admin/pages/AdminLogin";
import AdminDashboard from "../admin/pages/AdminDashboard";
import AdminVehicules from "../admin/pages/AdminVehicules";
import AdminVehiculeForm from "../admin/pages/AdminVehiculeForm";
import AdminDemandesAchat from "../admin/pages/AdminDemandesAchat";
import AdminDemandesVente from "../admin/pages/AdminDemandesVente";
import AdminDemandeVenteDetail from "../admin/pages/AdminDemandeVenteDetail";
import AdminRendezVous from "../admin/pages/AdminRendezVous";

const NAV_LINKS = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/showroom", label: "Showroom" },
  { to: "/acheter-votre-vehicule", label: "Acheter" },
  { to: "/vendre-votre-vehicule", label: "Vendre" },
  { to: "/conseils", label: "Conseil" },
];

const PAGE_SIZES: Record<string, { width: number; height: number }> = {
  "/": { width: 1440, height: 6226 },
  "/a-propos": { width: 1440, height: 4347 },
  "/conseils": { width: 1440, height: 4379 },
  "/conseils/formulaire": { width: 1440, height: 2404 },
  "/conseils/formulaire/etape-2": { width: 1440, height: 2219 },
  "/vendre-votre-vehicule": { width: 1440, height: 3293 },
  "/vendre-votre-vehicule/formulaire": { width: 1440, height: 1833 },
  "/acheter-votre-vehicule": { width: 1440, height: 2933 },
  "/acheter-votre-vehicule/etape-2": { width: 1440, height: 2584 },
  "/showroom": { width: 1920, height: 3833 },
  "/showroom/produit": { width: 1920, height: 2719 },
};

function PageWrapper({ path, children }: { path: string; children: React.ReactNode }) {
  const { width, height } = PAGE_SIZES[path] ?? { width: 1440, height: 900 };
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window === "undefined" ? width : window.innerWidth,
  );

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (path === "/showroom") {
    if (viewportWidth < 1280) {
      return <div className="relative w-full">{children}</div>;
    }

    return (
      <ResponsivePageWrapper
        className="showroom-responsive-wrapper"
        backgroundColor="#181818"
        backgroundTransitionY={3420}
        backgroundTransitionColor="#181818"
        height={height}
        width={width}
      >
        {children}
      </ResponsivePageWrapper>
    );
  }

  if (path === "/") {
    if (viewportWidth < 1440) {
      return <div className="relative w-full">{children}</div>;
    }

    const wrapperClassName = "relative mx-auto";
    return (
      <div className={wrapperClassName} style={{ width, height }}>
        {children}
      </div>
    );
  }

  if (
    path === "/a-propos" ||
    path === "/conseils" ||
    path === "/conseils/formulaire" ||
    path === "/conseils/formulaire/etape-2" ||
    path === "/vendre-votre-vehicule" ||
    path === "/vendre-votre-vehicule/formulaire" ||
    path === "/acheter-votre-vehicule" ||
    path === "/acheter-votre-vehicule/etape-2" ||
    path === "/showroom/produit"
  ) {
    return <div className="relative w-full">{children}</div>;
  }

  const wrapperClassName = "relative mx-auto";
  return (
    <div className={wrapperClassName} style={{ width, height }}>
      {children}
    </div>
  );
}

function ResponsivePageWrapper({
  width,
  height,
  className,
  backgroundColor,
  backgroundTransitionY,
  backgroundTransitionColor,
  children,
}: {
  width: number;
  height: number;
  className?: string;
  backgroundColor?: string;
  backgroundTransitionY?: number;
  backgroundTransitionColor?: string;
  children: React.ReactNode;
}) {
  const getScale = () => {
    if (typeof window === "undefined") {
      return 1;
    }

    const horizontalPadding = 32;
    return Math.min(1, Math.max(0.2, (window.innerWidth - horizontalPadding) / width));
  };

  const [scale, setScale] = useState(getScale);

  useEffect(() => {
    const handleResize = () => setScale(getScale());

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const wrapperBackground =
    backgroundTransitionY !== undefined && backgroundTransitionColor
      ? `linear-gradient(to bottom, ${backgroundColor ?? "transparent"} 0, ${backgroundColor ?? "transparent"} ${backgroundTransitionY * scale}px, ${backgroundTransitionColor} ${backgroundTransitionY * scale}px, ${backgroundTransitionColor} 100%)`
      : backgroundColor;

  return (
    <div
      className={`relative mx-auto w-full overflow-x-hidden ${className ?? ""}`}
      style={{
        ["--responsive-page-scale" as string]: String(scale),
        ["--responsive-page-transition-y" as string]: backgroundTransitionY ? `${backgroundTransitionY * scale}px` : "0px",
        ["--responsive-page-bg" as string]: backgroundColor ?? "transparent",
        ["--responsive-page-transition-color" as string]: backgroundTransitionColor ?? "transparent",
        height: height * scale,
        background: wrapperBackground,
      }}
    >
      <div
        className="absolute left-1/2 top-0 origin-top"
        style={{
          ["--page-scale" as string]: String(scale),
          ["--page-width" as string]: `${width}px`,
          width,
          height,
          transform: `translateX(-50%) scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function ProtectedAdminRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAdminAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/admin/login" replace />;
}

function HamburgerNav() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");
  const [open, setOpen] = useState(false);
  if (isAdmin) return null;

  return (
    <>
      <nav className="fixed left-4 right-4 top-4 z-[60] flex items-center justify-between">
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center"
          aria-label="Retour à l'accueil"
        >
          <img src={appLogo} alt="Vroom" className="h-14 w-auto object-contain sm:h-16" />
        </NavLink>

        <button
          onClick={() => setOpen((v) => !v)}
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full bg-white/10 transition-colors hover:bg-white/20"
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-5 origin-center bg-white transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 origin-center bg-white transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>

        {open && (
          <div className="absolute right-0 top-14 min-w-[200px] overflow-hidden rounded-2xl border border-white/10 bg-[#1e1e1e] shadow-2xl">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-5 py-3 text-sm transition-colors ${
                    isActive ? "bg-[#bcff3d] font-semibold text-black" : "text-white hover:bg-white/10"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="border-t border-white/10">
              <NavLink
                to="/admin/login"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-5 py-3 text-sm text-white/50 transition-colors hover:bg-white/10 hover:text-white"
              >
                <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M18 12H9m0 0l3-3m-3 3l3 3" />
                </svg>
                Connexion
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default function App() {
  return (
    <AdminAuthProvider>
      <AdminDataProvider>
        <BrowserRouter>
          <Routes>
            {/* ── Admin routes (own full-screen layout) ── */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin"
              element={
                <ProtectedAdminRoute>
                  <AdminLayout />
                </ProtectedAdminRoute>
              }
            >
              <Route index element={<AdminDashboard />} />
              <Route path="vehicules" element={<AdminVehicules />} />
              <Route path="vehicules/nouveau" element={<AdminVehiculeForm />} />
              <Route path="vehicules/:id/edit" element={<AdminVehiculeForm />} />
              <Route path="demandes/achat" element={<AdminDemandesAchat />} />
              <Route path="demandes/vente" element={<AdminDemandesVente />} />
              <Route path="demandes/vente/:id" element={<AdminDemandeVenteDetail />} />
              <Route path="rendez-vous" element={<AdminRendezVous />} />
            </Route>

            {/* ── Public site routes ── */}
            <Route
              path="*"
              element={
                <div className="h-[100dvh] w-full bg-[#181818] overflow-x-hidden overflow-y-auto overscroll-none transition-colors duration-300">
                  <HamburgerNav />
                  <Routes>
                    <Route path="/" element={<PageWrapper path="/"><HomePage /></PageWrapper>} />
                    <Route path="/a-propos" element={<PageWrapper path="/a-propos"><AProposDeNous /></PageWrapper>} />
                    <Route path="/conseils" element={<PageWrapper path="/conseils"><PageConseil /></PageWrapper>} />
                    <Route path="/conseils/formulaire" element={<PageWrapper path="/conseils/formulaire"><RedirectionFormulaireConseil /></PageWrapper>} />
                    <Route path="/conseils/formulaire/etape-2" element={<PageWrapper path="/conseils/formulaire/etape-2"><Etape2FormulaireConseil /></PageWrapper>} />
                    <Route path="/vendre-votre-vehicule" element={<PageWrapper path="/vendre-votre-vehicule"><PageCmsVendreVotreVehicule /></PageWrapper>} />
                    <Route path="/vendre-votre-vehicule/formulaire" element={<PageWrapper path="/vendre-votre-vehicule/formulaire"><Etape2FormulaireVendreVotreVehicule /></PageWrapper>} />
                    <Route path="/acheter-votre-vehicule" element={<PageWrapper path="/acheter-votre-vehicule"><FormulaireAcheterVotreVehicule /></PageWrapper>} />
                    <Route path="/acheter-votre-vehicule/etape-2" element={<PageWrapper path="/acheter-votre-vehicule/etape-2"><Etape2FormulaireAcheterVotreVehicule /></PageWrapper>} />
                    <Route path="/showroom" element={<PageWrapper path="/showroom"><Premium /></PageWrapper>} />
                    <Route path="/showroom/produit" element={<PageWrapper path="/showroom/produit"><PageProduitPremium /></PageWrapper>} />
                    <Route path="/showroom/:id" element={<PageProduitPremium />} />
                  </Routes>
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </AdminDataProvider>
    </AdminAuthProvider>
  );
}
