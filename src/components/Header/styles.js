import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding-top: 15px;
  height: 100px;
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: space-between;
  a {
    width: 20%;
    color: #000;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 20px;
    visibility: ${({ backPage }) => !backPage && "hidden"};
  }
`;

export const Image = styled.img`
  width: 20%;
  height: 100%;
  object-fit: contain;
`;
