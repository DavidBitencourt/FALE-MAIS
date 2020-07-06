import PropTypes from "prop-types";
import React from "react";
import Lottie from "react-lottie";

function AnimationLottie({ animationData, height, width, borderRadius }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      height={height}
      width={width}
      isStopped={false}
      isPaused={false}
      style={{ borderRadius }}
    />
  );
}

AnimationLottie.defaultProps = {
  height: 120,
  width: 120,
  borderRadius: 0,
};

AnimationLottie.propTypes = {
  borderRadius: PropTypes.number,
};

export default AnimationLottie;
