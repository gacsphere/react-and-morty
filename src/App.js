// import "./App.css";

import Header from "./components/header/Header";
import Card from "./components/card/Card";
import styled from "styled-components";
import Navigation from "./components/navigation/Navigation";
import { useState, useEffect } from "react";
import GlobalStyle from "./globalStyles";
import { Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Details2 from "./pages/Details2";

const URL = "https://rickandmortyapi.com/api/character";

function App() {
  const [characters, setCharacters] = useState([]);
  // let { detailedCharacterId } = useParams();

  async function fetchCharacters() {
    try {
      const response = await fetch(URL);
      const result = await response.json();
      console.log(result.results);

      setCharacters(result.results);
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
      <GlobalStyle />
      <Header>React and Morty</Header>

      <Main>
        <Routes>
          <Route
            path="/details/:detailedCharacterId"
            element={<Details characters={characters} />}
          />
          <Route
            path="/details2/:detailedCharacterId"
            element={<Details2 characters={characters} />}
          />
          <Route
            path="/"
            end
            element={characters.map((character) => (
              <Card
                key={character.id}
                id={character.id}
                img={character.image}
                name={character.name}
                gender={character.gender}
                species={character.species}
                status={character.status}
                location={character.location}
                origin={character.origin}
                character={character}
              />
            ))}
          />
        </Routes>
      </Main>
      <Navigation></Navigation>
    </>
  );
}

const Main = styled.main`
  padding: 6em 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #f0f0f0;
`;

export default App;
