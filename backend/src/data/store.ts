import { randomUUID } from "node:crypto";
import { supabase } from "./supabase.js";

export type VehicleStatus = "En ligne" | "Vendu" | "Brouillon";
export type VehicleTag = "Bonne affaire" | "Forte demande" | "Baisse de prix" | "Nouveauté";
export type RequestStatus = "Nouveau" | "En cours" | "Traité" | "Annulé";
export type AppointmentStatus = "Confirmé" | "En attente" | "Annulé" | "Effectué";
export type BookingFormat = "visio" | "telephone" | "whatsapp";
export type EmailStatus = "pending" | "sent" | "failed";

const BOOKING_TIMEZONE = "Europe/Paris";
const BOOKING_SLOT_DURATION_MINUTES = 30;
const BOOKING_WORKDAYS = new Set([1, 2, 3, 4, 5]);
const BOOKING_SLOTS = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"] as const;
const ACTIVE_APPOINTMENT_STATUSES: AppointmentStatus[] = ["Confirmé", "En attente"];

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
  startAt?: string;
  endAt?: string;
  calendarEventId: string | null;
  cancelToken: string;
  rescheduleToken: string;
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
    startAt: (row.start_at as string | null | undefined) ?? undefined,
    endAt: (row.end_at as string | null | undefined) ?? undefined,
    calendarEventId: (row.calendar_event_id as string | null | undefined) ?? null,
    cancelToken: row.cancel_token as string,
    rescheduleToken: row.reschedule_token as string,
    booking: row.booking as Appointment["booking"],
    customer: row.customer as Appointment["customer"],
    project: row.project as Appointment["project"],
  };
}

function parseDateTimeParts(date: string, time: string) {
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  return { year, month, day, hour, minute };
}

function getTimeZoneOffset(date: Date, timeZone: string) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const parts = formatter.formatToParts(date).reduce<Record<string, string>>((acc, part) => {
    if (part.type !== "literal") acc[part.type] = part.value;
    return acc;
  }, {});

  const zonedTime = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour),
    Number(parts.minute),
    Number(parts.second)
  );

  return zonedTime - date.getTime();
}

function zonedTimeToUtc(parts: { year: number; month: number; day: number; hour: number; minute: number }, timeZone: string) {
  const utcGuess = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, 0);
  const offset = getTimeZoneOffset(new Date(utcGuess), timeZone);
  return new Date(utcGuess - offset);
}

function addMinutes(date: Date, minutes: number) {
  return new Date(date.getTime() + minutes * 60 * 1000);
}

function parseAppointmentWindow(appointment: {
  booking: { date: string; time: string; duration: number };
  startAt?: string | null;
  endAt?: string | null;
}) {
  const fallbackStart = zonedTimeToUtc(parseDateTimeParts(appointment.booking.date, appointment.booking.time), BOOKING_TIMEZONE);
  const start = appointment.startAt ? new Date(appointment.startAt) : fallbackStart;
  const end = appointment.endAt ? new Date(appointment.endAt) : addMinutes(start, appointment.booking.duration);
  return { start, end };
}

function parseSlotWindow(date: string, time: string) {
  const start = zonedTimeToUtc(parseDateTimeParts(date, time), BOOKING_TIMEZONE);
  return { start, end: addMinutes(start, BOOKING_SLOT_DURATION_MINUTES) };
}

function rangesOverlap(aStart: Date, aEnd: Date, bStart: Date, bEnd: Date) {
  return aStart < bEnd && aEnd > bStart;
}

