import { Link } from "react-router-dom";
import styled from "styled-components";

function Card({
  id,
  img,
  name /* gender, species, status, location, origin */,
}) {
  return (
    <CharacterCard>
      <BookmarkButton>
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
      <img src={img} alt="Portrait of {name}" />
      <section>
        <CardName>{name}</CardName>
        <Link to={`/details/${id}`}>
          <CardButton>SHOW MORE</CardButton>
        </Link>
        <Link to={`/details2/${id}`}>
          <CardButton>SHOW MORE D2</CardButton>
        </Link>
      </section>
    </CharacterCard>
  );
}

const CharacterCard = styled.article`
  position: relative;
  width: 300px;
  margin: 1em;
  text-align: center;
  font-size: 1em;
  box-shadow: var(--tertiary) 4px 4px;
  background-color: white;
  /* background-color: #f7f7f7; */
  // border: 4px solid black;
  &:hover {
    transform: scale(1.0125, 1.0125);
  }
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
    fill: var(--tertiary);
    cursor: pointer;
  }
`;

export default Card;
