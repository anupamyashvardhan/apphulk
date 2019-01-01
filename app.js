const express = require('express');

const app = express();

app.get('/account/:usercode',(req, res) => {

var mysql = require('mysql');

var appx = express();

var connection = mysql.createConnection({
  host     : 'anupamyv1.cuoixn5gtgnc.ap-south-1.rds.amazonaws.com',
  user     : 'anupamyv',
  password : 'a89r62y56$$$',
  port     : '3306',
  database : 'dailydhan'
});

connection.connect(function(err){

if(!err) {

var usercode=req.params.usercode;

var sql_query="select * from dailydhan.account where usercode=?";  
            
    connection.query(sql_query,[usercode],function (err, result, fields) {
    if (err) throw err;
    res.status(200).send(JSON.stringify(result)).end(); 

 });

} else {

res.status(200).send('Error connecting database ... ' ).end();  
}

});
 
});



app.get('/history/:usercode',(req, res) => {

var mysql = require('mysql');

var appx = express();

var connection = mysql.createConnection({
  host     : 'anupamyv1.cuoixn5gtgnc.ap-south-1.rds.amazonaws.com',
  user     : 'anupamyv',
  password : 'a89r62y56$$$',
  port     : '3306',
  database : 'dailydhan'
});

connection.connect(function(err){

if(!err) {

var usercode=req.params.usercode;

var sql_query="select * from dailydhan.history where usercode=?";  
            
    connection.query(sql_query,[usercode],function (err, result, fields) {
    if (err) throw err;
    res.status(200).send(JSON.stringify(result)).end(); 

 });

} else {

res.status(200).send('Error connecting database ... ' ).end();  
}

});
 
});


app.get('/tasks/:usercode',(req, res) => {

var mysql = require('mysql');

var appx = express();

var connection = mysql.createConnection({
  host     : 'anupamyv1.cuoixn5gtgnc.ap-south-1.rds.amazonaws.com',
  user     : 'anupamyv',
  password : 'a89r62y56$$$',
  port     : '3306',
  database : 'dailydhan'
});

connection.connect(function(err){

if(!err) {

var usercode=req.params.usercode;

var sql_query="select * from dailydhan.task_list order by install_count desc";  
            
    connection.query(sql_query,function (err, result, fields) {
    if (err) throw err;
    res.status(200).send(JSON.stringify(result)).end(); 

 });

} else {

res.status(200).send('Error connecting database ... ' ).end();  
}

});
 
});


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

