'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// array function should not be used here so that we can the local this
var addPropTypeDocumentationField = function addPropTypeDocumentationField(fieldName) {
  return function addFieldToReactDesc(value) {
    if (!this.reactDesc) {
      this.reactDesc = {};
    }
    this.reactDesc[fieldName] = value;
    return this;
  };
};

var documentedPropType = {
  defaultValue: addPropTypeDocumentationField('defaultValue'),
  description: addPropTypeDocumentationField('description'),
  deprecated: addPropTypeDocumentationField('deprecated'),
  format: addPropTypeDocumentationField('format')
};

var createPropType = function createPropType(type) {
  var propTypeObj = _extends({
    type: type
  }, documentedPropType);
  Object.defineProperty(propTypeObj, 'isRequired', {
    get: function getRequired() {
      if (!this.reactDesc) {
        this.reactDesc = {};
      }
      this.reactDesc.required = true;
      return this;
    },
    enumerable: true,
    configurable: true
  });
  return propTypeObj;
};

var createPropTypeWithArgs = function createPropTypeWithArgs(type) {
  return function (args) {
    var propTypeObj = _extends({
      args: args,
      type: type
    }, documentedPropType);
    Object.defineProperty(propTypeObj, 'isRequired', {
      get: function getRequired() {
        if (!this.reactDesc) {
          this.reactDesc = {};
        }
        this.reactDesc.required = true;
        return this;
      },
      enumerable: true,
      configurable: true
    });
    return propTypeObj;
  };
};

var PropTypes = {
  custom: function custom(callback) {
    var target = callback.bind(null);
    target.type = 'func';
    Object.keys(documentedPropType).forEach(function (fieldName) {
      target[fieldName] = documentedPropType[fieldName];
    });
    return target;
  }
};

function definePropType(type) {
  Object.defineProperty(PropTypes, type, {
    get: function getPropType() {
      return createPropType(type);
    },
    enumerable: true,
    configurable: true
  });
}

function definePropTypeWithArgs(type) {
  Object.defineProperty(PropTypes, type, {
    get: function getPropType() {
      return createPropTypeWithArgs(type);
    },
    enumerable: true,
    configurable: true
  });
}

definePropType('any');
definePropType('array');
definePropType('bool');
definePropType('element');
definePropType('func');
definePropType('node');
definePropType('number');
definePropType('object');
definePropType('symbol');
definePropType('string');

definePropTypeWithArgs('arrayOf');
definePropTypeWithArgs('instanceOf');
definePropTypeWithArgs('objectOf');
definePropTypeWithArgs('oneOfType');
definePropTypeWithArgs('oneOf');
definePropTypeWithArgs('shape');

exports.default = PropTypes;