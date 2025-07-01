import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';
import StarRating from '../components/StarRating';

const RoomDetails = () => {
	const { id } = useParams();
	const [room, setRoom] = useState(null);
	const [mainImage, setMainImage] = useState(null);
	useEffect(() => {
		const room = roomsDummyData.find(room => room._id === id)
		room && setRoom(room);
		room && setMainImage(room.images[0]);
	}, [])

	return room && (
		<div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
			<div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
				<h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name} <span>({room.roomType})</span></h1>
				<p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
			</div>
			<div className='flex items-center gap-1 mt-2'>
				<StarRating />
				<p className='ml-2'>200+ reviews</p>
			</div>
			<div className='flex items-center gap-1 text-gray-600 mt-2 text-sm'>
				<img src={assets.locationIcon} alt="location-icon" className='' />
				<span>{room.hotel.address}</span>
			</div>
			<div className='flex flex-col lg:flex-row mt-6 gap-6'>
				<div className='lg:w-1/2 w-full'>
					<img src={mainImage} alt="Room Image" className='w-full rounded-xl shadow-lg object-conver' />
				</div>
				<div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
					{room?.images.length > 1 && room.images.map((image, index) => (
						<img onClick={() => setMainImage(image)} key={index} src={image} alt='Room Image' className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-orange-500'}`} />
					))}
				</div>
			</div>
			<div className='flex flex-col md:flex-row md:justify-between mt-10'>
				<div className='flex flex-col'>
					<h1 className='text-3xl md:text-4xl font-playfair'>Experience Luxury Like Never Before</h1>
					<div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
						{room.amenities.map((item, index) => (
							<div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
								<img src={facilityIcons[item]} alt="item" className='w-5 h-5' />
								<p className='text-xs'>{item}</p>
							</div>
						))}
					</div>
				</div>
				<p className='text-2xl font-medium'>${room.pricePerNight} /night</p>
			</div>
			<form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 w-full max-w-7xl'>
				{/* Colonne gauche : inputs + bouton */}
				<div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 flex-1 text-gray-500'>
					<div className='flex flex-col'>
						<label htmlFor="checkInDate" className='font-medium'>Check-In</label>
						<input type="date" id='checkInDate' placeholder='Check-In' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' />
					</div>
					<div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
					<div className='flex flex-col'>
						<label htmlFor="checkOutDate" className='font-medium'>Check-Out</label>
						<input type="date" id='checkOutDate' placeholder='Check-Out' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' />
					</div>
					<div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
					<div className='flex flex-col'>
						<label htmlFor="guests" className='font-medium'>Guests</label>
						<input type="number" id='guests' placeholder='0' className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
					</div>
					<button type='submit' className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-10 py-3 md:py-4 text-base cursor-pointer'>
						Check Availability
					</button>
				</div>
				{/* Colonne droite : localisation */}
				<div className="hidden md:flex flex-col items-end min-w-[220px] ml-10">
					<p className="font-medium text-gray-800 mb-2">Location</p>
					<div className="flex items-center gap-2 text-gray-600 mb-4">
						<img src={assets.locationIcon} alt="location-icon" className="w-6 h-6" />
						<span>{room.hotel.address}</span>
					</div>
				</div>
			</form>
			<div className='mt-25 space-y-4'>
				{roomCommonData.map((spec, index) => (
					<div key={index} className='flex items-start gap-2'>
						<img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5' />
						<div>
							<p className='text-base'>{spec.title}</p>
							<p className='text-gray-500'>{spec.description}</p>
						</div>
					</div>
				))}
			</div>
			<div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
				<p>Guests will be allocated on the ground floor according to availability. You get a comfortable two bedroom apartment has a tru city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact prince for groups. The guests will be allocated ground floor according to availability. You get the confortable two bedroom apartment that has a true city feeling.</p>
			</div>
			<div className='flex flex-col items-start gap-4'>
				<div className='flex gap-4'>
					<img src={assets.rivageLogo} alt="Host" className='h-14 w-14' />
					<div>
						<p className='text-lg md:text-xl'>Hosted by {room.hotel.name}</p>
						<div className='flex items-center mt-1'>
							<StarRating />
							<p className='ml-2'>200+ reviews</p>
						</div>
					</div>
				</div>
				<button className='px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer'>Contact Now</button>
			</div>
		</div>
	)
}

export default RoomDetails
