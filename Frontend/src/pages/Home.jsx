import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='h-screen bg-center bg-cover bg-[url(./trafficlight-inline.webp)] flex pt-4  justify-between w-full flex-col  '>
      <img src="./uber.png" alt="Uber-logo" className='w-16 ml-8' />
      <div className='bg-white py-5 pb-6 px-10'>
        <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
        <Link to={"/login"} className='w-full flex text-xl font-semibold justify-center bg-black text-white py-3 rounded mt-2'>Continue</Link>
      </div>
    </div>
  )
}

export default Home
