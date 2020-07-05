import styled from "styled-components";

export const ResultStyled = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 35px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
`;

export const ResultLabelStyled = styled.label`
  color: #ffffff;
  font-size: 20px;
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => bold && "bold"};
`;
