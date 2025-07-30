import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import FinishRide from '../components/FinishRide';

const CaptainRiding = () => {
    const [finishRide, setfinishRide] = useState(false);
    const finishRideRef = useRef(null);
    useGSAP(function () {
        if (finishRide) {
            gsap.to(finishRideRef.current, {
                transform: 'translateY(0%)'

            });
        } else {
            gsap.to(finishRideRef.current, {
                transform: 'translateY(100%)'
            });
        }
    }, [finishRide]);
    return (
        <div className='h-screen  overflow-hidden relative'>

            <div className='fixed flex justify-between items-center w-full px-4 pt-3' >
                <img src="./Uber-logo.png" alt="uber-logo" className='w-16' />
                <Link to={"/captain-logout"} className=' bg-white rounded-full p-2 '>
                    <i className="ri-logout-box-r-line text-2xl font-bold"></i>
                </Link>
            </div>
            <div className='h-4/5 overflow-hidden'>
                <img src="uber-car-map.webp" alt="temp" className=' w-full ' />
            </div>
            <div onClick={() => setfinishRide(true)} className='h-1/5 p-4 relative bg-gray-300 flex justify-center items-center gap-4'>
                <h5 className='absolute   top-4 right-4 text-3xl' onClick={() => setfinishRide(true)} >
                 <i className="ri-arrow-up-s-line"></i>
                </h5>
                <h3 className='text-center text-xl font-bold'>4 KM away</h3>
                <button className='bg-green-700 text-white px-4 py-2  rounded-md font-semibold text-lg '>Complete Ride</button>
            </div>
            <div ref={finishRideRef} className='fixed z-10 translate-y-full h-screen bottom-0  bg-white  w-full  px-4 py-6 '>
                <FinishRide setfinishRide={setfinishRide} />
            </div>


        </div>
    )
}

export default CaptainRiding
