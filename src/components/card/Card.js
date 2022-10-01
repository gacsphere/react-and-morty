import styled from "styled-components";

function Card({ img, name, gender, species, status, location, origin }) {
  return (
    <CharacterCard>
      <img src={img} alt="Portrait of {name}" />
      <section>
        <CardName>{name}</CardName>
        <CardButton>SHOW MORE</CardButton>
      </section>
    </CharacterCard>
  );
}

const CharacterCard = styled.article`
  width: 300px;
  margin: 1em;
  text-align: center;
  font-size: 1em;
  box-shadow: #4cd2ff 4px 4px;
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

const CardButton = styled.button`
  border-style: none;
  margin: 0.25em 1em 2em 1em;
  padding: 1em;
  font-weight: 600;
  background-color: deepskyblue;
  color: white;
  // transition: ease-in-out 0.2s;
  &:hover {
    background-color: #00a7df;
    cursor: pointer;
  }
`;

export default Card;
