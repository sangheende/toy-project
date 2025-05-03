import "./Main.css"
//JSX 주의사항
//1.중괄호 내부에는 자바스트립트 표현식만 넣을 수 있다. if,for등의 반복문은 안 됨
//2. 숫자, 문자열, 배열 값만 렌더링 된다. => boolean,undefined,null, 객체값은 안 됨
//3.모든 태그는 닫혀있어야 한다.
//4.최상위 태그는 반드시 하나여야만 한다. => 마땅한 태그가 없을 시 빈태그로 감싸도 된다 =>이 때는 태그가 묶여있지 않음
const Main = ()=>{
  const user = {
    name:"송상희",
    isLogin: true,
  };

  if(user.isLogin){
    return <div className="logout">로그아웃</div>
  }else{
    return <div>로그인</div>
  }
  // return(
  //   <>
  //   {user.isLogin ? (
  //     <div>로그아웃</div>
  //   ):(
  //     <div>로그인</div>
  //   )}
  //   </>
  // )
}
export default Main