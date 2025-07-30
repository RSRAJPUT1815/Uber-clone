import React from 'react'
import { Link } from 'react-router-dom';

const FinishRide = (props) => {
    return (
        <div>
            <h5 className='absolute top-4 right-4 text-3xl' onClick={() => props.setfinishRide(false)}>
                <i className="ri-close-circle-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold text-black mb-5'>Finish  Ride</h3>
            <div className='px-3 py-4  flex items-center justify-between gap-4 w-full mb-2 bg-gray-300 rounded-lg shadow-xl'>
                <div className='flex items-center justify-between gap-4  mb-2 px-4 py-2'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1XbzgSL8vMnq5il0g6oLXIff1Cnb_Aal__A&s" alt="UserImg" className='w-16 object-cover rounded-full' />
                    <h4 className='font-semibold text-xl'>RsRoyal</h4>
                </div>
                <h3 className='font-semibold text-xl'>2.5 KM</h3>
            </div>
            <div className='flex items-center justify-between gap-4 flex-col mb-2 px-4 py-2'>

                <div className='w-full flex justify-between items-center flex-col gap-4'>
                    <div className='flex gap-4 border-2 p-3 rounded-xl w-full border-black items-start mt-4'>
                        <h5 className="text-2xl bg-[#eee] p-3 rounded-full">

                            <i className="ri-map-pin-user-line"></i>
                        </h5>
                        <div>
                        <h2 className='text-xl font-bold'>Pickup </h2>
                            <h4 className="text-md font-semibold text-black leading-tight">562/11-A</h4>
                            <p className="text-sm text-gray-600">Kankariya Talab , Ahmedabad</p>
                        </div>

                    </div>
                    <div className='flex gap-4 border-2 p-3 rounded-xl w-full border-black items-start mt-4'>
                        <h5 className="text-2xl bg-[#eee] p-3 rounded-full">
                            <i className="ri-map-pin-line"></i>
                        </h5>
                        <div>
                            <h2 className='text-xl font-bold'>Drop </h2>
                            <h4 className="text-md font-semibold text-black leading-tight">562/11-A</h4>
                            <p className="text-sm text-gray-600">Kankariya Talab , Ahmedabad</p>
                        </div>

                    </div>
                    <div className='flex gap-4 border-2 p-3 rounded-xl w-full border-black items-start mt-4'>
                        <h5 className="text-2xl bg-[#eee] p-3 rounded-full">
                            <i className="ri-currency-line"></i>
                        </h5>
                        <div className='flex justify-center items-start flex-col '>
                        <h2 className='text-xl font-bold'>Pay</h2>
                            <h4 className="text-3xl font-bold text-black "> ₹ 193.20</h4>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col gap-4 w-full mt-4'>
                        <button  className=' bg-green-700 border-green-800 border text-white px-4 py-2 w-full rounded-md font-semibold text-lg '>
                            Finish Ride
                        </button>
                    
                </div>
            </div>
        </div>
    )
}

export default FinishRide
