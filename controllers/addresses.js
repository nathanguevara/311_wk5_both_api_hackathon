const mysql = require("mysql");
const pool = require("../mysql/connection.js");
const { handleSQLError } = require("../mysql/error.js");

const getAddress = (req, res) => {
  pool.query("SELECT * FROM addresses", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getStreetName = (req, res) => {
  let id = req.params.street;
  let sql = "SELECT * FROM ?? WHERE ?? = ?";

  sql = mysql.format(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getZip = (req, res) => {
  let zipCode = req.params.zip;
  let sql = "SELECT * FROM ?? WHERE ?? = ?";

  sql = mysql.format(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = { getAddress, getStreetName, getZip };
