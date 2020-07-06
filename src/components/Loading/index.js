import PropTypes from "prop-types";
import React from "react";
import loading from "../../assets/animations/loading.json";
import AnimationLottie from "../AnimationLottie";
import { LoadingBoxStyled } from "./styles";

function Loading({ show, backgroundColor }) {
  return (
    <LoadingBoxStyled backgroundColor={backgroundColor} show={show}>
      <AnimationLottie
        height={120}
        width={120}
        animationData={loading}
        borderRadius={100}
      />
    </LoadingBoxStyled>
  );
}

Loading.defaultProps = {
  backgroundColor: "#ffffff",
};
Loading.propTypes = {
  show: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string,
};

export default Loading;
