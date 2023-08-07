# Librairie React

Ces projets ont été créés avec l'outil [Vite](https://vitejs.dev/).

Le répertoire `motivation_react` contient un exemple de base sur la motivation d'utiliser React. Cet exemple implémente le même site web avec du code `JS` de base ainsi qu'à l'aide de la librairie React. Pour plus d'informations, consultez le [README](./motivation_react/README.md) dans le répertoire.

Le répertoire `note_cours` contient plusieurs exemples de base sur l'utilisation de la librairie React.

## Configuration du projet

Avant de pouvoir lancer le projet, il faut installer les dépendances nécessaires. Ceci est possible à travers la commande `npm ci` dans la racine du projet : au même niveau que le fichier `package-lock.json`.

## Exécution du projet
Pour lancer l'application en mode développement (_dev mode_), il faut utiliser la commande `npm start`.

Cette commande va transpiler le code `JSX` en `HTML` et `JS` et lancera un serveur dev sur le port 3000 (`localhost:3000`). L'application web sera donc disponible sur cette adresse. La page se recharge automatiquement (_hot reload_) si vous modifiez le code.

Les différents exemples sont regroupés dans des "pages" en fonction de leur thématique :
- Page principale [ParentComponent.jsx](./note_cours/src/components/MainPage/ParentComponent.jsx) : syntaxe de base de React
- Paragraphs [ParagraphPage.jsx](./note_cours/src/components/Paragraphs/ParagraphPage.jsx) : notions de boucles et communication par propriétés
- Buttons [ButtonPage.jsx](./note_cours/src/components/Buttons/ButtonPage.jsx) : notions d'état à l'aide du hook `useState`.
- Hooks [HookPage.jsx](./note_cours/src/components/Hooks/HookPage.jsx) : notions d'effets de bord à l'aide du hook `useEffect`.

Les components [UserDisplay.jsx](./note_cours/src/components/Hooks/UserDisplay.jsx) et [HookEffectFetch.jsx](./note_cours/src/components/Hooks/HookEffectFetch.jsx) sont un exemple récapitulatif qui regroupe les différentes notions explorées.

## Composantes de fonctions

React permet d'encapsuler la logique de la construction et la gestion des éléments du DOM d'une sous-section de notre page web. Ces sections sont appelés des _Components_ et cet entrepôt se concentre sur les composantes de fonctions qui sont des fonctions qui retournent un seul élément HTML et son sous-arbre. Par exemple : 

```jsx
const BaseComponent = () => (
  <section className="post">
    <h1>Mon titre</h1>
    <p>Un paragraphe de mon article</p>
  </section>
);
```
React permet également d'insérer une composante dans une autre et de passer des paramètres d'une composante parent à ses enfants à travers des propriétés. Par exemple :

```jsx
import HookEffectFetch from "./HookEffectFetch";

const UserDisplay = () => {
  const [value, setValue] = useState("");
  const validateInput = (input) => {
    const val = parseInt(input);
    return val >= 1 && val <= 9;
  };
  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <p>Vous avez entré: {value}</p>
      <p>Utilisateur : </p>
      {validateInput(value) ? <HookEffectFetch userId={value} /> : <></>}
    </div>
  );
};

export default UserDisplay;
```

## Hooks de React

Par défaut, une composante de fonction est une fonction pure qui ne fait que générer des éléments HTML en fonction de paramètres en entrée : `html = func(props)`. Il n'y a donc aucun état qui persiste entre 2 appels de la même fonction et la fonction ne peut pas réagir à des changements aux éléments générés.

React utilise la notions de _hooks_ qui sont des fonctions spéciales qui permettent à se connecter au cycle de vie des composantes et rendre les fonctions plus flexibles.

### useState

Le hook `useState` permet de garder une persistance entre les rendus d'une composante (appels de fonctions). La fonction useState prend en paramètre un état initial et retourne un accesseur à l'état et une fonction mutateur. Cette fonction est la seule qui est capable de changer la valeur de l'état dans le code. Par exemple :

```jsx
const ButtonState = () => {
  const [n, setN] = useState(0);
  return (
    <div>
      <p>Vous avez cliqué sur le bouton {n} fois</p>
      <button onClick={() => setN(n + 1)}>Cliquez Ici!(Avec state)</button>
    </div>
  );
};
```

### useEffect

Le hook `useEffect` permet d'ajouter de la logique à exécuter lorsqu'une modification (effet) à la composante ou une sous-partie de celle-ci a lieu. Par défaut, le code dans `useEffect` est exécuté à chaque changement dans la composante, mais on peut ajouter un filtre qui indique quelles variables sont les déclencheurs de l'effet. Par exemple :

```jsx
// Sera toujours exécuté
useEffect(() => {
    document.title = `Vous avez cliqué ${n} fois`;
});

// Sera exécuté qu'au rendu initial de la composante
useEffect(() => {
    const fetchData = async () => {...}
    fetchData();
}, []);

// Sera exécuté seulement si la variable "name" change
const [name, setName] = useState("");
useEffect(() => {
    const fetchData = async () => {...}
    fetchData();
}, [name]);
```
### Routes 

Le projet `note_cours` utilise la librairie `react-router-dom` pour la gestion des routes par React. Le component [`Header`](./note_cours/src/components/Header.jsx) contient un ensemble de liens vers les différentes "pages" et permets de naviguer à travers les exemples.

Contrairement à des vraies pages HTML, les "pages" en React sont des changements dynamiques d'une partie de l'arbre du DOM principal. Le contexte JS n'est donc pas perdu entre chaque page et il n'est pas nécessaire de redessiner la page au complet. Par exemple, ici la composante `Header` sera toujours la même instance, peu importe la page visitée :

```jsx
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<ParentComponent />} />
        <Route path="/paragraphs" element={<ParagraphPage />} />
      </Routes>
    </BrowserRouter>
  );
}
```
