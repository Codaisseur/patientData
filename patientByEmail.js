// patientByEmail.js
const patients = require("./patients");
const email = "radolthineg@mayoclinic.com";

console.log(patients);

const specificPatient = patients.find(function(patient) {
  console.log(
    "EMAIL of patient:",
    patient.email,
    "Email we are looking for:",
    email,
    "match?",
    patient.email === email
  );
});

console.log(specificPatient);
