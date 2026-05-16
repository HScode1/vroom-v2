export type VehicleStatus = "En ligne" | "Vendu" | "Brouillon";
export type VehicleTag = "Bonne affaire" | "Forte demande" | "Baisse de prix" | "Nouveauté";
export type BookingFormat = "visio" | "telephone" | "whatsapp";
export type RequestStatus = "Nouveau" | "En cours" | "Traité" | "Annulé";
export type AppointmentStatus = "Confirmé" | "En attente" | "Annulé" | "Effectué";

export interface VehicleSpecs {
  fuel: string;
  year: number;
  mileage: number;
  gearbox: string;
  colorExterior: string;
  colorInterior: string;
  engine: string;
}

export interface VehicleHistory {
  owners: number;
  accidents: number;
  usage: string;
  recalls: number;
}

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  subtitle: string;
  price: number;
  status: VehicleStatus;
  image: string;
  gallery: string[];
  specs: VehicleSpecs;
  history: VehicleHistory;
  tags: VehicleTag[];
  sellerNotes: string;
  createdAt: string;
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
  booking: { date: string; time: string; duration: number; format: BookingFormat };
  customer: { firstName: string; lastName: string; email: string; phone: string };
  project: { budget: string; vehicleType: string; description: string };
}

export const MOCK_VEHICLES: Vehicle[] = [
  {
    id: "v1",
    brand: "BMW",
    model: "Série 7",
    subtitle: "740Ld xDrive M Sport",
    price: 24990,
    status: "En ligne",
    image: "",
    gallery: [],
    specs: { fuel: "Diesel", year: 2021, mileage: 88500, gearbox: "Automatique", colorExterior: "Noir Saphir", colorInterior: "Cuir Cognac", engine: "3.0L 6cyl Diesel 340ch" },
    history: { owners: 1, accidents: 0, usage: "Usage personnel", recalls: 0 },
    tags: ["Bonne affaire", "Forte demande"],
    sellerNotes: "Véhicule en parfait état, carnet d'entretien complet BMW. Toutes les options M Sport. Disponible immédiatement.",
    createdAt: "2026-04-10",
  },
  {
    id: "v2",
    brand: "Mercedes-Benz",
    model: "GLC 300",
    subtitle: "AMG Line 4MATIC",
    price: 45900,
    status: "En ligne",
    image: "",
    gallery: [],
    specs: { fuel: "Essence", year: 2023, mileage: 18000, gearbox: "Automatique", colorExterior: "Blanc Polaire", colorInterior: "Cuir Noir", engine: "2.0L 4cyl Essence 258ch" },
    history: { owners: 1, accidents: 0, usage: "Usage personnel", recalls: 0 },
    tags: ["Nouveauté"],
    sellerNotes: "Quasi-neuf, first-hand. Pack AMG extérieur et intérieur. Système MBUX avec écran 12.3\".",
    createdAt: "2026-04-15",
  },
  {
    id: "v3",
    brand: "Audi",
    model: "A6 Avant",
    subtitle: "55 TFSI e Competition",
    price: 38500,
    status: "En ligne",
    image: "",
    gallery: [],
    specs: { fuel: "Hybride", year: 2022, mileage: 42000, gearbox: "Automatique", colorExterior: "Gris Chronos", colorInterior: "Cuir Beige", engine: "2.0L TFSI e 367ch hybride" },
    history: { owners: 2, accidents: 0, usage: "Usage mixte", recalls: 0 },
    tags: ["Baisse de prix"],
    sellerNotes: "Break hybride rechargeable. Idéal pour les familles. Consommation mixte 2.1L/100km.",
    createdAt: "2026-03-20",
  },
  {
    id: "v4",
    brand: "Porsche",
    model: "Macan",
    subtitle: "S PDK",
    price: 55000,
    status: "Brouillon",
    image: "",
    gallery: [],
    specs: { fuel: "Essence", year: 2022, mileage: 35000, gearbox: "Automatique", colorExterior: "Rouge Carmin", colorInterior: "Cuir Noir/Rouge", engine: "2.9L V6 biturbo 380ch" },
    history: { owners: 1, accidents: 0, usage: "Usage personnel", recalls: 0 },
    tags: ["Forte demande"],
    sellerNotes: "Macan S de première main, entretien Porsche à jour. Options Sport Design et Bose.",
    createdAt: "2026-05-01",
  },
  {
    id: "v5",
    brand: "Tesla",
    model: "Model 3",
    subtitle: "Performance Dual Motor",
    price: 42000,
    status: "En ligne",
    image: "",
    gallery: [],
    specs: { fuel: "Électrique", year: 2023, mileage: 22000, gearbox: "Automatique", colorExterior: "Bleu Minuit", colorInterior: "Cuir Blanc", engine: "Dual Motor AWD 513ch" },
    history: { owners: 1, accidents: 0, usage: "Usage personnel", recalls: 0 },
    tags: ["Bonne affaire"],
    sellerNotes: "Autopilot amélioré. Autonomie WLTP 547 km. Garantie batterie jusqu'en 2031.",
    createdAt: "2026-04-22",
  },
  {
    id: "v6",
    brand: "BMW",
    model: "M4",
    subtitle: "Competition xDrive",
    price: 72000,
    status: "En ligne",
    image: "",
    gallery: [],
    specs: { fuel: "Essence", year: 2022, mileage: 28000, gearbox: "Automatique", colorExterior: "Jaune Sao Paulo", colorInterior: "Cuir Noir Mérino", engine: "3.0L S58 biturbo 510ch" },
    history: { owners: 1, accidents: 0, usage: "Usage personnel", recalls: 0 },
    tags: ["Forte demande"],
    sellerNotes: "M4 Competition la plus recherchée du marché en couleur exclusive. Carbon package et M Track.",
    createdAt: "2026-04-05",
  },
  {
    id: "v7",
    brand: "Mercedes-Benz",
    model: "Classe E",
    subtitle: "220 d AMG Line",
    price: 28500,
    status: "Vendu",
    image: "",
    gallery: [],
    specs: { fuel: "Diesel", year: 2020, mileage: 78000, gearbox: "Automatique", colorExterior: "Gris Sélénite", colorInterior: "Cuir Noir", engine: "2.0L OM654 194ch" },
    history: { owners: 2, accidents: 1, usage: "Usage mixte", recalls: 0 },
    tags: [],
    sellerNotes: "Berline fiable et confortable. Légère réparation carrosserie portière avant droite.",
    createdAt: "2026-03-01",
  },
  {
    id: "v8",
    brand: "Volkswagen",
    model: "Golf",
    subtitle: "GTI Performance DSG",
    price: 32000,
    status: "En ligne",
    image: "",
    gallery: [],
    specs: { fuel: "Essence", year: 2023, mileage: 15000, gearbox: "Automatique", colorExterior: "Blanc Nacré", colorInterior: "Alcantara Noir/Rouge", engine: "2.0 TSI 245ch" },
    history: { owners: 1, accidents: 0, usage: "Usage personnel", recalls: 0 },
    tags: ["Nouveauté", "Forte demande"],
    sellerNotes: "Golf 8 GTI Performance avec pack Akrapovic en option. Révision effectuée.",
    createdAt: "2026-05-05",
  },
];

