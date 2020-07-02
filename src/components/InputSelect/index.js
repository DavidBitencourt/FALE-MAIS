import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  BoxSelectStyled,
  CssForm,
  CssMenuItem,
  CssSelect,
  SelectLabel,
} from "./styles";

function InputSelect({
  name,
  values,
  disabled,
  gridArea,
  valueChange,
  label,
  changeValue,
  width,
  marginLabel,
}) {
  const [state, setState] = useState({
    value: values[0].label,
  });

  const handleChange = (event) => {
    setState(() => {
      return {
        value: event.target.value,
      };
    });
  };
  return (
    <>
      <BoxSelectStyled width={width}>
        <SelectLabel>{label}</SelectLabel>
        <CssForm>
          <CssSelect
            value={changeValue ? changeValue : state.value}
            disabled={disabled}
            onChange={(e) => {
              handleChange(e);
              valueChange({ [name]: e.target.value });
            }}
            key={name}
          >
            {values.map((select) => {
              return (
                <CssMenuItem key={name} value={select.label}>
                  {select.label}
                </CssMenuItem>
              );
            })}
          </CssSelect>
        </CssForm>
      </BoxSelectStyled>
    </>
  );
}

InputSelect.defaultProps = {
  searchIcon: false,
  gridArea: "",
  valueChange: () => {},
  changeValue: null,
  label: null,
  marginLabel: null,
};

InputSelect.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.shape([]).isRequired,
  gridArea: PropTypes.string,
  valueChange: PropTypes.func,
  changeValue: PropTypes.string,
  label: PropTypes.string,
  marginLabel: PropTypes.number,
};

export default InputSelect;
