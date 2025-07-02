import Hotel from "../models/Hotel.js";
import { v2 as cloudinary } from "cloudinary";
import Room from "../models/Rooms.js";
import { populate } from "dotenv";

export const createRoom = async (req, res) => {
    try {
        const {roomType, princePerNight, amenities} =req.body;
        const hotel = await Hotel.findOne({owner: req.auth.userId})

        if (!hotel)
            return res.json ({success: false, message: "Hotel not found"});

        const uploadImages = req.files.map(async (file) => {
            const response = await cloudinary.uploader.upload(file.path);
            return response.secure_url;
        })
        const images = await Promise.all(uploadImages)
        await Room.create({
            hotel: hotel._id,
            roomType,
            princePerNight: +princePerNight,
            amenities: JSON.parse(amenities),
            images,
        })
        res.json({success: true, message: "Room created successfully!"})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const getRooms = async (req, res) => {
    try {
        const rooms =await Room.find({isAvailable: true}).populate({
            path: 'hotel',
            populate: {
                path: 'owner',
                select: 'image'
            }
        }).sort({createdAt: -1})
        res.json({success: true, rooms});
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const getOwnerRooms = async (req, res) => {
    try {
        const hotelData = await Hotel({owner: req.auth.userId})
        const rooms = await Room.find({hotel: hotelData._id.toString()}).populate("hotel");
        res.json({success: true, rooms});
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const toogleRoomAvailability = async (req, res) => {
    try {
        const {roomId} = req.body;
        const roomData = await Room.findById(roomId);
        roomData.isAvailable = !roomData.isAvailable;
        await roomData.save();
        res.json({success: true, message: "Room availability Updated"});
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}