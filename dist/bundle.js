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

eval("const form = document.getElementById('form');\nconst username = document.getElementById('username');\nconst email = document.getElementById('email');\nconst password = document.getElementById('password');\nconst password2 = document.getElementById('password2');\n\n\n//show error message\nfunction showError(input, message) {\n    const formGroup = input.parentElement;\n    formGroup.className = 'form-group error';\n    const small = formGroup.querySelector('small');\n    small.innerText = message;\n}\n\n//show success\nfunction showSuccess(input) {\n    const formGroup = input.parentElement;\n    formGroup.className = 'form-group valid';\n}\n\n//check email valid\nfunction checkEmail(input) {\n    const re = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n\n    if (re.test(input.value.trim())) {\n        showSuccess(input)\n    } else {\n        showError(input, 'Email is not valid')\n    }\n}\n\n\n\n//check require function\nfunction checkRequired(inputArr) {\n    inputArr.forEach(input => {\n        if (input.value.trim() === '') {\n            showError(input, `${labelName(input)} is required`);\n        } else {\n            showSuccess(input);\n        }\n\n    });\n}\n\n\n//Label name\n\nfunction labelName(input) {\n    return input.id.charAt(0).toUpperCase() + input.id.slice(1);\n}\n\n\n//check input lenght\n\nfunction checkLength(input, min, max) {\n    if (input.value.length < min) {\n        showError(\n            input, `${labelName(input)} must be at least ${min} characters`\n        );\n    } else if (input.value.length > max) {\n        showError(input, `${labelName(input)} must be less than ${max} characters`);\n\n    } else {\n        showSuccess(input);\n    }\n}\n\n//password match\nfunction checkPasswordsMatch(input1, input2) {\n    if (input1.value !== input2.value) {\n        showError(input2, 'Passwords do not match');\n    }\n}\n\n\n//event listener\nform.addEventListener('submit', e => {\n    e.preventDefault();\n\n\n    checkRequired([username, email, password, password2]);\n    checkLength(username, 3, 15);\n    checkLength(password, 6, 25);\n    checkEmail(email);\n    checkPasswordsMatch(password, password2);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcbmNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lJyk7XG5jb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpO1xuY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKTtcbmNvbnN0IHBhc3N3b3JkMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZDInKTtcblxuXG4vL3Nob3cgZXJyb3IgbWVzc2FnZVxuZnVuY3Rpb24gc2hvd0Vycm9yKGlucHV0LCBtZXNzYWdlKSB7XG4gICAgY29uc3QgZm9ybUdyb3VwID0gaW5wdXQucGFyZW50RWxlbWVudDtcbiAgICBmb3JtR3JvdXAuY2xhc3NOYW1lID0gJ2Zvcm0tZ3JvdXAgZXJyb3InO1xuICAgIGNvbnN0IHNtYWxsID0gZm9ybUdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ3NtYWxsJyk7XG4gICAgc21hbGwuaW5uZXJUZXh0ID0gbWVzc2FnZTtcbn1cblxuLy9zaG93IHN1Y2Nlc3NcbmZ1bmN0aW9uIHNob3dTdWNjZXNzKGlucHV0KSB7XG4gICAgY29uc3QgZm9ybUdyb3VwID0gaW5wdXQucGFyZW50RWxlbWVudDtcbiAgICBmb3JtR3JvdXAuY2xhc3NOYW1lID0gJ2Zvcm0tZ3JvdXAgdmFsaWQnO1xufVxuXG4vL2NoZWNrIGVtYWlsIHZhbGlkXG5mdW5jdGlvbiBjaGVja0VtYWlsKGlucHV0KSB7XG4gICAgY29uc3QgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuXG4gICAgaWYgKHJlLnRlc3QoaW5wdXQudmFsdWUudHJpbSgpKSkge1xuICAgICAgICBzaG93U3VjY2VzcyhpbnB1dClcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaG93RXJyb3IoaW5wdXQsICdFbWFpbCBpcyBub3QgdmFsaWQnKVxuICAgIH1cbn1cblxuXG5cbi8vY2hlY2sgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gY2hlY2tSZXF1aXJlZChpbnB1dEFycikge1xuICAgIGlucHV0QXJyLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBpZiAoaW5wdXQudmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgc2hvd0Vycm9yKGlucHV0LCBgJHtsYWJlbE5hbWUoaW5wdXQpfSBpcyByZXF1aXJlZGApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvd1N1Y2Nlc3MoaW5wdXQpO1xuICAgICAgICB9XG5cbiAgICB9KTtcbn1cblxuXG4vL0xhYmVsIG5hbWVcblxuZnVuY3Rpb24gbGFiZWxOYW1lKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0LmlkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaW5wdXQuaWQuc2xpY2UoMSk7XG59XG5cblxuLy9jaGVjayBpbnB1dCBsZW5naHRcblxuZnVuY3Rpb24gY2hlY2tMZW5ndGgoaW5wdXQsIG1pbiwgbWF4KSB7XG4gICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA8IG1pbikge1xuICAgICAgICBzaG93RXJyb3IoXG4gICAgICAgICAgICBpbnB1dCwgYCR7bGFiZWxOYW1lKGlucHV0KX0gbXVzdCBiZSBhdCBsZWFzdCAke21pbn0gY2hhcmFjdGVyc2BcbiAgICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA+IG1heCkge1xuICAgICAgICBzaG93RXJyb3IoaW5wdXQsIGAke2xhYmVsTmFtZShpbnB1dCl9IG11c3QgYmUgbGVzcyB0aGFuICR7bWF4fSBjaGFyYWN0ZXJzYCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBzaG93U3VjY2VzcyhpbnB1dCk7XG4gICAgfVxufVxuXG4vL3Bhc3N3b3JkIG1hdGNoXG5mdW5jdGlvbiBjaGVja1Bhc3N3b3Jkc01hdGNoKGlucHV0MSwgaW5wdXQyKSB7XG4gICAgaWYgKGlucHV0MS52YWx1ZSAhPT0gaW5wdXQyLnZhbHVlKSB7XG4gICAgICAgIHNob3dFcnJvcihpbnB1dDIsICdQYXNzd29yZHMgZG8gbm90IG1hdGNoJyk7XG4gICAgfVxufVxuXG5cbi8vZXZlbnQgbGlzdGVuZXJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cbiAgICBjaGVja1JlcXVpcmVkKFt1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkLCBwYXNzd29yZDJdKTtcbiAgICBjaGVja0xlbmd0aCh1c2VybmFtZSwgMywgMTUpO1xuICAgIGNoZWNrTGVuZ3RoKHBhc3N3b3JkLCA2LCAyNSk7XG4gICAgY2hlY2tFbWFpbChlbWFpbCk7XG4gICAgY2hlY2tQYXNzd29yZHNNYXRjaChwYXNzd29yZCwgcGFzc3dvcmQyKTtcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });