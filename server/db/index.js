var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".



// First you need to create a connection to the db
var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});
//console.log(connection);

connection.connect(function(err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established VERIFY IF THIS WORKS');
});

connection.handleQuery = function (databaseCommandString, dataToPostOrRetrieve, callback) {
  //console.log('handleQuery was invoked from index.js controllers', databaseCommandString, dataToPostOrRetrieve);
  connection.query(databaseCommandString, dataToPostOrRetrieve, callback);
};

//connection.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
//});
////connection.connect();

module.exports.connection = connection;