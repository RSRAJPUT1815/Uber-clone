import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';
import RidePopup from '../components/RidePopup';
import ConfirmRidePopup from '../components/ConfirmRidePopup';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CaptainHome = () => {
    const [RidePopups, setRidePopups] = useState(true);
    const RidePopupRef = useRef(null)
    const [ConfirmRidePopups, setConfirmRidePopups] = useState(false);
    const ConfirmRidePopupRef = useRef(null)

    useGSAP(function () {
        if (RidePopups) {
            gsap.to(RidePopupRef.current, {
                transform: 'translateY(0%)'

            });
        } else {
            gsap.to(RidePopupRef.current, {
                transform: 'translateY(100%)'
            });
        }
    }, [RidePopups]);
    useGSAP(function () {
        if (ConfirmRidePopups) {
            gsap.to(ConfirmRidePopupRef.current, {
                transform: 'translateY(0%)'

            });
        } else {
            gsap.to(ConfirmRidePopupRef.current, {
                transform: 'translateY(100%)'
            });
        }
    }, [ConfirmRidePopups]);
    return (
        <>
            <div className='h-screen  overflow-hidden relative'>
                <div className='fixed flex justify-between items-center w-full px-4 pt-3' >
                    <img src="./Uber-logo.png" alt="uber-logo" className='w-16' />
                    <Link to={"/captain-logout"} className=' bg-white rounded-full p-2 '>
                        <i className="ri-logout-box-r-line text-2xl font-bold"></i>
                    </Link>
                </div>
                <div className='h-3/5 overflow-hidden'>
                    <img src="uber-car-map.webp" alt="temp" className=' w-full ' />
                </div>
                <div className='h-2/5 p-4'>
                    <CaptainDetails />
                </div>
                <div ref={RidePopupRef} className='fixed z-10 translate-y-full bottom-0  bg-white  w-full  px-4 py-6 '>
                    <RidePopup setRidePopups={setRidePopups} setConfirmRidePopups={setConfirmRidePopups} />
                </div>
                <div ref={ConfirmRidePopupRef} className='fixed z-10 translate-y-full bottom-0  bg-white  w-full  px-4 py-6 '>
                    <ConfirmRidePopup setConfirmRidePopups={setConfirmRidePopups} />
                </div>
            </div>
        </>
    )
}

export default CaptainHome
