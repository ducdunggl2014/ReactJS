import React from "react";
import ReactDOM from "react-dom/client";

class Xe extends React.Component {
  constructor(props) {
    console.log("Xe construtor", props);
    super(props);
    this.state = {
      color: props.color,
      value: props.value,
    };
  }
  render() {
    // console.log("Xe class", this.props.color);
    // this.setState({ color: this.props.color, value: this.props.value });
    return <h2 style={{ color: this.state.color }}>Hi, {this.state.value}</h2>;
  }
}

export default Xe;
