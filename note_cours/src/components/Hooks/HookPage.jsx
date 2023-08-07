import HookEffect from "./HookEffect";
import TwoWayBinding from "./TwoWayBinding";
import UserDisplay from "./UserDisplay";

const HookPage = () => {
  return (
    <>
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