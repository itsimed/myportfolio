# Accessibilité

## Objectif

La maquette fournie indique que le portfolio vise la conformité au RGAA 4.1. Il s’agit d’un objectif, pas d’une déclaration de conformité constatée. Une évaluation complète avec les navigateurs, lecteurs d’écran, appareils et critères applicables reste nécessaire avant de revendiquer cette conformité.

## Mesures du site

- Structure avec en-tête, navigation principale, lien d’évitement, contenu principal et pied de page.
- Menu mobile utilisable au clavier et fermeture par la touche Échap.
- Focus visible et titres de sections associés à leurs sections.
- Préférence `prefers-reduced-motion` respectée.
- Traductions FR/EN avec mise à jour de l’attribut `lang` du document.
- Emplacements de visuels exposés avec un texte alternatif explicite jusqu’à réception des captures définitives.

## Contrastes des couleurs de référence

Rapports calculés selon la formule WCAG, sur fond `#F4F3EF` :

| Premier plan | Arrière-plan | Rapport |
|---|---|---:|
| `#141414` | `#F4F3EF` | 16,59:1 |
| `#3A3A3A` | `#F4F3EF` | 10,24:1 |
| `#5A5A5A` | `#F4F3EF` | 6,21:1 |
| `#1F3BB8` | `#F4F3EF` | 7,96:1 |
| `#FFFFFF` | `#1F3BB8` | 8,84:1 |
| `#AFC0FF` | `#141414` | 10,36:1 |
| `#E2E1DC` | `#141414` | 14,07:1 |
| `#D9D7D0` | `#F4F3EF` | 1,30:1 |

`#D9D7D0` est conservé comme bordure décorative; les champs/contrôles emploient une bordure plus sombre. Vérifier aussi chaque état interactif et l’association des textes avec leurs arrière-plans dans un navigateur.

## Vérifications automatisées

- `npm test` lance axe-core sur la page d’accueil, les trois études de cas, la déclaration et la page 404; il teste aussi le menu clavier et la langue du document.
- La règle axe `color-contrast` est désactivée dans jsdom car cette implémentation ne fournit pas Canvas, nécessaire au calcul de contraste par axe.
- `npm run build` lance TypeScript et compile les entrées HTML statiques.

## Vérifications manuelles restantes

- Navigation intégrale au clavier, dont menu mobile, focus, ordre de lecture et activation des liens.
- Lecteurs d’écran ciblés et annonce des textes alternatifs des visuels.
- Zoom à 200 % et 400 %, reflow mobile et vérification des textes longs en français/anglais.
- Contraste dans les navigateurs, particulièrement texte bleu sur les fonds blanc et ivoire et texte clair du bandeau sombre.
- Remplacer les placeholders d’images par des visuels finaux et confirmer leurs alternatives.

Pour signaler une difficulté, contacter [ie.belouettar@gmail.com](mailto:ie.belouettar@gmail.com).
