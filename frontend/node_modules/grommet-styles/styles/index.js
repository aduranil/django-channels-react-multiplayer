"use strict";

exports.__esModule = true;

var _color = require("./color");

Object.keys(_color).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _color[key];
});

var _size = require("./size");

Object.keys(_size).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  exports[key] = _size[key];
});