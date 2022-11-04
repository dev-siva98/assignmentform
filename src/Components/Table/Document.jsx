import React from "react";
import './Table.css'

function Document({ studentDetails }) {
  const { _id, name, gender, classVal, division, dob } = studentDetails;

  return (
    <div className="document-container">
      <div className="document-field">
        <p>Student ID :</p>
        <p>{_id}</p>
      </div>
      <div className="document-field">
        <p>Name :</p>
        <p>{name}</p>
      </div>
      <div className="document-field">
        <p>Gender :</p>
        <p>{gender}</p>
      </div>
      <div className="document-field">
        <p>Class :</p>
        <p>{classVal}</p>
      </div>
      <div className="document-field">
        <p>Division :</p>
        <p>{division}</p>
      </div>
      <div className="document-field">
        <p>DOB :</p>
        <p>{dob}</p>
      </div>
    </div>
  );
}

export default Document;
