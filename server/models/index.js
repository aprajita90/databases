var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      
      // var post = {id: null, username: 'John', message: 'Hello World!', roomname: 'SFRoom'};
      // connection.query('INSERT INTO messages SET ?', post, function(err, result) {
      //   console.log('Successful data inpus');
      // });
    }, // a function which produces all the messages
    post: function () {
      console.log('Successful data inpus POST FROM INDEX OF MODELS');
      // var post = {id: null, username: 'John', message: 'Hello World!', roomname: 'SFRoom'};
      // connection.query('INSERT INTO messages SET ?', post, function(err, result) {
      //   console.log('Successful data inpus');
      // });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {console.log('Successful data inpus GET FROM INDEX OF MODELS');},
    post: function () {console.log('Successful data inpus GET FROM INDEX OF MODELS');}
  }
};

