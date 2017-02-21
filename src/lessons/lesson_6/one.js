"use strict";

var x = 1;
var y = 2;
var c;


// унарный
x = -x;
c = -(+x - -y);


// бинарный
c = x + y;
c = x - y;
c = x / y;
c = x * y;
c = x % y;
c = x - y;


// to string
c = x + "";
c = 15 + "sec.";
c = "key: " + "value";


// to number
c = +"15";

x = "5";
y = "6";
c = (+x / +y);


//
var a, b, c;
a = b = c = 2;


// increment, decrement (prefix, postfix)
x--;
y++;

++x;
--y;

c = x++ / --y;


//
c += c++;
c -= c--;
c /= ++c;
c *= --c;
c %= c++ + c;


//
c = x & y;
c = x | y;
c = x ^ y;
c = ~x & y;
c = x >> y;
c = x << y;
c = x >>> y;