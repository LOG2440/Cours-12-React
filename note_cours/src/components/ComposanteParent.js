import MaComposanteAvecPropriete from "./MaComposanteAvecPropriete";
import * as composanteSimple from "./MaComposante";
import MaComposanteClasse from "./MaComposanteClasse";
import MaComposanteJSPur from "./MaComposanteJSPur";

const MaComposante = composanteSimple.default;
const ComposanteParent = () => (
  <>
    <div>
      <p>Composante fonctionnelle simple</p>
      <MaComposante />
    </div>
    <hr />
    <div>
      <p>Composante de classe simple</p>
      <MaComposanteClasse />
    </div>
    <hr />
    <div>
      <p>Composante fonctionnelle en JS natif </p>
      <MaComposanteJSPur />
    </div>
    <hr />
    <div>
      <p>Composante avec des propriétés </p>
      <MaComposanteAvecPropriete title="Mon titre" paragraphe="Mon texte" />
    </div>
  </>
);

export default ComposanteParent;
