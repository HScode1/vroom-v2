import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate, useLocation } from "react-router";
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
  { to: "/conseils", label: "Conseil" },
  { to: "/conseils/formulaire", label: "Formulaire" },
  { to: "/conseils/formulaire/etape-2", label: "Étape 2 conseil" },
  { to: "/vendre-votre-vehicule", label: "Vendre" },
  { to: "/vendre-votre-vehicule/formulaire", label: "Vendre étape 2" },
  { to: "/acheter-votre-vehicule", label: "Acheter" },
  { to: "/acheter-votre-vehicule/etape-2", label: "Acheter étape 2" },
  { to: "/showroom", label: "Showroom" },
  { to: "/showroom/produit", label: "Car details" },
];

const PAGE_SIZES: Record<string, { width: number; height: number }> = {
  "/": { width: 1440, height: 7900 },
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
  const wrapperClassName = path === "/showroom/produit" ? "relative" : "relative mx-auto";
  return (
    <div className={wrapperClassName} style={{ width, height }}>
      {children}
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
    <nav className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex flex-col justify-center items-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 transition-colors gap-[5px]"
        aria-label="Menu"
      >
        <span
          className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`}
        />
        <span
          className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-14 right-0 bg-[#1e1e1e] border border-white/10 rounded-2xl overflow-hidden min-w-[200px] shadow-2xl">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-5 py-3 text-sm transition-colors ${
                  isActive
                    ? "bg-[#bcff3d] text-black font-semibold"
                    : "text-white hover:bg-white/10"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
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
                <div className="h-screen w-full bg-[#181818] overflow-x-auto overflow-y-auto">
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
