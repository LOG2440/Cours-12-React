# Reducer

Ceci est un exemple de l'implémentation d'un fonction **Reducer** en JS pur.

## Notion de _reducer_

Une fonction **Reducer** est une fonction qui prend 2 paramètres : _state_ et _action_ et retourne un _state_ modifié.

Les paramètres peuvent avoir n'importe quelle forme, mais sont le plus souvent des objets. Par convention, l'attribut _action_ a le format suivant :

```
{
 type : string,
 payload : Object
}
```

Où _type_ est le type de l'action (souvent un _string_) et _payload_ est le contenu de l'action a utiliser par le reducer sur le _state_ à modifier. Le contenu de _payload_ varie en fonction des besoin de l'action.

Similaire à la fonction `reduce` des objets `Array` en JS, un reducer permet de passer à un état à l'autre à l'aide d'une fonction de transformation.

Dans cet exemple, l'objet _state_ est transformé après la fonction et n'est donc pas **immutable**. Certaines approches, comme React, assurent l'immutabilité de l'état et l'objet retourné est un nouveau objet.

# Exemple

Cet exemple illustre un _reducer_ qui permet de gérer l'état d'un compteur : incrémenter, décrémenter et remettre à 0 sa valeur à travers les actions suivantes :

```js
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
};
```

Toute autre action est ignorée et l'état n'est pas modifié.

## Exemple d'utilisation

Voici un exemple d'une action d'incrémentation à l'aide du _reducer_ :

```js
let counter = { name: "Timer", count: 0 };
const incrementAction = { type: ACTIONS.INCREMENT, payload: 1 };

counter = reducer(counter, incrementAction);
console.log(counter); // { name: 'Timer', count: 1}
```