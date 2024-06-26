import express from 'express';


import mongoose from 'mongoose';
import dotenv from 'dotenv';

import seedRouter from './routes/seedroutes.js';
import productroutes from './routes/productroutes.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use('/api/seed', seedRouter);
app.use('/api/products', productroutes);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});