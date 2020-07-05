import { TextField, withStyles } from "@material-ui/core";
import styled from "styled-components";

export const BoxInputStyled = styled.div`
  width: ${({ width }) => width}%;
  height: 45px;
  margin: 10px;
  margin-top: 5%;
`;

export const CssTextField = withStyles({
  root: {
    marginBottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: `6px`,
    fontWeight: "bold",
    fontSize: "2vh",
    border: `1px solid #828282`,
    paddingLeft: "2vh",
    boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.3)",

    "& label + .MuiInput-formControl": {
      marginTop: "5px",
    },
    "& .MuiInputBase-input": {
      color: "#4f4f4f",
    },
    "& .MuiOutlinedInput-input": {
      padding: "8.5px 14px",
    },
    "& .MuiOutlinedInput-root": {
      height: "100%",
      "& fieldset": {
        borderColor: "transparent",
        boxShadow: "inset 2px 2px 2px rgba(0, 0, 0, 0.08)",
      },
      "&:hover fieldset": {
        borderColor: "red",
      },
      "&.Mui-focused fieldset": {
        borderColor: "red",
      },
      "&.Mui-disabled fieldset": {
        borderColor: "#4f4f4f",
      },
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:before": {
      borderBottom: "none !important",
      borderColor: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none !important",
      borderColor: "none",
    },
    "& label": {
      color: "#4f4f4f",
      transform: "translate(14px, 1.8vh) scale(1)",
    },
    "& label.MuiInputLabel-shrink": {
      transform: "translate(0px, -27px) scale(1)",
      color: "#ffffff",
    },
    "& legend": {
      width: "0px !important",
    },
  },
})(TextField);

export const ErrorBoxStyled = styled.div``;

export const ErrorTextStyled = styled.div`
  font-size: 1.4vh;
  color: "red";
  margin-left: 1.2vh;
`;
