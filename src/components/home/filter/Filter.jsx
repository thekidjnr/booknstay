import { useState } from "react";
import { GoLocation } from "react-icons/go";
import { BsFillPersonFill } from "react-icons/bs";
import { BiCalendar, BiSearchAlt2 } from "react-icons/bi";

const Filter = () => {
  return (
    <section className="-mt-12 w-9/12 m-auto bg-white rounded-md py-5 shadow-xl">
      <div className="flex justify-around items-center relative">
        <div className="flex items-center gap-1">
          <span className="text-primary">
            <GoLocation className="" />
          </span>
          <div className="flex flex-col">
            <h1 className="text-xl text-primary">Destination</h1>
            <input
              type="text"
              className="text-lg font-light p"
              placeholder="Where are you going?"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-primary ">
            <BsFillPersonFill />
          </span>
          <div className="flex flex-col">
            <h1 className="text-xl text-primary">Travelers</h1>
            <span className="text-lg font-light p text-gray-400">
              Add Guests
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 overflow-hidden">
          <span className="text-primary">
            <BiCalendar />
          </span>
          <div className="flex flex-col">
            <h1 className="text-xl text-primary">Check in</h1>
            <span className="text-lg font-light p text-gray-400">Check in</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-primary">
            <BiCalendar />
          </span>
          <div className="flex flex-col">
            <h1 className="text-xl text-primary">Check Out</h1>
            <span className="text-lg font-light p text-gray-400">
              Check Out
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-white bg-primary p-1.5 rounded-md">
            <BiSearchAlt2 />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Filter;
