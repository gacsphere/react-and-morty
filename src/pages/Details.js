import styled from "styled-components";
import { useParams } from "react-router-dom";
// import Card from "../components/card/Card";
// import { Link } from "react-router-dom";
import { useState } from "react";

function Details({ characters, toggleFavorites }) {
  const [showDetails, setShowDetails] = useState(true);

  let { detailedCharacterId } = useParams(); //guckt in URL und sucht zB. ID 5 raus, wenn dort ID5 steht
  // detailedCharacterId = parseInt(detailedCharacterId);

  // const detailedCharacter = characters.filter(
  //   (character) => character.id === detailedCharacterId
  // );

  // console.log(detailedCharacter);
  // const character = { ...detailedCharacter[0] };

  return characters
    .filter((character) => character.id.toString() === detailedCharacterId)
    .map((character) => (
      <CharacterCard key={character.id}>
        <BookmarkButton
          onClick={() => toggleFavorites(character.id)}
          style={{ fill: character.favorite ? "var(--primary)" : "#dddddd" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="-3 -3 30 30"
            width="40"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </BookmarkButton>
        <img src={character.image} alt="Portrait of {name}" />
        <section>
          <CardName>{character.name}</CardName>
          <Table>
            <tbody>
              <tr>
                <TableCellKey>Gender:</TableCellKey>
                <TableCell>{character.gender}</TableCell>
              </tr>
              <tr>
                <TableCellKey>Species:</TableCellKey>
                <TableCell>{character.species}</TableCell>
              </tr>
              <tr>
                <TableCellKey>Status:</TableCellKey>
                <TableCell>{character.status}</TableCell>
              </tr>
            </tbody>
          </Table>
          {showDetails && (
            <Table>
              <tbody>
                <tr>
                  <TableCellKey>Location:</TableCellKey>
                  <TableCell>{character.location.name}</TableCell>
                </tr>
                <tr>
                  <TableCellKey>Origin:</TableCellKey>
                  <TableCell>{character.origin.name}</TableCell>
                </tr>
              </tbody>
            </Table>
          )}
          <CardButton
            onClick={() =>
              setShowDetails((previousShowDetails) => !previousShowDetails)
            }
          >
            {showDetails ? "SHOW LESS" : "SHOW MORE"}
          </CardButton>
        </section>
      </CharacterCard>
    ));
}

const Table = styled.table`
  margin: 0 1.5em 1.5em 1.5em;
  text-align: left;
  background-color: white;
  box-shadow: var(--primary) 4px 4px;
  width: 83%;
`;

const TableCellKey = styled.td`
  font-weight: 200;
  padding: 0.25em;
  width: 76px;
`;

const TableCell = styled.td`
  font-weight: 200;
  padding: 0.25em;
`;

const CharacterCard = styled.article`
  position: relative;
  width: 300px;
  margin: 1em;
  text-align: center;
  font-size: 1em;
  box-shadow: var(--primary) 4px 4px;
  background-color: white;
  /* &:hover {
    transform: scale(1.0125, 1.0125);
  } */
`;

const CardName = styled.h2`
  margin: 1em;
`;

// const StyledLink = styled(Link)`
//   border-style: none;
//   margin: 0.25em 1em 2em 1em;
//   padding: 1em;
//   font-weight: 600;
//   background-color: var(--primary);
//   color: white;
//   text-decoration: none;
//   // transition: ease-in-out 0.2s;
//   &:hover {
//     background-color: var(--secondary);
//     cursor: pointer;
//   }
// `;

const CardButton = styled.button`
  border-style: none;
  margin: 0.25em 1em 2em 1em;
  padding: 1em;
  font-weight: 600;
  background-color: var(--primary);
  color: white;
  // transition: ease-in-out 0.2s;
  &:hover {
    background-color: var(--secondary);
    cursor: pointer;
  }
`;

const BookmarkButton = styled.button`
  position: absolute;
  right: 1em;
  top: -1em;
  /* box-shadow: var(--tertiary) 4px 4px; */
  background-color: white;
  border-style: none;
  fill: #dddddd;
  &:hover {
    fill: #cccccc;
    cursor: pointer;
  }
  &:active {
    fill: var(--primary);
    cursor: pointer;
  }
`;

export default Details;
