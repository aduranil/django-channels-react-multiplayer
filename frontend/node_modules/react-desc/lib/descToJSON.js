'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = descToJSON;

var arrayFormat = function arrayFormat(array, prefix) {
  return array.map(function (propType) {
    return propTypeFormat(propType, prefix);
  });
};

var shapeFormat = function shapeFormat(shape, prefix) {
  var props = Object.keys(shape).map(function (key) {
    var value = shape[key];
    var valueFormat = void 0;
    if (value.type && (value.type === 'arrayOf' || value.type === 'oneOfType' || value.type === 'oneOf') && Array.isArray(value.args)) {
      valueFormat = '\n' + propTypeFormat(value, prefix + '    ');
    } else if (value.type === 'shape') {
      valueFormat = '\n' + propTypeFormat(value, prefix + '    ');
    } else {
      valueFormat = propTypeFormat(value);
    }
    return prefix + '  ' + key + ': ' + valueFormat;
  });
  return prefix + '{\n' + props.join(',\n') + '\n' + prefix + '}';
};

var propTypeFormat = function propTypeFormat(propType) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var result = void 0;
  if (propType.type) {
    switch (propType.type) {
      case 'arrayOf':
        if (Array.isArray(propType.args)) {
          result = prefix + '[\n' + arrayFormat(propType.args, prefix + '  ').join('\n') + '\n' + prefix + ']';
        } else if (propType.args.type === 'oneOfType') {
          result = prefix + '[\n' + propTypeFormat(propType.args, prefix + '  ') + '\n' + prefix + ']';
        } else {
          result = prefix + '[' + propTypeFormat(propType.args) + ']';
        }
        break;
      case 'bool':
        result = prefix + 'boolean';
        break;
      case 'func':
        result = prefix + 'function';
        break;
      case 'instanceOf':
        result = prefix + 'new ' + propType.args.name + '(...)';
        break;
      case 'objectOf':
        result = prefix + '{ test: ' + propType.args.type + ', ... }';
        break;
      case 'oneOf':
        result = propType.args.map(function (a) {
          return '' + prefix + a;
        }).join('\n');
        break;
      case 'oneOfType':
        if (Array.isArray(propType.args)) {
          result = arrayFormat(propType.args, prefix).join('\n');
        } else {
          result = '' + prefix + propTypeFormat(propType.args);
        }
        break;
      case 'shape':
        result = '' + shapeFormat(propType.args, prefix);
        break;
      default:
        result = '' + prefix + propType.type;
        break;
    }
  } else {
    result = prefix + 'custom';
  }
  return result;
};

var propTypeAsJson = function propTypeAsJson(propType, propName, defaultValue) {
  var documentation = _extends({}, propType.reactDesc, {
    name: propName
  });

  if (defaultValue) {
    documentation.defaultValue = defaultValue;
  }

  documentation.format = documentation.format || propTypeFormat(propType);

  return documentation;
};

function descToJSON(component) {
  var reactDesc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!component) {
    throw new Error('react-desc: component is required');
  }

  var documentation = _extends({
    name: component.displayName || component.name
  }, reactDesc);
  if (reactDesc) {
    delete documentation.propTypes;

    if (reactDesc.propTypes) {
      var propTypes = [];
      Object.keys(reactDesc.propTypes).forEach(function (propName) {
        var propType = reactDesc.propTypes[propName];
        propTypes.push(propTypeAsJson(propType, propName, (component.defaultProps || {})[propName]));
      });
      if (propTypes.length > 0) {
        documentation.properties = propTypes;
      }
    }
  }
  return documentation;
}