var balance = 0;

function Account(name, balance) {
	this.firstLastName = name;
  this.balance = balance;
}

Account.prototype.deposit = function() {
	return this.balance = (newAccount.balance + 20);
}

Account.prototype.withdraw = function() {
	return this.balance = (newAccount.balance - 5);
}

var newAccount;



$(document).ready(function() {
  $("form.inputs").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#fullName").val();
    var inputtedBalance = parseInt($("input#newbalance").val());
    var newAccount = new Account(inputtedName, inputtedBalance);

    alert(newAccount.firstLastName);
    alert(newAccount.balance);


    alert(newAccount.deposit());
    alert(newAccount.withdraw());
  });
});
