(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

window.onload = function () {
  var jsQuickLogin = document.getElementById('jsQuickLogin');
  var jsIdLogin = document.getElementById('jsIdLogin');
  var jsCode = document.getElementById('jsCode');
  var jsId = document.getElementById('jsId');
  var jsClean = document.getElementById('jsClean');
  var jsUserInput = document.getElementById('jsUserInput');
  var jsEmailList = document.getElementById('jsEmailList');
  var emailList = jsEmailList.querySelectorAll('li');
  var err = document.getElementById('err');

  var idHidden = function idHidden() {
    jsQuickLogin.setAttribute('class', 'login-mode lm-active');
    jsIdLogin.setAttribute('class', 'login-mode');
    jsCode.setAttribute('class', 'login-code');
    jsId.setAttribute('class', 'login-id hide');
  };

  var codeHidden = function codeHidden() {
    jsQuickLogin.setAttribute('class', 'login-mode');
    jsIdLogin.setAttribute('class', 'login-mode lm-active');
    jsCode.setAttribute('class', 'login-code hide');
    jsId.setAttribute('class', 'login-id');
  };

  jsQuickLogin.onclick = idHidden;
  jsIdLogin.onclick = codeHidden;

  var cleanToggle = function cleanToggle() {
    if (jsUserInput.value.length > 0) {
      jsClean.setAttribute('class', 'id-clean');
    } else {
      jsClean.setAttribute('class', 'id-clean hide');
    }
  };

  jsClean.onclick = function () {
    jsUserInput.value = '';
    cleanToggle();
  };

  var autoInput = function autoInput() {
    var userName = jsUserInput.value;
    var reg = userName.indexOf('@');
    if (reg > -1) {
      jsEmailList.setAttribute('class', 'email-list');

      jsEmailList.onclick = function (e) {
        var evt = e || window.event;
        var target = evt.target || evt.srcElement;
        Array.prototype.forEach.call(emailList, function (li, index) {
          if (li === target) {
            userName = userName + emailList[index].id;
            jsUserInput.value = userName;
            jsEmailList.setAttribute('class', 'email-list hide');
          }
        });
      };
    } else {
      jsEmailList.setAttribute('class', 'email-list hide');
    }
  };

  jsUserInput.oninput = function () {
    autoInput();
    cleanToggle();
  };
};

},{}]},{},[1])