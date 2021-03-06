import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  transform-style: preserve-3d;
  transform: ${props => `translate(${props.position * -props.width}px)`};
  transition: transform 1s;
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
`;
