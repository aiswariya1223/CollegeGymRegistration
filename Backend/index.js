const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "college_gym"
});

db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed");
  } else {
    console.log("Database Connected");
  }
});

/* REGISTER GYM MEMBER */

app.post("/register", (req, res) => {

  const {
    f_name,
    l_name,
    p_no,
    email,
    department,
    year,
    gender,
    membership,
    u_name,
    pwd
  } = req.body;

  const sql =
    "INSERT INTO gym_registration(f_name,l_name,p_no,email,department,year,gender,membership,u_name,pwd) VALUES (?,?,?,?,?,?,?,?,?,?)";

  db.query(
    sql,
    [
      f_name,
      l_name,
      p_no,
      email,
      department,
      year,
      gender,
      membership,
      u_name,
      pwd
    ],
    (err) => {

      if (err) {
        console.log(err);
        res.send("Failed");
      } else {
        res.send("Gym Member Registration Successful");
      }

    }
  );
});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});