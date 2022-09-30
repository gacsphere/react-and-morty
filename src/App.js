// import "./App.css";

import Header from "./components/header/Header";
import Card from "./components/card/Card";
import styled from "styled-components";
import Navigation from "./components/navigation/Navigation";
import { useState, useEffect } from "react";

const URL = "https://rickandmortyapi.com/api/character";

function App() {
  const [characters, setCharacters] = useState([]);

  async function fetchCharacters() {
    try {
      const response = await fetch(URL);
      const result = await response.json();
      console.log(result.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("inside useEffect");
    fetchCharacters();
  }, []);

  return (
    <>
      <Header>React and Morty</Header>
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
      <Navigation></Navigation>
    </>
  );
}

const Main = styled.main`
  // background-color: #fff4e1;
  // background-color: #cef3ff;
  padding: 6em 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #f0f0f0;
`;

export default App;
