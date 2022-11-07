import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';

function services() {

    const [service, setService] = useState('')

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
                <div className="w-1/2">
                    <div className="flex items-center">
                        <ChevronLeftOutlinedIcon onClick={() => setService("")} fontSize="large" className="cursor-pointer text-white mr-4 mt-1"/>
                        <h1 className="text-4xl text-center font-semibold text-white">Give</h1>
                    </div>
                    <Paper className="flex p-8 flex-col gap-8 mt-4">
                            <TextField id="outlined-basic" label="Weight Occupied" variant="outlined" />
                            <Button variant="text"><h1 className="text-center text-green-500">Recieve 14 MATIC</h1></Button>
                    </Paper>
                </div>
                : 
                <div className="w-1/2">
                    <div className="flex items-center">
                        <ChevronLeftOutlinedIcon onClick={() => setService("")} fontSize="large" className="cursor-pointer text-white mr-4 mt-1"/>
                        <h1 className="text-4xl text-center font-semibold text-white">Take</h1>
                    </div>
                    <div className="max-h-[40rem] overflow-y-scroll">
                        <Paper className="flex p-8 justify-between mt-4 cursor-pointer">
                            <h1 className="text-xl font-semibold">6Kg</h1>
                            <h1 className="text-xl text-red-500">14 MATIC</h1>
                            <Button variant="text" className="text-green-500">Accept</Button>
                        </Paper>
                        <Paper className="flex p-8 justify-between mt-4 cursor-pointer">
                            <h1 className="text-xl font-semibold">6Kg</h1>
                            <h1 className="text-xl text-red-500">14 MATIC</h1>
                            <Button variant="text" className="text-green-500">Accept</Button>
                        </Paper>
                        <Paper className="flex p-8 justify-between mt-4 cursor-pointer">
                            <h1 className="text-xl font-semibold">6Kg</h1>
                            <h1 className="text-xl text-red-500">14 MATIC</h1>
                            <Button variant="text" className="text-green-500">Accept</Button>
                        </Paper>
                        <Paper className="flex p-8 justify-between mt-4 cursor-pointer">
                            <h1 className="text-xl font-semibold">6Kg</h1>
                            <h1 className="text-xl text-red-500">14 MATIC</h1>
                            <Button variant="text" className="text-green-500">Accept</Button>
                        </Paper>
                    </div>
                </div>
            }
        </div>
    )
}

export default services