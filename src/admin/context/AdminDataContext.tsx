import { createContext, useContext, useState } from "react";
import {
  MOCK_VEHICLES,
  MOCK_BUY_REQUESTS,
  MOCK_SELL_REQUESTS,
  MOCK_APPOINTMENTS,
  type Vehicle,
  type BuyRequest,
  type SellRequest,
  type Appointment,
  type RequestStatus,
  type AppointmentStatus,
} from "../data/mockData";

interface AdminDataContextValue {
  vehicles: Vehicle[];
  addVehicle(v: Omit<Vehicle, "id" | "createdAt">): void;
  updateVehicle(id: string, v: Partial<Vehicle>): void;
  deleteVehicle(id: string): void;
  getVehicle(id: string): Vehicle | undefined;

  buyRequests: BuyRequest[];
  updateBuyRequestStatus(id: string, status: RequestStatus): void;

  sellRequests: SellRequest[];
  updateSellRequestStatus(id: string, status: RequestStatus): void;

  appointments: Appointment[];
  updateAppointmentStatus(id: string, status: AppointmentStatus): void;
}

const AdminDataContext = createContext<AdminDataContextValue | null>(null);

export function AdminDataProvider({ children }: { children: React.ReactNode }) {
  const [vehicles, setVehicles] = useState<Vehicle[]>(MOCK_VEHICLES);
  const [buyRequests, setBuyRequests] = useState<BuyRequest[]>(MOCK_BUY_REQUESTS);
  const [sellRequests, setSellRequests] = useState<SellRequest[]>(MOCK_SELL_REQUESTS);
  const [appointments, setAppointments] = useState<Appointment[]>(MOCK_APPOINTMENTS);

  function addVehicle(v: Omit<Vehicle, "id" | "createdAt">) {
    const newVehicle: Vehicle = {
      ...v,
      id: `v${Date.now()}`,
      createdAt: new Date().toISOString().split("T")[0],
    };
    setVehicles((prev) => [newVehicle, ...prev]);
  }

  function updateVehicle(id: string, updates: Partial<Vehicle>) {
    setVehicles((prev) => prev.map((v) => (v.id === id ? { ...v, ...updates } : v)));
  }

  function deleteVehicle(id: string) {
    setVehicles((prev) => prev.filter((v) => v.id !== id));
  }

  function getVehicle(id: string) {
    return vehicles.find((v) => v.id === id);
  }

  function updateBuyRequestStatus(id: string, status: RequestStatus) {
    setBuyRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
  }

  function updateSellRequestStatus(id: string, status: RequestStatus) {
    setSellRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
  }

  function updateAppointmentStatus(id: string, status: AppointmentStatus) {
    setAppointments((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)));
  }

  return (
    <AdminDataContext.Provider
      value={{
        vehicles,
        addVehicle,
        updateVehicle,
        deleteVehicle,
        getVehicle,
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
