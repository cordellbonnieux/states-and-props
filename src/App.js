import React, { Component } from "react";
import MyComponent from "./MyComponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);

    this.state = {
      count:0,
    };

    this.countUp = this.countUp.bind(this);
  }

  onClickBtn() {
    console.log("button has been clicked!");
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <MyComponent title="React" onButtonClicked={this.onClickBtn} />
        <button onClick={this.countUp}>Click Me Too!</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default App;
