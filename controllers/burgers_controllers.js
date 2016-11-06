/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burger = require('../models')['Burger'];



router.get('/', function (req, res) {
	res.redirect('/Burger');
});

router.get('/Burger', function (req, res) {

	burger.findAll().then(function(data){
		var hbsObject = { burger: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

//router.post('/burgers/create', function (req, res) {
//	burger.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function () {
//		res.redirect('/burgers');
//	});
//});

//router.put('/burgers/update/:id', function (req, res) {
//	var condition = 'id = ' + req.params.id;

//	console.log('condition', condition);

//	burger.update({ devoured: req.body.devoured }, condition, function () {
//		res.redirect('/burgers');
//	});
//});

module.exports = router;