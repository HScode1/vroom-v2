import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { vehicles as vehiclesApi, requests as requestsApi, bookings as bookingsApi } from "../../lib/api";
import type { Vehicle, BuyRequest, SellRequest, Appointment } from "../../lib/api";

export type { Vehicle, BuyRequest, SellRequest, Appointment };
export type RequestStatus = "Nouveau" | "En cours" | "Traité" | "Annulé";
export type AppointmentStatus = "Confirmé" | "En attente" | "Annulé" | "Effectué";

interface AdminDataContextValue {
  loading: boolean;
  error: string | null;

  vehicles: Vehicle[];
  addVehicle(v: Omit<Vehicle, "id" | "createdAt" | "updatedAt">): Promise<Vehicle>;
  updateVehicle(id: string, v: Partial<Vehicle>): Promise<void>;
  deleteVehicle(id: string): Promise<void>;
  getVehicle(id: string): Vehicle | undefined;
  refreshVehicles(): Promise<void>;

  buyRequests: BuyRequest[];
  updateBuyRequestStatus(id: string, status: RequestStatus): Promise<void>;

  sellRequests: SellRequest[];
  updateSellRequestStatus(id: string, status: RequestStatus): Promise<void>;

  appointments: Appointment[];
  updateAppointmentStatus(id: string, status: AppointmentStatus): Promise<void>;
}

const AdminDataContext = createContext<AdminDataContextValue | null>(null);

export function AdminDataProvider({ children }: { children: React.ReactNode }) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [buyRequests, setBuyRequests] = useState<BuyRequest[]>([]);
  const [sellRequests, setSellRequests] = useState<SellRequest[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadAll = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [v, buy, sell, appts] = await Promise.all([
        vehiclesApi.list({ limit: 100 }),
        requestsApi.listBuy(),
        requestsApi.listSell(),
        bookingsApi.list(),
      ]);
      setVehicles(v.data);
      setBuyRequests(buy);
      setSellRequests(sell);
      setAppointments(appts);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur de chargement");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadAll(); }, [loadAll]);

  async function addVehicle(v: Omit<Vehicle, "id" | "createdAt" | "updatedAt">) {
    const created = await vehiclesApi.create(v);
    setVehicles((prev) => [created, ...prev]);
    return created;
  }

  async function updateVehicle(id: string, updates: Partial<Vehicle>) {
    const updated = await vehiclesApi.update(id, updates);
    setVehicles((prev) => prev.map((v) => (v.id === id ? updated : v)));
  }

  async function deleteVehicle(id: string) {
    await vehiclesApi.remove(id);
    setVehicles((prev) => prev.filter((v) => v.id !== id));
  }

  function getVehicle(id: string) {
    return vehicles.find((v) => v.id === id);
  }

  async function updateBuyRequestStatus(id: string, status: RequestStatus) {
    const updated = await requestsApi.updateBuyStatus(id, status);
    setBuyRequests((prev) => prev.map((r) => (r.id === id ? updated : r)));
  }

  async function updateSellRequestStatus(id: string, status: RequestStatus) {
    const updated = await requestsApi.updateSellStatus(id, status);
    setSellRequests((prev) => prev.map((r) => (r.id === id ? updated : r)));
  }

  async function updateAppointmentStatus(id: string, status: AppointmentStatus) {
    const updated = await bookingsApi.updateStatus(id, status);
    setAppointments((prev) => prev.map((a) => (a.id === id ? updated : a)));
  }

  return (
    <AdminDataContext.Provider
      value={{
        loading,
        error,
        vehicles,
        addVehicle,
        updateVehicle,
        deleteVehicle,
        getVehicle,
        refreshVehicles: loadAll,
        buyRequests,
        updateBuyRequestStatus,
        sellRequests,
        updateSellRequestStatus,
        appointments,
        updateAppointmentStatus,
      }}
    >
      {children}
    </AdminDataContext.Provider>
  );
}

export function useAdminData() {
  const ctx = useContext(AdminDataContext);
  if (!ctx) throw new Error("useAdminData must be used within AdminDataProvider");
  return ctx;
}
