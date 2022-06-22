import React from "react";
import { GoTriangleRight } from "react-icons/go";
import tourImg from "../../../photos/home/tourImg.png";
import { AiFillStar } from "react-icons/ai";

const Tour = () => {
  return (
    <section className="w-11/12 m-auto mt-16">
      <header className="flex justify-between">
        <div className="">
          <h1 className="text-primary font-medium text-2xl">
            Favorite Tour Destinations
          </h1>
          <h2 className="font-light text-xl">
            Most Popular and Exciting Tour Locations
          </h2>
        </div>
        <button className="border-2 border-primary  flex items-center justify-center text-primary p-2 text-lg h-12">
          Explore All
          <span>
            <GoTriangleRight />
          </span>
        </button>
      </header>
      <main className="flex justify-between mt-10 gap-10">
        <div className="relative bg-gradient-to-t from-black h-2.6 w-2/6 overflow-hidden rounded-xl">
          <img
            src={tourImg}
            alt=""
            className="mix-blend-overlay w-full h-full object-cover"
          />
          <div className="absolute text-white top-3 right-3 flex items-center gap-1 bg-primary px-2 py-1 text-xl rounded-md">
            <span>
              <AiFillStar />
            </span>
            <h1>9.8</h1>
          </div>
          <div className="p-5">
            <h1 className="absolute bottom-28 text-white font-regular text-2xl">
              Elmina Castle
            </h1>
            <p className="absolute -mt-32  text-white font-light text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              cras morbi laoreet sit...ssss
            </p>
          </div>
        </div>
        <div className="relative bg-gradient-to-t from-black h-2.6 w-2/6 overflow-hidden rounded-xl">
          <img
            src={tourImg}
            alt=""
            className="mix-blend-overlay w-full h-full object-cover"
          />
          <div className="p-5">
            <h1 className="absolute bottom-28 text-white font-regular text-2xl">
              Elmina Castle
            </h1>
            <p className="absolute -mt-32 text-white font-light text-lg wfull">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              cras morbi laoreet sit...wsdxds
            </p>
          </div>
        </div>
        <div className="relative bg-gradient-to-t from-black h-2.6 w-2/6 overflow-hidden rounded-xl">
          <img
            src={tourImg}
            alt=""
            className="mix-blend-overlay w-full h-full object-cover"
          />
          <div className="p-5">
            <h1 className="absolute bottom-28  text-white font-regular text-2xl">
              Elmina Castle
            </h1>
            <p className="absolute -mt-32  text-white font-light text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              cras morbi laoreet sit...sssss
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Tour;
