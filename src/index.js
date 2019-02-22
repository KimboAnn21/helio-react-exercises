import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
state = {
  text: 'Input'
}

sportsList = ['Soccer', 'Climbing', 'Hiking', 'Skiing', 'Snowboarding', 'Snowshoeing', 'Tennis', 'Basketball', 'Softball']
listItems = this.sportsList.map((sport) =>
  <li>{sport}</li>
);




mirrorText = (event) => this.setState({text: event.target.value})

  render() {
    return (
      <div className="App">
        Enter stuff and things: <input type="text" onChange={this.mirrorText}/>
        <br/>
        See the stuff and things:<p>{this.state.text}</p> 
        <div class="keylogger">
          Type cool stuff, again: <input type="text" onChange={this.mirrorText}/>
          <br/>
          See cool stuff here, again:<p>{this.state.text}</p> 
        </div>
        <div class="code list">
          <ol>SPORTS I PLAY:
            {this.listItems}
          </ol>
        </div>
      </div>
    );
  }
} 
export default App;
