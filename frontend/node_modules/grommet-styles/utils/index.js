"use strict";

exports.__esModule = true;

var _colors = require("./colors");

Object.keys(_colors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _colors[key];
});