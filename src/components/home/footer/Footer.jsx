import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter, BsPinterest } from "react-icons/bs";

const footer = () => {
  return (
    <section>
      <div className="text-center my-10">
        <h1 className="text-xl">Checkout Our Socials</h1>
        <div className="flex justify-center gap-10 mt-3 text-2xl">
          <BsFacebook />
          <BsLinkedin />
          <BsTwitter />
          <BsPinterest />
        </div>
      </div>
    </section>
  );
};

export default footer;
