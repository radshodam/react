import React from "react";
class MyRadcomponent extends React.Component {
  state = {
    Aval: 1
  };
  incCounter = () => {
    this.setState({
        // Aval:5
        Aval:this.state.Aval+1
    });
  };
  render() {
    return (
      <div className={"classRAD"}>
        <p className={"pRadi"}>{this.state.Aval}</p>
        <button onClick={this.incCounter}>click Class</button>
      </div>
    );
  }
}

export default MyRadcomponent;
