import { useState } from "react";
import HookEffetFetch from "./HookEffetFetch";

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
      <button onClick={(_) => setValue("")}>Effacer</button>
      <p>Utilisateur : </p>
      {validateInput(value) ? <HookEffetFetch userId={value} /> : <></>}
    </div>
  );
};

export default UserDisplay;
