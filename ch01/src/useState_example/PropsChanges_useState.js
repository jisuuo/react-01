import React, { useState } from "react";

function ChangeApp(props) {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  const handleChange = (event) => {
    //공동적인 작업 추가
    setText(props.onChange()); //사용자가 원하는 작업 추가
  };

  const handleChange2 = (event) => {
    //공동적인 작업 추가
    setText2(props.onChange2()); //사용자가 원하는 작업 추가
  };

  return (
    <div>
      <h1>입력 필드 이벤트</h1>
      <input type="text" onChange={handleChange} placeholder="입력하세요" />
      <input type="text" onChange={handleChange2} placeholder="입력하세요" />
      <input type="text" onChange={props.onChange} placeholder="입력하세요" />
      <p>입력한 값: {text}</p>
      <p>입력한 값: {text2}</p>
    </div>
  );
}
function App() {
  let counter = 1;
  let counter2 = 1;
  return (
    <div>
      <ChangeApp
        onChange={(event) => {
          return counter++;
        }}
        onChange2={(event) => {
          return counter2++;
        }}
      ></ChangeApp>
    </div>
  );
}

export default App;
