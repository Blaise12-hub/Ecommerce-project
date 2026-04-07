import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-xl transition">
      <img src={product.image} alt={product.name} />
      <h2 className="font-bold">{product.name}</h2>
      <p>${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="bg-black text-white px-4 py-2 mt-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}