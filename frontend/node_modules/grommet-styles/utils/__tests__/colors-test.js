"use strict";

var _ = require("../..");

test('color is dark', function () {
  expect((0, _.colorIsDark)('#000000')).toBeTruthy();
  expect((0, _.colorIsDark)('#000')).toBeTruthy();
  expect((0, _.colorIsDark)('rgb(0, 0, 0)')).toBeTruthy();
});
test('color is light', function () {
  expect((0, _.colorIsDark)('#FFFFFF')).toBeFalsy();
  expect((0, _.colorIsDark)('#FFF')).toBeFalsy();
  expect((0, _.colorIsDark)('rgb(255, 255, 255)')).toBeFalsy();
  expect((0, _.colorIsDark)('white')).toBeFalsy();
});