import React, { useContext, useEffect, useState } from "react";
import Layout from "./components/Layout";
import "./output.css";
import { useStyles } from "./helper/hooks";
import { v4 as uuid4 } from "uuid";
import { GlobalContext } from "./context/global";
function Main() {
  // const [productData, setProductData] = useState(null);
  const context = useContext(GlobalContext);
  const lastPart = window.location.pathname.split("/").pop();

  useEffect(() => {
    const fetch_product = async () => {
      try {
        const productRequest = await fetch(`/products/${lastPart}.json`);
        const data = await productRequest.json();

        const productLayout = await fetch(
          `https://pricing-nine-tau.vercel.app/api/v1/product/${data.product.id}`
        );
        const layout = await productLayout.json();

        context.setProductData({
          shopify: data,
          layout: layout[0].data,
          settings: layout[0].settings,
        });
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetch_product();
  }, []);

  const containerClass = useStyles(
    { ...context.productData?.settings },
    uuid4()
  );
  return (
    <div
      className={`${containerClass} ${"Parent"}`}
      style={{ width: "100%", margin: "0 auto", padding: "3rem 1.5rem" }}
    >
      {context.productData &&
        context.productData.layout &&
        context.productData.layout &&
        context.productData.layout.map((item) => {
          return (
            <Layout option={item} key={item.id} id={item.id} type={item.type} />
          );
        })}
    </div>
  );
}

export default Main;
