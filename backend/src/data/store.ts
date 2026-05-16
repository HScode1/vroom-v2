import { v4 as uuid } from "uuid";

export type VehicleStatus = "En ligne" | "Vendu" | "Brouillon";
export type VehicleTag = "Bonne affaire" | "Forte demande" | "Baisse de prix" | "Nouveauté";
export type RequestStatus = "Nouveau" | "En cours" | "Traité" | "Annulé";
export type AppointmentStatus = "Confirmé" | "En attente" | "Annulé" | "Effectué";
export type BookingFormat = "visio" | "telephone" | "whatsapp";

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  subtitle: string;
  price: number;
  status: VehicleStatus;
  image: string;
  gallery: string[];
  specs: {
    fuel: string;
    year: number;
    mileage: number;
    gearbox: string;
    colorExterior: string;
    colorInterior: string;
    engine: string;
  };
  history: {
    owners: number;
    accidents: number;
    usage: string;
    recalls: number;
  };
  tags: VehicleTag[];
  sellerNotes: string;
  createdAt: string;
  updatedAt: string;
}

export interface BuyRequest {
  id: string;
  status: RequestStatus;
  createdAt: string;
  customer: { firstName: string; lastName: string; email: string; phone: string };
  vehicleCriteria: {
    brand: string;
    model: string;
    trim: string;
    year: string;
    gearbox: string;
    fuel: string;
    maxMileage: number;
    maxBudget: number;
    timeframe: string;
    notes: string;
  };
}

export interface SellRequest {
  id: string;
  status: RequestStatus;
  createdAt: string;
  customer: { firstName: string; lastName: string; email: string; phone: string };
  vehicle: {
    brand: string;
    model: string;
    trim: string;
    year: number;
    mileage: number;
    gearbox: string;
    fuel: string;
    color: string;
    doors: number;
    notes: string;
    photos: string[];
  };
}

export interface Appointment {
  id: string;
  status: AppointmentStatus;
  createdAt: string;
  booking: { date: string; time: string; duration: number; format: BookingFormat };
  customer: { firstName: string; lastName: string; email: string; phone: string };
  project: { budget: string; vehicleType: string; description: string };
}

