import React from "react";

function RowContainer({ type, children }) {
  return (
    <div
      className={`${type} ${
        type == "row_container" ? "flex-row  flex-auto basis-full " : "flex-row"
      } flex  flex-wrap w-full min-h-10 h-auto gap-2 p-2 items-start relative`}
    >
      {children}
    </div>
  );
}

export default RowContainer;
