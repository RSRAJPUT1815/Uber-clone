import React from 'react'

const Home = () => {
  return (
    <div className='relative h-screen w-screen'>
      <img src="uber.png" alt="uber-logo" className='w-28 absolute left-3 top-4' />
      <div>
        <img src="uber-car-map.webp" alt="temp" className=' w-full ' />
      </div>
      <div className='bg-white absolute top-10  h-screen p-5 rounded-t-3xl shadow-lg w-full'>
        <div className='h-[30%]'>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form className='flex flex-col gap-4 p-4 w-full'>
            <input type="text" placeholder='Add a pick-up location' className='w-full border-none outline-none px-4 text-xl font-semibold py-4 rounded-xl bg-[#e4e3e3]' />
            <input type="text" placeholder='Enter your destination' className='w-full border-none outline-none px-4 text-xl font-semibold py-4 rounded-xl bg-[#e4e3e3]' />
          </form>
        </div>
        <div className='h-[70%] bg-red-500'>

        </div>
      </div>
    </div>
  )
}

export default Home
