import React from "react";

const ProductCard = ({ title, price, category, images, description }) => {
  return (
    <div className="product__card">
      <div className="profile">
        <img src={images[0]} alt="" />
      </div>
      <div className="info">
        <div className="product__title">{title}</div>
        <div className="product__description">
          {description.split(" ").slice(0, 4).join(" ") + "..."}
        </div>
        <div className="product__category">{category}</div>
        <div className="product__price">&#36; {price}</div>
        <button>Order Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
