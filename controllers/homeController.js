import Home from '../models/homeModel';
import moment from 'moment';


export const index = (req, res, next) => {
  // Find all movies and return json response
  Home.find().lean().exec((err, data) => res.json(
    // Iterate through each movie
    { data: data.map(data => ({
      ...data,
     // and times to each
    }))}
  ));
};