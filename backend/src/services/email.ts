import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = "VroomAdvisor <reservations@vroomparis.fr>";
const TEAM_EMAIL = process.env.TEAM_EMAIL ?? "contact@vroomparis.fr";

function buildIcs(params: {
  date: string;
  time: string;
  durationMinutes: number;
  format: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}): string {
  const { date, time, durationMinutes, format, firstName, lastName, email, phone } = params;

  const [year, month, day] = date.split("-").map(Number);
  const [hours, minutes] = time.split(":").map(Number);
  const start = new Date(year, month - 1, day, hours, minutes);
  const end = new Date(start.getTime() + durationMinutes * 60 * 1000);

  const pad = (n: number) => String(n).padStart(2, "0");
  const fmt = (d: Date) =>
    `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;

  const formatLabel =
    format === "telephone"
      ? "Consultation par téléphone"
      : format === "whatsapp"
        ? "Consultation sur WhatsApp"
        : "Consultation en visio";

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//VroomAdvisor//FR",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:RDV VroomAdvisor — ${firstName} ${lastName}`,
    `DESCRIPTION:Format : ${formatLabel}\\nClient : ${firstName} ${lastName}\\nTél : ${phone}\\nEmail : ${email}`,
    `ORGANIZER;CN=VroomAdvisor:mailto:${TEAM_EMAIL}`,
    `ATTENDEE;CN=${firstName} ${lastName}:mailto:${email}`,
    "LOCATION:VroomAdvisor - 4 bis Av. Alexandre Dumas\\, 95230 Soisy-sous-Montmorency",
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

function formatDate(date: string): string {
  const d = new Date(`${date}T12:00:00`);
  const weekday = new Intl.DateTimeFormat("fr-FR", { weekday: "long" }).format(d);
  const day = new Intl.DateTimeFormat("fr-FR", { day: "2-digit" }).format(d);
  const month = new Intl.DateTimeFormat("fr-FR", { month: "long" }).format(d);
  const year = new Intl.DateTimeFormat("fr-FR", { year: "numeric" }).format(d);
  return `${weekday.charAt(0).toUpperCase()}${weekday.slice(1)} ${day} ${month} ${year}`;
}

function formatLabel(format: string): string {
  if (format === "telephone") return "Téléphone";
  if (format === "whatsapp") return "WhatsApp";
  return "Visioconférence";
}

export async function sendBookingConfirmationToClient(params: {
  date: string;
  time: string;
  durationMinutes: number;
  format: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}) {
  const { date, time, durationMinutes, format, firstName, lastName, email } = params;
  const dateLabel = formatDate(date);
  const formatStr = formatLabel(format);

  const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#181818;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#181818;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#1e1e1e;border-radius:24px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;">

        <!-- Header -->
        <tr><td style="background:#1a1a1a;padding:28px 36px;border-bottom:1px solid rgba(255,255,255,0.08);">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td><span style="font-size:20px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">Vroom<span style="color:#bcff3d;">Advisor</span></span></td>
              <td align="right"><span style="background:rgba(188,255,61,0.12);border:1px solid rgba(188,255,61,0.25);color:#bcff3d;font-size:11px;padding:5px 12px;border-radius:100px;">✓ Confirmé</span></td>
            </tr>
          </table>
        </td></tr>

        <!-- Hero -->
        <tr><td style="padding:40px 36px 32px;text-align:center;">
          <div style="width:72px;height:72px;background:rgba(188,255,61,0.12);border:1px solid rgba(188,255,61,0.25);border-radius:24px;margin:0 auto 24px;display:flex;align-items:center;justify-content:center;font-size:32px;">✓</div>
          <h1 style="margin:0 0 12px;font-size:28px;font-weight:800;color:#ffffff;">Rendez-vous <span style="color:#bcff3d;">confirmé !</span></h1>
          <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.55);line-height:1.6;">
            Bonjour <strong style="color:rgba(255,255,255,0.9);">${firstName}</strong>, votre consultation automobile est bien réservée.<br>
            Votre conseiller vous contactera à l'heure choisie.
          </p>
        </td></tr>

        <!-- Recap -->
        <tr><td style="padding:0 36px 36px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;">
            <tr><td style="background:rgba(188,255,61,0.06);padding:12px 20px;border-bottom:1px solid rgba(188,255,61,0.12);">
              <span style="font-size:10px;font-weight:600;color:rgba(188,255,61,0.65);letter-spacing:1.2px;text-transform:uppercase;">Récapitulatif de votre rendez-vous</span>
            </td></tr>
            <tr><td style="padding:0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <div style="font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;">Date</div>
                  <div style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.9);">${dateLabel}</div>
                </td></tr>
                <tr><td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <div style="font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;">Heure &amp; durée</div>
                  <div style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.9);">${time} — ${durationMinutes} min</div>
                </td></tr>
                <tr><td style="padding:16px 20px;border-bottom:1px solid rgba(255,255,255,0.06);">
                  <div style="font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;">Format</div>
                  <div style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.9);">${formatStr}</div>
                </td></tr>
                <tr><td style="padding:16px 20px;">
                  <div style="font-size:10px;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;">Conseiller assigné</div>
                  <div style="font-size:14px;font-weight:500;color:rgba(255,255,255,0.9);">Julien DURANT</div>
                </td></tr>
              </table>
            </td></tr>
          </table>
        </td></tr>

        <!-- Note annulation -->
        <tr><td style="padding:0 36px 32px;">
          <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.35);text-align:center;">
            Annulation gratuite jusqu'à 24h avant le rendez-vous.<br>
            Contactez-nous : <a href="tel:+33670760719" style="color:#bcff3d;">06 70 76 07 19</a> · <a href="mailto:contact@vroomparis.fr" style="color:#bcff3d;">contact@vroomparis.fr</a>
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#181818;padding:20px 36px;border-top:1px solid rgba(255,255,255,0.06);text-align:center;">
          <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.2);">© 2026 Vroom Paris · 4 bis Av. Alexandre Dumas, 95230 Soisy-sous-Montmorency</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  await resend.emails.send({
    from: FROM,
    to: email,
    subject: `✅ Rendez-vous confirmé — ${dateLabel} à ${time}`,
    html,
  });
}

