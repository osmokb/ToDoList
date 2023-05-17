import React from "react";
import List from "./List";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="title">SeungMin's To do list</div>
      <div className="input-box">
        <input
          className="input-todo"
          type="text"
          placeholder="내용을 입력하세요"
        ></input>
        <button className="button">입력</button>
      </div>
      <List />
    </div>
  );
};

export default Main;
