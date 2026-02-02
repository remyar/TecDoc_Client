"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _provider_ = undefined;
var _default = exports["default"] = {
  apiUrl: function apiUrl() {
    return "https://webservice.tecalliance.services/pegasus-3-0/info/proxy/services/TecdocToCatDLB.jsonEndpoint";
  },
  setProvider: function setProvider(_provider) {
    _provider_ = _provider;
  },
  getProvider: function getProvider() {
    return _provider_;
  }
};