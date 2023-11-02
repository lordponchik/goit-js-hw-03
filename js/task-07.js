console.log('task-07');
console.log('');

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
  createTransaction(amount, type) {
    const id = this.transactions.length + 1;

    return { id: id, amount: amount, type: type };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const obj = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(obj);
    this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('недостаточно средств');
      return;
    }

    const obj = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(obj);
    this.balance -= amount;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    return this.transactions.find(el => el.id === id) || `Нет данного id`;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    return this.transactions
      .filter(el => el.type === type)
      .reduce((sum, el) => {
        return (sum += el.amount);
      }, 0);
  },
};

account.deposit(400);
console.log(account.getBalance());
account.withdraw(500);
console.log(account.getBalance());
account.withdraw(100);
console.log(account.getBalance());
account.deposit(400);
account.deposit(400);
account.deposit(400);

console.log(account.getTransactionDetails(2));
console.log(account.getTransactionDetails(7));

console.log(account.getTransactionTotal('deposit'));
