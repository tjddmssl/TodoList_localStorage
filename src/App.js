import React, { useState } from "react";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  //filter=현재 선택된필터
  return (
    <>
      <GlobalStyle />
      <Header
        filters={filters}
        filter={filter}
        onFilterChange={(filter) => {
          setFilter(filter);
        }}
      />
      <TodoList filter={filter} />
    </>
  );
}

export default App;
