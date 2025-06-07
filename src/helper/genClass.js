import { useEffect, useRef } from "react";

const useStyles = (styleObj, id) => {
  const classNameRef = useRef(
    `${"css-"}${id}${"-"}${Math.random().toString(36).substr(2, 9)}`
  );

  useEffect(() => {
    const css = Object.entries(styleObj)
      .map(([key, value]) => {
        const prop = key.replace(/([A-Z])/g, "-$1").toLowerCase();
        return `${prop}: ${value}`;
      })
      .join("; ");

    const style = document.createElement("style");
    style.textContent = `.${classNameRef.current} { ${css} }`;
    document.head.appendChild(style);

    return () => style.remove(); // Cleanup
  }, [styleObj]);

  return classNameRef.current;
};

export default useStyles;
