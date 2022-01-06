// import https from 'https';
import fs from 'fs';

import { config } from 'dotenv';
import express from 'express';

import stripeRouter from './routes/stripe.route.js';

config();

const app = express();

app.use(stripeRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

// const server = https.createServer(
//   {
//     key: fs.readFileSync('./key.pem'),
//     cert: fs.readFileSync('./cert.pem'),
//   },
//   app
// );

// server.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });
