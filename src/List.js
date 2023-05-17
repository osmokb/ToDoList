import React from "react";
import "./List.scss";

const List = ({ text, handleUpdate, handleDelete }) => {
  return (
    <div className="list">
      <div className="todo">{text}</div>
      <div className="buttons">
        <button className="delete" onClick={handleDelete}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default List;