export interface ContactMessage {
  id: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

function today() {
  return new Date().toISOString().split("T")[0];
}

const vehicles: Vehicle[] = [
  {
    id: uuid(),
    brand: "BMW", model: "Série 7", subtitle: "740Ld xDrive M Sport", price: 24990, status: "En ligne",
    image: "", gallery: [],
    specs: { fuel: "Diesel", year: 2021, mileage: 88500, gearbox: "Automatique", colorExterior: "Noir Saphir", colorInterior: "Cuir Cognac", engine: "3.0L 6cyl Diesel 340ch" },
    history: { owners: 1, accidents: 0, usage: "Usage personnel", recalls: 0 },
    tags: ["Bonne affaire", "Forte demande"], sellerNotes: "Véhicule en parfait état, carnet d'entretien complet BMW.",
    createdAt: "2026-04-10", updatedAt: today(),
  },
  {
    id: uuid(),
    brand: "Mercedes-Benz", model: "GLC 300", subtitle: "AMG Line 4MATIC", price: 45900, status: "En ligne",
    image: "", gallery: [],
    specs: { fuel: "Essence", year: 2023, mileage: 18000, gearbox: "Automatique", colorExterior: "Blanc Polaire", colorInterior: "Cuir Noir", engine: "2.0L 4cyl Essence 258ch" },
    history: { owners: 1, accidents: 0, usage: "Usage personnel", recalls: 0 },
    tags: ["Nouveauté"], sellerNotes: "Quasi-neuf, first-hand. Pack AMG extérieur et intérieur.",
    createdAt: "2026-04-15", updatedAt: today(),
  },
  {
    id: uuid(),
    brand: "Tesla", model: "Model 3", subtitle: "Performance Dual Motor", price: 42000, status: "En ligne",
    image: "", gallery: [],
    specs: { fuel: "Électrique", year: 2023, mileage: 22000, gearbox: "Automatique", colorExterior: "Bleu Minuit", colorInterior: "Cuir Blanc", engine: "Dual Motor AWD 513ch" },
    history: { owners: 1, accidents: 0, usage: "Usage personnel", recalls: 0 },
    tags: ["Bonne affaire"], sellerNotes: "Autopilot amélioré. Autonomie WLTP 547 km.",
    createdAt: "2026-04-22", updatedAt: today(),
  },
];

const buyRequests: BuyRequest[] = [];
const sellRequests: SellRequest[] = [];
const appointments: Appointment[] = [];
const contactMessages: ContactMessage[] = [];

export const store = {
  vehicles: {
    findAll(filters?: { brand?: string; category?: string; fuel?: string; gearbox?: string; minPrice?: number; maxPrice?: number; minYear?: number; maxYear?: number; minMileage?: number; maxMileage?: number; status?: VehicleStatus; page?: number; limit?: number }) {
      let result = [...vehicles];
      if (filters?.brand) result = result.filter((v) => v.brand.toLowerCase() === filters.brand!.toLowerCase());
      if (filters?.fuel) result = result.filter((v) => v.specs.fuel.toLowerCase() === filters.fuel!.toLowerCase());
      if (filters?.gearbox) result = result.filter((v) => v.specs.gearbox.toLowerCase() === filters.gearbox!.toLowerCase());
      if (filters?.minPrice) result = result.filter((v) => v.price >= filters.minPrice!);
      if (filters?.maxPrice) result = result.filter((v) => v.price <= filters.maxPrice!);
      if (filters?.minYear) result = result.filter((v) => v.specs.year >= filters.minYear!);
      if (filters?.maxYear) result = result.filter((v) => v.specs.year <= filters.maxYear!);
      if (filters?.minMileage) result = result.filter((v) => v.specs.mileage >= filters.minMileage!);
      if (filters?.maxMileage) result = result.filter((v) => v.specs.mileage <= filters.maxMileage!);
      if (filters?.status) result = result.filter((v) => v.status === filters.status);
      const total = result.length;
      const limit = filters?.limit ?? 12;
      const page = filters?.page ?? 1;
      const totalPages = Math.ceil(total / limit);
      result = result.slice((page - 1) * limit, page * limit);
      return { data: result, meta: { total, page, totalPages, limit } };
    },
    filters() {
      const brandMap = new Map<string, { id: string; label: string; count: number }>();
      vehicles.filter((v) => v.status === "En ligne").forEach((v) => {
        const id = v.brand.toLowerCase().replace(/\s+/g, "-");
        const existing = brandMap.get(id);
        if (existing) { existing.count++; } else { brandMap.set(id, { id, label: v.brand, count: 1 }); }
      });
      return { brands: Array.from(brandMap.values()) };
    },
    findById(id: string) { return vehicles.find((v) => v.id === id); },
    create(data: Omit<Vehicle, "id" | "createdAt" | "updatedAt">) {
      const now = today();
      const v: Vehicle = { ...data, id: uuid(), createdAt: now, updatedAt: now };
      vehicles.push(v);
      return v;
    },
    update(id: string, data: Partial<Omit<Vehicle, "id" | "createdAt">>) {
      const idx = vehicles.findIndex((v) => v.id === id);
      if (idx === -1) return null;
      vehicles[idx] = { ...vehicles[idx], ...data, updatedAt: today() };
      return vehicles[idx];
    },
    delete(id: string) {
      const idx = vehicles.findIndex((v) => v.id === id);
      if (idx === -1) return false;
      vehicles.splice(idx, 1);
      return true;
    },
  },

  buyRequests: {
    findAll() { return [...buyRequests]; },
    findById(id: string) { return buyRequests.find((r) => r.id === id); },
    create(data: Omit<BuyRequest, "id" | "status" | "createdAt">) {
      const r: BuyRequest = { ...data, id: uuid(), status: "Nouveau", createdAt: new Date().toISOString() };
      buyRequests.push(r);
      return r;
    },
    updateStatus(id: string, status: RequestStatus) {
      const r = buyRequests.find((r) => r.id === id);
      if (!r) return null;
      r.status = status;
      return r;
    },
  },

  sellRequests: {
    findAll() { return [...sellRequests]; },
    findById(id: string) { return sellRequests.find((r) => r.id === id); },
    create(data: Omit<SellRequest, "id" | "status" | "createdAt">) {
      const r: SellRequest = { ...data, id: uuid(), status: "Nouveau", createdAt: new Date().toISOString() };
      sellRequests.push(r);
      return r;
    },
    updateStatus(id: string, status: RequestStatus) {
      const r = sellRequests.find((r) => r.id === id);
      if (!r) return null;
      r.status = status;
      return r;
    },
  },

  appointments: {
    findAll() { return [...appointments]; },
    findById(id: string) { return appointments.find((a) => a.id === id); },
    create(data: Omit<Appointment, "id" | "status" | "createdAt">) {
      const a: Appointment = { ...data, id: uuid(), status: "En attente", createdAt: new Date().toISOString() };
      appointments.push(a);
      return a;
    },
    getAvailability(year: number, month: number) {
      const daysInMonth = new Date(year, month, 0).getDate();
      const slots = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"];
      const dates = [];
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month - 1, day);
        const weekday = date.getDay();
        const isWeekend = weekday === 0 || weekday === 6;
        const dateStr = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        const bookedSlots = appointments.filter((a) => a.booking.date === dateStr).map((a) => a.booking.time);
        const availableSlots = isWeekend ? [] : slots.filter((s) => !bookedSlots.includes(s));
        dates.push({ day, available: availableSlots.length > 0, slots: availableSlots });
      }
      return { month: `${year}-${String(month).padStart(2, "0")}`, dates };
    },
  },

  contactMessages: {
    create(data: Omit<ContactMessage, "id" | "createdAt">) {
      const m: ContactMessage = { ...data, id: uuid(), createdAt: new Date().toISOString() };
      contactMessages.push(m);
      return m;
    },
  },
};
