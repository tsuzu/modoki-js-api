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
    define(['ApiClient', 'model/GoaContainerInspectRawState'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GoaContainerInspectRawState'));
  } else {
    // Browser globals (root is window)
    if (!root.ModokiApiDocumentation) {
      root.ModokiApiDocumentation = {};
    }
    root.ModokiApiDocumentation.GoaContainerInspect = factory(root.ModokiApiDocumentation.ApiClient, root.ModokiApiDocumentation.GoaContainerInspectRawState);
  }
}(this, function(ApiClient, GoaContainerInspectRawState) {
  'use strict';




  /**
   * The GoaContainerInspect model module.
   * @module model/GoaContainerInspect
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GoaContainerInspect</code>.
   * GoaContainerInspect media type (default view)
   * @alias module:model/GoaContainerInspect
   * @class
   * @param args {Array.<String>} The arguments to the command being run
   * @param created {Date} The time the container was created
   * @param id {Number} ID
   * @param image {String} The name of the image to use when creating the container
   * @param imageID {String} The container's image ID
   * @param name {String} Assign the specified name to the container. Must match /?[a-zA-Z0-9_-]+.
   * @param path {String} The path to the command being run
   * @param rawState {module:model/GoaContainerInspectRawState} 
   * @param status {module:model/GoaContainerInspect.StatusEnum} 
   * @param volumes {Array.<String>} Paths to mount volumes in
   */
  var exports = function(args, created, id, image, imageID, name, path, rawState, status, volumes) {
    var _this = this;

    _this['args'] = args;
    _this['created'] = created;
    _this['id'] = id;
    _this['image'] = image;
    _this['imageID'] = imageID;
    _this['name'] = name;
    _this['path'] = path;
    _this['raw_state'] = rawState;
    _this['status'] = status;
    _this['volumes'] = volumes;
  };

  /**
   * Constructs a <code>GoaContainerInspect</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GoaContainerInspect} obj Optional instance to populate.
   * @return {module:model/GoaContainerInspect} The populated <code>GoaContainerInspect</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('args')) {
        obj['args'] = ApiClient.convertToType(data['args'], ['String']);
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('imageID')) {
        obj['imageID'] = ApiClient.convertToType(data['imageID'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('raw_state')) {
        obj['raw_state'] = GoaContainerInspectRawState.constructFromObject(data['raw_state']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('volumes')) {
        obj['volumes'] = ApiClient.convertToType(data['volumes'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The arguments to the command being run
   * @member {Array.<String>} args
   */
  exports.prototype['args'] = undefined;
  /**
   * The time the container was created
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * ID
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The name of the image to use when creating the container
   * @member {String} image
   */
  exports.prototype['image'] = undefined;
  /**
   * The container's image ID
   * @member {String} imageID
   */
  exports.prototype['imageID'] = undefined;
  /**
   * Assign the specified name to the container. Must match /?[a-zA-Z0-9_-]+.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The path to the command being run
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * @member {module:model/GoaContainerInspectRawState} raw_state
   */
  exports.prototype['raw_state'] = undefined;
  /**
   * @member {module:model/GoaContainerInspect.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Paths to mount volumes in
   * @member {Array.<String>} volumes
   */
  exports.prototype['volumes'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "Image Downloading"
     * @const
     */
    "Image Downloading": "Image Downloading",
    /**
     * value: "Created"
     * @const
     */
    "Created": "Created",
    /**
     * value: "Running"
     * @const
     */
    "Running": "Running",
    /**
     * value: "Stopped"
     * @const
     */
    "Stopped": "Stopped",
    /**
     * value: "Error"
     * @const
     */
    "Error": "Error"  };


  return exports;
}));

