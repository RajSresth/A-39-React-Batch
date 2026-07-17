import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import ProductCard from "./ProductCard";
import "./home.css";

const Home = () => {
  const [products, setProducts] = useState([]); // products = [{}, {}, {}, .....]

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data?.products);
    };

    getProducts();
  }, []);

  if (products.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="home__container">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Home;
