window.onload = function () {
  var jsQuickLogin = document.getElementById('jsQuickLogin')
  var jsIdLogin = document.getElementById('jsIdLogin')
  var jsCode = document.getElementById('jsCode')
  var jsId = document.getElementById('jsId')
  var jsClean = document.getElementById('jsClean')
  var jsUserInput = document.getElementById('jsUserInput')
  var jsEmailList = document.getElementById('jsEmailList')
  var emailList = jsEmailList.querySelectorAll('li')
  // var err = document.getElementById('err')
  // var liIndex = 0

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

  var autoInput = function () {
    var userName = jsUserInput.value
    var reg = userName.indexOf('@')
    var reg1 = userName.indexOf('.')
    if (reg > -1 && reg1 > reg + 1) {
      jsEmailList.setAttribute('class', 'email-list hide')
    } else if (reg > -1) {
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

  jsClean.onclick = function () {
    jsUserInput.value = ''
    autoInput()
    cleanToggle()
  }

  jsUserInput.oninput = function () {
    autoInput()
    cleanToggle()
  }

  jsUserInput.onblur = function () {
    regExp()
  }

  function regExp () {
    var notNum = isNaN(jsUserInput.value)
    var userInner = jsUserInput.value
    var reg2 = userInner.indexOf('@')
    if (notNum === true && reg2 > -1) {
      return
    } else if (notNum === true) {
      userInner = jsUserInput.value + '@qq.com'
      jsUserInput.value = userInner
    }
  }
}
