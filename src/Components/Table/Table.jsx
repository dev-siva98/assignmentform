import axios from "../../axios";
import React, { useEffect, useState } from "react";
import Document from "./Document";
import './Table.css'

function Table() {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    axios
      .get("user/all")
      .then((response) => {
        setStudentList(response.data);
        console.log(response)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="table-container">
      {studentList.map((student) => (
        <Document studentDetails={student} key={student._id} />
      ))}
    </div>
  );
}

export default Table;
