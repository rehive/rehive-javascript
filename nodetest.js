const Rehive = require('./rehive')

const r = new Rehive({ apiToken: ''})

// r.public.companies.get().then(function(data){
// 	console.log("public companies", data);
// }, function(err) {
// 	console.log("err", err);
	
// })
// .catch(err => {
// 	console.log("ERR", err);
	
// })

// const EMAIL = ""
// r.auth.login({
// 	user: 'test1@rehive.com',
// 	company: 'test_company_1',
// 	password: 'test1234'
// }).then(function (data) {

	// r.admin.accessControlRules.get()
	// .then(data => {
	// 	console.log("ADMIN ACCESS CONTROL RES", data);
		
	// 	r.admin.accessControlRules.getNext()
	// 	.then(data => {
	// 		console.log("NEXT ADMIN ACCESS CONTROL RES", data);
			
			
	// 	})
		
	// })
	
	// GET ADMIN REQUESTS
	// r.admin.users.create({
	// 	email: EMAIL
	// }).then(function (res) {
	// 	console.log("create user res", res);
		
	// 	r.admin.accounts.get({ filters: { user: EMAIL, name: 'default'}}).then(function (accRes) {
	// 		console.log("ACCOUNTS RES", accRes.results[0].reference);
			

	// 		r.admin.transactions.createCredit(
	// 			{
	// 				user: res.email,
	// 				amount: 1,
	// 				currency: "XBT",
	// 				account: accRes.results[0].reference
	// 			}).then(function (credRes) {
	// 				console.log("CRED RES", credRes);
	// 			}, function (err) {
	// 				console.log("CRED ERR", err);
	// 			});

	// 	}, function (err) {
	// 		console.log("ERR", err);
			
	// 	})

       
	// }, function (err) {
	// 	console.log(err);
	// });
	
    
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



// }, function (err) {
// 	console.log(err);
// });

