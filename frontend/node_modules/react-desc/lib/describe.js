'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = describe;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _descToJSON = require('./descToJSON');

var _descToJSON2 = _interopRequireDefault(_descToJSON);

var _descToMarkdown = require('./descToMarkdown');

var _descToMarkdown2 = _interopRequireDefault(_descToMarkdown);

var _descToTypescript = require('./descToTypescript');

var _descToTypescript2 = _interopRequireDefault(_descToTypescript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var convertArray = function convertArray(array) {
  return array.map(function (type) {
    return convertPropType(type);
  });
};

var convertShape = function convertShape(shape) {
  var result = {};
  Object.keys(shape).forEach(function (key) {
    result[key] = convertPropType(shape[key]);
  });
  return result;
};

var convertPropType = function convertPropType(propType) {
  var result = void 0;
  if (propType && propType.type) {
    if (!_propTypes2.default[propType.type]) {
      throw new Error('react-desc: unknown type ' + propType.type);
    }
    if (propType.args) {
      if (propType.type === 'oneOfType' || propType.type === 'arrayOf') {
        if (Array.isArray(propType.args)) {
          result = _propTypes2.default[propType.type](convertArray(propType.args));
        } else {
          result = _propTypes2.default[propType.type](convertPropType(propType.args));
        }
      } else if (propType.type === 'shape') {
        result = _propTypes2.default[propType.type](convertShape(propType.args));
      } else {
        result = _propTypes2.default[propType.type](propType.args);
      }
    } else {
      result = _propTypes2.default[propType.type];
    }
  } else {
    result = propType;
  }
  return result;
};

function describe(ComponentInstance) {
  if (!ComponentInstance) {
    throw new Error('react-desc: component is required');
  }

  var documentation = {
    propTypes: {}
  };

  var DocumentedComponent = ComponentInstance;

  var addDocumentationProp = function addDocumentationProp(propName) {
    return function (value) {
      documentation[propName] = value;
      return DocumentedComponent;
    };
  };

  DocumentedComponent.availableAt = addDocumentationProp('availableAt');
  DocumentedComponent.description = addDocumentationProp('description');
  DocumentedComponent.details = addDocumentationProp('details');
  DocumentedComponent.deprecated = addDocumentationProp('deprecated');
  DocumentedComponent.usage = addDocumentationProp('usage');
  DocumentedComponent.intrinsicElement = addDocumentationProp('intrinsicElement');

  DocumentedComponent.toJSON = _descToJSON2.default.bind(null, ComponentInstance, documentation);
  DocumentedComponent.toTypescript = _descToTypescript2.default.bind(null, ComponentInstance, documentation);
  DocumentedComponent.toMarkdown = _descToMarkdown2.default.bind(null, ComponentInstance, documentation);

  Object.defineProperty(DocumentedComponent, 'propTypes', {
    get: function get() {
      return DocumentedComponent.propTypesValue;
    },
    set: function set(value) {
      if (!DocumentedComponent.propTypesValue) {
        DocumentedComponent.propTypesValue = {};
      }
      Object.keys(value).forEach(function (name) {
        var propType = value[name];
        if (propType.type) {
          documentation.propTypes[name] = propType;
          propType = convertPropType(propType);
          if (value[name].reactDesc.required) {
            propType = propType.isRequired;
          }
        }
        DocumentedComponent.propTypesValue[name] = propType;
        return propType;
      });
    },
    enumerable: true,
    configurable: true
  });

  return DocumentedComponent;
}