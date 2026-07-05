const ProductCard = (props) => {
  return (
    <h2>
      {props.name} - {props.price}
    </h2>
  );
};

export default ProductCard;
