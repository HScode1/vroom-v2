import { z } from "zod";

const customer = z.object({
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  email: z.string().email(),
  phone: z.string().min(6).max(20),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const VehicleCreateSchema = z.object({
  brand: z.string().min(1).max(100),
  model: z.string().min(1).max(100),
  subtitle: z.string().min(1).max(200),
  price: z.number().int().positive(),
  status: z.enum(["En ligne", "Vendu", "Brouillon"]),
  image: z.string().default(""),
  gallery: z.array(z.string()).default([]),
  specs: z.object({
    fuel: z.string().min(1),
    year: z.number().int().min(1990).max(2030),
    mileage: z.number().int().min(0),
    gearbox: z.string().min(1),
    colorExterior: z.string().default(""),
    colorInterior: z.string().default(""),
    engine: z.string().default(""),
  }),
  history: z.object({
    owners: z.number().int().min(1).default(1),
    accidents: z.number().int().min(0).default(0),
    usage: z.string().default("Usage personnel"),
    recalls: z.number().int().min(0).default(0),
  }),
  tags: z.array(z.enum(["Bonne affaire", "Forte demande", "Baisse de prix", "Nouveauté"])).default([]),
  sellerNotes: z.string().default(""),
});

export const VehicleUpdateSchema = VehicleCreateSchema.partial();

export const VehicleFiltersSchema = z.object({
  brand: z.string().optional(),
  category: z.string().optional(),
  fuel: z.string().optional(),
  gearbox: z.string().optional(),
  minPrice: z.coerce.number().optional(),
  maxPrice: z.coerce.number().optional(),
  minYear: z.coerce.number().optional(),
  maxYear: z.coerce.number().optional(),
  minMileage: z.coerce.number().optional(),
  maxMileage: z.coerce.number().optional(),
  status: z.enum(["En ligne", "Vendu", "Brouillon"]).optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(12),
});

export const BookingAvailabilitySchema = z.object({
  year: z.coerce.number().int().min(2024).max(2030),
  month: z.coerce.number().int().min(1).max(12),
});

export const BookingCreateSchema = z.object({
  booking: z.object({
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    time: z.string().regex(/^\d{2}:\d{2}$/),
    duration: z.number().int().min(15).max(120).default(30),
    format: z.enum(["visio", "telephone", "whatsapp"]),
  }),
  customer,
  project: z.object({
    budget: z.string().min(1).max(50),
    vehicleType: z.string().min(1).max(50),
    description: z.string().max(1000).default(""),
  }),
});

export const BuyRequestSchema = z.object({
  vehicleCriteria: z.object({
    brand: z.string().min(1).max(100),
    model: z.string().min(1).max(100),
    trim: z.string().max(100).default(""),
    year: z.string().max(20).default(""),
    gearbox: z.string().min(1).max(50),
    fuel: z.string().min(1).max(50),
    maxMileage: z.number().int().min(0),
    maxBudget: z.number().int().positive(),
    timeframe: z.string().min(1),
    notes: z.string().max(1000).default(""),
  }),
  customer,
});

export const SellRequestSchema = z.object({
  vehicle: z.object({
    brand: z.string().min(1).max(100),
    model: z.string().min(1).max(100),
    trim: z.string().max(100).default(""),
    year: z.number().int().min(1990).max(2030),
    mileage: z.number().int().min(0),
    gearbox: z.string().min(1).max(50),
    fuel: z.string().min(1).max(50),
    color: z.string().max(100).default(""),
    doors: z.number().int().min(2).max(7).default(5),
    notes: z.string().max(1000).default(""),
    photos: z.array(z.string().url()).max(20).default([]),
  }),
  customer,
});

export const ContactSchema = z.object({
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  email: z.string().email(),
  subject: z.string().min(1).max(200),
  message: z.string().min(10).max(2000),
});

export const RequestStatusUpdateSchema = z.object({
  status: z.enum(["Nouveau", "En cours", "Traité", "Annulé"]),
});

export const AppointmentStatusUpdateSchema = z.object({
  status: z.enum(["Confirmé", "En attente", "Annulé", "Effectué"]),
});
