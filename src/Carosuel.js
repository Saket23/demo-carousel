import React from "react";
import { Wrapper, Container, Image } from "./styles";
import Arrow from "./Arrow";

const Carousel = ({ position, handleLeftClick, handleRightClick, images }) => {
  return (
    <Container>
      <Wrapper position={position} width={449}>
        {images &&
          images.map(i => <Image key={i} src={require(`${i}`)} alt="logo" />)}
      </Wrapper>
      {position !== 0 && (
        <Arrow direction="left" handleClick={handleLeftClick} />
      )}
      {position !== images.length - 1 && (
        <Arrow direction="right" handleClick={handleRightClick} />
      )}
    </Container>
  );
};

export default Carousel;
