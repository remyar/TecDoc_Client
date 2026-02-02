"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _config = _interopRequireDefault(require("./api/config"));
var _getBrands = _interopRequireDefault(require("./tecdoc/getBrands"));
var _getAmBrands = _interopRequireDefault(require("./tecdoc/getAmBrands"));
var _getVersion = _interopRequireDefault(require("./tecdoc/getVersion"));
var _getManufacturers = _interopRequireDefault(require("./tecdoc/getManufacturers"));
var _getManufacturers2 = _interopRequireDefault(require("./tecdoc/getManufacturers2"));
var _getKeyValues = _interopRequireDefault(require("./tecdoc/getKeyValues"));
var _getDirectArticlesByIds = _interopRequireDefault(require("./tecdoc/getDirectArticlesByIds7"));
var _getDirectArticlesByIds2 = _interopRequireDefault(require("./tecdoc/getDirectArticlesByIds6"));
var _getAssignedArticlesByIds = _interopRequireDefault(require("./tecdoc/getAssignedArticlesByIds7"));
var _getAssignedArticlesByIds2 = _interopRequireDefault(require("./tecdoc/getAssignedArticlesByIds6"));
var _getArticlePartList = _interopRequireDefault(require("./tecdoc/getArticlePartList"));
var _default = exports["default"] = {
  setProvider: _config["default"].setProvider,
  getBrands: _getBrands["default"],
  getAmBrands: _getAmBrands["default"],
  getVersion: _getVersion["default"],
  getManufacturers: _getManufacturers["default"],
  getManufacturers2: _getManufacturers2["default"],
  getKeyValues: _getKeyValues["default"],
  getDirectArticlesByIds7: _getDirectArticlesByIds["default"],
  getDirectArticlesByIds6: _getDirectArticlesByIds2["default"],
  getAssignedArticlesByIds7: _getAssignedArticlesByIds["default"],
  getAssignedArticlesByIds6: _getAssignedArticlesByIds2["default"],
  getArticlePartList: _getArticlePartList["default"]
};