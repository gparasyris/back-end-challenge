var express = require('express'),
	usersProvider = express.Router(),
	userModel = require('../app/models/user');

/* user routes, sent to  '/' */
usersProvider.route('/')
	/* retrieve all users */
	.get(function (req, res) {
		userModel.find(function (err, users) {
			if (err) {
				res.send(err);
			}
			res.json(users);
		});
	})
	/* create a new user */
	.post(function (req, res) {
		/* create new instance */
		var user = new userModel();
		/* pass fields from request.body */
		user.firstName = req.body.firstName;
		user.lastName = req.body.lastName;
		user.location = req.body.location;
		user.email = req.body.email;
		user.facebookId = req.body.facebookId;
		/* save the new instance to mongodb */
		user.save(function (err) {
			if (err) {
				res.send(err);
			}
			/* return the new user */
			res.json(user);
		});
	});

/* user routes deliving userId in the request Url */
usersProvider.route('/:userId')
	.get(function (req, res) {
		/* look by userId */
		userModel.findById(req.params.userId, function (err, user) {
			if (err) {
				res.send(err);
			}
			/* return the user */
			res.json(user);
		});
	})

	/* update the user */
	.put(function (req, res) {
		/* retrieve user */
		userModel.findById({ _id: req.params.userId }, (err, user) => {
			if (err) {
				res.send(err);
			} else {

				let payload = req.body;
				/* foreach field, apply changes if present */
				if (payload.firstName) {
					user.firstName = payload.firstName;
				}
				if (payload.lastName) {
					user.lastName = payload.lastName;
				}
				if (payload.location) {
					user.location = payload.location;
				}
				if (payload.email) {
					user.email = payload.email;
				}
				if (payload.facebookId) {
					user.facebookId = payload.facebookId;
				}
				/* save the retrieved user */
				user.save((error, data) => {
					if (error) {
						res.send(err);
					} else {
						/* return the updated user */
						res.json(data);
					}
				});
			}
		});
	})

	/* delete the user */
	.delete(function (req, res) {
		userModel.findById(req.params.userId, (err, user) => {
			if (err) {
				res.send(err);
			} else {
				user.remove((error, data) => {
					let result;
					if (error) {
						res.send(err);
					} else {
						res.json(data);
					}
				});
			}
		});
	});

module.exports = usersProvider;