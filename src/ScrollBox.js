import React, { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /* 위는 ES 6의 비구조화 할당(destructuring assignment) 문법을 사용한 것.
       다음 코드와 같은 의미이다.
       const scrollHeight = this.box.scrollHeight;
       const clientHeight = this.box.clientHeight;

       '비구조화 할당'에 대해 자세히 알아보자! 알아두면 편할듯.
    */
    this.box.scrollTop = scrollHeight - clientHeight;
  };
  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative"
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)"
    };

    return (
      <div
        style={style}
        ref={ref => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
