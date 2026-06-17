import { supabase } from "./supabase.js";

export type VehicleStatus = "En ligne" | "Vendu" | "Brouillon";
export type VehicleTag = "Bonne affaire" | "Forte demande" | "Baisse de prix" | "Nouveauté";
export type RequestStatus = "Nouveau" | "En cours" | "Traité" | "Annulé";
export type AppointmentStatus = "Confirmé" | "En attente" | "Annulé" | "Effectué";
export type BookingFormat = "visio" | "telephone" | "whatsapp";
export type EmailStatus = "pending" | "sent" | "failed";

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
    vin: string;
    stockNumber: string;
    consumption: string;
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
    brand: string; model: string; trim: string; year: string;
    gearbox: string; fuel: string; maxMileage: number; maxBudget: number;
    timeframe: string; notes: string;
  };
}

export interface SellRequest {
  id: string;
  status: RequestStatus;
  createdAt: string;
  customer: { firstName: string; lastName: string; email: string; phone: string };
  vehicle: {
    brand: string; model: string; trim: string; year: number; mileage: number;
    gearbox: string; fuel: string; color: string; doors: number; notes: string; photos: string[];
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

export interface EmailLog {
  id: string;
  createdAt: string;
  updatedAt: string;
  type: string;
  template: string;
  recipient: string;
  subject: string;
  status: EmailStatus;
  providerId: string | null;
  error: string | null;
  metadata: Record<string, unknown>;
}

// ── Row mappers (snake_case DB → camelCase TS) ────────────────────────────────

function rowToVehicle(row: Record<string, unknown>): Vehicle {
  return {
    id: row.id as string,
    brand: row.brand as string,
    model: row.model as string,
    subtitle: row.subtitle as string,
    price: row.price as number,
    status: row.status as VehicleStatus,
    image: row.image as string,
    gallery: row.gallery as string[],
    specs: row.specs as Vehicle["specs"],
    history: row.history as Vehicle["history"],
    tags: row.tags as VehicleTag[],
    sellerNotes: row.seller_notes as string,
    createdAt: (row.created_at as string).split("T")[0],
    updatedAt: (row.updated_at as string).split("T")[0],
  };
}

function rowToBuyRequest(row: Record<string, unknown>): BuyRequest {
  return {
    id: row.id as string,
    status: row.status as RequestStatus,
    createdAt: row.created_at as string,
    customer: row.customer as BuyRequest["customer"],
    vehicleCriteria: row.vehicle_criteria as BuyRequest["vehicleCriteria"],
  };
}

function rowToSellRequest(row: Record<string, unknown>): SellRequest {
  return {
    id: row.id as string,
    status: row.status as RequestStatus,
    createdAt: row.created_at as string,
    customer: row.customer as SellRequest["customer"],
    vehicle: row.vehicle as SellRequest["vehicle"],
  };
}

function rowToAppointment(row: Record<string, unknown>): Appointment {
  return {
    id: row.id as string,
    status: row.status as AppointmentStatus,
    createdAt: row.created_at as string,
    booking: row.booking as Appointment["booking"],
    customer: row.customer as Appointment["customer"],
    project: row.project as Appointment["project"],
  };
}

function rowToEmailLog(row: Record<string, unknown>): EmailLog {
  return {
    id: row.id as string,
    createdAt: row.created_at as string,
    updatedAt: row.updated_at as string,
    type: row.type as string,
    template: row.template as string,
    recipient: row.recipient as string,
    subject: row.subject as string,
    status: row.status as EmailStatus,
    providerId: (row.provider_id as string | null) ?? null,
    error: (row.error as string | null) ?? null,
    metadata: (row.metadata as Record<string, unknown>) ?? {},
  };
}

// ── Store ─────────────────────────────────────────────────────────────────────

export const store = {
  vehicles: {
    async findAll(filters?: {
      brand?: string; fuel?: string; gearbox?: string;
      minPrice?: number; maxPrice?: number; minYear?: number; maxYear?: number;
      minMileage?: number; maxMileage?: number; status?: VehicleStatus;
      page?: number; limit?: number;
    }) {
      const page = filters?.page ?? 1;
      const limit = filters?.limit ?? 12;
      const from = (page - 1) * limit;
      const to = from + limit - 1;

      let query = supabase.from("vehicles").select("*", { count: "exact" });

      if (filters?.brand) query = query.ilike("brand", filters.brand);
      if (filters?.fuel) query = query.ilike("specs->>fuel", filters.fuel);
      if (filters?.gearbox) query = query.ilike("specs->>gearbox", filters.gearbox);
      if (filters?.minPrice) query = query.gte("price", filters.minPrice);
      if (filters?.maxPrice) query = query.lte("price", filters.maxPrice);
      if (filters?.minYear) query = query.gte("specs->>year", String(filters.minYear));
      if (filters?.maxYear) query = query.lte("specs->>year", String(filters.maxYear));
      if (filters?.minMileage) query = query.gte("specs->>mileage", String(filters.minMileage));
      if (filters?.maxMileage) query = query.lte("specs->>mileage", String(filters.maxMileage));
      if (filters?.status) query = query.eq("status", filters.status);

      query = query.order("created_at", { ascending: false }).range(from, to);

      const { data, error, count } = await query;
      if (error) throw error;

      const total = count ?? 0;
      return {
        data: (data ?? []).map(rowToVehicle),
        meta: { total, page, totalPages: Math.ceil(total / limit), limit },
      };
    },

    async filters() {
      const { data, error } = await supabase
        .from("vehicles")
        .select("brand")
        .eq("status", "En ligne");
      if (error) throw error;

      const brandMap = new Map<string, { id: string; label: string; count: number }>();
      (data ?? []).forEach((row: { brand: string }) => {
        const id = row.brand.toLowerCase().replace(/\s+/g, "-");
        const existing = brandMap.get(id);
        if (existing) { existing.count++; } else { brandMap.set(id, { id, label: row.brand, count: 1 }); }
      });
      return { brands: Array.from(brandMap.values()) };
    },

    async findById(id: string) {
      const { data, error } = await supabase.from("vehicles").select("*").eq("id", id).single();
      if (error) return null;
      return rowToVehicle(data);
    },

    async create(vehicleData: Omit<Vehicle, "id" | "createdAt" | "updatedAt">) {
      const { data, error } = await supabase
        .from("vehicles")
        .insert({
          brand: vehicleData.brand,
          model: vehicleData.model,
          subtitle: vehicleData.subtitle,
          price: vehicleData.price,
          status: vehicleData.status,
          image: vehicleData.image,
          gallery: vehicleData.gallery,
          specs: vehicleData.specs,
          history: vehicleData.history,
          tags: vehicleData.tags,
          seller_notes: vehicleData.sellerNotes,
        })
        .select()
        .single();
      if (error) throw error;
      return rowToVehicle(data);
    },

    async update(id: string, vehicleData: Partial<Omit<Vehicle, "id" | "createdAt">>) {
      const patch: Record<string, unknown> = {};
      if (vehicleData.brand !== undefined) patch.brand = vehicleData.brand;
      if (vehicleData.model !== undefined) patch.model = vehicleData.model;
      if (vehicleData.subtitle !== undefined) patch.subtitle = vehicleData.subtitle;
      if (vehicleData.price !== undefined) patch.price = vehicleData.price;
      if (vehicleData.status !== undefined) patch.status = vehicleData.status;
      if (vehicleData.image !== undefined) patch.image = vehicleData.image;
      if (vehicleData.gallery !== undefined) patch.gallery = vehicleData.gallery;
      if (vehicleData.specs !== undefined) patch.specs = vehicleData.specs;
      if (vehicleData.history !== undefined) patch.history = vehicleData.history;
      if (vehicleData.tags !== undefined) patch.tags = vehicleData.tags;
      if (vehicleData.sellerNotes !== undefined) patch.seller_notes = vehicleData.sellerNotes;

      const { data, error } = await supabase
        .from("vehicles")
        .update(patch)
        .eq("id", id)
        .select()
        .single();
      if (error) return null;
      return rowToVehicle(data);
    },

    async delete(id: string) {
      const { error } = await supabase.from("vehicles").delete().eq("id", id);
      return !error;
    },
  },

  buyRequests: {
    async findAll() {
      const { data, error } = await supabase
        .from("buy_requests")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []).map(rowToBuyRequest);
    },

    async findById(id: string) {
      const { data, error } = await supabase.from("buy_requests").select("*").eq("id", id).single();
      if (error) return null;
      return rowToBuyRequest(data);
    },

    async create(requestData: Omit<BuyRequest, "id" | "status" | "createdAt">) {
      const { data, error } = await supabase
        .from("buy_requests")
        .insert({ customer: requestData.customer, vehicle_criteria: requestData.vehicleCriteria })
        .select()
        .single();
      if (error) throw error;
      return rowToBuyRequest(data);
    },

    async updateStatus(id: string, status: RequestStatus) {
      const { data, error } = await supabase
        .from("buy_requests")
        .update({ status })
        .eq("id", id)
        .select()
        .single();
      if (error) return null;
      return rowToBuyRequest(data);
    },
  },

  sellRequests: {
    async findAll() {
      const { data, error } = await supabase
        .from("sell_requests")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []).map(rowToSellRequest);
    },

    async findById(id: string) {
      const { data, error } = await supabase.from("sell_requests").select("*").eq("id", id).single();
      if (error) return null;
      return rowToSellRequest(data);
    },

    async create(requestData: Omit<SellRequest, "id" | "status" | "createdAt">) {
      const { data, error } = await supabase
        .from("sell_requests")
        .insert({ customer: requestData.customer, vehicle: requestData.vehicle })
        .select()
        .single();
      if (error) throw error;
      return rowToSellRequest(data);
    },

    async updateStatus(id: string, status: RequestStatus) {
      const { data, error } = await supabase
        .from("sell_requests")
        .update({ status })
        .eq("id", id)
        .select()
        .single();
      if (error) return null;
      return rowToSellRequest(data);
    },
  },

