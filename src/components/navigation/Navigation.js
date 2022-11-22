import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <NavStyled>
      <NavButton to="/" end>
        HOME
      </NavButton>
      <NavButton to="/random-character">RANDOM</NavButton>
      <NavButton to="/favorites">FAVORITES</NavButton>
      <NavButton to="/creative">GET CREATIVE</NavButton>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  background-color: deepskyblue;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
`;

const NavButton = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  background: transparent;
  border: none;
  color: white;
  padding: 1em;
  width: 100%;
  font-weight: 600;
  font-size: 1em;
  &:hover {
    cursor: pointer;
    background-color: #00a7df;
  }
  &.active {
    background-color: #00a7df;
  }
`;

export default Navigation;
