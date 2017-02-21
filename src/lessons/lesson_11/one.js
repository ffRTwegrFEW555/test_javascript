"use strict";


// to string
var x = null;
alert(x);

alert(String(null) == "null");  // <<<<<

alert("result: " + 777);
alert("result: " + true);
alert("result: " + undefined);


// to number
alert(Number("123"));           // <<<<<

alert(+"123" + 123);
alert(+"123" + +"123");
alert(+"123" + Number("123"));

alert(+undefined);
alert(+null);
alert(+false);
alert(+true);

alert(+"   \n   123 \n" + +"  123    \n    \n");


//
alert("\n   0" == 0);
alert("\n   1" == true);
alert("\n   \n" == false);


// to boolean
alert("");
alert(Boolean(1));              // <<<<<
alert(Boolean(-1));
alert(Boolean(0));