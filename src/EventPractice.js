// Chapter 4. Event Handling
import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
    username: ""
  };

  // 직접 만든 임의 methods. handle_____의 내용을 다룸.
  handleChange = e => {
    this.setState({
      // 이 코드가 핵심!
      // key 값으로 어떤 객체의 값을 쓸 때는 []가 꼭 있어야함.
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    alert(this.state.username + ": " + this.state.message);
    this.setState({
      message: "",
      username: ""
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>Event 연습!</h1>
        {/* onChange 이벤트 설정 */}
        <input
          type="text"
          name="username"
          placeholder="유저명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="say sth"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />

        <button onClick={this.handleClick}>메세지 확인</button>
      </div>
    );
  }
}

export default EventPractice;

// 변화한(새롭게 입력된) 값을 기존의 값에 담기 위해
// 변화를 감지하는 onChange 이벤트와,
// 변화 했을 때의 행동을 정하는 handleChange 메소드를 사용함.

// e라는 event 객체에 대해 자세히 알아볼 필요가 있을 것 같다.
// 생성자 constructor와 bind 메소드에 대해서도 공부가 필요하다.
