console.log('task-01');
console.log('');

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keysObj = Object.keys(user);

for (const iterator of keysObj) {
  console.log(`${iterator}: ${user[iterator]}`);
}
