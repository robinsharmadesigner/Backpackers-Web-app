const mongoose = require('mongoose');

var feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: 'Full name can\'t be empty'
    },
    rating: {
        type: String,
        // required: 'Rating can\'t be empty',
        // unique: true
    },
    review: {
        type: String,
        // required: 'review can\'t be empty',
     
    },

    email: {
        type: String,
             // required: 'Email can\'t be empty',
        
    },

   
});

mongoose.model('Feedback', feedbackSchema);
