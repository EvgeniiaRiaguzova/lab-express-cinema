const { Schema, model } = require("mongoose");

const movieSchema= new Schema (
    {
        title: String,
        director: String,
        stars: Array,
        description: String,
        showtimes: Array
            
    }
)


module.exports = model('Movie', movieSchema)