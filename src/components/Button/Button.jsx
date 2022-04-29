import React from "react";
import styled from "styled-components";

const Button = ({ content, ...otherProps }) => {
  return <ButtonContainer {...otherProps}>{content}</ButtonContainer>;
};

const ButtonContainer = styled.button`
  font-weight: 600;
  text-transform: capitalize;
  margin: ${(props) => (props.nomargin ? "" : "1rem")};
  max-width: ${(props) => props.width && props.width};
  outline: none;
  padding: 1rem;
  border-radius: ${(props) => (props.radius ? "25px" : "4px")};
  border: ${(props) =>
    props.outlined ? "1px solid var(--secondary-color-1)" : "none"};
  background-color: ${(props) =>
    props.outlined ? "transparent" : "var(--primary-color)"};
  color: ${(props) => (props.outlined ? "var(--second-text-color)" : "white")};
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.outlined ? "var(--muted-color)" : "var(--alert-color)"};
  }
`;

export default Button;
