import * as React from "react";

// Composante fonctionnelle définie en JS
export default (props) => {
  const h1Element = React.createElement("h1", null, "Mon article: Composante en JS pur");
  const pElement = React.createElement(
    "p",
    null,
    "Un paragraphe de mon article"
  );
  const sectionElement = React.createElement(
    "section",
    {className: "post",},
    [h1Element, pElement]
  );
  return sectionElement;
};
