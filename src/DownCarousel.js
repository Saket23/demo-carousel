import React from "react";
import { Wrapper, Container, Image } from "./DownCarouselStyles";
import Arrow from "./Arrow";

const DownCarousel = ({
  position,
  handleLeftClick,
  handleRightClick,
  images,
  changeTopPositionFromClick
}) => {
  return (
    <Container>
      <Wrapper position={position} width={449}>
        {images &&
          images.map((i, index) => (
            <Image
              key={i}
              src={require(`${i}`)}
              alt="logo"
              onClick={changeTopPositionFromClick(index)}
            />
          ))}
      </Wrapper>
      {position !== 0 && (
        <Arrow direction="left" handleClick={handleLeftClick} />
      )}
      {position !== parseInt(images.length / 4) && (
        <Arrow direction="right" handleClick={handleRightClick} />
      )}
    </Container>
  );
};

export default DownCarousel;
