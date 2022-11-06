import DateCard from "../components/DateCard.js";
import FlightCard from "../components/FlightCard";
import Header from "../components/Header";

const fl = [
  {
    airway: "Koii Airlines",
    departure: "17:40",
    time: "2hrs",
    arival: "19:40",
    cost: "0.4 Eth",
  },
  {
    airway: "W3B Airlines",
    departure: "15:30",
    time: "2hrs",
    arival: "17:30",
    cost: "0.3 Eth",
  },
  {
    airway: "CodeChef Jet",
    departure: "19:00",
    time: "2hrs",
    arival: "21:00",
    cost: "0.4 Eth",
  },
  {
    airway: "Astara",
    departure: "21:00",
    time: "2hrs 40mins",
    arival: "23:40",
    cost: "0.2 Eth",
  },
  {
    airway: "Astara",
    departure: "20:00",
    time: "3hrs 40mins",
    arival: "23:40",
    cost: "0.5 Eth",
  },
  {
    airway: "Astara",
    departure: "20:15",
    time: "2hrs 15mins",
    arival: "22:30",
    cost: "0.3 Eth",
  },
  {
    airway: "Astara",
    departure: "12:30",
    time: "2hrs",
    arival: "14:30",
    cost: "0.3 Eth",
  },
];

const month = "Nov";

const dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const RenderDates = dates.map((date) => {
  return <DateCard date={date} month={month}></DateCard>;
});

const Flights = () => {
  const date = 6;
  const month = "Nov";
  return (
    <>
      <Header />
      <div className="flex h-full p-5 pt-20 bg-gradient-to-r from-indigo-900 via-purple-500 to-pink-500">
        <div className="flex w-screen justify-between">
          <div className="flex flex-col space-y-2 mt-20 fixed">
            <div className="bg-white/50 border-2 w-52 flex flex-col p-3 justify-center cursor-pointer rounded-2xl hover:bg-white hover:bg-opacity-20">
              <p className="text-sm font-semibold">FROM</p>
              <p className="text-2xl font-bold">MAA</p>
              <p className="text-xs">Chennai International Airport</p>
            </div>
            <div className="bg-white/50 border-2 w-52 flex flex-col p-3 justify-center cursor-pointer rounded-2xl hover:bg-white hover:bg-opacity-20">
              <p className="text-sm font-semibold">TO</p>
              <p className="text-2xl font-bold">BLR</p>
              <p className="text-xs">Bangalore International Airport</p>
            </div>
            <div className="bg-white/50 border-2 w-52 flex flex-col p-3 justify-center cursor-pointer rounded-2xl hover:bg-white hover:bg-opacity-20">
              <p className="text-sm font-semibold">Departure</p>
              <p className="text-2xl font-bold">6 Nov, 2022</p>
              <p className="text-xs">Sunday</p>
            </div>
            <div className="bg-white/50 border-2 w-52 flex flex-col p-3 justify-center cursor-pointer rounded-2xl hover:bg-white hover:bg-opacity-20">
              <p className="text-sm font-semibold">Travellers</p>
              <p className="text-2xl font-bold">1</p>
              <p className="text-xs">Economy/Premium Economy</p>
            </div>
          </div>
          <div className="space-y-5 px-20 mx-auto py-10">
            {fl.map((flight) => {
              return <FlightCard flight={flight}></FlightCard>;
            })}
          </div>
          <div id="sidebar" className="border-r-1 fixed right-5">
            {RenderDates}
          </div>
        </div>
      </div>
    </>
  );
};

export default Flights;
