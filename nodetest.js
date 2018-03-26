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
	r.transactions.get().then(function (tx) {
		console.log("TRANSACTIONS", tx);

		// GET NEXT TRANSACTIONS
		r.transactions.getNext().then(function (nextTx) {
			console.log("NEXT TRANSACTIONS", nextTx);

			r.transactions.getPrevious().then(function (prevTx) {
				console.log("PREVIOUS TRANSACTIONS", prevTx);

			}, function (err) {
				console.log(err);
			});

		}, function (err) {
			console.log(err);
		});

	}, function (err) {
		console.log(err);
	});



}, function (err) {
	console.log(err);
});

