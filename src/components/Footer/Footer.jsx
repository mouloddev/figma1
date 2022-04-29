import React from "react";
import styled from "styled-components";
import { Container } from "../../GlobalStyles/globalStyles";
import Logo from "../Logo/Logo";

import socials from "../../constants/socials";
import footer from "../../constants/footer";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FooterContainer>
          <Heading>
            <Logo light />
            <SocialIcons>
              {socials.map((item, index) => {
                return (
                  <a href={item.link} key={index}>
                    <img src={item.lighticon} alt={item.social} />
                  </a>
                );
              })}
            </SocialIcons>
          </Heading>

          <Content>
            {footer.map((rootItem, findex) => {
              return (
                <ul key={findex}>
                  <li className="title">{rootItem.title}</li>
                  {rootItem.items.map((item, sindex) => {
                    return (
                      <li key={sindex}>
                        <a href={item.href}>{item.title}</a>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
            <ul>
              <li className="title">get in touch</li>
              <GetInTouch>
                <input type="text" placeholder="Your Email" />
                <Button content="Subscribe" nomargin />
              </GetInTouch>
            </ul>
          </Content>
        </FooterContainer>
      </Container>
      <ExtraFooter>
        <p>Made with Love by Figmaland All right Reserved</p>
      </ExtraFooter>
    </Wrapper>
  );
};

const ExtraFooter = styled.div`
  max-width: 100%;
  background-color: var(--secondary-color-2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  p {
    color: white;
    font-size: 1.1rem;
  }
`;

const GetInTouch = styled.div`
  width: 300px;
  height: 50px;
  border-radius: 6px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  input {
    outline: none;
    border: none;
    flex: 1;
    padding: 0 20px;
  }
`;

// const ContentContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border: 2px solid red;
// `;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5rem;
  flex-wrap: wrap;

  ul {
    list-style: none;

    li {
      color: white;

      a {
        color: white;
      }
      margin-top: 1rem;
      text-transform: capitalize;
    }

    li.title {
      font-weight: 600;
      margin-bottom: 2rem;
      font-size: 1.1rem;
    }
  }

  @media screen and (max-width: 650px) {
    & {
      flex-direction: column;
      align-items: flex-start;
      padding-left: 4rem;

      li.title {
        margin: 2rem 0;
        font-size: 1.8rem;
        padding: 0.8rem 0;
        border-bottom: 2px solid white;
      }
    }
  }
`;

const SocialIcons = styled.div`
  a {
    margin-left: 1rem;
  }
`;

const Heading = styled.header`
  width: 100%;
  border-bottom: 2px solid #364067;
  padding: 1rem 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: auto;
`;

const Wrapper = styled.div`
  background-color: var(--text-color);
`;

const FooterContainer = styled.footer`
  /* min-height: 80vh; */
  width: 100%;
  padding: 1rem 0 6rem;
`;

export default Footer;
