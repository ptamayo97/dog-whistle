import React from "react";

const Video = props => {
  const {
    title,
    className,
    width,
    height,
    src,
    frameborder,
    allowFullScreen
  } = props.attr;
  // const { attr } = props;
  // console.log({ attr });
  return (
    <>
      <iframe
        title={title}
        className={className}
        width={width}
        height={height}
        src={src}
        frameBorder={frameborder}
        allowFullScreen={allowFullScreen}
      />
    </>
  );
};

export default Video;
