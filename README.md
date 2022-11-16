# Librairie React

Ces projets ont été créés avec l'utilitaire [Create React App](https://github.com/facebook/create-react-app).

Le répertoire `note_cours` contient plusieurs exemples de base sur l'utilisation de la librairie React.


## Configuration du projet

Avant de pouvoir lancer le projet, il faut installer les dépendances nécessaires. Ceci est possible à travers la commande `npm ci` dans la racine du projet : au même niveau que le fichier `package-lock.json`.


## Exécution du projet
Pour lancer l'application en mode développement (_dev mode_), il faut utiliser la commande `npm start`.

Cette commande va transpiler le code `JSX` en `HTML` et `JS` et lancera un serveur dev sur le port 3000 (`localhost:3000`). L'application web sera donc disponible sur cette adresse. La page se recharge automatiquement (_hot reload_) si vous modifiez le code.

Notez que les projets viennent avec un **Linter** préconfiguré et certains _Components_ ont des erreurs de lint. Par exemple : le fichier `MaComposanteJSPur.js` exporte une fonction anonyme. Même si ce code est valide, ce n'est pas la bonne pratique à faire. Référez-vous au erreurs de linter pour plus d'information.


## Routes 

Le projet `note_cours` utilise la librairie `react-router-dom` pour la gestion des routes par React. Le component `Header` contient un ensemble de liens vers les différentes "pages" et permets de naviguer à travers les exemples.