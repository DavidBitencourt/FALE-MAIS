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
    border-radius: 7px;
    color: white;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    visibility: ${({ backPage }) => !backPage && "hidden"};
    background: linear-gradient(
      90deg,
      rgba(33, 79, 124, 1) 0%,
      rgba(102, 148, 193, 1) 86%
    );
    @media only screen and (max-width: 800px) {
      width: 50%;
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
