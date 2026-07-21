import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../Day-11 useEffect Hook Part-2/ProductCard";
import "../Day-11 useEffect Hook Part-2/home.css";
import Shimmer from "../Day-11 useEffect Hook Part-2/Shimmer";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ isError: false, message: "" });

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      try {
        const { data } = await axios.get("https://dummyjson.com/products");

        setProducts(data?.products);
        setError({ ...error });
      } catch (error) {
        setError({
          isError: true,
          message: "Something went wrong",
        });
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  console.log("Product Page");

  if (loading) {
    return <Shimmer />;
  }

  if (error.isError) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <div className="home__container">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductPage;
