var string = document.getElementsByTagName("p")[0].textContent;

if (string != null) {
    alert(string);
} else {
    alert("string null");
}

document.getElementsByTagName("p")[0].textContent = "two async";