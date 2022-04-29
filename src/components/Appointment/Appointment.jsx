import React from "react";
import styled from "styled-components";
import {
  Container,
  SectionDescription,
  SectionTitle,
} from "../../GlobalStyles/globalStyles";

import Button from "../Button/Button";
import Form from "../Form/Form";

import bg from "../../images/appointment/background.png";

const Appointment = () => {
  return (
    <Wrapper>
      <Container>
        <AppointmentContainer>
          <SectionTitle>contact us </SectionTitle>
          <SectionTitle xlarge>make an appointment</SectionTitle>
          <Form section="contact" />
        </AppointmentContainer>
      </Container>
      <BelowAppointment>
        <Container>
          <div>
            <SectionTitle large>
              Consulting Agency for your business
            </SectionTitle>
            <SectionDescription small>
              the quick fox jumps over the lazy dog
            </SectionDescription>
          </div>
          <Button content="Contact us" />
        </Container>
      </BelowAppointment>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
`;

const AppointmentContainer = styled.section`
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 0;
  justify-content: center;

  @media screen and (max-width: 920px) {
    & {
      align-items: center;
      justify-content: center;
    }
  }
`;

const BelowAppointment = styled.div`
  background-color: white;
  padding: 1.5rem 0 1rem;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 650px) {
      & {
        flex-direction: column;
      }
    }
  }
`;

export default Appointment;
