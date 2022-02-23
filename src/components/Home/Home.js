import React from "react";
import { Container } from "./Home.styled";
import ImgSlider from "./ImgSlider/ImgSlider";
import Viewers from "./Viewers/Viewers";

function Home() {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
    </Container>
  );
}

export default Home;
