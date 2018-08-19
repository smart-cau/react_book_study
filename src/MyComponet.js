import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponet extends Component {
  static defaultProps = {
    name: "default 값임",
    age: 20
  };

  static propTypes = {
    name: PropTypes.string, //name props의 data type을 string으로 설정함.
    age: PropTypes.number.isRequired //isRequired : props를 설정하지 않았을 때, 오류 창을 띄우도록 함.
  };

  //  state의 초기값 설정 방법 2. 이 방법을 사용하자.
  state = {
    number: 0
  };

  // state의 초기값 설정 방법 1.
  /*  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }
*/

  render() {
    return (
      <div>
        <p>안녕하세요, 제 이름은 {this.props.name} 입니다.</p>
        <p>제 나이는 {this.props.age} 입니다.</p>
        <p>숫자 : {this.state.number}</p>
        <button
          onClick={() => {
            this.setState({
              //특정 이벤트가 있을 때, state의 값 업데이트하기.
              number: this.state.number + 1
            });
          }}
        >
          1씩 더하기
        </button>
      </div>
    );
  }
}

export default MyComponet;

// chapter 3. props와 state에 대해서 배움.
// props와 state 둘 다 컴포넌트에서 사용하거나, 렌더링할 데이터를 담고 있음.
// 하지만 props는 Parent Compnent가 설정하고,
// state는 Compnent 자체적으로 지닌 값으로 Component 내부에서 값을 업데이트한다.
