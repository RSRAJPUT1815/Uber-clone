import React from 'react'

const VehilePanal = (props) => {
  return (
    <div>
      <h5 className='absolute top-4 right-4 text-3xl' onClick={() => props.setVehilePanal(false)}>
        <i className="ri-close-circle-line"></i>
        </h5>
        <h3 className='text-2xl font-semibold text-black mb-5'>Choose your ride</h3>
        <div onClick={() => (props.setSVP(true), props.setVehilePanal(false))} className='flex items-center justify-between mb-2  active:border-black  border-4 rounded-xl  px-4 py-2'>
          <img src="UberX.webp" alt="ubercar" className='w-28' />
          <div className='w-44 '>
            <h4 className='font-semibold text-lg'>UberGO <span><i className="ri-user-fill"></i> 4 </span></h4>
            <h5 className='font-medium text-sm'>2 min away</h5>
            <p className='text-xs font-normal text-gray-800'>Affordable , compect rides</p>
          </div>
          <h2 className='font-semibold text-xl  '>₹193.20</h2>
        </div>
        <div className='flex items-center justify-between mb-2  active:border-black border-4 rounded-xl  px-4 py-2'>
          <img src="Uber-bike.webp" alt="ubercar" className='w-28' />
          <div className='w-44 '>
            <h4 className='font-semibold text-lg'>UberGO <span><i className="ri-user-fill"></i> 1 </span></h4>
            <h5 className='font-medium text-sm'>3 min away</h5>
            <p className='text-xs font-normal text-gray-800'>Affordable , motorcycle rides</p>
          </div>
          <h2 className='font-semibold text-xl  '>₹66.17</h2>
        </div>
        <div className='flex items-center justify-between mb-2  active:border-black border-4 rounded-xl  px-4 py-2'>
          <img src="Uber-auto.webp" alt="ubercar" className='w-28' />
          <div className=' w-44'>
            <h4 className='font-semibold text-lg'>UberGO <span><i className="ri-user-fill"></i> 2 </span></h4>
            <h5 className='font-medium text-sm'>4 min away</h5>
            <p className='text-xs font-normal text-gray-800'>Affordable , Auto rides</p>
          </div>
          <h2 className='font-semibold text-xl  '>₹186.15</h2>
        </div>
    </div>
  )
}

export default VehilePanal
