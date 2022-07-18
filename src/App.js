import React, { Component } from "react";

export default class App extends Component {
  mensagem = () => {
    return (
      <div>
        <h2>Olá pessoal!</h2>
      </div>
    );
  };

  dobro = (x) => {
    return <div>{`O dobro de 2 é ${x * 2} `}</div>;
  };

  render() {
    return (
      <div>
        {this.mensagem()}
        {this.dobro(2)}
      </div>
    );
  }
}
