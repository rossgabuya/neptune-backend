import mongoose from 'mongoose';
import Home from './models/homeModel';

const data = [
  {
    ph: 32,
    vol: 35,
    temp: 21,
    time: new Date().toLocaleString(),
  },
  {
    ph: 43,
    vol: 66,
    temp: 64,
    time: new Date().toLocaleString(),
  },
  {
    ph: 4,
    vol: 54,
    temp: 19,
    time: new Date().toLocaleString(),
  },
  {
    ph: 36,
    vol: 25,
    temp: 63,
    time: new Date().toLocaleString(),
  }
];

// Connect to MongoDB
mongoose.connect('mongodb+srv://roselle:sEcret02@neptune-kj4z1.mongodb.net/neptune?retryWrites=true');


// Go through each movie
data.map(data => {
  // Initialize a model with movie data
  const result = new Home(data);
  // and save it into the database
  result.save();
});