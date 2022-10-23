let handleSubmit = (event) => {
  event.preventDefault();
  let name = document.forms["form"]["name"].value.trim();
  let gender = document.forms["form"]["gender"].value;
  let studentClass = document.forms["form"]["class"].value;
  let division = document.forms["form"]["division"].value.trim();
  let dob = document.forms["form"]["dob"].value;
  if (name && gender && studentClass && division && dob) {
    alert(
      "Name: " +
        name +
        "\nGender: " +
        gender +
        "\nClass: " +
        studentClass +
        "\nDivision:" +
        division +
        "\nDob: " +
        dob
    );
  }
  name
    ? document.getElementById("name").classList.remove("error")
    : document.getElementById("name").classList.add("error");
  studentClass
    ? document.getElementById("class").classList.remove("error")
    : document.getElementById("class").classList.add("error");
  division
    ? document.getElementById("division").classList.remove("error")
    : document.getElementById("division").classList.add("error");
  dob
    ? document.getElementById("dob").classList.remove("error")
    : document.getElementById("dob").classList.add("error");
  gender
    ? document.getElementById("error-message").classList.remove("error-message-active")
    : document.getElementById("error-message").classList.add("error-message-active");
};
