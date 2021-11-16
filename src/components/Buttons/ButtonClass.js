import * as React from "react";
export default class ButtonClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n: 0 };
  }
  add = () => {
    this.setState({ n: this.state.n + 1 });
  };
  render() {
    return (
      <div>
        <p>Vous avez cliqué sur le bouton {this.state.n} fois</p>
        <button onClick={this.add}>Cliquez Ici! (Classe)</button>
      </div>
    );
  }
}
