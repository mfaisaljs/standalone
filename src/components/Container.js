import React from "react";
import { useMediaQuery, useStyles } from "../helper/hooks";
function Container({ type, children }) {
  const isRowBased = useMediaQuery("(min-width: 992px)");
  const myClass =
    type == "section"
      ? useStyles(styles.section(isRowBased), "XXXXX")
      : useStyles(styles.container(isRowBased), "XXXXX");
  return (
    <div
      style={{ gap: type == "section" ? "0px" : "0px" }}
      // className={`${type} ${
      //   type == "row_container" ? "flex-row basis-full" : "flex-row "
      // }  flex flex-1 flex-wrap   w-auto min-h-10 h-auto gap-2 p-2 items-start relative`}
      className={`${myClass} `}
    >
      {children}
    </div>
  );
}
const styles = {
  container: (isRowBased) => ({
    flex: isRowBased ? "auto" : "none",

    width: isRowBased ? "fit-content" : "100%",
  }),
  section: (isRowBased) => ({
    display: "flex",
    flexDirection: isRowBased ? "row" : "column",
    justifyContent: "center",
  }),
};
export default Container;
