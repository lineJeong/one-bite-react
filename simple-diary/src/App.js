import { useRef, useState } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import "./App.css";

// const dummyList = [
//   {
//     id: 1,
//     author: "햄스",
//     content: "하이 1",
//     emotion: 1,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "후후",
//     content: "하이 2",
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "가마",
//     content: "하이 3",
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_data = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_data,
      id: dataId,
    };
    dataId.current += 1;
    setData((prev) => [newItem, ...prev]);
  };

  return (
    <div>
      <DiaryEditor onCreate={onCreate} />
      <DiaryList data={data} />
    </div>
  );
}

export default App;
