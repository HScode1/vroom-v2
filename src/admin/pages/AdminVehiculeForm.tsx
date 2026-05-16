import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import { useAdminData } from "../context/AdminDataContext";
import { ChevronLeft, Upload, X, ImageIcon, Check } from "lucide-react";
import type { Vehicle, VehicleStatus, VehicleTag } from "../data/mockData";

const FUEL_OPTIONS = ["Essence", "Diesel", "Hybride", "Hybride rechargeable", "Électrique"];
const GEARBOX_OPTIONS = ["Manuelle", "Automatique"];
const STATUS_OPTIONS: VehicleStatus[] = ["En ligne", "Brouillon", "Vendu"];
const TAGS: VehicleTag[] = ["Bonne affaire", "Forte demande", "Baisse de prix", "Nouveauté"];

type FormData = Omit<Vehicle, "id" | "createdAt">;

const EMPTY_FORM: FormData = {
  brand: "",
  model: "",
  subtitle: "",
  price: 0,
  status: "Brouillon",
  image: "",
  gallery: [],
  specs: { fuel: "Essence", year: new Date().getFullYear(), mileage: 0, gearbox: "Automatique", colorExterior: "", colorInterior: "", engine: "" },
  history: { owners: 1, accidents: 0, usage: "Usage personnel", recalls: 0 },
  tags: [],
  sellerNotes: "",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#1e1e1e] rounded-2xl border border-white/8 p-6 space-y-4">
      <h2 className="text-sm font-semibold text-white/80 uppercase tracking-wider">{title}</h2>
      {children}
    </div>
  );
}

function Field({ label, children, half }: { label: string; children: React.ReactNode; half?: boolean }) {
  return (
    <div className={half ? "space-y-1.5" : "space-y-1.5 col-span-full sm:col-span-1"}>
      <label className="text-xs font-medium text-white/50 uppercase tracking-wide">{label}</label>
      {children}
    </div>
  );
}

const inputCls = "w-full h-10 px-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#bcff3d]/50 transition-colors";
const selectCls = "w-full h-10 px-3.5 rounded-xl bg-[#2a2a2a] border border-white/10 text-white text-sm focus:outline-none focus:border-[#bcff3d]/50 transition-colors appearance-none";

