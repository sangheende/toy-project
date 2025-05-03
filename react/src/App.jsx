
import './App.css'
//굳이 파일 확장자 명 쓰지 않아도 됨
import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'
import Button from './component/Button'
//함수 컴포넌트
//자식 컴포넌트
// const Header = () =>{}
// 반드시 첫글자가 대문자로 되어야 함

//부모 컴포넌트(root component)
function App() {

  const buttonProps = {
    text: "mail",
    color:"red",
    a:1,
    b:2
  }

  return (
    <>
    <Button {...buttonProps}/>
    <Button text={"blog"}/>
    {/* 자식요소는 children이라는 이름의 props로 자동으로 전달됨 */}
    <Button text={"cafe"}>
      <div>자식 요소</div>
    </Button>
    </>
  )
}

export default App
