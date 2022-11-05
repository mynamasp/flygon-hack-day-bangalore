import type { NextPage } from 'next'
import DateCard from '../components/DateCard';
import FlightCard from '../components/FlightCard'

const fl = [
    {airway:'Koii Airlines',departure:'17:40',time:'2hrs',arival:'19:40',cost:'0.4 Eth'},
    {airway:'W3B Airlines',departure:'15:30',time:'2hrs',arival:'17:30',cost:'0.3 Eth'},
    {airway:'CodeChef Jet',departure:'19:00',time:'2hrs',arival:'21:00',cost:'0.4 Eth'},
    {airway:'Astara',departure:'21:00',time:'2hrs 40mins',arival:'23:40',cost:'0.2 Eth'},
    {airway:'Astara',departure:'20:00',time:'3hrs 40mins',arival:'23:40',cost:'0.5 Eth'},
    {airway:'Astara',departure:'20:15',time:'2hrs 15mins',arival:'22:30',cost:'0.3 Eth'},
    {airway:'Astara',departure:'12:30',time:'2hrs',arival:'14:30',cost:'0.3 Eth'},
    
]

const month = "Nov";

const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13];

const RenderList: any = fl.map((flight)=>{
    return(
        <FlightCard flight={flight}></FlightCard>
    );
});

const RenderDates: any = dates.map((date)=>{
    return(
        <DateCard date={date} month={month}></DateCard>
    );
});

const Flights: NextPage = () => {
    const date = 6;
    const month = "Nov";
    return(
        <div id="mainpart" className='flex bg-gradient-to-r from-indigo-900 via-purple-500 to-pink-500'>
            <div id="sidebar" className='pr-4 pl-1 border-r-1'>
                    {RenderDates}
                </div>
            <div id="lowersec" className='flex flex-col mt-14 ml-6'>
                <div id="info" className='flex justify-center mt-18 mb-14 ml-6 border-4 rounded-3xl'>
                    <div className='border-0 w-[24.8%] h-44 text-center flex flex-col items-center justify-center rounded-tl-2xl rounded-bl-2xl'>
                        <div className='font-bold text-3xl'>From</div>
                        <div className='text-xl'>Chennai, India</div>
                    </div>
                    <div className='border-0 w-[24.8%] h-44 text-center flex flex-col items-center justify-center '>
                        <div className='font-bold text-3xl'>To</div>
                        <div className='text-xl'>Bengalore, India</div>
                    </div>
                    <div className='border-0 w-[24.8%] h-44 text-center flex flex-col items-center justify-center '>
                        <div className='font-bold text-3xl'>Departure</div>
                        <div className='text-xl'>Friday, November 6th 2022</div>
                    </div>
                    <div className='border-0 w-[24.8%] h-44 text-center flex flex-col items-center justify-center rounded-tr-2xl rounded-br-2xl'>
                        <div className='font-bold text-3xl'>Pasengers & Class</div>
                        <div className='text-xl'>2 Adults, Economy</div>
                    </div>
                </div>
                <div id="flightlist" className=' ml-8'>
                    {RenderList}
                </div>
            </div>
        </div>
    )
}

export default Flights