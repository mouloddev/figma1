import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  SectionDescription,
  SectionTitle,
} from "../../GlobalStyles/globalStyles";
import Button from "../Button/Button";
import Form from "../Form/Form";

import heroBg from "../../images/hero-background.svg";

const Hero = () => {
  const [message, setMessage] = useState({
    show: false,
    message: "",
    state: "",
  });

  useEffect(() => {
    if (message.show) {
      setTimeout(() => {
        setMessage({ ...message, show: false });
      }, 5000);
    }
  }, [message]);
  return (
    <HeroContainer bg={heroBg}>
      <HeroLeft>
        <SectionTitle xlarge>Busniess Adivisory</SectionTitle>
        <SectionTitle xlarge>Services Provider</SectionTitle>
        <SectionDescription light margin>
          We know how large objects will act, but things on a small scale.
        </SectionDescription>
        <HeroButtons>
          <Button radius content="get quote now" />
          <Button content="learn more" outlined />
        </HeroButtons>
      </HeroLeft>

      <HeroRight>
        <SectionTitle large>book appointment</SectionTitle>
        <MessageContainer message={message}>
          <Message message={message}>
            <p>{message.message}</p>
          </Message>
        </MessageContainer>

        <Form setMessage={setMessage} />
      </HeroRight>
    </HeroContainer>
  );
};

const MessageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: ${(props) => (props.message.show ? "70px" : "0")};

  transition: all 0.2s ease-in-out;
`;

const Message = styled.div`
  background: ${(props) =>
    props.message.state === "success"
      ? "#97DBAE"
      : props.message.state === "failed"
      ? "#FFA8A8"
      : "#F2F5C8"};
  width: 100%;
  height: 70px;
  border-radius: 6px;
  margin: 1rem 0;
  transform: ${(props) =>
    props.message.show ? "translateX(0)" : "translateX(-100%)"};

  display: flex;

  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;

  p {
    font-weight: 600;
  }
`;

const HeroContainer = styled.section`
  /* min-height: 100vh; */
  width: 100%;
  background-image: url(${(props) => `${props.bg}`});
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 6rem 0;

  @media screen and (max-width: 920px) {
    & {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 12rem;
    }
  }
`;
const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  @media screen and (max-width: 920px) {
    & {
      justify-content: center;
      align-items: center;
    }
  }
`;

const HeroRight = styled.div`
  width: 300px;
  min-height: 70vh;
  background-color: white;

  box-shadow: var(--box-shadow);
  -webkit-box-shadow: var(--box-shadow);
  -moz-box-shadow: var(--box-shadow);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media screen and (max-width: 920px) {
    & {
      margin-top: 4rem;
    }
  }
`;

const HeroButtons = styled.div`
  display: flex;
`;

export default Hero;
