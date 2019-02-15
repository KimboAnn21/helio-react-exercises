import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    textValue: "begin typing above"
  };
  handleTextChange = event =>
    this.setState({
      textValue: event.target.value
    });

  render() {
    return (
      <div className="App">
        <div>
          <input type="text" onChange={this.handleTextChange} />
        </div>
        <div>
          <br />
          <br />
          Check Your Head: {this.state.textValue}
        </div>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
