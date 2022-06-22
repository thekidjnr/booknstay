import React from "react";
import list from "../../../photos/home/list.png";

const List = () => {
  return (
    <section className="w-11/12 m-auto mt-28 flex justify-around items-center gap-5">
      <div className="w-2/5">
        <img src={list} alt="" className="w-full" />
      </div>
      <div className="w-1/2">
        <h1 className="text-2xl font-medium text-primary ">
          List Your Property
        </h1>
        <h2 className="font-roboto text-3xl font-semibold mt-2 ">
          Would you want to get your property listed on our space?
        </h2>
        <p className="text-xl font-light mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius cras
          morbi laoreet sit dictumst. Gravida ultricies mi netus est vulputate
          pharetra lorem eget ut.
        </p>
        <button className="bg-gradient-to-r from-primary to-primarylight text-lg p-0.5 mt-5 border-none drop-shadow-lg">
          <button className="bg-white text-black  font-medium p-2 border-none">
            Get Started
          </button>
        </button>
      </div>
    </section>
  );
};

export default List;
