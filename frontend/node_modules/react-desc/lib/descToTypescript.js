'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = descToTypescript;

var arrayFormat = function arrayFormat(array) {
  return array.map(function (propType) {
    return propTypeFormat(propType);
  });
};

var shapeFormat = function shapeFormat(shape) {
  var props = Object.keys(shape).map(function (key) {
    var value = shape[key];
    var valueFormat = void 0;
    if (value.type && (value.type === 'arrayOf' || value.type === 'oneOfType' || value.type === 'oneOf') && Array.isArray(value.args)) {
      valueFormat = '' + propTypeFormat(value);
    } else if (value.type === 'shape') {
      valueFormat = '' + propTypeFormat(value);
    } else {
      valueFormat = propTypeFormat(value);
    }
    return '' + key + (value.reactDesc && value.reactDesc.required ? '' : '?') + ': ' + valueFormat;
  });
  return '{' + props.join(',') + '}';
};

var propTypeFormat = function propTypeFormat(propType, joinWith) {
  var result = void 0;
  if (Array.isArray(propType)) {
    result = arrayFormat(propType).join(joinWith);
  } else if (typeof propType !== 'function' && propType.type) {
    switch (propType.type) {
      case 'array':
        result = 'any[]';
        break;
      case 'arrayOf':
        if (propType.args.type === 'oneOfType') {
          result = '(' + propTypeFormat(propType.args, ' | ') + ')[]';
        } else {
          result = propTypeFormat(propType.args, '\n') + '[]';
        }
        break;
      case 'bool':
        result = 'boolean';
        break;
      case 'func':
        result = '((...args: any[]) => any)';
        break;
      case 'node':
        result = 'React.ReactNode';
        break;
      case 'element':
        result = 'JSX.Element';
        break;
      case 'instanceOf':
        result = 'any';
        break;
      case 'symbol':
        result = 'any';
        break;
      case 'objectOf':
        result = '{ [key: string]: ' + propTypeFormat(propType.args) + ' }';
        break;
      case 'oneOf':
        result = propType.args.map(function (a) {
          return '"' + a + '"';
        }).join(' | ');
        break;
      case 'oneOfType':
        result = '' + propTypeFormat(propType.args, ' | ');
        break;
      case 'shape':
        result = '' + shapeFormat(propType.args);
        break;
      default:
        result = '' + propType.type;
        break;
    }
  } else {
    result = 'any';
  }
  return result;
};

var propTypeAsTypescript = function propTypeAsTypescript(propType, propName) {
  var documentation = _extends({}, propType.reactDesc, {
    name: propName
  });

  documentation.format = propTypeFormat(propType);

  return documentation;
};

function descToTypescript(component) {
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
        propTypes.push(propTypeAsTypescript(propType, propName));
      });
      if (propTypes.length > 0) {
        documentation.properties = propTypes;
      }
    }
  }
  return documentation;
}