const patients = require("./patients");
const height = parseFloat(process.argv[2]);

const patientsLongerThan = patients.filter(function(patient) {
  return patient.height > height;
});

console.log("OUTPUT:", patientsLongerThan);
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(
  `NUMBER OF PATIENTS WHO ARE LONGER THAN ${height}`,
  patientsLongerThan.length
);
