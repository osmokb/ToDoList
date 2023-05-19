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
    setList([...list, text]); //이전 list에 text를 추가
    setText("");
  };

  const handleDelete = (index) => {
    setList(
      list.filter((text) => {
        //이 부분은 조건
        return list.indexOf(text) !== index;
      })
    );
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
        {/* list 배열에 모든 요소에 접근해서 새로운 배열을 반환한다 */}
        {list.map((contents, index) => {
          return (
            <List text={contents} index={index} handleDelete={handleDelete} />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
