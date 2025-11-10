import React from "react";

const Title = ({
  children,
  uppercase = true,
  style = {},
  className = "",
  ...props   
}) => {
  const defaultStyle = {
    fontSize: "28px",
    fontWeight: 600,
    lineHeight: "100%",
    letterSpacing: "0px",
    textTransform: uppercase ? "capitalised" : "none",
  };

  return (
    <h2
      className={className}
      style={{ ...defaultStyle, ...style }}  
      {...props}  
    >
      {children}
    </h2>
  );
};

export default Title;
