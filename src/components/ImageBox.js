import React from "react";

function ImageBox({ item }) {
  return (
    <div className="flex flex-1">
      <img src={item.value} className="w-[100%] h-auto" />
    </div>
  );
}

export default ImageBox;
