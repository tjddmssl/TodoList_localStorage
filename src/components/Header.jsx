import React from "react";
import styled from "styled-components";

const TodoHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #e6e6fa66;
`;
const Filters = styled.ul`
  display: flex;
`;
const Filter = styled.button`
  font-size: 1.4rem;
  margin: 1rem;
  text-transform: capitalize;
  background-color: transparent;
  color: #e6e6fa;
  opacity: 0.8;
  font-weight: bold;
  :hover {
    opacity: 1;
    transform: scale(1.2);
  }
  :focus {
    opacity: 1;
    transform: scale(1.2);
    content: "";
    display: block;
    border-bottom: 1px solid #e6e6fa8e;
  }
`;

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <TodoHeader>
      <Filters>
        {filters.map((value, index) => (
          //고정됀 배열이니까 key는 그냥 index로
          <li key={index}>
            <Filter onClick={() => onFilterChange(value)}>{value}</Filter>
          </li>
        ))}
      </Filters>
    </TodoHeader>
  );
}
