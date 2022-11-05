import type { NextPage } from 'next'

const DateCard = (props: { date: any; month: any; }) => {
    const date = props.date;
    const month = props.month;
    return(
        <div className='border-2 w-52 h-20 text-center flex flex-col items-center justify-center cursor-pointer bg-white bg-opacity-50 mb-2 mt-2 rounded-2xl hover:bg-white hover:bg-opacity-20'>{/*Inner Section */}
            <div className='font-bold w-28 text-2xl'>{(date)+month}</div>
            <div className='w-28'>0.2 Eth</div>
        </div>
    )
}

export default DateCard