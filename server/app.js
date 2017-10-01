/*jshint esversion: 6 */
const express = require('express');
const mysql = require('mysql');

const app = express();
const db = mysql.createPool({
    host: 'db',
    user: 'root',
    password: 'testpass',
    database: 'challenge',
});

app.get('/', function (req, res) {
  res.status(204);
});

// login page
app.get('/login', function (req, res) {
  res.status(204);
});

// signup page
app.get('/signup', function (req, res) {
  res.status(204);
});

// account creation
app.post('/users', function(req, res) {
  res.status(204);
});

// login
app.post('/session', function (req, res) {
  res.status(204);
});

// logout
app.delete('/session', function(req, res) {
  res.status(204);
});

// enter chat room
app.get('/chats', function(req, res) {
  res.status(204);
});

// create chat room
app.post('/chats', function(req, res) {
  res.status(204);
});

// add message to chat
app.post('/chats/:chatId', function (req, res) {
  res.status(204);
});

app.get('/ping', function (req, res) {
    db.getConnection(function (err, connection) {
        if (err) {
            res.status(501).send(err.message);
            return;
        }
        connection.query('SELECT col FROM test', function (err, results, fields) {
            if (err) {
                res.status(501).send(err.message);
                connection.release();
                return;
            }

            res.json({
                service: 'responsive',
                database: 'connected',
            });
            connection.release();
        });
    });
});

app.listen(8000, function() {
    console.log('Listening on port 8000');
});
