const patients = require("./patients");
// hardcoding age 65 for now, we can make this dynamic later
const age = parseInt(process.argv[2]);

const patientsOlderThan = patients.filter(function(patient) {
  console.log("WHAT IS PATIENT?", patient);
  if (patient.age > age) {
    return true;
  } else {
    return false;
  }
});

console.log("OUTPUT:", patientsOlderThan);
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(`NUMBER OF PATIENTS OLDER THAN ${age}:`, patientsOlderThan.length);
