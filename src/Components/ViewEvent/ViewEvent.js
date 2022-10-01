import React from "react";
import eventImage from "../../Utilities/Birthday-cake.png";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ViewEvent = () => {
  return (
    <div className="grid grid-cola-1 lg:grid-cols-2 justify-center">
      <div className="order-2 lg:order-1 mt-10 lg:mt-0">
        <div className="mb-10 lg:mb-14">
          <h1 className="first-last text-3xl md:text-5xl">Birthday Bash</h1>
          <h6>
            Hosted by <span className="font-bold">Elysia</span>
          </h6>
        </div>
        <div className="flex gap-3 mb-8">
          <IoCalendarOutline className="text-4xl bg-white border-2 p-1.5 text-indigo-500 rounded-md" />
          <div>
            <p className="font-bold text-sm">18 August 6:00PM</p>
            <p>
              to <span className="font-bold text-sm">19 August 1:00PM </span>{" "}
              UTC + 10
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <IoLocationOutline className="text-4xl bg-white border-2 p-1.5 text-indigo-500 rounded-md" />
          <div>
            <p className="font-bold text-sm">Street name</p>
            <p>Suburb, State, Postcode</p>
          </div>
        </div>
        <Link
          to="/edit"
          className="font-bold max-w-xs rounded-md my-4 py-3 btn-css"
        >
          Edit Event
        </Link>
      </div>
      <div className="order-1 lg:order-2">
        <img src={eventImage} alt="" />
      </div>
    </div>
  );
};

export default ViewEvent;
