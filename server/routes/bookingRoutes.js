import express from 'express';
import {
    checkAvailabilityAPI,
    createBooking,
    getHotelBookings,
    getUserBookings,
} from '../controllers/bookingController.js';
import { protect } from '../middleware/authMiddleware.js';

const bookingRouter = express.Router();

bookingRouter.post('/check-availability', checkAvailabilityAPI);
bookingRouter.post('/book', protect, createBooking);
bookingRouter.get('/user', protect, getHotelBookings);
bookingRouter.get('/hotel', protect, getUserBookings);

export default bookingRouter;