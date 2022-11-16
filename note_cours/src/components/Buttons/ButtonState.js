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
