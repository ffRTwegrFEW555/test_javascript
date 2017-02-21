"use strict";


// tests


// rewrite with "?" and "||"
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}
alert(checkAge(17));
alert(checkAge(19));


function checkAge(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}
alert(checkAge(17));
alert(checkAge(19));


//
function min(first, second) {
    return first < second ? first : second;
}
alert(min(2, 5) == 2);
alert(min(3, -1) == -1);
alert(min(1, 1) == 1);

alert(min(1, 1) == 2);


/*
     pow(3, 2) = 3 * 3 = 9
     pow(3, 3) = 3 * 3 * 3 = 27
     pow(1, 100) = 1 * 1 * ...*1 = 1
 */
function pow(first, second) {
    var result = 1;
    for (var i = 0; i < second; i++) {
        result *= first;
    }
    alert(result);
}

pow(3, 2);
pow(3, 3);
pow(1, 100);
