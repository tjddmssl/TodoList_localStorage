import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  accent-color: #e6e6fa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
}

#root {
  width: 100%;
  height: 60%;
  max-width: 500px;
  overflow: hidden;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    #e6e6fa -3px -3px 6px 1px inset;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
* {
  box-sizing: border-box;
}
/* 리스트 땡떙이 없앰 */
ul {
  list-style: none;
  padding-left: 0;
}

button {
  outline: none;
  border: none;
}

::-webkit-scrollbar {
  width: 0.7rem;
}
/* 스크롤바 뒷 배경 설정*/
::-webkit-scrollbar-track {
  background-color: transparent;
}
/* 스크롤바 막대 설정*/
::-webkit-scrollbar-thumb {
  background-color: #e6e6fa;
  border-radius: 10px;
}
`;
export default GlobalStyle;
