import styled from "styled-components";

function Header() {
  return <HeaderStyled>React and Morty</HeaderStyled>;
}

const HeaderStyled = styled.h1`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  background-color: violet;
  border-bottom: 1px solid black;
`;

export default Header;
