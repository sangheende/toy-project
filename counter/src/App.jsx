
import './App.css'
import Viewer from './component/Viewer'
import Controller from './component/Controller'
import { useState } from 'react'
//두개의 요소를 담은 배열 반환
//re-rendering이 진행되는 경우
//1.자신이 관리하는 stste의 값이 변경되었을 때
//2.자신이 제공받는 props의 값이 변경되었을 때
//3.부모 component가 re-rendering 되는 경우 => 해결 방법: 서로 연관 없는 state들을 분리한다.

//여러개의 컴포넌트과 자식-부모 관계의 계층 구조를 이루고 있다.
//하나의 스테이트를 여러 컴포넌트에서 관리될 경우 스테이트 들의 공통 부모에서 동작해야한다.
//이유: 부모 > 자식 방향으로만 데이터가 전달이 가능하기 때문이다.
function App() {
  const [count, setCount] = useState(0)
  
  const onClickBtn = (value)=>{
    setCount(count + value)
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count = {count}/>
      </section>
      <section>
        <Controller onClickBtn = {onClickBtn}/>
      </section>
    </div>
  )
}

export default App
