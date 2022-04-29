import styled from "styled-components";

export const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 1000px) {
    width: 90%;
  }
`;

export const SectionTitle = styled.p`
  font-weight: bold;
  font-size: ${(props) =>
    props.xsmall
      ? "0.6rem"
      : props.small
      ? "0.8rem"
      : props.large
      ? "1.4rem"
      : props.xlarge
      ? "2.5rem"
      : "1rem"};

  text-transform: capitalize;

  @media screen and (max-width: 650px) {
    & {
      font-size: ${(props) =>
        props.xsmall
          ? "0.4rem"
          : props.small
          ? "0.6rem"
          : props.large
          ? "1.2rem"
          : props.xlarge
          ? "2rem"
          : "0.8rem"};
    }
  }
`;

export const SectionDescription = styled.p`
  font-size: ${(props) =>
    props.small ? "1rem" : props.xsmall ? "0.8rem" : "1.2rem"};
  font-weight: ${(props) =>
    props.sbold ? "600" : props.bold ? "bold" : "500"};
  color: var(--second-text-color);
  margin: ${(props) => (props.margin ? "1rem 0" : "0 0")};
  width: ${(props) => props.width && props.width};
  text-align: ${(props) => props.center && "center"};
  opacity: ${(props) => (props.light ? "0.8" : "1")};
  line-height: 1.5rem;

  @media screen and (max-width: 650px) {
    & {
      font-size: ${(props) =>
        props.small ? "0.8rem" : props.xsmall ? "0.6rem" : "1rem"};
    }
  }
`;
