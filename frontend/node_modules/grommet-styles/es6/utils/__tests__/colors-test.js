import { colorIsDark } from '../..';
test('color is dark', function () {
  expect(colorIsDark('#000000')).toBeTruthy();
  expect(colorIsDark('#000')).toBeTruthy();
  expect(colorIsDark('rgb(0, 0, 0)')).toBeTruthy();
});
test('color is light', function () {
  expect(colorIsDark('#FFFFFF')).toBeFalsy();
  expect(colorIsDark('#FFF')).toBeFalsy();
  expect(colorIsDark('rgb(255, 255, 255)')).toBeFalsy();
  expect(colorIsDark('white')).toBeFalsy();
});