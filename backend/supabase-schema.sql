-- ============================================================
-- VroomAdvisor — Supabase Schema
-- Run this in the Supabase SQL Editor (Dashboard > SQL Editor)
-- ============================================================

-- Enable UUID extension (already enabled on Supabase)
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS btree_gist;

-- ── Vehicles ──────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS vehicles (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  brand       TEXT NOT NULL,
  model       TEXT NOT NULL,
  subtitle    TEXT NOT NULL DEFAULT '',
  price       INTEGER NOT NULL CHECK (price > 0),
  status      TEXT NOT NULL DEFAULT 'Brouillon'
                CHECK (status IN ('En ligne', 'Vendu', 'Brouillon')),
  image       TEXT NOT NULL DEFAULT '',
  gallery     JSONB NOT NULL DEFAULT '[]',
  specs       JSONB NOT NULL DEFAULT '{}',
  history     JSONB NOT NULL DEFAULT '{}',
  tags        JSONB NOT NULL DEFAULT '[]',
  seller_notes TEXT NOT NULL DEFAULT '',
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── Buy requests ──────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS buy_requests (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  status           TEXT NOT NULL DEFAULT 'Nouveau'
                     CHECK (status IN ('Nouveau', 'En cours', 'Traité', 'Annulé')),
  customer         JSONB NOT NULL,
  vehicle_criteria JSONB NOT NULL,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── Sell requests ─────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS sell_requests (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  status     TEXT NOT NULL DEFAULT 'Nouveau'
               CHECK (status IN ('Nouveau', 'En cours', 'Traité', 'Annulé')),
  customer   JSONB NOT NULL,
  vehicle    JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── Appointments ──────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS appointments (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  status     TEXT NOT NULL DEFAULT 'En attente'
               CHECK (status IN ('Confirmé', 'En attente', 'Annulé', 'Effectué')),
  booking    JSONB NOT NULL,
  customer   JSONB NOT NULL,
  project    JSONB NOT NULL,
  start_at   TIMESTAMPTZ NOT NULL,
  end_at     TIMESTAMPTZ NOT NULL,
  calendar_event_id TEXT,
  cancel_token TEXT NOT NULL DEFAULT gen_random_uuid()::text,
  reschedule_token TEXT NOT NULL DEFAULT gen_random_uuid()::text,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE appointments DROP CONSTRAINT IF EXISTS appointments_no_active_overlap;
ALTER TABLE appointments
  ADD CONSTRAINT appointments_no_active_overlap
  EXCLUDE USING gist (tstzrange(start_at, end_at, '[)') WITH &&)
  WHERE (status IN ('Confirmé', 'En attente'));

-- ── Contact messages ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS contact_messages (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name  TEXT NOT NULL,
  email      TEXT NOT NULL,
  subject    TEXT NOT NULL,
  message    TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── Email logs ───────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS email_logs (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type       TEXT NOT NULL,
  template   TEXT NOT NULL,
  recipient  TEXT NOT NULL,
  subject    TEXT NOT NULL,
  status     TEXT NOT NULL DEFAULT 'pending'
               CHECK (status IN ('pending', 'sent', 'failed')),
  provider_id TEXT,
  error      TEXT,
  metadata   JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── Auto-update updated_at on vehicles ───────────────────────────────────────
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS vehicles_updated_at ON vehicles;
CREATE TRIGGER vehicles_updated_at
  BEFORE UPDATE ON vehicles
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

DROP TRIGGER IF EXISTS email_logs_updated_at ON email_logs;
CREATE TRIGGER email_logs_updated_at
  BEFORE UPDATE ON email_logs
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ── Row Level Security ────────────────────────────────────────────────────────
-- We use the service role key from the backend, so RLS can stay permissive.
-- The backend enforces auth via JWT middleware.
ALTER TABLE vehicles         ENABLE ROW LEVEL SECURITY;
ALTER TABLE buy_requests     ENABLE ROW LEVEL SECURITY;
ALTER TABLE sell_requests    ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments     ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_logs       ENABLE ROW LEVEL SECURITY;

-- Allow all operations from the service role (backend)
CREATE POLICY "service_role_all" ON vehicles         FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "service_role_all" ON buy_requests     FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "service_role_all" ON sell_requests    FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "service_role_all" ON appointments     FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "service_role_all" ON contact_messages FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "service_role_all" ON email_logs       FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Public can read "En ligne" vehicles only
CREATE POLICY "public_read_vehicles" ON vehicles
  FOR SELECT TO anon USING (status = 'En ligne');

-- ── Storage bucket for vehicle images ────────────────────────────────────────
-- Run in Supabase Dashboard > Storage > New bucket: "vehicles"
-- Or uncomment below (requires storage extension):
-- INSERT INTO storage.buckets (id, name, public) VALUES ('vehicles', 'vehicles', true)
-- ON CONFLICT DO NOTHING;
