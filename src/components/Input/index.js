import PropTypes from "prop-types";
import React from "react";
import InputMask from "react-input-mask";
import { BoxInputStyled, CssTextField } from "./styles";
export function Input({
  width,
  label,
  name,
  height,
  value,
  onChange,
  errorMessage,
  disabled,
  mask,
  placeholder,
  maskPlaceholder,
}) {
  const handleChange = (event) => {
    onChange({
      [name]: event.target.value,
    });
  };

  return (
    <>
      <InputMask mask={mask} maskChar={maskPlaceholder}>
        {(inputProps) => (
          <BoxInputStyled width={width} height={height}>
            <CssTextField
              {...inputProps}
              placeholder={placeholder}
              label={label}
              name={name}
              margin="normal"
              errorMessage={errorMessage}
              disabled={disabled}
              value={value}
              onChange={handleChange}
              //   helperText="socorro"
            />
          </BoxInputStyled>
        )}
      </InputMask>
    </>
  );
}

Input.defaultProps = {
  autoComplete: null,
  gridArea: null,
  height: null,
  textarea: false,
  value: null,
  errorMessage: null,
  small: false,
  placeholder: null,
  maskPlaceholder: "",
  mask: null,
  valueSent: false,
  modal: false,
  format: false,
};

Input.propTypes = {
  placeholder: PropTypes.string,
  textarea: PropTypes.bool,
  width: PropTypes.number.isRequired,
  autoComplete: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gridArea: PropTypes.string,
  height: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  onPaste: PropTypes.func,
  small: PropTypes.bool,
  mask: PropTypes.string,
  hoverBorderColor: PropTypes.string,
  maskPlaceholder: PropTypes.string,
  valueSent: PropTypes.bool,
  modal: PropTypes.bool,
  format: PropTypes.bool,
};

export default Input;
