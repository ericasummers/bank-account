var balance = 0;

function Account(name, balance) {
	this.name = name;
  this.balance = balance;
}

Account.prototype.deposit = function() {
	this.balance = newAccount.balance + 20;
  alert(this.balance);

}

var newAccount = new Account(name, balance);
var bill = new Account("Bill Bo", 5);
var jane = new Account("Jane Do", 20);
var mary = new Account("Mary Mo", 50);


Account.prototype.withdraw = function() {
	this.balance = newAccount.balance - 5;
  alert(this.balance);
}

bill.deposit();
bill.withdraw();
