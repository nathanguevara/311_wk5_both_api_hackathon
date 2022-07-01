const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

const getDepartments = (req, res) => {
  // SELECT ALL USERS
  pool.query("SELECT * FROM departments", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getDepartmentsId = (req, res) => {
  // SELECT USERS WHERE ID = <REQ PARAMS ID>
  let id = req.params.id;
  let sql = "SELECT * FROM ?? WHERE ?? = ?";
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, ["departments", "id", id]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getDepartmentsByName = (req, res) => {
  let { department_name } = req.params.department_name;
  let sql = "SELECT * FROM ?? WHERE ?? = ?";

  sql = mysql.format(sql, ["employees", "first_name", department_name]);

  sql = mysql.format(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getDepartments,
  getDepartmentsId,
  getDepartmentsByName,
};
