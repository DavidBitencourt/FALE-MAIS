import styled from "styled-components";
//import px2vw from "../../utils/px2vw";

export const ContainerStyled = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

export const HeaderStyled = styled.header`
  margin-top: 48px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 18px;
  a {
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
`;

export const MainStyled = styled.main`
  margin-top: 50px;
  background-color: #ffffff;
  display: flex;
  width: 500px;
  height: 600px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.4);
`;
export const CalculateStyled = styled.div`
  width: 100%;
  height: 40%;
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
  color: #4f4f4f;
  font-size: 20px;
`;

export const InfoStyled = styled.label`
  width: 80%;
  height: 25%;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #4f4f4f;
  font-size: 22px;
  justify-content: flex-start;
  line-height: 30px;
`;