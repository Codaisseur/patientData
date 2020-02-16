const patients = require("./patients");

// declare function
function displayFullName(patient) {
  // HERE IS HOW TO CHECK YOURSELF
  // console.log('CHECK TO SEE WHAT IS PATIENT:', patient)
  const { firstName, lastName } = patient;

  const fullName = `${firstName} ${lastName}`;

  console.log(fullName);
}

// pass as callback
patients.forEach(displayFullName);

// pass anonymous function directly
patients.forEach(function(patient) {
  // HERE IS HOW TO CHECK YOURSELF
  // console.log("CHECK TO SEE WHAT IS PATIENT:", patient);
  const { firstName, age } = patient;

  console.log(`${firstName} - age: ${age}`);
});

// DIY 1 weight:

patients.forEach(function(patient) {
  // HERE IS HOW TO CHECK YOURSELF
  console.log("CHECK TO SEE WHAT IS PATIENT:", patient.weight);
});
