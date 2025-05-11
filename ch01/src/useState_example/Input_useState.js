import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>입력 필드 이벤트</h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="입력하세요"
      />{" "}
      {/* event input, target textType, value text 입력되는 값*/}
      <p>입력한 값: {text}</p>
    </div>
  );
}

export default App;
