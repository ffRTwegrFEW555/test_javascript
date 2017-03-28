"use strict";


//
window.onload = function() {

    function add() {
        alert(document.getElementsByTagName("h3")[0].innerText);
    }

    document.getElementById("button_1").onclick = function () {
        var title = document.getElementById("input_1").value;
        alert(title);

        debugger; // <<<<

        alert(document.cookie);
    };
};


