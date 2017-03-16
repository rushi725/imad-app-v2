var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg').pool;
var config = {
    user:'rushi25',
    database:'rushi725',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/Rushabh', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Rushabh.html'));
});

var pool = new pool(config);
app.get('/test-db',function (req,res){
    pool.query('SELECT * FROM User',function(err ,result){
        if(err){
            res.status(500).send(err.toString());
        }else{
            res.send(JSON.stringify(result));
        }
    });
});

app.get('/ui/sidebar.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sidebar.css'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/submit-name',function(req,res) {//URL: /submit-name?name=xxxx
    //get the name from request
    var name = req.query.name;
    
    
    names.push(name);
    //JSON : Javascript Object Notation
    res.send(JSON.stringify(names));
    
    
    res.send(names);
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
