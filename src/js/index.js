window.onload = function () {
  var jsQuickLogin = document.getElementById('jsQuickLogin')
  var jsIdLogin = document.getElementById('jsIdLogin')
  var jsCode = document.getElementById('jsCode')
  var jsId = document.getElementById('jsId')
  var jsClean = document.getElementById('jsClean')
  var jsUserInput = document.getElementById('jsUserInput')
  var jsEmailList = document.getElementById('jsEmailList')
  var emailList = jsEmailList.querySelectorAll('li')
  var err = document.getElementById('err')

  var idHidden = function () {
    jsQuickLogin.setAttribute('class', 'login-mode lm-active')
    jsIdLogin.setAttribute('class', 'login-mode')
    jsCode.setAttribute('class', 'login-code')
    jsId.setAttribute('class', 'login-id hide')
  }

  var codeHidden = function () {
    jsQuickLogin.setAttribute('class', 'login-mode')
    jsIdLogin.setAttribute('class', 'login-mode lm-active')
    jsCode.setAttribute('class', 'login-code hide')
    jsId.setAttribute('class', 'login-id')
  }

  jsQuickLogin.onclick = idHidden
  jsIdLogin.onclick = codeHidden

  var cleanToggle = function () {
    if (jsUserInput.value.length > 0) {
      jsClean.setAttribute('class', 'id-clean')

    } else {
      jsClean.setAttribute('class', 'id-clean hide')
    }
  }

  jsClean.onclick = function () {
    jsUserInput.value = ''
    cleanToggle()
  }

  var autoInput = function () {
    var userName = jsUserInput.value
    var reg = userName.indexOf('@')
    if (reg > -1) {
      jsEmailList.setAttribute('class', 'email-list')

      jsEmailList.onclick = function (e) {
        var evt = e || window.event
        var target = evt.target || evt.srcElement
        Array.prototype.forEach.call(emailList, function (li, index) {
          if (li === target) {
            userName = userName + emailList[index].id
            jsUserInput.value = userName
            jsEmailList.setAttribute('class', 'email-list hide')
          }
        })
      }
    } else {
      jsEmailList.setAttribute('class', 'email-list hide')
    }
  }

  jsUserInput.oninput = function () {
    autoInput()
    cleanToggle()
  }

}
