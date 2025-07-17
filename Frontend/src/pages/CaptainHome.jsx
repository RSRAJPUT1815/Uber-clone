import React from 'react'

const CaptainHome = () => {
  return (
<>
<div className="min-h-screen bg-gray-100 flex flex-col">
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Captain Dashboard</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Logout
        </button>
    </header>
    <main className="flex-grow p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white shadow-md rounded-md p-4">
                <h2 className="text-lg font-semibold text-gray-800">Current Ride</h2>
                <p className="text-gray-600 mt-2">No active rides at the moment.</p>
            </div>
            <div className="bg-white shadow-md rounded-md p-4">
                <h2 className="text-lg font-semibold text-gray-800">Earnings</h2>
                <p className="text-gray-600 mt-2">$0.00</p>
            </div>
            <div className="bg-white shadow-md rounded-md p-4">
                <h2 className="text-lg font-semibold text-gray-800">Upcoming Rides</h2>
                <p className="text-gray-600 mt-2">No upcoming rides scheduled.</p>
            </div>
        </div>
    </main>
    <footer className="bg-white shadow-md p-4 text-center">
        <p className="text-gray-600">© 2023 Uber Clone. All rights reserved.</p>
    </footer>
</div>
</>
  )
}

export default CaptainHome
