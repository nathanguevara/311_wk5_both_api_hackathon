const express = require("express");
const usersRouter = require("./routes/employees");
const departmentRouter = require("./routes/departments");
const app = express();
const port = process.env.PORT || 4001;

app.get("/", (req, res) => res.send("Welcome to our API"));

app.use(express.json());
app.use("/employees", usersRouter);
app.use("/departments", departmentRouter);

app.listen(port, () => {
  console.log("app is listening on:", port);
});
