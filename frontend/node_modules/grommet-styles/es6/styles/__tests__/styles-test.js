function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import renderer from 'react-test-renderer';
import styled from 'styled-components';
import 'jest-styled-components';
import { colorStyle, sizeStyle } from '../..';
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

var Box = styled.div.withConfig({
  displayName: "styles-test__Box",
  componentId: "sc-19fo86w-0"
})(["", " ", " ", ""], function (props) {
  return props.bg && colorStyle('background-color', props.bg.color || props.bg, props.theme);
}, function (props) {
  return props.color && colorStyle('color', props.color.color || props.color, props.theme, true);
}, function (props) {
  return props.width && sizeStyle('width', props.width, props.theme);
});
test('renders a div with color', function () {
  var component = renderer.create(React.createElement("div", null, React.createElement(Box, {
    bg: "white",
    theme: fakeTheme
  }, "white"), React.createElement(Box, {
    bg: "text",
    theme: fakeTheme
  }, "black"), React.createElement(Box, {
    bg: "icon",
    theme: fakeTheme
  }, "white"), React.createElement(Box, {
    bg: "text",
    theme: fakeDarkTheme
  }, "white"), React.createElement(Box, {
    bg: "#767676",
    theme: fakeDarkTheme
  }, "#767676"), React.createElement(Box, {
    bg: {
      color: 'text'
    },
    theme: fakeTheme
  }, "black"), React.createElement(Box, {
    bg: {
      color: 'text'
    },
    theme: fakeDarkTheme
  }, "white")));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('renders a div with size', function () {
  var component = renderer.create(React.createElement("div", null, React.createElement(Box, {
    width: "small",
    theme: fakeTheme
  }, "small"), React.createElement(Box, {
    width: "medium",
    theme: fakeTheme
  }, "medium"), React.createElement(Box, {
    width: "large",
    theme: fakeTheme
  }, "large"), React.createElement(Box, {
    width: "24px",
    theme: fakeTheme
  }, "24px")));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});