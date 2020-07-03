// import { bounceIn } from "react-animations";
import styled, { css } from "styled-components";
// import px2vw from "../../utils/px2vw";

export const ContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  ${({ visibility }) =>
    !visibility &&
    css`
      display: none;
    `}
`;

export const CardBoxStyled = styled.div`
  border-radius: 3%;
  width: 600px;
  height: 500px;
  z-index: 2;
  background: white;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 5%;
  padding: 1%;
  margin: 1%;
`;

export const Title = styled.h1`
  width: 100%;
  color: black;
  font-size: 2.3vw;
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
  width: 95%;
  height: 70%;
  border-radius: 10px;
  border-collapse: collapse;
`;

export const TableHeaderStyled = styled.th`
  text-align: center;
  border-bottom: 2px solid #000;
`;

export const TableRowStyled = styled.tr`
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  :nth-of-type(n + 2) {
    :hover {
      transition: 0.5s;
      background-color: rgba(33, 79, 124, 0.5);
      cursor: pointer;
    }
  }
`;

export const TableColumnStyled = styled.td`
  text-align: center;
`;

export const InfoTextStyled = styled.label`
  width: 95%;
  margin-top: 20px;
  font-size: 15px;
  color: #4f4f4f;
`;
