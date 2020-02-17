const patients = require("./patients");
const phoneNumber = process.argv[2];

console.log(patients);

const specificPatient = patients.find(function(patient) {
  console.log(
    "WHAT IS PATIENT?",
    patient.phoneNumber,
    "Match?",
    patient.phoneNumber === phoneNumber
  );

  return patient.phoneNumber === phoneNumber;
});

console.log(specificPatient);
