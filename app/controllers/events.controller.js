module.exports = {
  //show all events
  showEvents: (req, res) => {
    // create dummy events
    const events = [
      { name: 'Basketball', slug: 'basketball', description: 'Throwing into a baset.'},
      { name: 'Swimming', slug: 'swimmming', description: 'Michael phelps is the fastest fish'},
      { name: 'curling', slug: 'curling', description: 'curling things?'}
    ];

    // return a view with that data
    res.render('pages/events', {events: events });
  },
  
  // show a single event
 showSingle: (req, res) => {
   // get a single event
   const event = { name: 'Basketball', slug: 'basketball', description: 'Throwing into a basket.' };

   res.render('pages/single', { event: event });
 }

};
