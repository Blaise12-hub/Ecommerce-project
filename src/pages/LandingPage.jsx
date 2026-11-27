import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function LandingPage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-gray-50">
        {/* Left Content */}
        <div className="max-w-lg">
          <p className="text-[#eb3e32] font-semibold mb-2">
            SALE UP TO 30% OFF
          </p>
          <h2 className="text-4xl font-bold mb-4">
            Apple Watch Series
          </h2>
          <p className="text-gray-600 mb-6">
            Featured packed at a better value than over powerful sensors
            to monitor your fitness
          </p>

          <Button
            component={Link}
            to="/shop"
            variant="contained"
            color="primary"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: '9999px',
              fontSize: '14px',
              fontWeight: 700,
            }}
          >
            Shop Now →
          </Button>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1544117518-30df578096a4?q=80&w=600&auto=format&fit=crop"
            alt="Apple Watch"
            className="w-[400px] h-[300px] object-cover rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Category Section */}
      <section className="px-10 py-12 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {[
            { name: "iPhone", img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=200&auto=format&fit=crop" },
            { name: "Mini Speakers", img: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=200&auto=format&fit=crop" },
            { name: "iPad", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=200&auto=format&fit=crop" },
            { name: "Headphones", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=200&auto=format&fit=crop" },
            { name: "Laptop", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=200&auto=format&fit=crop" },
            { name: "Accessories", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=200&auto=format&fit=crop" }
          ].map((cat, i) => (
            <div key={i} className="flex flex-col items-center p-4 border border-gray-100 rounded-lg hover:shadow-md transition cursor-pointer">
              <img src={cat.img} alt={cat.name} className="w-20 h-20 object-contain mb-3" />
              <span className="font-medium text-sm">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Dual Banner Section */}
      <section className="px-10 py-12 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Banner 1 */}
          <div className="bg-white p-8 rounded-xl flex items-center justify-between shadow-sm">
            <div>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Security Smart Camera</p>
              <h3 className="text-2xl font-bold mb-4">Just Starting at $850</h3>
              <Button
                component={Link}
                to="/shop"
                variant="contained"
                color="primary"
                size="small"
                sx={{
                  borderRadius: '9999px',
                  fontWeight: 600,
                  textTransform: 'none',
                }}
              >
                Shop Now
              </Button>
            </div>
            <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=200&auto=format&fit=crop" alt="Camera" className="w-32 h-32 object-cover rounded-lg" />
          </div>
          {/* Banner 2 */}
          <div className="bg-white p-8 rounded-xl flex items-center justify-between shadow-sm">
            <div>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">Entertainment & Games</p>
              <h3 className="text-2xl font-bold mb-4">Just Starting at $450</h3>
              <Button
                component={Link}
                to="/shop"
                variant="contained"
                color="primary"
                size="small"
                sx={{
                  borderRadius: '9999px',
                  fontWeight: 600,
                  textTransform: 'none',
                }}
              >
                Shop Now
              </Button>
            </div>
            <img src="https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=200&auto=format&fit=crop" alt="Controller" className="w-32 h-32 object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="px-10 py-16 bg-white border-b border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-4xl mb-4">📦</div>
            <h4 className="font-bold text-lg mb-2">Free Delivery</h4>
            <p className="text-gray-500 text-sm">And free returns. See checkout for delivery date.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">💰</div>
            <h4 className="font-bold text-lg mb-2">Pay monthly at 0% APR</h4>
            <p className="text-gray-500 text-sm">Choose to checkout with Apple Card monthly installments.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🎨</div>
            <h4 className="font-bold text-lg mb-2">Personalize it</h4>
            <p className="text-gray-500 text-sm">Engrave your device with your name or a personal note.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
