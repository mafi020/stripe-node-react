import { stripe } from '../config/stripe.js';

const StripeController = {
  getBalance: async (req, res, next) => {
    const balance = await stripe.balance.retrieve();
    res.json(balance);
  },
};

export default StripeController;
