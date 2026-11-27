import React from "react";
import { useCart } from "../context/useCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, increaseQty, decreaseQty } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="bg-white">
        <div className="max-w-[1400px] mx-auto px-4 py-20 text-center">
          <div className="text-6xl mb-6 animate-bounce">🛒</div>
          <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tighter">Your cart is empty</h2>
          <p className="text-gray-500 mb-10 text-lg">Looks like you haven't added anything to your cart yet.</p>
          <Link
            to="/shop"
            className="bg-[#eb3e32] text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-[#d1352a] transition-all duration-300 shadow-xl hover:shadow-2xl inline-block"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 py-16">
        <h2 className="text-5xl font-black mb-16 text-gray-900 border-b-4 border-gray-50 pb-8 tracking-tighter">Shopping <span className="text-[#eb3e32]">Cart</span></h2>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-grow space-y-8">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-50 pb-8 group">
                <div className="flex items-center space-x-8 w-full sm:w-auto">
                  <div className="w-28 h-28 bg-gray-50 rounded-2xl flex items-center justify-center p-4 overflow-hidden shadow-inner shrink-0">
                    <img src={item.image} alt={item.name} className="max-h-full object-contain group-hover:scale-110 transition duration-500" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl text-gray-900 mb-1 group-hover:text-[#eb3e32] transition-colors">{item.name}</h3>
                    <p className="text-[#eb3e32] font-black text-lg">${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-10 mt-6 sm:mt-0">
                  <div className="flex items-center bg-gray-50 rounded-xl p-1.5 border border-gray-100 shadow-sm">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-lg transition-all duration-300 shadow-sm font-black text-gray-800 hover:text-[#eb3e32] text-xl"
                    >
                      −
                    </button>
                    <span className="w-12 text-center font-black text-lg text-gray-900">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-lg transition-all duration-300 shadow-sm font-black text-gray-800 hover:text-[#eb3e32] text-xl"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-black text-2xl w-28 text-right text-gray-900 tracking-tighter">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <aside className="w-full lg:w-[400px] shrink-0">
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 sticky top-32 shadow-sm">
              <h3 className="text-2xl font-black mb-8 text-gray-900 border-b-2 border-gray-200 pb-4">Summary</h3>
              <div className="space-y-5 mb-10 font-bold">
                <div className="flex justify-between text-gray-500">
                  <span className="uppercase tracking-widest text-xs">Subtotal</span>
                  <span className="text-gray-900">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span className="uppercase tracking-widest text-xs">Shipping</span>
                  <span className="text-green-600 font-black">FREE</span>
                </div>
                <div className="border-t border-gray-200 pt-6 flex justify-between text-3xl font-black text-gray-900 tracking-tighter">
                  <span>Total</span>
                  <span className="text-[#eb3e32]">${total.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-[#eb3e32] text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#d1352a] transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 mb-4">
                Checkout Now
              </button>
              <div className="flex justify-center items-center space-x-2 text-[10px] text-gray-400 font-black uppercase tracking-widest">
                <span>🛡️ 100% Secure Transaction</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Cart;
