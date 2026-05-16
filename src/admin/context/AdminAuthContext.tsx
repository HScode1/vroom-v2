import { createContext, useContext, useState, useEffect } from "react";

interface AdminAuthContextValue {
  isAuthenticated: boolean;
  login(email: string, password: string): boolean;
  logout(): void;
}

const AdminAuthContext = createContext<AdminAuthContextValue | null>(null);

const ADMIN_CREDENTIALS = { email: "admin@vroomparis.fr", password: "Vroom2026!" };
const STORAGE_KEY = "vroom_admin_auth";

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) === "true";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, isAuthenticated ? "true" : "false");
  }, [isAuthenticated]);

  function login(email: string, password: string): boolean {
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  }

  function logout() {
    setIsAuthenticated(false);
    localStorage.removeItem(STORAGE_KEY);
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
