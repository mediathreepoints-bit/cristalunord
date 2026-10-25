# Guide de Déploiement Hostinger — CRISTALU NORD (Node.js 24)

Ce guide détaille la mise en production de l'application Full-Stack **CRISTALU NORD** sur un hébergement **Hostinger Node.js Hosting** ou **Hostinger VPS**.

---

## 1. Prérequis sur Hostinger

- Un plan d'hébergement Hostinger supportant Node.js (ex: Hostinger Cloud Startup / Cloud Professional ou Hostinger VPS KVM).
- Node.js version **22 LTS** ou **24 LTS** sélectionné dans le panneau hPanel.
- Nom de domaine configuré avec certificat SSL (Let's Encrypt automatique).

---

## 2. Configuration des Variables d'Environnement (.env)

Dans le panneau Hostinger (ou fichier `.env.production` à la racine du projet) :

```env
NODE_ENV=production
PORT=3000
NEXT_PUBLIC_SITE_URL=https://cristalunord.ma

# Coordonnées
NEXT_PUBLIC_COMPANY_NAME="CRISTALU NORD"
NEXT_PUBLIC_PHONE="+212777077468"
NEXT_PUBLIC_PHONE_DISPLAY="+212 777 077 468"
NEXT_PUBLIC_WHATSAPP_PHONE="212777077468"
NEXT_PUBLIC_EMAIL="contact@cristalunord.ma"
NEXT_PUBLIC_ADDRESS="Tanger, Région Tanger-Tétouan-Al Hoceïma, Maroc"

# Supabase (Copiez les clés depuis votre dashboard Supabase)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# WhatsApp Cloud API (Optionnel)
WHATSAPP_API_TOKEN=your_whatsapp_token
WHATSAPP_PHONE_NUMBER_ID=your_phone_id
WHATSAPP_VERIFY_TOKEN=cristalu_nord_webhook_verify_secret_2026

# Sécurité Admin
ADMIN_DEMO_PASSWORD=cristalu2026!
JWT_SECRET=super_secret_jwt_key_cristalu_nord_2026
```

---

## 3. Déploiement & Build

### Option A : Déploiement via Git (Recommandé)

1. Connectez votre dépôt GitHub `mediathreepoints-bit/cristalunord` dans le menu **Git** de votre hPanel.
2. Lancez les commandes de build :

```bash
# Installation des dépendances
npm install --production=false

# Compilation optimisée Next.js
npm run build
```

3. Démarrez l'application avec la commande :
```bash
npm start
```
*(ou utilisez le binaire autonome généré dans `.next/standalone/server.js`)*

---

### Option B : Déploiement via PM2 (VPS / Node.js Process Manager)

Créez un fichier `ecosystem.config.js` :

```javascript
module.exports = {
  apps: [
    {
      name: 'cristalunord',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
```

Puis lancez :
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

---

## 4. Configuration Nginx Reverse Proxy (si VPS)

```nginx
server {
    server_name cristalunord.ma www.cristalunord.ma;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 5. Vérification & Tests Post-Déploiement

- Accédez à `https://cristalunord.ma` (vérifiez le SSL).
- Testez le configurateur de devis : `https://cristalunord.ma/devis`.
- Connectez-vous à l'espace d'administration : `https://cristalunord.ma/admin/login` avec le mot de passe configuré.
