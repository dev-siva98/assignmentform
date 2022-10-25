import React from "react";
import { useState } from "react";
import "./Form.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    classVal: "",
    division: "",
    dob: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    gender: false,
    classVal: false,
    division: false,
    dob: false,
  });

  const changeInput = (e) => {
    const data = { ...formData };
    const error = { ...errors };
    data[e.target.name] = e.target.value.trim();
    error[e.target.name] = false;
    setFormData(data);
    setErrors(error);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, gender, classVal, division, dob } = formData;
    let error = { ...errors };

    if (name && gender && classVal && division && dob)
      alert(JSON.stringify(formData));

    name ? (error.name = false) : (error.name = true);
    gender ? (error.gender = false) : (error.gender = true);
    classVal ? (error.classVal = false) : (error.classVal = true);
    division ? (error.division = false) : (error.division = true);
    dob ? (error.dob = false) : (error.dob = true);

    setErrors(error);
  };

  return (
    <div className="form-container">
      <h1>Student details</h1>
      <form id="form" className="form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={changeInput}
          className={errors.name ? "error" : ""}
        />
        <p>Gender</p>
        <div className="radio-input">
          <label>
            <input
              value="male"
              type="radio"
              id="male"
              name="gender"
              onChange={changeInput}
            />
            Male
          </label>
          <label>
            <input
              value="female"
              type="radio"
              id="female"
              name="gender"
              onChange={changeInput}
            />
            Female
          </label>
          <label>
            <input
              value="other"
              type="radio"
              id="other"
              name="gender"
              onChange={changeInput}
            />
            Other
          </label>
          {errors.gender && (
            <p className="error-message" id="error-message">
              *select gender
            </p>
          )}
        </div>
        <label>Class</label>
        <input
          type="number"
          min="1"
          max="12"
          id="className"
          name="classVal"
          onChange={changeInput}
          className={errors.classVal ? "error" : ""}
        />
        <label>Division</label>
        <select
          id="division"
          className={`selection-input ${errors.division ? "error" : ""}`}
          name="division"
          onChange={changeInput}
        >
          <option hidden></option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
        <label>DOB</label>
        <input
          type="date"
          id="dob"
          name="dob"
          onChange={changeInput}
          className={errors.dob ? "error" : ""}
        />
        <input type="submit" value="Submit" className="submit-button" />
      </form>
    </div>
  );
}

export default Form;
