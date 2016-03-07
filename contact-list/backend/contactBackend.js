var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

var contacts = [
	{name: "Pedro", phone: "(31) 12345-6789", company: {name: "Oi"}, color: "black", date: new Date()},
	{name: "Savio", phone: "(41) 98765-4321", company: {name: "Tim"}, color: "green", date: new Date()},
	{name: "Henrique", phone: "(25) 11111-1111", company: {name: "GVT"}, color: "orange", date: new Date()}
];
var companies = [
	{name: "Oi", code: 31, category: "Celular"},
	{name: "Vivo", code: 15, category: "Celular"},
	{name: "Tim", code: 41, category: "Celular"},
	{name: "Oi", code: 31, category: "Fixo"},
	{name: "GVT", code: 25, category: "Fixo"},
	{name: "Embratel", code: 21, category: "Fixo"}
];
var colors = [
	"black", "yellow", "greenyellow", "green", "emerald", "blueviolet", "crimson",
	"firebrick", "orange", "darkcyan", "indigo", "pink", "red", "gray", "brown"
];

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.get('/contacts', function(req, res) {
	res.json(contacts);
});

app.post('/contacts', function(req, res) {
	var receivedContacts = req.body
	if(Array.isArray(receivedContacts)) {
		contacts = receivedContacts
	} else {
		contacts.push(receivedContacts);
	}
	res.json(true);
});

app.get('/companies', function(req, res) {
	res.json(companies);
});

app.get('/colors', function(req, res) {
	res.json(colors);
});
