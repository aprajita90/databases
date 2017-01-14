var db = require('../db');
var connection = require('../db/index.js');
var handleQuery = (connection.connection.handleQuery);

module.exports = {
  messages: {
    get: function (req, res) {
      handleQuery('SELECT * FROM messages', '', function(err, result) {
        if (err) {
          console.log(err, result); 
        } else {
          res.end(JSON.stringify(result)); 
        }
      });
    }, // a function which produces all the messages
    post: function (req, res) {
      var post = {id: null, username: req.body.username, message: req.body.message, roomname: req.body.roomname};
      handleQuery('INSERT INTO messages SET ?', post, function(err, result) {
        //console.log('hey', err, result);
        if (err) {
          console.log(err, result); 
        } else {
          res.end();
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      handleQuery('SELECT * FROM users', '', function(err, result) {
        if (err) {
          console.log(err, result); 
        } else {
          console.log('GETTING USER', result);
          res.end(JSON.stringify(result)); 
        }
      });
    },
    post: function (req, res) {
      var post = {id: null, username: req.body.username};
      handleQuery('INSERT INTO users SET ?', post, function(err, result) {
        if (err) {
          console.log(err, result); 
        } else {
          res.end(); 
        }
      });
    } 
  }
};