  appointments: {
    async findAll() {
      const { data, error } = await supabase
        .from("appointments")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []).map(rowToAppointment);
    },

    async findById(id: string) {
      const { data, error } = await supabase.from("appointments").select("*").eq("id", id).single();
      if (error) return null;
      return rowToAppointment(data);
    },

    async create(appointmentData: Omit<Appointment, "id" | "status" | "createdAt">) {
      const { data, error } = await supabase
        .from("appointments")
        .insert({
          booking: appointmentData.booking,
          customer: appointmentData.customer,
          project: appointmentData.project,
        })
        .select()
        .single();
      if (error) throw error;
      return rowToAppointment(data);
    },

    async updateStatus(id: string, status: AppointmentStatus) {
      const { data, error } = await supabase
        .from("appointments")
        .update({ status })
        .eq("id", id)
        .select()
        .single();
      if (error) return null;
      return rowToAppointment(data);
    },

    async getAvailability(year: number, month: number) {
      const startDate = `${year}-${String(month).padStart(2, "0")}-01`;
      const endDate = `${year}-${String(month).padStart(2, "0")}-31`;

      const { data, error } = await supabase
        .from("appointments")
        .select("booking")
        .gte("booking->>date", startDate)
        .lte("booking->>date", endDate);
      if (error) throw error;

      const bookedByDate = new Map<string, string[]>();
      (data ?? []).forEach((row: { booking: { date: string; time: string } }) => {
        const { date, time } = row.booking;
        if (!bookedByDate.has(date)) bookedByDate.set(date, []);
        bookedByDate.get(date)!.push(time);
      });

      const slots = ["09:00","09:30","10:00","10:30","11:00","11:30","14:00","14:30","15:00","15:30","16:00","16:30"];
      const daysInMonth = new Date(year, month, 0).getDate();
      const dates = [];

      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month - 1, day);
        const weekday = date.getDay();
        const isWeekend = weekday === 0 || weekday === 6;
        const dateStr = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        const bookedSlots = bookedByDate.get(dateStr) ?? [];
        const availableSlots = isWeekend ? [] : slots.filter((s) => !bookedSlots.includes(s));
        dates.push({ day, available: availableSlots.length > 0, slots: availableSlots });
      }

      return { month: `${year}-${String(month).padStart(2, "0")}`, dates };
    },
  },

  emailLogs: {
    async create(logData: Omit<EmailLog, "id" | "createdAt" | "updatedAt">) {
      const { data, error } = await supabase
        .from("email_logs")
        .insert({
          type: logData.type,
          template: logData.template,
          recipient: logData.recipient,
          subject: logData.subject,
          status: logData.status,
          provider_id: logData.providerId,
          error: logData.error,
          metadata: logData.metadata,
        })
        .select()
        .single();
      if (error) throw error;
      return rowToEmailLog(data);
    },

    async update(id: string, patch: Partial<Omit<EmailLog, "id" | "createdAt" | "updatedAt">>) {
      const updateData: Record<string, unknown> = {};
      if (patch.type !== undefined) updateData.type = patch.type;
      if (patch.template !== undefined) updateData.template = patch.template;
      if (patch.recipient !== undefined) updateData.recipient = patch.recipient;
      if (patch.subject !== undefined) updateData.subject = patch.subject;
      if (patch.status !== undefined) updateData.status = patch.status;
      if (patch.providerId !== undefined) updateData.provider_id = patch.providerId;
      if (patch.error !== undefined) updateData.error = patch.error;
      if (patch.metadata !== undefined) updateData.metadata = patch.metadata;

      const { data, error } = await supabase
        .from("email_logs")
        .update(updateData)
        .eq("id", id)
        .select()
        .single();
      if (error) throw error;
      return rowToEmailLog(data);
    },
  },

  contactMessages: {
    async create(msgData: Omit<ContactMessage, "id" | "createdAt">) {
      const { data, error } = await supabase
        .from("contact_messages")
        .insert({
          first_name: msgData.firstName,
          last_name: msgData.lastName,
          email: msgData.email,
          subject: msgData.subject,
          message: msgData.message,
        })
        .select()
        .single();
      if (error) throw error;
      return {
        id: data.id as string,
        createdAt: data.created_at as string,
        firstName: data.first_name as string,
        lastName: data.last_name as string,
        email: data.email as string,
        subject: data.subject as string,
        message: data.message as string,
      } as ContactMessage;
    },
  },
};
