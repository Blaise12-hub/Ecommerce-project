import React from "react";
import { useCart } from "../context/CartProvider";

const Cart = () => {
  const { cart, increaseQty, decreaseQty } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-500">Go to the shop to add some products!</p>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Your Shopping Cart</h2>
      <div className="space-y-6">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b pb-6">
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-contain" />
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-gray-500">${item.price}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-3 py-1 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-3">{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-3 py-1 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <p className="font-bold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-between items-center">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
