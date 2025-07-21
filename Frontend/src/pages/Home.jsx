import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panalRef = useRef(null);

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panalRef.current, {
        height: '70%'

      });
    } else {
      gsap.to(panalRef.current, {
        height: '0%'
      });
    }
  }, [panelOpen]);

  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      <img src="uber.png" alt="uber-logo" className='w-28 absolute left-3 top-4' />
      <div>
        <img src="uber-car-map.webp" alt="temp" className=' w-full ' />
      </div>
      <div className='  absolute top-0  h-screen  w-full flex flex-col justify-end'>
        <div className='h-[30%] relative bg-white rounded-t-3xl pt-4 px-3'>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form className='flex flex-col  gap-4 p-4 w-full' onSubmit={(e) => e.preventDefault()}>
            <h5 className='absolute top-4 right-4 text-3xl' onClick={() => setPanelOpen(!panelOpen)}>
              {panelOpen ? <i className="ri-arrow-down-s-line"></i> : <i className="ri-arrow-up-s-line"></i>}
            </h5>
            <div className='h-28 w-1 bg-gray-900 absolute top-20 left-10 rounded-full '></div>
            <input type="text" onClick={() => setPanelOpen(true)} value={pickup} onChange={(e) => { setPickup(e.target.value) }} placeholder='Add a pick-up location' className='w-full border-none outline-none px-4 pl-7 text-xl font-semibold py-4 rounded-xl bg-[#e4e3e3]' />
            <input type="text" value={destination} onClick={() => { setPanelOpen(true) }} onChange={(e) => { setDestination(e.target.value) }} placeholder='Enter your destination' className='w-full border-none outline-none px-4 pl-7 text-xl font-semibold py-4 rounded-xl bg-[#e4e3e3]' />
          </form>
        </div>
        <div ref={panalRef} className='h-[0%]  bg-white '>
          <LocationSearchPanel/>
        </div>
      </div>
      <div className='fixed z-10 bottom-0 translate-y-full bg-white  w-full  px-4 py-6 '>
        <h3 className='text-2xl font-semibold text-black mb-5'>Choose your ride</h3>
        <div className='flex items-center justify-between mb-2  active:border-black  border-4 rounded-xl  px-4 py-2'>
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
    </div>
  )
}

export default Home
