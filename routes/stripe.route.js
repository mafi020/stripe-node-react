import express from 'express';

const router = express.Router();

import StripeController from '../controllers/stripe.controller.js';

router.get('/balance', StripeController.getBalance);

export default router;
