# Guide de déploiement — VroomAdvisor

## 1. Créer le projet Supabase

1. Va sur [supabase.com](https://supabase.com) → **New project**
2. Note ton **Project URL** et ta **Service Role Key** (Settings > API)
3. Dans **SQL Editor**, exécute le contenu de `backend/supabase-schema.sql`
4. Dans **Storage**, crée un bucket nommé `vehicles` et coche **Public**

---

## 2. Déployer le backend sur Railway

1. Va sur [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub repo**
2. Sélectionne ce repo, **Root directory** : `backend`
3. Dans les **Variables d'environnement** de Railway, ajoute :

```
PORT=3001
FRONTEND_URL=https://ton-site.netlify.app
JWT_SECRET=<une longue chaîne aléatoire>
ADMIN_EMAIL=admin@vroomparis.fr
ADMIN_PASSWORD=<ton mot de passe sécurisé>
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...
SUPABASE_STORAGE_BUCKET=vehicles
MAX_FILE_SIZE_MB=10
```

4. Railway génère une URL publique ex: `https://vroom-backend.up.railway.app`

---

## 3. Déployer le frontend sur Netlify

1. Va sur [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
2. **Build command** : `npm run build`  
   **Publish directory** : `dist`
3. Dans **Site configuration > Environment variables**, ajoute :

```
VITE_API_URL=https://vroom-backend.up.railway.app
```

4. Relance le déploiement

---

## 4. Mettre à jour le CORS du backend

Dans Railway, mets à jour `FRONTEND_URL` avec l'URL Netlify réelle.

---

## 5. Tester

- `https://ton-site.netlify.app/admin` → login avec tes credentials
- Créer un véhicule → les données doivent apparaître dans Supabase
- Uploader une photo → vérifier dans Supabase Storage > vehicles

---

## Développement local

```bash
# Terminal 1 — Backend
cd backend
cp .env.example .env   # remplis les valeurs Supabase
npm run dev

# Terminal 2 — Frontend
cp .env.example .env.local   # VITE_API_URL=http://localhost:3001
npm run dev
```
