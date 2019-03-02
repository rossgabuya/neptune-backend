import Water from '../models/waterModel';
import moment from 'moment';


export const waterIndex = (req, res, next) => {
  // Find all water data and return json response
  Water.find().lean().exec((err, data) => res.json(
    // Iterate through each data
    { data: data.map(data => ({
      ...data,
    }))}
  ));
};