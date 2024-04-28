import express from 'express';

const router = express.Router()

// all users routes starts from here
router.get('/', (req, res) => res.send('Hello Users'));

export default router;