import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehilePanal from '../components/VehilePanal';
import SelectedVehicle from '../components/SelectedVehicle';
import WaitingForDriver from '../components/WaitingForDriver';
import LookingForDriver from '../components/LookingForDriver';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panalRef = useRef(null);
  const [vehilePanal, setVehilePanal] = useState(false);
  const vehilepanalRef = useRef(null)
  const [SVP, setSVP] = useState(false);
  const SVPRef = useRef(null)
  const [LFD, setLFD] = useState(false);
  const LFDRef = useRef(null)

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
  useGSAP(function () {
    if (vehilePanal) {
      gsap.to(vehilepanalRef.current, {
        transform: 'translateY(0)'

      });
    } else {
      gsap.to(vehilepanalRef.current, {
        transform: 'translateY(100%)'
      });
    }
  }, [vehilePanal]);
  useGSAP(function () {
    if (SVP) {
      gsap.to(SVPRef.current, {
        transform: 'translateY(0)'

      });
    } else {
      gsap.to(SVPRef.current, {
        transform: 'translateY(100%)'
      });
    }
  }, [SVP]);
  useGSAP(function () {
    if (LFD) {
      gsap.to(LFDRef.current, {
        transform: 'translateY(0)'

      });
    } else {
      gsap.to(LFDRef.current, {
        transform: 'translateY(100%)'
      });
    }
  }, [LFD]);

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
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehilePanal={setVehilePanal} />
        </div>
      </div>
      <div ref={vehilepanalRef} className='fixed z-10 bottom-0 translate-y-full bg-white  w-full  px-4 py-6 '>
        <VehilePanal setVehilePanal={setVehilePanal} vehilePanal={vehilePanal} setSVP={setSVP} />
      </div>
      <div ref={SVPRef} className='fixed z-10 bottom-0 translate-y-full bg-white  w-full  px-4 py-6 '>
        <SelectedVehicle setSVP={setSVP} SVP={SVP} setLFD={setLFD} />
      </div>
      <div ref={LFDRef} className='fixed z-10 bottom-0 translate-y-full bg-white  w-full  px-4 py-6 '>
        <LookingForDriver setLFD={setLFD} LFD={LFD}/>
      </div>
    </div>
  )
}

export default Home
