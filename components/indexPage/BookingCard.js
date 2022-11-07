import React from "react";
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";
import { BsFillCalendarDateFill, BsPersonLinesFill } from "react-icons/bs";
import { TextField } from "@mui/material";
import { useRouter } from "next/router";

const BookingCard = (props) => {
  const router = useRouter();
  return (
    <>
      <div className="w-screen flex pt-[10rem]">
        <div className="w-3/8 space-x-3 mx-auto bg-white p-5 rounded-lg flex justify-evenly items-stretch">
          <div className="flex flex-col">
            <div className="flex flex-row space-x-5">
              <div className="border md:hover:scale-125 bg-white ease-out duration-200 h-[10rem] flex flex-row items-center space-x-3 rounded-md p-4">
                <MdFlightTakeoff className="w-10 h-10 text-gray-600" />
                <div className="flex flex-col items-start justify-between">
                  <p className="text-md font-semibold text-gray-600">FROM</p>
                  <TextField id="standard-basic" variant="standard" />
                  <p className="text-sm italic text-gray-500 mt-3 font-semibold">
                    Eg: Chennai, International Airport
                  </p>
                </div>
              </div>
              <div className="border md:hover:scale-125 bg-white ease-out duration-200 h-[10rem] flex items-center space-x-3 rounded-md p-4">
                <MdFlightLand className="w-10 h-10 text-gray-600" />
                <div className="flex flex-col items-start justify-between">
                  <p className="text-md font-semibold text-gray-600">TO</p>
                  <TextField id="standard-basic" variant="standard" />
                  <p className="text-sm italic mt-3 text-gray-500 font-semibold">
                    Eg: Bangalore, International Airport
                  </p>
                </div>
              </div>
              <div className="border md:hover:scale-125 bg-white ease-out duration-200 h-[10rem] flex items-center space-x-3 rounded-md p-4">
                <BsFillCalendarDateFill className="w-10 h-10 text-gray-600" />
                <div className="flex flex-col items-start justify-between">
                  <p className="text-md font-semibold text-gray-600">
                    Departure
                  </p>
                  <p className="text-2xl font-bold">6 Nov 2022</p>
                  <p className="text-xs text-gray-600 font-semibold">Sunday</p>
                </div>
              </div>
              <div className="border md:hover:scale-125 bg-white ease-out duration-200 h-[10rem] flex items-center space-x-3 rounded-md p-4">
                <BsPersonLinesFill className="w-10 h-10 text-gray-600" />
                <div className="flex flex-col items-start justify-between">
                  <p className="text-md font-semibold text-gray-600">
                    Travellers
                  </p>
                  <p className="text-xl font-bold">2 Traveller</p>
                  <p className="text-sm text-gray-600 font-semibold">
                    Economy/Premium Economy
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-5"></div>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center mt-5">
        <button
          onClick={() => router.push("/search")}
          className="px-6 py-3 duration-300 ease-out md:hover:scale-75 rounded-lg text-white font-bold inline bg-black/40"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default BookingCard;
