import React, { Component } from "react";
import axios from "axios";

import "./App.css";

export default class App extends Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading" data-tooltip="翻譯：早點睡的意思">
            {advice}
          </h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>大仁哥幫我開示</span>
          </button>
        </div>
      </div>
    );
  }
}
