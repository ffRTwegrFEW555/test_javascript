"use strict";


//
var x = 4;
var y = 5;


//
if (x > y) {
    alert("one!");
} else if (x > 10) {
    alert("two!");
} else {
    alert("three!");
}


//
y == 3 ? alert("yes") : alert("no");


// ||, |, &&, &
if (x > y || ++x > 10) {}
alert("bingo, x = " + x);

if (x > y | ++x > 10) {}
alert("bingo, x = " + x);


//
false && alert("123");
false & alert("123456");


//
alert("");
alert(!true);


//
alert("");
alert(!"text");
alert(!!"text");


//
alert("");
alert(alert(1) || 2 || undefined);
alert(null || 2 || undefined);
alert(1 && null && 2);