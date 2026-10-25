# Cristalu Nord — Menuiserie Aluminium, PVC & Façades en Verre

Site vitrine officiel de **Cristalu Nord**, entreprise spécialisée dans la fabrication sur mesure et la pose de menuiseries aluminium, PVC, façades en verre, murs rideaux et habillages au Maroc.

---

## 🚀 Fonctionnalités du site

- **Identité de marque officielle :** Intégration du logo Cristalu Nord (en-tête, pied de page, favicons multi-formats, carte de partage social Open Graph).
- **Design moderne & responsive :** Palette architecturale (Noir/Anthracite, Rouge signature Cristalu, Papier clair), typographies optimisées (*Manrope*, *DM Sans*, *Newsreader*).
- **Savoir-faire détaillé :** Présentation des métiers (Aluminium RPT, PVC isolant, Verre & Façades, Inox & Garde-corps).
- **Portfolio & Réalisations :** Galerie filtrable par catégories avec photos réelles de chantiers et visionneuse lightbox (compatible tactile / swipe mobile et touches clavier ← → ESC).
- **Devis interactif WhatsApp :** Formulaire intelligent générant automatiquement un message pré-rempli et soigné pour une prise de contact directe.
- **Bouton flottant WhatsApp :** Contact rapide en 1 clic pour mobile et ordinateur.
- **Section FAQ :** Accordion interactif répondant aux questions courantes (isolation, RPT, délais, zones d'intervention).
- **SEO & Performance :** Données structurées Schema.org (`HomeAndConstructionBusiness`), balises Open Graph / Twitter Cards, chargement optimisé des images WebP, balisage accessible WAI-ARIA.

---

## 📁 Structure du projet

```
cristalunord/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Déploiement automatique GitHub Pages
├── assets/
│   ├── logo-cristalu-nord.webp   # Logo officiel (fond clair)
│   ├── logo-cristalu-nord-blanc.webp # Logo officiel (fond sombre)
│   ├── marque-cristalu-nord.webp # Emblème / Symbole
│   ├── og-image.jpg              # Carte de partage pour réseaux sociaux / WhatsApp
│   ├── favicon-32.png            # Favicon navigateur
│   ├── apple-touch-icon.png      # Icône pour écran d'accueil iOS
│   ├── icon-192.png, icon-512.png# Icônes PWA
│   ├── atelier.webp              # Photo atelier de fabrication
│   ├── equipe.webp               # Photo équipe chantier
│   ├── facade.webp               # Photo héro chantier façade
│   ├── pvc.webp, verre.webp      # Photos matières
│   └── projet1.webp à projet6.webp # Photos réalisations
├── favicon.ico
├── index.html                    # Page principale
├── style.css                     # Feuille de styles responsive & moderne
├── app.js                        # Interactions (menu, filtres, lightbox, devis)
├── site.webmanifest              # Manifeste PWA
├── robots.txt                    # Directives d'indexation
└── sitemap.xml                   # Plan du site
```

---

## 🛠️ Lancement en local

Pour tester le site sur votre machine :

```bash
# Avec Python 3
python3 -m http.server 8000

# Ou avec Node.js
npx serve .
```

Puis ouvrez votre navigateur à l'adresse : `http://localhost:8000`

---

## 🌐 Déploiement GitHub Pages

Le site est configuré pour être servi automatiquement sur GitHub Pages :
**URL :** [https://mediathreepoints-bit.github.io/cristalunord/](https://mediathreepoints-bit.github.io/cristalunord/)

---

## 📞 Contact Cristalu Nord

- **Téléphone / WhatsApp :** +212 777 077 468
- **Zone d'intervention :** Tanger, Tétouan, Région Nord & tout le Maroc
