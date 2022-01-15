import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Admin.css";
function Admin() {
  const [adminClass, setClass] = useState([]);

  useEffect(async() => {
    try{
      await axios.get("http://localhost:5000/classes").then((res) => {
      const classes = res.data;
      console.log(classes);
      setClass(classes);

    })
    }
    catch{
      console.log("error")
    }
    
  }, []);

  return (
    <div>
      <h1>Admin</h1>

      <table>
        <tr>
          <th>Class Name</th>
          <th>Teacher</th>
          <th>Student</th>
        </tr>
        {adminClass.map((i) => {
          return (
            <tr>
              <td>{i.name}</td>
              <td>{i.teacher}</td>
              <td>{i.student}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Admin;
