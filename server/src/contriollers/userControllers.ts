import { Request, Response } from 'express';
import bcrypt from 'bcryptjs'; 
import User from '../models/user';
import { generateToken } from '../config/tocken';
import booking from '../models/booking';
import Booking from '../models/booking';

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const role = 'buyer'

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    let user;
    try {
      user = await User.create({ name, email, password: hashedPassword, role });
    } catch (err) {
      console.error('Error creating user:', err);
      return res.status(400).json({ error: 'Error creating user', details: err });
    }

    let token;
    try {
      token = generateToken(user._id.toString(), role);
      console.log('Token:', token);
    } catch (err) {
      console.error('Error generating token:', err);
      return res.status(400).json({ error: 'Token generation failed', details: err });
    }

    return res.status(201).json({
      message: 'Signup successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: role,
      },
      token,
    });

  } catch (error) {
    console.error('Outer catch - Signup error:', error);
    res.status(400).json({ error: 'Signup failed', details: error });
  }
};


export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const role = email === 'admin@gmail.com' ? 'admin' : 'user';

    let token;
    try {
      token = generateToken(user._id.toString(), role);
      console.log('Login Token:', token);
    } catch (err) {
      console.error('Token generation failed:', err);
      return res.status(400).json({ error: 'Token generation failed', details: err });
    }

    return res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: role,
      },
      token,
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(400).json({ error: 'Login failed', details: error });
  }
};


export const createBooking = async (req: Request, res: Response) => {
  try {
    const {
      fullName,
      phone,
      email,
      date,
      time,
      adults,
      children,
      message,
    } = req.body;

    if (!fullName || !phone || !email || !date || !time || !adults || !children) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    const newBooking = new Booking({
      fullName,
      phone,
      email,
      date,
      time,
      adults,
      children,
      message,
    });

    await newBooking.save();
    res.status(201).json({ message: "Booking created successfully", booking: newBooking });
  } catch (error) {
    console.error("Booking error:", error);
    res.status(400).json({ message: "Server error. Please try again." });
  }
};


export const getAllBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find().sort({ date: -1, time: -1 }); 
    res.status(200).json({ bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
};