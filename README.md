<h1 id="home">Homework :clipboard:</h1>

## goit-js-hw-03


* 🇺🇸 [English](#en)
* 🇺🇦 [Ukrainian](#uk)
* 🇷🇺 [Russian](#ru)

--- 

<h3 id="en">📚 EN 📚</h3>

# Acceptance criteria

- Repository created `goit-js-hw-03`
- When submitting homework there is a link to the source files in the repository
- Each task is executed in a separate file named `task-task_number.js`. Use `<script type="module">`
  to close the job code in a separate scope and avoid identifier name conflicts.
- Variable names are clear and descriptive
- Code formatted using Prettier

# Task 1

Write a script that, for the `user` object, sequentially:

- adds a `mood` field with the value `'happy'`
- replaces the value `hobby` with `'skydiving'`
- replaces the value `premium` with `false`
- outputs the contents of the `user` object in `key:value` format using `Object.keys()` and
  `for...of`

```js
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
```

# Task 2

Write a function `countProps(obj)` that counts the number of properties in an object. The function
returns a number - number of properties.

```js
const countProps = function (obj) {
  // code
};

/*
 * Function calls to check the functionality of your implementation.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
```

# Task 3

Write a function `findBestEmployee(employees)` that takes an employee object and returns the name
the most productive (who completed the most tasks). Employees and number of completed tasks are
contained as object properties in the format `"name":"number of tasks"`.

```js
const findBestEmployee = function (employees) {
  // code
};

/*
 * Function calls to check the functionality of your implementation.
 */
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
```

# Task 4

Write a function `countTotalSalary(employees)` that accepts a salary object. The function calculates
the total amount employees' salaries and returns them. Each field of the object passed to the
function has the form `"name":"salary"`.

```js
const countTotalSalary = function (employees) {
  // code
};

/*
 * Function calls to check the functionality of your implementation.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
```

# Task 5

Write a function `getAllPropValues(arr, prop)` that gets an array of objects and a property name.
Returns an array of the values of a particular `prop` property from each object in the array.

```js
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  // code
};

/*
 * Function calls to check the functionality of your implementation.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
```

# Task 6

Write a function `calculateTotalPrice(allProdcuts, productName)` that gets an array of objects and
product name (the value of the `name` property). Returns the total cost of a product
(price\*quantity).

Function calls to check the functionality of your implementation.

```js
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  // code
};

/*
 * Function calls to check the functionality of your implementation.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
```

# Task 7 - additional, not necessary

Write a script for managing your personal online banking account. There is an `account` object in
which it is necessary implement methods for working with balance and transaction history.

```js
/*
 * There are only two transaction types.
 * You can deposit or withdraw money from your account.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Each transaction is an object with properties: id, type and amount
 */

const account = {
  // Current account balance
  balance: 0,

  // Transaction history
  transactions: [],

  /*
   * The method creates and returns a transaction object.
   * Accepts transaction amount and type.
   */
  createTransaction(amount, type) {},

  /*
   * Method responsible for adding an amount to the balance.
   * Accepts the transaction amount.
   * Calls createTransaction to create a transaction object
   * and then adds it to the transaction history
   */
  deposit(amount) {},

  /*
   * Method responsible for withdrawing the amount from the balance.
   * Accepts the transaction amount.
   * Calls createTransaction to create a transaction object
   * and then adds it to the transaction history.
   *
   * If the amount is greater than the current balance, display a message
   * that withdrawal of such an amount is not possible, there are not enough funds.
   */
  withdraw(amount) {},

  /*
   * The method returns the current balance
   */
  getBalance() {},

  /*
   * The method searches for and returns a transaction object by id
   */
  getTransactionDetails(id) {},

  /*
   * The method returns the amount of funds
   * a specific transaction type from the entire transaction history
   */
  getTransactionTotal(type) {},
};
```

---
---

<h3 id="uk">📚 UK 📚 <a href="#home">⬆ Home ⬆</a></h3> 			

# Критерії прийому

- Створено репозиторій `goit-js-hw-03`
- При здачі домашньої роботи є посилання на вихідні файли у репозиторії
- Кожне завдання виконане в окремому файлі з іменем `task-номер_задания.js`. Використовуй
 `<script type="module">` щоб закрити код завдання в окремій області видимості та уникнути
 конфліктів імен ідентифікаторів
- Імена змінних та функцій зрозумілі, описові
- Код відформатовано за допомогою Prettier

# Завдання 1

Напиши скрипт, який для об'єкта `user`, послідовно:

- додає поле `mood` зі значенням `'happy'`
- замінює значення `hobby` на `'skydiving'`
- замінює значення `premium` на `false`
- виводить вміст об'єкта `user` у форматі `ключ: значення` використовуючи `Object.keys()` і `for...of`

```js
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
```
# Завдання 2

Напиши функцію `countProps(obj)`, що вважає кількість властивостей в об'єкті. Функція повертає число -
кількість властивостей.

```js
const countProps = function (obj) {
  // твій код
};

/*
 * Виклики функцій для перевірки працездатності твоєї реалізації.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
```

# Завдання 3

Напиши функцію `findBestEmployee(employees)`, яка приймає об'єкт співробітників та повертає ім'я
найпродуктивнішого (який виконав найбільше завдань). Співробітники та кількість виконаних завдань
містяться як властивості об'єкта у форматі `"ім'я": "у задач"`.

```js
const findBestEmployee = function (employees) {
  // твій код
};

/*
 * Виклики функцій для перевірки працездатності твоєї реалізації.
 */
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
```

# Завдання 4

Напиши функцію `countTotalSalary(employees)` приймаючу об'єкт зарплат. Функція вважає загальну суму
заробітної плати працівників і повертає її. Кожне поле об'єкта, що передається у функцію, має вигляд
`"ім'я": "зарплата"`.

```js
const countTotalSalary = function (employees) {
  // твій код
};

/*
 * Виклики функцій для перевірки працездатності твоєї реалізації.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
```

# Завдання 5

Напиши функцію `getAllPropValues(arr, prop)`, яка отримує масив об'єктів та ім'я властивості.
Повертає масив значень певної властивості `prop` із кожного об'єкта в масиві.

```js
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  // твій код
};

/*
 * Виклики функцій для перевірки працездатності твоєї реалізації.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
```

# Завдання 6

Напиши функцію `calculateTotalPrice(allProdcuts, productName)`, яка отримує масив об'єктів та
ім'я товару (значення якості `name`). Повертає загальну вартість продукту (ціна кількість).

Виклики функцій для перевірки працездатності твоєї реалізації.

```js
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  // твій код
};

/*
 * Виклики функцій для перевірки працездатності твоєї реалізації.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
```

# Завдання 7 - додаткове, виконувати не обов'язково

Напиши скрипт управління особистим кабінетом інтернет-банку. Є об'єкт `account` в якому необхідно
реалізувати методи для роботи з балансом та історією транзакцій.

```js
/*
 * Типів транзацький лише два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
  * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {},

  /*
   * Метод, що відповідає за додавання суми до балансу.
 * Приймає суму танзакції.
 * Викликає createTransaction для створення об'єкта транзакції
 * після чого додає його в історію транзакцій
   */
  deposit(amount) {},

  /*
* Метод, що відповідає за зняття суми з балансу.
 * Приймає суму танзакції.
 * Викликає createTransaction для створення об'єкта транзакції
 * Після чого додає його в історію транзакцій.
 *
 * Якщо amount більше ніж поточний баланс, виводь повідомлення
 * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {},

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {},

  /*
   * Метод шукає та повертає об'єкт транзації по id
   */
  getTransactionDetails(id) {},

  /*
  * Метод повертає кількість коштів
  * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {},
};
```

---
---

<h3 id="ru">📚 RU 📚 <a href="#home">⬆ Home ⬆</a></h3> 

# Критерии приема

- Создан репозиторий `goit-js-hw-03`
- При сдаче домашней работы есть ссылка на исходные файлы в репозитории
- Каждое задание выполнено в отдельном файле с именем `task-номер_задания.js`. Используй
  `<script type="module">` чтобы закрыть код задания в отдельной области видимости и избежать
  конфликтов имен идентификаторов.
- Имена переменных и функций понятные, описательные
- Код отформатирован с помощью Prettier

# Задание 1

Напиши скрипт, который, для объекта `user`, последовательно:

- добавляет поле `mood` со значением `'happy'`
- заменяет значение `hobby` на `'skydiving'`
- заменяет значение `premium` на `false`
- выводит содержимое объекта `user` в формате `ключ:значение` используя `Object.keys()` и `for...of`

```js
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
```

# Задание 2

Напиши функцию `countProps(obj)`, считающую кол-во свойств в объекте. Функция возвращает число -
количество свойств.

```js
const countProps = function (obj) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
```

# Задание 3

Напиши функцию `findBestEmployee(employees)`, которая принимает объект сотрудников и возвращает имя
самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач
содержатся как свойства объекта в формате `"имя":"кол-во задач"`.

```js
const findBestEmployee = function (employees) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
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
```

# Задание 4

Напиши функцию `countTotalSalary(employees)` принимающую объект зарплат. Функция считает общую сумму
запрплаты работников и возращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид
`"имя":"зарплата"`.

```js
const countTotalSalary = function (employees) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
```

# Задание 5

Напиши функцию `getAllPropValues(arr, prop)`, которая получает массив объектов и имя свойства.
Возвращает массив значений определенного свойства `prop` из каждого объекта в массиве.

```js
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
```

# Задание 6

Напиши функцию `calculateTotalPrice(allProdcuts, productName)`, которая получает массив объектов и
имя продукта (значение свойства `name`). Возвращает общую стоимость продукта (цена \* количество).

Вызовы функции для проверки работоспособности твоей реализации.

```js
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
```

# Задание 7 - дополнительное, выполнять не обязательно

Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account` в котором необходимо
реализовать методы для работы с балансом и историей транзакций.

```js
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {},

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {},

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {},

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {},

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {},
};
```