export const MOCK_BUY_REQUESTS: BuyRequest[] = [
  {
    id: "b1",
    status: "Nouveau",
    createdAt: "2026-05-14",
    customer: { firstName: "Jean", lastName: "Dupont", email: "jean.dupont@email.com", phone: "+33600000001" },
    vehicleCriteria: { brand: "Volkswagen", model: "Golf", trim: "GTI ou R", year: "2022 - 2023", gearbox: "Automatique", fuel: "Essence", maxMileage: 40000, maxBudget: 35000, timeframe: "immediat", notes: "De préférence en noir ou gris anthracite." },
  },
  {
    id: "b2",
    status: "En cours",
    createdAt: "2026-05-12",
    customer: { firstName: "Marie", lastName: "Martin", email: "marie.martin@email.com", phone: "+33600000002" },
    vehicleCriteria: { brand: "BMW", model: "Série 3", trim: "320d ou 330d", year: "2021 - 2022", gearbox: "Automatique", fuel: "Diesel", maxMileage: 70000, maxBudget: 28000, timeframe: "1-3 mois", notes: "Carnet entretien BMW impératif." },
  },
  {
    id: "b3",
    status: "Traité",
    createdAt: "2026-05-08",
    customer: { firstName: "Pierre", lastName: "Bernard", email: "p.bernard@email.com", phone: "+33600000003" },
    vehicleCriteria: { brand: "Tesla", model: "Model Y", trim: "Long Range AWD", year: "2022 - 2024", gearbox: "Automatique", fuel: "Électrique", maxMileage: 50000, maxBudget: 55000, timeframe: "1-3 mois", notes: "Couleur blanche ou noire uniquement." },
  },
  {
    id: "b4",
    status: "Nouveau",
    createdAt: "2026-05-13",
    customer: { firstName: "Sophie", lastName: "Laurent", email: "sophie.laurent@email.com", phone: "+33600000004" },
    vehicleCriteria: { brand: "Audi", model: "Q5", trim: "Sportback S line", year: "2022 - 2023", gearbox: "Automatique", fuel: "Hybride", maxMileage: 45000, maxBudget: 48000, timeframe: "3-6 mois", notes: "Intérieur cuir obligatoire." },
  },
  {
    id: "b5",
    status: "En cours",
    createdAt: "2026-05-10",
    customer: { firstName: "Thomas", lastName: "Petit", email: "thomas.petit@email.com", phone: "+33600000005" },
    vehicleCriteria: { brand: "Porsche", model: "Cayenne", trim: "Coupé GTS", year: "2021 - 2023", gearbox: "Automatique", fuel: "Essence", maxMileage: 60000, maxBudget: 90000, timeframe: "1-3 mois", notes: "Pack Sport Design et jantes 22 pouces souhaités." },
  },
];

