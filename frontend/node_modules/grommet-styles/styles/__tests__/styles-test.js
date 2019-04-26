"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

require("jest-styled-components");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var fakeTheme = {
  global: {
    colors: {
      white: '#FFFFFF',
      text: {
        light: 'black',
        dark: 'white'
      },
      icon: 'white'
    },
    size: {
      small: '75px',
      medium: '150px',
      large: '300px'
    }
  }
};

var fakeDarkTheme = _extends({}, fakeTheme, {
  dark: true
});

var Box = _styledComponents.default.div.withConfig({
  displayName: "styles-test__Box",
  componentId: "sc-19fo86w-0"
})(["", " ", " ", ""], function (props) {
  return props.bg && (0, _.colorStyle)('background-color', props.bg.color || props.bg, props.theme);
}, function (props) {
  return props.color && (0, _.colorStyle)('color', props.color.color || props.color, props.theme, true);
}, function (props) {
  return props.width && (0, _.sizeStyle)('width', props.width, props.theme);
});

test('renders a div with color', function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement("div", null, _react.default.createElement(Box, {
    bg: "white",
    theme: fakeTheme
  }, "white"), _react.default.createElement(Box, {
    bg: "text",
    theme: fakeTheme
  }, "black"), _react.default.createElement(Box, {
    bg: "icon",
    theme: fakeTheme
  }, "white"), _react.default.createElement(Box, {
    bg: "text",
    theme: fakeDarkTheme
  }, "white"), _react.default.createElement(Box, {
    bg: "#767676",
    theme: fakeDarkTheme
  }, "#767676"), _react.default.createElement(Box, {
    bg: {
      color: 'text'
    },
    theme: fakeTheme
  }, "black"), _react.default.createElement(Box, {
    bg: {
      color: 'text'
    },
    theme: fakeDarkTheme
  }, "white")));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('renders a div with size', function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement("div", null, _react.default.createElement(Box, {
    width: "small",
    theme: fakeTheme
  }, "small"), _react.default.createElement(Box, {
    width: "medium",
    theme: fakeTheme
  }, "medium"), _react.default.createElement(Box, {
    width: "large",
    theme: fakeTheme
  }, "large"), _react.default.createElement(Box, {
    width: "24px",
    theme: fakeTheme
  }, "24px")));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});