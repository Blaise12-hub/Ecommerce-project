import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-indigo-600 text-white">
      <div>
        <Link to="/" className="mr-4 hover:underline">Home</Link>
        <Link to="/shop" className="hover:underline">Shop</Link>
      </div>
      <Link to="/cart" className="hover:underline">Cart</Link>
    </nav>
  );
}