"use strict";


//
var ACCESS_ADMIN        = 1;
var ACCESS_GOODS_VIEW   = 2;
var ACCESS_GOODS_EDIT   = 4;
var ACCESS_ARTICLE_VIEW = 8;
var ACCESS_ARTICLE_EDIT = 16;

var guest =
    ACCESS_GOODS_VIEW |
    ACCESS_ARTICLE_VIEW;

var editor =
    guest |
    ACCESS_GOODS_EDIT |
    ACCESS_ARTICLE_EDIT;

var admin =
    editor |
    ACCESS_ADMIN;


// check
var access;

access = guest & ACCESS_ADMIN;
access = guest & ACCESS_ARTICLE_VIEW;
access = guest & ACCESS_ARTICLE_EDIT;


// test

alert(isInteger(1));    // true
alert(isInteger(1.5));  // false
alert(isInteger(-0.5)); // false

function isInteger(number) {
    return (number - (~~number)) == 0
}

