const mysql = require("mysql");

const getEmployees = (req, res) => {
  pool.query("SELECT * FROM employees", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getEmployeesById = (req, res) => {
  let id = req.params.id;
  let sql = "SELECT * FROM ?? WHERE ?? = ?";

  sql = mysql.format(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getEmployeesByFirstName = (req, res) => {};

module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName };
