"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _regenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _api = _interopRequireDefault(require("../api"));
function _default() {
  return _ref.apply(this, arguments);
}
function _ref() {
  _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/(0, _regenerator2["default"])().m(function _callee2() {
    var params,
      _args2 = arguments;
    return (0, _regenerator2["default"])().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          params = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
          return _context2.a(2, new Promise(/*#__PURE__*/function () {
            var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/(0, _regenerator2["default"])().m(function _callee(resolve, reject) {
              var result, _t;
              return (0, _regenerator2["default"])().w(function (_context) {
                while (1) switch (_context.p = _context.n) {
                  case 0:
                    _context.p = 0;
                    _context.n = 1;
                    return _api["default"].post({
                      getVersion: {
                        "provider": params !== null && params !== void 0 && params.provider ? params === null || params === void 0 ? void 0 : params.provider : process.env.TECDOC_PROVIDER_ID
                      }
                    });
                  case 1:
                    result = _context.v;
                    resolve(result);
                    _context.n = 3;
                    break;
                  case 2:
                    _context.p = 2;
                    _t = _context.v;
                    reject(_t);
                  case 3:
                    return _context.a(2);
                }
              }, _callee, null, [[0, 2]]);
            }));
            return function (_x, _x2) {
              return _ref2.apply(this, arguments);
            };
          }()));
      }
    }, _callee2);
  }));
  return _ref.apply(this, arguments);
}