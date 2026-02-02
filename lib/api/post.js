"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _regenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
var _config = _interopRequireDefault(require("./config"));
function _default(_x) {
  return _ref.apply(this, arguments);
}
function _ref() {
  _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/(0, _regenerator2["default"])().m(function _callee4(params) {
    return (0, _regenerator2["default"])().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          return _context4.a(2, new Promise(/*#__PURE__*/function () {
            var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/(0, _regenerator2["default"])().m(function _callee3(resolve, reject) {
              var _retry, _retry2, _t2, _t3, _t4, _t5;
              return (0, _regenerator2["default"])().w(function (_context3) {
                while (1) switch (_context3.p = _context3.n) {
                  case 0:
                    _retry2 = function _retry4() {
                      _retry2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/(0, _regenerator2["default"])().m(function _callee2() {
                        return (0, _regenerator2["default"])().w(function (_context2) {
                          while (1) switch (_context2.n) {
                            case 0:
                              return _context2.a(2, new Promise(/*#__PURE__*/function () {
                                var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/(0, _regenerator2["default"])().m(function _callee(resolve, reject) {
                                  var result, r, _t;
                                  return (0, _regenerator2["default"])().w(function (_context) {
                                    while (1) switch (_context.p = _context.n) {
                                      case 0:
                                        _context.p = 0;
                                        _context.n = 1;
                                        return (0, _nodeFetch["default"])(_config["default"].apiUrl(), {
                                          method: 'POST',
                                          body: JSON.stringify(params),
                                          credentials: "same-origin",
                                          useSessionCookies: true
                                        });
                                      case 1:
                                        result = _context.v;
                                        _context.n = 2;
                                        return result.json();
                                      case 2:
                                        r = _context.v;
                                        resolve(r);
                                        _context.n = 4;
                                        break;
                                      case 3:
                                        _context.p = 3;
                                        _t = _context.v;
                                        reject(_t);
                                      case 4:
                                        return _context.a(2);
                                    }
                                  }, _callee, null, [[0, 3]]);
                                }));
                                return function (_x4, _x5) {
                                  return _ref3.apply(this, arguments);
                                };
                              }()));
                          }
                        }, _callee2);
                      }));
                      return _retry2.apply(this, arguments);
                    };
                    _retry = function _retry3() {
                      return _retry2.apply(this, arguments);
                    };
                    if (_config["default"].getProvider() != undefined) {
                      Object.keys(params).forEach(function (x) {
                        params[x].provider = _config["default"].getProvider();
                      });
                    }
                    _context3.p = 1;
                    _t2 = resolve;
                    _context3.n = 2;
                    return _retry();
                  case 2:
                    _t2(_context3.v);
                    _context3.n = 7;
                    break;
                  case 3:
                    _context3.p = 3;
                    _t3 = _context3.v;
                    _context3.p = 4;
                    _t4 = resolve;
                    _context3.n = 5;
                    return _retry();
                  case 5:
                    _t4(_context3.v);
                    _context3.n = 7;
                    break;
                  case 6:
                    _context3.p = 6;
                    _t5 = _context3.v;
                    reject(_t5);
                  case 7:
                    return _context3.a(2);
                }
              }, _callee3, null, [[4, 6], [1, 3]]);
            }));
            return function (_x2, _x3) {
              return _ref2.apply(this, arguments);
            };
          }()));
      }
    }, _callee4);
  }));
  return _ref.apply(this, arguments);
}