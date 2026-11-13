import { useState } from "react";
import axios from "axios";

function App() {

  const [f_name, setFname] = useState("");
  const [l_name, setLname] = useState("");
  const [p_no, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [membership, setMembership] = useState("");
  const [u_name, setUsername] = useState("");
  const [pwd, setPassword] = useState("");

  function register() {

    axios.post("http://localhost:5000/register", {

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

    })
      .then((res) => {

        alert(res.data);

      })
      .catch((err) => {

        console.log(err);
        alert("Registration Failed");

      });
  }

  return (

    <div align="center">

      <h1>College Gym Registration</h1>

      <h2>Gym Member Registration</h2>

      <table>

        <tbody>

          <tr>
            <td>First Name</td>
            <td>
              <input
                type="text"
                onChange={(e) => setFname(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td>Last Name</td>
            <td>
              <input
                type="text"
                onChange={(e) => setLname(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td>Phone Number</td>
            <td>
              <input
                type="text"
                onChange={(e) => setPhone(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td>Email</td>
            <td>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
        />
            </td>
          </tr>

          <tr>
            <td>Department</td>
            <td>
              <select
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="">Select Department</option>
                <option value="BCA">BCA</option>
                <option value="BBA">BBA</option>
                <option value="BCOM">BCOM</option>
                <option value="BA English">BA English</option>
                <option value="BA Economics">BA Economics</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>Year of Study</td>
            <td>
              <select
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="">Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>Gender</td>
            <td>
              <select
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>Membership Type</td>
            <td>
              <select onChange={(e) => setMembership(e.target.value)}>
                <option value="">Select Membership</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
                <option value="Half Yearly">Half Yearly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>Username</td>
            <td>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td>Password</td>
            <td>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td></td>
            <td>
              <button
                type="button"
                onClick={register}
              >
                Register
              </button>
            </td>
          </tr>

        </tbody>

      </table>

    </div>

  );
}

export default App;