/* exported Bank */
/* global Account */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (!Number.isInteger(balance) || balance <= 0) {
    return null;
  } else {
    var newAccount = new Account(this.nextAccountNumber++, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    return newAccount.number;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalAssets = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    totalAssets += this.accounts[i].getBalance();
  }
  return totalAssets;
};
