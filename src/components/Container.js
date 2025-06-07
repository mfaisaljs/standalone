import React from "react";

function Container({ type, children }) {
  return (
    <div
      className={`${type} ${
        type == "row_container" ? "flex-row basis-full" : "flex-row "
      }  flex flex-1 flex-wrap   w-auto min-h-10 h-auto gap-2 p-2 items-start relative`}
    >
      {children}
    </div>
  );
}

export default Container;
