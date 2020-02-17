const patients = require("./patients");
const phoneNumber = "+86-511-277-5074";

console.log(patients);

const specificPatient = patients.find(function(patient) {
  console.log(
    "WHAT IS PATIENT?",
    patient.phoneNumber,
    "Match?",
    patient.phoneNumber === phoneNumber
  );
});

console.log(specificPatient);
