import logo from "../logo.svg";
import React from "react";
import "./App.css";
import HomePage from "./HomePage";
import Navi from "./Navi";
import Projects from "./Projects"
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = { selectedType: "" };

  updateViewing = (type) => {
    this.setState({selectedType: type});
  }

  render() {
    if (this.state.selectedType == "") {
      return (
        <div>
          <HomePage />
          <Navi changeUp = {this.updateViewing}/>
          <p>{this.state.selectedType}</p>
        </div>
      );
    }
    else
    {
      return(
      <div>
        <HomePage />
        <Navi changeUp = {this.updateViewing}/>
        <Projects type={this.state.selectedType}/>
      </div>
      );
    }
  }
}

export default App;
