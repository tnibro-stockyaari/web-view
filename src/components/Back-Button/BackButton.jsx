import React from "react";

const BackButton = ({
  onClick = () => window.history.back(), // default browser back
  size = 40,                             // circle size
  iconSize = 18,                         // arrow size
  className = "",
  style = {},
  ...props
}) => {
  const defaultStyle = {
    width: size,
    height: size,
    borderRadius: "50%",
    background: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  return (
    <div
      className={className}
      style={{ ...defaultStyle, ...style }}
      onClick={onClick}
      {...props}
    >
      <i
        className="bi bi-arrow-left"   // Bootstrap Icon
        style={{ fontSize: iconSize }}
      ></i>
    </div>
  );
};

export default BackButton;
