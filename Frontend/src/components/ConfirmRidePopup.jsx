import React from 'react'

const ConfirmRidePopup = (props) => {
    return (
        <div className='h-screen pt-12  '>
            <h5 className='absolute top-16 right-4 text-3xl ' onClick={() => props.setConfirmRidePopups(false)} >
                <i className="ri-close-circle-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold text-black mb-5'>Confirm  Ride to start!</h3>
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
                            <h4 className="text-md font-semibold text-black leading-tight">562/11-A</h4>
                            <p className="text-sm text-gray-600">Kankariya Talab , Ahmedabad</p>
                        </div>

                    </div>
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
                <button className='bg-green-700 text-white px-4 py-2 w-full rounded-md font-semibold text-lg ml-4'>
                    Confirm
                </button>
                <button className='bg-red-500 text-white px-4 py-2 w-full rounded-md font-semibold text-lg ml-4' onClick={() => props.setConfirmRidePopups(false)}>
                    Cancel
                </button>
            </div>


        </div>
    )
}

export default ConfirmRidePopup
