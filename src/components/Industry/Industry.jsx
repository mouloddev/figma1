import React from "react";
import styled from "styled-components";
import {
  Container,
  SectionDescription,
  SectionTitle,
} from "../../GlobalStyles/globalStyles";

import industryCards from "../../constants/industry";

const Industry = () => {
  return (
    <Container>
      <IndustryContainer>
        <SectionTitle xlarge>Industry</SectionTitle>
        <SectionDescription center margin>
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics : Newtonian mechanics
        </SectionDescription>
        <IndustryCards>
          {industryCards.map((item, index) => {
            return (
              <IndustryCard key={index}>
                <CardTop>
                  <CardIcon>
                    <img src={item.img} alt="business&finance" />
                  </CardIcon>
                  <SectionTitle>{item.title}</SectionTitle>
                </CardTop>
                <CardDown>
                  <ul>
                    {item.data.map((item, index) => {
                      return <li key={index}>-{item}</li>;
                    })}
                  </ul>
                </CardDown>
              </IndustryCard>
            );
          })}
        </IndustryCards>
      </IndustryContainer>
    </Container>
  );
};

const CardDown = styled.div`
  background-color: white;
  width: 100%;
  border: 1px solid #a9d6ff;
  border-radius: 6px;

  ul {
    list-style: none;
    margin: 1rem;

    li {
      color: var(--second-text-color);
      font-weight: 500;
      margin: 0.5rem 0;
    }
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
`;

const CardIcon = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 50%;
  margin: 1rem 0.6rem;
`;

const IndustryCard = styled.div`
  margin: 1rem;
  width: 300px;
  min-height: 300px;
  background-color: #d9edff;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
const IndustryCards = styled.div`
  display: flex;

  @media screen and (max-width: 920px) {
    & {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

const IndustryContainer = styled.section`
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 920px) {
    & {
      padding-top: 4rem;
    }
  }
`;

export default Industry;
