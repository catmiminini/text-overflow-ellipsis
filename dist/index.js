"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./index.css");
var _TextAutoEllipsis = require("./TextAutoEllipsis");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Test = function Test() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 300,
      height: 300,
      border: '1px solid red'
    }
  }, /*#__PURE__*/_react["default"].createElement(_TextAutoEllipsis.SingleLineCSSEllipsis, null, "12345678901234567890123456789012345678901234567890123456789012345678901234567890"), /*#__PURE__*/_react["default"].createElement(_TextAutoEllipsis.MultiLinesCSSEllipsis, null, "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890"));
};
var _default = Test;
exports["default"] = _default;