import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
  type InputHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import { useNavigate } from "react-router";
import { requests, uploads } from "../../lib/api";

const MAX_PHOTOS = 4;

type SellFormState = {
  brand: string;
  model: string;
  trim: string;
  year: string;
  mileage: string;
  gearbox: string;
  fuel: string;
  color: string;
  doors: string;
  notes: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const initialForm: SellFormState = {
  brand: "",
  model: "",
  trim: "",
  year: "",
  mileage: "",
  gearbox: "",
  fuel: "",
  color: "",
  doors: "5",
  notes: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

function Field({
  label,
  required,
  children,
  hint,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.34)]">
        {label} {required ? <span className="text-[#bcff3d]">*</span> : null}
      </span>
      {children}
      {hint ? <span className="mt-2 block text-[11px] leading-5 text-[rgba(255,255,255,0.38)]">{hint}</span> : null}
    </label>
  );
}

function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`h-[46px] w-full rounded-[11px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-[14px] text-white outline-none transition focus:border-[rgba(188,255,61,0.35)] focus:bg-[rgba(255,255,255,0.06)] ${props.className ?? ""}`}
    />
  );
}

function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`min-h-[120px] w-full rounded-[11px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-[14px] text-white outline-none transition placeholder:text-[rgba(255,255,255,0.25)] focus:border-[rgba(188,255,61,0.35)] focus:bg-[rgba(255,255,255,0.06)] ${props.className ?? ""}`}
    />
  );
}

function SelectInput(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={`h-[46px] w-full rounded-[11px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 text-[14px] text-white outline-none transition focus:border-[rgba(188,255,61,0.35)] focus:bg-[rgba(255,255,255,0.06)] ${props.className ?? ""}`}
    />
  );
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="border-b border-[rgba(255,255,255,0.08)] pb-4">
      <div className="text-[10px] uppercase tracking-[0.18em] text-[rgba(255,255,255,0.26)]">{eyebrow}</div>
      <div className="mt-2 font-['Syne',sans-serif] text-[18px] font-bold text-white">{title}</div>
      {description ? <div className="mt-2 text-[13px] leading-6 text-[rgba(255,255,255,0.48)]">{description}</div> : null}
    </div>
  );
}

