import PropTypes from "prop-types";
import React from "react";
import Lottie from "react-lottie";
import loading from "../../assets/loading.json";
import { LoadingBoxStyled } from "./styles";

function Loading({ show, backgroundColor }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <LoadingBoxStyled backgroundColor={backgroundColor} show={show}>
      <Lottie
        options={defaultOptions}
        height={120}
        width={120}
        isStopped={false}
        isPaused={false}
        style={{ borderRadius: 100 }}
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
