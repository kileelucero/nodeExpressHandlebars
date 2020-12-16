const connection = require("../config/connection");

const orm = {
  selectAll: function (all) {
      var queryString = "SELECT * FROM burgers"
      connection.query(queryString, [all], function (err, result) {
          if (err) throw err;
          console.log(result)
          all(result);
      });
  },
  insertOne: function (burger, devoured, all) {
      var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?)"
      connection.query(queryString, [burger, devoured], function (err, result) {
          if (err) throw err;
          console.log(result)
          all(result);
      });
  },
  updateOne: function (id, all) {
      var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?"
      connection.query(queryString, [true, id], function (err, result) {
          if (err) throw err;
          console.log(result)
          all(result);
      });
  },
};

module.exports = orm;