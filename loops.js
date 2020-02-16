const patients = require("./patients");

for (let index = 0; index < patients.length; index++) {
  const patient = patients[index];

  const { firstName, lastName } = patient;

  const fullName = `${firstName} ${lastName}`;

  console.log(fullName);
}
