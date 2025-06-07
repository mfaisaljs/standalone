import React, { useEffect, useState } from "react";
import Container from "./Container";
import LabelComponent from "./LabelComponent";
import ImageBox from "./ImageBox";
// import LabelComponent from "./LabelComponent/LabelComponent";
// import ImageBox from "./ImageBox";
// import RowContainer from "./RowContainer";
// import Thumbnail from "./Thumbnail/Thumbnail";
const components = {
  Container,
  LabelComponent,
  ImageBox,
};
function Component({ item }) {
  // Only render if item is a container or type is undefined
  if (item.type == undefined) {
    return null;
  }

  // Render children recursively
  const renderChildren = () => {
    if (!item.children || item.children.length === 0) {
      return null;
    }

    return item.children.map((child) => {
      {
        console.log(child, "PP");
      }
      return (
        <Component
          key={child.id}
          item={child}
          id={child.id}
          type={child.type}
          value={child.value}
        />
      );
    });
  };

  const ElementToRender = components[item.element];
  return (
    <ElementToRender
      id={item.id}
      value={item.value}
      item={item}
      type={item.type}
    >
      {item.children.length > 0 && renderChildren()}
    </ElementToRender>
  );
}
function LayoutSetup({ option }) {
  return (
    <Component
      key={option.id}
      item={option}
      id={option.id}
      value={option.value}
      type={option.type}
    />
  );
}

export default LayoutSetup;
