"use strict";


//
var globalVar = "global";

function showMessage(msg, description) {
    var localVar = "local";
    description = description || "null=(";

    alert(msg + " + " + description + " + " + localVar + " + " + globalVar);
}

showMessage("Hello");
showMessage("World!");
showMessage("World!", "description=)");


//
function checkRedColor(color, equalsIgnoreCase) {
    return equalsIgnoreCase ? color.toLowerCase() === "red" : color === "red";
}

alert(checkRedColor("red"));
alert(checkRedColor("rEd"));
alert(checkRedColor("rEd", true));



/*
     showMessage(..)     // префикс show, "показать" сообщение
     getAge(..)          // get, "получает" возраст
     calcD(..)           // calc, "вычисляет" дискриминант
     createForm(..)      // create, "создает" форму
     checkPermission(..) // check, "проверяет" разрешение, возвращает true/false
 */
