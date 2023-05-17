import React from "react";
import "./List.scss";

const List = () => {
  return (
    <div className="List">
      <div className="todo">1. 공부하기</div>
      <button className="delete">삭제</button>
    </div>
  );
};

export default List;
