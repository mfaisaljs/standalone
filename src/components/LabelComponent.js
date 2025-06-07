import React, { useState } from "react";

function LabelComponent({ id, item }) {
  return <section className="text-black">{item.value || "Text"}</section>;
}

export default LabelComponent;
