import React, { useEffect, useState } from "react";

const Countview = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`update :: count : ${count}`);
  });

  return <div>{count}</div>;
});

const Textview = React.memo(({ text }) => {
  useEffect(() => {
    console.log(`update :: text : ${text}`);
  });

  return <div>{text}</div>;
});

function OptimizeTest() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>count</h2>
        <Countview count={count} />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <h2>text</h2>
        <Textview text={text} />
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
}

export default OptimizeTest;
