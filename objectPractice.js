const patients = require("./patients");
const firstPatient = patients[0];

// 1. Solution with desctructuring
const { age, weight, height } = firstPatient;

// 1. Solution with dot notation
// const age = firstPatient.age;
// const weight = firstPatient.weight;
// const height = firstPatient.height;

console.log(age, weight, height);

// 2. Solution with desctructuring
const { firstName, lastName } = firstPatient;

// 2. Solution with dot notation
// const firstName = firstPatient.firstName;
// const lastName = firstPatient.lastName;

const fullName = `${firstName} ${lastName}`;

console.log(fullName);

if (firstPatient.dailyExercise === "no") {
  console.log("does not exercise");
} else {
  console.log("this patient exercises");
}
