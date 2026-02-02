"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _regenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
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
              var _params$articleIdPair, result, _t;
              return (0, _regenerator2["default"])().w(function (_context) {
                while (1) switch (_context.p = _context.n) {
                  case 0:
                    _context.p = 0;
                    _context.n = 1;
                    return _api["default"].post({
                      getAssignedArticlesByIds7: {
                        "articleCountry": (params === null || params === void 0 ? void 0 : params.articleCountry) || "FR",
                        "articleIdPairs": {
                          "array": (0, _toConsumableArray2["default"])((params === null || params === void 0 ? void 0 : (_params$articleIdPair = params.articleIdPairs) === null || _params$articleIdPair === void 0 ? void 0 : _params$articleIdPair.array) || [])
                        },
                        "attributs": (params === null || params === void 0 ? void 0 : params.attributs) || false,
                        "basicData": (params === null || params === void 0 ? void 0 : params.basicData) || false,
                        "documents": (params === null || params === void 0 ? void 0 : params.documents) || false,
                        "eanNumbers": (params === null || params === void 0 ? void 0 : params.eanNumbers) || false,
                        "immediateAttributs": (params === null || params === void 0 ? void 0 : params.immediateAttributs) || false,
                        "immediateInfo": (params === null || params === void 0 ? void 0 : params.immediateInfo) || false,
                        "info": (params === null || params === void 0 ? void 0 : params.info) || false,
                        "lang": (params === null || params === void 0 ? void 0 : params.lang) || "FR",
                        "linkingTargetId": params === null || params === void 0 ? void 0 : params.linkingTargetId,
                        "linkingTargetType": (params === null || params === void 0 ? void 0 : params.linkingTargetType) || "",
                        "mainArticles": (params === null || params === void 0 ? void 0 : params.mainArticles) || false,
                        "manuId": params === null || params === void 0 ? void 0 : params.manuId,
                        "modId": params === null || params === void 0 ? void 0 : params.modId,
                        "normalAustauschPrice": (params === null || params === void 0 ? void 0 : params.normalAustauschPrice) || false,
                        "oeNumbers": (params === null || params === void 0 ? void 0 : params.oeNumbers) || false,
                        "priceDate": params === null || params === void 0 ? void 0 : params.priceDate,
                        "prices": (params === null || params === void 0 ? void 0 : params.prices) || false,
                        "provider": params !== null && params !== void 0 && params.provider ? params === null || params === void 0 ? void 0 : params.provider : process.env.TECDOC_PROVIDER_ID,
                        "replacedByNumbers": (params === null || params === void 0 ? void 0 : params.replacedByNumbers) || false,
                        "replacedNumbers": (params === null || params === void 0 ? void 0 : params.replacedNumbers) || false,
                        "thumbnails": (params === null || params === void 0 ? void 0 : params.thumbnails) || false,
                        "usageNumbers": (params === null || params === void 0 ? void 0 : params.usageNumbers) || false
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