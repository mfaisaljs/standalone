import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import "./index.css";
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
        });
        console.log(layout);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetch_product();
  }, []);

  return (
    <div>
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
