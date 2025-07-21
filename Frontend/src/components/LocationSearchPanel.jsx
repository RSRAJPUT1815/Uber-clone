import React from 'react'

const LocationSearchPanel = () => {
    const locations = [
        {
            title: 'Kempegowda International Airport...',
            address: 'KIAL Rd, Devanahalli, Bengaluru, Karnataka',
        },
        {
            title: 'Phoenix Marketcity',
            address: 'Whitefield Rd, Devasandra Industrial Estate, Mahadevapura, Bengaluru, Karnataka',
        },
        {
            title: 'Salarpuria Aura Block B',
            address: 'BLOCK-B, TOUCH STONE, Chandana, Kadabesanahalli, Bengaluru, Karnataka',
        },
        {
            title: 'Sheraton Grand Bengaluru Whitefield...',
            address: 'Prestige Shantiniketan Hoodi, Whitefield, Thigalarapalya, Krishnarajapuram, Bengaluru',
        },
        {
            title: 'KSR Bengaluru City Junction (Bangalore)',
            address: 'M.G. Railway Colony, Majestic, Bengaluru, Karnataka',
        },
    ];
    return (
        <div className="w-full h-screen bg-white p-4 space-y-4">
            {/* Header */}
            <div className="flex justify-between items-center">
                <button className="border border-gray-400 px-4 py-2 rounded-md text-sm text-gray-700">
                    Leave Now ▼
                </button>
            </div>

            {/* Location List */}
            <div className="space-y-4">

                {locations.map((loc, index) => (
                    <div key={index} className="flex gap-4 border-2 p-3 rounded-xl active:border-black items-start mt-4">
                        <h5 className="text-2xl bg-[#eee] p-3 rounded-full">
                            <i className="ri-map-pin-line"></i>
                        </h5>
                        <div>
                            <h4 className="text-md font-semibold text-black leading-tight">{loc.title}</h4>
                            <p className="text-sm text-gray-600">{loc.address}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Set location link */}
            <div className="pt-4 border-t border-gray-300">
                <button className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                </button>
            </div>
        </div>
    )
}

export default LocationSearchPanel
