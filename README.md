# MovieRent

## Repository GitHub

Le code source du projet est disponible à l’adresse suivante :

https://github.com/MedRaid1996/movierentS

---

## Description

MovieRent est une application web développée avec React et Vite.
Elle simule une boutique de location de films en ligne.

L’utilisateur peut parcourir un catalogue de films, filtrer et trier les résultats, consulter les détails d’un film et gérer un panier de location avec sauvegarde locale.

---

## Technologies utilisées

- React (créé avec Vite)
- JavaScript (ES6)
- useState
- useMemo
- localStorage
- CSS personnalisé

---

## Fonctionnalités

### Catalogue

- Affichage des films sous forme de cartes
- Affiche du film
- Titre
- Prix par jour
- Genre
- Disponibilité
- Note
- Bouton "Voir détails"
- Bouton "Ajouter au panier"

### Détail d’un film

- Affiche complète
- Description
- Prix
- Note
- Disponibilité
- Indication de nouveauté
- Scroll automatique vers le haut lors de la sélection

### Recherche et filtres

- Recherche par titre (insensible à la casse)
- Filtre "Disponible seulement"
- Filtre "Nouveautés seulement"
- Filtre par genre
- Filtre par prix maximum
- Tri par :
  - Prix croissant
  - Prix décroissant
  - Meilleure note
  - Ordre alphabétique

### Panier

- Ajout de films
- Gestion du nombre de jours
- Augmentation et diminution du nombre de jours
- Suppression automatique si jours = 0
- Retrait manuel d’un film
- Bouton "Vider le panier"
- Calcul automatique du total
- Format monétaire avec deux décimales

### Persistance

- Sauvegarde du panier dans localStorage
- Restauration automatique au rechargement de la page

---

## Structure du projet

src/
│
├── components/
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── Filters.jsx
│   ├── SortBar.jsx
│   ├── MovieCard.jsx
│   ├── MovieList.jsx
│   ├── MovieDetail.jsx
│   ├── Cart.jsx
│   └── Toast.jsx
│
├── data/
│   └── movies.js
│
├── assets/
│   └── posters/
│
├── App.jsx
└── main.jsx

---

## Installation et lancement

Installer les dépendances :

npm install

Lancer le serveur de développement :

npm run dev

---

Projet réalisé dans le cadre du module Programmation Web Avancée.



