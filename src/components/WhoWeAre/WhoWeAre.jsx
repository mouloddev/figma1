import React from "react";
import styled from "styled-components";

import {
  Container,
  SectionDescription,
  SectionTitle,
} from "../../GlobalStyles/globalStyles";

import videoImage from "../../images/WhoWeAre.jpg";

const WhoWeAre = () => {
  return (
    <Wrapper>
      <Container>
        <WhoWeAreContainer>
          <SectionTitle padding xlarge>
            who we are
          </SectionTitle>
          <SectionDescription padding center margin>
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics : Newtonian mechanics
          </SectionDescription>
          <Image src={videoImage} />
        </WhoWeAreContainer>
      </Container>
      <DarkBackground />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--light-bg-color);
  position: relative;
`;

const Image = styled.img`
  margin-bottom: -50%;
  z-index: 10;
  margin: 0;
  width: 60%;

  @media screen and (max-width: 1000px) {
    & {
      width: 90%;
    }
  }
`;

const WhoWeAreContainer = styled.section`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 5rem 0;
`;

const DarkBackground = styled.div`
  width: 100%;
  min-height: 30vh;

  background-color: var(--secondary-color-2);
  position: absolute;
  bottom: 0;

  @media screen and (max-width: 1000px) {
    & {
      display: none;
    }
  }
`;

export default WhoWeAre;
