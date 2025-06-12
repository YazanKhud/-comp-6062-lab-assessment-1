const studentName = "Yazan Al Khudair";
const studentNumber = "1208183";
const studentNameNumber = `${studentName} - ${studentNumber}`

console.log(studentNameNumber);

const headingPrimaryContent = document.querySelector("h1");
headingPrimaryContent.innerHTML = studentNameNumber;
headingPrimaryContent.classList.add("headingPrimary");

