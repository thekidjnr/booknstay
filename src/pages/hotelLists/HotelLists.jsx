import React from "react";
import { GoLocation } from "react-icons/go";
import { BsFillPersonFill, BsFillStarFill } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import Navbar from "../../components/navbar/Navbar";
import hotelLists from "../../photos/home/hotellists.png";

const HotelLists = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-between gap-16 w-11/12 m-auto mt-10 relative">
        <main className="w-1/4 h-fit bg-secondary text-white p-4 rounded-md sticky top-0">
          <div>
            <h1 className="text-xl font-semibold">Filter Search</h1>
            <div>
              <div className="mt-4">
                <h1 className="text-lg">Destination</h1>
                <div className="flex mt-1 items-center gap-2 bg-white text-secondary">
                  <GoLocation />
                  <input
                    type="text"
                    placeholder="Where are You Going?"
                    className="placeholder:text-secondary text-lg font-light w-60 py-2"
                  />
                </div>
              </div>
              <div className="mt-4">
                <h1 className="text-lg">Check-in-Date</h1>
                <div className="flex mt-1 items-center gap-2 bg-white text-secondary">
                  <BiCalendar />
                  <span
                    type="text"
                    className="text-secondary text-base font-light
                    w-60 py-2"
                  >
                    Check-In
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <h1 className="text-lg">Check-Out-Date</h1>
                <div className="flex mt-1 items-center gap-2 bg-white text-secondary">
                  <BiCalendar />
                  <span
                    type="text"
                    className="text-secondary text-base font-light
                    w-60 py-2"
                  >
                    Check-Out
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <h1 className="text-lg font-semibold">Options</h1>
                  <div className="flex justify-between mt-1 items-center gap-2 mb-4  text-white">
                    <span className="text-base ">Min-Price/night</span>
                    <input
                      type="number"
                      className="w-14 text-black text-lg text-center
                      "
                      min={0}
                    />
                  </div>
                  <div className="flex justify-between mt-1 items-center gap-2 mb-4  text-white">
                    <span className="text-base ">Max-Price/night</span>
                    <input
                      type="number"
                      className="w-14 text-black text-lg text-center
                      "
                      min={0}
                    />
                  </div>
                  <div className="flex justify-between mt-1 items-center gap-2 mb-4  text-white">
                    <span className="text-base ">Adult</span>
                    <input
                      type="number"
                      className="w-14 text-black text-lg text-center
                      "
                      min={1}
                    />
                  </div>
                  <div className="flex justify-between mt-1 items-center gap-2 mb-4  text-white">
                    <span className="text-base ">Children</span>
                    <input
                      type="number"
                      className="w-14 text-black text-lg text-center
                      "
                      min={0}
                    />
                  </div>
                  <div className="flex justify-between mt-1 items-center gap-2  text-white">
                    <span className="text-base ">Room</span>
                    <input
                      type="number"
                      className="w-14 text-black text-lg text-center"
                      min={1}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="border-2 text-2xl font-light py-2 w-full mt-7 ">
              Search
            </button>
          </div>
        </main>
        <div className="w-3/4 h-fit">
          <aside className=" flex gap-5  p-6 bg-secondary text-white">
            <img src={hotelLists} alt="" />
            <div className="flex-1 ">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-2xl">Kempinksi Hotel</h1>
                  <h2 className="font-light text-base">Accra, Ghana</h2>
                </div>
                <div className="flex gap-8">
                  <h2 className="text-xl font-light">Good</h2>
                  <div className="flex gap-1 text-xl items-center h-fit">
                    <BsFillStarFill className="text-base" />
                    <h3 className="font-light text-xl">9.8</h3>
                  </div>
                </div>
              </div>
              <p className="font-light text-base mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                cras morbi laoreet sit dictumst. Gravida ultricies mi netus est
                vulputate pharetra lorem eget ut.{" "}
              </p>
              <div className="text-end mt-2">
                <span className="">$200</span>
                <p className="font-light text-lg">Includes Taxes and Fees</p>
                <button className="bg-white p-2 text-lg text-primary mt-2">
                  Check Availability
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default HotelLists;
