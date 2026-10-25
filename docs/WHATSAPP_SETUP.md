# Guide de Configuration WhatsApp Cloud API — CRISTALU NORD

Ce guide détaille la mise en service de l'**Assistant CRISTALU NORD** avec l'API officielle **Meta WhatsApp Business Platform / Cloud API**.

---

## 1. Création de l'Application Meta for Developers

1. Rendez-vous sur [developers.facebook.com](https://developers.facebook.com/) et connectez-vous avec votre compte Meta Business.
2. Créez une nouvelle application de type **Business / Entreprise**.
3. Dans le panneau de configuration des produits, ajoutez le produit **WhatsApp**.
4. Associez votre compte WhatsApp Business (WABA).

---

## 2. Configuration du Webhook

1. Dans la section **WhatsApp** > **Configuration** du tableau de bord Meta :
2. Renseignez l'URL de rappel (Callback URL) :
   ```
   https://cristalunord.ma/api/whatsapp/webhook
   ```
3. Renseignez le jeton de vérification (Verify Token) :
   ```
   cristalu_nord_webhook_verify_secret_2026
   ```
   *(ou la valeur définie dans votre variable `WHATSAPP_VERIFY_TOKEN`)*
4. Cliquez sur **Vérifier et enregistrer**.
5. Dans les champs d'abonnement au Webhook, cochez **`messages`** et **`message_status`**.

---

## 3. Récupération des Clés d'Accès

Dans la section **WhatsApp** > **Démarrage rapide (API Setup)** :
1. Récupérez le **Phone Number ID** -> `WHATSAPP_PHONE_NUMBER_ID`
2. Récupérez le **WhatsApp Business Account ID** -> `WHATSAPP_BUSINESS_ACCOUNT_ID`
3. Générez un jeton d'accès permanent système (System User Access Token) -> `WHATSAPP_API_TOKEN`

---

## 4. Fonctionnement du Mode Démonstration vs Réel

- **Mode Réel (Clés configurées) :** Les messages envoyés par les clients sur le numéro WhatsApp officiel +212 777 077 468 sont reçus par le webhook `/api/whatsapp/webhook`, qualifiés par l'agent et enregistrés dans la table `whatsapp_conversations` et dans le CRM.
- **Mode Démonstration (Clés non renseignées) :** Le widget interactif du site fonctionne en simulation locale avec la mention « Mode qualification direct & Devis WhatsApp » et redirige les clients vers l'application WhatsApp native pré-remplie.
