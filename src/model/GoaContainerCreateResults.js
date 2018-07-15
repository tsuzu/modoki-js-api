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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ModokiApiDocumentation) {
      root.ModokiApiDocumentation = {};
    }
    root.ModokiApiDocumentation.GoaContainerCreateResults = factory(root.ModokiApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GoaContainerCreateResults model module.
   * @module model/GoaContainerCreateResults
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GoaContainerCreateResults</code>.
   * The results of container creation (default view)
   * @alias module:model/GoaContainerCreateResults
   * @class
   * @param endpoints {Array.<String>} endpoint URL
   * @param id {Number} container id
   */
  var exports = function(endpoints, id) {
    var _this = this;

    _this['endpoints'] = endpoints;
    _this['id'] = id;
  };

  /**
   * Constructs a <code>GoaContainerCreateResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoaContainerCreateResults} obj Optional instance to populate.
   * @return {module:model/GoaContainerCreateResults} The populated <code>GoaContainerCreateResults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('endpoints')) {
        obj['endpoints'] = ApiClient.convertToType(data['endpoints'], ['String']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * endpoint URL
   * @member {Array.<String>} endpoints
   */
  exports.prototype['endpoints'] = undefined;
  /**
   * container id
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;



  return exports;
}));

