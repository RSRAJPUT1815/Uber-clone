import React from 'react'

const Home = () => {
  return (
    <div className='h-screen flex pt-4  justify-between w-full flex-col bg-red-400 '>
      <img src="./Uber-logo.png" alt="Uber-logo" className='w-16 ml-8' />
      <div className='bg-white py-5 px-10'>
        <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
        <button className='w-full bg-black text-white py-3 rounded mt-2'>Continue</button>
      </div>
    </div>
  )
}

export default Home
