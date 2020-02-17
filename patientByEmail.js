// patientByEmail.js
const patients = require("./patients");
const email = process.argv[2];

const specificPatient = patients.find(function(patient) {
  return patient.email === email;
});

if (specificPatient !== undefined) {
  console.log("OUTPUT:", specificPatient);
} else {
  console.log(`Patient with email: ${email}, not found`);
}
