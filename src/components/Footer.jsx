import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          <div>
            <h5 className="font-bold text-lg mb-6 uppercase tracking-wider text-gray-900">Contact Us</h5>
            <div className="text-gray-500 text-sm space-y-3 leading-relaxed">
              <p className="font-bold text-gray-800">Drou Demo Store</p>
              <p>No, 12345 Freedom, New York, United States</p>
              <p className="text-[#eb3e32] font-black text-lg">+92-315 6784 322</p>
              <p className="hover:text-[#eb3e32] cursor-pointer transition">demo@exampledemo.com</p>
            </div>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-6 uppercase tracking-wider text-gray-900">Information</h5>
            <ul className="text-gray-500 text-sm space-y-4">
              <li className="hover:text-[#eb3e32] cursor-pointer transition">Product Support</li>
              <li className="hover:text-[#eb3e32] cursor-pointer transition">Checkout</li>
              <li className="hover:text-[#eb3e32] cursor-pointer transition">License Policy</li>
              <li className="hover:text-[#eb3e32] cursor-pointer transition">Affiliate</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-6 uppercase tracking-wider text-gray-900">Customer Service</h5>
            <ul className="text-gray-500 text-sm space-y-4">
              <li className="hover:text-[#eb3e32] cursor-pointer transition">Help Center</li>
              <li className="hover:text-[#eb3e32] cursor-pointer transition">Redeem Voucher</li>
              <li className="hover:text-[#eb3e32] cursor-pointer transition">Contact Us</li>
              <li className="hover:text-[#eb3e32] cursor-pointer transition">Policies & Rules</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-6 uppercase tracking-wider text-gray-900">Download Our App</h5>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">Download our App & get extra <strong className="text-[#eb3e32]">20% Discount</strong> on your first Order...!</p>
            <div className="flex space-x-4 justify-center md:justify-start">
               <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10 cursor-pointer hover:opacity-80 transition" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10 cursor-pointer hover:opacity-80 transition" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-[10px] md:text-xs">
           <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-[#eb3e32] font-black italic">d</div>
              <p>Copyright © <span className="text-gray-600 font-bold">Team90Degree</span> | Built with Drou by Team90Degree.</p>
           </div>
           <div className="flex space-x-6 items-center grayscale hover:grayscale-0 transition duration-500">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-4" />
           </div>
        </div>
      </div>
    </footer>
  );
}
