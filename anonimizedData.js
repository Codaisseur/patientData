const patients = require("./patients");
console.log(patients);

const anonimizedData = patients.map(function(patient) {
  return {
    id: patient.id,
    age: patient.age
  };
});

console.log(anonimizedData);
