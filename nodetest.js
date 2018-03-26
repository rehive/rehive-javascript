const Rehive = require('./rehive')

const r = new Rehive()

r.auth.login({
	user: 'stephan@rehive.com',
	company: 'shape',
	password: 'launch1234'
}).then(function (user) {
	console.log("USER ", user);
	console.log(user);
}, function (err) {
	console.log(err);
});