export const MOCK_SELL_REQUESTS: SellRequest[] = [
  {
    id: "s1",
    status: "Nouveau",
    createdAt: "2026-05-14",
    customer: { firstName: "Alice", lastName: "Moreau", email: "alice.moreau@email.com", phone: "+33600000011" },
    vehicle: { brand: "Renault", model: "Clio V", trim: "Intens TCe 130", year: 2021, mileage: 42000, gearbox: "Manuelle", fuel: "Essence", color: "Noir Étoilé", doors: 5, notes: "Légère rayure portière droite, pare-choc avant nickel.", photos: ["https://placehold.co/800x500/1e1e1e/bcff3d?text=Avant", "https://placehold.co/800x500/1e1e1e/bcff3d?text=Arrière", "https://placehold.co/800x500/1e1e1e/bcff3d?text=Côté+Droit", "https://placehold.co/800x500/1e1e1e/bcff3d?text=Côté+Gauche", "https://placehold.co/800x500/1e1e1e/bcff3d?text=Intérieur", "https://placehold.co/800x500/1e1e1e/bcff3d?text=Compteur"] },
  },
  {
    id: "s2",
    status: "En cours",
    createdAt: "2026-05-11",
    customer: { firstName: "Marc", lastName: "Dubois", email: "marc.dubois@email.com", phone: "+33600000012" },
    vehicle: { brand: "BMW", model: "Série 3", trim: "318d M Sport", year: 2019, mileage: 85000, gearbox: "Automatique", fuel: "Diesel", color: "Bleu Estoril", doors: 4, notes: "Entretien BMW à jour, pneus récents. Quelques éraflures jantes.", photos: ["https://placehold.co/800x500/1e1e1e/4a9eff?text=Avant", "https://placehold.co/800x500/1e1e1e/4a9eff?text=Arrière", "https://placehold.co/800x500/1e1e1e/4a9eff?text=Côté+Droit", "https://placehold.co/800x500/1e1e1e/4a9eff?text=Intérieur"] },
  },
  {
    id: "s3",
    status: "Traité",
    createdAt: "2026-05-05",
    customer: { firstName: "Julie", lastName: "Leroy", email: "j.leroy@email.com", phone: "+33600000013" },
    vehicle: { brand: "Peugeot", model: "308", trim: "GT Pack 180 EAT8", year: 2020, mileage: 65000, gearbox: "Automatique", fuel: "Diesel", color: "Gris Amazonite", doors: 5, notes: "Première main, non fumeur. Révision faite. Carnet complet.", photos: ["https://placehold.co/800x500/1e1e1e/ffffff?text=Avant", "https://placehold.co/800x500/1e1e1e/ffffff?text=Arrière"] },
  },
  {
    id: "s4",
    status: "Nouveau",
    createdAt: "2026-05-13",
    customer: { firstName: "Nicolas", lastName: "Simon", email: "n.simon@email.com", phone: "+33600000014" },
    vehicle: { brand: "Renault", model: "Captur", trim: "E-Tech Hybrid 145 Techno", year: 2022, mileage: 28000, gearbox: "Automatique", fuel: "Hybride", color: "Beige Dune", doors: 5, notes: "Excellent état, aucun accroc. Garantie constructeur encore active.", photos: ["https://placehold.co/800x500/1e1e1e/f59e0b?text=Avant", "https://placehold.co/800x500/1e1e1e/f59e0b?text=Arrière", "https://placehold.co/800x500/1e1e1e/f59e0b?text=Côté+Droit", "https://placehold.co/800x500/1e1e1e/f59e0b?text=Intérieur+Avant", "https://placehold.co/800x500/1e1e1e/f59e0b?text=Tableau+de+Bord"] },
  },
];

