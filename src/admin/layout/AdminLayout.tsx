import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import { useAdminAuth } from "../context/AdminAuthContext";
import { useAdminData } from "../context/AdminDataContext";
import {
  LayoutDashboard,
  Car,
  ShoppingCart,
  Tag,
  CalendarDays,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Badge } from "../../app/components/ui/badge";

function NavItem({
  to,
  label,
  icon: Icon,
  end,
  badge,
  collapsed,
}: {
  to: string;
  label: string;
  icon: React.ElementType;
  end?: boolean;
  badge?: number;
  collapsed: boolean;
}) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors relative ${
          isActive
            ? "bg-[#bcff3d] text-black"
            : "text-white/60 hover:bg-white/10 hover:text-white"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <Icon size={18} className="flex-shrink-0" />
          {!collapsed && <span className="truncate flex-1">{label}</span>}
          {!collapsed && badge && badge > 0 ? (
            <span
              className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
                isActive ? "bg-black/20 text-black" : "bg-[#bcff3d] text-black"
              }`}
            >
              {badge}
            </span>
          ) : null}
        </>
      )}
    </NavLink>
  );
}

export default function AdminLayout() {
  const { logout } = useAdminAuth();
  const { buyRequests, sellRequests, appointments } = useAdminData();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const newBuyRequests = buyRequests.filter((r) => r.status === "Nouveau").length;
  const newSellRequests = sellRequests.filter((r) => r.status === "Nouveau").length;
  const upcomingAppts = appointments.filter((a) => a.status === "Confirmé" || a.status === "En attente").length;

  function handleLogout() {
    logout();
    navigate("/admin/login");
  }

  return (
    <div className="flex h-screen bg-[#181818] text-white overflow-hidden">
      <aside
        className={`flex-shrink-0 flex flex-col bg-[#1a1a1a] border-r border-white/8 transition-all duration-300 ${
          collapsed ? "w-16" : "w-60"
        }`}
      >
        <div
          className={`flex items-center gap-3 border-b border-white/8 h-16 px-4 ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <div className="size-8 rounded-lg bg-[#bcff3d] flex items-center justify-center flex-shrink-0">
            <span className="text-black font-black text-xs tracking-tight">VA</span>
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="font-semibold text-sm truncate">VroomAdvisor</p>
              <p className="text-white/40 text-xs">Administration</p>
            </div>
          )}
        </div>

        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          <NavItem to="/admin" label="Dashboard" icon={LayoutDashboard} end collapsed={collapsed} />
          <NavItem to="/admin/vehicules" label="Véhicules" icon={Car} collapsed={collapsed} />
          <NavItem to="/admin/demandes/achat" label="Demandes Achat" icon={ShoppingCart} badge={newBuyRequests} collapsed={collapsed} />
          <NavItem to="/admin/demandes/vente" label="Demandes Vente" icon={Tag} badge={newSellRequests} collapsed={collapsed} />
          <NavItem to="/admin/rendez-vous" label="Rendez-vous" icon={CalendarDays} badge={upcomingAppts} collapsed={collapsed} />
        </nav>

        <div className="px-2 pb-4 border-t border-white/8 pt-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/60 hover:bg-red-500/10 hover:text-red-400 transition-colors"
          >
            <LogOut size={18} className="flex-shrink-0" />
            {!collapsed && <span>Déconnexion</span>}
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden min-w-0">
        <header className="flex items-center justify-between px-6 h-16 border-b border-white/8 bg-[#181818] flex-shrink-0">
          <button
            onClick={() => setCollapsed((v) => !v)}
            className="p-2 rounded-lg text-white/60 hover:bg-white/10 hover:text-white transition-colors"
            aria-label="Toggle sidebar"
          >
            {collapsed ? <Menu size={18} /> : <X size={18} />}
          </button>
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-[#bcff3d] flex items-center justify-center">
              <span className="text-black font-bold text-xs">A</span>
            </div>
            <span className="text-sm text-white/60">admin@vroomparis.fr</span>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
