import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../../lib/api";

interface AdminAuthContextValue {
  isAuthenticated: boolean;
  login(email: string, password: string): Promise<boolean>;
  logout(): void;
}

const AdminAuthContext = createContext<AdminAuthContextValue | null>(null);

const TOKEN_KEY = "vroom_admin_token";

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem(TOKEN_KEY);
  });

  // Verify token is still valid on mount
  useEffect(() => {
    if (!localStorage.getItem(TOKEN_KEY)) return;
    auth.me().catch(() => {
      localStorage.removeItem(TOKEN_KEY);
      setIsAuthenticated(false);
    });
  }, []);

  async function login(email: string, password: string): Promise<boolean> {
    try {
      const { token } = await auth.login(email, password);
      localStorage.setItem(TOKEN_KEY, token);
      setIsAuthenticated(true);
      return true;
    } catch {
      return false;
    }
  }

  function logout() {
    localStorage.removeItem(TOKEN_KEY);
    setIsAuthenticated(false);
  }

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error("useAdminAuth must be used within AdminAuthProvider");
  return ctx;
}