function PhotoPreview({
  file,
  onRemove,
}: {
  file: File;
  onRemove: () => void;
}) {
  const [src, setSrc] = useState("");

  useEffect(() => {
    const url = URL.createObjectURL(file);
    setSrc(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  return (
    <div className="relative overflow-hidden rounded-[14px] border border-[rgba(188,255,61,0.2)] bg-[rgba(188,255,61,0.05)]">
      {src ? <img src={src} alt={file.name} className="h-[140px] w-full object-cover" /> : <div className="h-[140px] w-full bg-[rgba(255,255,255,0.04)]" />}
      <button
        type="button"
        onClick={onRemove}
        className="absolute right-3 top-3 rounded-full bg-[rgba(0,0,0,0.55)] px-3 py-1 text-[11px] font-semibold text-white"
      >
        Retirer
      </button>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 to-transparent px-3 pb-3 pt-10 text-[11px] text-[rgba(255,255,255,0.82)]">
        {file.name}
      </div>
    </div>
  );
}

export default function PageCmsVendreVotreVehicule() {
  const navigate = useNavigate();
  const [form, setForm] = useState<SellFormState>(initialForm);
  const [photos, setPhotos] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof SellFormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(event.target.files ?? []);

    if (selected.length === 0) {
      return;
    }

    if (selected.length > MAX_PHOTOS) {
      setError(`Ajoutez au maximum ${MAX_PHOTOS} photos.`);
      event.target.value = "";
      return;
    }

    setError(null);
    setPhotos(selected);
    event.target.value = "";
  };

  const removePhoto = (index: number) => {
    setPhotos((current) => current.filter((_, photoIndex) => photoIndex !== index));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!form.brand || !form.model || !form.year || !form.mileage || !form.gearbox || !form.fuel || !form.color || !form.doors || !form.firstName || !form.lastName || !form.email || !form.phone) {
      setError("Merci de compléter tous les champs obligatoires.");
      return;
    }

    setIsSubmitting(true);

    try {
      let photoUrls: string[] = [];

      if (photos.length > 0) {
        const uploadResult = await uploads.sellImages(photos);
        photoUrls = uploadResult.urls;
      }

      const response = await requests.createSell({
        customer: {
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
        },
        vehicle: {
          brand: form.brand.trim(),
          model: form.model.trim(),
          trim: form.trim.trim(),
          year: Number(form.year),
          mileage: Number(form.mileage),
          gearbox: form.gearbox,
          fuel: form.fuel,
          color: form.color.trim(),
          doors: Number(form.doors),
          notes: form.notes.trim(),
          photos: photoUrls,
        },
      });

      navigate(`/vendre-votre-vehicule/formulaire?requestId=${encodeURIComponent(response.id)}`);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Impossible d'envoyer votre demande.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#181818] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-[-140px] mx-auto h-[440px] w-[760px] max-w-full rounded-full bg-[radial-gradient(circle_at_center,_rgba(200,236,102,0.32),_rgba(114,249,216,0.07)_45%,_rgba(24,24,24,0)_75%)] blur-[90px]" />
      <div className="relative mx-auto max-w-[1180px] px-5 pb-16 pt-20 sm:px-8 lg:px-10 lg:pb-24 lg:pt-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(188,255,61,0.22)] bg-[rgba(188,255,61,0.09)] px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-[#bcff3d]">
              <span className="size-[6px] rounded-full bg-[#bcff3d]" />
              Photos optionnelles · Réponse sous 24h
            </div>

            <div className="max-w-3xl">
              <h1 className="font-['Syne',sans-serif] text-[42px] font-extrabold leading-[0.96] tracking-[-0.05em] text-white sm:text-[56px]">
                Vendez votre
                <span className="block text-[#bcff3d]">véhicule simplement</span>
              </h1>
              <p className="mt-5 max-w-2xl text-[16px] leading-7 text-[rgba(255,255,255,0.56)]">
                Remplissez le formulaire avec les informations de votre véhicule et vos coordonnées.
                Si vous ajoutez des photos, elles seront uploadées avant l&apos;enregistrement de la demande.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-[18px] bg-[#111411] p-4 text-center">
                <div className="font-['Syne',sans-serif] text-[30px] font-extrabold text-[#bcff3d]">24h</div>
                <div className="mt-1 text-[12px] text-[rgba(255,255,255,0.45)]">délai de réponse</div>
              </div>
              <div className="rounded-[18px] bg-[#111411] p-4 text-center">
                <div className="font-['Syne',sans-serif] text-[30px] font-extrabold text-[#bcff3d]">100%</div>
                <div className="mt-1 text-[12px] text-[rgba(255,255,255,0.45)]">gratuit et sans engagement</div>
              </div>
              <div className="rounded-[18px] bg-[#111411] p-4 text-center">
                <div className="font-['Syne',sans-serif] text-[30px] font-extrabold text-[#bcff3d]">4</div>
                <div className="mt-1 text-[12px] text-[rgba(255,255,255,0.45)]">photos max conseillées</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[28px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-5 sm:p-6 lg:p-8">
              <div className="space-y-8">
                <section>
                  <SectionTitle
                    eyebrow="Informations du véhicule"
                    title="Décrivez le véhicule"
                    description="Ces champs permettent à l'équipe d'évaluer rapidement votre reprise."
                  />
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <Field label="Marque" required>
                      <TextInput value={form.brand} onChange={updateField("brand")} placeholder="Renault" />
                    </Field>
                    <Field label="Modèle" required>
                      <TextInput value={form.model} onChange={updateField("model")} placeholder="Clio V" />
                    </Field>
                    <Field label="Finition">
                      <TextInput value={form.trim} onChange={updateField("trim")} placeholder="Intens" />
                    </Field>
                    <Field label="Année" required>
                      <SelectInput value={form.year} onChange={updateField("year")}>
                        <option value="">Sélectionner...</option>
                        {Array.from({ length: 26 }, (_, index) => new Date().getFullYear() - index).map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </SelectInput>
                    </Field>
                    <Field label="Kilométrage" required hint="Exemple : 45 000">
                      <TextInput value={form.mileage} onChange={updateField("mileage")} placeholder="45000" inputMode="numeric" type="number" min="0" />
                    </Field>
                    <Field label="Boîte" required>
                      <SelectInput value={form.gearbox} onChange={updateField("gearbox")}>
                        <option value="">Sélectionner...</option>
                        <option value="Manuelle">Manuelle</option>
                        <option value="Automatique">Automatique</option>
                      </SelectInput>
                    </Field>
                    <Field label="Carburant" required>
                      <SelectInput value={form.fuel} onChange={updateField("fuel")}>
                        <option value="">Sélectionner...</option>
                        <option value="Essence">Essence</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Hybride">Hybride</option>
                        <option value="Électrique">Électrique</option>
                      </SelectInput>
                    </Field>
                    <Field label="Couleur" required>
                      <TextInput value={form.color} onChange={updateField("color")} placeholder="Gris métallisé" />
                    </Field>
                    <Field label="Portes" required>
                      <SelectInput value={form.doors} onChange={updateField("doors")}>
                        <option value="3">3 portes</option>
                        <option value="5">5 portes</option>
                      </SelectInput>
                    </Field>
                  </div>
                  <div className="mt-4">
                    <Field label="Notes" hint="Ajoutez ici les informations utiles, même si elles sont négatives.">
                      <TextArea
                        value={form.notes}
                        onChange={updateField("notes")}
                        placeholder="Historique d'entretien, défauts, réparations, options, contrôles récents..."
                      />
                    </Field>
                  </div>
                </section>

                <section>
                  <SectionTitle
                    eyebrow="Photos"
                    title="Ajoutez vos photos"
                    description="Vous pouvez envoyer jusqu'à 4 photos. La soumission reste possible sans photo."
                  />
                  <div className="mt-5 rounded-[18px] border border-[rgba(188,255,61,0.2)] bg-[rgba(188,255,61,0.05)] p-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="font-['Syne',sans-serif] text-[16px] font-bold text-white">Face avant, arrière et côtés</div>
                        <div className="mt-1 text-[13px] leading-6 text-[rgba(255,255,255,0.48)]">
                          Prévisualisation locale via URL.createObjectURL, puis upload public avant la création de la demande.
                        </div>
                      </div>
                      <label className="inline-flex cursor-pointer items-center justify-center rounded-[12px] bg-[#bcff3d] px-4 py-3 text-[13px] font-bold text-[#0c0d0c]">
                        Ajouter des photos
                        <input className="hidden" type="file" accept="image/*" multiple onChange={handlePhotoChange} />
                      </label>
                    </div>
                  </div>

                  {photos.length > 0 ? (
                    <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                      {photos.map((file, index) => (
                        <PhotoPreview key={`${file.name}-${file.lastModified}-${index}`} file={file} onRemove={() => removePhoto(index)} />
                      ))}
                    </div>
                  ) : (
                    <div className="mt-4 rounded-[16px] border border-dashed border-[rgba(255,255,255,0.12)] px-5 py-6 text-[13px] text-[rgba(255,255,255,0.42)]">
                      Aucune photo sélectionnée pour le moment.
                    </div>
                  )}
                </section>

                <section>
                  <SectionTitle eyebrow="Coordonnées" title="Comment vous joindre" />
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <Field label="Prénom" required>
                      <TextInput value={form.firstName} onChange={updateField("firstName")} placeholder="Jean" />
                    </Field>
                    <Field label="Nom" required>
                      <TextInput value={form.lastName} onChange={updateField("lastName")} placeholder="Dupont" />
                    </Field>
                    <Field label="Email" required hint="L'estimation vous sera envoyée à cette adresse.">
                      <TextInput value={form.email} onChange={updateField("email")} placeholder="jean.dupont@email.com" type="email" />
                    </Field>
                    <Field label="Téléphone" required hint="Pour vous recontacter rapidement.">
                      <TextInput value={form.phone} onChange={updateField("phone")} placeholder="+33 6 00 00 00 00" type="tel" />
                    </Field>
                  </div>
                </section>

                <section className="border-t border-[rgba(255,255,255,0.08)] pt-6">
                  {error ? (
                    <div className="mb-4 rounded-[14px] border border-[rgba(255,90,90,0.22)] bg-[rgba(255,90,90,0.08)] px-4 py-3 text-[13px] text-[#ffb9b9]">
                      {error}
                    </div>
                  ) : null}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-[14px] bg-[#bcff3d] px-4 py-4 font-['Syne',sans-serif] text-[15px] font-bold tracking-[0.3px] text-[#0c0d0c] transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande de reprise"}
                  </button>
                  <div className="mt-4 flex flex-wrap justify-center gap-4 text-[11px] text-[rgba(255,255,255,0.28)]">
                    <span>Sans engagement</span>
                    <span>Estimation sous 24h</span>
                    <span>Photos optionnelles</span>
                  </div>
                </section>
              </div>
            </form>
          </section>

          <aside className="space-y-5 lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-[24px] border border-[rgba(188,255,61,0.13)] bg-[linear-gradient(133.956deg,rgba(188,255,61,0.07)_0%,rgba(255,255,255,0.02)_100%)] p-6">
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#bcff3d]">Vroom advisor · Reprise véhicule</div>
              <div className="mt-3 font-['Syne',sans-serif] text-[24px] font-bold text-white">
                Un processus
                <span className="block text-[#bcff3d]">rapide et transparent</span>
              </div>
              <div className="mt-6 space-y-3">
                {["Remplissez le formulaire", "Notre équipe analyse votre dossier", "Vous recevez une estimation sous 24h", "Après validation, déposez le véhicule"].map((item, index) => (
                  <div key={item} className="flex items-start gap-3 rounded-[12px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-3">
                    <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[rgba(188,255,61,0.12)] text-[10px] font-bold text-[#bcff3d]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="text-[13px] leading-6 text-[rgba(255,255,255,0.64)]">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-[rgba(255,255,255,0.08)] bg-[#111411] p-6">
              <div className="text-[14px] font-bold text-white">À savoir</div>
              <div className="mt-4 space-y-3 text-[13px] leading-6 text-[rgba(255,255,255,0.58)]">
                <div>Photos optionnelles, mais recommandées pour accélérer le traitement.</div>
                <div>Votre dossier est conservé même si un email de notification échoue.</div>
                <div>Vous pouvez soumettre sans photo et compléter plus tard avec l'équipe.</div>
              </div>
            </div>

            <div className="rounded-[24px] border border-[rgba(188,255,61,0.15)] bg-[rgba(188,255,61,0.05)] p-6">
              <div className="text-[14px] font-bold text-[#bcff3d]">Une question ?</div>
              <div className="mt-4 space-y-3 text-[13px] leading-6 text-[rgba(255,255,255,0.65)]">
                <div>06 19 93 37 65</div>
                <div>contact@vroomparis.fr</div>
                <div>Lun - Sam · 9h à 19h</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
