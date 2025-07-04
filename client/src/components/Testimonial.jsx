import { testimonials } from '../assets/assets'
import StarRating from './StarRating'
import Tittle from './Tittle'
import React from 'react'

const Testimonial = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-20'>
      <Tittle tittle='What Our Guest Say ?' subTittle="Discover why discerning travelers consistently QuiqkStay for their exclusive and luxurious accommodations around the world."/>
      <div className="flex flex-wrap items-center gap-6 mt-20 mb-20">
                {testimonials.map((testimonials) => (
                    <div key={testimonials.id} className="bg-white p-6 rounded-xl shadow">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonials.image} alt={testimonials.name} />
                            <div>
                                <p className="font-playfair text-xl">{testimonials.name}</p>
                                <p className="text-gray-500">{testimonials.address}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            <StarRating />
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4">"{testimonials.review}"</p>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Testimonial