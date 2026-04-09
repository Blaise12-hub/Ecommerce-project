import React from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="group bg-white rounded-3xl p-5 border border-gray-100 hover:border-[#eb3e32] transition-all duration-500 hover:shadow-2xl">
      <div className="relative aspect-square bg-gray-50 rounded-2xl mb-6 overflow-hidden flex items-center justify-center p-8 shadow-inner">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
          <button className="bg-white p-3 rounded-full shadow-md hover:bg-[#eb3e32] hover:text-white transition-colors duration-300">
            ❤️
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{product.category}</p>
        <h2 className="font-black text-lg text-gray-900 line-clamp-1 group-hover:text-[#eb3e32] transition-colors">
          {product.name}
        </h2>
        <div className="flex items-center justify-between pt-2">
          <p className="text-[#eb3e32] font-black text-xl tracking-tighter">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-gray-900 text-white p-3 px-6 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#eb3e32] transition-all duration-300 shadow-md active:scale-90"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
