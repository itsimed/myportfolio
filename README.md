# Imed Eddine Belouettar — Portfolio

Portfolio personnel présentant mon travail en développement front-end et en design UI/UX.

## Site

[imedbelouettar.me](https://imedbelouettar.me)

## Stack

- React 19, TypeScript et Vite
- Tailwind CSS
- EmailJS pour le formulaire de contact
- Traductions françaises et anglaises

## Développement local

```bash
npm install
npm run dev
```

## Pages

- `/` — accueil, profil, compétences, projets et contact
- `/projects/wassalni/` — étude de cas Wassalni
- `/projects/divanhane/` — étude de cas Divan Hane
- `/projects/picci/` — étude de cas Picci
- `/accessibility/` — déclaration d’accessibilité
- `404.html` — page introuvable pour GitHub Pages

Les pages de détail sont des entrées HTML statiques Vite, pour que leurs URLs fonctionnent en accès direct sur GitHub Pages. Les informations absentes des sources (rôle, durée, équipe et méthodes) sont signalées comme restant à compléter plutôt qu’inventées.

## Structure

```text
src/
├── components/     # Navigation, layout et sections de la page d’accueil
├── contexts/       # État de langue français/anglais
├── data/           # Données des projets et études de cas
├── pages/          # Études de cas, accessibilité et 404
└── translations/   # Textes français et anglais

projects/<slug>/index.html
accessibility/index.html
404.html
```

## Tests et build

```bash
npm test
npm run build
```

La suite axe/jsdom vérifie l’accueil, les trois études de cas, la déclaration et la page 404, ainsi que le menu clavier et la langue du document. Le contraste est mesuré séparément, car jsdom ne fournit pas l’API Canvas utilisée par axe pour cette règle. Voir [ACCESSIBILITE.md](./ACCESSIBILITE.md) pour le périmètre et les vérifications manuelles, et [A-COMPLETER.md](./A-COMPLETER.md) pour les contenus manquants.

Le build génère les pages dans `dist/`. Le workflow GitHub Actions exécute les tests puis publie le résultat sur GitHub Pages.

## Contact

- Email : [ie.belouettar@gmail.com](mailto:ie.belouettar@gmail.com)
- LinkedIn : [ie-belouettar](https://www.linkedin.com/in/ie-belouettar/)
- GitHub : [@itsimed](https://github.com/itsimed)
