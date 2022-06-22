import React from "react";
import { GoTriangleRight } from "react-icons/go";
import propertyImg from "../../../photos/home/property.png";
const Properties = () => {
  return (
    <section className="w-11/12 m-auto mt-24">
      <header className="flex justify-between">
        <div className="">
          <h1 className="text-primary font-medium text-2xl">
            Search by Properties
          </h1>
          <h2 className="font-light text-xl">
            Filter through your specific property of interest
          </h2>
        </div>
        <button className="border-2 border-primary  flex items-center justify-center text-primary p-2 text-lg h-12">
          Explore All
          <span>
            <GoTriangleRight />
          </span>
        </button>
      </header>
      <main className="flex gap-2 justify-between mt-8">
        <div className="">
          <div className="w-full object-cover rounded-md overflow-hidden">
            <img src={propertyImg} alt="" />
          </div>
          <div className="mt-2">
            <h1 className="text-2xl font-semibold">Hotels</h1>
            <p className="text-lg font-light">543 hotels</p>
          </div>
        </div>
        <div className="">
          <div className="w-full object-cover rounded-md overflow-hidden">
            <img src={propertyImg} alt="" />
          </div>
          <div className="mt-2">
            <h1 className="text-2xl font-semibold">Hotels</h1>
            <p className="text-lg font-light">543 hotels</p>
          </div>
        </div>
        <div className="">
          <div className="w-full object-cover rounded-md overflow-hidden">
            <img src={propertyImg} alt="" />
          </div>
          <div className="mt-2">
            <h1 className="text-2xl font-semibold">Hotels</h1>
            <p className="text-lg font-light">543 hotels</p>
          </div>
        </div>
        <div className="">
          <div className="w-full object-cover rounded-md overflow-hidden">
            <img src={propertyImg} alt="" />
          </div>
          <div className="mt-2">
            <h1 className="text-2xl font-semibold">Hotels</h1>
            <p className="text-lg font-light">543 hotels</p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Properties;
