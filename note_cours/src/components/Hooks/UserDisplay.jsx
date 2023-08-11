import { useState } from "react";
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
