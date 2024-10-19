const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    rating : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }
})

const movieModel = mongoose.model('movieTbl',movieSchema);

module.exports = movieModel;