import styled from "styled-components";

export const ContainerStyled = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AnimationBoxStyled = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
// #FFFFFF
// #0C0C0C
// #EF6330
export const MainStyled = styled.main`
  margin-top: 50px;
  background: linear-gradient(
    135deg,
    rgba(69, 40, 123, 1) 0%,
    rgba(12, 12, 12, 1) 100%
  );
  color: #ffffff;
  display: flex;
  width: 45%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.4);
  @media only screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const CalculateStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 0px 10px 10px 0px;
  padding: 10px;
`;

export const GroupInputStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const GroupResultStyled = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

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
`;

export const InfoStyled = styled.label`
  width: 80%;
  height: 25%;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  font-size: 22px;
  justify-content: flex-start;
  line-height: 30px;
`;
