// Chapter 5. ref사용하기.
/*
state만으로 해결할 수 없어 ref를 사용해야만 하는 기능들
- 특정 input에 포커스 주기.
- 스크롤 박스 조작하기
- canvas 요소에 그림 그리기 등.
*/

import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false
  };

  handleChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000" //이 등식이 성립하면 true, 그렇지 않으면 false를 return.
    });
    // input 태그에 ref를 설정함으로써 this.input은 아래 input 요소를 가르킴.
    // 이를 통해, 검증하기 버튼을 누른 뒤에 자동으로 바로 focus가 input 요소로 이동됨.
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
          ref={ref => {
            this.input = ref; // 이렇게 하면, this.input이 컴포넌트 내부의 input 요소를 가르키고 있음.
          }}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
