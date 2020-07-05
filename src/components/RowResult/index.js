import PropTypes from "prop-types";
import React from "react";
import { ResultLabelStyled, ResultStyled } from "./styles";

function RowResult({ label, value, color, number, bold }) {
  return (
    <ResultStyled>
      <ResultLabelStyled>{label}:</ResultLabelStyled>
      <ResultLabelStyled color={color} bold={bold}>
        {!number
          ? value
          : value.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
      </ResultLabelStyled>
    </ResultStyled>
  );
}

RowResult.defaultProps = {
  label: "",
  color: "#FFFFFF",
  number: true,
  bold: false,
};

RowResult.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  number: PropTypes.bool,
  bold: PropTypes.bool,
};

export default RowResult;
