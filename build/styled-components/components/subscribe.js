"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextBox = exports.Subscribe = exports.SubscribeWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SubscribeWrap = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n  padding-bottom: 24px;\n  position: relative;\n"])), _colors.green);

exports.SubscribeWrap = SubscribeWrap;

var Subscribe = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n  max-width: 800px;\n  margin: auto;\n  padding-top: 24px;\n  position: relative;\n  text-align: center;\n  h2 {\n    color: ", "\n  }\n  textarea, input, select {\n    font-family: diazo-mvb-ex-cond, sans-serif;\n    font-weight: 400;\n    font-style: normal;\n    font-size: 18px;\n    padding: 8px;\n\n  }\n  select {\n    width: 100%;\n  }\n  textarea {\n    height: 200px;\n    width: 80%;\n  }\n  input {\n    height: 50px;\n    width: 80%;\n  }\n  table {\n    margin: auto;\n    width: 80%;\n    th, td {\n      background-color: ", ";\n      border: 1px solid ", ";\n      padding: 4px 8px;\n      text-align: center;\n    }\n    tr {\n      td:nth-of-type(1){\n        width: 40%;\n        select {\n          width: 100%;\n          height: 50px;\n        }\n      }\n      td:nth-of-type(2){\n        width: 20%;\n      }\n      td:nth-of-type(3){\n        width: 40%;\n        select {\n          width: 100%;\n          height: 50px;\n        }\n      }\n    }\n  }\n  button {\n    padding: 4px;\n  }\n  .removeButton {\n    padding: 4px 8px;\n    border: 1px solid red;\n    width: max-content;\n    border-radius: 3px;\n    margin: 12px auto 0 auto;\n    color: #fff;\n  }\n  .addButton {\n    padding: 4px 8px;\n    border: 1px solid #fff;\n    width: max-content;\n    border-radius: 3px;\n    margin: 12px auto 0 auto;\n    color: #fff;\n  }\n  .dateinput::before, .timeinput::before {\n    width: 100%;\n    content: attr(placeholder);\n  }\n  .dateinput:hover::before, .dateinput:valid::before, .timeinput:hover::before, .timeinput:valid::before {\n    width: 0%;\n    content: \"\";\n  }\n\n\n  .hoverer:hover {\n    cursor: pointer;\n    color: ", ";\n    border-color: ", ";\n  }\n  .productBox {\n    width: 80%;\n    border: 1px solid #fff;\n    padding: 8px;\n    margin: 4px auto;\n    input {\n      width: 100%;\n    }\n  }\n"])), _colors.green, _colors.white, _colors.white, _colors.darkblue, _colors.lightblue, _colors.lightblue);

exports.Subscribe = Subscribe;

var TextBox = _styledComponents["default"].button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 80%;\n  height: 0;\n  padding: 0;\n  border: 0;\n  margin: auto;\n  background-color: ", ";\n  position: relative;\n  #airplane:hover {\n    fill: ", ";\n    cursor: pointer;\n    transition: fill 0.5s;\n  }\n"])), _colors.darkblue, _colors.darkblue);

exports.TextBox = TextBox;