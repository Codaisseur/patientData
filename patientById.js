const patients = require("./patients");
// dynamic data: run like this $ node patientById.js 2412
const id = parseInt(process.argv[2]);

const specificPatient = patients.find(function(patient) {
  console.log("WHAT IS PATIENT?", patient);
  if (id === patient.id) {
    return true;
  } else {
    return false;
  }
});

console.log("OUTPUT:", specificPatient);
