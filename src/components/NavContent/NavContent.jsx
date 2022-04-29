import React from "react";
import styled from "styled-components";

import navlinks from "../../constants/navlinks";
import headerSearchIcon from "../../images/icons/header-search.svg";
import headerCartIcon from "../../images/icons/header-cart.svg";

const NavContent = ({ component }) => {
  return (
    <Nav component={component}>
      <NavLinks component={component}>
        {navlinks.map((item) => {
          return (
            <li key={item.id}>
              {" "}
              <a href={item.href}>{item.title}</a>
            </li>
          );
        })}
      </NavLinks>
      <NavIcons>
        <img src={headerSearchIcon} alt="search" />
        <img src={headerCartIcon} alt="cart" />
      </NavIcons>
    </Nav>
  );
};

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: ${(props) => (props.component === "nav" ? "column" : "row")};
  align-items: center;

  li {
    margin: ${(props) => props.component === "nav" && "2rem"} 1rem;
    text-transform: capitalize;
    font-weight: 500;

    a {
      font-size: ${(props) => props.component === "nav" && "1.3rem"};
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: ${(props) => (props.component === "nav" ? "column" : "row")};

  align-items: center;

  @media screen and (max-width: 650px) {
    & {
      justify-content: center;
      display: ${(props) => (props.component === "header" ? "none" : "flex")};
    }
  }
`;

const NavIcons = styled.div`
  margin: 0 2rem;

  img {
    width: 30px;
  }
`;

export default NavContent;
