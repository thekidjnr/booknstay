import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { BsFillPersonFill } from "react-icons/bs";
import { BiCalendar, BiSearchAlt2 } from "react-icons/bi";
import Options from "../options/Options";

//CALENDAR
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Filter = () => {
  const [destination, setDestination] = useState("");

  const [travelers, setTravelers] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [openTravelers, setOpenTravelers] = useState(false);

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/hotels", {
      state: { destination, startDate, endDate, travelers },
    });
  };

  return (
    <section className="-mt-12 w-9/12 m-auto bg-white rounded-md py-5 shadow-xl">
      <div className="flex justify-around items-center relative">
        <div className="flex items-center gap-1">
          <span className="text-primary">
            <GoLocation className="" />
          </span>
          <div className="flex flex-col w-52">
            <h1 className="text-xl text-primary">Destination</h1>
            <input
              type="text"
              className="text-lg font-light p w-"
              placeholder="Where are you going?"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-primary ">
            <BsFillPersonFill />
          </span>
          <div className="relative">
            <div className="flex flex-col">
              <h1 className="text-xl text-primary">Travelers</h1>
              <span
                className="text-lg font-light p text-gray-400 pointer"
                onClick={() => setOpenTravelers(!openTravelers)}
              >
                {`Adult: ${travelers.adult} | Children: ${travelers.children} | Rooms: ${travelers.room}  `}
              </span>
            </div>
            {openTravelers && (
              <>
                <Options travelers={travelers} setTravelers={setTravelers} />
              </>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3 overflow-hidden">
          <span className="text-primary">
            <BiCalendar />
          </span>
          <div className="flex flex-col">
            <h1 className="text-xl text-primary">Check in</h1>
            <span className="text-lg font-light p text-gray-400">
              <DatePicker
                selected={startDate}
                onChange={(startDate) => setStartDate(startDate)}
                minDate={new Date()}
                placeholderText="Start Date"
                className="w-28"
              />
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-primary">
            <BiCalendar />
          </span>
          <div className="flex flex-col">
            <h1 className="text-xl text-primary">Check Out</h1>
            <span className="text-lg font-light p text-gray-400">
              <DatePicker
                selected={endDate}
                onChange={(endDate) => setEndDate(endDate)}
                minDate={startDate}
                placeholderText="End Date"
                className="w-28"
              />
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="text-white bg-primary p-1.5 rounded-md"
            onClick={handleSearch}
          >
            <BiSearchAlt2 />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Filter;
