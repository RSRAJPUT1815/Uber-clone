import React from 'react'
import { Link } from 'react-router-dom';

const CaptainHome = () => {
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
                    <div className='flex items-center justify-between'>
                        <div className='flex justify-start items-center gap-4'>
                            <img className='w-24 h-24 rounded-full object-cover ' src="images.jpg" alt="Driver" />
                            <h4 className='text-lg font-medium'>RSKING</h4>
                        </div>
                        <div>
                            <h4 className='text-xl font-semibold'>₹297.45</h4>
                            <p className='text-sm  text-gray-400'>Earned</p>
                        </div>
                    </div>
                    <div className='flex items-start bg-gray-100 p-3 mt-6 rounded-xl justify-center gap-5 '>
                        <div className='text-center'>
                            <i className=" text-3xl mb-2 font-thin ri-time-line"></i>
                            <h5  className='text-lg font-semibold'>5.4</h5>
                            <p className='text-sm text-gray-500'>Hours Online</p>
                        </div>
                        <div className='text-center'>
                            <i className=" text-3xl mb-2 font-thin ri-speed-up-fill"></i>
                            <h5  className='text-lg font-semibold'>5.4</h5>
                            <p className='text-sm text-gray-500'>Hours Online</p>
                        </div>
                        <div className='text-center'>
                            <i className=" text-3xl mb-2 font-thin ri-currency-fill"></i>
                            <h5  className='text-lg font-semibold'>5.4</h5>
                            <p className='text-sm text-gray-500'>Hours Online</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CaptainHome
