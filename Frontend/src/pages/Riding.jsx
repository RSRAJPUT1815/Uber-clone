import React from 'react'
import { Link } from 'react-router-dom';

const Riding = () => {
    return (
        <div className='h-screen overflow-hidden'>
            <div className='w-full relative'>
                <Link to={"/home"} className='absolute top-4 right-4  bg-white rounded-full p-2 '>
                    <i className="ri-home-fill text-2xl font-bold"></i>
                </Link>
            </div>
            <div className='h-1/2 overflow-hidden'>
                <img src="uber-car-map.webp" alt="temp" className=' w-full ' />
            </div>
            <div className='h-1/2 bg-white flex flex-col justify-between items-center overflow-y-auto mt-2'>
                <div className='flex items-center justify-between gap-4 w-full mb-2 px-4 py-2'>
                    <img src="UberX.webp" alt="ubercar" className='w-36' />
                    <div className='flex flex-col items-end justify-center gap-2 w-full'>
                        <h2 className='font-bold text-xl'>Rohit Singh</h2>
                        <h4 className='font-semibold text-2xl '>RJ 18 O 8920</h4>
                        <p className='text-gray-600 font-semibold'>Maruti Suzuki Alto</p>
                    </div>

                </div>

                <div className='flex items-center justify-between gap-4 flex-col mb-2 px-4 py-2'>

                    <div className='w-full flex justify-between items-center flex-col gap-4'>
                        <div className='flex gap-4 border-2 p-3 rounded-xl w-full border-black items-start mt-4'>
                            <h5 className="text-2xl bg-[#eee] p-3 rounded-full">
                                <i className="ri-map-pin-line"></i>
                            </h5>
                            <div>
                                <h4 className="text-md font-semibold text-black leading-tight">562/11-A</h4>
                                <p className="text-sm text-gray-600">Kankariya Talab , Ahmedabad</p>
                            </div>

                        </div>

                        <div className='flex gap-4 border-2 p-3 rounded-xl w-full border-black items-start mt-4'>
                            <h5 className="text-2xl bg-[#eee] p-3 rounded-full">
                                <i className="ri-currency-line"></i>
                            </h5>
                            <div className='flex justify-center items-center '>
                                <h4 className="text-3xl font-bold text-black "> ₹ 193.20</h4>
                            </div>

                        </div>
                    </div>
                    <button className='bg-green-700 w-full text-white px-4 py-2 rounded-md font-semibold text-lg ml-4'>
                        Make a Payment
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Riding
