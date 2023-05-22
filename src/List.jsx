import React from "react";
import "./List.scss";

const List = ({ text, handleUpdate, index, handleDelete }) => {
  return (
    <div className="list">
      <div className="todo">{text}</div>
      <div className="buttons">
        <button className="delete" onClick={() => handleDelete(index)}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default List;
