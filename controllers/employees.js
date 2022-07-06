const mysql = require("mysql");
const pool = require("../mysql/connection.js");
const { handleSQLError } = require("../mysql/error.js");

const getEmployees = (req, res) => {
  //get all employees
  pool.query("SELECT * FROM employees", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getEmployeesById = (req, res) => {
  console.log(req.params.employee_id);
  let id = req.params.employee_id;
  let sql = "SELECT * FROM ?? WHERE ?? = ?";

  sql = mysql.format(sql, ["employees", "employee_id", id]);
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getEmployeesByFirstName = (req, res) => {
  console.log("inside get Employees route");
  console.log(req.params.first_name);
  let { first_name } = req.params;
  let sql = "SELECT * FROM ?? WHERE ?? = ?";

  sql = mysql.format(sql, ["employees", "first_name", first_name]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = { getEmployees, getEmployeesById, getEmployeesByFirstName };
