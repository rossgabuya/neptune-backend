import mongoose, { Schema } from 'mongoose';

// Define water schema
var waterSchema = new Schema({
  PH: Array,
  TEMP: Array,
  WL: Array
});

// Export Mongoose model
export default mongoose.model('water', waterSchema);