export default function AdminVehiculeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addVehicle, updateVehicle, getVehicle } = useAdminData();
  const isEdit = Boolean(id);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);

  useEffect(() => {
    if (isEdit && id) {
      const vehicle = getVehicle(id);
      if (vehicle) {
        const { id: _id, createdAt: _c, ...rest } = vehicle;
        setForm(rest);
        setGalleryPreviews(vehicle.gallery);
      }
    }
  }, [id, isEdit, getVehicle]);

  function set<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function setSpec<K extends keyof FormData["specs"]>(key: K, value: FormData["specs"][K]) {
    setForm((prev) => ({ ...prev, specs: { ...prev.specs, [key]: value } }));
  }

  function setHistory<K extends keyof FormData["history"]>(key: K, value: FormData["history"][K]) {
    setForm((prev) => ({ ...prev, history: { ...prev.history, [key]: value } }));
  }

  function toggleTag(tag: VehicleTag) {
    setForm((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag) ? prev.tags.filter((t) => t !== tag) : [...prev.tags, tag],
    }));
  }

  function handleFilesSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    files.forEach((file) => {
      const url = URL.createObjectURL(file);
      setGalleryPreviews((prev) => [...prev, url]);
      setForm((prev) => ({ ...prev, gallery: [...prev.gallery, url] }));
    });
    e.target.value = "";
  }

  function removePhoto(index: number) {
    setGalleryPreviews((prev) => prev.filter((_, i) => i !== index));
    setForm((prev) => ({ ...prev, gallery: prev.gallery.filter((_, i) => i !== index) }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    await new Promise((r) => setTimeout(r, 400));
    if (isEdit && id) {
      updateVehicle(id, form);
    } else {
      addVehicle(form);
    }
    setSaving(false);
    setSaved(true);
    setTimeout(() => {
      navigate("/admin/vehicules");
    }, 800);
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => navigate("/admin/vehicules")}
          className="p-2 rounded-xl text-white/40 hover:text-white hover:bg-white/10 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-white">
            {isEdit ? "Modifier le véhicule" : "Nouveau véhicule"}
          </h1>
          {isEdit && (
            <p className="text-white/40 text-sm mt-0.5">
              {form.brand} {form.model}
            </p>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Section title="Informations générales">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Marque">
              <input className={inputCls} value={form.brand} onChange={(e) => set("brand", e.target.value)} placeholder="BMW" required />
            </Field>
            <Field label="Modèle">
              <input className={inputCls} value={form.model} onChange={(e) => set("model", e.target.value)} placeholder="Série 3" required />
            </Field>
            <Field label="Finition / Sous-titre">
              <input className={inputCls} value={form.subtitle} onChange={(e) => set("subtitle", e.target.value)} placeholder="320d M Sport xDrive" required />
            </Field>
            <Field label="Prix (€)">
              <input className={inputCls} type="number" min={0} value={form.price || ""} onChange={(e) => set("price", Number(e.target.value))} placeholder="25900" required />
            </Field>
            <Field label="Statut">
              <select className={selectCls} value={form.status} onChange={(e) => set("status", e.target.value as VehicleStatus)}>
                {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </Field>
          </div>
        </Section>

        <Section title="Caractéristiques techniques">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Carburant">
              <select className={selectCls} value={form.specs.fuel} onChange={(e) => setSpec("fuel", e.target.value)}>
                {FUEL_OPTIONS.map((f) => <option key={f} value={f}>{f}</option>)}
              </select>
            </Field>
            <Field label="Boîte de vitesses">
              <select className={selectCls} value={form.specs.gearbox} onChange={(e) => setSpec("gearbox", e.target.value)}>
                {GEARBOX_OPTIONS.map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
            </Field>
            <Field label="Année">
              <input className={inputCls} type="number" min={2000} max={2030} value={form.specs.year || ""} onChange={(e) => setSpec("year", Number(e.target.value))} placeholder="2022" required />
            </Field>
            <Field label="Kilométrage">
              <input className={inputCls} type="number" min={0} value={form.specs.mileage || ""} onChange={(e) => setSpec("mileage", Number(e.target.value))} placeholder="45000" required />
            </Field>
            <Field label="Couleur extérieure">
              <input className={inputCls} value={form.specs.colorExterior} onChange={(e) => setSpec("colorExterior", e.target.value)} placeholder="Noir Saphir" />
            </Field>
            <Field label="Couleur intérieure">
              <input className={inputCls} value={form.specs.colorInterior} onChange={(e) => setSpec("colorInterior", e.target.value)} placeholder="Cuir Cognac" />
            </Field>
            <div className="sm:col-span-2 space-y-1.5">
              <label className="text-xs font-medium text-white/50 uppercase tracking-wide">Motorisation</label>
              <input className={inputCls} value={form.specs.engine} onChange={(e) => setSpec("engine", e.target.value)} placeholder="3.0L 6cyl Diesel 340ch" />
            </div>
          </div>
        </Section>

        <Section title="Historique du véhicule">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Field label="Nb propriétaires" half>
              <input className={inputCls} type="number" min={1} value={form.history.owners || ""} onChange={(e) => setHistory("owners", Number(e.target.value))} placeholder="1" />
            </Field>
            <Field label="Accidents" half>
              <input className={inputCls} type="number" min={0} value={form.history.accidents ?? ""} onChange={(e) => setHistory("accidents", Number(e.target.value))} placeholder="0" />
            </Field>
            <Field label="Rappels" half>
              <input className={inputCls} type="number" min={0} value={form.history.recalls ?? ""} onChange={(e) => setHistory("recalls", Number(e.target.value))} placeholder="0" />
            </Field>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-white/50 uppercase tracking-wide">Usage</label>
              <input className={inputCls} value={form.history.usage} onChange={(e) => setHistory("usage", e.target.value)} placeholder="Usage personnel" />
            </div>
          </div>
        </Section>

        <Section title="Galerie photos">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {galleryPreviews.map((url, i) => (
              <div key={i} className="relative aspect-video rounded-xl overflow-hidden bg-white/5 group">
                <img src={url} alt={`Photo ${i + 1}`} className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => removePhoto(i)}
                  className="absolute top-1.5 right-1.5 p-1 rounded-lg bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/70"
                >
                  <X size={12} />
                </button>
                {i === 0 && (
                  <span className="absolute bottom-1.5 left-1.5 text-xs bg-[#bcff3d] text-black px-1.5 py-0.5 rounded font-medium">Principale</span>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="aspect-video rounded-xl border-2 border-dashed border-white/15 flex flex-col items-center justify-center gap-2 text-white/30 hover:border-[#bcff3d]/40 hover:text-[#bcff3d]/60 transition-colors"
            >
              <Upload size={20} />
              <span className="text-xs">Ajouter</span>
            </button>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/heic"
            multiple
            className="hidden"
            onChange={handleFilesSelected}
          />
          <p className="text-xs text-white/25">Formats acceptés : JPG, PNG, WebP, HEIC · Max 10 Mo par photo · La 1ère photo sera l'image principale.</p>
        </Section>

        <Section title="Tags marketing">
          <div className="flex flex-wrap gap-3">
            {TAGS.map((tag) => {
              const active = form.tags.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all ${
                    active
                      ? "border-[#bcff3d] bg-[#bcff3d]/10 text-[#bcff3d]"
                      : "border-white/10 text-white/50 hover:border-white/20 hover:text-white/80"
                  }`}
                >
                  {active && <Check size={13} />}
                  {tag}
                </button>
              );
            })}
          </div>
        </Section>

        <Section title="Notes du vendeur">
          <textarea
            value={form.sellerNotes}
            onChange={(e) => set("sellerNotes", e.target.value)}
            rows={5}
            placeholder="Décrivez le véhicule, ses atouts, son état, son historique d'entretien…"
            className="w-full px-3.5 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#bcff3d]/50 transition-colors resize-none"
          />
        </Section>

        <div className="flex items-center justify-end gap-3 pt-2 pb-8">
          <button
            type="button"
            onClick={() => navigate("/admin/vehicules")}
            className="px-5 py-2.5 rounded-xl border border-white/10 text-white/60 text-sm font-medium hover:text-white hover:border-white/20 transition-colors"
          >
            Annuler
          </button>
          <button
            type="submit"
            disabled={saving || saved}
            className="flex items-center gap-2 px-6 py-2.5 bg-[#bcff3d] text-black rounded-xl font-semibold text-sm hover:bg-[#d4ff5c] transition-colors disabled:opacity-70 disabled:cursor-not-allowed min-w-[140px] justify-center"
          >
            {saved ? (
              <><Check size={16} /> Enregistré !</>
            ) : saving ? (
              "Enregistrement…"
            ) : (
              isEdit ? "Enregistrer" : "Créer le véhicule"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
