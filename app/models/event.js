const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    // Create Schema
    const eventSchema = new Schema({
      name: String,
      slug: {
        type: String,
        unique: true
      },
    });

    // Create model
    const eventModel = mongoose.model('Event', eventSchema);

    //export the model
    module.exports = eventModel;
