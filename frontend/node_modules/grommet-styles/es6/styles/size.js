import { css } from 'styled-components';
export var sizeStyle = function sizeStyle(name, value, theme) {
  return css(["", ":", ";"], name, theme.global.size[value] || value);
};