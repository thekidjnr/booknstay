import React from "react";
import reviewImg from "../../../photos/home/review.png";
import quotation from "../../../photos/home/quotation.png";

const Reviews = () => {
  return (
    <section className="w-11/12 m-auto mt-28 ">
      <header className="text-2xl font-semibold">
        What Our Travelers are saying...
      </header>
      <main className="flex justify-around gap-5">
        <div className="relative w-2/5 mt-8">
          <img src={quotation} alt="" className="absolute right-0" />
          <div className="flex items-center gap-5 mt-16">
            <div>
              <img src={reviewImg} alt="" />
            </div>
            <div>
              <h1 className="text-xl font-semibold leading-8">
                Michael Odjidja
              </h1>
              <h2 className="text-lg font-light leading-3">Accra, Ghana</h2>
            </div>
          </div>
          <p className=" mt-5 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius cras
            morbi laoreet sit dictumst. Gravida ultricies mi netus est{" "}
          </p>
        </div>
        <div className="relative w-2/5 mt-8">
          <img src={quotation} alt="" className="absolute right-0" />
          <div className="flex items-center gap-5 mt-16">
            <div>
              <img src={reviewImg} alt="" />
            </div>
            <div>
              <h1 className="text-xl font-semibold leading-8">
                Michael Odjidja
              </h1>
              <h2 className="text-lg font-light leading-3">Accra, Ghana</h2>
            </div>
          </div>
          <p className=" mt-5 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius cras
            morbi laoreet sit dictumst. Gravida ultricies mi netus est
          </p>
        </div>
      </main>
    </section>
  );
};

export default Reviews;
