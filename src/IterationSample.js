// Chapter 6.Componet Iteration 컴포넌트 반복.
import React, { Component } from "react";

class IterationSample extends Component {
  // 1) 초기 state 설정.
  state = {
    names: ["눈사람", "얼음", "눈", "바람"],
    name: ""
  };

  // 2) 데이터 추가 기능을 위한 event handler & input & button
  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleInsert = () => {
    // names 배열에 추가하고, name 값을 초기화한다.
    this.setState({
      names: this.state.names.concat(this.state.name),
      name: ""
    });
  };

  // 3) 데이터 삭제기능 구현. 더블클릭하면 삭제되도록 함.
  handleRemove = index => {
    // 편의상 named의 레퍼런스를 미리 만든다.
    // names = this.state.names;
    const { names } = this.state;
    /*
    배열을 자르는 내장 함수 slice와 전개 연산자(...)를 사용하여 
    index번째 값을 제외한 값들을 배열에 넣어준다.
    */
    this.setState({
      names: [...names.slice(0, index), ...names.slice(index + 1, names.length)]
    });
  };

  // + 간단한 삭제기능 구현.
  handleRemoveFilter = index => {
    const { names } = this.state;
    this.setState({
      // filter로 index번째를 제외한 원소만 있는 새 배열 생성.
      // filter는 배열에서 특정 조건을 만족하는 값들만 추출하여 새로운 배열을 만든다.
      names: names.filter((item, i) => i !== index)
    });
  };

  render() {
    const nameList = this.state.names.map((name, index) => (
      <li
        key={index}
        onDoubleClick={() => {
          this.handleRemove(index); // this.handleRemoveFilter(index) 간단한 삭제기능
        }}
      >
        {name}
      </li>
    ));
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.name} />
        <button onClick={this.handleInsert}>추가</button>
        <ul>{nameList}</ul>;
      </div>
    );
  }
}

export default IterationSample;
