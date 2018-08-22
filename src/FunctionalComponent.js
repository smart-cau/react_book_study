// Chapter 8. Functional Compnent.
/*
지금까지 다뤘던 Components들은 모두 class 형이었다.
class형 Componentse는 Life Cycle API, state등의 기능을 사용할 수 있는 대신,메모리 사용량이 높다.
따라서 일반적인 Components에서 Life Cycle API와 state와 같은 기능들은 꼭 필요할 때만 쓰고,
위 기능들을 사용하지 않을 때는 class형 Components보다는 Functional Components를 사용하는 것이 효율적이다!
(단 위 두 기능을 사용하기 위해선 필수적으로 class형을 사용해야함.)
*/

// 예시 1.
/*
import React from 'react';

function Hello(props) {
  return(
    <div>Hello {props.name}</div>
  )
}

export default Hello;
*/

import React from "react";

const Hello = ({ name }) => <div>Hello {name}</div>;

export default Hello;
