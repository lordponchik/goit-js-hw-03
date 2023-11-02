console.log('task-03');
console.log('');

const findBestEmployee = function (employees) {
  const keysObj = Object.keys(employees);
  const valuesObj = Object.values(employees);

  return keysObj[valuesObj.indexOf(Math.max(...valuesObj))];
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
