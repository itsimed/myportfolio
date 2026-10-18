# Accessibilité

## Engagement et périmètre

Le portfolio vise les principes WCAG 2.2 niveau AA. Cette cible décrit l’objectif de conception, pas une certification ni une déclaration de conformité exhaustive. Les vérifications automatiques ne couvrent qu’une partie des critères; une évaluation manuelle avec différents navigateurs et technologies d’assistance reste nécessaire.

La maquette de référence mentionnée dans la demande n’était pas présente dans le dépôt. La refonte a donc été construite à partir de la structure et des contenus existants, sans prétendre reproduire cette maquette.

## Mesures intégrées

- Lien d’évitement, en-tête, navigation, contenu principal et pied de page sémantiques.
- Navigation mobile commandable au clavier, fermeture avec Échap et indicateur de focus visible.
- Titres hiérarchisés, libellés de formulaire associés, erreurs reliées aux champs et annonces de résultat.
- Langue de document et libellés synchronisés en français/anglais.
- Préférence `prefers-reduced-motion` respectée pour le défilement et les animations CSS.
- Bordures décoratives différenciées des contours de champs et contrôles.

## Contrastes des tokens

Les rapports ont été calculés selon la formule WCAG pour les couleurs opaques suivantes :

| Premier plan | Arrière-plan | Rapport | Usage |
|---|---|---:|---|
| `#53564F` | `#F4F3EF` | 6,73:1 | Texte secondaire |
| `#315341` | `#F4F3EF` | 7,74:1 | Texte et boutons principaux |
| `#706E66` | `#F4F3EF` | 4,60:1 | Bordure des champs et contrôles |
| `#134F99` | `#F4F3EF` | 7,26:1 | Indicateur de focus |
| `#D9D7D0` | `#F4F3EF` | 1,30:1 | Séparateurs décoratifs seulement |

La bordure décorative `#D9D7D0` n’est donc pas utilisée seule pour délimiter les champs ou contrôles interactifs.

## Vérifications automatisées

- `npm test` exécute axe-core avec Vitest/jsdom sur l’accueil, les trois études de cas, la déclaration et la page 404, plus des vérifications de langue et du menu clavier.
- La règle axe `color-contrast` est désactivée dans jsdom : cet environnement ne fournit pas l’API Canvas utilisée par axe pour calculer les couleurs. Les tokens sont mesurés séparément ci-dessus; le contraste du rendu final doit encore être vérifié dans un navigateur réel.
- `npm run build` vérifie TypeScript et génère les pages statiques.

## Vérifications manuelles restantes

- Tester au clavier et avec un lecteur d’écran sur les navigateurs ciblés.
- Vérifier zoom à 200 % et 400 %, réorganisation mobile, focus, ouverture/fermeture du menu et ordre de lecture.
- Vérifier visuellement les contrastes des états interactifs et des images/écrans réellement publiés.
- Tester les états d’erreur et de succès du formulaire EmailJS avec une configuration active.
- Confirmer les textes alternatifs des images et la pertinence de chaque lien externe avec le contenu final.

Pour signaler une difficulté d’accès, écrire à [ie.belouettar@gmail.com](mailto:ie.belouettar@gmail.com).
