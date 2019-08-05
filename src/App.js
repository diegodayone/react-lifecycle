import React from "react";
import "./App.css";
import Main from "./components/Main";
import Snippet from "./components/Snippet";

import { Button } from "reactstrap";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMainSection: true,
      counter: 1,
      loading: true
    };
  }

  // state = { showMainSection: false };

  componentDidMount() {
    console.log("App component is fully mounted!");
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  // componentWillUnmount() {
  //   console.log("App component UNMOUNTED!!");
  // }

  toggle = () => {
    this.setState({
      showMainSection: !this.state.showMainSection
    });
  };

  increase = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    console.log("App.js rendered!");
    return (
      <div className="App">
        <header className="App-header">
          <Button
            color={this.state.showMainSection ? "danger" : "primary"}
            onClick={() => this.toggle()}
          >
            {this.state.showMainSection ? "HIDE IT" : "SHOW IT"}
          </Button>
          <div>Hello World</div>
          {this.state.showMainSection && (
            <div>
              <Main
                title="how high can you count?"
                counter={this.state.counter}
              />
              <Button color="primary" onClick={() => this.increase()}>
                MORE THAN THAT!!
              </Button>
            </div>
          )}
          {this.state.loading && <Spinner color="danger" />}
          {!this.state.loading && <Snippet title="I'm just a snippet" />}
        </header>
      </div>
    );
  }
}

export default App;
