import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import "./output.css";
import useStyles from "./helper/genClass";
import { v4 as uuid4 } from "uuid";
function Main() {
  const [productData, setProductData] = useState(null);
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
        setProductData({
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

  const containerClass = useStyles({ ...productData?.settings }, uuid4());
  return (
    <div
      className={containerClass}
      style={{ width: "100%", margin: "0 auto", padding: "0 1.5rem" }}
    >
      {productData?.shopify?.product?.title}
      {productData &&
        productData.layout &&
        productData.layout &&
        productData.layout.map((item) => {
          return (
            <Layout option={item} key={item.id} id={item.id} type={item.type} />
          );
        })}
    </div>
  );
}

export default Main;
