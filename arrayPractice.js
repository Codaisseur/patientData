const patients = require("./patients");

// accesing elements in an array
const firstPatient = patients[0];

console.log(firstPatient);

// which element to access can also be dependent on a variable
const whichElementOfArray = 9;
const tenthPatient = patients[whichElementOfArray];
// const tenthPatient = patients[9];

console.log(tenthPatient);

// DIY

// - console.log the second patient from the array
const secondPatient = patients[1];
console.log(secondPatient);

// - console.log the last patient from the array
// Solution 1:
// Only gets us the last patient if the array is exactly 20 elements
const lastPatient = patients[19];
console.log(lastPatient);

// Solution 2:
// This will always get the last element, even if our array is not 20 elements
const lastPatient2 = patients[patients.length - 1];
// Since patients.length is 20, resolves to: const lastPatient2 = patients[20 - 1] -> const lastPatient2 = patients[19];
console.log(lastPatient2);
