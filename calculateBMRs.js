const patients = require("./patients");

console.log(patients);

function calculateBMR(weight, height, ageOfUser, genderOfUser) {
  const heightInCm = height * 100;

  let BMR;

  if (genderOfUser === "m") {
    BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser + 50;
  } else {
    BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser - 150;
  }

  return BMR;
}

const bmrs = patients.map(function(patient) {
  console.log("WHAT IS PATIENT?", patient);

  const BMR = calculateBMR(
    patient.weight,
    patient.height,
    patient.age,
    patient.gender
  );

  return BMR;
});

console.log(bmrs);
