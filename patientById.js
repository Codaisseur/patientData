const patients = require("./patients");
// hardcoding id 4212 for now, we can make this dynamic later
const id = 2412;

const specificPatient = patients.find(function(patient) {
  console.log("WHAT IS PATIENT?", patient);
  if (id === patient.id) {
    return true;
  } else {
    return false;
  }
});

console.log("OUTPUT:", specificPatient);
