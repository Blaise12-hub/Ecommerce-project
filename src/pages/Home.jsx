import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";



const Home = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-4 grid grid-cols-3 gap-4">
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

export default Home;