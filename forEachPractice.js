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
  // console.log("CHECK TO SEE WHAT IS PATIENT:", patient.weight);

  console.log(patient.weight);
});

patients.forEach(function(patient) {
  // HERE IS HOW TO CHECK YOURSELF
  //   console.log(
  //     "CHECK TO SEE WHAT IS PATIENT:",
  //     patient.gender,
  //     patient.lastName
  //   );

  const { lastName, gender } = patient;

  console.log(`Last Name: ${lastName}, Gender: ${gender}`);
});

patients.forEach(function(patient) {
  // HERE IS HOW TO CHECK YOURSELF
  //   console.log("CHECK TO SEE WHAT IS PATIENT:", patient);

  const { lastName, gender } = patient;

  //   console.log(lastName, gender);

  const prefix = gender === "m" ? "Mr" : "Mrs";

  console.log(`${prefix} ${lastName}`);
});
