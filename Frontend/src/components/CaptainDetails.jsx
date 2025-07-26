import React from 'react'

const CaptainDetails = () => {
    return (
        <div>
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
                    <h5 className='text-lg font-semibold'>5.4</h5>
                    <p className='text-sm text-gray-500'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className=" text-3xl mb-2 font-thin ri-speed-up-fill"></i>
                    <h5 className='text-lg font-semibold'>5.4</h5>
                    <p className='text-sm text-gray-500'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className=" text-3xl mb-2 font-thin ri-currency-fill"></i>
                    <h5 className='text-lg font-semibold'>5.4</h5>
                    <p className='text-sm text-gray-500'>Hours Online</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails
