
import './App.css'
//두개의 요소를 담은 배열 반환
import { useState } from 'react'
//re-rendering이 진행되는 경우
//1.자신이 관리하는 stste의 값이 변경되었을 때
//2.자신이 제공받는 props의 값이 변경되었을 때
//3.부모 component가 re-rendering 되는 경우 => 해결 방법: 서로 연관 없는 state들을 분리한다.

const Bulb= () => {
  //첫번째는 초기값 / 두번째는 변경시키는 상태변화 함수
    const [light, setLight] = useState("off")
    console.log(light)
  return <div>
    {light === 'on'? (
      <h1 style={{backgroundColor:"orange"}}>ON</h1> ):(
        <h1 style={{backgroundColor:"gray"}}>OFF</h1>
        
        )}
        <button onClick={()=>{
        setLight(light === "on" ? "off" : "on")
      }}
      >{light === "on"? "끄기" : "켜기"}</button>
    </div>
}

const Counter = ()=>{
  const [count, setCount] = useState(0);
  return(
    <>
      <h1>{count}</h1>
      <button onClick = {() => {
        setCount(count + 1)
      }}>+</button>

    </>

    )

}
function App() {
  return (
    <>
      <Bulb/>
      <Counter/>
    </>
  )
}

export default App
