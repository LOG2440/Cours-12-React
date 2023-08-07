import PropComponent from "./PropComponent";
import BaseComponent from "./BaseComponent";
import ClassComponent from "./ClassComponent";
import PureJSComponent from "./PureJSComponent";
import InterpolationComponent from "./InterpolationComponent";

const ParentComponent = () => (
  <>
    <div>
      <p>Composante fonctionnelle simple</p>
      <BaseComponent />
    </div>
    <hr />
    <div>
      <p>Composante de classe simple</p>
      <ClassComponent />
    </div>
    <hr />
    <div>
      <p>Composante fonctionnelle en JS pur </p>
      <PureJSComponent />
    </div>
    <hr />
    <div>
      <p>Composante avec interpolation </p>
      <InterpolationComponent />
    </div>
    <hr />
    <div>
      <p>Composante avec des propriétés </p>
      <PropComponent title="Mon titre" paragraphe="Mon texte" />
    </div>
  </>
);

export default ParentComponent;
