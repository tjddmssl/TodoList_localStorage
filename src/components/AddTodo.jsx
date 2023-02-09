import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
//npm install uuid하고 import해서 사용하고 싶은곳에 id: uuidv4()해서 사용
//랜덤하게 고유한id값 만들어줌

const Form = styled.form`
  width: 100%;
  display: flex;
  padding: 1.4rem 1rem;
  background-color: transparent;
  border-top: 2px solid #e6e6fa66;
`;
const TodoInput = styled.input`
  flex: 1 0 auto;
  font-size: 1.4rem;
  padding: 0.7rem 1rem;
  border: 2px solid #e6e6fa66;
  outline: none;
  background-color: transparent;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  color: #e6e6fa;
  ::placeholder {
    color: #e6e6fa;
    font-weight: bold;
  }
`;
const AddButton = styled.button`
  background-color: #e6e6fac3;
  color: #9a9999ba;
  font-size: 1.4rem;
  font-weight: bold;
  padding: 0 2rem;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;

  :hover {
    filter: brightness(110%);
  }
`;

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    //String.prototype.trim(): trim() 메서드는 문자열 양 끝의 공백을 제거하고 원본 문자열을 수정하지 않고 새로운 문자열을 반환
    if (text.trim().length === 0) {
      return;
    }
    e.preventDefault();
    onAdd({ id: uuidv4(), text, status: "active" });
    setText(""); //목록에 add한후에는 input창 초기화
  };
  return (
    <Form onSubmit={handleSubmit}>
      <TodoInput
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      />
      <AddButton>Add</AddButton>
    </Form>
  );
}
