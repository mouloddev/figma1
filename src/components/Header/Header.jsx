import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../../GlobalStyles/globalStyles";

import Logo from "../Logo/Logo";
import NavbarToggleIcon from "../../images/navbar-toggler-icon.svg";
import NavContent from "../NavContent/NavContent";

const Header = ({ showNav, setShowNav }) => {
  const [bg, setBg] = useState(false);

  const toggleShowNav = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBg(true);
      } else {
        setBg(false);
      }
    });
  }, []);

  return (
    <Container>
      <HeaderContainer bg={bg}>
        <Logo />
        <NavContent component="header" />
        <NavbarToggle
          showNav={showNav}
          src={NavbarToggleIcon}
          onClick={toggleShowNav}
        />
      </HeaderContainer>
    </Container>
  );
};

const NavbarToggle = styled.img`
  width: 40px;
  display: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  transform: ${(props) => (props.showNav ? "rotate(-180deg)" : "rotate(0deg)")};

  @media screen and (max-width: 650px) {
    & {
      display: block;
    }
  }
`;

const HeaderContainer = styled.header`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  transition: all 0.2s ease;
  background-color: ${(props) => (props.bg ? "white" : "transparent")};
  /* border-radius: 70px; */

  @media screen and (max-width: 1000px) {
    & {
      justify-content: space-around;
    }
  }

  @media screen and (max-width: 650px) {
    & {
      width: 90%;
      justify-content: space-between;
    }
  }
`;

export default Header;
