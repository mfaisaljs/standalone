import { useEffect, useRef, useState } from "react";

export const useStyles = (styleObj, id) => {
  console.log(styleObj, "Xxxxxxxx");
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
export const useMediaQuery = (query) => {
  const mediaMatch = window.matchMedia(query);
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  return matches;
};
