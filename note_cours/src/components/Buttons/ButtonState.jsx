/* Le hook useState permet de persister un état entre chaque exécution de la fonction
  useState retourne l'état et une fonction qui permet de modifier l'état.
  La persistance est propre à chaque instance du Component
*/
import { useState } from "react";

const ButtonState = () => {
  const [n, setN] = useState(0);
  return (
    <div>
      <p>Vous avez cliqué sur le bouton {n} fois</p>
      <button onClick={() => setN(n + 1)}>Cliquez Ici!(Avec state)</button>
    </div>
  );
};

export default ButtonState;
