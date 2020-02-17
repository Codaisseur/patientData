const patients = require("./patients");

const fullNames = patients.map(function(patient) {
  console.log("WHAT IS PATIENT", patient);
  const { firstName, lastName } = patient;
  return `${firstName} ${lastName}`;
});

console.log(fullNames);
