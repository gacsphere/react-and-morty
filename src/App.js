// import "./App.css";

import Header from "./components/header/Header";
import Card from "./components/card/Card";
import styled from "styled-components";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Main>
      <nav>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </nav>
    </>
  );
}

const Main = styled.main`
  // background-color: #fff4e1;
  // background-color: #cef3ff;
  padding: 6em 0;
  display: flex;
  flex-wrap: wrap;
`;

export default App;
