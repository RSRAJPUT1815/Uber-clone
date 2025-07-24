import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div className=''>
      <h5 className='absolute top-4 right-4 text-3xl ' onClick={() => props.setWFD(false)}>
        <i className="ri-close-circle-line"></i>
      </h5>
      <h3 className='text-2xl font-semibold text-black mb-5'>Waiting for Driver</h3>
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
              <i className="ri-map-pin-user-line"></i>
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
      </div>


    </div>
  )
}

export default WaitingForDriver
