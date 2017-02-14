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

    // middleware ================
    // make sure that the slug is created from the name
    // NEEDS to be function form instead of => is because
    // we need to reference this to create the slug, fat arrow
    // would alter the way the object is referenced.
    eventSchema.pre('save', function(next) {
      this.slug = slugify(this.name);
      next();
    });

    // Create model
    const eventModel = mongoose.model('Event', eventSchema);

    //export the model
    module.exports = eventModel;
