import Button from "./Button";
import ButtonState from "./ButtonState";
import ButtonClass from "./ButtonClass";
const ButtonPage = () => {
  return (
    <>
      <div>
        <h2>BOUTON sans état (implémentation invalide)</h2>
        <Button />
      </div>
x      <hr />
      <div>
        <h2>BOUTON fonctionnel avec état</h2>
        <ButtonState />
      </div>
      <hr />
      <div>
        <h2>BOUTON avec classe</h2>
        <ButtonClass />
      </div>
    </>
  );
};

export default ButtonPage;
