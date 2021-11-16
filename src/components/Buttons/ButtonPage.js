import Button from "./Button";
import ButtonState from "./ButtonState";
import ButtonClass from "./ButtonClass";
const ButtonPage = () => {
  return (
    <>
      <div>
        <p>BOUTON sans état</p>
        <Button />
      </div>
      <hr />
      <div>
        <p>BOUTON avec classe</p>
        <ButtonClass />
      </div>
      <hr />
      <div>
        <p>BOUTON fonctionnel avec état</p>
        <ButtonState />
      </div>
    </>
  );
};

export default ButtonPage;
