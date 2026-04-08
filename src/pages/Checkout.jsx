import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Checkout = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
        />
      ))}
    </div>
  );
};

export default Checkout;