const mysql = require("mysql");
const pool = require("../mysql/connection");
const { handleSQLError } = require("../mysql/error");

const getEmployees = (req, res) => {
  pool.query("SELECT * FROM employees", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getEmployeesById = (req, res) => {
  let id = req.params.employee_id;
  let sql = "SELECT * FROM ?? WHERE ?? = ?";

  sql = mysql.format(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getEmployeesByFirstName = (req, res) => {
  let firstName = req.params.first_name;
  let sql = "SELECT * FROM ?? WHERE ?? = ?";

  sql = mysql.format(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName };
