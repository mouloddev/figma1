import { useState } from "react";
import styled from "styled-components";
import Appointment from "./components/Appointment/Appointment";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Industry from "./components/Industry/Industry";
import Nav from "./components/Nav/Nav";
import Reviews from "./components/Reviews/Reviews";
import Team from "./components/Team/Team";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";

function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <AppContainer>
      <Header showNav={showNav} setShowNav={setShowNav} />
      <Nav showNav={showNav} setShowNav={setShowNav} />
      <Hero />
      <Industry />
      <WhoWeAre />
      <Reviews />
      <Team />
      <Appointment />
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div``;

export default App;
