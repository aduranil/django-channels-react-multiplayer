"use strict";

exports.__esModule = true;
exports.colorStyle = void 0;

var _styledComponents = require("styled-components");

var _utils = require("../utils");

var colorStyle = function colorStyle(name, value, theme, required) {
  return (0, _styledComponents.css)(["", ":", ";"], name, (0, _utils.normalizeColor)(value, theme, required));
};

exports.colorStyle = colorStyle;