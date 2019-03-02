import Home from '../models/homeModel';
import moment from 'moment';


export const index = (req, res, next) => {
  // Find all data and return json response
  Home.find().lean().exec((err, data) => res.json(
    // Iterate through each data
    { data: data.map(data => ({
      ...data,
     // and times to each
    }))}
  ));
};