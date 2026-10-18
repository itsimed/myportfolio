# Imed Belouettar — Portfolio

Portfolio de Product Designer UX/UI, organisé selon la maquette HTML de référence fournie.

## Développement local

```bash
npm install
npm run dev
```

## Structure de la page d’accueil

Dans l’ordre de la référence :

1. Navigation vers les études de cas, la méthode, À propos et Contact; bascule FR/EN.
2. Accueil et recherche d’alternance, phrase de positionnement, CV et informations clés.
3. Études de cas Wassalni, audit MIASHS – Paris 8 et Sanou va bien.
4. Méthode de travail en quatre étapes.
5. Bandeau consacré à l’accessibilité.
6. Réalisations front-end : Divan Hane, Picci, BDTech et CabinetCM.
7. À propos.
8. Contact et liens sociaux.
9. Pied de page avec déclaration d’accessibilité.

La navigation des études de cas mène vers des pages accessibles directement :

- `/projects/wassalni/`
- `/projects/miashs/`
- `/projects/sanou-va-bien/`
- `/accessibility/`

Vite compile ces entrées HTML séparément pour le déploiement GitHub Pages. `404.html` fournit la page d’erreur du site.

## Organisation du code

```text
src/
├── components/     # Navigation et sections de la maquette
├── contexts/       # Fournisseur de langue FR/EN
├── data/           # Descripteurs des études de cas et réalisations
├── hooks/          # Hook de langue
├── pages/          # Pages d’étude de cas, déclaration et 404
└── translations/   # Contenu français/anglais

projects/<slug>/index.html
accessibility/index.html
```

Les textes de la maquette, y compris `[DATE]`, `[X]` et les emplacements de visuels, sont conservés comme éléments à valider/remplacer. Voir [A-COMPLETER.md](./A-COMPLETER.md).

## Vérifications

```bash
npm test
npm run build
```

Les tests axe/jsdom couvrent les pages et le comportement clavier. La règle automatique de contraste est désactivée dans jsdom (absence d’API Canvas); les tests automatiques ne remplacent pas les vérifications manuelles détaillées dans [ACCESSIBILITE.md](./ACCESSIBILITE.md).
