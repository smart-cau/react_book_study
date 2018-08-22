// Chapter 7. Life Cycle of Component.
/*
 * LifeCylcle의 3 단계
 1. Mount
 2. Update
 3. UnMount

 * Life Cycle methods의 종류
[ constructor / getDrivedStateFromProps / shouldComponentUpdate / render / 
  getSnapshotBeforeUpdate / componentDidMout / componentWillUnmount]

  - Life Cycle 메서드는 컴포넌트 상태에 변화가 있을 떄마다 실행하는 메서드이다.
  - 이 메서드들은 서드파티 lib를 사용하거나 DOM을 직접 건드려야 하는 상황에서 유용.
  - 컴포넌트 업데이트의 성능을 개선할 때는 shouldComoponentUpdate가 중요하게 사용됨.
*/

import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null
  };

  // ref설정 부분.
  myRef = null;

  // component를 만들 때 처음으로 실행.
  // 초기 state설정 가능.
  constructor(props) {
    super(props);
    console.log("constructor", props);
  }

  // props로 받아 온 값을 state에 동기화시키는 용도로 사용.
  // component를 Mount하거나, props를 변경할 때 호출.
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  // component를 만들고, 첫 rendering을 다 마친 후 실행.
  // 이 안에서
  // 다른 js lib or framework의 함수를 호출하거나,
  // event 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기작업 처리.
  componentDidMount() {
    console.log("componentDidMount");
  }

  // props or state를 변경했을 때, Rerendering을 시작할지 여부를 지정하는 메서드.
  // 반드시 true or false 값을 반환해야함. default 값은 true
  // 이 메서드가 false 값을 반환하면, update 과정은 여기서 중지됨.
  // 매서드 안에서 현재 props, state는 this.props, this.state로 접근하고,
  // 새로 설정될 props, state는 nextProps, nextState로 접근 가능.
  // 프로젝트 성능을 최적화할 때, 상황에 맞는 알고리즘을 작성하여
  // Rerendering을 방지할 때는 false 값을 반환한다. (Component 최적화)
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    // 숫자의 마지막 자리가 4면 rerendering 하지 않는다.
    return nextState.number % 10 !== 4;
  }

  // Component를 DOM에서 제거할 때 실행.
  // componentDidMount에서 등록한 이벤트, 타이버, 직접 생성한 DOM이 있다면,
  // 여기서 제거작업을 해야함.
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  // render 메서드를 호출한 후, DOM에 변화를 반영하기 바로 직전에 호출하는 메서드.
  // 여기에서 반환하는 값은 componentDidUpdate에서 3번째 파라미터인 snapshot 값으로 전달 받을 수 있음.
  // 주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용됨. ex) 스크롤바 위치 유지.
  // snapshot 값 : DOM에 변화가 일어나기 직전의 색상 속성
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  // 이것은 Rerendering을 완료한 후 실행됨.
  // 업데이트가 끝난 직후이므로, DOM 관련 처리를 해도 무방.
  // prevProps or prevState를 통해 component가 이전에 가졌던 데이터에 접근 가능.
  // getSnapshotBeforeUpdate에서 반환한 값이 있다면, 여기에서 snapshot 값을 받을 수 있음.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트 되기 직전 색상 : ", snapshot);
    }
  }

  render() {
    console.log("render");

    const style = {
      color: this.props.style
    };

    return (
      <div>
        <h1 style={style} ref={ref => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
/*
각 LifeCycle methods를 실행할 때마다 콘솔 디버거에 기록하고,
부모 Component에서 props로 색상을 받아, 버튼을 누르면 state.number 값을 1씩 더한다.
getDerivedStateProps는 부모에게서 받은 color 값을 state에 동기화 한다. 그리고
getSnapshotBeforUpdate는 DOM에 변화가 일어나기 직전의 색상 속성을 snapshot 값으로 반환하여 이것을
componentDidUpdate에서 조회할 수 있게 했다. 추가로,
shouldComponentUpdate 메서드에서 state.number 값의 마지막 자릿수가 4이면 리렌더링을 취소하도록 설정했다.
*/
