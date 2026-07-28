import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-25 bg-orange-200">
      <div className="w-full max-w-300 h-[inherit] bg-blue-100 mx-auto flex items-center justify-between">
        <div className="text-2xl font-semibold">LOGO</div>
        <nav className="flex gap-5">
          <Link to="/" className="text-lg font-semibold py-2 px-4">
            Home
          </Link>
          <Link to="/shop" className="text-lg font-semibold py-2 px-4">
            Shop
          </Link>
          <Link to="" className="text-lg font-semibold py-2 px-4">
            Dashboard
          </Link>
          <Link to="/cart" className="text-lg font-semibold py-2 px-4">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
