/**
 * Modoki API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.1.1-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ContainerConfig', 'model/Error', 'model/GoaContainerConfig', 'model/GoaContainerCreateResults', 'model/GoaContainerInspect', 'model/GoaContainerInspectRawState', 'model/GoaContainerListEach', 'model/GoaContainerListEachCollection', 'model/GoaUserAuthorizedkey', 'model/GoaUserAuthorizedkeyCollection', 'model/GoaUserConfig', 'model/GoaUserDefaultshell', 'model/SetAuthorizedKeysUserPayload', 'model/UserAuthorizedKey', 'api/ContainerApi', 'api/UserApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ContainerConfig'), require('./model/Error'), require('./model/GoaContainerConfig'), require('./model/GoaContainerCreateResults'), require('./model/GoaContainerInspect'), require('./model/GoaContainerInspectRawState'), require('./model/GoaContainerListEach'), require('./model/GoaContainerListEachCollection'), require('./model/GoaUserAuthorizedkey'), require('./model/GoaUserAuthorizedkeyCollection'), require('./model/GoaUserConfig'), require('./model/GoaUserDefaultshell'), require('./model/SetAuthorizedKeysUserPayload'), require('./model/UserAuthorizedKey'), require('./api/ContainerApi'), require('./api/UserApi'));
  }
}(function(ApiClient, ContainerConfig, Error, GoaContainerConfig, GoaContainerCreateResults, GoaContainerInspect, GoaContainerInspectRawState, GoaContainerListEach, GoaContainerListEachCollection, GoaUserAuthorizedkey, GoaUserAuthorizedkeyCollection, GoaUserConfig, GoaUserDefaultshell, SetAuthorizedKeysUserPayload, UserAuthorizedKey, ContainerApi, UserApi) {
  'use strict';

  /**
   * ERROR_UNKNOWN.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var ModokiApi = require('index'); // See note below*.
   * var xxxSvc = new ModokiApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new ModokiApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new ModokiApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new ModokiApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ContainerConfig model constructor.
     * @property {module:model/ContainerConfig}
     */
    ContainerConfig: ContainerConfig,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The GoaContainerConfig model constructor.
     * @property {module:model/GoaContainerConfig}
     */
    GoaContainerConfig: GoaContainerConfig,
    /**
     * The GoaContainerCreateResults model constructor.
     * @property {module:model/GoaContainerCreateResults}
     */
    GoaContainerCreateResults: GoaContainerCreateResults,
    /**
     * The GoaContainerInspect model constructor.
     * @property {module:model/GoaContainerInspect}
     */
    GoaContainerInspect: GoaContainerInspect,
    /**
     * The GoaContainerInspectRawState model constructor.
     * @property {module:model/GoaContainerInspectRawState}
     */
    GoaContainerInspectRawState: GoaContainerInspectRawState,
    /**
     * The GoaContainerListEach model constructor.
     * @property {module:model/GoaContainerListEach}
     */
    GoaContainerListEach: GoaContainerListEach,
    /**
     * The GoaContainerListEachCollection model constructor.
     * @property {module:model/GoaContainerListEachCollection}
     */
    GoaContainerListEachCollection: GoaContainerListEachCollection,
    /**
     * The GoaUserAuthorizedkey model constructor.
     * @property {module:model/GoaUserAuthorizedkey}
     */
    GoaUserAuthorizedkey: GoaUserAuthorizedkey,
    /**
     * The GoaUserAuthorizedkeyCollection model constructor.
     * @property {module:model/GoaUserAuthorizedkeyCollection}
     */
    GoaUserAuthorizedkeyCollection: GoaUserAuthorizedkeyCollection,
    /**
     * The GoaUserConfig model constructor.
     * @property {module:model/GoaUserConfig}
     */
    GoaUserConfig: GoaUserConfig,
    /**
     * The GoaUserDefaultshell model constructor.
     * @property {module:model/GoaUserDefaultshell}
     */
    GoaUserDefaultshell: GoaUserDefaultshell,
    /**
     * The SetAuthorizedKeysUserPayload model constructor.
     * @property {module:model/SetAuthorizedKeysUserPayload}
     */
    SetAuthorizedKeysUserPayload: SetAuthorizedKeysUserPayload,
    /**
     * The UserAuthorizedKey model constructor.
     * @property {module:model/UserAuthorizedKey}
     */
    UserAuthorizedKey: UserAuthorizedKey,
    /**
     * The ContainerApi service constructor.
     * @property {module:api/ContainerApi}
     */
    ContainerApi: ContainerApi,
    /**
     * The UserApi service constructor.
     * @property {module:api/UserApi}
     */
    UserApi: UserApi
  };

  return exports;
}));
