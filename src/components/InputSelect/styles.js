import { FormControl, MenuItem, Select, withStyles } from "@material-ui/core";
import styled from "styled-components";

export const BoxSelectStyled = styled.div`
  width: ${({ width }) => width}%;
  height: 70px;
  margin: 10px;
`;

export const SelectLabel = styled.label`
  color: #f3f3f3;
`;

export const CssSelect = withStyles({
  root: {
    color: "#4f4f4f",
    fontSize: "2vh",
    borderRadius: "6px !important",
    padding: "1.1vh 2vh",
    paddingTop: "15px",
  },
})(Select);

export const CssForm = withStyles({
  root: {
    backgroundColor: "#FAFAFA",
    borderRadius: "6px !important",
    marginTop: "10%",
    textAlign: "left",
    width: "100%",
    height: "45px",
    border: `1px solid #828282`,
    "& .MuiSelect-select:focus": {
      backgroundColor: "#FAFAFA",
    },
    "& .MuiInput-root": {
      "&::before": {
        display: "none",
      },
      "&::after": {
        display: "none",
      },
    },
    "& svg": {
      color: "#000000",
    },
  },
})(FormControl);

export const CssMenuItem = withStyles({
  root: {
    fontSize: "1.5vh",
    backgroundColor: "#FAFAFA",
    color: "#4f4f4f",
    "&.MuiListItem-gutters": {
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    "&.Mui-selected": {
      backgroundColor: "transparent",
      color: "#4f4f4f",
    },
  },
})(MenuItem);
