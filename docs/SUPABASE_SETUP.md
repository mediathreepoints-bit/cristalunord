# Guide de Configuration Supabase PostgreSQL — CRISTALU NORD

Ce guide explique comment initialiser votre base de données Supabase pour activer la persistance en production.

---

## 1. Création du Projet Supabase

1. Rendez-vous sur [Supabase.com](https://supabase.com) et connectez-vous.
2. Créez une nouvelle organisation et un projet nommé **`cristalu-nord-db`**.
3. Choisissez la région la plus proche du Maroc (ex: `eu-west-3` Paris ou `eu-west-1` Francfort/Londres).
4. Définissez un mot de passe sécurisé pour la base de données PostgreSQL.

---

## 2. Exécution du Schéma SQL

1. Dans votre tableau de bord Supabase, ouvrez l'onglet **SQL Editor** (dans la barre latérale gauche).
2. Cliquez sur **New query**.
3. Ouvrez le fichier de migration situé dans le projet :  
   `supabase/migrations/20261025000000_init_schema.sql`
4. Copiez l'intégralité du script SQL et collez-le dans l'éditeur Supabase.
5. Cliquez sur **Run** (ou `Cmd + Enter` / `Ctrl + Enter`).

Le script va créer automatiquement :
- Les tables : `profiles`, `leads`, `quotes`, `quote_items`, `services`, `products`, `projects`, `whatsapp_conversations`, `whatsapp_messages`, `website_settings`, etc.
- Les index de performance pour les recherches rapides.
- Les politiques de sécurité **Row Level Security (RLS)** protégeant les données privées des clients.
- Les triggers de numérotation automatique des devis (`DEV-2026-XXXX`).
- Les données initiales de Cristalu Nord (services, réalisations et coordonnées).

---

## 3. Récupération des Clés API

1. Dans Supabase, allez dans **Project Settings** > **API**.
2. Récupérez :
   - **Project URL** -> `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key** -> `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role secret key** -> `SUPABASE_SERVICE_ROLE_KEY`
3. Renseignez ces valeurs dans votre fichier `.env.local` ou dans les variables d'environnement Hostinger.

---

## 4. Configuration de Supabase Storage

1. Allez dans l'onglet **Storage** dans Supabase.
2. Créez deux buckets publics :
   - `projects` (pour les photos des réalisations)
   - `quotes-pdf` (pour l'archivage sécurisé des devis générés)
