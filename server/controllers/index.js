var models = require('../models');
var messages = models.messages;
var users = models.users;
//connection.connection.connect();
console.log(messages);
module.exports = {
  messages: {
    get: function (req, res) {
      messages.get(req, res);
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      if (!req.body.message || !req.body.username) {
        res.writeHead(404, 'Not found');
        res.end();
      } else {
        messages.post(req, res);
      }
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      users.get(req, res);

    },
    post: function (req, res) {
      if (!req.body.username) {
        res.writeHead(404, 'Not found');
        res.end();
      } else {
        users.post(req, res);
      }
    } // a functio
  }
};

