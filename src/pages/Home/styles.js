import styled from "styled-components";
//import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const ActionBox = styled.div`
  width: 70%;
  height: 50%;
  padding-left: 50px;
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: black;
  font-size: 35px;
`;

export const Button = styled.a`
  width: 300px;
  height: 50px;
  display: flex;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  background: rgb(33, 79, 124);
  background: linear-gradient(
    90deg,
    rgba(33, 79, 124, 1) 0%,
    rgba(102, 148, 193, 1) 86%
  );
  span {
    font-family: Arial;
    color: white;
    font-size: 24px;
  }
`;

export const ImageBox = styled.div`
  height: 100%;
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
