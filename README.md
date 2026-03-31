 # Projet React
C'est une application frontend dévelopée à l'aide de React et TypeScript qui permet de rechercher via l'Api Open Library soit par une recherche simple, soit pas une recherche avancée. Les informations sont enrichies via Wikipedia lorque cela est possible.

## Fonctionnalités

-Recherches rapides de livres( titre libre)
-Recherche avancée(titre,auteur,date de sortie ,etc)
-Affichage des résultats sous formes de cartes
-Page de détail pour chaque livre
-Récupération d'informations complémentaires via Wikipédia 
-Gestion des cas sans données(dans ces cas là les livres sont peu documentés)
-Interface responsive

## Technologies utilisées

-React
-TypeScript
-React Router
-Api Open Library
-Api Wikipedia
-HTML / CSS(inline styles)

## Installation et Lancement

1. Cloner le dépôt
2. Installer les dépendances:
  npm install
3. Lancer le projet:
  npm run dev
4. Ouvrir dans le navigateur:
  http://localhost:5173

## Organisation du projet

src/
├── components/
│   ├── Header.tsx        # En-tête et navigation
│   ├── SearchBar.tsx     # Barre de recherche rapide
│   └── BookCard.tsx      # Carte d’affichage d’un livre
│
├── pages/
│   ├── Home.tsx          # Page d’accueil
│   ├── SearchResults.tsx # Résultats de recherche simple
│   ├── AdvancedSearch.tsx# Recherche avancée
│   └── BookDetail.tsx    # Détails d’un livre
│
├── services/
│   └── openLibraryApi.ts # Appels à l’API Open Library
│
├── types/
│   └── Book.ts           # Types TypeScript
│
├── App.tsx               # Layout principal
└── main.tsx              # Point d’entrée de l’application

## Tests

Des test fonctionnels manuels ont été réalisés sur:
  -la recherche simple
  -la recherche avancée
  -la navigation
  -la page de détail
  -les cas limites(données absentes)

Les fonctionnalités principales ont été validées sans crash.

## Auteur

Projet réalisé par Oussi Owasi Bradley Gaetan dans le cadre d'un projet frontend React.

