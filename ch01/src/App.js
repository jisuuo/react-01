import logo from "./logo.svg";
import "./App.css";
import mainUtil from "./utils";
import { helper1, helper2 as h2 } from "./utils";
import Button from "./Button";
import Counter from "./Counter";
import styles from "./App.module.css"; // css module import

function App() {
  const name = "Jisu";
  const element = <h1>Hello {name}</h1>;
  const isLogin = false;

  // Greeting 컴포넌트
  function Greeting(props) {
    return <h1>Hello {props.name}</h1>;
    {
      /* props 사용시 태그 사용 후 {} 설정 */
    }
  }

  function GreetingProps(props) {
    return (
      <h1>
        {props.name}의 나이는 {props.age}입니다.
      </h1>
    );
  }

  function Welcome(props) {
    return (
      <div>
        <h1>안녕하세요 {props.name}님</h1>
        <h1>{props.children}</h1>
      </div>
    );
  }

  function GreeingIs(props) {
    // props로 isLogin을 받아옴
    // 조건 연산자 사용
    if (props.isLogin) {
      return <h1>환영합니다</h1>;
    } else {
      return <h1>로그인 해주세요</h1>;
    }
  }

  const GreetingConst = (props) => {
    // 화살표 함수 컴포넌트
    return <h1>Hello {props.name}</h1>;
  };

  // function add(a, b) {
  //   return a + b;
  // }

  // const add2 = (a, b) => {
  //   return a + b;
  // };

  function App() {
    const addFunction = (a, b) => {
      return a + b;
    };
    alert(addFunction(1, 2)); // App function 안에서 함수 호출
  }

  const divStyle = {
    color: "red",
    backgroundColor: "black",
  };

  const naming = "Jisu";
  const naver = {
    name: "네이버",
    url: "https://naver.com",
  };

  // App 컴포넌트
  return (
    <div className="App">
      Hello World
      <Button />
      <Counter />
      {element} {/* element 변수 사용시 {} 이렇게 */}
      <Greeting name="jisu" /> {/* 함수 호출 시 <> */}
      <Greeting name="props" /> {/* 함수 호출 시 <> */}
      <GreetingProps name="Tom" age="15" />
      <Welcome name="Tom">
        <h1>안녕하세요</h1> {/** {props.children}로 설정 */}
      </Welcome>
      <GreeingIs isLogin={isLogin} />
      <GreetingConst name="Tom" />
      <div style={divStyle}>
        <h1>안녕하세요</h1>
      </div>
      <div className="App">
        <h1
          style={{
            color: "#f0f",
            backgroundColor: "green",
          }}
        >
          Hello, {naming}.<p>{2 + 3}</p>
        </h1>
        <a href={naver.url}>{naver.name}</a>
      </div>
      <div className={styles.container}>Hello, World!</div>{" "}
      {/** styles로 스타일 설정 불가 ClassName이어야 함 */}
    </div>
  );
}

// function App() {
//   return <div className={styles.container}>Hello, World!</div>;
// }

export default App; // 대신 export function default App 으로 사용 가능
