import React, { useState } from "react";
import useStyles from "../helper/genClass";
function LabelComponent({ id, item }) {
  const labelClass = useStyles({ ...item.css }, id);
  return (
    <section className="w-full relative">
      <div className={`${labelClass} w-full`}>{item.value || "Text"}</div>
    </section>
  );
}

export default LabelComponent;
