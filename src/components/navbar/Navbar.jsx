import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <main className="bg-secondary py-4 ">
      <div className="flex items-center justify-between text-white w-11/12 m-auto">
        <h1 className="font-logo text-2xl font-bold">
          <Link to="/">BookNStay</Link>
        </h1>
        <div className="flex gap-5">
          <button className="btn-sec border-white w-24">Login</button>
          <button className="btn-main bg-white text-secondary w-24">
            Register
          </button>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
