import React from "react";

const AppContainer = ({
  children,
  className = "",
  padding = "p-3",
  maxWidth = "",
  background = "",
  style = {},
  ...rest
}) => {
  return (
    <div
      id="appCapsule"
      className={`${padding} ${className}`}
      style={{
        minHeight: "100vh",
        width: "100%",
        maxWidth: maxWidth,     // ✅ dynamic
        margin: "0 auto",
        background: background, // ✅ dynamic
        ...style,               // ✅ merge external styles
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default AppContainer;
