import React from 'react'

const Home = () => {
  return (
    <div>
      home page
      <h1 className='text-3xl font-bold'>Welcome to Uber</h1>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="w-full max-w-md bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Book your ride</h2>
          <form>
        <div className="mb-4">
          <label htmlFor="pickup" className="block text-sm font-medium text-gray-700">
            Pickup Location
          </label>
          <input
            type="text"
            id="pickup"
            name="pickup"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter pickup location"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dropoff" className="block text-sm font-medium text-gray-700">
            Dropoff Location
          </label>
          <input
            type="text"
            id="dropoff"
            name="dropoff"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter dropoff location"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Find Ride
        </button>
          </form>
        </div>
        <div className="mt-10 text-center">
          <p className="text-gray-600">Need help? <a href="#" className="text-indigo-600 hover:underline">Contact Support</a></p>
        </div>
      </div>
    </div>
  )
}

export default Home
