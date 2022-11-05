import React from "react";
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";

type Props = {};

const BookingCard = (props: Props) => {
  return (
    <div className="w-screen flex ">
      <div className="w-2/3 space-x-3 mx-auto bg-white p-5 rounded-md flex justify-evenly items-center">
        <div className="border flex items-center space-x-3 rounded-md p-4">
          <MdFlightTakeoff />
          <div className="flex flex-col">
            <p>FROM</p>
            <p>CHN</p>
            <p>Chennai</p>
          </div>
        </div>
        <div className="border flex items-center space-x-3 rounded-md p-4">
          <MdFlightLand />
          <div className="flex flex-col">
            <p>TO</p>
            <p>BLG</p>
            <p>Bangalore</p>
          </div>
        </div>
        <div className="border flex items-center space-x-3 rounded-md p-4">
          <div className="flex flex-col">
            <p>Departure</p>
            <p>6 Nov 2022</p>
            <p>Sunday</p>
          </div>
        </div>
        <div className="border flex items-center space-x-3 rounded-md p-4">
          <div className="flex flex-col">
            <p>Travellers</p>
            <p>1 Traveller</p>
            <p>Economy/Premium Economy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
