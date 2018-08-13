var Book = require( '../models/book' )

/* VIEWS */
// Index (View)
exports.index = function( req, res, next ) {

  locals = {
    title: 'On the Shelf'
  }

  Book.find().then(function (books) {
    locals.books = books

    res.render('books/index', locals)
  })
}

// New (View)
exports.new = function ( req, res ) {

  locals = {
    title: 'Add New Book to Menu'
  }

  res.render('books/new', locals);
}

// Create (Action)
exports.create = function ( req, res, next ) {

  Book.create({
    bookName: req.body.bookName,
    releaseYear: req.body.releaseYear,
    author: req.body.author,
    description: req.body.description
  })
  .then(function () {
    res.redirect('/books')
  })
  .catch(function (err) {
    next(err)
  })
}

/* STUBS */
// Show (View)
exports.show = function ( req, res, next ) { 

  let locals = {
    title: 'On the Shelf'
  }

  Book.findById({
    _id: req.params.id
  })
  .then( function ( book ) {
    locals.book = book
    res.render( 'books/show', locals )
  })
  .catch( function ( err ) {
    next( err )
  })
}

// Edit (View)
exports.edit = function ( req, res ) { 
  
  locals = {
    title: 'Edit Book'
  };

  Book.findById({
    _id: req.params.id
  })
  .then( function ( book ) {
    // add the products to our locals
    locals.book = book;

    // render our view
    res.render( 'books/edit', locals )
  })
  .catch( function ( err ) {
    next( err )
  })
}

// Update (Action)
exports.update = function ( req, res, next ) {

 Book.findById( req.params.id )
  .then(function ( book ) {

    book.bookName = req.body.bookName
    book.releaseYear = req.body.releaseYear
    book.author = req.body.author
    book.description = req.body.description

    book.save()
    .then(  function () {
      res.redirect( '/books' )
    })
    .catch( function ( err ) {
      next( err )
    })
  })
  .catch(function ( err ) {
    next( err )
  })
}

// Delete (Action)
exports.delete = function ( req, res, next) { 
  Book.remove({
    _id: req.body.id
  })
  .then( function () {
    res.redirect( '/books' )
  })
  .catch( function ( err ) {
    next( err )
  })
}



