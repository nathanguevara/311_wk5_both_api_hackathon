const mysql = require("mysql");
const pool = require("../mysql/connection");
const { handleSQLError } = require("../mysql/error");

const getEmployees = (req, res) => {
  //get all employees
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
  let { first_name } = req.params.first_name;
  let sql = "SELECT * FROM ?? WHERE ?? = ?";

  sql = mysql.format(sql, ["employees", "first_name", first_name]);

  sql = mysql.format(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName };
