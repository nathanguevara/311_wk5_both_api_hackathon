const express = require("express");
const usersRouter = require("./routes/employees");
const addressRouter = require("./routes/address");
const departmentsRouter = require("./routes/departments");

const app = express();
const port = process.env.PORT || 4001;

app.get("/", (req, res) => res.send("Welcome to our API"));

app.use(express.json());
app.use("/employees", usersRouter);
app.use("/addresses", addressRouter);
app.use("/departments", departmentsRouter);

app.listen(port, () => {
  console.log("app is listening on:", port);
});
