import React from "react";
import styled from "styled-components";

const Logo = ({ light }) => {
  return (
    <HeaderLogo light={light} onClick={() => window.history.go("/")}>
      Publist
    </HeaderLogo>
  );
};

const HeaderLogo = styled.p`
  font-weight: bold;
  font-size: 1.6rem;
  color: ${(props) => props.light && "white"};
  cursor: pointer;
`;

export default Logo;
