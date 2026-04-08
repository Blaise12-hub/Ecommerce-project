import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartProvider";

const Home = () => {
  const { addToCart } = useCart();

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
