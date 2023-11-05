import HookEffect from "./HookEffect";
import TwoWayBinding from "./TwoWayBinding";
import UserDisplay from "./UserDisplay";

const HookPage = ({ updateVal, val }) => {
  return (
    <>
      <div>
        <h1>Valeur de n dans "HookPage": {val}</h1>
        <button onClick={() => updateVal(val + 1)}>Incrémenter "n"</button>
        <button onClick={() => updateVal(val - 1)}>Décrémenter "n"</button>
      </div>
      <div>
        <h2>Liaison bi-directionnelle</h2>
        <TwoWayBinding />
      </div>
      <hr />
      <div>
        <h2>Hook useEffect</h2>
        <HookEffect />
      </div>
      <hr />
      <div>
        <h2>useEffect avec un appel réseau</h2>
        <h3>Entrez un chiffre entre 1 et 9</h3>
        <UserDisplay />
      </div>
    </>
  );
};

export default HookPage;