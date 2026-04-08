import React from "react";

export default function Footer() {
  return (
    <footer className="px-10 pt-16 pb-8 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <h5 className="font-bold text-lg mb-6">Contact Us</h5>
          <div className="text-gray-500 text-sm space-y-2">
            <p>Drou Demo Store</p>
            <p>No, 12345 Freedom, New York</p>
            <p>United States</p>
            <p className="text-indigo-600 font-bold">+92-315 6784 322</p>
            <p>demo@exampledemo.com</p>
          </div>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-6">Information</h5>
          <ul className="text-gray-500 text-sm space-y-3">
            <li className="hover:text-indigo-600 cursor-pointer transition">Product Support</li>
            <li className="hover:text-indigo-600 cursor-pointer transition">Checkout</li>
            <li className="hover:text-indigo-600 cursor-pointer transition">License Policy</li>
            <li className="hover:text-indigo-600 cursor-pointer transition">Affiliate</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-6">Customer Service</h5>
          <ul className="text-gray-500 text-sm space-y-3">
            <li className="hover:text-indigo-600 cursor-pointer transition">Help Center</li>
            <li className="hover:text-indigo-600 cursor-pointer transition">Redeem Voucher</li>
            <li className="hover:text-indigo-600 cursor-pointer transition">Contact Us</li>
            <li className="hover:text-indigo-600 cursor-pointer transition">Policies & Rules</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-6">Download Our App</h5>
          <p className="text-gray-500 text-sm mb-6">Download our App & get extra 20% Discount on your first Order...!</p>
          <div className="flex space-x-4">
             <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10 cursor-pointer" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
         <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
            <span>Copyright © Team90Degree | Built with Drou by Team90Degree.</span>
         </div>
         <div className="flex space-x-4 items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-4" />
         </div>
      </div>
    </footer>
  );
}
