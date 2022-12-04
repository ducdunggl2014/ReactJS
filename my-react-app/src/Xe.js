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
  // static getDerivedStateFromProps(props, state) {
  //   return { color: props.color };
  // }
  render() {
    // console.log("Xe class", this.props.color);
    // this.setState({ color: this.props.color, value: this.props.value });
    console.log("render");

    return <h2 style={{ color: this.state.color }}>Hi, {this.state.value}</h2>;
  }
  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({ color: "yellow" });
      console.log("Da thy doi thanh mau vang");
    }, 3000);
  }
}

export default Xe;