function getMonthBounds(year: number, month: number) {
  const monthStart = zonedTimeToUtc({ year, month, day: 1, hour: 0, minute: 0 }, BOOKING_TIMEZONE);
  const nextMonth = month === 12 ? { year: year + 1, month: 1 } : { year, month: month + 1 };
  const monthEnd = zonedTimeToUtc({ year: nextMonth.year, month: nextMonth.month, day: 1, hour: 0, minute: 0 }, BOOKING_TIMEZONE);
  return { monthStart, monthEnd };
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

function createAppointmentTokens() {
  return {
    cancelToken: randomUUID(),
    rescheduleToken: randomUUID(),
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

    async create(appointmentData: Omit<Appointment, "id" | "status" | "createdAt" | "calendarEventId" | "cancelToken" | "rescheduleToken">) {
      const { start, end } = parseAppointmentWindow(appointmentData);
      const { cancelToken, rescheduleToken } = createAppointmentTokens();
      const { data, error } = await supabase
        .from("appointments")
        .insert({
          status: "Confirmé",
          booking: appointmentData.booking,
          customer: appointmentData.customer,
          project: appointmentData.project,
          start_at: start.toISOString(),
          end_at: end.toISOString(),
          calendar_event_id: null,
          cancel_token: cancelToken,
          reschedule_token: rescheduleToken,
        })
        .select()
        .single();
      if (error) throw error;
      return rowToAppointment(data);
    },

    async update(id: string, patch: Partial<Omit<Appointment, "id" | "createdAt">>) {
      const updateData: Record<string, unknown> = {};
      if (patch.booking !== undefined) {
        updateData.booking = patch.booking;
        const window = parseAppointmentWindow({
          booking: patch.booking,
          startAt: patch.startAt,
          endAt: patch.endAt,
        });
        updateData.start_at = window.start.toISOString();
        updateData.end_at = window.end.toISOString();
      }
      if (patch.status !== undefined) updateData.status = patch.status;
      if (patch.startAt !== undefined && patch.booking === undefined) updateData.start_at = patch.startAt;
      if (patch.endAt !== undefined && patch.booking === undefined) updateData.end_at = patch.endAt;
      if (patch.calendarEventId !== undefined) updateData.calendar_event_id = patch.calendarEventId;
      if (patch.cancelToken !== undefined) updateData.cancel_token = patch.cancelToken;
      if (patch.rescheduleToken !== undefined) updateData.reschedule_token = patch.rescheduleToken;
      if (patch.customer !== undefined) updateData.customer = patch.customer;
      if (patch.project !== undefined) updateData.project = patch.project;

      const { data, error } = await supabase
        .from("appointments")
        .update(updateData)
        .eq("id", id)
        .select()
        .single();
      if (error) return null;
      return rowToAppointment(data);
    },

    async updateStatus(id: string, status: AppointmentStatus) {
      return store.appointments.update(id, { status });
    },

    async getAvailability(year: number, month: number) {
      const { monthStart, monthEnd } = getMonthBounds(year, month);

      const { data, error } = await supabase
        .from("appointments")
        .select("status, booking, start_at, end_at")
        .in("status", ACTIVE_APPOINTMENT_STATUSES)
        .lt("start_at", monthEnd.toISOString())
        .gt("end_at", monthStart.toISOString());
      if (error) throw error;

      const bookedWindows: { start: Date; end: Date }[] = (data ?? []).map((row: Record<string, unknown>) => {
        const booking = row.booking as { date: string; time: string; duration?: number };
        const { start, end } = parseAppointmentWindow({
          booking: {
            date: booking.date,
            time: booking.time,
            duration: booking.duration ?? 30,
          },
          startAt: row.start_at as string | null | undefined,
          endAt: row.end_at as string | null | undefined,
        });
        return { start, end };
      }).filter((window) => rangesOverlap(window.start, window.end, monthStart, monthEnd));

      const daysInMonth = new Date(year, month, 0).getDate();
      const dates: { day: number; available: boolean; slots: string[] }[] = [];

      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month - 1, day);
        const weekday = date.getDay();
        const isWeekend = !BOOKING_WORKDAYS.has(weekday);
        const dateStr = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        const availableSlots = isWeekend
          ? []
          : BOOKING_SLOTS.filter((slot) => {
              const { start: slotStart, end: slotEnd } = parseSlotWindow(dateStr, slot);
              return !bookedWindows.some((window) => rangesOverlap(slotStart, slotEnd, window.start, window.end));
            });
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
