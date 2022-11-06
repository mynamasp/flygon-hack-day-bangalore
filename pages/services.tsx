import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

function services() {

    const [service, setService] = useState('give')

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
            {
                service === ""?
                    <>
                        <h1 className="text-4xl font-semibold text-white">Service Required</h1>
                        <div className="flex gap-8">
                            <Paper onClick={() => setService("give")} className="w-56 h-56 flex justify-center items-center cursor-pointer transition hover:scale-110 duration-300 ease-in-out delay-150" variant="outlined">
                                <h1 className="text-2xl font-semibold">Give</h1>
                            </Paper>
                            <Paper onClick={() => setService("take")} className="w-56 h-56 flex justify-center items-center cursor-pointer transition hover:scale-110 duration-300 ease-in-out delay-150" variant="outlined">
                                <h1 className="text-2xl font-semibold">Take</h1>
                            </Paper>
                        </div>
                    </>
                : service === "give" ?
                <div>
                    <h1 className="text-4xl text-center font-semibold text-white">Give</h1>
                        <Paper className="flex p-8 flex-col gap-8 mt-4">
                                <TextField id="outlined-basic" label="Weight Occupied" variant="outlined" />
                                <h1 className="text-center text-green-500">ETH number</h1>
                        </Paper>
                </div>
                : 
                <div></div>
            }
        </div>
    )
}

export default services