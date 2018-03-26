const Rehive = require('./rehive')

const r = new Rehive()

r.auth.login({
	user: 'test1@rehive.com',
	company: 'test_company_1',
	password: 'test1234'
}).then(function (user) {

	// GET USER PROFILE
	r.user.get().then(function (user) {
		console.log("FROM USER METHOD", user);

	}, function (err) {
		console.log(err);
	});

	// GET TRANSACTIONS
	r.transactions.get().then(function (res) {
		console.log("TRANSACTIONS", res);

		// GET NEXT TRANSACTIONS
		r.transactions.getNext().then(function (res) {
			console.log("NEXT TRANSACTIONS", res);

		}, function (err) {
			console.log(err);
		});

	}, function (err) {
		console.log(err);
	});



}, function (err) {
	console.log(err);
});

