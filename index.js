// Write your solution in this file!
const employee = {
  name: "Ilona",
  streetAddress: "2370 Ocean Av",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value,
  };
}
const newEmployee = updateEmployeeWithKeyAndValue(
  employee,
  "Ilia",
  "345 Elmcroft BLVD"
);
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
const updateEmployee = destructivelyUpdateEmployeeWithKeyAndValue(
  employee,
  "name",
  "Sofi"
);
updateEmployee();
function deleteFromEmployeeByKey(employee, key) {
  const deleteEmployeeKey = { ...employee };
  delete deleteEmployeeKey[key];
  return deleteEmployeeKey;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
