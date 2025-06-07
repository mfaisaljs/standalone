import React, { useState } from "react";

function LabelComponent({ item }) {
  return (
    <section className="text-black">
      <span className="font-4xl text-4xl"> {item.value || "Text"}</span>
    </section>
  );
}

export default LabelComponent;
