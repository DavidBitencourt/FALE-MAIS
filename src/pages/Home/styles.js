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
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      135deg,
      rgba(69, 40, 123, 1) 0%,
      rgba(12, 12, 12, 1) 100%
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
  background: -webkit-linear-gradient(
    60deg,
    rgba(69, 40, 123, 1) 0%,
    rgba(12, 12, 12, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
