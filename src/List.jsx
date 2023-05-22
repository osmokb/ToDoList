import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gainsboro;
  margin-top: 8px;
`;

const TodoText = styled.div`
  margin-top: 8px;
  padding: 0 0 8px 28px;
`;

const DeleteButton = styled.button`
  background-color: white;
  border: none;
  color: red;
  margin-right: 12px;
  cursor: pointer;
`;

const List = ({ text, handleUpdate, index, handleDelete }) => {
  return (
    <ListContainer>
      <TodoText>{text}</TodoText>
      <div className="buttons">
        <DeleteButton onClick={() => handleDelete(index)}>
          삭제
        </DeleteButton>
      </div>
    </ListContainer>
  );
};

export default List;
