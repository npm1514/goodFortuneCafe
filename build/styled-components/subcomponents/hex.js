"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hex = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: ", ";\n  bottom: ", ";\n  left: ", ";\n  right: ", ";\n  polygon {\n    fill: ", ";;\n    stroke-width: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Hex = _styledComponents["default"].svg(_templateObject(), function (props) {
  return props.top;
}, function (props) {
  return props.bottom;
}, function (props) {
  return props.left;
}, function (props) {
  return props.right;
}, function (props) {
  return props.color;
});

exports.Hex = Hex;