import type { NextPage } from 'next'

const FlightCard = (props: { flight: { airway: any; departure: any; time: any; arival: any; cost: any; }; })=>{
    const {airway,departure,time,arival,cost} = props.flight;
    return(
        <div className='flex border-0 cursor-pointer m-6 rounded-3xl bg-black bg-opacity-60 text-white hover:bg-opacity-40'>
            <div className='w-64 text-center m-[0.876rem]'>
                <div>Airway</div>
                <div>{airway}</div>
            </div>
            <div className='w-64 text-center m-[0.876rem]'>
                <div>{departure}</div>
                <div>Chennai</div>
            </div>
            <div className='w-64 text-center m-[0.876rem]'>
                <div>{time}</div>
                <div> -------------------------{'>'} </div>
            </div>
            <div className='w-64 text-center m-[0.876rem]'>
                <div>{arival}</div>
                <div>Bangalore</div>
            </div>
            <div className='w-64 text-center m-[0.876rem]'>
                {cost}
            </div>
        </div>
    )
}
export default FlightCard;