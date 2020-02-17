const patients = require("./patients");

console.log(patients);

const emailAdresses = patients.map(function(patient) {
  console.log("WHAT IS PATIENT", patient);
  return patient.email;
});

console.log(emailAdresses);
