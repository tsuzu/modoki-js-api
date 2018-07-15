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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GoaUserAuthorizedkeyCollection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GoaUserAuthorizedkeyCollection'));
  } else {
    // Browser globals (root is window)
    if (!root.ModokiApiDocumentation) {
      root.ModokiApiDocumentation = {};
    }
    root.ModokiApiDocumentation.GoaUserConfig = factory(root.ModokiApiDocumentation.ApiClient, root.ModokiApiDocumentation.GoaUserAuthorizedkeyCollection);
  }
}(this, function(ApiClient, GoaUserAuthorizedkeyCollection) {
  'use strict';




  /**
   * The GoaUserConfig model module.
   * @module model/GoaUserConfig
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GoaUserConfig</code>.
   * GoaUserConfig media type (default view)
   * @alias module:model/GoaUserConfig
   * @class
   * @param authorizedKeys {module:model/GoaUserAuthorizedkeyCollection} 
   * @param defaultShell {String} 
   */
  var exports = function(authorizedKeys, defaultShell) {
    var _this = this;

    _this['authorizedKeys'] = authorizedKeys;
    _this['defaultShell'] = defaultShell;
  };

  /**
   * Constructs a <code>GoaUserConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoaUserConfig} obj Optional instance to populate.
   * @return {module:model/GoaUserConfig} The populated <code>GoaUserConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authorizedKeys')) {
        obj['authorizedKeys'] = GoaUserAuthorizedkeyCollection.constructFromObject(data['authorizedKeys']);
      }
      if (data.hasOwnProperty('defaultShell')) {
        obj['defaultShell'] = ApiClient.convertToType(data['defaultShell'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/GoaUserAuthorizedkeyCollection} authorizedKeys
   */
  exports.prototype['authorizedKeys'] = undefined;
  /**
   * @member {String} defaultShell
   */
  exports.prototype['defaultShell'] = undefined;



  return exports;
}));

