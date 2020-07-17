import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding-top: 15px;
  padding-right: 15px;
  height: 100px;
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: space-between;
  a {
    width: 15%;
    height: 50px;
    border-radius: 10px;
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    visibility: ${({ backPage }) => !backPage && "hidden"};
    background: linear-gradient(
      135deg,
      rgba(69, 40, 123, 1) 0%,
      rgba(12, 12, 12, 1) 100%
    );
    @media only screen and (max-width: 800px) {
      width: 50%;
      a {
        font-size: 15px;
      }
    }
    @media only screen and (min-width: 801px) and (max-width: 1200px) {
      width: 20%;
    }
  }
`;

export const Image = styled.img`
  width: 20%;
  height: 100%;
  object-fit: contain;
  @media only screen and (max-width: 800px) {
    width: 40%;
  }
`;
