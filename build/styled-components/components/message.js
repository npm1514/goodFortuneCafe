"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextBox = exports.Message = exports.ContactID = exports.MessageWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MessageWrap = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n  padding-bottom: 24px;\n  position: relative;\n"])), _colors.darkblue);

exports.MessageWrap = MessageWrap;

var ContactID = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: -159px;\n  @media(min-width: 700px){\n    top: -74px;\n  }\n"])));

exports.ContactID = ContactID;

var Message = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  max-width: 800px;\n  margin: auto;\n  padding: 32px;\n  width: calc(100% - 64px);\n  position: relative;\n  text-align: center;\n  h2 {\n    color: ", "\n  }\n  textarea, input {\n    font-family: diazo-mvb-ex-cond, sans-serif;\n    font-weight: 400;\n    font-style: normal;\n    font-size: 18px;\n    padding: 8px;\n  }\n  textarea {\n    height: 200px;\n    width: 80%;\n  }\n  input {\n    height: 50px;\n    width: 80%;\n  }\n"])), _colors.darkblue, _colors.white);

exports.Message = Message;

var TextBox = _styledComponents["default"].button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 80%;\n  height: 0;\n  padding: 0;\n  border: 0;\n  margin: auto;\n  background-color: ", ";\n  position: relative;\n  #airplane:hover {\n    fill: ", ";\n    cursor: pointer;\n    transition: fill 0.5s;\n  }\n"])), _colors.darkblue, _colors.darkblue);

exports.TextBox = TextBox;