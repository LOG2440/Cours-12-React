import { useState } from "react";

const ButtonState = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input onChange={e => setValue(e.target.value)} value={value} />
      <p>Vous avez entré: {value}</p>
      <button onClick={_ => setValue('')}>Effacer</button>
    </div>
  );
};

export default ButtonState;