webpackHotUpdate("static\\development\\pages\\mymainitems.js",{

/***/ "./pages/mymainitems.js":
/*!******************************!*\
  !*** ./pages/mymainitems.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "C:\\Users\\seano\\repos02\\react\\dwi_01\\pages\\mymainitems.js";




var Mymainitems =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Mymainitems, _React$Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Mymainitems, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var promise;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                promise = axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("http://localhost:4000/mymainitems").then(function (response) {
                  return {
                    hasErrored: false,
                    mymainitemsData: response.data
                  };
                }).catch(function (error) {
                  return {
                    hasErrored: true,
                    message: error.message
                  };
                });
                return _context.abrupt("return", promise);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Mymainitems(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Mymainitems);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Mymainitems).call(this, props));
    _this.state = {
      hasErrored: props.hasErrored,
      message: props.message,
      mymainitemsData: props.mymainitemsData
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Mymainitems, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container dwi-div dwi-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Challenge #1"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-deck",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card col-6 cardmin margintopbottom dwi-form-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "section-header section-header-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Which Case Would You Like?")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Whatever you choose, we'll add in two bonus Cabs and two crystal glasses and you'll have the complete package \u2013 worth over $250 \u2013 for ONLY $69.99 (plus $19.99 shipping & applicable tax; please allow 5-10 days for delivery, depending on shipping state)."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "dwi-radio-items",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, this.state.mymainitemsData.map(function (mymainitems) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "form-check",
          key: mymainitems.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
          className: "form-check-input",
          type: "radio",
          name: "exampleRadios",
          id: "exampleRadios1",
          value: "option1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
          className: "form-check-label",
          htmlFor: "exampleRadios1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, mymainitems.name, " "), "  +  BONUS Bottles & Glasses ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, " JUST   $", mymainitems.salePrice, " "), "  ", mymainitems.numberOfBottles, " Bottles", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/zipdeals",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          className: " dwi-view-deal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, "view wines"))));
      }))))));
    }
  }]);

  return Mymainitems;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Mymainitems);

/***/ })

})
//# sourceMappingURL=mymainitems.js.09f2538017c3802d5758.hot-update.js.map