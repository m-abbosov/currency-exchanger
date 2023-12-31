import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <NavLink to="/">Converter</NavLink>
      <NavLink to="/currencies">Currencies</NavLink>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);

  a {
    text-decoration: none;
    width: 50%;
    text-align: center;
    padding: 20px 0;
    font-size: 18px;
    color: black;
    font-weight: 600;

    &.active {
      color: white;
      background-color: #0297fe;
    }
  }
`;