export const MOCK_APPOINTMENTS: Appointment[] = [
  {
    id: "a1",
    status: "Confirmé",
    booking: { date: "2026-05-15", time: "10:30", duration: 30, format: "visio" },
    customer: { firstName: "Jean", lastName: "Dupont", email: "jean.dupont@email.com", phone: "+33600000001" },
    project: { budget: "20k-35k", vehicleType: "berline", description: "Cherche une berline sportive pour usage quotidien Paris-banlieue." },
  },
  {
    id: "a2",
    status: "En attente",
    booking: { date: "2026-05-15", time: "14:00", duration: 30, format: "telephone" },
    customer: { firstName: "Marie", lastName: "Martin", email: "marie.martin@email.com", phone: "+33600000002" },
    project: { budget: "25k-40k", vehicleType: "suv", description: "Famille de 4 personnes, recherche SUV fiable et économique." },
  },
  {
    id: "a3",
    status: "Confirmé",
    booking: { date: "2026-05-16", time: "09:00", duration: 45, format: "whatsapp" },
    customer: { firstName: "Paul", lastName: "Simon", email: "paul.simon@email.com", phone: "+33600000006" },
    project: { budget: "15k-25k", vehicleType: "citadine", description: "Première voiture, budget limité, fiabilité prioritaire." },
  },
  {
    id: "a4",
    status: "En attente",
    booking: { date: "2026-05-17", time: "11:30", duration: 30, format: "visio" },
    customer: { firstName: "Claire", lastName: "Moreau", email: "claire.moreau@email.com", phone: "+33600000007" },
    project: { budget: "40k-60k", vehicleType: "suv-premium", description: "Recherche SUV premium, électrique ou hybride rechargeable." },
  },
  {
    id: "a5",
    status: "Confirmé",
    booking: { date: "2026-05-18", time: "15:00", duration: 30, format: "telephone" },
    customer: { firstName: "Louis", lastName: "Bertrand", email: "l.bertrand@email.com", phone: "+33600000008" },
    project: { budget: "60k-80k", vehicleType: "sportive", description: "Passionné, cherche sportive GT pour week-ends circuit." },
  },
  {
    id: "a6",
    status: "Effectué",
    booking: { date: "2026-05-10", time: "10:00", duration: 45, format: "visio" },
    customer: { firstName: "Emma", lastName: "Petit", email: "emma.petit@email.com", phone: "+33600000009" },
    project: { budget: "30k-45k", vehicleType: "break", description: "Break pour déménagement fréquent, longues distances." },
  },
];
