import React from "react";
import { GoTriangleRight } from "react-icons/go";
import exploreImg from "../../../photos/home/exploreImg.png";

const Explore = () => {
  return (
    <section className="w-11/12 m-auto mt-16">
      <header className="flex justify-between">
        <div className="">
          <h1 className="text-primary font-medium text-2xl">Explore Ghana</h1>
          <h2 className="font-light text-xl">
            The Go-to Regions for Most People
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
        <div className="relative bg-gradient-to-t from-black h-96 w-2/4">
          <img
            src={exploreImg}
            alt=""
            className="mix-blend-overlay w-full h-full object-cover"
          />
          <h1 className="absolute bottom-1 left-5 text-white font-semibold ">
            Greater Accra
          </h1>
        </div>
        <div className="relative bg-gradient-to-t from-black h-96 w-2/4">
          <img
            src={exploreImg}
            alt=""
            className="mix-blend-overlay  w-full h-full object-cover"
          />
          <h1 className="absolute bottom-1 left-5 text-white font-semibold ">
            Eastern Region
          </h1>
        </div>
      </main>
      <aside className="flex justify-between gap-10 mt-10">
        <div className="relative bg-gradient-to-t from-black h-60">
          <img
            src={exploreImg}
            alt=""
            className="mix-blend-overlay w-full h-full object-cover"
          />
          <h1 className="absolute bottom-1 left-5 text-white font-semibold ">
            Central Region
          </h1>
        </div>
        <div className="relative bg-gradient-to-t from-black h-60 w-1/2">
          <img
            src={exploreImg}
            alt=""
            className="mix-blend-overlay w-full h-full object-cover"
          />
          <h1 className="absolute bottom-1 left-5 text-white font-semibold ">
            Ashanti Region
          </h1>
        </div>
        <div className="relative bg-gradient-to-t from-black h-60">
          <img
            src={exploreImg}
            alt=""
            className="mix-blend-overlay w-full h-full object-cover"
          />
          <h1 className="absolute bottom-1 left-5 text-white font-semibold ">
            Brong Ahafo Region
          </h1>
        </div>
      </aside>
    </section>
  );
};

export default Explore;
