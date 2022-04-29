import React from "react";
import styled from "styled-components";

import {
  Container,
  SectionDescription,
  SectionTitle,
} from "../../GlobalStyles/globalStyles";

import teamData from "../../constants/team";
import socialsIcons from "../../constants/socials";

const Team = () => {
  return (
    <Container>
      <TeamContainer>
        <SectionTitle xlarge>meet our team</SectionTitle>
        <SectionDescription center margin>
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics : Newtonian mechanics
        </SectionDescription>
        <TeamCards>
          {teamData.map((item, index) => {
            return (
              <TeamCard key={index}>
                <ImageContainer>
                  <img src={item.image} alt={item.name} />
                </ImageContainer>
                <TeamInfo>
                  <SectionTitle>{item.name}</SectionTitle>
                  <SectionDescription xsmall center sbold>
                    {item.role}
                  </SectionDescription>
                  <TeamSocials>
                    {item.socials.map((social, index) => {
                      let socialIcon = socialsIcons.find(
                        (item) => item.social === social.social
                      ).darkicon;
                      return (
                        <a href={social.link} key={index}>
                          <img src={socialIcon} alt={social.social} />
                        </a>
                      );
                    })}
                  </TeamSocials>
                </TeamInfo>
              </TeamCard>
            );
          })}
        </TeamCards>
      </TeamContainer>
    </Container>
  );
};

const TeamContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 0 3rem;
`;

const TeamCards = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 920px) {
    & {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

const TeamCard = styled.div`
  margin: 1rem;
  width: 300px;
  height: 350px;
  background-color: white;
  border: 1px solid var(--border-muted-color);
  border-radius: 2px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 60%;
  img {
    width: 300px;
  }
`;

const TeamInfo = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamSocials = styled.div`
  margin: 0.8rem 0;
  a {
    margin: 0.7rem;
  }
`;

export default Team;