export async function sendBookingNotificationToTeam(params: {
  date: string;
  time: string;
  durationMinutes: number;
  format: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  budget: string;
  vehicleType: string;
  description: string;
}) {
  const { date, time, durationMinutes, format, firstName, lastName, email, phone, budget, vehicleType, description } = params;
  const dateLabel = formatDate(date);
  const formatStr = formatLabel(format);
  const icsContent = buildIcs({ date, time, durationMinutes, format, firstName, lastName, email, phone });

  const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">

        <tr><td style="background:#181818;padding:20px 28px;">
          <span style="font-size:18px;font-weight:800;color:#ffffff;">Vroom<span style="color:#bcff3d;">Advisor</span></span>
          <span style="float:right;background:#bcff3d;color:#000;font-size:11px;font-weight:700;padding:4px 10px;border-radius:100px;">Nouveau RDV</span>
        </td></tr>

        <tr><td style="padding:28px;">
          <h2 style="margin:0 0 20px;font-size:20px;color:#111827;">📅 Nouveau rendez-vous — ${dateLabel} à ${time}</h2>

          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:8px;overflow:hidden;margin-bottom:20px;">
            <tr><td style="padding:12px 16px;background:#f3f4f6;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.8px;border-bottom:1px solid #e5e7eb;">Client</td></tr>
            <tr><td style="padding:0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Nom :</strong> <span style="color:#111827;">${firstName} ${lastName}</span></td></tr>
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Email :</strong> <a href="mailto:${email}" style="color:#2563eb;">${email}</a></td></tr>
                <tr><td style="padding:12px 16px;font-size:13px;"><strong style="color:#374151;">Tél :</strong> <a href="tel:${phone}" style="color:#2563eb;">${phone}</a></td></tr>
              </table>
            </td></tr>
          </table>

          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:8px;overflow:hidden;margin-bottom:20px;">
            <tr><td style="padding:12px 16px;background:#f3f4f6;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.8px;border-bottom:1px solid #e5e7eb;">Rendez-vous</td></tr>
            <tr><td style="padding:0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Date :</strong> <span style="color:#111827;">${dateLabel}</span></td></tr>
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Heure :</strong> <span style="color:#111827;">${time} (${durationMinutes} min)</span></td></tr>
                <tr><td style="padding:12px 16px;font-size:13px;"><strong style="color:#374151;">Format :</strong> <span style="color:#111827;">${formatStr}</span></td></tr>
              </table>
            </td></tr>
          </table>

          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:8px;overflow:hidden;margin-bottom:20px;">
            <tr><td style="padding:12px 16px;background:#f3f4f6;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.8px;border-bottom:1px solid #e5e7eb;">Projet</td></tr>
            <tr><td style="padding:0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Budget :</strong> <span style="color:#111827;">${budget}</span></td></tr>
                <tr><td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;font-size:13px;"><strong style="color:#374151;">Véhicule :</strong> <span style="color:#111827;">${vehicleType}</span></td></tr>
                ${description ? `<tr><td style="padding:12px 16px;font-size:13px;"><strong style="color:#374151;">Notes :</strong> <span style="color:#111827;">${description}</span></td></tr>` : ""}
              </table>
            </td></tr>
          </table>

          <p style="margin:0;font-size:12px;color:#9ca3af;text-align:center;">Le fichier .ics joint vous permet d'ajouter ce rendez-vous à votre agenda en un clic.</p>
        </td></tr>

        <tr><td style="background:#f9fafb;padding:16px 28px;border-top:1px solid #e5e7eb;text-align:center;">
          <p style="margin:0;font-size:11px;color:#9ca3af;">VroomAdvisor · contact@vroomparis.fr · 06 70 76 07 19</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  await resend.emails.send({
    from: FROM,
    to: TEAM_EMAIL,
    subject: `📅 Nouveau RDV — ${firstName} ${lastName} · ${dateLabel} ${time}`,
    html,
    attachments: [
      {
        filename: "rendez-vous-vroom.ics",
        content: Buffer.from(icsContent).toString("base64"),
      },
    ],
  });
}
