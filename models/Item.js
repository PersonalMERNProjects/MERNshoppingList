const mongoose = require('mongoose')
const Schema = mongoose.Schema;


//Craete a Schema 

ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

module.exports = item = mongoose.model('item', ItemSchema);