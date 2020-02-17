const patients = require("./patients");
console.log(patients);

const anonimizedData = patients.map(function(patient) {
  const { id, age, gender, height, weight, dailyExercise } = patient;

  return {
    id: id,
    age: age,
    gender: gender,
    height: height,
    weight: weight,
    dailyExercise: dailyExercise
  };
});

console.log(anonimizedData);
