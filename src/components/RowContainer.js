import React from "react";
import { useMediaQuery, useStyles } from "../helper/hooks";
import { v4 as uuid4 } from "uuid";
function RowContainer({ type, children }) {
  const isRowBased = useMediaQuery("(min-width: 992px)");

  const myClass =
    type == "row_container" ? useStyles(styles.row(isRowBased), uuid4()) : "";
  return (
    <div
      className={`${type} ${myClass}`}
      //   style={myClass}
      //   className={`${type} ${
      //     type == "row_container" ? "flex-row  flex-auto basis-full " : "flex-row"
      //   } flex  flex-wrap w-full min-h-10 h-auto gap-2 p-2 items-start relative`}
    >
      {children}
    </div>
  );
}
const styles = {
  row: (isRowBased) => ({
    display: isRowBased ? "flex" : "flex",
    flexDirection: isRowBased ? "row" : "column",
    flexWrap: isRowBased ? "nowrap" : "wrap",
    width: "100%",
    minHeight: "40px",
    height: "auto",
    position: "relative",
    flexBasis: "100%",
    flex: "1 1 auto",
    gap: "0.1px",
  }),
  //   section: (isRowBased) => ({
  //     display: "flex",
  //     flexDirection: isRowBased ? "row" : "column",
  //     justifyContent: "center",
  //   }),
};
export default RowContainer;
