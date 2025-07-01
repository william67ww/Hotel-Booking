import React from 'react'
import Tittle from './Tittle'
import { assets, exclusiveOffers } from '../assets/assets'

const ExclusiveOffers = () => {
  return (
    <section className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-24 bg-slate-50">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
        <Tittle
          align="left"
          tittle="Exclusive Offers"
          subTittle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
        />
        <button className="group flex items-center gap-2 font-medium cursor-pointer bg-black text-white px-5 py-2 rounded-full shadow hover:bg-gray-800 transition-all max-md:mt-8">
          View All Exclusive Offers
          <img src={assets.arrowIcon} alt="arrow-icon" className="group-hover:translate-x-1 transition-all" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 w-full">
        {exclusiveOffers.map((items) => (
          <div
            key={items._id}
            className="group relative flex flex-col justify-between min-h-[300px] rounded-2xl overflow-hidden shadow-lg bg-cover bg-center transition-transform hover:scale-[1.025] w-full"
            style={{
              backgroundImage: `url(${items.image})`,
            }}
          >
            <p className="px-4 py-1 absolute top-5 left-5 text-xs bg-white/90 text-gray-800 font-semibold rounded-full shadow">
              {items.priceOff}% OFF
            </p>
            <div className="flex flex-col gap-2 p-8 pt-20 text-white">
              <p className="text-2xl font-bold font-playfair">{items.title}</p>
              <p className="text-base opacity-90">{items.description}</p>
              <p className="text-lg font-medium font-playfair mt-4">Expires {items.expiryDate}</p>
            </div>
            <div className="flex justify-end p-6">
              <button className="flex items-center gap-2 font-medium cursor-pointer bg-white/90 text-gray-900 px-4 py-2 rounded-full shadow hover:bg-white transition-all">
                View Offers
                <img className="invert-0 group-hover:translate-x-1 transition-all" src={assets.arrowIcon} alt="arrow-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExclusiveOffers