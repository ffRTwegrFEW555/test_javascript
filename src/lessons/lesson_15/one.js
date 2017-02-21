"use strict";


// function declaration
function showMessage(msg) {
    alert(msg);
}
showMessage("one");


//
var funct = showMessage;
funct("two");

funct = null;
// funct("three"); // error


// function expression
var showMsg = function(first, second) {
    alert(first + second);
};
showMsg("1", "2");


// anonymous function
function ask(question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}

ask(
    "You accept?",
    function() {
        alert("Yes!");
    },
    function() {
        alert("No!");
    });


// new Function
var newFunction = new Function("a, b", "return a + b;");
alert(newFunction(1, 2));


// named function expression
var funct = function sayHi(n) {
    if (n == 0) {
        return;
    }
    alert(n);
    sayHi(--n);
};
funct(2);