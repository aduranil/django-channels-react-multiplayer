import { css } from 'styled-components';
import { normalizeColor } from '../utils';
export var colorStyle = function colorStyle(name, value, theme, required) {
  return css(["", ":", ";"], name, normalizeColor(value, theme, required));
};