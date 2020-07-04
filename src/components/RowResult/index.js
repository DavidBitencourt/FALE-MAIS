import PropTypes from "prop-types";
import React from "react";
import { ResultLabelStyled, ResultStyled } from "./styles";

function RowResult({ label, value, color, number }) {
  return (
    <ResultStyled>
      <ResultLabelStyled>{label}:</ResultLabelStyled>
      <ResultLabelStyled color={color}>
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
  color: "#4f4f4f",
  number: true,
};

RowResult.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  number: PropTypes.bool,
};

export default RowResult;
