import React, { useState, useMemo } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/useCart";

const Shop = () => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState(2000);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        const matchesPrice = product.price <= priceRange;
        return matchesSearch && matchesCategory && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === "low-high") return a.price - b.price;
        if (sortBy === "high-low") return b.price - a.price;
        return 0;
      });
  }, [searchTerm, selectedCategory, sortBy, priceRange]);

  return (
    <div className="bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 space-y-12 shrink-0">
            <div>
              <h3 className="font-black text-xl mb-6 text-gray-900 border-b-2 border-[#eb3e32] inline-block pr-4">Search</h3>
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full border border-gray-200 p-3 pl-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#eb3e32] transition group-hover:border-[#eb3e32]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#eb3e32]">🔍</span>
              </div>
            </div>

            <div>
              <h3 className="font-black text-xl mb-6 text-gray-900 border-b-2 border-[#eb3e32] inline-block pr-4">Categories</h3>
              <div className="space-y-4">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="appearance-none w-5 h-5 border-2 border-gray-200 rounded-full checked:border-[#eb3e32] transition duration-300"
                      />
                      <div className={`absolute w-2.5 h-2.5 rounded-full transition duration-300 ${selectedCategory === cat ? 'bg-[#eb3e32] scale-100' : 'bg-transparent scale-0'}`}></div>
                    </div>
                    <span className={`text-sm font-bold transition duration-300 ${selectedCategory === cat ? "text-[#eb3e32]" : "text-gray-500 group-hover:text-gray-800"}`}>
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-black text-xl text-gray-900 border-b-2 border-[#eb3e32] inline-block pr-4">Price</h3>
                <span className="text-[#eb3e32] font-black">${priceRange}</span>
              </div>
              <input
                type="range"
                min="0"
                max="2000"
                step="50"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#eb3e32]"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-bold mt-2 uppercase tracking-tighter">
                <span>$0</span>
                <span>$2000</span>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 pb-6 border-b border-gray-100">
              <p className="text-gray-400 font-bold text-sm uppercase tracking-widest">
                <span className="text-gray-900">{filteredProducts.length}</span> Products found
              </p>
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <span className="text-xs font-black text-gray-400 uppercase tracking-tighter shrink-0">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="flex-1 sm:flex-none border border-gray-200 p-2 px-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#eb3e32] text-sm font-bold text-gray-700 bg-white cursor-pointer"
                >
                  <option value="default">Default</option>
                  <option value="low-high">Price: Low to High</option>
                  <option value="high-low">Price: High to Low</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
              </div>
            ) : (
              <div className="text-center py-32 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                <div className="text-6xl mb-6">🔍</div>
                <h2 className="text-2xl font-black text-gray-900 mb-2">No results found</h2>
                <p className="text-gray-500">Try adjusting your filters or search term.</p>
                <button
                  onClick={() => { setSearchTerm(""); setSelectedCategory("All"); setPriceRange(2000); }}
                  className="mt-8 text-[#eb3e32] font-black hover:underline underline-offset-4 uppercase tracking-widest text-sm"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;
