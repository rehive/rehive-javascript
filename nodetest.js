const Rehive = require('./rehive')

const r = new Rehive()

r.auth.login({
	user: 'stephan@rehive.com',
	company: 'shape',
	password: 'launch1234'
}).then(function (user) {

	r.user.get().then(function (user) {
		console.log("FROM USER METHOD", user);
	}, function (err) {
		console.log(err);
	});

}, function (err) {
	console.log(err);
});

