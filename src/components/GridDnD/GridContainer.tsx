import React from "react";

const GridContainer: React.FC<ComponentProps> = ({ children }) => {
  const style = {
    width: "720px",
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridAutoRows: "64px",
    gridGap: "8px",
  };

  return <div style={style}>{children}</div>;
};

export { GridContainer };
