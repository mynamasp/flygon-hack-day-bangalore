import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import detailsSvg from "../assets/detailsSvg.svg"
import paymentSvg from "../assets/payment.svg"
import Image from 'next/image';
import SouthIcon from '@mui/icons-material/South';
import {useRouter} from 'next/router';

const steps = ['Passenger Details', 'Payment'];

function passenger() {

    const router = useRouter()
    const [activeStep, setActiveStep] = React.useState(0);
    const [count, setCount] = useState([1,2,3])
    const [skipped, setSkipped] = React.useState(new Set());
    const [input, setInput] = React.useState({
        name: "",
        age: '',
    })

    const [details, setDetails] = React.useState()

    console.log(details)

    useEffect(() => {
        count.map((index) => {
            setDetails((prev) => {
                // @ts-ignore
                return { ...prev, [index]: {name: "", age: ""}}
            })
        })
    },[])
    
    const handleChange = (prop: string, index: number) => (e : React.ChangeEvent<HTMLInputElement>) => {
        setInput((prevInput) => {
            return { ...prevInput, [prop]: e.target.value }
        })
        setDetails((prev) => {
            // return { ...prev, [index]: {[prop]: e.target.value}}
            // @ts-ignore
            return { ...prev, [index]: {name: input.name, age:input.age}}
        })
        // setError("")
    };
    

    // @ts-ignore
    const isStepOptional = (step) => {
        return step === 1;
    };
    
    // @ts-ignore
    const isStepSkipped = (step) => {
        return skipped.has(step);
    };
    
    const handleNext = () => {
        if(input.name || input.age){
            alert("err")
        }else{
            let newSkipped = skipped;
            if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
            }
        
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setSkipped(newSkipped);
        }
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
        }
    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
        });
    };
    
    const handleReset = () => {
        router.push("/")
    };
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-3/4 h-fit bg-white rounded p-8 relative">
            <Box sx={{ width: '100%' }}>
                <div className="w-full flex justify-center">
                    <Stepper sx={{ width: '50%' }} activeStep={activeStep}>
                        {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepSkipped(index)) {
                            // @ts-ignore
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                        })}
                    </Stepper>
                </div>
                {activeStep === steps.length ? (
                    <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        Payment Successful
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Done</Button>
                    </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                    {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                    <div className="mt-8">
                        {
                            activeStep + 1 === 1 ?
                            <div className="w-full flex">
                                <div className="overflow-y-scroll w-1/2 max-h-[40rem]">
                                    {
                                        count.map((index) => (
                                            <div className="flex flex-col gap-8">
                                                <div className="flex mb-4 flex-col gap-4 w-1/2">
                                                    <h1 className="text-xl font-semibold">Enter Passenger Details {index}</h1>
                                                    <TextField onChange={handleChange('name', index)} id="outlined-basic" label="Name" variant="outlined" />
                                                    <TextField
                                                        onChange={handleChange('age', index)}
                                                        id="outlined-number"
                                                        label="Age"
                                                        type="number"
                                                        />
                                                </div>
                                            </div>
                                        ))

                                    }
                                </div>
                                <div className="w-1/2">
                                    <Image className="w-full h-full" alt={"details"} src={detailsSvg}/>
                                </div>
                            </div>
                            :
                            <div className="w-full flex">
                                <div className="overflow-y-scroll max-h-[40rem] w-1/2">
                                    <div className="mb-4">
                                        <h1>From <span className="font-semibold ml-3">Chennai, International Airport</span> <span className="ml-6">17:40</span></h1>
                                        <SouthIcon className="my-2"/>
                                        <h1 className="ml-1">To <span className="font-semibold ml-7">Bangalore, International Airport</span> <span className="ml-3">18:30</span></h1>
                                    </div>
                                    <div className="flex flex-col gap-8">
                                        <div className="flex mb-4 flex-col gap-4 w-1/2">
                                            <h1 className="text-xl font-semibold">Passenger Detail 1</h1>
                                            <h1>Name</h1>
                                            <h1>Age</h1>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-8">
                                        <div className="flex mb-4 flex-col gap-4 w-1/2">
                                            <h1 className="text-xl font-semibold">Passenger Detail 1</h1>
                                            <h1>Name</h1>
                                            <h1>Age</h1>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-8">
                                        <div className="flex mb-4 flex-col gap-4 w-1/2">
                                            <h1 className="text-xl font-semibold">Passenger Detail 1</h1>
                                            <h1>Name</h1>
                                            <h1>Age</h1>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-8">
                                        <div className="flex mb-4 flex-col gap-4 w-1/2">
                                            <h1 className="text-xl font-semibold">Passenger Detail 1</h1>
                                            <h1>Name</h1>
                                            <h1>Age</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2 flex justify-center items-center h-full">
                                    <Image className="w-3/4 h-full" alt={"details"} src={paymentSvg}/>
                                </div>
                            </div>
                        }
                    </div>
                    <div>
                        
                    </div>
                    <Box className="absolute bottom-5 right-5" sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                        >
                        Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Comfirm Payment' : 'Continue to Payment'}
                        </Button>
                    </Box>
                    </React.Fragment>
                )}
                </Box>
            </div>
        </div>
    )
}

export default passenger