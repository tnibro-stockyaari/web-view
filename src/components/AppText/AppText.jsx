import React from "react";

const AppText = ({
  children,
  className = "",
  style = {},
  size = "18px",
  color = "#4D4D4D",
  lineHeight = "121%",
  letterSpacing = "0px",
  ...props
}) => {
  const defaultStyle = {
    fontFamily: "Roboto, sans-serif",
    fontSize: size,
    fontWeight: 400,        
    color,
    lineHeight,
    letterSpacing,
    textTransform: "none",   
  };

  return (
    <p
      className={className}
      style={{ ...defaultStyle, ...style }}
      {...props}
    >
      {children}
    </p>
  );
};

export default AppText;
