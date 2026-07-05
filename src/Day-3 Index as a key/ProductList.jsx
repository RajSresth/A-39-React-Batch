import { useState } from "react";

const ProductList = () => {
  const [items, setItems] = useState(["Lays", "Kurkure", "Dairy Milk"]);
  return (
    <>
      {items.map((name, idx) => (
        <div key={idx}>
          {name} <input placeholder="type note" />
        </div>
      ))}
      <button onClick={() => setItems([...items].reverse())}>Reverse</button>
    </>
  );
};

export default ProductList;
