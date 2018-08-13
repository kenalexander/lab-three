var express = require('express')
var router = express.Router()

// create a link to our book model
var booksController = require('../controllers/booksController')

// sends to home landing page
router.get( '/home', function(req, res){
	res.render('home', locals = {
    	title: 'Alexander Book Emporium'
  	})
} )

// index (http://my-app.com/products)
router.get('/', booksController.index)

// new (http://my-app.com/products/new)
router.get( '/new', booksController.new )

// edit (http://my-app.com/products/12345/edit)
router.get( '/:id/edit', booksController.edit )

// create (http://my-app.com/products)
router.post('/', booksController.create)
// update (http://my-app.com/products/12345)

router.post( '/:id', booksController.update )

// delete (http://my-app.com/products/12345/delete)
router.post( '/:id/delete', booksController.delete )

// makes our file public to the application

router.get( '/:id', booksController.show )

module.exports = router;