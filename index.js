let handleSubmit = (event) => {
  event.preventDefault();
  let name = document.getElementById("name")?.value.trim();
  let gender = document.getElementById("gender")?.value.trim();
  let studentClass = document.getElementById("class")?.value.trim();
  let division = document.getElementById("division")?.value.trim();
  let dob = document.getElementById("dob")?.value;
  if (name && gender && studentClass && division && dob) {
    alert("success");
  }
  if(!name) {
    document.getElementById('name').classList.add("error");
  }
  if(!gender) {
    document.getElementById('gender').classList.add("error");
  }
  if(!studentClass) {
    document.getElementById('class').classList.add("error");
  }
  if(!division) {
    document.getElementById('division').classList.add("error");
  }
  if(!dob) {
    document.getElementById('dob').classList.add("error");
  }
  console.log(name, gender, studentClass, division, dob);
};
