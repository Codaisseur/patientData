// patientByEmail.js
const patients = require("./patients");
const email = "radolthineg@mayoclinic.com";

console.log(patients);

const specificPatient = patients.find(function(patient) {
  console.log(patient);
});

console.log(specificPatient);
