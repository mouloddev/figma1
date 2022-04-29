import React from "react";
import styled from "styled-components";
import NavContent from "../NavContent/NavContent";

const Nav = ({ showNav }) => {
  return (
    <NavContainer showNav={showNav}>
      <NavContent component="nav" />
    </NavContainer>
  );
};

/* ${(props) => (props.showNav ? "flex" : "none")} */
const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  transform: ${(props) =>
    props.showNav ? "translateY(0)" : "translateY(-100%)"};

  transition: all 0.2s ease-in-out;
`;

export default Nav;
