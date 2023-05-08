import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="mx-auto container flex justify-center gap-10 items-center bg-purple-100 py-8">
      <div>
        <h1 className="text-purple-700 text-4xl">Coffee Store</h1>
      </div>
      <div className="flex gap-5 items-center  text-purple-700 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/addCoffee">AddCoffee</Link>
        <Link to="/updateCoffee">UpdateCoffee</Link>
      </div>
    </div>
  );
};

export default Header;
