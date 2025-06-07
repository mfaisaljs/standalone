import React, { useState } from "react";

function LabelComponent({ id, item }) {
  return (
    <section className="text-black">
      <span className="font-2xl text-2xl">TEST</span>
      {item.value || "Text"}
    </section>
  );
}

export default LabelComponent;
