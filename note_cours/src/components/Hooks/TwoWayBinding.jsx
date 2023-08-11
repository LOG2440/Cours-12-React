import { useState } from "react";

const TwoWayBinding = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input onChange={e => setValue(e.target.value)} value={value} />
      <p>Vous avez entré: {value}</p>
      <button onClick={_ => setValue('')}>Effacer</button>
      <button onClick={_ => setValue(Math.floor(Math.random() * 10 + 1))}>Chiffre aléatoire</button>
    </div>
  );
};

export default TwoWayBinding;