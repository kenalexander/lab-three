var mongoose = require( 'mongoose' )

// all model classes will inherit from 
// the mongoose.Schema class
var bookSchema = new mongoose.Schema({
    
    bookName: {type: String, required: 'Please enter the name of the book.'},
    releaseYear: {type: Number, required: 'Please enter the year of release.'},
    author: {type: String, required: 'Please enter the author.'},
    description: {type: String}
})

// make this class public
module.exports = mongoose.model( 'Book', bookSchema )