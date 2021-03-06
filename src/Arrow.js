import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: ${props => (props.direction === "left" ? "10px" : null)};
  right: ${props => (props.direction === "right" ? "10px" : null)};
  cursor: pointer;
`;

const Image = styled.img`
  border: 1px solid #dcdcdc;
  border-radius: 50%;
  background-color: #dcdcdc;
  padding: 5px;
`;

const Arrow = ({ direction, handleClick }) => {
  return (
    <Wrapper onClick={handleClick} direction={direction}>
      {direction === "left" ? (
        <Image
          src={require("./images/back.svg")}
          alt="left"
          height="30px"
          width="30px"
        />
      ) : (
        <Image
          src={require("./images/next.svg")}
          alt="right"
          height="30px"
          width="30px"
        />
      )}
    </Wrapper>
  );
};

export default Arrow;
