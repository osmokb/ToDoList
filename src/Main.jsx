import React, { useState } from "react";
import List from "./List";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: lightskyblue;
`

const Container = styled.div`
  display: flex;
  height: 600px;
  width: 600px;
  border-radius: 12px;
  flex-direction: column;
  box-shadow: 2px 2px 2px;
  background-color: white;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px 12px 0 0;
  margin: 0%;
  height: 40px;
  font-weight: bold;
  font-size: 36px;
  background-color: aquamarine;
  padding: 16px 0;
`

const SubTitle =styled.p`
    margin: 0;
`
const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  width: 600px;
  padding: 12px 0;
`
const InputTodo = styled.input`
  display: flex;
  width: 90%;
  font-size: 16px;
  text-align: center;
  border: none;
  margin: 10px;
  height: 28px;
`

const ButtonContainer = styled.button`
  background-color: white;
  border-radius: 5px;
  width: 80px;
  margin: 10px;
  height: 32px;
  border: 1px solid black;
  padding: 8px 0;
  cursor: pointer;
`

const Main = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  //setText에 저장을 해야한다.
  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const handleButton = () => {
    setList([...list, text]); //이전 list에 text를 추가
    setText("");
  };

  const handleDelete = (index) => {
    setList(
      //filter 메소드도 모든 요소에 접근
      list.filter((text) => {
        //이 부분은 조건 , List의 index를 받아서 text의 index와 비교해서 같지 않은 부분을 return
        return list.indexOf(text) !== index;
      })
    );
  };

  return (
    <MainContainer>
      <Container>
        <Title>
          <SubTitle>SeungMin's To do list</SubTitle>
        </Title>
          

        <InputBox>
          <InputTodo
            type="text"
            placeholder="내용을 입력하세요"
            onChange={onTextChange}
            value={text}
          />
          
          <ButtonContainer onClick={handleButton}>
            입력
          </ButtonContainer>
        </InputBox>
        {/* list 배열에 모든 요소에 접근해서 새로운 배열을 반환한다 */}
        {list.map((contents, index) => {
          return (
            <List text={contents} index={index} handleDelete={handleDelete} />
          );
        })}
      </Container>
    </MainContainer>
  );
};

export default Main;
