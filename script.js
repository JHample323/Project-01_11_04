/*  Project 01_11_04

    Author: Jaggar Hample
    Date: 9/7/18  

    Filename: script.js
*/

"use strict";

// Create a global variable
var httpRequest = false;

// create function for getRequestObject
function getRequestObject() {
    try {
        httpRequest = new XMLHttpRequest();
    } catch (requestError) {
        document.getElementById("csset").style.visibility = "visible";
        var zip = document.getElementById("zip").value;
        if (zip.addEventListener) {
            zip.removeEventListener("keyup", checkInput, false);
        } else if (zip.attachEvent) {
            zip.detachEvent("onkeyup", checkInput);
        }
        return false;
    }
    console.log(httpRequest);
    return httpRequest;
}

// Check user input for postal code
var zip = document.getElementById("zip");
if (zip.addEventListener) {
    zip.addEventListener("keyup", checkInput, false);
}

// create function to check length of zip code
function checkInput() {
    var zip = document.getElementById("zip").value;
    if (zip.length === 5) {
        getLocation();
    } else {
        document.getElementById("city").value = "";
        document.getElementById("state").value = "";
    }
}

// function to fetch the location
function getLocation() {
    var zip = document.getElementById("zip").value;
    if (!httpRequest) {
        httpRequest = getRequestObject();
    }
    httpRequest.abort();
    httpRequest.open("get", "http://api.zippopotam.us/us/" + zip, true);
    httpRequest.send(null);
}
