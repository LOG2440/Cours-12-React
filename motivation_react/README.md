# Motivation d'utilisation de React

Ceci est un exemple de base qui contient 2 projets qui implémentent la même fonctionnalité : une liste de chansons affichée à la page.

Dans le cas de `native-version`, on utilise seulement les méthodes natives du DOM et JS. On peut voir que l'utilisation de `innerHTML` est plus intuitive pour les développeurs, mais peu optimale pour le navigateur. Inversement, l'utilisation de `creatElement`, `appendChild`, `setAttribute`, etc. est optimale pour le navigateur, mais rend la lecture et la compréhension du code difficiles.


Dans le cas de `react-version`, on utilise les composantes fonctionnelles de React pour reproduire le même résultat. Ici on combine la facilité de lecture des _Component_ de React et les optimisations faites par la librairie.