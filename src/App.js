import React, { Component, Fragment } from "react";
import "./App.css";

class App extends Component {
  render() {
    const text = "First React Project";
    const condition = true;
    const style = {
      // javascript를 사용하여 사각형의 크기를 랜덤으로 설정되도록 하는 css.
      backgroundColor: "gray",
      border: "1px solid black",
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebkitTransition: "all",
      MozTransition: "all",
      msTransition: "all"
    };

    return (
      <div className="my-div">
        <h1>Hello React World</h1>
        <h2>{text}</h2>
        {condition && "true일 때만 보여주고 싶어요"}
        <div style={style} />
      </div>
    );
  }
}

export default App;
