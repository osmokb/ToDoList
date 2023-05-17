import React, { useState } from "react";
import List from "./List";
import "./Main.scss";

const Main = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  //이 함수는 왜 사용?
  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const handleButton = () => {
    list.push(text);
    setText("");
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <div className="main">
      <div className="contain">
        <div className="title">
          <p className="sub-title">SeungMin's To do list</p>
        </div>
        <div className="input-box">
          <input
            className="input-todo"
            type="text"
            placeholder="내용을 입력하세요"
            onChange={onTextChange}
            value={text}
          ></input>
          <button className="button" onClick={handleButton}>
            입력
          </button>
        </div>
        {/* list 배열에 모든 요소에 적용 */}
        {list.map((contents) => {
          return <List text={contents} handleDelete={handleDelete} />;
        })}
      </div>
    </div>
  );
};

export default Main;
