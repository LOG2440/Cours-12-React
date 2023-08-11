# Motivation d'utilisation de React

Cet entrepôt est un exemple de base qui contient 2 projets qui implémentent la même fonctionnalité avec et sans la librairie React: une liste de chansons affichée à la page.

Dans les 2 cas, la logique de création est la même : on cible un élément comme la racine et on modifie ses enfants pour avoir le contenu dynamique de la page :

```jsx
// Version native
const root = document.getElementById("root");
root.innerHTML = "";
const songElements = SONGS.map((song) => Song(song));
root.append(...songElements);

// React
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
```

## Version native

Dans le cas de [`native_version`](./native_version/), on utilise seulement les méthodes natives du DOM et JS pour afficher un tableau d'objet à la page. Les fonctions `Song` et `Player` permettent d'encapsuler la logique de construction du HTML des éléments à afficher.

On peut voir que l'utilisation de `innerHTML` est plus intuitive pour les développeurs, mais peu optimale pour le navigateur : le navigateur est obligé de lire la chaîne de caractères au complet et la convertir en instructions de modification du DOM par la suite. De plus, il est plus difficile de détecter une erreur comme une faute de frappe puisqu'on ne fait que manipuler des chaînes de caractères.

Inversement, l'utilisation de `creatElement`, `appendChild`, `setAttribute`, etc. est optimale pour le navigateur, mais rend la lecture et la compréhension du code difficiles. Il faut environ 2x plus de lignes de code pour obtenir le même résultat qu'avec `innerHTML`.

## Version React

Dans le cas de `react_version`, on utilise les composantes fonctionnelles de React pour reproduire le même résultat. On combine la facilité de lecture des _Component_ de React et les optimisations faites par la librairie.

Comme la version native, on peut encapsuler la logique de création dans une fonction, mais la syntaxe JSX nous permet d'utiliser les _Component_ comme des balises HTML normales. Par exemple :
```jsx
// Version native
`${Player(song).innerHTML}`;

// React
<Player song={song}></Player>
```

### Installation des dépendances et lancement des projets

La version native n'a pas de dépendances externes. Vous pouvez ouvrir le fichier [index.html](./native_version/index.html) dans votre navigateur ou utiliser un serveur statique sur votre machine.

La version React a été créé avec l'outil [Vite](https://vitejs.dev/). Vous devez installer les dépendances avec la commande `npm ci` dans votre terminal. Vous pouvez, par la suite, lancer le script `npm start` qui va transpiler le code `JSX` en `HTML`/`JS` natifs et lancer un serveur statique sur le port `3000` de votre machine.

Vous pouvez voir le code natif transpilé avec la commande `npm run build` qui va générer une version minifiée du projet dans un répertoire `dist` (Note : ce répertoire sera généré pour la première fois lors du premier lancement de la commande). Notez que cette version utilise ESM par défaut et nécessite un serveur HTTP.