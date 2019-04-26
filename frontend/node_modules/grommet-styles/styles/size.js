"use strict";

exports.__esModule = true;
exports.sizeStyle = void 0;

var _styledComponents = require("styled-components");

var sizeStyle = function sizeStyle(name, value, theme) {
  return (0, _styledComponents.css)(["", ":", ";"], name, theme.global.size[value] || value);
};

exports.sizeStyle = sizeStyle;