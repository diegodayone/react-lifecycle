import React from "react";

class Main extends React.Component {
  state = {
    foo: false
  };

  componentDidMount() {
    console.log("Main component is fully mounted!");
  }

  componentWillUnmount() {
    console.log("Main component UNMOUNTED!!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("PREVCOUNTER", prevProps.counter);
    console.log("CURRENTCOUNTER", this.props.counter);
  }

  render() {
    return (
      <div>
        <h1>Welcome to the main section!</h1>
        <div>{this.props.title}</div>
        <div>{this.props.counter}</div>
      </div>
    );
  }
}

export default Main;
