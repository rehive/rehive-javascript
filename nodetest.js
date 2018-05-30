const Rehive = require('./rehive')

const r = new Rehive({ apiToken: ''})

// r.admin.users.create({
// 	first_name: "Joe",
// 	last_name: "Soap",
// 	email: "joe@rehive.com",
// }).then(function(user){
// 	console.log("user", user);
// }, function(err) {
// 	console.log("err", err);
	
// })
// .catch(err => {
// 	console.log("ERR", err);
	
// })

r.auth.login({
	user: 'test1@rehive.com',
	company: 'test_company_1',
	password: 'test1234'
}).then(function (data) {
	console.log("DATA", data);
	
	// GET COMPANY BANK ACCOUNTS
	r.admin.bankAccounts.currencies.get(145).then(function (user) {
		console.log("FROM BANK ACCOUT CURRENCIES METHOD", user);

	}, function (err) {
		console.log(err);
    });
    
    // r.admin.bankAccounts.currencies.create(145, { "currency": "XBT"}).then(function (user) {
	// 	console.log("FROM BANK ACCOUT CURRENCIES CREATE METHOD", user);

	// }, function (err) {
	// 	console.log(err);
	// });

	// // GET TRANSACTIONS
	// r.transactions.get().then(function (tx) {
	// 	console.log("TRANSACTIONS", tx);

	// 	// GET NEXT TRANSACTIONS
	// 	r.transactions.getNext().then(function (nextTx) {
	// 		console.log("NEXT TRANSACTIONS", nextTx);

	// 		r.transactions.getPrevious().then(function (prevTx) {
	// 			console.log("PREVIOUS TRANSACTIONS", prevTx);

	// 		}, function (err) {
	// 			console.log(err);
	// 		});

	// 	}, function (err) {
	// 		console.log(err);
	// 	});

	// }, function (err) {
	// 	console.log(err);
	// });



}, function (err) {
	console.log(err);
});

