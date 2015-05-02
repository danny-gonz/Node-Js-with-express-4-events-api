var mongoose = require('mongoose'),

    Schema = mongoose.Schema;

var eventModel = new Schema({
    
    name: {
        
        type: String
    },
    
    location : {
        
        type: String
    }

});

module.exports = mongoose.model('Event', eventModel);