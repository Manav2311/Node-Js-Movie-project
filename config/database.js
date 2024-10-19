const mongoose = require('mongoose')

module.exports.db = async () => {
    try {
        await mongoose.connect('mongodb+srv://Express-MVC:1234@cluster0.z612q.mongodb.net/movie')
        console.log('connected to database')
    } catch (error) {
        console.log(error);
    }
}