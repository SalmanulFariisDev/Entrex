import { Router } from 'express'
import { createBooking, login, signup } from '../contriollers/userControllers'

const router = Router()

router.post('/register', signup)
router.post('/login', login);
router.post('/book', createBooking);

export default router

