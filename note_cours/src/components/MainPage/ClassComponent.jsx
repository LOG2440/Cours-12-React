import * as React from "react";

// Composante classe définie en JSX
export default class ClassComponent extends React.Component {
  render() {
    return (
      <section className="post">
        <h1>Mon article: Composante par classe</h1>
        <p>Un paragraphe de mon article</p>
      </section>
    );
  }
}
