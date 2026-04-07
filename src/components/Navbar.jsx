import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-black text-white">
      <Link to="/">Shop</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}