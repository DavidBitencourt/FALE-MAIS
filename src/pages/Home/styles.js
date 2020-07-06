import styled from "styled-components";

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
  @media only screen and (max-width: 500px) {
    width: 100%;
    padding-left: 35px;
    padding-right: 35px;
  }
  a {
    width: 300px;
    height: 50px;
    display: flex;
    border-radius: 7px;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      90deg,
      rgba(33, 79, 124, 1) 0%,
      rgba(102, 148, 193, 1) 86%
    );
    font-family: Arial;
    color: #ffffff;
    font-size: 24px;
    @media only screen and (max-width: 500px) {
      width: 100%;
    }
  }
`;

export const Title = styled.h1`
  color: black;
  font-size: 35px;
  @media only screen and (max-width: 1500px) {
    font-size: 30px;
  }
`;

export const ImageBox = styled.div`
  height: 100%;
  width: 100%;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
