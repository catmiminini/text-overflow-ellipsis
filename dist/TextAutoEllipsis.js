"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextAutoEllipsis = exports.SingleLineCSSEllipsis = exports.MultiLinesCSSEllipsis = void 0;
var _react = _interopRequireDefault(require("react"));
var _excluded = ["height", "minHeight", "maxHeight"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var TextAutoEllipsis = function TextAutoEllipsis(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", null, "TextAutoEllipsis");
};
exports.TextAutoEllipsis = TextAutoEllipsis;
var SingleLineCSSEllipsis = function SingleLineCSSEllipsis(_ref2) {
  var children = _ref2.children,
    className = _ref2.className,
    _ref2$style = _ref2.style,
    style = _ref2$style === void 0 ? {} : _ref2$style;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'singleline-ellipsis ' + className,
    style: style
  }, children);
};
exports.SingleLineCSSEllipsis = SingleLineCSSEllipsis;
var MultiLinesCSSEllipsis = function MultiLinesCSSEllipsis(_ref3) {
  var children = _ref3.children,
    _ref3$lines = _ref3.lines,
    lines = _ref3$lines === void 0 ? 2 : _ref3$lines,
    _ref3$className = _ref3.className,
    className = _ref3$className === void 0 ? '' : _ref3$className,
    _ref3$style = _ref3.style,
    style = _ref3$style === void 0 ? {} : _ref3$style;
  // height will be ignored, because it's not supported by WebkitLineClamp
  var height = style.height,
    minHeight = style.minHeight,
    maxHeight = style.maxHeight,
    restStyle = _objectWithoutProperties(style, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'multiline-ellipsis ' + className,
    style: _objectSpread({
      WebkitLineClamp: lines
    }, restStyle)
  }, children);
};
exports.MultiLinesCSSEllipsis = MultiLinesCSSEllipsis;