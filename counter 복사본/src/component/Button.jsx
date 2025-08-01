// 기본값이 필요할 때는 구조분해 할당을 이용해야 함
const Button = ({children, text, color = "black"}) => {
  // console.log(props)
  const onClickButton = (e) =>{
    console.log(e)
    console.log(text)
  }
  //이벤트 헨들러
  
  return <button
  onClick = {onClickButton}
  // onClick = {()=>{
  //   console.log(text)
  // }} 
  // onMouseEnter = {onClickButton()} => 일반 함수 불러오듯이 하면 안 됨
  style={{color:color}}>
    {text} - {color}
    {children}
  </button>
};



export default Button;