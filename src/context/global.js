import { createContext, useState } from "react";
export const GlobalContext = createContext(null);

export const GlobalProvider = (props) => {
  const [productData, setProductData] = useState({});
  const [layout, setLayout] = useState();
  return (
    <GlobalContext.Provider
      value={{
        productData,
        setProductData,
        layout,
        setLayout,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
