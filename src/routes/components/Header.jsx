import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-25 border-b border-gray-300">
      <div className="max-w-300 h-[inherit] mx-auto flex items-center justify-between">
        <div className="text-2xl font-semibold">LOGO</div>
        <nav className="flex gap-3.5 ">
          <Link to="/" className="text-lg py-2 px-4 font-medium">
            Home
          </Link>
          <Link to="/shop" className="text-lg py-2 px-4 font-medium">
            Shop
          </Link>
          <Link to="/dashboard" className="text-lg py-2 px-4 font-medium">
            Dashboard
          </Link>
          <Link to="/cart" className="text-lg py-2 px-4 font-medium">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
