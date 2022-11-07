import { AiOutlineArrowRight } from "react-icons/ai";
import {useRouter} from "next/router"

const FlightCard = (props) => {
  const { airway, departure, time, arival, cost } = props.flight;
  const router= useRouter();

  return (
    <div className="mt-10 w-[50rem]">
      <div className="flex justify-between items-center border-0 cursor-pointer rounded-3xl p-7 bg-black/60 text-white hover:bg-opacity-40">
        <div className="">
          <p className="text-sm font-semibold">Airway</p>
          <p className="text-xl font-bold">{airway}</p>
        </div>
        <div className="]">
          <div className="text-sm font-semibold">{departure}</div>
          <div className="text-xl font-bold">Chennai</div>
        </div>
        <div className=" text-center">
          <div className="font-semibold text-sm">{time}</div>
          <div className="flex flex-col items-center">
            <AiOutlineArrowRight />
          </div>
        </div>
        <div className="">
          <div className="text-sm font-semibold">{arival}</div>
          <div className="text-xl font-bold">Bangalore</div>
        </div>
        <div className="">
          <p className="inline px-2 py-1 font-bold rounded-md bg-green-700">
            {cost}
          </p>
        </div>
        <button onClick={() => router.push({
                pathname: '/passenger',
                // query: { ...res.data.data.user, user },
            })} className="px-4 py-1 rounded-md md:hover:bg-red-500 bg-red-600">
          Book Now
        </button>
      </div>
    </div>
  );
};
export default FlightCard;
