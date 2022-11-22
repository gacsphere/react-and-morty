// import "./App.css";

import Header from "./components/header/Header";
import Card from "./components/card/Card";
import styled from "styled-components";
import Navigation from "./components/navigation/Navigation";
import { useState, useEffect } from "react";
import GlobalStyle from "./globalStyles";
import { Routes, Route } from "react-router-dom";
import Details_x from "./pages/Details_x";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import ReactAppMorty from "./pages/Creative";

const URL = "https://rickandmortyapi.com/api/character";

function App() {
  const [characters, setCharacters] = useState([]);

  async function fetchCharacters() {
    try {
      const response = await fetch(URL);
      const result = await response.json();
      console.log(result.results);

      const fetchedCharacters = result.results;
      const newFetchedCharacters = fetchedCharacters.map((character) => {
        return { ...character, favorite: false, showDetails: true };
      });

      setCharacters(result.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("inside useEffect");
    fetchCharacters();
  }, []);

  // function toggleFavorites(curryId) {
  //   setFavorites((prevFavorites) =>
  //     characters.map((character) => ({
  //       ...character,
  //       bookmarked:
  //         curryId === character.id
  //           ? !character.bookmarked
  //           : character.bookmarked,
  //     }))
  //   );
  // }

  function toggleFavorites(cardID) {
    setCharacters(
      characters.map((character) => {
        if (cardID === character.id) {
          return { ...character, favorite: !character.favorite };
        } else return character;
      })
    );
  }

  function showFavorites() {
    return characters.filter((character) => character.favorite === true);
  }

  const favCharacters = showFavorites();

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
            element={
              <Details
                characters={characters}
                toggleFavorites={toggleFavorites}
              />
            }
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
                toggleFavorites={toggleFavorites}
              />
            ))}
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favCharacters={favCharacters}
                toggleFavorites={toggleFavorites}
              />
            }
          />
          <Route path="/creative" element={<ReactAppMorty />} />
          <Route path="/random-character" />
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
