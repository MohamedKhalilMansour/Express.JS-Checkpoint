const express = require('express');
const isDate = require('./middelware/isDate');

const app = express();

app.use(isDate);
app.use(express.static("public"));

const PORT = 5000;


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/home.html');
});

app.get('/services', (req,res) => {
    res.sendFile(__dirname + '/public/services.html');
});

app.get('/contact', (req,res) => {
    res.sendFile(__dirname + '/public/contact.html');
});

app.get('/style.css', (req,res) => {
    res.sendFile(__dirname + '/public/style.css');
});

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`The server is running on ${PORT}`);
});