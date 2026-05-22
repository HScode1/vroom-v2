const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

function getToken(): string | null {
  return localStorage.getItem("vroom_admin_token");
}

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const token = getToken();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(init.headers as Record<string, string>),
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${BASE_URL}${path}`, { ...init, headers });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error((body as { error?: string }).error ?? `HTTP ${res.status}`);
  }

  if (res.status === 204) return undefined as T;
  return res.json();
}

// ── Auth ──────────────────────────────────────────────────────────────────────
export const auth = {
  async login(email: string, password: string): Promise<{ token: string }> {
    return request("/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  },
  async me(): Promise<{ email: string; role: string }> {
    return request("/api/v1/auth/me");
  },
};

// ── Vehicles ──────────────────────────────────────────────────────────────────
export const vehicles = {
  async list(params?: Record<string, string | number>) {
    const qs = params ? "?" + new URLSearchParams(params as Record<string, string>).toString() : "";
    return request<{ data: Vehicle[]; meta: { total: number; page: number; totalPages: number; limit: number } }>(`/api/v1/vehicles${qs}`);
  },
  async get(id: string) {
    return request<Vehicle>(`/api/v1/vehicles/${id}`);
  },
  async create(data: Omit<Vehicle, "id" | "createdAt" | "updatedAt">) {
    return request<Vehicle>("/api/v1/vehicles", { method: "POST", body: JSON.stringify(data) });
  },
  async update(id: string, data: Partial<Vehicle>) {
    return request<Vehicle>(`/api/v1/vehicles/${id}`, { method: "PUT", body: JSON.stringify(data) });
  },
  async remove(id: string) {
    return request<void>(`/api/v1/vehicles/${id}`, { method: "DELETE" });
  },
};

// ── Uploads ───────────────────────────────────────────────────────────────────
export const uploads = {
  async images(files: File[]): Promise<{ urls: string[] }> {
    const token = getToken();
    const form = new FormData();
    files.forEach((f) => form.append("files", f));
    const res = await fetch(`${BASE_URL}/api/v1/uploads/images`, {
      method: "POST",
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      body: form,
    });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      throw new Error((body as { error?: string }).error ?? `HTTP ${res.status}`);
    }
    return res.json();
  },
};

// ── Requests ──────────────────────────────────────────────────────────────────
export const requests = {
  async listBuy() { return request<BuyRequest[]>("/api/v1/requests/buy"); },
  async createBuy(data: unknown) {
    return request<{ id: string; message: string }>("/api/v1/requests/buy", { method: "POST", body: JSON.stringify(data) });
  },
  async updateBuyStatus(id: string, status: string) {
    return request<BuyRequest>(`/api/v1/requests/buy/${id}/status`, { method: "PATCH", body: JSON.stringify({ status }) });
  },
  async listSell() { return request<SellRequest[]>("/api/v1/requests/sell"); },
  async getSell(id: string) { return request<SellRequest>(`/api/v1/requests/sell/${id}`); },
  async createSell(data: unknown) {
    return request<{ id: string; message: string }>("/api/v1/requests/sell", { method: "POST", body: JSON.stringify(data) });
  },
  async updateSellStatus(id: string, status: string) {
    return request<SellRequest>(`/api/v1/requests/sell/${id}/status`, { method: "PATCH", body: JSON.stringify({ status }) });
  },
};

// ── Bookings ──────────────────────────────────────────────────────────────────
export const bookings = {
  async list() { return request<Appointment[]>("/api/v1/bookings"); },
  async create(data: unknown) {
    return request<{ id: string; message: string }>("/api/v1/bookings", { method: "POST", body: JSON.stringify(data) });
  },
  async updateStatus(id: string, status: string) {
    return request<Appointment>(`/api/v1/bookings/${id}/status`, { method: "PATCH", body: JSON.stringify({ status }) });
  },
  async availability(year: number, month: number) {
    return request<{ month: string; dates: { day: number; available: boolean; slots: string[] }[] }>(
      `/api/v1/bookings/availability?year=${year}&month=${month}`
    );
  },
};

// ── Contact ───────────────────────────────────────────────────────────────────
export const contact = {
  async send(data: unknown) {
    return request<{ id: string; message: string }>("/api/v1/contact", { method: "POST", body: JSON.stringify(data) });
  },
};

// ── Types (mirrors backend) ───────────────────────────────────────────────────
export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  subtitle: string;
  price: number;
  status: "En ligne" | "Vendu" | "Brouillon";
  image: string;
  gallery: string[];
  specs: { fuel: string; year: number; mileage: number; gearbox: string; colorExterior: string; colorInterior: string; engine: string; vin: string; stockNumber: string; consumption: string };
  history: { owners: number; accidents: number; usage: string; recalls: number };
  tags: ("Bonne affaire" | "Forte demande" | "Baisse de prix" | "Nouveauté")[];
  sellerNotes: string;
  createdAt: string;
  updatedAt: string;
}

export interface BuyRequest {
  id: string;
  status: "Nouveau" | "En cours" | "Traité" | "Annulé";
  createdAt: string;
  customer: { firstName: string; lastName: string; email: string; phone: string };
  vehicleCriteria: { brand: string; model: string; trim: string; year: string; gearbox: string; fuel: string; maxMileage: number; maxBudget: number; timeframe: string; notes: string };
}

export interface SellRequest {
  id: string;
  status: "Nouveau" | "En cours" | "Traité" | "Annulé";
  createdAt: string;
  customer: { firstName: string; lastName: string; email: string; phone: string };
  vehicle: { brand: string; model: string; trim: string; year: number; mileage: number; gearbox: string; fuel: string; color: string; doors: number; notes: string; photos: string[] };
}

export interface Appointment {
  id: string;
  status: "Confirmé" | "En attente" | "Annulé" | "Effectué";
  createdAt: string;
  booking: { date: string; time: string; duration: number; format: "visio" | "telephone" | "whatsapp" };
  customer: { firstName: string; lastName: string; email: string; phone: string };
  project: { budget: string; vehicleType: string; description: string };
}
