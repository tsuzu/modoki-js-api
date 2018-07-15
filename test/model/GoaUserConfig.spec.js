/**
 * Modoki API Documentation
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.1.1-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ModokiApiDocumentation);
  }
}(this, function(expect, ModokiApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ModokiApiDocumentation.GoaUserConfig();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GoaUserConfig', function() {
    it('should create an instance of GoaUserConfig', function() {
      // uncomment below and update the code to test GoaUserConfig
      //var instance = new ModokiApiDocumentation.GoaUserConfig();
      //expect(instance).to.be.a(ModokiApiDocumentation.GoaUserConfig);
    });

    it('should have the property authorizedKeys (base name: "authorizedKeys")', function() {
      // uncomment below and update the code to test the property authorizedKeys
      //var instance = new ModokiApiDocumentation.GoaUserConfig();
      //expect(instance).to.be();
    });

    it('should have the property defaultShell (base name: "defaultShell")', function() {
      // uncomment below and update the code to test the property defaultShell
      //var instance = new ModokiApiDocumentation.GoaUserConfig();
      //expect(instance).to.be();
    });

  });

}));