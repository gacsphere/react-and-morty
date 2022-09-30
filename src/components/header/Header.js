import styled from "styled-components";

function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>;
}

const HeaderStyled = styled.header`
  text-align: center;
  font-size: 2em;
  font-weight: 600;
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: deepskyblue;
  padding: 8px;
  color: white;
`;

export default Header;
