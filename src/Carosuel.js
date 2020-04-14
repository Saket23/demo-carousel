import React from "react";
import { Wrapper, Container, Image } from "./styles";
import Arrow from "./Arrow";

const Carousel = ({ position, handleLeftClick, handleRightClick }) => {
  return (
    <Container>
      <Wrapper position={position} width={449}>
        <Image src={require("./images/Image1.jpg")} alt="logo" />
        <Image src={require("./images/Image2.jpg")} alt="logo" />
        <Image src={require("./images/Image3.jpg")} alt="logo" />
        <Image src={require("./images/Image4.jpg")} alt="logo" />
        <Image src={require("./images/Image5.jpg")} alt="logo" />
        <Image src={require("./images/Image6.jpg")} alt="logo" />
        <Image src={require("./images/Image7.jpg")} alt="logo" />
        <Image src={require("./images/Image8.jpg")} alt="logo" />
        <Image src={require("./images/Image9.jpg")} alt="logo" />
      </Wrapper>
      {position !== 0 && (
        <Arrow direction="left" handleClick={handleLeftClick} />
      )}
      {position !== 8 && (
        <Arrow direction="right" handleClick={handleRightClick} />
      )}
    </Container>
  );
};

export default Carousel;
