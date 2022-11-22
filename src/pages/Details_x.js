// import styled from "styled-components";
import { useParams } from "react-router-dom";
import Card from "../components/card/Card";

function Details({ characters }) {
  let { detailedCharacterId } = useParams();

  return (
    <div>
      <h2>Yo ID Nr. {detailedCharacterId}</h2>
      {characters
        .filter((character) => character.id.toString() === detailedCharacterId)
        .map((character) => (
          <Card
            key={character.id}
            id={character.id}
            img={character.image}
            name={character.name}
            // gender={character.gender}
            // species={character.species}
            // status={character.status}
            // location={character.location}
            // origin={character.origin}
            // character={character}
          />
        ))}
      {/* .map(({ id, name, ...character }) => (
          <Card key={id} id={id} name={name} character={{ ...character }} />
        ))} */}
    </div>

    // <CharacterCard>
    //   <BookmarkButton>
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       height="40"
    //       viewBox="-3 -3 30 30"
    //       width="40"
    //     >
    //       <path d="M0 0h24v24H0z" fill="none" />
    //       <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    //     </svg>
    //   </BookmarkButton>
    //   <img src={characters.img} alt="Portrait of {name}" />
    //   <section>
    //     <CardName>{characters.name}</CardName>
    //     <CardButton>SHOW MORE</CardButton>
    //   </section>
    // </CharacterCard>
  );
}

// const CharacterCard = styled.article`
//   position: relative;
//   width: 300px;
//   margin: 1em;
//   text-align: center;
//   font-size: 1em;
//   box-shadow: var(--tertiary) 4px 4px;
//   background-color: white;
//   /* background-color: #f7f7f7; */
//   // border: 4px solid black;
//   &:hover {
//     transform: scale(1.0125, 1.0125);
//   }
// `;

// const CardName = styled.h2`
//   margin: 1em;
// `;

// const CardButton = styled.button`
//   border-style: none;
//   margin: 0.25em 1em 2em 1em;
//   padding: 1em;
//   font-weight: 600;
//   background-color: var(--primary);
//   color: white;
//   // transition: ease-in-out 0.2s;
//   &:hover {
//     background-color: var(--secondary);
//     cursor: pointer;
//   }
// `;

// const BookmarkButton = styled.button`
//   position: absolute;
//   right: 1em;
//   top: -1em;
//   /* box-shadow: var(--tertiary) 4px 4px; */
//   background-color: white;
//   border-style: none;
//   fill: #dddddd;
//   &:hover {
//     fill: #cccccc;
//     cursor: pointer;
//   }
//   &:active {
//     fill: var(--tertiary);
//     cursor: pointer;
//   }
// `;

export default Details;
