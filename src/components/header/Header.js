import styled from "styled-components";

function Header() {
  return <HeaderStyled>React and Morty</HeaderStyled>;
}

const HeaderStyled = styled.h1`
  text-align: center;
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: deepskyblue;
  //   border-bottom: 1px solid black;
  padding: 8px;
  color: white;
`;

export default Header;
