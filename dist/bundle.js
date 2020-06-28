/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const form = document.getElementById('form');\nconst username = document.getElementById('username');\nconst email = document.getElementById('email');\nconst password = document.getElementById('password');\nconst password2 = document.getElementById('password2');\n\n\n//show error message\nfunction showError(input, message) {\n    const formGroup = input.parentElement;\n    formGroup.className = 'form-group error';\n    const small = formGroup.querySelector('small');\n    small.innerText = message;\n}\n\n//show success\nfunction showSuccess(input) {\n    const formGroup = input.parentElement;\n    formGroup.className = 'form-group valid';\n}\n\n//check email valid\nfunction isValidEmail(email) {\n    const re = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n    return re.test(String(email).toLowerCase());\n}\n\n//event listener\nform.addEventListener('submit', e => {\n    e.preventDefault();\n\n    //username\n    if (username.value === '') {\n        showError(username, 'Username is required');\n    } else {\n        showSuccess(username);\n    }\n\n    //email\n    if (email.value === '') {\n        showError(email, 'Email is required');\n    } else if (!isValidEmail(email.value)) {\n        showError(email, 'Email is not Valid');\n    }\n    else {\n        showSuccess(email);\n    }\n\n    //password\n    if (password.value === '') {\n        showError(password, 'Password is required');\n    } else {\n        showSuccess(password);\n    }\n\n    //confirm password\n    if (password2.value === '') {\n        showError(password2, 'Password2 is required');\n    } else {\n        showSuccess(password2);\n    }\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcbmNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lJyk7XG5jb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpO1xuY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKTtcbmNvbnN0IHBhc3N3b3JkMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZDInKTtcblxuXG4vL3Nob3cgZXJyb3IgbWVzc2FnZVxuZnVuY3Rpb24gc2hvd0Vycm9yKGlucHV0LCBtZXNzYWdlKSB7XG4gICAgY29uc3QgZm9ybUdyb3VwID0gaW5wdXQucGFyZW50RWxlbWVudDtcbiAgICBmb3JtR3JvdXAuY2xhc3NOYW1lID0gJ2Zvcm0tZ3JvdXAgZXJyb3InO1xuICAgIGNvbnN0IHNtYWxsID0gZm9ybUdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ3NtYWxsJyk7XG4gICAgc21hbGwuaW5uZXJUZXh0ID0gbWVzc2FnZTtcbn1cblxuLy9zaG93IHN1Y2Nlc3NcbmZ1bmN0aW9uIHNob3dTdWNjZXNzKGlucHV0KSB7XG4gICAgY29uc3QgZm9ybUdyb3VwID0gaW5wdXQucGFyZW50RWxlbWVudDtcbiAgICBmb3JtR3JvdXAuY2xhc3NOYW1lID0gJ2Zvcm0tZ3JvdXAgdmFsaWQnO1xufVxuXG4vL2NoZWNrIGVtYWlsIHZhbGlkXG5mdW5jdGlvbiBpc1ZhbGlkRW1haWwoZW1haWwpIHtcbiAgICBjb25zdCByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gICAgcmV0dXJuIHJlLnRlc3QoU3RyaW5nKGVtYWlsKS50b0xvd2VyQ2FzZSgpKTtcbn1cblxuLy9ldmVudCBsaXN0ZW5lclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvL3VzZXJuYW1lXG4gICAgaWYgKHVzZXJuYW1lLnZhbHVlID09PSAnJykge1xuICAgICAgICBzaG93RXJyb3IodXNlcm5hbWUsICdVc2VybmFtZSBpcyByZXF1aXJlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dTdWNjZXNzKHVzZXJuYW1lKTtcbiAgICB9XG5cbiAgICAvL2VtYWlsXG4gICAgaWYgKGVtYWlsLnZhbHVlID09PSAnJykge1xuICAgICAgICBzaG93RXJyb3IoZW1haWwsICdFbWFpbCBpcyByZXF1aXJlZCcpO1xuICAgIH0gZWxzZSBpZiAoIWlzVmFsaWRFbWFpbChlbWFpbC52YWx1ZSkpIHtcbiAgICAgICAgc2hvd0Vycm9yKGVtYWlsLCAnRW1haWwgaXMgbm90IFZhbGlkJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzaG93U3VjY2VzcyhlbWFpbCk7XG4gICAgfVxuXG4gICAgLy9wYXNzd29yZFxuICAgIGlmIChwYXNzd29yZC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgc2hvd0Vycm9yKHBhc3N3b3JkLCAnUGFzc3dvcmQgaXMgcmVxdWlyZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaG93U3VjY2VzcyhwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgLy9jb25maXJtIHBhc3N3b3JkXG4gICAgaWYgKHBhc3N3b3JkMi52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgc2hvd0Vycm9yKHBhc3N3b3JkMiwgJ1Bhc3N3b3JkMiBpcyByZXF1aXJlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dTdWNjZXNzKHBhc3N3b3JkMik7XG4gICAgfVxufSkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });