// patientByEmail.js
const patients = require("./patients");
// Dynamic input: run with $ node patientByEmail.js zrothery8@yellowpages.com
const email = process.argv[2];

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

  return patient.email === email;
});

console.log(specificPatient);
