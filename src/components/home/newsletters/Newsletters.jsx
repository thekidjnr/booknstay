import React from "react";

const Newsletters = () => {
  return (
    <div className="bg-secondary">
      <section className="w-11/12 m-auto mt-28 py-10 text-white text-center">
        <div>
          <h1 className="text-4xl font-medium  ">
            Sign Up for Our Newsletters
          </h1>
          <h2 className="font-light text-lg mt-2">
            Get updated with exclusive listings and offers through your mail
          </h2>
          <div className="mt-6 bg-white p-6 w-2/3 m-auto flex justify-between">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="text-xl w-2/3 h-12 text-black"
            />
            <button className="btn-main bg-black px-2">Get Listed</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletters;
