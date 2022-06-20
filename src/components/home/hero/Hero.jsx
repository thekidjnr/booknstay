import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-heroImage bg-cover bg-right h-screen ">
      <div className="w-11/12 m-auto">
        <nav className="pt-5">
          <div className="flex justify-between items-center m-auto text-white">
            <h1 className="font-logo text-2xl font-bold">
              <Link to="/">BookNStay</Link>
            </h1>
            <ul className="flex justify-around text-xl gap-14">
              <li>
                <Link to="/">Ghana</Link>
              </li>
              <li>
                <Link to="/">Tours</Link>
              </li>
              <li>
                <Link to="/">Properties</Link>
              </li>
              <li>
                <Link to="/">List Your Property</Link>
              </li>
              <li>
                <Link to="/">Reviews</Link>
              </li>
            </ul>
            <div className="flex gap-5">
              <button className="btn-sec border-primary w-28">Login</button>
              <button className="btn-main bg-primary w-28">Register</button>
            </div>
          </div>
        </nav>
        <div className="flex flex-col justify-center text-white mt-52 font-header">
          <h2 className="text-5xl leading-tight">
            Looking to expose yourself <br /> to the comfort possibilities of
            Ghana?
          </h2>
          <h1 className="text-6xl font-bold pt-3">Surf this Spaces</h1>
          <button className="btn-sec w-32 mt-6">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
