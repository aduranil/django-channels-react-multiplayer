'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = descToMarkdown;

var _descToJSON = require('./descToJSON');

var _descToJSON2 = _interopRequireDefault(_descToJSON);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var code = '```';

function parseAvailableAt(_ref) {
  var badge = _ref.badge,
      url = _ref.url;

  return '[![](' + badge + ')](' + url + ')';
}

function getAvailableAt(_ref2) {
  var availableAt = _ref2.availableAt;

  if (!availableAt) {
    return '';
  }
  var availableAtStr = void 0;
  if (Array.isArray(availableAt)) {
    availableAtStr = availableAt.map(function (currentAvailable) {
      return parseAvailableAt(currentAvailable);
    }).join(' ');
  } else {
    availableAtStr = parseAvailableAt(availableAt);
  }
  return '\n' + availableAtStr;
}

function getHeader(_ref3) {
  var description = _ref3.description,
      details = _ref3.details,
      deprecated = _ref3.deprecated,
      name = _ref3.name;

  return '## ' + (deprecated ? '~~' + name + '~~' : name) + (deprecated ? ' (' + deprecated + ')' : '') + '\n' + description + (details ? '\n\n' + details : '') + '\n';
}

function getUsage(_ref4) {
  var usage = _ref4.usage;

  return usage ? '\n## Usage\n\n' + code + 'javascript\n' + usage + '\n' + code : '';
}

function getDefaultValue(defaultValue) {
  var defaultValueString = (typeof defaultValue === 'undefined' ? 'undefined' : _typeof(defaultValue)) === 'object' ? JSON.stringify(defaultValue, undefined, 2) : defaultValue;

  return ' Defaults to `' + defaultValueString + '`.';
}

function getProperties(_ref5) {
  var _ref5$properties = _ref5.properties,
      properties = _ref5$properties === undefined ? [] : _ref5$properties;

  var props = properties.map(function (_ref6) {
    var defaultValue = _ref6.defaultValue,
        deprecated = _ref6.deprecated,
        description = _ref6.description,
        format = _ref6.format,
        name = _ref6.name,
        required = _ref6.required;
    return '\n' + (deprecated ? '**~~' + name + '~~**' : '**' + name + '**') + (deprecated ? ' (' + deprecated + ')' : '') + '\n\n' + (required ? 'Required. ' : '') + description + (defaultValue ? getDefaultValue(defaultValue) : '') + '\n\n' + code + '\n' + format + '\n' + code;
  });
  return '\n\n## Properties\n' + props.join('\n') + '\n  ';
}

function getIntrinsicElement(_ref7) {
  var intrinsicElement = _ref7.intrinsicElement;

  return intrinsicElement ? '\n## Intrinsic element\n\n' + code + '\n' + intrinsicElement + '\n' + code : '';
}

function descToMarkdown(component, reactDesc) {
  if (!component) {
    throw new Error('react-desc: component is required');
  }

  var documentation = (0, _descToJSON2.default)(component, reactDesc);
  var availableAt = getAvailableAt(documentation);
  var header = getHeader(documentation);
  var usage = getUsage(documentation);
  var properties = getProperties(documentation);
  var intrinsicElement = getIntrinsicElement(documentation);
  return '' + header + availableAt + usage + properties + intrinsicElement;
}