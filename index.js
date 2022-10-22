let handleSubmit = (event) => {
  event.preventDefault();
  let name = document.getElementById("name")?.value;
  let gender = document.getElementById("gender")?.value;
  let studentClass = document.getElementById("class")?.value;
  let division = document.getElementById("division")?.value;
  let dob = document.getElementById("dob")?.value;
  if (name && gender && studentClass && division && dob) {
    alert("success");
  } else {
    alert("field missing")
  }
  console.log(name, gender, studentClass, division, dob);
};
