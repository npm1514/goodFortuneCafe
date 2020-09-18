"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextBox = exports.Message = exports.MessageWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;\n  margin: auto;\n  background-color: ", ";\n  position: relative;\n  textarea {\n    width: 100%;\n    height: 200px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n  max-width: 800px;\n  margin: auto;\n  text-align: center;\n  h1 {\n    color: ", "\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n  padding-bottom: 24px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MessageWrap = _styledComponents["default"].div(_templateObject(), _colors.darkblue);

exports.MessageWrap = MessageWrap;

var Message = _styledComponents["default"].div(_templateObject2(), _colors.darkblue, _colors.white);

exports.Message = Message;

var TextBox = _styledComponents["default"].div(_templateObject3(), _colors.darkblue);

exports.TextBox = TextBox;