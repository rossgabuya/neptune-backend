import mongoose from 'mongoose';
import Water from './models/waterModel';

    const data = [
        {
        PH: [
            { x: "Aug", y: 15.5 },
            { x: "Sept", y: 10 },
            { x: "Nov", y: 2 },
            { x: "Dec", y: 6 },
            { x: "Jan", y: 1 },
            { x: "Feb", y: 4 },
            { x: "March", y: 3 },
            { x: "April", y: 2 }
            ],   
        TEMP: [
            { x: "Aug", y: 5 },
            { x: "Sept", y: 6 },
            { x: "Nov", y: 3 },
            { x: "Dec", y: 2 },
            { x: "Jan", y: 4 },
            { x: "Feb", y: 2 },
            { x: "March", y: 6 },
            { x: "April", y: 7 }
            ],
        WL: [
            { x: "Aug", y: 15 },
            { x: "Sept", y: 13 },
            { x: "Nov", y: 10 },
            { x: "Dec", y: 7 },
            { x: "Jan", y: 9 },
            { x: "Feb", y: 4 },
            { x: "March", y: 3 },
            { x: "April", y: 4 }
            ]
        }
    ];

// Connect to MongoDB
mongoose.connect('mongodb+srv://roselle:sEcret02@neptune-kj4z1.mongodb.net/neptune?retryWrites=true');


// Go through each water data
data.map(data => {
  // Initialize a model with movie data
  const result = new Water(data);
  // and save it into the database
  result.save();
});