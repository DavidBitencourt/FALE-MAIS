import { bounceInDown } from "react-animations";
import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`${bounceInDown}`;

export const ContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  display: ${({ visibility }) => (visibility === "true" ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const CardBoxStyled = styled.div`
  animation: 1s ${bounceAnimation};
  border-radius: 3%;
  width: 90%;
  max-width: 600px;
  height: 70%;
  z-index: 2;
  background: #ffffff;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 5%;
  padding: 5%;
  margin: 1%;
`;

export const Title = styled.h1`
  width: 100%;
  color: black;
  font-size: 2.5vw;
  text-align: center;
  color: #4f4f4f;
`;

export const ButtonCloseStyled = styled.img`
  cursor: pointer;
  height: 3vw;
  width: 3vw;
`;

export const OverflowStyled = styled.div`
  width: 100%;
  height: 100%;
  background: #000000;
  position: absolute;
  opacity: 0.7;
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TableStyled = styled.table`
  width: 85%;
  height: 70%;
  border-radius: 10px;
  border-collapse: collapse;
`;

export const TableBodyStyled = styled.tbody`
  width: 100%;
  height: 100%;
`;

export const TableHeaderStyled = styled.th`
  text-align: center;
  border-bottom: 2px solid #000;
  font-weight: bold;
`;

export const TableRowStyled = styled.tr`
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  :nth-of-type(n + 2) {
    :hover {
      transition: 0.3s;
      background: linear-gradient(
        90deg,
        rgba(33, 79, 124, 1) 0%,
        rgba(102, 148, 193, 1) 86%
      );
      color: #ffffff;
      cursor: pointer;
      font-weight: bold;
    }
  }
`;

export const TableColumnStyled = styled.td`
  text-align: center;
`;

export const InfoTextStyled = styled.label`
  width: 85%;
  margin-top: 20px;
  font-size: 15px;
  color: #4f4f4f;
`;
