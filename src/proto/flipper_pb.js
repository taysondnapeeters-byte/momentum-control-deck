/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $RangeError = $util.global.RangeError;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const PB = $root.PB = (() => {

    /**
     * Namespace PB.
     * @exports PB
     * @namespace
     */
    const PB = {};

    /**
     * CommandStatus enum.
     * @name PB.CommandStatus
     * @enum {number}
     * @property {number} OK=0 OK value
     * @property {number} ERROR=1 < Common Errors
     * @property {number} ERROR_DECODE=2 ERROR_DECODE value
     * @property {number} ERROR_NOT_IMPLEMENTED=3 ERROR_NOT_IMPLEMENTED value
     * @property {number} ERROR_BUSY=4 ERROR_BUSY value
     * @property {number} ERROR_CONTINUOUS_COMMAND_INTERRUPTED=14 ERROR_CONTINUOUS_COMMAND_INTERRUPTED value
     * @property {number} ERROR_INVALID_PARAMETERS=15 ERROR_INVALID_PARAMETERS value
     * @property {number} ERROR_STORAGE_NOT_READY=5 < Storage Errors
     * @property {number} ERROR_STORAGE_EXIST=6 ERROR_STORAGE_EXIST value
     * @property {number} ERROR_STORAGE_NOT_EXIST=7 ERROR_STORAGE_NOT_EXIST value
     * @property {number} ERROR_STORAGE_INVALID_PARAMETER=8 ERROR_STORAGE_INVALID_PARAMETER value
     * @property {number} ERROR_STORAGE_DENIED=9 ERROR_STORAGE_DENIED value
     * @property {number} ERROR_STORAGE_INVALID_NAME=10 ERROR_STORAGE_INVALID_NAME value
     * @property {number} ERROR_STORAGE_INTERNAL=11 ERROR_STORAGE_INTERNAL value
     * @property {number} ERROR_STORAGE_NOT_IMPLEMENTED=12 ERROR_STORAGE_NOT_IMPLEMENTED value
     * @property {number} ERROR_STORAGE_ALREADY_OPEN=13 ERROR_STORAGE_ALREADY_OPEN value
     * @property {number} ERROR_STORAGE_DIR_NOT_EMPTY=18 ERROR_STORAGE_DIR_NOT_EMPTY value
     * @property {number} ERROR_APP_CANT_START=16 < Application Errors
     * @property {number} ERROR_APP_SYSTEM_LOCKED=17 ERROR_APP_SYSTEM_LOCKED value
     * @property {number} ERROR_APP_NOT_RUNNING=21 ERROR_APP_NOT_RUNNING value
     * @property {number} ERROR_APP_CMD_ERROR=22 ERROR_APP_CMD_ERROR value
     * @property {number} ERROR_VIRTUAL_DISPLAY_ALREADY_STARTED=19 < Virtual Display Errors
     * @property {number} ERROR_VIRTUAL_DISPLAY_NOT_STARTED=20 ERROR_VIRTUAL_DISPLAY_NOT_STARTED value
     * @property {number} ERROR_GPIO_MODE_INCORRECT=58 < GPIO Errors
     * @property {number} ERROR_GPIO_UNKNOWN_PIN_MODE=59 ERROR_GPIO_UNKNOWN_PIN_MODE value
     */
    PB.CommandStatus = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "OK"] = 0;
        values[valuesById[1] = "ERROR"] = 1;
        values[valuesById[2] = "ERROR_DECODE"] = 2;
        values[valuesById[3] = "ERROR_NOT_IMPLEMENTED"] = 3;
        values[valuesById[4] = "ERROR_BUSY"] = 4;
        values[valuesById[14] = "ERROR_CONTINUOUS_COMMAND_INTERRUPTED"] = 14;
        values[valuesById[15] = "ERROR_INVALID_PARAMETERS"] = 15;
        values[valuesById[5] = "ERROR_STORAGE_NOT_READY"] = 5;
        values[valuesById[6] = "ERROR_STORAGE_EXIST"] = 6;
        values[valuesById[7] = "ERROR_STORAGE_NOT_EXIST"] = 7;
        values[valuesById[8] = "ERROR_STORAGE_INVALID_PARAMETER"] = 8;
        values[valuesById[9] = "ERROR_STORAGE_DENIED"] = 9;
        values[valuesById[10] = "ERROR_STORAGE_INVALID_NAME"] = 10;
        values[valuesById[11] = "ERROR_STORAGE_INTERNAL"] = 11;
        values[valuesById[12] = "ERROR_STORAGE_NOT_IMPLEMENTED"] = 12;
        values[valuesById[13] = "ERROR_STORAGE_ALREADY_OPEN"] = 13;
        values[valuesById[18] = "ERROR_STORAGE_DIR_NOT_EMPTY"] = 18;
        values[valuesById[16] = "ERROR_APP_CANT_START"] = 16;
        values[valuesById[17] = "ERROR_APP_SYSTEM_LOCKED"] = 17;
        values[valuesById[21] = "ERROR_APP_NOT_RUNNING"] = 21;
        values[valuesById[22] = "ERROR_APP_CMD_ERROR"] = 22;
        values[valuesById[19] = "ERROR_VIRTUAL_DISPLAY_ALREADY_STARTED"] = 19;
        values[valuesById[20] = "ERROR_VIRTUAL_DISPLAY_NOT_STARTED"] = 20;
        values[valuesById[58] = "ERROR_GPIO_MODE_INCORRECT"] = 58;
        values[valuesById[59] = "ERROR_GPIO_UNKNOWN_PIN_MODE"] = 59;
        return values;
    })();

    PB.Empty = (function() {

        /**
         * Properties of an Empty.
         * @typedef {Object} PB.Empty.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an Empty.
         * @memberof PB
         * @interface IEmpty
         * @augments PB.Empty.$Properties
         * @deprecated Use PB.Empty.$Properties instead.
         */

        /**
         * Shape of an Empty.
         * @typedef {PB.Empty.$Properties} PB.Empty.$Shape
         */

        /**
         * Constructs a new Empty.
         * @memberof PB
         * @classdesc Represents an Empty.
         * @constructor
         * @param {PB.Empty.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const Empty = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Encodes the specified Empty message. Does not implicitly {@link PB.Empty.verify|verify} messages.
         * @function encode
         * @memberof PB.Empty
         * @static
         * @param {PB.Empty.$Properties} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link PB.Empty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.Empty
         * @static
         * @param {PB.Empty.$Properties} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @function decode
         * @memberof PB.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.Empty & PB.Empty.$Shape} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB.Empty();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                reader.skipType(tag & 7, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.Empty & PB.Empty.$Shape} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for Empty
         * @function getTypeUrl
         * @memberof PB.Empty
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Empty.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB.Empty";
        };

        return Empty;
    })();

    PB.StopSession = (function() {

        /**
         * Properties of a StopSession.
         * @typedef {Object} PB.StopSession.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a StopSession.
         * @memberof PB
         * @interface IStopSession
         * @augments PB.StopSession.$Properties
         * @deprecated Use PB.StopSession.$Properties instead.
         */

        /**
         * Shape of a StopSession.
         * @typedef {PB.StopSession.$Properties} PB.StopSession.$Shape
         */

        /**
         * Constructs a new StopSession.
         * @memberof PB
         * @classdesc Represents a StopSession.
         * @constructor
         * @param {PB.StopSession.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const StopSession = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Encodes the specified StopSession message. Does not implicitly {@link PB.StopSession.verify|verify} messages.
         * @function encode
         * @memberof PB.StopSession
         * @static
         * @param {PB.StopSession.$Properties} message StopSession message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopSession.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified StopSession message, length delimited. Does not implicitly {@link PB.StopSession.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.StopSession
         * @static
         * @param {PB.StopSession.$Properties} message StopSession message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopSession.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a StopSession message from the specified reader or buffer.
         * @function decode
         * @memberof PB.StopSession
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.StopSession & PB.StopSession.$Shape} StopSession
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopSession.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB.StopSession();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                reader.skipType(tag & 7, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a StopSession message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.StopSession
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.StopSession & PB.StopSession.$Shape} StopSession
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopSession.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for StopSession
         * @function getTypeUrl
         * @memberof PB.StopSession
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        StopSession.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB.StopSession";
        };

        return StopSession;
    })();

    PB.Main = (function() {

        /**
         * Properties of a Main.
         * @typedef {Object} PB.Main.$Properties
         * @property {number|null} [commandId] Main commandId
         * @property {PB.CommandStatus|null} [commandStatus] Main commandStatus
         * @property {boolean|null} [hasNext] Main hasNext
         * @property {PB.Empty.$Properties|null} [empty] Main empty
         * @property {PB.StopSession.$Properties|null} [stopSession] Main stopSession
         * @property {PB_System.PingRequest.$Properties|null} [systemPingRequest] Main systemPingRequest
         * @property {PB_System.PingResponse.$Properties|null} [systemPingResponse] Main systemPingResponse
         * @property {PB_System.RebootRequest.$Properties|null} [systemRebootRequest] Main systemRebootRequest
         * @property {PB_System.DeviceInfoRequest.$Properties|null} [systemDeviceInfoRequest] Main systemDeviceInfoRequest
         * @property {PB_System.DeviceInfoResponse.$Properties|null} [systemDeviceInfoResponse] Main systemDeviceInfoResponse
         * @property {PB_System.FactoryResetRequest.$Properties|null} [systemFactoryResetRequest] Main systemFactoryResetRequest
         * @property {PB_System.GetDateTimeRequest.$Properties|null} [systemGetDatetimeRequest] Main systemGetDatetimeRequest
         * @property {PB_System.GetDateTimeResponse.$Properties|null} [systemGetDatetimeResponse] Main systemGetDatetimeResponse
         * @property {PB_System.SetDateTimeRequest.$Properties|null} [systemSetDatetimeRequest] Main systemSetDatetimeRequest
         * @property {PB_System.PlayAudiovisualAlertRequest.$Properties|null} [systemPlayAudiovisualAlertRequest] Main systemPlayAudiovisualAlertRequest
         * @property {PB_System.ProtobufVersionRequest.$Properties|null} [systemProtobufVersionRequest] Main systemProtobufVersionRequest
         * @property {PB_System.ProtobufVersionResponse.$Properties|null} [systemProtobufVersionResponse] Main systemProtobufVersionResponse
         * @property {PB_System.UpdateRequest.$Properties|null} [systemUpdateRequest] Main systemUpdateRequest
         * @property {PB_System.UpdateResponse.$Properties|null} [systemUpdateResponse] Main systemUpdateResponse
         * @property {PB_System.PowerInfoRequest.$Properties|null} [systemPowerInfoRequest] Main systemPowerInfoRequest
         * @property {PB_System.PowerInfoResponse.$Properties|null} [systemPowerInfoResponse] Main systemPowerInfoResponse
         * @property {PB_Storage.InfoRequest.$Properties|null} [storageInfoRequest] Main storageInfoRequest
         * @property {PB_Storage.InfoResponse.$Properties|null} [storageInfoResponse] Main storageInfoResponse
         * @property {PB_Storage.TimestampRequest.$Properties|null} [storageTimestampRequest] Main storageTimestampRequest
         * @property {PB_Storage.TimestampResponse.$Properties|null} [storageTimestampResponse] Main storageTimestampResponse
         * @property {PB_Storage.StatRequest.$Properties|null} [storageStatRequest] Main storageStatRequest
         * @property {PB_Storage.StatResponse.$Properties|null} [storageStatResponse] Main storageStatResponse
         * @property {PB_Storage.ListRequest.$Properties|null} [storageListRequest] Main storageListRequest
         * @property {PB_Storage.ListResponse.$Properties|null} [storageListResponse] Main storageListResponse
         * @property {PB_Storage.ReadRequest.$Properties|null} [storageReadRequest] Main storageReadRequest
         * @property {PB_Storage.ReadResponse.$Properties|null} [storageReadResponse] Main storageReadResponse
         * @property {PB_Storage.WriteRequest.$Properties|null} [storageWriteRequest] Main storageWriteRequest
         * @property {PB_Storage.DeleteRequest.$Properties|null} [storageDeleteRequest] Main storageDeleteRequest
         * @property {PB_Storage.MkdirRequest.$Properties|null} [storageMkdirRequest] Main storageMkdirRequest
         * @property {PB_Storage.Md5sumRequest.$Properties|null} [storageMd5sumRequest] Main storageMd5sumRequest
         * @property {PB_Storage.Md5sumResponse.$Properties|null} [storageMd5sumResponse] Main storageMd5sumResponse
         * @property {PB_Storage.RenameRequest.$Properties|null} [storageRenameRequest] Main storageRenameRequest
         * @property {PB_Storage.BackupCreateRequest.$Properties|null} [storageBackupCreateRequest] Main storageBackupCreateRequest
         * @property {PB_Storage.BackupRestoreRequest.$Properties|null} [storageBackupRestoreRequest] Main storageBackupRestoreRequest
         * @property {PB_Storage.TarExtractRequest.$Properties|null} [storageTarExtractRequest] Main storageTarExtractRequest
         * @property {PB_App.StartRequest.$Properties|null} [appStartRequest] Main appStartRequest
         * @property {PB_App.LockStatusRequest.$Properties|null} [appLockStatusRequest] Main appLockStatusRequest
         * @property {PB_App.LockStatusResponse.$Properties|null} [appLockStatusResponse] Main appLockStatusResponse
         * @property {PB_App.AppExitRequest.$Properties|null} [appExitRequest] Main appExitRequest
         * @property {PB_App.AppLoadFileRequest.$Properties|null} [appLoadFileRequest] Main appLoadFileRequest
         * @property {PB_App.AppButtonPressRequest.$Properties|null} [appButtonPressRequest] Main appButtonPressRequest
         * @property {PB_App.AppButtonReleaseRequest.$Properties|null} [appButtonReleaseRequest] Main appButtonReleaseRequest
         * @property {PB_App.AppButtonPressReleaseRequest.$Properties|null} [appButtonPressReleaseRequest] Main appButtonPressReleaseRequest
         * @property {PB_App.GetErrorRequest.$Properties|null} [appGetErrorRequest] Main appGetErrorRequest
         * @property {PB_App.GetErrorResponse.$Properties|null} [appGetErrorResponse] Main appGetErrorResponse
         * @property {PB_App.DataExchangeRequest.$Properties|null} [appDataExchangeRequest] Main appDataExchangeRequest
         * @property {PB_Gui.StartScreenStreamRequest.$Properties|null} [guiStartScreenStreamRequest] Main guiStartScreenStreamRequest
         * @property {PB_Gui.StopScreenStreamRequest.$Properties|null} [guiStopScreenStreamRequest] Main guiStopScreenStreamRequest
         * @property {PB_Gui.ScreenFrame.$Properties|null} [guiScreenFrame] Main guiScreenFrame
         * @property {PB_Gui.SendInputEventRequest.$Properties|null} [guiSendInputEventRequest] Main guiSendInputEventRequest
         * @property {PB_Gui.StartVirtualDisplayRequest.$Properties|null} [guiStartVirtualDisplayRequest] Main guiStartVirtualDisplayRequest
         * @property {PB_Gui.StopVirtualDisplayRequest.$Properties|null} [guiStopVirtualDisplayRequest] Main guiStopVirtualDisplayRequest
         * @property {PB_Gpio.SetPinMode.$Properties|null} [gpioSetPinMode] Main gpioSetPinMode
         * @property {PB_Gpio.SetInputPull.$Properties|null} [gpioSetInputPull] Main gpioSetInputPull
         * @property {PB_Gpio.GetPinMode.$Properties|null} [gpioGetPinMode] Main gpioGetPinMode
         * @property {PB_Gpio.GetPinModeResponse.$Properties|null} [gpioGetPinModeResponse] Main gpioGetPinModeResponse
         * @property {PB_Gpio.ReadPin.$Properties|null} [gpioReadPin] Main gpioReadPin
         * @property {PB_Gpio.ReadPinResponse.$Properties|null} [gpioReadPinResponse] Main gpioReadPinResponse
         * @property {PB_Gpio.WritePin.$Properties|null} [gpioWritePin] Main gpioWritePin
         * @property {PB_Gpio.GetOtgMode.$Properties|null} [gpioGetOtgMode] Main gpioGetOtgMode
         * @property {PB_Gpio.GetOtgModeResponse.$Properties|null} [gpioGetOtgModeResponse] Main gpioGetOtgModeResponse
         * @property {PB_Gpio.SetOtgMode.$Properties|null} [gpioSetOtgMode] Main gpioSetOtgMode
         * @property {PB_App.AppStateResponse.$Properties|null} [appStateResponse] Main appStateResponse
         * @property {PB_Property.GetRequest.$Properties|null} [propertyGetRequest] Main propertyGetRequest
         * @property {PB_Property.GetResponse.$Properties|null} [propertyGetResponse] Main propertyGetResponse
         * @property {PB_Desktop.IsLockedRequest.$Properties|null} [desktopIsLockedRequest] Main desktopIsLockedRequest
         * @property {PB_Desktop.UnlockRequest.$Properties|null} [desktopUnlockRequest] Main desktopUnlockRequest
         * @property {PB_Desktop.StatusSubscribeRequest.$Properties|null} [desktopStatusSubscribeRequest] Main desktopStatusSubscribeRequest
         * @property {PB_Desktop.StatusUnsubscribeRequest.$Properties|null} [desktopStatusUnsubscribeRequest] Main desktopStatusUnsubscribeRequest
         * @property {PB_Desktop.Status.$Properties|null} [desktopStatus] Main desktopStatus
         * @property {"empty"|"stopSession"|"systemPingRequest"|"systemPingResponse"|"systemRebootRequest"|"systemDeviceInfoRequest"|"systemDeviceInfoResponse"|"systemFactoryResetRequest"|"systemGetDatetimeRequest"|"systemGetDatetimeResponse"|"systemSetDatetimeRequest"|"systemPlayAudiovisualAlertRequest"|"systemProtobufVersionRequest"|"systemProtobufVersionResponse"|"systemUpdateRequest"|"systemUpdateResponse"|"systemPowerInfoRequest"|"systemPowerInfoResponse"|"storageInfoRequest"|"storageInfoResponse"|"storageTimestampRequest"|"storageTimestampResponse"|"storageStatRequest"|"storageStatResponse"|"storageListRequest"|"storageListResponse"|"storageReadRequest"|"storageReadResponse"|"storageWriteRequest"|"storageDeleteRequest"|"storageMkdirRequest"|"storageMd5sumRequest"|"storageMd5sumResponse"|"storageRenameRequest"|"storageBackupCreateRequest"|"storageBackupRestoreRequest"|"storageTarExtractRequest"|"appStartRequest"|"appLockStatusRequest"|"appLockStatusResponse"|"appExitRequest"|"appLoadFileRequest"|"appButtonPressRequest"|"appButtonReleaseRequest"|"appButtonPressReleaseRequest"|"appGetErrorRequest"|"appGetErrorResponse"|"appDataExchangeRequest"|"guiStartScreenStreamRequest"|"guiStopScreenStreamRequest"|"guiScreenFrame"|"guiSendInputEventRequest"|"guiStartVirtualDisplayRequest"|"guiStopVirtualDisplayRequest"|"gpioSetPinMode"|"gpioSetInputPull"|"gpioGetPinMode"|"gpioGetPinModeResponse"|"gpioReadPin"|"gpioReadPinResponse"|"gpioWritePin"|"gpioGetOtgMode"|"gpioGetOtgModeResponse"|"gpioSetOtgMode"|"appStateResponse"|"propertyGetRequest"|"propertyGetResponse"|"desktopIsLockedRequest"|"desktopUnlockRequest"|"desktopStatusSubscribeRequest"|"desktopStatusUnsubscribeRequest"|"desktopStatus"} [content] Main content
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Main.
         * @memberof PB
         * @interface IMain
         * @augments PB.Main.$Properties
         * @deprecated Use PB.Main.$Properties instead.
         */

        /**
         * Narrowed shape of a Main.
         * @typedef {{
         *   commandId?: number|null;
         *   commandStatus?: PB.CommandStatus|null;
         *   hasNext?: boolean|null;
         *   empty?: PB.Empty.$Shape|null;
         *   stopSession?: PB.StopSession.$Shape|null;
         *   systemPingRequest?: PB_System.PingRequest.$Shape|null;
         *   systemPingResponse?: PB_System.PingResponse.$Shape|null;
         *   systemRebootRequest?: PB_System.RebootRequest.$Shape|null;
         *   systemDeviceInfoRequest?: PB_System.DeviceInfoRequest.$Shape|null;
         *   systemDeviceInfoResponse?: PB_System.DeviceInfoResponse.$Shape|null;
         *   systemFactoryResetRequest?: PB_System.FactoryResetRequest.$Shape|null;
         *   systemGetDatetimeRequest?: PB_System.GetDateTimeRequest.$Shape|null;
         *   systemGetDatetimeResponse?: PB_System.GetDateTimeResponse.$Shape|null;
         *   systemSetDatetimeRequest?: PB_System.SetDateTimeRequest.$Shape|null;
         *   systemPlayAudiovisualAlertRequest?: PB_System.PlayAudiovisualAlertRequest.$Shape|null;
         *   systemProtobufVersionRequest?: PB_System.ProtobufVersionRequest.$Shape|null;
         *   systemProtobufVersionResponse?: PB_System.ProtobufVersionResponse.$Shape|null;
         *   systemUpdateRequest?: PB_System.UpdateRequest.$Shape|null;
         *   systemUpdateResponse?: PB_System.UpdateResponse.$Shape|null;
         *   systemPowerInfoRequest?: PB_System.PowerInfoRequest.$Shape|null;
         *   systemPowerInfoResponse?: PB_System.PowerInfoResponse.$Shape|null;
         *   storageInfoRequest?: PB_Storage.InfoRequest.$Shape|null;
         *   storageInfoResponse?: PB_Storage.InfoResponse.$Shape|null;
         *   storageTimestampRequest?: PB_Storage.TimestampRequest.$Shape|null;
         *   storageTimestampResponse?: PB_Storage.TimestampResponse.$Shape|null;
         *   storageStatRequest?: PB_Storage.StatRequest.$Shape|null;
         *   storageStatResponse?: PB_Storage.StatResponse.$Shape|null;
         *   storageListRequest?: PB_Storage.ListRequest.$Shape|null;
         *   storageListResponse?: PB_Storage.ListResponse.$Shape|null;
         *   storageReadRequest?: PB_Storage.ReadRequest.$Shape|null;
         *   storageReadResponse?: PB_Storage.ReadResponse.$Shape|null;
         *   storageWriteRequest?: PB_Storage.WriteRequest.$Shape|null;
         *   storageDeleteRequest?: PB_Storage.DeleteRequest.$Shape|null;
         *   storageMkdirRequest?: PB_Storage.MkdirRequest.$Shape|null;
         *   storageMd5sumRequest?: PB_Storage.Md5sumRequest.$Shape|null;
         *   storageMd5sumResponse?: PB_Storage.Md5sumResponse.$Shape|null;
         *   storageRenameRequest?: PB_Storage.RenameRequest.$Shape|null;
         *   storageBackupCreateRequest?: PB_Storage.BackupCreateRequest.$Shape|null;
         *   storageBackupRestoreRequest?: PB_Storage.BackupRestoreRequest.$Shape|null;
         *   storageTarExtractRequest?: PB_Storage.TarExtractRequest.$Shape|null;
         *   appStartRequest?: PB_App.StartRequest.$Shape|null;
         *   appLockStatusRequest?: PB_App.LockStatusRequest.$Shape|null;
         *   appLockStatusResponse?: PB_App.LockStatusResponse.$Shape|null;
         *   appExitRequest?: PB_App.AppExitRequest.$Shape|null;
         *   appLoadFileRequest?: PB_App.AppLoadFileRequest.$Shape|null;
         *   appButtonPressRequest?: PB_App.AppButtonPressRequest.$Shape|null;
         *   appButtonReleaseRequest?: PB_App.AppButtonReleaseRequest.$Shape|null;
         *   appButtonPressReleaseRequest?: PB_App.AppButtonPressReleaseRequest.$Shape|null;
         *   appGetErrorRequest?: PB_App.GetErrorRequest.$Shape|null;
         *   appGetErrorResponse?: PB_App.GetErrorResponse.$Shape|null;
         *   appDataExchangeRequest?: PB_App.DataExchangeRequest.$Shape|null;
         *   guiStartScreenStreamRequest?: PB_Gui.StartScreenStreamRequest.$Shape|null;
         *   guiStopScreenStreamRequest?: PB_Gui.StopScreenStreamRequest.$Shape|null;
         *   guiScreenFrame?: PB_Gui.ScreenFrame.$Shape|null;
         *   guiSendInputEventRequest?: PB_Gui.SendInputEventRequest.$Shape|null;
         *   guiStartVirtualDisplayRequest?: PB_Gui.StartVirtualDisplayRequest.$Shape|null;
         *   guiStopVirtualDisplayRequest?: PB_Gui.StopVirtualDisplayRequest.$Shape|null;
         *   gpioSetPinMode?: PB_Gpio.SetPinMode.$Shape|null;
         *   gpioSetInputPull?: PB_Gpio.SetInputPull.$Shape|null;
         *   gpioGetPinMode?: PB_Gpio.GetPinMode.$Shape|null;
         *   gpioGetPinModeResponse?: PB_Gpio.GetPinModeResponse.$Shape|null;
         *   gpioReadPin?: PB_Gpio.ReadPin.$Shape|null;
         *   gpioReadPinResponse?: PB_Gpio.ReadPinResponse.$Shape|null;
         *   gpioWritePin?: PB_Gpio.WritePin.$Shape|null;
         *   gpioGetOtgMode?: PB_Gpio.GetOtgMode.$Shape|null;
         *   gpioGetOtgModeResponse?: PB_Gpio.GetOtgModeResponse.$Shape|null;
         *   gpioSetOtgMode?: PB_Gpio.SetOtgMode.$Shape|null;
         *   appStateResponse?: PB_App.AppStateResponse.$Shape|null;
         *   propertyGetRequest?: PB_Property.GetRequest.$Shape|null;
         *   propertyGetResponse?: PB_Property.GetResponse.$Shape|null;
         *   desktopIsLockedRequest?: PB_Desktop.IsLockedRequest.$Shape|null;
         *   desktopUnlockRequest?: PB_Desktop.UnlockRequest.$Shape|null;
         *   desktopStatusSubscribeRequest?: PB_Desktop.StatusSubscribeRequest.$Shape|null;
         *   desktopStatusUnsubscribeRequest?: PB_Desktop.StatusUnsubscribeRequest.$Shape|null;
         *   desktopStatus?: PB_Desktop.Status.$Shape|null;
         *   $unknowns?: Array.<Uint8Array>;
         * } & (
         *   ({ content?: undefined; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "empty"; empty: PB.Empty.$Shape; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "stopSession"; empty?: null; stopSession: PB.StopSession.$Shape; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemPingRequest"; empty?: null; stopSession?: null; systemPingRequest: PB_System.PingRequest.$Shape; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemPingResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse: PB_System.PingResponse.$Shape; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemRebootRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest: PB_System.RebootRequest.$Shape; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemDeviceInfoRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest: PB_System.DeviceInfoRequest.$Shape; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemDeviceInfoResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse: PB_System.DeviceInfoResponse.$Shape; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemFactoryResetRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest: PB_System.FactoryResetRequest.$Shape; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemGetDatetimeRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest: PB_System.GetDateTimeRequest.$Shape; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemGetDatetimeResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse: PB_System.GetDateTimeResponse.$Shape; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemSetDatetimeRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest: PB_System.SetDateTimeRequest.$Shape; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemPlayAudiovisualAlertRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest: PB_System.PlayAudiovisualAlertRequest.$Shape; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemProtobufVersionRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest: PB_System.ProtobufVersionRequest.$Shape; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemProtobufVersionResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse: PB_System.ProtobufVersionResponse.$Shape; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemUpdateRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest: PB_System.UpdateRequest.$Shape; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemUpdateResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse: PB_System.UpdateResponse.$Shape; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemPowerInfoRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest: PB_System.PowerInfoRequest.$Shape; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemPowerInfoResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse: PB_System.PowerInfoResponse.$Shape; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageInfoRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest: PB_Storage.InfoRequest.$Shape; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageInfoResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse: PB_Storage.InfoResponse.$Shape; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageTimestampRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest: PB_Storage.TimestampRequest.$Shape; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageTimestampResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse: PB_Storage.TimestampResponse.$Shape; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageStatRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest: PB_Storage.StatRequest.$Shape; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageStatResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse: PB_Storage.StatResponse.$Shape; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageListRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest: PB_Storage.ListRequest.$Shape; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageListResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse: PB_Storage.ListResponse.$Shape; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageReadRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest: PB_Storage.ReadRequest.$Shape; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageReadResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse: PB_Storage.ReadResponse.$Shape; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageWriteRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest: PB_Storage.WriteRequest.$Shape; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageDeleteRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest: PB_Storage.DeleteRequest.$Shape; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageMkdirRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest: PB_Storage.MkdirRequest.$Shape; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageMd5sumRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest: PB_Storage.Md5sumRequest.$Shape; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageMd5sumResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse: PB_Storage.Md5sumResponse.$Shape; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageRenameRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest: PB_Storage.RenameRequest.$Shape; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageBackupCreateRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest: PB_Storage.BackupCreateRequest.$Shape; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageBackupRestoreRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest: PB_Storage.BackupRestoreRequest.$Shape; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageTarExtractRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest: PB_Storage.TarExtractRequest.$Shape; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "appStartRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest: PB_App.StartRequest.$Shape; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "appLockStatusRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest: PB_App.LockStatusRequest.$Shape; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "appLockStatusResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse: PB_App.LockStatusResponse.$Shape; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "appExitRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest: PB_App.AppExitRequest.$Shape; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "appLoadFileRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest: PB_App.AppLoadFileRequest.$Shape; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "appButtonPressRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest: PB_App.AppButtonPressRequest.$Shape; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "appButtonReleaseRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest: PB_App.AppButtonReleaseRequest.$Shape; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "appButtonPressReleaseRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest: PB_App.AppButtonPressReleaseRequest.$Shape; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "appGetErrorRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest: PB_App.GetErrorRequest.$Shape; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "appGetErrorResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse: PB_App.GetErrorResponse.$Shape; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "appDataExchangeRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest: PB_App.DataExchangeRequest.$Shape; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "guiStartScreenStreamRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest: PB_Gui.StartScreenStreamRequest.$Shape; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "guiStopScreenStreamRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest: PB_Gui.StopScreenStreamRequest.$Shape; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "guiScreenFrame"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame: PB_Gui.ScreenFrame.$Shape; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "guiSendInputEventRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest: PB_Gui.SendInputEventRequest.$Shape; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "guiStartVirtualDisplayRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest: PB_Gui.StartVirtualDisplayRequest.$Shape; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "guiStopVirtualDisplayRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest: PB_Gui.StopVirtualDisplayRequest.$Shape; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "gpioSetPinMode"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode: PB_Gpio.SetPinMode.$Shape; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "gpioSetInputPull"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull: PB_Gpio.SetInputPull.$Shape; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "gpioGetPinMode"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode: PB_Gpio.GetPinMode.$Shape; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "gpioGetPinModeResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse: PB_Gpio.GetPinModeResponse.$Shape; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "gpioReadPin"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin: PB_Gpio.ReadPin.$Shape; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "gpioReadPinResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse: PB_Gpio.ReadPinResponse.$Shape; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "gpioWritePin"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin: PB_Gpio.WritePin.$Shape; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "gpioGetOtgMode"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode: PB_Gpio.GetOtgMode.$Shape; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "gpioGetOtgModeResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse: PB_Gpio.GetOtgModeResponse.$Shape; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "gpioSetOtgMode"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode: PB_Gpio.SetOtgMode.$Shape; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "appStateResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse: PB_App.AppStateResponse.$Shape; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "propertyGetRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest: PB_Property.GetRequest.$Shape; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "propertyGetResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse: PB_Property.GetResponse.$Shape; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "desktopIsLockedRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest: PB_Desktop.IsLockedRequest.$Shape; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "desktopUnlockRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest: PB_Desktop.UnlockRequest.$Shape; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "desktopStatusSubscribeRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest: PB_Desktop.StatusSubscribeRequest.$Shape; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "desktopStatusUnsubscribeRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest: PB_Desktop.StatusUnsubscribeRequest.$Shape; desktopStatus?: null }|{ content?: "desktopStatus"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus: PB_Desktop.Status.$Shape })
         * )} PB.Main.$Shape
         */

        /**
         * Constructs a new Main.
         * @memberof PB
         * @classdesc Represents a Main.
         * @constructor
         * @param {PB.Main.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const Main = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Main commandId.
         * @member {number} commandId
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.commandId = 0;

        /**
         * Main commandStatus.
         * @member {PB.CommandStatus} commandStatus
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.commandStatus = 0;

        /**
         * Main hasNext.
         * @member {boolean} hasNext
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.hasNext = false;

        /**
         * Main empty.
         * @member {PB.Empty.$Properties|null|undefined} empty
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.empty = null;

        /**
         * Main stopSession.
         * @member {PB.StopSession.$Properties|null|undefined} stopSession
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.stopSession = null;

        /**
         * Main systemPingRequest.
         * @member {PB_System.PingRequest.$Properties|null|undefined} systemPingRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.systemPingRequest = null;

        /**
         * Main systemPingResponse.
         * @member {PB_System.PingResponse.$Properties|null|undefined} systemPingResponse
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.systemPingResponse = null;

        /**
         * Main systemRebootRequest.
         * @member {PB_System.RebootRequest.$Properties|null|undefined} systemRebootRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.systemRebootRequest = null;

        /**
         * Main systemDeviceInfoRequest.
         * @member {PB_System.DeviceInfoRequest.$Properties|null|undefined} systemDeviceInfoRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.systemDeviceInfoRequest = null;

        /**
         * Main systemDeviceInfoResponse.
         * @member {PB_System.DeviceInfoResponse.$Properties|null|undefined} systemDeviceInfoResponse
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.systemDeviceInfoResponse = null;

        /**
         * Main systemFactoryResetRequest.
         * @member {PB_System.FactoryResetRequest.$Properties|null|undefined} systemFactoryResetRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.systemFactoryResetRequest = null;

        /**
         * Main systemGetDatetimeRequest.
         * @member {PB_System.GetDateTimeRequest.$Properties|null|undefined} systemGetDatetimeRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.systemGetDatetimeRequest = null;

        /**
         * Main systemGetDatetimeResponse.
         * @member {PB_System.GetDateTimeResponse.$Properties|null|undefined} systemGetDatetimeResponse
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.systemGetDatetimeResponse = null;

        /**
         * Main systemSetDatetimeRequest.
         * @member {PB_System.SetDateTimeRequest.$Properties|null|undefined} systemSetDatetimeRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.systemSetDatetimeRequest = null;

        /**
         * Main systemPlayAudiovisualAlertRequest.
         * @member {PB_System.PlayAudiovisualAlertRequest.$Properties|null|undefined} systemPlayAudiovisualAlertRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.systemPlayAudiovisualAlertRequest = null;

        /**
         * Main systemProtobufVersionRequest.
         * @member {PB_System.ProtobufVersionRequest.$Properties|null|undefined} systemProtobufVersionRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.systemProtobufVersionRequest = null;

        /**
         * Main systemProtobufVersionResponse.
         * @member {PB_System.ProtobufVersionResponse.$Properties|null|undefined} systemProtobufVersionResponse
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.systemProtobufVersionResponse = null;

        /**
         * Main systemUpdateRequest.
         * @member {PB_System.UpdateRequest.$Properties|null|undefined} systemUpdateRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.systemUpdateRequest = null;

        /**
         * Main systemUpdateResponse.
         * @member {PB_System.UpdateResponse.$Properties|null|undefined} systemUpdateResponse
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.systemUpdateResponse = null;

        /**
         * Main systemPowerInfoRequest.
         * @member {PB_System.PowerInfoRequest.$Properties|null|undefined} systemPowerInfoRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.systemPowerInfoRequest = null;

        /**
         * Main systemPowerInfoResponse.
         * @member {PB_System.PowerInfoResponse.$Properties|null|undefined} systemPowerInfoResponse
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.systemPowerInfoResponse = null;

        /**
         * Main storageInfoRequest.
         * @member {PB_Storage.InfoRequest.$Properties|null|undefined} storageInfoRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.storageInfoRequest = null;

        /**
         * Main storageInfoResponse.
         * @member {PB_Storage.InfoResponse.$Properties|null|undefined} storageInfoResponse
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.storageInfoResponse = null;

        /**
         * Main storageTimestampRequest.
         * @member {PB_Storage.TimestampRequest.$Properties|null|undefined} storageTimestampRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.storageTimestampRequest = null;

        /**
         * Main storageTimestampResponse.
         * @member {PB_Storage.TimestampResponse.$Properties|null|undefined} storageTimestampResponse
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.storageTimestampResponse = null;

        /**
         * Main storageStatRequest.
         * @member {PB_Storage.StatRequest.$Properties|null|undefined} storageStatRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.storageStatRequest = null;

        /**
         * Main storageStatResponse.
         * @member {PB_Storage.StatResponse.$Properties|null|undefined} storageStatResponse
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.storageStatResponse = null;

        /**
         * Main storageListRequest.
         * @member {PB_Storage.ListRequest.$Properties|null|undefined} storageListRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.storageListRequest = null;

        /**
         * Main storageListResponse.
         * @member {PB_Storage.ListResponse.$Properties|null|undefined} storageListResponse
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.storageListResponse = null;

        /**
         * Main storageReadRequest.
         * @member {PB_Storage.ReadRequest.$Properties|null|undefined} storageReadRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.storageReadRequest = null;

        /**
         * Main storageReadResponse.
         * @member {PB_Storage.ReadResponse.$Properties|null|undefined} storageReadResponse
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.storageReadResponse = null;

        /**
         * Main storageWriteRequest.
         * @member {PB_Storage.WriteRequest.$Properties|null|undefined} storageWriteRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.storageWriteRequest = null;

        /**
         * Main storageDeleteRequest.
         * @member {PB_Storage.DeleteRequest.$Properties|null|undefined} storageDeleteRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.storageDeleteRequest = null;

        /**
         * Main storageMkdirRequest.
         * @member {PB_Storage.MkdirRequest.$Properties|null|undefined} storageMkdirRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.storageMkdirRequest = null;

        /**
         * Main storageMd5sumRequest.
         * @member {PB_Storage.Md5sumRequest.$Properties|null|undefined} storageMd5sumRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.storageMd5sumRequest = null;

        /**
         * Main storageMd5sumResponse.
         * @member {PB_Storage.Md5sumResponse.$Properties|null|undefined} storageMd5sumResponse
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.storageMd5sumResponse = null;

        /**
         * Main storageRenameRequest.
         * @member {PB_Storage.RenameRequest.$Properties|null|undefined} storageRenameRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.storageRenameRequest = null;

        /**
         * Main storageBackupCreateRequest.
         * @member {PB_Storage.BackupCreateRequest.$Properties|null|undefined} storageBackupCreateRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.storageBackupCreateRequest = null;

        /**
         * Main storageBackupRestoreRequest.
         * @member {PB_Storage.BackupRestoreRequest.$Properties|null|undefined} storageBackupRestoreRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.storageBackupRestoreRequest = null;

        /**
         * Main storageTarExtractRequest.
         * @member {PB_Storage.TarExtractRequest.$Properties|null|undefined} storageTarExtractRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.storageTarExtractRequest = null;

        /**
         * Main appStartRequest.
         * @member {PB_App.StartRequest.$Properties|null|undefined} appStartRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.appStartRequest = null;

        /**
         * Main appLockStatusRequest.
         * @member {PB_App.LockStatusRequest.$Properties|null|undefined} appLockStatusRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.appLockStatusRequest = null;

        /**
         * Main appLockStatusResponse.
         * @member {PB_App.LockStatusResponse.$Properties|null|undefined} appLockStatusResponse
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.appLockStatusResponse = null;

        /**
         * Main appExitRequest.
         * @member {PB_App.AppExitRequest.$Properties|null|undefined} appExitRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.appExitRequest = null;

        /**
         * Main appLoadFileRequest.
         * @member {PB_App.AppLoadFileRequest.$Properties|null|undefined} appLoadFileRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.appLoadFileRequest = null;

        /**
         * Main appButtonPressRequest.
         * @member {PB_App.AppButtonPressRequest.$Properties|null|undefined} appButtonPressRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.appButtonPressRequest = null;

        /**
         * Main appButtonReleaseRequest.
         * @member {PB_App.AppButtonReleaseRequest.$Properties|null|undefined} appButtonReleaseRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.appButtonReleaseRequest = null;

        /**
         * Main appButtonPressReleaseRequest.
         * @member {PB_App.AppButtonPressReleaseRequest.$Properties|null|undefined} appButtonPressReleaseRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.appButtonPressReleaseRequest = null;

        /**
         * Main appGetErrorRequest.
         * @member {PB_App.GetErrorRequest.$Properties|null|undefined} appGetErrorRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.appGetErrorRequest = null;

        /**
         * Main appGetErrorResponse.
         * @member {PB_App.GetErrorResponse.$Properties|null|undefined} appGetErrorResponse
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.appGetErrorResponse = null;

        /**
         * Main appDataExchangeRequest.
         * @member {PB_App.DataExchangeRequest.$Properties|null|undefined} appDataExchangeRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.appDataExchangeRequest = null;

        /**
         * Main guiStartScreenStreamRequest.
         * @member {PB_Gui.StartScreenStreamRequest.$Properties|null|undefined} guiStartScreenStreamRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.guiStartScreenStreamRequest = null;

        /**
         * Main guiStopScreenStreamRequest.
         * @member {PB_Gui.StopScreenStreamRequest.$Properties|null|undefined} guiStopScreenStreamRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.guiStopScreenStreamRequest = null;

        /**
         * Main guiScreenFrame.
         * @member {PB_Gui.ScreenFrame.$Properties|null|undefined} guiScreenFrame
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.guiScreenFrame = null;

        /**
         * Main guiSendInputEventRequest.
         * @member {PB_Gui.SendInputEventRequest.$Properties|null|undefined} guiSendInputEventRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.guiSendInputEventRequest = null;

        /**
         * Main guiStartVirtualDisplayRequest.
         * @member {PB_Gui.StartVirtualDisplayRequest.$Properties|null|undefined} guiStartVirtualDisplayRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.guiStartVirtualDisplayRequest = null;

        /**
         * Main guiStopVirtualDisplayRequest.
         * @member {PB_Gui.StopVirtualDisplayRequest.$Properties|null|undefined} guiStopVirtualDisplayRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.guiStopVirtualDisplayRequest = null;

        /**
         * Main gpioSetPinMode.
         * @member {PB_Gpio.SetPinMode.$Properties|null|undefined} gpioSetPinMode
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.gpioSetPinMode = null;

        /**
         * Main gpioSetInputPull.
         * @member {PB_Gpio.SetInputPull.$Properties|null|undefined} gpioSetInputPull
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.gpioSetInputPull = null;

        /**
         * Main gpioGetPinMode.
         * @member {PB_Gpio.GetPinMode.$Properties|null|undefined} gpioGetPinMode
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.gpioGetPinMode = null;

        /**
         * Main gpioGetPinModeResponse.
         * @member {PB_Gpio.GetPinModeResponse.$Properties|null|undefined} gpioGetPinModeResponse
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.gpioGetPinModeResponse = null;

        /**
         * Main gpioReadPin.
         * @member {PB_Gpio.ReadPin.$Properties|null|undefined} gpioReadPin
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.gpioReadPin = null;

        /**
         * Main gpioReadPinResponse.
         * @member {PB_Gpio.ReadPinResponse.$Properties|null|undefined} gpioReadPinResponse
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.gpioReadPinResponse = null;

        /**
         * Main gpioWritePin.
         * @member {PB_Gpio.WritePin.$Properties|null|undefined} gpioWritePin
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.gpioWritePin = null;

        /**
         * Main gpioGetOtgMode.
         * @member {PB_Gpio.GetOtgMode.$Properties|null|undefined} gpioGetOtgMode
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.gpioGetOtgMode = null;

        /**
         * Main gpioGetOtgModeResponse.
         * @member {PB_Gpio.GetOtgModeResponse.$Properties|null|undefined} gpioGetOtgModeResponse
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.gpioGetOtgModeResponse = null;

        /**
         * Main gpioSetOtgMode.
         * @member {PB_Gpio.SetOtgMode.$Properties|null|undefined} gpioSetOtgMode
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.gpioSetOtgMode = null;

        /**
         * Main appStateResponse.
         * @member {PB_App.AppStateResponse.$Properties|null|undefined} appStateResponse
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.appStateResponse = null;

        /**
         * Main propertyGetRequest.
         * @member {PB_Property.GetRequest.$Properties|null|undefined} propertyGetRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.propertyGetRequest = null;

        /**
         * Main propertyGetResponse.
         * @member {PB_Property.GetResponse.$Properties|null|undefined} propertyGetResponse
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.propertyGetResponse = null;

        /**
         * Main desktopIsLockedRequest.
         * @member {PB_Desktop.IsLockedRequest.$Properties|null|undefined} desktopIsLockedRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.desktopIsLockedRequest = null;

        /**
         * Main desktopUnlockRequest.
         * @member {PB_Desktop.UnlockRequest.$Properties|null|undefined} desktopUnlockRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.desktopUnlockRequest = null;

        /**
         * Main desktopStatusSubscribeRequest.
         * @member {PB_Desktop.StatusSubscribeRequest.$Properties|null|undefined} desktopStatusSubscribeRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.desktopStatusSubscribeRequest = null;

        /**
         * Main desktopStatusUnsubscribeRequest.
         * @member {PB_Desktop.StatusUnsubscribeRequest.$Properties|null|undefined} desktopStatusUnsubscribeRequest
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.desktopStatusUnsubscribeRequest = null;

        /**
         * Main desktopStatus.
         * @member {PB_Desktop.Status.$Properties|null|undefined} desktopStatus
         * @memberof PB.Main
         * @instance
         */
        Main.prototype.desktopStatus = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Main content.
         * @member {"empty"|"stopSession"|"systemPingRequest"|"systemPingResponse"|"systemRebootRequest"|"systemDeviceInfoRequest"|"systemDeviceInfoResponse"|"systemFactoryResetRequest"|"systemGetDatetimeRequest"|"systemGetDatetimeResponse"|"systemSetDatetimeRequest"|"systemPlayAudiovisualAlertRequest"|"systemProtobufVersionRequest"|"systemProtobufVersionResponse"|"systemUpdateRequest"|"systemUpdateResponse"|"systemPowerInfoRequest"|"systemPowerInfoResponse"|"storageInfoRequest"|"storageInfoResponse"|"storageTimestampRequest"|"storageTimestampResponse"|"storageStatRequest"|"storageStatResponse"|"storageListRequest"|"storageListResponse"|"storageReadRequest"|"storageReadResponse"|"storageWriteRequest"|"storageDeleteRequest"|"storageMkdirRequest"|"storageMd5sumRequest"|"storageMd5sumResponse"|"storageRenameRequest"|"storageBackupCreateRequest"|"storageBackupRestoreRequest"|"storageTarExtractRequest"|"appStartRequest"|"appLockStatusRequest"|"appLockStatusResponse"|"appExitRequest"|"appLoadFileRequest"|"appButtonPressRequest"|"appButtonReleaseRequest"|"appButtonPressReleaseRequest"|"appGetErrorRequest"|"appGetErrorResponse"|"appDataExchangeRequest"|"guiStartScreenStreamRequest"|"guiStopScreenStreamRequest"|"guiScreenFrame"|"guiSendInputEventRequest"|"guiStartVirtualDisplayRequest"|"guiStopVirtualDisplayRequest"|"gpioSetPinMode"|"gpioSetInputPull"|"gpioGetPinMode"|"gpioGetPinModeResponse"|"gpioReadPin"|"gpioReadPinResponse"|"gpioWritePin"|"gpioGetOtgMode"|"gpioGetOtgModeResponse"|"gpioSetOtgMode"|"appStateResponse"|"propertyGetRequest"|"propertyGetResponse"|"desktopIsLockedRequest"|"desktopUnlockRequest"|"desktopStatusSubscribeRequest"|"desktopStatusUnsubscribeRequest"|"desktopStatus"|undefined} content
         * @memberof PB.Main
         * @instance
         */
        $Object.defineProperty(Main.prototype, "content", {
            get: $util.oneOfGetter($oneOfFields = ["empty", "stopSession", "systemPingRequest", "systemPingResponse", "systemRebootRequest", "systemDeviceInfoRequest", "systemDeviceInfoResponse", "systemFactoryResetRequest", "systemGetDatetimeRequest", "systemGetDatetimeResponse", "systemSetDatetimeRequest", "systemPlayAudiovisualAlertRequest", "systemProtobufVersionRequest", "systemProtobufVersionResponse", "systemUpdateRequest", "systemUpdateResponse", "systemPowerInfoRequest", "systemPowerInfoResponse", "storageInfoRequest", "storageInfoResponse", "storageTimestampRequest", "storageTimestampResponse", "storageStatRequest", "storageStatResponse", "storageListRequest", "storageListResponse", "storageReadRequest", "storageReadResponse", "storageWriteRequest", "storageDeleteRequest", "storageMkdirRequest", "storageMd5sumRequest", "storageMd5sumResponse", "storageRenameRequest", "storageBackupCreateRequest", "storageBackupRestoreRequest", "storageTarExtractRequest", "appStartRequest", "appLockStatusRequest", "appLockStatusResponse", "appExitRequest", "appLoadFileRequest", "appButtonPressRequest", "appButtonReleaseRequest", "appButtonPressReleaseRequest", "appGetErrorRequest", "appGetErrorResponse", "appDataExchangeRequest", "guiStartScreenStreamRequest", "guiStopScreenStreamRequest", "guiScreenFrame", "guiSendInputEventRequest", "guiStartVirtualDisplayRequest", "guiStopVirtualDisplayRequest", "gpioSetPinMode", "gpioSetInputPull", "gpioGetPinMode", "gpioGetPinModeResponse", "gpioReadPin", "gpioReadPinResponse", "gpioWritePin", "gpioGetOtgMode", "gpioGetOtgModeResponse", "gpioSetOtgMode", "appStateResponse", "propertyGetRequest", "propertyGetResponse", "desktopIsLockedRequest", "desktopUnlockRequest", "desktopStatusSubscribeRequest", "desktopStatusUnsubscribeRequest", "desktopStatus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Encodes the specified Main message. Does not implicitly {@link PB.Main.verify|verify} messages.
         * @function encode
         * @memberof PB.Main
         * @static
         * @param {PB.Main.$Properties} message Main message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Main.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.commandId != null && $Object.hasOwnProperty.call(message, "commandId") && message.commandId !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.commandId);
            if (message.commandStatus != null && $Object.hasOwnProperty.call(message, "commandStatus") && message.commandStatus !== 0)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.commandStatus);
            if (message.hasNext != null && $Object.hasOwnProperty.call(message, "hasNext") && message.hasNext !== false)
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.hasNext);
            if (message.empty != null && $Object.hasOwnProperty.call(message, "empty"))
                $root.PB.Empty.encode(message.empty, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
            if (message.systemPingRequest != null && $Object.hasOwnProperty.call(message, "systemPingRequest"))
                $root.PB_System.PingRequest.encode(message.systemPingRequest, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
            if (message.systemPingResponse != null && $Object.hasOwnProperty.call(message, "systemPingResponse"))
                $root.PB_System.PingResponse.encode(message.systemPingResponse, writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
            if (message.storageListRequest != null && $Object.hasOwnProperty.call(message, "storageListRequest"))
                $root.PB_Storage.ListRequest.encode(message.storageListRequest, writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
            if (message.storageListResponse != null && $Object.hasOwnProperty.call(message, "storageListResponse"))
                $root.PB_Storage.ListResponse.encode(message.storageListResponse, writer.uint32(/* id 8, wireType 2 =*/66).fork(), _depth + 1).ldelim();
            if (message.storageReadRequest != null && $Object.hasOwnProperty.call(message, "storageReadRequest"))
                $root.PB_Storage.ReadRequest.encode(message.storageReadRequest, writer.uint32(/* id 9, wireType 2 =*/74).fork(), _depth + 1).ldelim();
            if (message.storageReadResponse != null && $Object.hasOwnProperty.call(message, "storageReadResponse"))
                $root.PB_Storage.ReadResponse.encode(message.storageReadResponse, writer.uint32(/* id 10, wireType 2 =*/82).fork(), _depth + 1).ldelim();
            if (message.storageWriteRequest != null && $Object.hasOwnProperty.call(message, "storageWriteRequest"))
                $root.PB_Storage.WriteRequest.encode(message.storageWriteRequest, writer.uint32(/* id 11, wireType 2 =*/90).fork(), _depth + 1).ldelim();
            if (message.storageDeleteRequest != null && $Object.hasOwnProperty.call(message, "storageDeleteRequest"))
                $root.PB_Storage.DeleteRequest.encode(message.storageDeleteRequest, writer.uint32(/* id 12, wireType 2 =*/98).fork(), _depth + 1).ldelim();
            if (message.storageMkdirRequest != null && $Object.hasOwnProperty.call(message, "storageMkdirRequest"))
                $root.PB_Storage.MkdirRequest.encode(message.storageMkdirRequest, writer.uint32(/* id 13, wireType 2 =*/106).fork(), _depth + 1).ldelim();
            if (message.storageMd5sumRequest != null && $Object.hasOwnProperty.call(message, "storageMd5sumRequest"))
                $root.PB_Storage.Md5sumRequest.encode(message.storageMd5sumRequest, writer.uint32(/* id 14, wireType 2 =*/114).fork(), _depth + 1).ldelim();
            if (message.storageMd5sumResponse != null && $Object.hasOwnProperty.call(message, "storageMd5sumResponse"))
                $root.PB_Storage.Md5sumResponse.encode(message.storageMd5sumResponse, writer.uint32(/* id 15, wireType 2 =*/122).fork(), _depth + 1).ldelim();
            if (message.appStartRequest != null && $Object.hasOwnProperty.call(message, "appStartRequest"))
                $root.PB_App.StartRequest.encode(message.appStartRequest, writer.uint32(/* id 16, wireType 2 =*/130).fork(), _depth + 1).ldelim();
            if (message.appLockStatusRequest != null && $Object.hasOwnProperty.call(message, "appLockStatusRequest"))
                $root.PB_App.LockStatusRequest.encode(message.appLockStatusRequest, writer.uint32(/* id 17, wireType 2 =*/138).fork(), _depth + 1).ldelim();
            if (message.appLockStatusResponse != null && $Object.hasOwnProperty.call(message, "appLockStatusResponse"))
                $root.PB_App.LockStatusResponse.encode(message.appLockStatusResponse, writer.uint32(/* id 18, wireType 2 =*/146).fork(), _depth + 1).ldelim();
            if (message.stopSession != null && $Object.hasOwnProperty.call(message, "stopSession"))
                $root.PB.StopSession.encode(message.stopSession, writer.uint32(/* id 19, wireType 2 =*/154).fork(), _depth + 1).ldelim();
            if (message.guiStartScreenStreamRequest != null && $Object.hasOwnProperty.call(message, "guiStartScreenStreamRequest"))
                $root.PB_Gui.StartScreenStreamRequest.encode(message.guiStartScreenStreamRequest, writer.uint32(/* id 20, wireType 2 =*/162).fork(), _depth + 1).ldelim();
            if (message.guiStopScreenStreamRequest != null && $Object.hasOwnProperty.call(message, "guiStopScreenStreamRequest"))
                $root.PB_Gui.StopScreenStreamRequest.encode(message.guiStopScreenStreamRequest, writer.uint32(/* id 21, wireType 2 =*/170).fork(), _depth + 1).ldelim();
            if (message.guiScreenFrame != null && $Object.hasOwnProperty.call(message, "guiScreenFrame"))
                $root.PB_Gui.ScreenFrame.encode(message.guiScreenFrame, writer.uint32(/* id 22, wireType 2 =*/178).fork(), _depth + 1).ldelim();
            if (message.guiSendInputEventRequest != null && $Object.hasOwnProperty.call(message, "guiSendInputEventRequest"))
                $root.PB_Gui.SendInputEventRequest.encode(message.guiSendInputEventRequest, writer.uint32(/* id 23, wireType 2 =*/186).fork(), _depth + 1).ldelim();
            if (message.storageStatRequest != null && $Object.hasOwnProperty.call(message, "storageStatRequest"))
                $root.PB_Storage.StatRequest.encode(message.storageStatRequest, writer.uint32(/* id 24, wireType 2 =*/194).fork(), _depth + 1).ldelim();
            if (message.storageStatResponse != null && $Object.hasOwnProperty.call(message, "storageStatResponse"))
                $root.PB_Storage.StatResponse.encode(message.storageStatResponse, writer.uint32(/* id 25, wireType 2 =*/202).fork(), _depth + 1).ldelim();
            if (message.guiStartVirtualDisplayRequest != null && $Object.hasOwnProperty.call(message, "guiStartVirtualDisplayRequest"))
                $root.PB_Gui.StartVirtualDisplayRequest.encode(message.guiStartVirtualDisplayRequest, writer.uint32(/* id 26, wireType 2 =*/210).fork(), _depth + 1).ldelim();
            if (message.guiStopVirtualDisplayRequest != null && $Object.hasOwnProperty.call(message, "guiStopVirtualDisplayRequest"))
                $root.PB_Gui.StopVirtualDisplayRequest.encode(message.guiStopVirtualDisplayRequest, writer.uint32(/* id 27, wireType 2 =*/218).fork(), _depth + 1).ldelim();
            if (message.storageInfoRequest != null && $Object.hasOwnProperty.call(message, "storageInfoRequest"))
                $root.PB_Storage.InfoRequest.encode(message.storageInfoRequest, writer.uint32(/* id 28, wireType 2 =*/226).fork(), _depth + 1).ldelim();
            if (message.storageInfoResponse != null && $Object.hasOwnProperty.call(message, "storageInfoResponse"))
                $root.PB_Storage.InfoResponse.encode(message.storageInfoResponse, writer.uint32(/* id 29, wireType 2 =*/234).fork(), _depth + 1).ldelim();
            if (message.storageRenameRequest != null && $Object.hasOwnProperty.call(message, "storageRenameRequest"))
                $root.PB_Storage.RenameRequest.encode(message.storageRenameRequest, writer.uint32(/* id 30, wireType 2 =*/242).fork(), _depth + 1).ldelim();
            if (message.systemRebootRequest != null && $Object.hasOwnProperty.call(message, "systemRebootRequest"))
                $root.PB_System.RebootRequest.encode(message.systemRebootRequest, writer.uint32(/* id 31, wireType 2 =*/250).fork(), _depth + 1).ldelim();
            if (message.systemDeviceInfoRequest != null && $Object.hasOwnProperty.call(message, "systemDeviceInfoRequest"))
                $root.PB_System.DeviceInfoRequest.encode(message.systemDeviceInfoRequest, writer.uint32(/* id 32, wireType 2 =*/258).fork(), _depth + 1).ldelim();
            if (message.systemDeviceInfoResponse != null && $Object.hasOwnProperty.call(message, "systemDeviceInfoResponse"))
                $root.PB_System.DeviceInfoResponse.encode(message.systemDeviceInfoResponse, writer.uint32(/* id 33, wireType 2 =*/266).fork(), _depth + 1).ldelim();
            if (message.systemFactoryResetRequest != null && $Object.hasOwnProperty.call(message, "systemFactoryResetRequest"))
                $root.PB_System.FactoryResetRequest.encode(message.systemFactoryResetRequest, writer.uint32(/* id 34, wireType 2 =*/274).fork(), _depth + 1).ldelim();
            if (message.systemGetDatetimeRequest != null && $Object.hasOwnProperty.call(message, "systemGetDatetimeRequest"))
                $root.PB_System.GetDateTimeRequest.encode(message.systemGetDatetimeRequest, writer.uint32(/* id 35, wireType 2 =*/282).fork(), _depth + 1).ldelim();
            if (message.systemGetDatetimeResponse != null && $Object.hasOwnProperty.call(message, "systemGetDatetimeResponse"))
                $root.PB_System.GetDateTimeResponse.encode(message.systemGetDatetimeResponse, writer.uint32(/* id 36, wireType 2 =*/290).fork(), _depth + 1).ldelim();
            if (message.systemSetDatetimeRequest != null && $Object.hasOwnProperty.call(message, "systemSetDatetimeRequest"))
                $root.PB_System.SetDateTimeRequest.encode(message.systemSetDatetimeRequest, writer.uint32(/* id 37, wireType 2 =*/298).fork(), _depth + 1).ldelim();
            if (message.systemPlayAudiovisualAlertRequest != null && $Object.hasOwnProperty.call(message, "systemPlayAudiovisualAlertRequest"))
                $root.PB_System.PlayAudiovisualAlertRequest.encode(message.systemPlayAudiovisualAlertRequest, writer.uint32(/* id 38, wireType 2 =*/306).fork(), _depth + 1).ldelim();
            if (message.systemProtobufVersionRequest != null && $Object.hasOwnProperty.call(message, "systemProtobufVersionRequest"))
                $root.PB_System.ProtobufVersionRequest.encode(message.systemProtobufVersionRequest, writer.uint32(/* id 39, wireType 2 =*/314).fork(), _depth + 1).ldelim();
            if (message.systemProtobufVersionResponse != null && $Object.hasOwnProperty.call(message, "systemProtobufVersionResponse"))
                $root.PB_System.ProtobufVersionResponse.encode(message.systemProtobufVersionResponse, writer.uint32(/* id 40, wireType 2 =*/322).fork(), _depth + 1).ldelim();
            if (message.systemUpdateRequest != null && $Object.hasOwnProperty.call(message, "systemUpdateRequest"))
                $root.PB_System.UpdateRequest.encode(message.systemUpdateRequest, writer.uint32(/* id 41, wireType 2 =*/330).fork(), _depth + 1).ldelim();
            if (message.storageBackupCreateRequest != null && $Object.hasOwnProperty.call(message, "storageBackupCreateRequest"))
                $root.PB_Storage.BackupCreateRequest.encode(message.storageBackupCreateRequest, writer.uint32(/* id 42, wireType 2 =*/338).fork(), _depth + 1).ldelim();
            if (message.storageBackupRestoreRequest != null && $Object.hasOwnProperty.call(message, "storageBackupRestoreRequest"))
                $root.PB_Storage.BackupRestoreRequest.encode(message.storageBackupRestoreRequest, writer.uint32(/* id 43, wireType 2 =*/346).fork(), _depth + 1).ldelim();
            if (message.systemPowerInfoRequest != null && $Object.hasOwnProperty.call(message, "systemPowerInfoRequest"))
                $root.PB_System.PowerInfoRequest.encode(message.systemPowerInfoRequest, writer.uint32(/* id 44, wireType 2 =*/354).fork(), _depth + 1).ldelim();
            if (message.systemPowerInfoResponse != null && $Object.hasOwnProperty.call(message, "systemPowerInfoResponse"))
                $root.PB_System.PowerInfoResponse.encode(message.systemPowerInfoResponse, writer.uint32(/* id 45, wireType 2 =*/362).fork(), _depth + 1).ldelim();
            if (message.systemUpdateResponse != null && $Object.hasOwnProperty.call(message, "systemUpdateResponse"))
                $root.PB_System.UpdateResponse.encode(message.systemUpdateResponse, writer.uint32(/* id 46, wireType 2 =*/370).fork(), _depth + 1).ldelim();
            if (message.appExitRequest != null && $Object.hasOwnProperty.call(message, "appExitRequest"))
                $root.PB_App.AppExitRequest.encode(message.appExitRequest, writer.uint32(/* id 47, wireType 2 =*/378).fork(), _depth + 1).ldelim();
            if (message.appLoadFileRequest != null && $Object.hasOwnProperty.call(message, "appLoadFileRequest"))
                $root.PB_App.AppLoadFileRequest.encode(message.appLoadFileRequest, writer.uint32(/* id 48, wireType 2 =*/386).fork(), _depth + 1).ldelim();
            if (message.appButtonPressRequest != null && $Object.hasOwnProperty.call(message, "appButtonPressRequest"))
                $root.PB_App.AppButtonPressRequest.encode(message.appButtonPressRequest, writer.uint32(/* id 49, wireType 2 =*/394).fork(), _depth + 1).ldelim();
            if (message.appButtonReleaseRequest != null && $Object.hasOwnProperty.call(message, "appButtonReleaseRequest"))
                $root.PB_App.AppButtonReleaseRequest.encode(message.appButtonReleaseRequest, writer.uint32(/* id 50, wireType 2 =*/402).fork(), _depth + 1).ldelim();
            if (message.gpioSetPinMode != null && $Object.hasOwnProperty.call(message, "gpioSetPinMode"))
                $root.PB_Gpio.SetPinMode.encode(message.gpioSetPinMode, writer.uint32(/* id 51, wireType 2 =*/410).fork(), _depth + 1).ldelim();
            if (message.gpioSetInputPull != null && $Object.hasOwnProperty.call(message, "gpioSetInputPull"))
                $root.PB_Gpio.SetInputPull.encode(message.gpioSetInputPull, writer.uint32(/* id 52, wireType 2 =*/418).fork(), _depth + 1).ldelim();
            if (message.gpioGetPinMode != null && $Object.hasOwnProperty.call(message, "gpioGetPinMode"))
                $root.PB_Gpio.GetPinMode.encode(message.gpioGetPinMode, writer.uint32(/* id 53, wireType 2 =*/426).fork(), _depth + 1).ldelim();
            if (message.gpioGetPinModeResponse != null && $Object.hasOwnProperty.call(message, "gpioGetPinModeResponse"))
                $root.PB_Gpio.GetPinModeResponse.encode(message.gpioGetPinModeResponse, writer.uint32(/* id 54, wireType 2 =*/434).fork(), _depth + 1).ldelim();
            if (message.gpioReadPin != null && $Object.hasOwnProperty.call(message, "gpioReadPin"))
                $root.PB_Gpio.ReadPin.encode(message.gpioReadPin, writer.uint32(/* id 55, wireType 2 =*/442).fork(), _depth + 1).ldelim();
            if (message.gpioReadPinResponse != null && $Object.hasOwnProperty.call(message, "gpioReadPinResponse"))
                $root.PB_Gpio.ReadPinResponse.encode(message.gpioReadPinResponse, writer.uint32(/* id 56, wireType 2 =*/450).fork(), _depth + 1).ldelim();
            if (message.gpioWritePin != null && $Object.hasOwnProperty.call(message, "gpioWritePin"))
                $root.PB_Gpio.WritePin.encode(message.gpioWritePin, writer.uint32(/* id 57, wireType 2 =*/458).fork(), _depth + 1).ldelim();
            if (message.appStateResponse != null && $Object.hasOwnProperty.call(message, "appStateResponse"))
                $root.PB_App.AppStateResponse.encode(message.appStateResponse, writer.uint32(/* id 58, wireType 2 =*/466).fork(), _depth + 1).ldelim();
            if (message.storageTimestampRequest != null && $Object.hasOwnProperty.call(message, "storageTimestampRequest"))
                $root.PB_Storage.TimestampRequest.encode(message.storageTimestampRequest, writer.uint32(/* id 59, wireType 2 =*/474).fork(), _depth + 1).ldelim();
            if (message.storageTimestampResponse != null && $Object.hasOwnProperty.call(message, "storageTimestampResponse"))
                $root.PB_Storage.TimestampResponse.encode(message.storageTimestampResponse, writer.uint32(/* id 60, wireType 2 =*/482).fork(), _depth + 1).ldelim();
            if (message.propertyGetRequest != null && $Object.hasOwnProperty.call(message, "propertyGetRequest"))
                $root.PB_Property.GetRequest.encode(message.propertyGetRequest, writer.uint32(/* id 61, wireType 2 =*/490).fork(), _depth + 1).ldelim();
            if (message.propertyGetResponse != null && $Object.hasOwnProperty.call(message, "propertyGetResponse"))
                $root.PB_Property.GetResponse.encode(message.propertyGetResponse, writer.uint32(/* id 62, wireType 2 =*/498).fork(), _depth + 1).ldelim();
            if (message.appGetErrorRequest != null && $Object.hasOwnProperty.call(message, "appGetErrorRequest"))
                $root.PB_App.GetErrorRequest.encode(message.appGetErrorRequest, writer.uint32(/* id 63, wireType 2 =*/506).fork(), _depth + 1).ldelim();
            if (message.appGetErrorResponse != null && $Object.hasOwnProperty.call(message, "appGetErrorResponse"))
                $root.PB_App.GetErrorResponse.encode(message.appGetErrorResponse, writer.uint32(/* id 64, wireType 2 =*/514).fork(), _depth + 1).ldelim();
            if (message.appDataExchangeRequest != null && $Object.hasOwnProperty.call(message, "appDataExchangeRequest"))
                $root.PB_App.DataExchangeRequest.encode(message.appDataExchangeRequest, writer.uint32(/* id 65, wireType 2 =*/522).fork(), _depth + 1).ldelim();
            if (message.desktopIsLockedRequest != null && $Object.hasOwnProperty.call(message, "desktopIsLockedRequest"))
                $root.PB_Desktop.IsLockedRequest.encode(message.desktopIsLockedRequest, writer.uint32(/* id 66, wireType 2 =*/530).fork(), _depth + 1).ldelim();
            if (message.desktopUnlockRequest != null && $Object.hasOwnProperty.call(message, "desktopUnlockRequest"))
                $root.PB_Desktop.UnlockRequest.encode(message.desktopUnlockRequest, writer.uint32(/* id 67, wireType 2 =*/538).fork(), _depth + 1).ldelim();
            if (message.desktopStatusSubscribeRequest != null && $Object.hasOwnProperty.call(message, "desktopStatusSubscribeRequest"))
                $root.PB_Desktop.StatusSubscribeRequest.encode(message.desktopStatusSubscribeRequest, writer.uint32(/* id 68, wireType 2 =*/546).fork(), _depth + 1).ldelim();
            if (message.desktopStatusUnsubscribeRequest != null && $Object.hasOwnProperty.call(message, "desktopStatusUnsubscribeRequest"))
                $root.PB_Desktop.StatusUnsubscribeRequest.encode(message.desktopStatusUnsubscribeRequest, writer.uint32(/* id 69, wireType 2 =*/554).fork(), _depth + 1).ldelim();
            if (message.desktopStatus != null && $Object.hasOwnProperty.call(message, "desktopStatus"))
                $root.PB_Desktop.Status.encode(message.desktopStatus, writer.uint32(/* id 70, wireType 2 =*/562).fork(), _depth + 1).ldelim();
            if (message.storageTarExtractRequest != null && $Object.hasOwnProperty.call(message, "storageTarExtractRequest"))
                $root.PB_Storage.TarExtractRequest.encode(message.storageTarExtractRequest, writer.uint32(/* id 71, wireType 2 =*/570).fork(), _depth + 1).ldelim();
            if (message.gpioGetOtgMode != null && $Object.hasOwnProperty.call(message, "gpioGetOtgMode"))
                $root.PB_Gpio.GetOtgMode.encode(message.gpioGetOtgMode, writer.uint32(/* id 72, wireType 2 =*/578).fork(), _depth + 1).ldelim();
            if (message.gpioGetOtgModeResponse != null && $Object.hasOwnProperty.call(message, "gpioGetOtgModeResponse"))
                $root.PB_Gpio.GetOtgModeResponse.encode(message.gpioGetOtgModeResponse, writer.uint32(/* id 73, wireType 2 =*/586).fork(), _depth + 1).ldelim();
            if (message.gpioSetOtgMode != null && $Object.hasOwnProperty.call(message, "gpioSetOtgMode"))
                $root.PB_Gpio.SetOtgMode.encode(message.gpioSetOtgMode, writer.uint32(/* id 74, wireType 2 =*/594).fork(), _depth + 1).ldelim();
            if (message.appButtonPressReleaseRequest != null && $Object.hasOwnProperty.call(message, "appButtonPressReleaseRequest"))
                $root.PB_App.AppButtonPressReleaseRequest.encode(message.appButtonPressReleaseRequest, writer.uint32(/* id 75, wireType 2 =*/602).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Main message, length delimited. Does not implicitly {@link PB.Main.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.Main
         * @static
         * @param {PB.Main.$Properties} message Main message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Main.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a Main message from the specified reader or buffer.
         * @function decode
         * @memberof PB.Main
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.Main & PB.Main.$Shape} Main
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Main.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB.Main();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.commandId = value;
                        else
                            delete message.commandId;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.commandStatus = value;
                        else
                            delete message.commandStatus;
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.hasNext = value;
                        else
                            delete message.hasNext;
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        message.empty = $root.PB.Empty.decode(reader, reader.uint32(), $undefined, _depth + 1, message.empty);
                        message.content = "empty";
                        continue;
                    }
                case 19: {
                        if (wireType !== 2)
                            break;
                        message.stopSession = $root.PB.StopSession.decode(reader, reader.uint32(), $undefined, _depth + 1, message.stopSession);
                        message.content = "stopSession";
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        message.systemPingRequest = $root.PB_System.PingRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.systemPingRequest);
                        message.content = "systemPingRequest";
                        continue;
                    }
                case 6: {
                        if (wireType !== 2)
                            break;
                        message.systemPingResponse = $root.PB_System.PingResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.systemPingResponse);
                        message.content = "systemPingResponse";
                        continue;
                    }
                case 31: {
                        if (wireType !== 2)
                            break;
                        message.systemRebootRequest = $root.PB_System.RebootRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.systemRebootRequest);
                        message.content = "systemRebootRequest";
                        continue;
                    }
                case 32: {
                        if (wireType !== 2)
                            break;
                        message.systemDeviceInfoRequest = $root.PB_System.DeviceInfoRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.systemDeviceInfoRequest);
                        message.content = "systemDeviceInfoRequest";
                        continue;
                    }
                case 33: {
                        if (wireType !== 2)
                            break;
                        message.systemDeviceInfoResponse = $root.PB_System.DeviceInfoResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.systemDeviceInfoResponse);
                        message.content = "systemDeviceInfoResponse";
                        continue;
                    }
                case 34: {
                        if (wireType !== 2)
                            break;
                        message.systemFactoryResetRequest = $root.PB_System.FactoryResetRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.systemFactoryResetRequest);
                        message.content = "systemFactoryResetRequest";
                        continue;
                    }
                case 35: {
                        if (wireType !== 2)
                            break;
                        message.systemGetDatetimeRequest = $root.PB_System.GetDateTimeRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.systemGetDatetimeRequest);
                        message.content = "systemGetDatetimeRequest";
                        continue;
                    }
                case 36: {
                        if (wireType !== 2)
                            break;
                        message.systemGetDatetimeResponse = $root.PB_System.GetDateTimeResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.systemGetDatetimeResponse);
                        message.content = "systemGetDatetimeResponse";
                        continue;
                    }
                case 37: {
                        if (wireType !== 2)
                            break;
                        message.systemSetDatetimeRequest = $root.PB_System.SetDateTimeRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.systemSetDatetimeRequest);
                        message.content = "systemSetDatetimeRequest";
                        continue;
                    }
                case 38: {
                        if (wireType !== 2)
                            break;
                        message.systemPlayAudiovisualAlertRequest = $root.PB_System.PlayAudiovisualAlertRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.systemPlayAudiovisualAlertRequest);
                        message.content = "systemPlayAudiovisualAlertRequest";
                        continue;
                    }
                case 39: {
                        if (wireType !== 2)
                            break;
                        message.systemProtobufVersionRequest = $root.PB_System.ProtobufVersionRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.systemProtobufVersionRequest);
                        message.content = "systemProtobufVersionRequest";
                        continue;
                    }
                case 40: {
                        if (wireType !== 2)
                            break;
                        message.systemProtobufVersionResponse = $root.PB_System.ProtobufVersionResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.systemProtobufVersionResponse);
                        message.content = "systemProtobufVersionResponse";
                        continue;
                    }
                case 41: {
                        if (wireType !== 2)
                            break;
                        message.systemUpdateRequest = $root.PB_System.UpdateRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.systemUpdateRequest);
                        message.content = "systemUpdateRequest";
                        continue;
                    }
                case 46: {
                        if (wireType !== 2)
                            break;
                        message.systemUpdateResponse = $root.PB_System.UpdateResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.systemUpdateResponse);
                        message.content = "systemUpdateResponse";
                        continue;
                    }
                case 44: {
                        if (wireType !== 2)
                            break;
                        message.systemPowerInfoRequest = $root.PB_System.PowerInfoRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.systemPowerInfoRequest);
                        message.content = "systemPowerInfoRequest";
                        continue;
                    }
                case 45: {
                        if (wireType !== 2)
                            break;
                        message.systemPowerInfoResponse = $root.PB_System.PowerInfoResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.systemPowerInfoResponse);
                        message.content = "systemPowerInfoResponse";
                        continue;
                    }
                case 28: {
                        if (wireType !== 2)
                            break;
                        message.storageInfoRequest = $root.PB_Storage.InfoRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.storageInfoRequest);
                        message.content = "storageInfoRequest";
                        continue;
                    }
                case 29: {
                        if (wireType !== 2)
                            break;
                        message.storageInfoResponse = $root.PB_Storage.InfoResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.storageInfoResponse);
                        message.content = "storageInfoResponse";
                        continue;
                    }
                case 59: {
                        if (wireType !== 2)
                            break;
                        message.storageTimestampRequest = $root.PB_Storage.TimestampRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.storageTimestampRequest);
                        message.content = "storageTimestampRequest";
                        continue;
                    }
                case 60: {
                        if (wireType !== 2)
                            break;
                        message.storageTimestampResponse = $root.PB_Storage.TimestampResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.storageTimestampResponse);
                        message.content = "storageTimestampResponse";
                        continue;
                    }
                case 24: {
                        if (wireType !== 2)
                            break;
                        message.storageStatRequest = $root.PB_Storage.StatRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.storageStatRequest);
                        message.content = "storageStatRequest";
                        continue;
                    }
                case 25: {
                        if (wireType !== 2)
                            break;
                        message.storageStatResponse = $root.PB_Storage.StatResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.storageStatResponse);
                        message.content = "storageStatResponse";
                        continue;
                    }
                case 7: {
                        if (wireType !== 2)
                            break;
                        message.storageListRequest = $root.PB_Storage.ListRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.storageListRequest);
                        message.content = "storageListRequest";
                        continue;
                    }
                case 8: {
                        if (wireType !== 2)
                            break;
                        message.storageListResponse = $root.PB_Storage.ListResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.storageListResponse);
                        message.content = "storageListResponse";
                        continue;
                    }
                case 9: {
                        if (wireType !== 2)
                            break;
                        message.storageReadRequest = $root.PB_Storage.ReadRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.storageReadRequest);
                        message.content = "storageReadRequest";
                        continue;
                    }
                case 10: {
                        if (wireType !== 2)
                            break;
                        message.storageReadResponse = $root.PB_Storage.ReadResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.storageReadResponse);
                        message.content = "storageReadResponse";
                        continue;
                    }
                case 11: {
                        if (wireType !== 2)
                            break;
                        message.storageWriteRequest = $root.PB_Storage.WriteRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.storageWriteRequest);
                        message.content = "storageWriteRequest";
                        continue;
                    }
                case 12: {
                        if (wireType !== 2)
                            break;
                        message.storageDeleteRequest = $root.PB_Storage.DeleteRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.storageDeleteRequest);
                        message.content = "storageDeleteRequest";
                        continue;
                    }
                case 13: {
                        if (wireType !== 2)
                            break;
                        message.storageMkdirRequest = $root.PB_Storage.MkdirRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.storageMkdirRequest);
                        message.content = "storageMkdirRequest";
                        continue;
                    }
                case 14: {
                        if (wireType !== 2)
                            break;
                        message.storageMd5sumRequest = $root.PB_Storage.Md5sumRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.storageMd5sumRequest);
                        message.content = "storageMd5sumRequest";
                        continue;
                    }
                case 15: {
                        if (wireType !== 2)
                            break;
                        message.storageMd5sumResponse = $root.PB_Storage.Md5sumResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.storageMd5sumResponse);
                        message.content = "storageMd5sumResponse";
                        continue;
                    }
                case 30: {
                        if (wireType !== 2)
                            break;
                        message.storageRenameRequest = $root.PB_Storage.RenameRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.storageRenameRequest);
                        message.content = "storageRenameRequest";
                        continue;
                    }
                case 42: {
                        if (wireType !== 2)
                            break;
                        message.storageBackupCreateRequest = $root.PB_Storage.BackupCreateRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.storageBackupCreateRequest);
                        message.content = "storageBackupCreateRequest";
                        continue;
                    }
                case 43: {
                        if (wireType !== 2)
                            break;
                        message.storageBackupRestoreRequest = $root.PB_Storage.BackupRestoreRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.storageBackupRestoreRequest);
                        message.content = "storageBackupRestoreRequest";
                        continue;
                    }
                case 71: {
                        if (wireType !== 2)
                            break;
                        message.storageTarExtractRequest = $root.PB_Storage.TarExtractRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.storageTarExtractRequest);
                        message.content = "storageTarExtractRequest";
                        continue;
                    }
                case 16: {
                        if (wireType !== 2)
                            break;
                        message.appStartRequest = $root.PB_App.StartRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.appStartRequest);
                        message.content = "appStartRequest";
                        continue;
                    }
                case 17: {
                        if (wireType !== 2)
                            break;
                        message.appLockStatusRequest = $root.PB_App.LockStatusRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.appLockStatusRequest);
                        message.content = "appLockStatusRequest";
                        continue;
                    }
                case 18: {
                        if (wireType !== 2)
                            break;
                        message.appLockStatusResponse = $root.PB_App.LockStatusResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.appLockStatusResponse);
                        message.content = "appLockStatusResponse";
                        continue;
                    }
                case 47: {
                        if (wireType !== 2)
                            break;
                        message.appExitRequest = $root.PB_App.AppExitRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.appExitRequest);
                        message.content = "appExitRequest";
                        continue;
                    }
                case 48: {
                        if (wireType !== 2)
                            break;
                        message.appLoadFileRequest = $root.PB_App.AppLoadFileRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.appLoadFileRequest);
                        message.content = "appLoadFileRequest";
                        continue;
                    }
                case 49: {
                        if (wireType !== 2)
                            break;
                        message.appButtonPressRequest = $root.PB_App.AppButtonPressRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.appButtonPressRequest);
                        message.content = "appButtonPressRequest";
                        continue;
                    }
                case 50: {
                        if (wireType !== 2)
                            break;
                        message.appButtonReleaseRequest = $root.PB_App.AppButtonReleaseRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.appButtonReleaseRequest);
                        message.content = "appButtonReleaseRequest";
                        continue;
                    }
                case 75: {
                        if (wireType !== 2)
                            break;
                        message.appButtonPressReleaseRequest = $root.PB_App.AppButtonPressReleaseRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.appButtonPressReleaseRequest);
                        message.content = "appButtonPressReleaseRequest";
                        continue;
                    }
                case 63: {
                        if (wireType !== 2)
                            break;
                        message.appGetErrorRequest = $root.PB_App.GetErrorRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.appGetErrorRequest);
                        message.content = "appGetErrorRequest";
                        continue;
                    }
                case 64: {
                        if (wireType !== 2)
                            break;
                        message.appGetErrorResponse = $root.PB_App.GetErrorResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.appGetErrorResponse);
                        message.content = "appGetErrorResponse";
                        continue;
                    }
                case 65: {
                        if (wireType !== 2)
                            break;
                        message.appDataExchangeRequest = $root.PB_App.DataExchangeRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.appDataExchangeRequest);
                        message.content = "appDataExchangeRequest";
                        continue;
                    }
                case 20: {
                        if (wireType !== 2)
                            break;
                        message.guiStartScreenStreamRequest = $root.PB_Gui.StartScreenStreamRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.guiStartScreenStreamRequest);
                        message.content = "guiStartScreenStreamRequest";
                        continue;
                    }
                case 21: {
                        if (wireType !== 2)
                            break;
                        message.guiStopScreenStreamRequest = $root.PB_Gui.StopScreenStreamRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.guiStopScreenStreamRequest);
                        message.content = "guiStopScreenStreamRequest";
                        continue;
                    }
                case 22: {
                        if (wireType !== 2)
                            break;
                        message.guiScreenFrame = $root.PB_Gui.ScreenFrame.decode(reader, reader.uint32(), $undefined, _depth + 1, message.guiScreenFrame);
                        message.content = "guiScreenFrame";
                        continue;
                    }
                case 23: {
                        if (wireType !== 2)
                            break;
                        message.guiSendInputEventRequest = $root.PB_Gui.SendInputEventRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.guiSendInputEventRequest);
                        message.content = "guiSendInputEventRequest";
                        continue;
                    }
                case 26: {
                        if (wireType !== 2)
                            break;
                        message.guiStartVirtualDisplayRequest = $root.PB_Gui.StartVirtualDisplayRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.guiStartVirtualDisplayRequest);
                        message.content = "guiStartVirtualDisplayRequest";
                        continue;
                    }
                case 27: {
                        if (wireType !== 2)
                            break;
                        message.guiStopVirtualDisplayRequest = $root.PB_Gui.StopVirtualDisplayRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.guiStopVirtualDisplayRequest);
                        message.content = "guiStopVirtualDisplayRequest";
                        continue;
                    }
                case 51: {
                        if (wireType !== 2)
                            break;
                        message.gpioSetPinMode = $root.PB_Gpio.SetPinMode.decode(reader, reader.uint32(), $undefined, _depth + 1, message.gpioSetPinMode);
                        message.content = "gpioSetPinMode";
                        continue;
                    }
                case 52: {
                        if (wireType !== 2)
                            break;
                        message.gpioSetInputPull = $root.PB_Gpio.SetInputPull.decode(reader, reader.uint32(), $undefined, _depth + 1, message.gpioSetInputPull);
                        message.content = "gpioSetInputPull";
                        continue;
                    }
                case 53: {
                        if (wireType !== 2)
                            break;
                        message.gpioGetPinMode = $root.PB_Gpio.GetPinMode.decode(reader, reader.uint32(), $undefined, _depth + 1, message.gpioGetPinMode);
                        message.content = "gpioGetPinMode";
                        continue;
                    }
                case 54: {
                        if (wireType !== 2)
                            break;
                        message.gpioGetPinModeResponse = $root.PB_Gpio.GetPinModeResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.gpioGetPinModeResponse);
                        message.content = "gpioGetPinModeResponse";
                        continue;
                    }
                case 55: {
                        if (wireType !== 2)
                            break;
                        message.gpioReadPin = $root.PB_Gpio.ReadPin.decode(reader, reader.uint32(), $undefined, _depth + 1, message.gpioReadPin);
                        message.content = "gpioReadPin";
                        continue;
                    }
                case 56: {
                        if (wireType !== 2)
                            break;
                        message.gpioReadPinResponse = $root.PB_Gpio.ReadPinResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.gpioReadPinResponse);
                        message.content = "gpioReadPinResponse";
                        continue;
                    }
                case 57: {
                        if (wireType !== 2)
                            break;
                        message.gpioWritePin = $root.PB_Gpio.WritePin.decode(reader, reader.uint32(), $undefined, _depth + 1, message.gpioWritePin);
                        message.content = "gpioWritePin";
                        continue;
                    }
                case 72: {
                        if (wireType !== 2)
                            break;
                        message.gpioGetOtgMode = $root.PB_Gpio.GetOtgMode.decode(reader, reader.uint32(), $undefined, _depth + 1, message.gpioGetOtgMode);
                        message.content = "gpioGetOtgMode";
                        continue;
                    }
                case 73: {
                        if (wireType !== 2)
                            break;
                        message.gpioGetOtgModeResponse = $root.PB_Gpio.GetOtgModeResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.gpioGetOtgModeResponse);
                        message.content = "gpioGetOtgModeResponse";
                        continue;
                    }
                case 74: {
                        if (wireType !== 2)
                            break;
                        message.gpioSetOtgMode = $root.PB_Gpio.SetOtgMode.decode(reader, reader.uint32(), $undefined, _depth + 1, message.gpioSetOtgMode);
                        message.content = "gpioSetOtgMode";
                        continue;
                    }
                case 58: {
                        if (wireType !== 2)
                            break;
                        message.appStateResponse = $root.PB_App.AppStateResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.appStateResponse);
                        message.content = "appStateResponse";
                        continue;
                    }
                case 61: {
                        if (wireType !== 2)
                            break;
                        message.propertyGetRequest = $root.PB_Property.GetRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.propertyGetRequest);
                        message.content = "propertyGetRequest";
                        continue;
                    }
                case 62: {
                        if (wireType !== 2)
                            break;
                        message.propertyGetResponse = $root.PB_Property.GetResponse.decode(reader, reader.uint32(), $undefined, _depth + 1, message.propertyGetResponse);
                        message.content = "propertyGetResponse";
                        continue;
                    }
                case 66: {
                        if (wireType !== 2)
                            break;
                        message.desktopIsLockedRequest = $root.PB_Desktop.IsLockedRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.desktopIsLockedRequest);
                        message.content = "desktopIsLockedRequest";
                        continue;
                    }
                case 67: {
                        if (wireType !== 2)
                            break;
                        message.desktopUnlockRequest = $root.PB_Desktop.UnlockRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.desktopUnlockRequest);
                        message.content = "desktopUnlockRequest";
                        continue;
                    }
                case 68: {
                        if (wireType !== 2)
                            break;
                        message.desktopStatusSubscribeRequest = $root.PB_Desktop.StatusSubscribeRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.desktopStatusSubscribeRequest);
                        message.content = "desktopStatusSubscribeRequest";
                        continue;
                    }
                case 69: {
                        if (wireType !== 2)
                            break;
                        message.desktopStatusUnsubscribeRequest = $root.PB_Desktop.StatusUnsubscribeRequest.decode(reader, reader.uint32(), $undefined, _depth + 1, message.desktopStatusUnsubscribeRequest);
                        message.content = "desktopStatusUnsubscribeRequest";
                        continue;
                    }
                case 70: {
                        if (wireType !== 2)
                            break;
                        message.desktopStatus = $root.PB_Desktop.Status.decode(reader, reader.uint32(), $undefined, _depth + 1, message.desktopStatus);
                        message.content = "desktopStatus";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a Main message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.Main
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.Main & PB.Main.$Shape} Main
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Main.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for Main
         * @function getTypeUrl
         * @memberof PB.Main
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Main.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB.Main";
        };

        return Main;
    })();

    PB.Region = (function() {

        /**
         * Properties of a Region.
         * @typedef {Object} PB.Region.$Properties
         * @property {Uint8Array|null} [countryCode] Region countryCode
         * @property {Array.<PB.Region.Band.$Properties>|null} [bands] Region bands
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Region.
         * @memberof PB
         * @interface IRegion
         * @augments PB.Region.$Properties
         * @deprecated Use PB.Region.$Properties instead.
         */

        /**
         * Shape of a Region.
         * @typedef {PB.Region.$Properties} PB.Region.$Shape
         */

        /**
         * Constructs a new Region.
         * @memberof PB
         * @classdesc Represents a Region.
         * @constructor
         * @param {PB.Region.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const Region = function (properties) {
            this.bands = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Region countryCode.
         * @member {Uint8Array} countryCode
         * @memberof PB.Region
         * @instance
         */
        Region.prototype.countryCode = $util.newBuffer([]);

        /**
         * Region bands.
         * @member {Array.<PB.Region.Band.$Properties>} bands
         * @memberof PB.Region
         * @instance
         */
        Region.prototype.bands = $util.emptyArray;

        /**
         * Encodes the specified Region message. Does not implicitly {@link PB.Region.verify|verify} messages.
         * @function encode
         * @memberof PB.Region
         * @static
         * @param {PB.Region.$Properties} message Region message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Region.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.countryCode != null && $Object.hasOwnProperty.call(message, "countryCode") && message.countryCode.length)
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.countryCode);
            if (message.bands != null && message.bands.length)
                for (let i = 0; i < message.bands.length; ++i)
                    $root.PB.Region.Band.encode(message.bands[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Region message, length delimited. Does not implicitly {@link PB.Region.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB.Region
         * @static
         * @param {PB.Region.$Properties} message Region message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Region.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a Region message from the specified reader or buffer.
         * @function decode
         * @memberof PB.Region
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB.Region & PB.Region.$Shape} Region
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Region.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB.Region();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.bytes()).length)
                            message.countryCode = value;
                        else
                            delete message.countryCode;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if (!(message.bands && message.bands.length))
                            message.bands = [];
                        message.bands.push($root.PB.Region.Band.decode(reader, reader.uint32(), $undefined, _depth + 1));
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a Region message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB.Region
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB.Region & PB.Region.$Shape} Region
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Region.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for Region
         * @function getTypeUrl
         * @memberof PB.Region
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Region.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB.Region";
        };

        Region.Band = (function() {

            /**
             * Properties of a Band.
             * @typedef {Object} PB.Region.Band.$Properties
             * @property {number|null} [start] Band start
             * @property {number|null} [end] Band end
             * @property {number|null} [powerLimit] Band powerLimit
             * @property {number|null} [dutyCycle] Band dutyCycle
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Band.
             * @memberof PB.Region
             * @interface IBand
             * @augments PB.Region.Band.$Properties
             * @deprecated Use PB.Region.Band.$Properties instead.
             */

            /**
             * Shape of a Band.
             * @typedef {PB.Region.Band.$Properties} PB.Region.Band.$Shape
             */

            /**
             * Constructs a new Band.
             * @memberof PB.Region
             * @classdesc Represents a Band.
             * @constructor
             * @param {PB.Region.Band.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            const Band = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Band start.
             * @member {number} start
             * @memberof PB.Region.Band
             * @instance
             */
            Band.prototype.start = 0;

            /**
             * Band end.
             * @member {number} end
             * @memberof PB.Region.Band
             * @instance
             */
            Band.prototype.end = 0;

            /**
             * Band powerLimit.
             * @member {number} powerLimit
             * @memberof PB.Region.Band
             * @instance
             */
            Band.prototype.powerLimit = 0;

            /**
             * Band dutyCycle.
             * @member {number} dutyCycle
             * @memberof PB.Region.Band
             * @instance
             */
            Band.prototype.dutyCycle = 0;

            /**
             * Encodes the specified Band message. Does not implicitly {@link PB.Region.Band.verify|verify} messages.
             * @function encode
             * @memberof PB.Region.Band
             * @static
             * @param {PB.Region.Band.$Properties} message Band message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Band.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.start != null && $Object.hasOwnProperty.call(message, "start") && message.start !== 0)
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.start);
                if (message.end != null && $Object.hasOwnProperty.call(message, "end") && message.end !== 0)
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.end);
                if (message.powerLimit != null && $Object.hasOwnProperty.call(message, "powerLimit") && message.powerLimit !== 0)
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.powerLimit);
                if (message.dutyCycle != null && $Object.hasOwnProperty.call(message, "dutyCycle") && message.dutyCycle !== 0)
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.dutyCycle);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Band message, length delimited. Does not implicitly {@link PB.Region.Band.verify|verify} messages.
             * @function encodeDelimited
             * @memberof PB.Region.Band
             * @static
             * @param {PB.Region.Band.$Properties} message Band message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Band.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a Band message from the specified reader or buffer.
             * @function decode
             * @memberof PB.Region.Band
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {PB.Region.Band & PB.Region.Band.$Shape} Band
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Band.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                let end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.PB.Region.Band();
                while (reader.pos < end) {
                    let start = reader.pos;
                    let tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    let wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.start = value;
                            else
                                delete message.start;
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.end = value;
                            else
                                delete message.end;
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.int32())
                                message.powerLimit = value;
                            else
                                delete message.powerLimit;
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            if (value = reader.uint32())
                                message.dutyCycle = value;
                            else
                                delete message.dutyCycle;
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a Band message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof PB.Region.Band
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {PB.Region.Band & PB.Region.Band.$Shape} Band
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Band.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Gets the type url for Band
             * @function getTypeUrl
             * @memberof PB.Region.Band
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Band.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/PB.Region.Band";
            };

            return Band;
        })();

        return Region;
    })();

    return PB;
})();

export const PB_Storage = $root.PB_Storage = (() => {

    /**
     * Namespace PB_Storage.
     * @exports PB_Storage
     * @namespace
     */
    const PB_Storage = {};

    PB_Storage.File = (function() {

        /**
         * Properties of a File.
         * @typedef {Object} PB_Storage.File.$Properties
         * @property {PB_Storage.File.FileType|null} [type] File type
         * @property {string|null} [name] File name
         * @property {number|null} [size] File size
         * @property {Uint8Array|null} [data] File data
         * @property {string|null} [md5sum] File md5sum
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a File.
         * @memberof PB_Storage
         * @interface IFile
         * @augments PB_Storage.File.$Properties
         * @deprecated Use PB_Storage.File.$Properties instead.
         */

        /**
         * Shape of a File.
         * @typedef {PB_Storage.File.$Properties} PB_Storage.File.$Shape
         */

        /**
         * Constructs a new File.
         * @memberof PB_Storage
         * @classdesc Represents a File.
         * @constructor
         * @param {PB_Storage.File.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const File = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * File type.
         * @member {PB_Storage.File.FileType} type
         * @memberof PB_Storage.File
         * @instance
         */
        File.prototype.type = 0;

        /**
         * File name.
         * @member {string} name
         * @memberof PB_Storage.File
         * @instance
         */
        File.prototype.name = "";

        /**
         * File size.
         * @member {number} size
         * @memberof PB_Storage.File
         * @instance
         */
        File.prototype.size = 0;

        /**
         * File data.
         * @member {Uint8Array} data
         * @memberof PB_Storage.File
         * @instance
         */
        File.prototype.data = $util.newBuffer([]);

        /**
         * File md5sum.
         * @member {string} md5sum
         * @memberof PB_Storage.File
         * @instance
         */
        File.prototype.md5sum = "";

        /**
         * Encodes the specified File message. Does not implicitly {@link PB_Storage.File.verify|verify} messages.
         * @function encode
         * @memberof PB_Storage.File
         * @static
         * @param {PB_Storage.File.$Properties} message File message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        File.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.type != null && $Object.hasOwnProperty.call(message, "type") && message.type !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.name != null && $Object.hasOwnProperty.call(message, "name") && message.name !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.size != null && $Object.hasOwnProperty.call(message, "size") && message.size !== 0)
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.size);
            if (message.data != null && $Object.hasOwnProperty.call(message, "data") && message.data.length)
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.data);
            if (message.md5sum != null && $Object.hasOwnProperty.call(message, "md5sum") && message.md5sum !== "")
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.md5sum);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified File message, length delimited. Does not implicitly {@link PB_Storage.File.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Storage.File
         * @static
         * @param {PB_Storage.File.$Properties} message File message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        File.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a File message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Storage.File
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Storage.File & PB_Storage.File.$Shape} File
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        File.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Storage.File();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.type = value;
                        else
                            delete message.type;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.name = value;
                        else
                            delete message.name;
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.size = value;
                        else
                            delete message.size;
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.bytes()).length)
                            message.data = value;
                        else
                            delete message.data;
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.md5sum = value;
                        else
                            delete message.md5sum;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a File message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Storage.File
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Storage.File & PB_Storage.File.$Shape} File
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        File.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for File
         * @function getTypeUrl
         * @memberof PB_Storage.File
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        File.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.File";
        };

        /**
         * FileType enum.
         * @name PB_Storage.File.FileType
         * @enum {number}
         * @property {number} FILE=0 FILE value
         * @property {number} DIR=1 DIR value
         */
        File.FileType = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "FILE"] = 0;
            values[valuesById[1] = "DIR"] = 1;
            return values;
        })();

        return File;
    })();

    PB_Storage.InfoRequest = (function() {

        /**
         * Properties of an InfoRequest.
         * @typedef {Object} PB_Storage.InfoRequest.$Properties
         * @property {string|null} [path] InfoRequest path
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an InfoRequest.
         * @memberof PB_Storage
         * @interface IInfoRequest
         * @augments PB_Storage.InfoRequest.$Properties
         * @deprecated Use PB_Storage.InfoRequest.$Properties instead.
         */

        /**
         * Shape of an InfoRequest.
         * @typedef {PB_Storage.InfoRequest.$Properties} PB_Storage.InfoRequest.$Shape
         */

        /**
         * Constructs a new InfoRequest.
         * @memberof PB_Storage
         * @classdesc Represents an InfoRequest.
         * @constructor
         * @param {PB_Storage.InfoRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const InfoRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * InfoRequest path.
         * @member {string} path
         * @memberof PB_Storage.InfoRequest
         * @instance
         */
        InfoRequest.prototype.path = "";

        /**
         * Encodes the specified InfoRequest message. Does not implicitly {@link PB_Storage.InfoRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_Storage.InfoRequest
         * @static
         * @param {PB_Storage.InfoRequest.$Properties} message InfoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InfoRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.path != null && $Object.hasOwnProperty.call(message, "path") && message.path !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified InfoRequest message, length delimited. Does not implicitly {@link PB_Storage.InfoRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Storage.InfoRequest
         * @static
         * @param {PB_Storage.InfoRequest.$Properties} message InfoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InfoRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes an InfoRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Storage.InfoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Storage.InfoRequest & PB_Storage.InfoRequest.$Shape} InfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InfoRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Storage.InfoRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.path = value;
                        else
                            delete message.path;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an InfoRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Storage.InfoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Storage.InfoRequest & PB_Storage.InfoRequest.$Shape} InfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InfoRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for InfoRequest
         * @function getTypeUrl
         * @memberof PB_Storage.InfoRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        InfoRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.InfoRequest";
        };

        return InfoRequest;
    })();

    PB_Storage.InfoResponse = (function() {

        /**
         * Properties of an InfoResponse.
         * @typedef {Object} PB_Storage.InfoResponse.$Properties
         * @property {number|Long|null} [totalSpace] InfoResponse totalSpace
         * @property {number|Long|null} [freeSpace] InfoResponse freeSpace
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an InfoResponse.
         * @memberof PB_Storage
         * @interface IInfoResponse
         * @augments PB_Storage.InfoResponse.$Properties
         * @deprecated Use PB_Storage.InfoResponse.$Properties instead.
         */

        /**
         * Shape of an InfoResponse.
         * @typedef {PB_Storage.InfoResponse.$Properties} PB_Storage.InfoResponse.$Shape
         */

        /**
         * Constructs a new InfoResponse.
         * @memberof PB_Storage
         * @classdesc Represents an InfoResponse.
         * @constructor
         * @param {PB_Storage.InfoResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const InfoResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * InfoResponse totalSpace.
         * @member {number|Long} totalSpace
         * @memberof PB_Storage.InfoResponse
         * @instance
         */
        InfoResponse.prototype.totalSpace = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * InfoResponse freeSpace.
         * @member {number|Long} freeSpace
         * @memberof PB_Storage.InfoResponse
         * @instance
         */
        InfoResponse.prototype.freeSpace = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Encodes the specified InfoResponse message. Does not implicitly {@link PB_Storage.InfoResponse.verify|verify} messages.
         * @function encode
         * @memberof PB_Storage.InfoResponse
         * @static
         * @param {PB_Storage.InfoResponse.$Properties} message InfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InfoResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.totalSpace != null && $Object.hasOwnProperty.call(message, "totalSpace") && (typeof message.totalSpace === "object" ? message.totalSpace.low || message.totalSpace.high : message.totalSpace !== 0))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.totalSpace);
            if (message.freeSpace != null && $Object.hasOwnProperty.call(message, "freeSpace") && (typeof message.freeSpace === "object" ? message.freeSpace.low || message.freeSpace.high : message.freeSpace !== 0))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.freeSpace);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified InfoResponse message, length delimited. Does not implicitly {@link PB_Storage.InfoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Storage.InfoResponse
         * @static
         * @param {PB_Storage.InfoResponse.$Properties} message InfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InfoResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes an InfoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Storage.InfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Storage.InfoResponse & PB_Storage.InfoResponse.$Shape} InfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InfoResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Storage.InfoResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.uint64()) === "object" ? value.low || value.high : value !== 0)
                            message.totalSpace = value;
                        else
                            delete message.totalSpace;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.uint64()) === "object" ? value.low || value.high : value !== 0)
                            message.freeSpace = value;
                        else
                            delete message.freeSpace;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an InfoResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Storage.InfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Storage.InfoResponse & PB_Storage.InfoResponse.$Shape} InfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InfoResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for InfoResponse
         * @function getTypeUrl
         * @memberof PB_Storage.InfoResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        InfoResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.InfoResponse";
        };

        return InfoResponse;
    })();

    PB_Storage.TimestampRequest = (function() {

        /**
         * Properties of a TimestampRequest.
         * @typedef {Object} PB_Storage.TimestampRequest.$Properties
         * @property {string|null} [path] TimestampRequest path
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a TimestampRequest.
         * @memberof PB_Storage
         * @interface ITimestampRequest
         * @augments PB_Storage.TimestampRequest.$Properties
         * @deprecated Use PB_Storage.TimestampRequest.$Properties instead.
         */

        /**
         * Shape of a TimestampRequest.
         * @typedef {PB_Storage.TimestampRequest.$Properties} PB_Storage.TimestampRequest.$Shape
         */

        /**
         * Constructs a new TimestampRequest.
         * @memberof PB_Storage
         * @classdesc Represents a TimestampRequest.
         * @constructor
         * @param {PB_Storage.TimestampRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const TimestampRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * TimestampRequest path.
         * @member {string} path
         * @memberof PB_Storage.TimestampRequest
         * @instance
         */
        TimestampRequest.prototype.path = "";

        /**
         * Encodes the specified TimestampRequest message. Does not implicitly {@link PB_Storage.TimestampRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_Storage.TimestampRequest
         * @static
         * @param {PB_Storage.TimestampRequest.$Properties} message TimestampRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimestampRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.path != null && $Object.hasOwnProperty.call(message, "path") && message.path !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified TimestampRequest message, length delimited. Does not implicitly {@link PB_Storage.TimestampRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Storage.TimestampRequest
         * @static
         * @param {PB_Storage.TimestampRequest.$Properties} message TimestampRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimestampRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a TimestampRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Storage.TimestampRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Storage.TimestampRequest & PB_Storage.TimestampRequest.$Shape} TimestampRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimestampRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Storage.TimestampRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.path = value;
                        else
                            delete message.path;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a TimestampRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Storage.TimestampRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Storage.TimestampRequest & PB_Storage.TimestampRequest.$Shape} TimestampRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimestampRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for TimestampRequest
         * @function getTypeUrl
         * @memberof PB_Storage.TimestampRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        TimestampRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.TimestampRequest";
        };

        return TimestampRequest;
    })();

    PB_Storage.TimestampResponse = (function() {

        /**
         * Properties of a TimestampResponse.
         * @typedef {Object} PB_Storage.TimestampResponse.$Properties
         * @property {number|null} [timestamp] TimestampResponse timestamp
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a TimestampResponse.
         * @memberof PB_Storage
         * @interface ITimestampResponse
         * @augments PB_Storage.TimestampResponse.$Properties
         * @deprecated Use PB_Storage.TimestampResponse.$Properties instead.
         */

        /**
         * Shape of a TimestampResponse.
         * @typedef {PB_Storage.TimestampResponse.$Properties} PB_Storage.TimestampResponse.$Shape
         */

        /**
         * Constructs a new TimestampResponse.
         * @memberof PB_Storage
         * @classdesc Represents a TimestampResponse.
         * @constructor
         * @param {PB_Storage.TimestampResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const TimestampResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * TimestampResponse timestamp.
         * @member {number} timestamp
         * @memberof PB_Storage.TimestampResponse
         * @instance
         */
        TimestampResponse.prototype.timestamp = 0;

        /**
         * Encodes the specified TimestampResponse message. Does not implicitly {@link PB_Storage.TimestampResponse.verify|verify} messages.
         * @function encode
         * @memberof PB_Storage.TimestampResponse
         * @static
         * @param {PB_Storage.TimestampResponse.$Properties} message TimestampResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimestampResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.timestamp != null && $Object.hasOwnProperty.call(message, "timestamp") && message.timestamp !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.timestamp);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified TimestampResponse message, length delimited. Does not implicitly {@link PB_Storage.TimestampResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Storage.TimestampResponse
         * @static
         * @param {PB_Storage.TimestampResponse.$Properties} message TimestampResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimestampResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a TimestampResponse message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Storage.TimestampResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Storage.TimestampResponse & PB_Storage.TimestampResponse.$Shape} TimestampResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimestampResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Storage.TimestampResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.timestamp = value;
                        else
                            delete message.timestamp;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a TimestampResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Storage.TimestampResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Storage.TimestampResponse & PB_Storage.TimestampResponse.$Shape} TimestampResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimestampResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for TimestampResponse
         * @function getTypeUrl
         * @memberof PB_Storage.TimestampResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        TimestampResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.TimestampResponse";
        };

        return TimestampResponse;
    })();

    PB_Storage.StatRequest = (function() {

        /**
         * Properties of a StatRequest.
         * @typedef {Object} PB_Storage.StatRequest.$Properties
         * @property {string|null} [path] StatRequest path
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a StatRequest.
         * @memberof PB_Storage
         * @interface IStatRequest
         * @augments PB_Storage.StatRequest.$Properties
         * @deprecated Use PB_Storage.StatRequest.$Properties instead.
         */

        /**
         * Shape of a StatRequest.
         * @typedef {PB_Storage.StatRequest.$Properties} PB_Storage.StatRequest.$Shape
         */

        /**
         * Constructs a new StatRequest.
         * @memberof PB_Storage
         * @classdesc Represents a StatRequest.
         * @constructor
         * @param {PB_Storage.StatRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const StatRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * StatRequest path.
         * @member {string} path
         * @memberof PB_Storage.StatRequest
         * @instance
         */
        StatRequest.prototype.path = "";

        /**
         * Encodes the specified StatRequest message. Does not implicitly {@link PB_Storage.StatRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_Storage.StatRequest
         * @static
         * @param {PB_Storage.StatRequest.$Properties} message StatRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StatRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.path != null && $Object.hasOwnProperty.call(message, "path") && message.path !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified StatRequest message, length delimited. Does not implicitly {@link PB_Storage.StatRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Storage.StatRequest
         * @static
         * @param {PB_Storage.StatRequest.$Properties} message StatRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StatRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a StatRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Storage.StatRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Storage.StatRequest & PB_Storage.StatRequest.$Shape} StatRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StatRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Storage.StatRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.path = value;
                        else
                            delete message.path;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a StatRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Storage.StatRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Storage.StatRequest & PB_Storage.StatRequest.$Shape} StatRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StatRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for StatRequest
         * @function getTypeUrl
         * @memberof PB_Storage.StatRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        StatRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.StatRequest";
        };

        return StatRequest;
    })();

    PB_Storage.StatResponse = (function() {

        /**
         * Properties of a StatResponse.
         * @typedef {Object} PB_Storage.StatResponse.$Properties
         * @property {PB_Storage.File.$Properties|null} [file] StatResponse file
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a StatResponse.
         * @memberof PB_Storage
         * @interface IStatResponse
         * @augments PB_Storage.StatResponse.$Properties
         * @deprecated Use PB_Storage.StatResponse.$Properties instead.
         */

        /**
         * Shape of a StatResponse.
         * @typedef {PB_Storage.StatResponse.$Properties} PB_Storage.StatResponse.$Shape
         */

        /**
         * Constructs a new StatResponse.
         * @memberof PB_Storage
         * @classdesc Represents a StatResponse.
         * @constructor
         * @param {PB_Storage.StatResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const StatResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * StatResponse file.
         * @member {PB_Storage.File.$Properties|null|undefined} file
         * @memberof PB_Storage.StatResponse
         * @instance
         */
        StatResponse.prototype.file = null;

        /**
         * Encodes the specified StatResponse message. Does not implicitly {@link PB_Storage.StatResponse.verify|verify} messages.
         * @function encode
         * @memberof PB_Storage.StatResponse
         * @static
         * @param {PB_Storage.StatResponse.$Properties} message StatResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StatResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.file != null && $Object.hasOwnProperty.call(message, "file"))
                $root.PB_Storage.File.encode(message.file, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified StatResponse message, length delimited. Does not implicitly {@link PB_Storage.StatResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Storage.StatResponse
         * @static
         * @param {PB_Storage.StatResponse.$Properties} message StatResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StatResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a StatResponse message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Storage.StatResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Storage.StatResponse & PB_Storage.StatResponse.$Shape} StatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StatResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Storage.StatResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.file = $root.PB_Storage.File.decode(reader, reader.uint32(), $undefined, _depth + 1, message.file);
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a StatResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Storage.StatResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Storage.StatResponse & PB_Storage.StatResponse.$Shape} StatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StatResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for StatResponse
         * @function getTypeUrl
         * @memberof PB_Storage.StatResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        StatResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.StatResponse";
        };

        return StatResponse;
    })();

    PB_Storage.ListRequest = (function() {

        /**
         * Properties of a ListRequest.
         * @typedef {Object} PB_Storage.ListRequest.$Properties
         * @property {string|null} [path] ListRequest path
         * @property {boolean|null} [includeMd5] ListRequest includeMd5
         * @property {number|null} [filterMaxSize] ListRequest filterMaxSize
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ListRequest.
         * @memberof PB_Storage
         * @interface IListRequest
         * @augments PB_Storage.ListRequest.$Properties
         * @deprecated Use PB_Storage.ListRequest.$Properties instead.
         */

        /**
         * Shape of a ListRequest.
         * @typedef {PB_Storage.ListRequest.$Properties} PB_Storage.ListRequest.$Shape
         */

        /**
         * Constructs a new ListRequest.
         * @memberof PB_Storage
         * @classdesc Represents a ListRequest.
         * @constructor
         * @param {PB_Storage.ListRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const ListRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ListRequest path.
         * @member {string} path
         * @memberof PB_Storage.ListRequest
         * @instance
         */
        ListRequest.prototype.path = "";

        /**
         * ListRequest includeMd5.
         * @member {boolean} includeMd5
         * @memberof PB_Storage.ListRequest
         * @instance
         */
        ListRequest.prototype.includeMd5 = false;

        /**
         * ListRequest filterMaxSize.
         * @member {number} filterMaxSize
         * @memberof PB_Storage.ListRequest
         * @instance
         */
        ListRequest.prototype.filterMaxSize = 0;

        /**
         * Encodes the specified ListRequest message. Does not implicitly {@link PB_Storage.ListRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_Storage.ListRequest
         * @static
         * @param {PB_Storage.ListRequest.$Properties} message ListRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.path != null && $Object.hasOwnProperty.call(message, "path") && message.path !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
            if (message.includeMd5 != null && $Object.hasOwnProperty.call(message, "includeMd5") && message.includeMd5 !== false)
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.includeMd5);
            if (message.filterMaxSize != null && $Object.hasOwnProperty.call(message, "filterMaxSize") && message.filterMaxSize !== 0)
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.filterMaxSize);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ListRequest message, length delimited. Does not implicitly {@link PB_Storage.ListRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Storage.ListRequest
         * @static
         * @param {PB_Storage.ListRequest.$Properties} message ListRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a ListRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Storage.ListRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Storage.ListRequest & PB_Storage.ListRequest.$Shape} ListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Storage.ListRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.path = value;
                        else
                            delete message.path;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.includeMd5 = value;
                        else
                            delete message.includeMd5;
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.filterMaxSize = value;
                        else
                            delete message.filterMaxSize;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a ListRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Storage.ListRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Storage.ListRequest & PB_Storage.ListRequest.$Shape} ListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for ListRequest
         * @function getTypeUrl
         * @memberof PB_Storage.ListRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ListRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.ListRequest";
        };

        return ListRequest;
    })();

    PB_Storage.ListResponse = (function() {

        /**
         * Properties of a ListResponse.
         * @typedef {Object} PB_Storage.ListResponse.$Properties
         * @property {Array.<PB_Storage.File.$Properties>|null} [file] ListResponse file
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ListResponse.
         * @memberof PB_Storage
         * @interface IListResponse
         * @augments PB_Storage.ListResponse.$Properties
         * @deprecated Use PB_Storage.ListResponse.$Properties instead.
         */

        /**
         * Shape of a ListResponse.
         * @typedef {PB_Storage.ListResponse.$Properties} PB_Storage.ListResponse.$Shape
         */

        /**
         * Constructs a new ListResponse.
         * @memberof PB_Storage
         * @classdesc Represents a ListResponse.
         * @constructor
         * @param {PB_Storage.ListResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const ListResponse = function (properties) {
            this.file = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ListResponse file.
         * @member {Array.<PB_Storage.File.$Properties>} file
         * @memberof PB_Storage.ListResponse
         * @instance
         */
        ListResponse.prototype.file = $util.emptyArray;

        /**
         * Encodes the specified ListResponse message. Does not implicitly {@link PB_Storage.ListResponse.verify|verify} messages.
         * @function encode
         * @memberof PB_Storage.ListResponse
         * @static
         * @param {PB_Storage.ListResponse.$Properties} message ListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.file != null && message.file.length)
                for (let i = 0; i < message.file.length; ++i)
                    $root.PB_Storage.File.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ListResponse message, length delimited. Does not implicitly {@link PB_Storage.ListResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Storage.ListResponse
         * @static
         * @param {PB_Storage.ListResponse.$Properties} message ListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a ListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Storage.ListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Storage.ListResponse & PB_Storage.ListResponse.$Shape} ListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Storage.ListResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if (!(message.file && message.file.length))
                            message.file = [];
                        message.file.push($root.PB_Storage.File.decode(reader, reader.uint32(), $undefined, _depth + 1));
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a ListResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Storage.ListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Storage.ListResponse & PB_Storage.ListResponse.$Shape} ListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for ListResponse
         * @function getTypeUrl
         * @memberof PB_Storage.ListResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ListResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.ListResponse";
        };

        return ListResponse;
    })();

    PB_Storage.ReadRequest = (function() {

        /**
         * Properties of a ReadRequest.
         * @typedef {Object} PB_Storage.ReadRequest.$Properties
         * @property {string|null} [path] ReadRequest path
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ReadRequest.
         * @memberof PB_Storage
         * @interface IReadRequest
         * @augments PB_Storage.ReadRequest.$Properties
         * @deprecated Use PB_Storage.ReadRequest.$Properties instead.
         */

        /**
         * Shape of a ReadRequest.
         * @typedef {PB_Storage.ReadRequest.$Properties} PB_Storage.ReadRequest.$Shape
         */

        /**
         * Constructs a new ReadRequest.
         * @memberof PB_Storage
         * @classdesc Represents a ReadRequest.
         * @constructor
         * @param {PB_Storage.ReadRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const ReadRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ReadRequest path.
         * @member {string} path
         * @memberof PB_Storage.ReadRequest
         * @instance
         */
        ReadRequest.prototype.path = "";

        /**
         * Encodes the specified ReadRequest message. Does not implicitly {@link PB_Storage.ReadRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_Storage.ReadRequest
         * @static
         * @param {PB_Storage.ReadRequest.$Properties} message ReadRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.path != null && $Object.hasOwnProperty.call(message, "path") && message.path !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ReadRequest message, length delimited. Does not implicitly {@link PB_Storage.ReadRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Storage.ReadRequest
         * @static
         * @param {PB_Storage.ReadRequest.$Properties} message ReadRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a ReadRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Storage.ReadRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Storage.ReadRequest & PB_Storage.ReadRequest.$Shape} ReadRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Storage.ReadRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.path = value;
                        else
                            delete message.path;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a ReadRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Storage.ReadRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Storage.ReadRequest & PB_Storage.ReadRequest.$Shape} ReadRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for ReadRequest
         * @function getTypeUrl
         * @memberof PB_Storage.ReadRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ReadRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.ReadRequest";
        };

        return ReadRequest;
    })();

    PB_Storage.ReadResponse = (function() {

        /**
         * Properties of a ReadResponse.
         * @typedef {Object} PB_Storage.ReadResponse.$Properties
         * @property {PB_Storage.File.$Properties|null} [file] ReadResponse file
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ReadResponse.
         * @memberof PB_Storage
         * @interface IReadResponse
         * @augments PB_Storage.ReadResponse.$Properties
         * @deprecated Use PB_Storage.ReadResponse.$Properties instead.
         */

        /**
         * Shape of a ReadResponse.
         * @typedef {PB_Storage.ReadResponse.$Properties} PB_Storage.ReadResponse.$Shape
         */

        /**
         * Constructs a new ReadResponse.
         * @memberof PB_Storage
         * @classdesc Represents a ReadResponse.
         * @constructor
         * @param {PB_Storage.ReadResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const ReadResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ReadResponse file.
         * @member {PB_Storage.File.$Properties|null|undefined} file
         * @memberof PB_Storage.ReadResponse
         * @instance
         */
        ReadResponse.prototype.file = null;

        /**
         * Encodes the specified ReadResponse message. Does not implicitly {@link PB_Storage.ReadResponse.verify|verify} messages.
         * @function encode
         * @memberof PB_Storage.ReadResponse
         * @static
         * @param {PB_Storage.ReadResponse.$Properties} message ReadResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.file != null && $Object.hasOwnProperty.call(message, "file"))
                $root.PB_Storage.File.encode(message.file, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ReadResponse message, length delimited. Does not implicitly {@link PB_Storage.ReadResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Storage.ReadResponse
         * @static
         * @param {PB_Storage.ReadResponse.$Properties} message ReadResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a ReadResponse message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Storage.ReadResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Storage.ReadResponse & PB_Storage.ReadResponse.$Shape} ReadResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Storage.ReadResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.file = $root.PB_Storage.File.decode(reader, reader.uint32(), $undefined, _depth + 1, message.file);
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a ReadResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Storage.ReadResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Storage.ReadResponse & PB_Storage.ReadResponse.$Shape} ReadResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for ReadResponse
         * @function getTypeUrl
         * @memberof PB_Storage.ReadResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ReadResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.ReadResponse";
        };

        return ReadResponse;
    })();

    PB_Storage.WriteRequest = (function() {

        /**
         * Properties of a WriteRequest.
         * @typedef {Object} PB_Storage.WriteRequest.$Properties
         * @property {string|null} [path] WriteRequest path
         * @property {PB_Storage.File.$Properties|null} [file] WriteRequest file
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a WriteRequest.
         * @memberof PB_Storage
         * @interface IWriteRequest
         * @augments PB_Storage.WriteRequest.$Properties
         * @deprecated Use PB_Storage.WriteRequest.$Properties instead.
         */

        /**
         * Shape of a WriteRequest.
         * @typedef {PB_Storage.WriteRequest.$Properties} PB_Storage.WriteRequest.$Shape
         */

        /**
         * Constructs a new WriteRequest.
         * @memberof PB_Storage
         * @classdesc Represents a WriteRequest.
         * @constructor
         * @param {PB_Storage.WriteRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const WriteRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * WriteRequest path.
         * @member {string} path
         * @memberof PB_Storage.WriteRequest
         * @instance
         */
        WriteRequest.prototype.path = "";

        /**
         * WriteRequest file.
         * @member {PB_Storage.File.$Properties|null|undefined} file
         * @memberof PB_Storage.WriteRequest
         * @instance
         */
        WriteRequest.prototype.file = null;

        /**
         * Encodes the specified WriteRequest message. Does not implicitly {@link PB_Storage.WriteRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_Storage.WriteRequest
         * @static
         * @param {PB_Storage.WriteRequest.$Properties} message WriteRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WriteRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.path != null && $Object.hasOwnProperty.call(message, "path") && message.path !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
            if (message.file != null && $Object.hasOwnProperty.call(message, "file"))
                $root.PB_Storage.File.encode(message.file, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified WriteRequest message, length delimited. Does not implicitly {@link PB_Storage.WriteRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Storage.WriteRequest
         * @static
         * @param {PB_Storage.WriteRequest.$Properties} message WriteRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WriteRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a WriteRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Storage.WriteRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Storage.WriteRequest & PB_Storage.WriteRequest.$Shape} WriteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WriteRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Storage.WriteRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.path = value;
                        else
                            delete message.path;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.file = $root.PB_Storage.File.decode(reader, reader.uint32(), $undefined, _depth + 1, message.file);
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a WriteRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Storage.WriteRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Storage.WriteRequest & PB_Storage.WriteRequest.$Shape} WriteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WriteRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for WriteRequest
         * @function getTypeUrl
         * @memberof PB_Storage.WriteRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        WriteRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.WriteRequest";
        };

        return WriteRequest;
    })();

    PB_Storage.DeleteRequest = (function() {

        /**
         * Properties of a DeleteRequest.
         * @typedef {Object} PB_Storage.DeleteRequest.$Properties
         * @property {string|null} [path] DeleteRequest path
         * @property {boolean|null} [recursive] DeleteRequest recursive
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a DeleteRequest.
         * @memberof PB_Storage
         * @interface IDeleteRequest
         * @augments PB_Storage.DeleteRequest.$Properties
         * @deprecated Use PB_Storage.DeleteRequest.$Properties instead.
         */

        /**
         * Shape of a DeleteRequest.
         * @typedef {PB_Storage.DeleteRequest.$Properties} PB_Storage.DeleteRequest.$Shape
         */

        /**
         * Constructs a new DeleteRequest.
         * @memberof PB_Storage
         * @classdesc Represents a DeleteRequest.
         * @constructor
         * @param {PB_Storage.DeleteRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const DeleteRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * DeleteRequest path.
         * @member {string} path
         * @memberof PB_Storage.DeleteRequest
         * @instance
         */
        DeleteRequest.prototype.path = "";

        /**
         * DeleteRequest recursive.
         * @member {boolean} recursive
         * @memberof PB_Storage.DeleteRequest
         * @instance
         */
        DeleteRequest.prototype.recursive = false;

        /**
         * Encodes the specified DeleteRequest message. Does not implicitly {@link PB_Storage.DeleteRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_Storage.DeleteRequest
         * @static
         * @param {PB_Storage.DeleteRequest.$Properties} message DeleteRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.path != null && $Object.hasOwnProperty.call(message, "path") && message.path !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
            if (message.recursive != null && $Object.hasOwnProperty.call(message, "recursive") && message.recursive !== false)
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.recursive);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified DeleteRequest message, length delimited. Does not implicitly {@link PB_Storage.DeleteRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Storage.DeleteRequest
         * @static
         * @param {PB_Storage.DeleteRequest.$Properties} message DeleteRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a DeleteRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Storage.DeleteRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Storage.DeleteRequest & PB_Storage.DeleteRequest.$Shape} DeleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Storage.DeleteRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.path = value;
                        else
                            delete message.path;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.recursive = value;
                        else
                            delete message.recursive;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a DeleteRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Storage.DeleteRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Storage.DeleteRequest & PB_Storage.DeleteRequest.$Shape} DeleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for DeleteRequest
         * @function getTypeUrl
         * @memberof PB_Storage.DeleteRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        DeleteRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.DeleteRequest";
        };

        return DeleteRequest;
    })();

    PB_Storage.MkdirRequest = (function() {

        /**
         * Properties of a MkdirRequest.
         * @typedef {Object} PB_Storage.MkdirRequest.$Properties
         * @property {string|null} [path] MkdirRequest path
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a MkdirRequest.
         * @memberof PB_Storage
         * @interface IMkdirRequest
         * @augments PB_Storage.MkdirRequest.$Properties
         * @deprecated Use PB_Storage.MkdirRequest.$Properties instead.
         */

        /**
         * Shape of a MkdirRequest.
         * @typedef {PB_Storage.MkdirRequest.$Properties} PB_Storage.MkdirRequest.$Shape
         */

        /**
         * Constructs a new MkdirRequest.
         * @memberof PB_Storage
         * @classdesc Represents a MkdirRequest.
         * @constructor
         * @param {PB_Storage.MkdirRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const MkdirRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * MkdirRequest path.
         * @member {string} path
         * @memberof PB_Storage.MkdirRequest
         * @instance
         */
        MkdirRequest.prototype.path = "";

        /**
         * Encodes the specified MkdirRequest message. Does not implicitly {@link PB_Storage.MkdirRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_Storage.MkdirRequest
         * @static
         * @param {PB_Storage.MkdirRequest.$Properties} message MkdirRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MkdirRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.path != null && $Object.hasOwnProperty.call(message, "path") && message.path !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified MkdirRequest message, length delimited. Does not implicitly {@link PB_Storage.MkdirRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Storage.MkdirRequest
         * @static
         * @param {PB_Storage.MkdirRequest.$Properties} message MkdirRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MkdirRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a MkdirRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Storage.MkdirRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Storage.MkdirRequest & PB_Storage.MkdirRequest.$Shape} MkdirRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MkdirRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Storage.MkdirRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.path = value;
                        else
                            delete message.path;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a MkdirRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Storage.MkdirRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Storage.MkdirRequest & PB_Storage.MkdirRequest.$Shape} MkdirRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MkdirRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for MkdirRequest
         * @function getTypeUrl
         * @memberof PB_Storage.MkdirRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        MkdirRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.MkdirRequest";
        };

        return MkdirRequest;
    })();

    PB_Storage.Md5sumRequest = (function() {

        /**
         * Properties of a Md5sumRequest.
         * @typedef {Object} PB_Storage.Md5sumRequest.$Properties
         * @property {string|null} [path] Md5sumRequest path
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Md5sumRequest.
         * @memberof PB_Storage
         * @interface IMd5sumRequest
         * @augments PB_Storage.Md5sumRequest.$Properties
         * @deprecated Use PB_Storage.Md5sumRequest.$Properties instead.
         */

        /**
         * Shape of a Md5sumRequest.
         * @typedef {PB_Storage.Md5sumRequest.$Properties} PB_Storage.Md5sumRequest.$Shape
         */

        /**
         * Constructs a new Md5sumRequest.
         * @memberof PB_Storage
         * @classdesc Represents a Md5sumRequest.
         * @constructor
         * @param {PB_Storage.Md5sumRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const Md5sumRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Md5sumRequest path.
         * @member {string} path
         * @memberof PB_Storage.Md5sumRequest
         * @instance
         */
        Md5sumRequest.prototype.path = "";

        /**
         * Encodes the specified Md5sumRequest message. Does not implicitly {@link PB_Storage.Md5sumRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_Storage.Md5sumRequest
         * @static
         * @param {PB_Storage.Md5sumRequest.$Properties} message Md5sumRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Md5sumRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.path != null && $Object.hasOwnProperty.call(message, "path") && message.path !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Md5sumRequest message, length delimited. Does not implicitly {@link PB_Storage.Md5sumRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Storage.Md5sumRequest
         * @static
         * @param {PB_Storage.Md5sumRequest.$Properties} message Md5sumRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Md5sumRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a Md5sumRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Storage.Md5sumRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Storage.Md5sumRequest & PB_Storage.Md5sumRequest.$Shape} Md5sumRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Md5sumRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Storage.Md5sumRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.path = value;
                        else
                            delete message.path;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a Md5sumRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Storage.Md5sumRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Storage.Md5sumRequest & PB_Storage.Md5sumRequest.$Shape} Md5sumRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Md5sumRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for Md5sumRequest
         * @function getTypeUrl
         * @memberof PB_Storage.Md5sumRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Md5sumRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.Md5sumRequest";
        };

        return Md5sumRequest;
    })();

    PB_Storage.Md5sumResponse = (function() {

        /**
         * Properties of a Md5sumResponse.
         * @typedef {Object} PB_Storage.Md5sumResponse.$Properties
         * @property {string|null} [md5sum] Md5sumResponse md5sum
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Md5sumResponse.
         * @memberof PB_Storage
         * @interface IMd5sumResponse
         * @augments PB_Storage.Md5sumResponse.$Properties
         * @deprecated Use PB_Storage.Md5sumResponse.$Properties instead.
         */

        /**
         * Shape of a Md5sumResponse.
         * @typedef {PB_Storage.Md5sumResponse.$Properties} PB_Storage.Md5sumResponse.$Shape
         */

        /**
         * Constructs a new Md5sumResponse.
         * @memberof PB_Storage
         * @classdesc Represents a Md5sumResponse.
         * @constructor
         * @param {PB_Storage.Md5sumResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const Md5sumResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Md5sumResponse md5sum.
         * @member {string} md5sum
         * @memberof PB_Storage.Md5sumResponse
         * @instance
         */
        Md5sumResponse.prototype.md5sum = "";

        /**
         * Encodes the specified Md5sumResponse message. Does not implicitly {@link PB_Storage.Md5sumResponse.verify|verify} messages.
         * @function encode
         * @memberof PB_Storage.Md5sumResponse
         * @static
         * @param {PB_Storage.Md5sumResponse.$Properties} message Md5sumResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Md5sumResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.md5sum != null && $Object.hasOwnProperty.call(message, "md5sum") && message.md5sum !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.md5sum);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Md5sumResponse message, length delimited. Does not implicitly {@link PB_Storage.Md5sumResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Storage.Md5sumResponse
         * @static
         * @param {PB_Storage.Md5sumResponse.$Properties} message Md5sumResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Md5sumResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a Md5sumResponse message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Storage.Md5sumResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Storage.Md5sumResponse & PB_Storage.Md5sumResponse.$Shape} Md5sumResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Md5sumResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Storage.Md5sumResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.md5sum = value;
                        else
                            delete message.md5sum;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a Md5sumResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Storage.Md5sumResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Storage.Md5sumResponse & PB_Storage.Md5sumResponse.$Shape} Md5sumResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Md5sumResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for Md5sumResponse
         * @function getTypeUrl
         * @memberof PB_Storage.Md5sumResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Md5sumResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.Md5sumResponse";
        };

        return Md5sumResponse;
    })();

    PB_Storage.RenameRequest = (function() {

        /**
         * Properties of a RenameRequest.
         * @typedef {Object} PB_Storage.RenameRequest.$Properties
         * @property {string|null} [oldPath] RenameRequest oldPath
         * @property {string|null} [newPath] RenameRequest newPath
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a RenameRequest.
         * @memberof PB_Storage
         * @interface IRenameRequest
         * @augments PB_Storage.RenameRequest.$Properties
         * @deprecated Use PB_Storage.RenameRequest.$Properties instead.
         */

        /**
         * Shape of a RenameRequest.
         * @typedef {PB_Storage.RenameRequest.$Properties} PB_Storage.RenameRequest.$Shape
         */

        /**
         * Constructs a new RenameRequest.
         * @memberof PB_Storage
         * @classdesc Represents a RenameRequest.
         * @constructor
         * @param {PB_Storage.RenameRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const RenameRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * RenameRequest oldPath.
         * @member {string} oldPath
         * @memberof PB_Storage.RenameRequest
         * @instance
         */
        RenameRequest.prototype.oldPath = "";

        /**
         * RenameRequest newPath.
         * @member {string} newPath
         * @memberof PB_Storage.RenameRequest
         * @instance
         */
        RenameRequest.prototype.newPath = "";

        /**
         * Encodes the specified RenameRequest message. Does not implicitly {@link PB_Storage.RenameRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_Storage.RenameRequest
         * @static
         * @param {PB_Storage.RenameRequest.$Properties} message RenameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RenameRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.oldPath != null && $Object.hasOwnProperty.call(message, "oldPath") && message.oldPath !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.oldPath);
            if (message.newPath != null && $Object.hasOwnProperty.call(message, "newPath") && message.newPath !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.newPath);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified RenameRequest message, length delimited. Does not implicitly {@link PB_Storage.RenameRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Storage.RenameRequest
         * @static
         * @param {PB_Storage.RenameRequest.$Properties} message RenameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RenameRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a RenameRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Storage.RenameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Storage.RenameRequest & PB_Storage.RenameRequest.$Shape} RenameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RenameRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Storage.RenameRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.oldPath = value;
                        else
                            delete message.oldPath;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.newPath = value;
                        else
                            delete message.newPath;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a RenameRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Storage.RenameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Storage.RenameRequest & PB_Storage.RenameRequest.$Shape} RenameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RenameRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for RenameRequest
         * @function getTypeUrl
         * @memberof PB_Storage.RenameRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RenameRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.RenameRequest";
        };

        return RenameRequest;
    })();

    PB_Storage.BackupCreateRequest = (function() {

        /**
         * Properties of a BackupCreateRequest.
         * @typedef {Object} PB_Storage.BackupCreateRequest.$Properties
         * @property {string|null} [archivePath] BackupCreateRequest archivePath
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BackupCreateRequest.
         * @memberof PB_Storage
         * @interface IBackupCreateRequest
         * @augments PB_Storage.BackupCreateRequest.$Properties
         * @deprecated Use PB_Storage.BackupCreateRequest.$Properties instead.
         */

        /**
         * Shape of a BackupCreateRequest.
         * @typedef {PB_Storage.BackupCreateRequest.$Properties} PB_Storage.BackupCreateRequest.$Shape
         */

        /**
         * Constructs a new BackupCreateRequest.
         * @memberof PB_Storage
         * @classdesc Represents a BackupCreateRequest.
         * @constructor
         * @param {PB_Storage.BackupCreateRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const BackupCreateRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BackupCreateRequest archivePath.
         * @member {string} archivePath
         * @memberof PB_Storage.BackupCreateRequest
         * @instance
         */
        BackupCreateRequest.prototype.archivePath = "";

        /**
         * Encodes the specified BackupCreateRequest message. Does not implicitly {@link PB_Storage.BackupCreateRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_Storage.BackupCreateRequest
         * @static
         * @param {PB_Storage.BackupCreateRequest.$Properties} message BackupCreateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupCreateRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.archivePath != null && $Object.hasOwnProperty.call(message, "archivePath") && message.archivePath !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.archivePath);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BackupCreateRequest message, length delimited. Does not implicitly {@link PB_Storage.BackupCreateRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Storage.BackupCreateRequest
         * @static
         * @param {PB_Storage.BackupCreateRequest.$Properties} message BackupCreateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupCreateRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BackupCreateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Storage.BackupCreateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Storage.BackupCreateRequest & PB_Storage.BackupCreateRequest.$Shape} BackupCreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupCreateRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Storage.BackupCreateRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.archivePath = value;
                        else
                            delete message.archivePath;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BackupCreateRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Storage.BackupCreateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Storage.BackupCreateRequest & PB_Storage.BackupCreateRequest.$Shape} BackupCreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupCreateRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for BackupCreateRequest
         * @function getTypeUrl
         * @memberof PB_Storage.BackupCreateRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BackupCreateRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.BackupCreateRequest";
        };

        return BackupCreateRequest;
    })();

    PB_Storage.BackupRestoreRequest = (function() {

        /**
         * Properties of a BackupRestoreRequest.
         * @typedef {Object} PB_Storage.BackupRestoreRequest.$Properties
         * @property {string|null} [archivePath] BackupRestoreRequest archivePath
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BackupRestoreRequest.
         * @memberof PB_Storage
         * @interface IBackupRestoreRequest
         * @augments PB_Storage.BackupRestoreRequest.$Properties
         * @deprecated Use PB_Storage.BackupRestoreRequest.$Properties instead.
         */

        /**
         * Shape of a BackupRestoreRequest.
         * @typedef {PB_Storage.BackupRestoreRequest.$Properties} PB_Storage.BackupRestoreRequest.$Shape
         */

        /**
         * Constructs a new BackupRestoreRequest.
         * @memberof PB_Storage
         * @classdesc Represents a BackupRestoreRequest.
         * @constructor
         * @param {PB_Storage.BackupRestoreRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const BackupRestoreRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BackupRestoreRequest archivePath.
         * @member {string} archivePath
         * @memberof PB_Storage.BackupRestoreRequest
         * @instance
         */
        BackupRestoreRequest.prototype.archivePath = "";

        /**
         * Encodes the specified BackupRestoreRequest message. Does not implicitly {@link PB_Storage.BackupRestoreRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_Storage.BackupRestoreRequest
         * @static
         * @param {PB_Storage.BackupRestoreRequest.$Properties} message BackupRestoreRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupRestoreRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.archivePath != null && $Object.hasOwnProperty.call(message, "archivePath") && message.archivePath !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.archivePath);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BackupRestoreRequest message, length delimited. Does not implicitly {@link PB_Storage.BackupRestoreRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Storage.BackupRestoreRequest
         * @static
         * @param {PB_Storage.BackupRestoreRequest.$Properties} message BackupRestoreRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BackupRestoreRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a BackupRestoreRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Storage.BackupRestoreRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Storage.BackupRestoreRequest & PB_Storage.BackupRestoreRequest.$Shape} BackupRestoreRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupRestoreRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Storage.BackupRestoreRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.archivePath = value;
                        else
                            delete message.archivePath;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a BackupRestoreRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Storage.BackupRestoreRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Storage.BackupRestoreRequest & PB_Storage.BackupRestoreRequest.$Shape} BackupRestoreRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BackupRestoreRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for BackupRestoreRequest
         * @function getTypeUrl
         * @memberof PB_Storage.BackupRestoreRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BackupRestoreRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.BackupRestoreRequest";
        };

        return BackupRestoreRequest;
    })();

    PB_Storage.TarExtractRequest = (function() {

        /**
         * Properties of a TarExtractRequest.
         * @typedef {Object} PB_Storage.TarExtractRequest.$Properties
         * @property {string|null} [tarPath] TarExtractRequest tarPath
         * @property {string|null} [outPath] TarExtractRequest outPath
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a TarExtractRequest.
         * @memberof PB_Storage
         * @interface ITarExtractRequest
         * @augments PB_Storage.TarExtractRequest.$Properties
         * @deprecated Use PB_Storage.TarExtractRequest.$Properties instead.
         */

        /**
         * Shape of a TarExtractRequest.
         * @typedef {PB_Storage.TarExtractRequest.$Properties} PB_Storage.TarExtractRequest.$Shape
         */

        /**
         * Constructs a new TarExtractRequest.
         * @memberof PB_Storage
         * @classdesc Represents a TarExtractRequest.
         * @constructor
         * @param {PB_Storage.TarExtractRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const TarExtractRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * TarExtractRequest tarPath.
         * @member {string} tarPath
         * @memberof PB_Storage.TarExtractRequest
         * @instance
         */
        TarExtractRequest.prototype.tarPath = "";

        /**
         * TarExtractRequest outPath.
         * @member {string} outPath
         * @memberof PB_Storage.TarExtractRequest
         * @instance
         */
        TarExtractRequest.prototype.outPath = "";

        /**
         * Encodes the specified TarExtractRequest message. Does not implicitly {@link PB_Storage.TarExtractRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_Storage.TarExtractRequest
         * @static
         * @param {PB_Storage.TarExtractRequest.$Properties} message TarExtractRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TarExtractRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.tarPath != null && $Object.hasOwnProperty.call(message, "tarPath") && message.tarPath !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tarPath);
            if (message.outPath != null && $Object.hasOwnProperty.call(message, "outPath") && message.outPath !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.outPath);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified TarExtractRequest message, length delimited. Does not implicitly {@link PB_Storage.TarExtractRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Storage.TarExtractRequest
         * @static
         * @param {PB_Storage.TarExtractRequest.$Properties} message TarExtractRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TarExtractRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a TarExtractRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Storage.TarExtractRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Storage.TarExtractRequest & PB_Storage.TarExtractRequest.$Shape} TarExtractRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TarExtractRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Storage.TarExtractRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.tarPath = value;
                        else
                            delete message.tarPath;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.outPath = value;
                        else
                            delete message.outPath;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a TarExtractRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Storage.TarExtractRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Storage.TarExtractRequest & PB_Storage.TarExtractRequest.$Shape} TarExtractRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TarExtractRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for TarExtractRequest
         * @function getTypeUrl
         * @memberof PB_Storage.TarExtractRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        TarExtractRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.TarExtractRequest";
        };

        return TarExtractRequest;
    })();

    return PB_Storage;
})();

export const PB_System = $root.PB_System = (() => {

    /**
     * Namespace PB_System.
     * @exports PB_System
     * @namespace
     */
    const PB_System = {};

    PB_System.PingRequest = (function() {

        /**
         * Properties of a PingRequest.
         * @typedef {Object} PB_System.PingRequest.$Properties
         * @property {Uint8Array|null} [data] PingRequest data
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a PingRequest.
         * @memberof PB_System
         * @interface IPingRequest
         * @augments PB_System.PingRequest.$Properties
         * @deprecated Use PB_System.PingRequest.$Properties instead.
         */

        /**
         * Shape of a PingRequest.
         * @typedef {PB_System.PingRequest.$Properties} PB_System.PingRequest.$Shape
         */

        /**
         * Constructs a new PingRequest.
         * @memberof PB_System
         * @classdesc Represents a PingRequest.
         * @constructor
         * @param {PB_System.PingRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const PingRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * PingRequest data.
         * @member {Uint8Array} data
         * @memberof PB_System.PingRequest
         * @instance
         */
        PingRequest.prototype.data = $util.newBuffer([]);

        /**
         * Encodes the specified PingRequest message. Does not implicitly {@link PB_System.PingRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_System.PingRequest
         * @static
         * @param {PB_System.PingRequest.$Properties} message PingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.data != null && $Object.hasOwnProperty.call(message, "data") && message.data.length)
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified PingRequest message, length delimited. Does not implicitly {@link PB_System.PingRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_System.PingRequest
         * @static
         * @param {PB_System.PingRequest.$Properties} message PingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a PingRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_System.PingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_System.PingRequest & PB_System.PingRequest.$Shape} PingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_System.PingRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.bytes()).length)
                            message.data = value;
                        else
                            delete message.data;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a PingRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_System.PingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_System.PingRequest & PB_System.PingRequest.$Shape} PingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for PingRequest
         * @function getTypeUrl
         * @memberof PB_System.PingRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PingRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.PingRequest";
        };

        return PingRequest;
    })();

    PB_System.PingResponse = (function() {

        /**
         * Properties of a PingResponse.
         * @typedef {Object} PB_System.PingResponse.$Properties
         * @property {Uint8Array|null} [data] PingResponse data
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a PingResponse.
         * @memberof PB_System
         * @interface IPingResponse
         * @augments PB_System.PingResponse.$Properties
         * @deprecated Use PB_System.PingResponse.$Properties instead.
         */

        /**
         * Shape of a PingResponse.
         * @typedef {PB_System.PingResponse.$Properties} PB_System.PingResponse.$Shape
         */

        /**
         * Constructs a new PingResponse.
         * @memberof PB_System
         * @classdesc Represents a PingResponse.
         * @constructor
         * @param {PB_System.PingResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const PingResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * PingResponse data.
         * @member {Uint8Array} data
         * @memberof PB_System.PingResponse
         * @instance
         */
        PingResponse.prototype.data = $util.newBuffer([]);

        /**
         * Encodes the specified PingResponse message. Does not implicitly {@link PB_System.PingResponse.verify|verify} messages.
         * @function encode
         * @memberof PB_System.PingResponse
         * @static
         * @param {PB_System.PingResponse.$Properties} message PingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.data != null && $Object.hasOwnProperty.call(message, "data") && message.data.length)
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link PB_System.PingResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_System.PingResponse
         * @static
         * @param {PB_System.PingResponse.$Properties} message PingResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PingResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a PingResponse message from the specified reader or buffer.
         * @function decode
         * @memberof PB_System.PingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_System.PingResponse & PB_System.PingResponse.$Shape} PingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_System.PingResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.bytes()).length)
                            message.data = value;
                        else
                            delete message.data;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a PingResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_System.PingResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_System.PingResponse & PB_System.PingResponse.$Shape} PingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PingResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for PingResponse
         * @function getTypeUrl
         * @memberof PB_System.PingResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PingResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.PingResponse";
        };

        return PingResponse;
    })();

    PB_System.RebootRequest = (function() {

        /**
         * Properties of a RebootRequest.
         * @typedef {Object} PB_System.RebootRequest.$Properties
         * @property {PB_System.RebootRequest.RebootMode|null} [mode] RebootRequest mode
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a RebootRequest.
         * @memberof PB_System
         * @interface IRebootRequest
         * @augments PB_System.RebootRequest.$Properties
         * @deprecated Use PB_System.RebootRequest.$Properties instead.
         */

        /**
         * Shape of a RebootRequest.
         * @typedef {PB_System.RebootRequest.$Properties} PB_System.RebootRequest.$Shape
         */

        /**
         * Constructs a new RebootRequest.
         * @memberof PB_System
         * @classdesc Represents a RebootRequest.
         * @constructor
         * @param {PB_System.RebootRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const RebootRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * RebootRequest mode.
         * @member {PB_System.RebootRequest.RebootMode} mode
         * @memberof PB_System.RebootRequest
         * @instance
         */
        RebootRequest.prototype.mode = 0;

        /**
         * Encodes the specified RebootRequest message. Does not implicitly {@link PB_System.RebootRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_System.RebootRequest
         * @static
         * @param {PB_System.RebootRequest.$Properties} message RebootRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RebootRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.mode != null && $Object.hasOwnProperty.call(message, "mode") && message.mode !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mode);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified RebootRequest message, length delimited. Does not implicitly {@link PB_System.RebootRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_System.RebootRequest
         * @static
         * @param {PB_System.RebootRequest.$Properties} message RebootRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RebootRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a RebootRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_System.RebootRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_System.RebootRequest & PB_System.RebootRequest.$Shape} RebootRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RebootRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_System.RebootRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.mode = value;
                        else
                            delete message.mode;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a RebootRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_System.RebootRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_System.RebootRequest & PB_System.RebootRequest.$Shape} RebootRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RebootRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for RebootRequest
         * @function getTypeUrl
         * @memberof PB_System.RebootRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RebootRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.RebootRequest";
        };

        /**
         * RebootMode enum.
         * @name PB_System.RebootRequest.RebootMode
         * @enum {number}
         * @property {number} OS=0 OS value
         * @property {number} DFU=1 DFU value
         * @property {number} UPDATE=2 UPDATE value
         */
        RebootRequest.RebootMode = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "OS"] = 0;
            values[valuesById[1] = "DFU"] = 1;
            values[valuesById[2] = "UPDATE"] = 2;
            return values;
        })();

        return RebootRequest;
    })();

    PB_System.DeviceInfoRequest = (function() {

        /**
         * Properties of a DeviceInfoRequest.
         * @typedef {Object} PB_System.DeviceInfoRequest.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a DeviceInfoRequest.
         * @memberof PB_System
         * @interface IDeviceInfoRequest
         * @augments PB_System.DeviceInfoRequest.$Properties
         * @deprecated Use PB_System.DeviceInfoRequest.$Properties instead.
         */

        /**
         * Shape of a DeviceInfoRequest.
         * @typedef {PB_System.DeviceInfoRequest.$Properties} PB_System.DeviceInfoRequest.$Shape
         */

        /**
         * Constructs a new DeviceInfoRequest.
         * @memberof PB_System
         * @classdesc Represents a DeviceInfoRequest.
         * @constructor
         * @param {PB_System.DeviceInfoRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const DeviceInfoRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Encodes the specified DeviceInfoRequest message. Does not implicitly {@link PB_System.DeviceInfoRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_System.DeviceInfoRequest
         * @static
         * @param {PB_System.DeviceInfoRequest.$Properties} message DeviceInfoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceInfoRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified DeviceInfoRequest message, length delimited. Does not implicitly {@link PB_System.DeviceInfoRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_System.DeviceInfoRequest
         * @static
         * @param {PB_System.DeviceInfoRequest.$Properties} message DeviceInfoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceInfoRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a DeviceInfoRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_System.DeviceInfoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_System.DeviceInfoRequest & PB_System.DeviceInfoRequest.$Shape} DeviceInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceInfoRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_System.DeviceInfoRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                reader.skipType(tag & 7, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a DeviceInfoRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_System.DeviceInfoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_System.DeviceInfoRequest & PB_System.DeviceInfoRequest.$Shape} DeviceInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceInfoRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for DeviceInfoRequest
         * @function getTypeUrl
         * @memberof PB_System.DeviceInfoRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        DeviceInfoRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.DeviceInfoRequest";
        };

        return DeviceInfoRequest;
    })();

    PB_System.DeviceInfoResponse = (function() {

        /**
         * Properties of a DeviceInfoResponse.
         * @typedef {Object} PB_System.DeviceInfoResponse.$Properties
         * @property {string|null} [key] DeviceInfoResponse key
         * @property {string|null} [value] DeviceInfoResponse value
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a DeviceInfoResponse.
         * @memberof PB_System
         * @interface IDeviceInfoResponse
         * @augments PB_System.DeviceInfoResponse.$Properties
         * @deprecated Use PB_System.DeviceInfoResponse.$Properties instead.
         */

        /**
         * Shape of a DeviceInfoResponse.
         * @typedef {PB_System.DeviceInfoResponse.$Properties} PB_System.DeviceInfoResponse.$Shape
         */

        /**
         * Constructs a new DeviceInfoResponse.
         * @memberof PB_System
         * @classdesc Represents a DeviceInfoResponse.
         * @constructor
         * @param {PB_System.DeviceInfoResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const DeviceInfoResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * DeviceInfoResponse key.
         * @member {string} key
         * @memberof PB_System.DeviceInfoResponse
         * @instance
         */
        DeviceInfoResponse.prototype.key = "";

        /**
         * DeviceInfoResponse value.
         * @member {string} value
         * @memberof PB_System.DeviceInfoResponse
         * @instance
         */
        DeviceInfoResponse.prototype.value = "";

        /**
         * Encodes the specified DeviceInfoResponse message. Does not implicitly {@link PB_System.DeviceInfoResponse.verify|verify} messages.
         * @function encode
         * @memberof PB_System.DeviceInfoResponse
         * @static
         * @param {PB_System.DeviceInfoResponse.$Properties} message DeviceInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceInfoResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.key != null && $Object.hasOwnProperty.call(message, "key") && message.key !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.value != null && $Object.hasOwnProperty.call(message, "value") && message.value !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified DeviceInfoResponse message, length delimited. Does not implicitly {@link PB_System.DeviceInfoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_System.DeviceInfoResponse
         * @static
         * @param {PB_System.DeviceInfoResponse.$Properties} message DeviceInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceInfoResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a DeviceInfoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof PB_System.DeviceInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_System.DeviceInfoResponse & PB_System.DeviceInfoResponse.$Shape} DeviceInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceInfoResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_System.DeviceInfoResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.key = value;
                        else
                            delete message.key;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.value = value;
                        else
                            delete message.value;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a DeviceInfoResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_System.DeviceInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_System.DeviceInfoResponse & PB_System.DeviceInfoResponse.$Shape} DeviceInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceInfoResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for DeviceInfoResponse
         * @function getTypeUrl
         * @memberof PB_System.DeviceInfoResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        DeviceInfoResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.DeviceInfoResponse";
        };

        return DeviceInfoResponse;
    })();

    PB_System.FactoryResetRequest = (function() {

        /**
         * Properties of a FactoryResetRequest.
         * @typedef {Object} PB_System.FactoryResetRequest.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a FactoryResetRequest.
         * @memberof PB_System
         * @interface IFactoryResetRequest
         * @augments PB_System.FactoryResetRequest.$Properties
         * @deprecated Use PB_System.FactoryResetRequest.$Properties instead.
         */

        /**
         * Shape of a FactoryResetRequest.
         * @typedef {PB_System.FactoryResetRequest.$Properties} PB_System.FactoryResetRequest.$Shape
         */

        /**
         * Constructs a new FactoryResetRequest.
         * @memberof PB_System
         * @classdesc Represents a FactoryResetRequest.
         * @constructor
         * @param {PB_System.FactoryResetRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const FactoryResetRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Encodes the specified FactoryResetRequest message. Does not implicitly {@link PB_System.FactoryResetRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_System.FactoryResetRequest
         * @static
         * @param {PB_System.FactoryResetRequest.$Properties} message FactoryResetRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FactoryResetRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified FactoryResetRequest message, length delimited. Does not implicitly {@link PB_System.FactoryResetRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_System.FactoryResetRequest
         * @static
         * @param {PB_System.FactoryResetRequest.$Properties} message FactoryResetRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FactoryResetRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a FactoryResetRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_System.FactoryResetRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_System.FactoryResetRequest & PB_System.FactoryResetRequest.$Shape} FactoryResetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FactoryResetRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_System.FactoryResetRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                reader.skipType(tag & 7, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a FactoryResetRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_System.FactoryResetRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_System.FactoryResetRequest & PB_System.FactoryResetRequest.$Shape} FactoryResetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FactoryResetRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for FactoryResetRequest
         * @function getTypeUrl
         * @memberof PB_System.FactoryResetRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        FactoryResetRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.FactoryResetRequest";
        };

        return FactoryResetRequest;
    })();

    PB_System.GetDateTimeRequest = (function() {

        /**
         * Properties of a GetDateTimeRequest.
         * @typedef {Object} PB_System.GetDateTimeRequest.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a GetDateTimeRequest.
         * @memberof PB_System
         * @interface IGetDateTimeRequest
         * @augments PB_System.GetDateTimeRequest.$Properties
         * @deprecated Use PB_System.GetDateTimeRequest.$Properties instead.
         */

        /**
         * Shape of a GetDateTimeRequest.
         * @typedef {PB_System.GetDateTimeRequest.$Properties} PB_System.GetDateTimeRequest.$Shape
         */

        /**
         * Constructs a new GetDateTimeRequest.
         * @memberof PB_System
         * @classdesc Represents a GetDateTimeRequest.
         * @constructor
         * @param {PB_System.GetDateTimeRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const GetDateTimeRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Encodes the specified GetDateTimeRequest message. Does not implicitly {@link PB_System.GetDateTimeRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_System.GetDateTimeRequest
         * @static
         * @param {PB_System.GetDateTimeRequest.$Properties} message GetDateTimeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetDateTimeRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified GetDateTimeRequest message, length delimited. Does not implicitly {@link PB_System.GetDateTimeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_System.GetDateTimeRequest
         * @static
         * @param {PB_System.GetDateTimeRequest.$Properties} message GetDateTimeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetDateTimeRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a GetDateTimeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_System.GetDateTimeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_System.GetDateTimeRequest & PB_System.GetDateTimeRequest.$Shape} GetDateTimeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetDateTimeRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_System.GetDateTimeRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                reader.skipType(tag & 7, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a GetDateTimeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_System.GetDateTimeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_System.GetDateTimeRequest & PB_System.GetDateTimeRequest.$Shape} GetDateTimeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetDateTimeRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for GetDateTimeRequest
         * @function getTypeUrl
         * @memberof PB_System.GetDateTimeRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        GetDateTimeRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.GetDateTimeRequest";
        };

        return GetDateTimeRequest;
    })();

    PB_System.GetDateTimeResponse = (function() {

        /**
         * Properties of a GetDateTimeResponse.
         * @typedef {Object} PB_System.GetDateTimeResponse.$Properties
         * @property {PB_System.DateTime.$Properties|null} [datetime] GetDateTimeResponse datetime
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a GetDateTimeResponse.
         * @memberof PB_System
         * @interface IGetDateTimeResponse
         * @augments PB_System.GetDateTimeResponse.$Properties
         * @deprecated Use PB_System.GetDateTimeResponse.$Properties instead.
         */

        /**
         * Shape of a GetDateTimeResponse.
         * @typedef {PB_System.GetDateTimeResponse.$Properties} PB_System.GetDateTimeResponse.$Shape
         */

        /**
         * Constructs a new GetDateTimeResponse.
         * @memberof PB_System
         * @classdesc Represents a GetDateTimeResponse.
         * @constructor
         * @param {PB_System.GetDateTimeResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const GetDateTimeResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * GetDateTimeResponse datetime.
         * @member {PB_System.DateTime.$Properties|null|undefined} datetime
         * @memberof PB_System.GetDateTimeResponse
         * @instance
         */
        GetDateTimeResponse.prototype.datetime = null;

        /**
         * Encodes the specified GetDateTimeResponse message. Does not implicitly {@link PB_System.GetDateTimeResponse.verify|verify} messages.
         * @function encode
         * @memberof PB_System.GetDateTimeResponse
         * @static
         * @param {PB_System.GetDateTimeResponse.$Properties} message GetDateTimeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetDateTimeResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.datetime != null && $Object.hasOwnProperty.call(message, "datetime"))
                $root.PB_System.DateTime.encode(message.datetime, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified GetDateTimeResponse message, length delimited. Does not implicitly {@link PB_System.GetDateTimeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_System.GetDateTimeResponse
         * @static
         * @param {PB_System.GetDateTimeResponse.$Properties} message GetDateTimeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetDateTimeResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a GetDateTimeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof PB_System.GetDateTimeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_System.GetDateTimeResponse & PB_System.GetDateTimeResponse.$Shape} GetDateTimeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetDateTimeResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_System.GetDateTimeResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.datetime = $root.PB_System.DateTime.decode(reader, reader.uint32(), $undefined, _depth + 1, message.datetime);
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a GetDateTimeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_System.GetDateTimeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_System.GetDateTimeResponse & PB_System.GetDateTimeResponse.$Shape} GetDateTimeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetDateTimeResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for GetDateTimeResponse
         * @function getTypeUrl
         * @memberof PB_System.GetDateTimeResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        GetDateTimeResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.GetDateTimeResponse";
        };

        return GetDateTimeResponse;
    })();

    PB_System.SetDateTimeRequest = (function() {

        /**
         * Properties of a SetDateTimeRequest.
         * @typedef {Object} PB_System.SetDateTimeRequest.$Properties
         * @property {PB_System.DateTime.$Properties|null} [datetime] SetDateTimeRequest datetime
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a SetDateTimeRequest.
         * @memberof PB_System
         * @interface ISetDateTimeRequest
         * @augments PB_System.SetDateTimeRequest.$Properties
         * @deprecated Use PB_System.SetDateTimeRequest.$Properties instead.
         */

        /**
         * Shape of a SetDateTimeRequest.
         * @typedef {PB_System.SetDateTimeRequest.$Properties} PB_System.SetDateTimeRequest.$Shape
         */

        /**
         * Constructs a new SetDateTimeRequest.
         * @memberof PB_System
         * @classdesc Represents a SetDateTimeRequest.
         * @constructor
         * @param {PB_System.SetDateTimeRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const SetDateTimeRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * SetDateTimeRequest datetime.
         * @member {PB_System.DateTime.$Properties|null|undefined} datetime
         * @memberof PB_System.SetDateTimeRequest
         * @instance
         */
        SetDateTimeRequest.prototype.datetime = null;

        /**
         * Encodes the specified SetDateTimeRequest message. Does not implicitly {@link PB_System.SetDateTimeRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_System.SetDateTimeRequest
         * @static
         * @param {PB_System.SetDateTimeRequest.$Properties} message SetDateTimeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetDateTimeRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.datetime != null && $Object.hasOwnProperty.call(message, "datetime"))
                $root.PB_System.DateTime.encode(message.datetime, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified SetDateTimeRequest message, length delimited. Does not implicitly {@link PB_System.SetDateTimeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_System.SetDateTimeRequest
         * @static
         * @param {PB_System.SetDateTimeRequest.$Properties} message SetDateTimeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetDateTimeRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a SetDateTimeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_System.SetDateTimeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_System.SetDateTimeRequest & PB_System.SetDateTimeRequest.$Shape} SetDateTimeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetDateTimeRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_System.SetDateTimeRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.datetime = $root.PB_System.DateTime.decode(reader, reader.uint32(), $undefined, _depth + 1, message.datetime);
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a SetDateTimeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_System.SetDateTimeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_System.SetDateTimeRequest & PB_System.SetDateTimeRequest.$Shape} SetDateTimeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetDateTimeRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for SetDateTimeRequest
         * @function getTypeUrl
         * @memberof PB_System.SetDateTimeRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        SetDateTimeRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.SetDateTimeRequest";
        };

        return SetDateTimeRequest;
    })();

    PB_System.DateTime = (function() {

        /**
         * Properties of a DateTime.
         * @typedef {Object} PB_System.DateTime.$Properties
         * @property {number|null} [hour] DateTime hour
         * @property {number|null} [minute] DateTime minute
         * @property {number|null} [second] DateTime second
         * @property {number|null} [day] DateTime day
         * @property {number|null} [month] DateTime month
         * @property {number|null} [year] DateTime year
         * @property {number|null} [weekday] DateTime weekday
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a DateTime.
         * @memberof PB_System
         * @interface IDateTime
         * @augments PB_System.DateTime.$Properties
         * @deprecated Use PB_System.DateTime.$Properties instead.
         */

        /**
         * Shape of a DateTime.
         * @typedef {PB_System.DateTime.$Properties} PB_System.DateTime.$Shape
         */

        /**
         * Constructs a new DateTime.
         * @memberof PB_System
         * @classdesc Represents a DateTime.
         * @constructor
         * @param {PB_System.DateTime.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const DateTime = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * DateTime hour.
         * @member {number} hour
         * @memberof PB_System.DateTime
         * @instance
         */
        DateTime.prototype.hour = 0;

        /**
         * DateTime minute.
         * @member {number} minute
         * @memberof PB_System.DateTime
         * @instance
         */
        DateTime.prototype.minute = 0;

        /**
         * DateTime second.
         * @member {number} second
         * @memberof PB_System.DateTime
         * @instance
         */
        DateTime.prototype.second = 0;

        /**
         * DateTime day.
         * @member {number} day
         * @memberof PB_System.DateTime
         * @instance
         */
        DateTime.prototype.day = 0;

        /**
         * DateTime month.
         * @member {number} month
         * @memberof PB_System.DateTime
         * @instance
         */
        DateTime.prototype.month = 0;

        /**
         * DateTime year.
         * @member {number} year
         * @memberof PB_System.DateTime
         * @instance
         */
        DateTime.prototype.year = 0;

        /**
         * DateTime weekday.
         * @member {number} weekday
         * @memberof PB_System.DateTime
         * @instance
         */
        DateTime.prototype.weekday = 0;

        /**
         * Encodes the specified DateTime message. Does not implicitly {@link PB_System.DateTime.verify|verify} messages.
         * @function encode
         * @memberof PB_System.DateTime
         * @static
         * @param {PB_System.DateTime.$Properties} message DateTime message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DateTime.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.hour != null && $Object.hasOwnProperty.call(message, "hour") && message.hour !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.hour);
            if (message.minute != null && $Object.hasOwnProperty.call(message, "minute") && message.minute !== 0)
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.minute);
            if (message.second != null && $Object.hasOwnProperty.call(message, "second") && message.second !== 0)
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.second);
            if (message.day != null && $Object.hasOwnProperty.call(message, "day") && message.day !== 0)
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.day);
            if (message.month != null && $Object.hasOwnProperty.call(message, "month") && message.month !== 0)
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.month);
            if (message.year != null && $Object.hasOwnProperty.call(message, "year") && message.year !== 0)
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.year);
            if (message.weekday != null && $Object.hasOwnProperty.call(message, "weekday") && message.weekday !== 0)
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.weekday);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified DateTime message, length delimited. Does not implicitly {@link PB_System.DateTime.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_System.DateTime
         * @static
         * @param {PB_System.DateTime.$Properties} message DateTime message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DateTime.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a DateTime message from the specified reader or buffer.
         * @function decode
         * @memberof PB_System.DateTime
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_System.DateTime & PB_System.DateTime.$Shape} DateTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DateTime.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_System.DateTime();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.hour = value;
                        else
                            delete message.hour;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.minute = value;
                        else
                            delete message.minute;
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.second = value;
                        else
                            delete message.second;
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.day = value;
                        else
                            delete message.day;
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.month = value;
                        else
                            delete message.month;
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.year = value;
                        else
                            delete message.year;
                        continue;
                    }
                case 7: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.weekday = value;
                        else
                            delete message.weekday;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a DateTime message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_System.DateTime
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_System.DateTime & PB_System.DateTime.$Shape} DateTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DateTime.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for DateTime
         * @function getTypeUrl
         * @memberof PB_System.DateTime
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        DateTime.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.DateTime";
        };

        return DateTime;
    })();

    PB_System.PlayAudiovisualAlertRequest = (function() {

        /**
         * Properties of a PlayAudiovisualAlertRequest.
         * @typedef {Object} PB_System.PlayAudiovisualAlertRequest.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a PlayAudiovisualAlertRequest.
         * @memberof PB_System
         * @interface IPlayAudiovisualAlertRequest
         * @augments PB_System.PlayAudiovisualAlertRequest.$Properties
         * @deprecated Use PB_System.PlayAudiovisualAlertRequest.$Properties instead.
         */

        /**
         * Shape of a PlayAudiovisualAlertRequest.
         * @typedef {PB_System.PlayAudiovisualAlertRequest.$Properties} PB_System.PlayAudiovisualAlertRequest.$Shape
         */

        /**
         * Constructs a new PlayAudiovisualAlertRequest.
         * @memberof PB_System
         * @classdesc Represents a PlayAudiovisualAlertRequest.
         * @constructor
         * @param {PB_System.PlayAudiovisualAlertRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const PlayAudiovisualAlertRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Encodes the specified PlayAudiovisualAlertRequest message. Does not implicitly {@link PB_System.PlayAudiovisualAlertRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_System.PlayAudiovisualAlertRequest
         * @static
         * @param {PB_System.PlayAudiovisualAlertRequest.$Properties} message PlayAudiovisualAlertRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayAudiovisualAlertRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified PlayAudiovisualAlertRequest message, length delimited. Does not implicitly {@link PB_System.PlayAudiovisualAlertRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_System.PlayAudiovisualAlertRequest
         * @static
         * @param {PB_System.PlayAudiovisualAlertRequest.$Properties} message PlayAudiovisualAlertRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayAudiovisualAlertRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a PlayAudiovisualAlertRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_System.PlayAudiovisualAlertRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_System.PlayAudiovisualAlertRequest & PB_System.PlayAudiovisualAlertRequest.$Shape} PlayAudiovisualAlertRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayAudiovisualAlertRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_System.PlayAudiovisualAlertRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                reader.skipType(tag & 7, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a PlayAudiovisualAlertRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_System.PlayAudiovisualAlertRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_System.PlayAudiovisualAlertRequest & PB_System.PlayAudiovisualAlertRequest.$Shape} PlayAudiovisualAlertRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayAudiovisualAlertRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for PlayAudiovisualAlertRequest
         * @function getTypeUrl
         * @memberof PB_System.PlayAudiovisualAlertRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PlayAudiovisualAlertRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.PlayAudiovisualAlertRequest";
        };

        return PlayAudiovisualAlertRequest;
    })();

    PB_System.ProtobufVersionRequest = (function() {

        /**
         * Properties of a ProtobufVersionRequest.
         * @typedef {Object} PB_System.ProtobufVersionRequest.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ProtobufVersionRequest.
         * @memberof PB_System
         * @interface IProtobufVersionRequest
         * @augments PB_System.ProtobufVersionRequest.$Properties
         * @deprecated Use PB_System.ProtobufVersionRequest.$Properties instead.
         */

        /**
         * Shape of a ProtobufVersionRequest.
         * @typedef {PB_System.ProtobufVersionRequest.$Properties} PB_System.ProtobufVersionRequest.$Shape
         */

        /**
         * Constructs a new ProtobufVersionRequest.
         * @memberof PB_System
         * @classdesc Represents a ProtobufVersionRequest.
         * @constructor
         * @param {PB_System.ProtobufVersionRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const ProtobufVersionRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Encodes the specified ProtobufVersionRequest message. Does not implicitly {@link PB_System.ProtobufVersionRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_System.ProtobufVersionRequest
         * @static
         * @param {PB_System.ProtobufVersionRequest.$Properties} message ProtobufVersionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProtobufVersionRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ProtobufVersionRequest message, length delimited. Does not implicitly {@link PB_System.ProtobufVersionRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_System.ProtobufVersionRequest
         * @static
         * @param {PB_System.ProtobufVersionRequest.$Properties} message ProtobufVersionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProtobufVersionRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a ProtobufVersionRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_System.ProtobufVersionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_System.ProtobufVersionRequest & PB_System.ProtobufVersionRequest.$Shape} ProtobufVersionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProtobufVersionRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_System.ProtobufVersionRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                reader.skipType(tag & 7, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a ProtobufVersionRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_System.ProtobufVersionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_System.ProtobufVersionRequest & PB_System.ProtobufVersionRequest.$Shape} ProtobufVersionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProtobufVersionRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for ProtobufVersionRequest
         * @function getTypeUrl
         * @memberof PB_System.ProtobufVersionRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ProtobufVersionRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.ProtobufVersionRequest";
        };

        return ProtobufVersionRequest;
    })();

    PB_System.ProtobufVersionResponse = (function() {

        /**
         * Properties of a ProtobufVersionResponse.
         * @typedef {Object} PB_System.ProtobufVersionResponse.$Properties
         * @property {number|null} [major] ProtobufVersionResponse major
         * @property {number|null} [minor] ProtobufVersionResponse minor
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ProtobufVersionResponse.
         * @memberof PB_System
         * @interface IProtobufVersionResponse
         * @augments PB_System.ProtobufVersionResponse.$Properties
         * @deprecated Use PB_System.ProtobufVersionResponse.$Properties instead.
         */

        /**
         * Shape of a ProtobufVersionResponse.
         * @typedef {PB_System.ProtobufVersionResponse.$Properties} PB_System.ProtobufVersionResponse.$Shape
         */

        /**
         * Constructs a new ProtobufVersionResponse.
         * @memberof PB_System
         * @classdesc Represents a ProtobufVersionResponse.
         * @constructor
         * @param {PB_System.ProtobufVersionResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const ProtobufVersionResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ProtobufVersionResponse major.
         * @member {number} major
         * @memberof PB_System.ProtobufVersionResponse
         * @instance
         */
        ProtobufVersionResponse.prototype.major = 0;

        /**
         * ProtobufVersionResponse minor.
         * @member {number} minor
         * @memberof PB_System.ProtobufVersionResponse
         * @instance
         */
        ProtobufVersionResponse.prototype.minor = 0;

        /**
         * Encodes the specified ProtobufVersionResponse message. Does not implicitly {@link PB_System.ProtobufVersionResponse.verify|verify} messages.
         * @function encode
         * @memberof PB_System.ProtobufVersionResponse
         * @static
         * @param {PB_System.ProtobufVersionResponse.$Properties} message ProtobufVersionResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProtobufVersionResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.major != null && $Object.hasOwnProperty.call(message, "major") && message.major !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.major);
            if (message.minor != null && $Object.hasOwnProperty.call(message, "minor") && message.minor !== 0)
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.minor);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ProtobufVersionResponse message, length delimited. Does not implicitly {@link PB_System.ProtobufVersionResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_System.ProtobufVersionResponse
         * @static
         * @param {PB_System.ProtobufVersionResponse.$Properties} message ProtobufVersionResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProtobufVersionResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a ProtobufVersionResponse message from the specified reader or buffer.
         * @function decode
         * @memberof PB_System.ProtobufVersionResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_System.ProtobufVersionResponse & PB_System.ProtobufVersionResponse.$Shape} ProtobufVersionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProtobufVersionResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_System.ProtobufVersionResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.major = value;
                        else
                            delete message.major;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.minor = value;
                        else
                            delete message.minor;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a ProtobufVersionResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_System.ProtobufVersionResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_System.ProtobufVersionResponse & PB_System.ProtobufVersionResponse.$Shape} ProtobufVersionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProtobufVersionResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for ProtobufVersionResponse
         * @function getTypeUrl
         * @memberof PB_System.ProtobufVersionResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ProtobufVersionResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.ProtobufVersionResponse";
        };

        return ProtobufVersionResponse;
    })();

    PB_System.UpdateRequest = (function() {

        /**
         * Properties of an UpdateRequest.
         * @typedef {Object} PB_System.UpdateRequest.$Properties
         * @property {string|null} [updateManifest] UpdateRequest updateManifest
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an UpdateRequest.
         * @memberof PB_System
         * @interface IUpdateRequest
         * @augments PB_System.UpdateRequest.$Properties
         * @deprecated Use PB_System.UpdateRequest.$Properties instead.
         */

        /**
         * Shape of an UpdateRequest.
         * @typedef {PB_System.UpdateRequest.$Properties} PB_System.UpdateRequest.$Shape
         */

        /**
         * Constructs a new UpdateRequest.
         * @memberof PB_System
         * @classdesc Represents an UpdateRequest.
         * @constructor
         * @param {PB_System.UpdateRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const UpdateRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * UpdateRequest updateManifest.
         * @member {string} updateManifest
         * @memberof PB_System.UpdateRequest
         * @instance
         */
        UpdateRequest.prototype.updateManifest = "";

        /**
         * Encodes the specified UpdateRequest message. Does not implicitly {@link PB_System.UpdateRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_System.UpdateRequest
         * @static
         * @param {PB_System.UpdateRequest.$Properties} message UpdateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.updateManifest != null && $Object.hasOwnProperty.call(message, "updateManifest") && message.updateManifest !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.updateManifest);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified UpdateRequest message, length delimited. Does not implicitly {@link PB_System.UpdateRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_System.UpdateRequest
         * @static
         * @param {PB_System.UpdateRequest.$Properties} message UpdateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes an UpdateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_System.UpdateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_System.UpdateRequest & PB_System.UpdateRequest.$Shape} UpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_System.UpdateRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.updateManifest = value;
                        else
                            delete message.updateManifest;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an UpdateRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_System.UpdateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_System.UpdateRequest & PB_System.UpdateRequest.$Shape} UpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for UpdateRequest
         * @function getTypeUrl
         * @memberof PB_System.UpdateRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        UpdateRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.UpdateRequest";
        };

        return UpdateRequest;
    })();

    PB_System.UpdateResponse = (function() {

        /**
         * Properties of an UpdateResponse.
         * @typedef {Object} PB_System.UpdateResponse.$Properties
         * @property {PB_System.UpdateResponse.UpdateResultCode|null} [code] UpdateResponse code
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an UpdateResponse.
         * @memberof PB_System
         * @interface IUpdateResponse
         * @augments PB_System.UpdateResponse.$Properties
         * @deprecated Use PB_System.UpdateResponse.$Properties instead.
         */

        /**
         * Shape of an UpdateResponse.
         * @typedef {PB_System.UpdateResponse.$Properties} PB_System.UpdateResponse.$Shape
         */

        /**
         * Constructs a new UpdateResponse.
         * @memberof PB_System
         * @classdesc Represents an UpdateResponse.
         * @constructor
         * @param {PB_System.UpdateResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const UpdateResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * UpdateResponse code.
         * @member {PB_System.UpdateResponse.UpdateResultCode} code
         * @memberof PB_System.UpdateResponse
         * @instance
         */
        UpdateResponse.prototype.code = 0;

        /**
         * Encodes the specified UpdateResponse message. Does not implicitly {@link PB_System.UpdateResponse.verify|verify} messages.
         * @function encode
         * @memberof PB_System.UpdateResponse
         * @static
         * @param {PB_System.UpdateResponse.$Properties} message UpdateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.code != null && $Object.hasOwnProperty.call(message, "code") && message.code !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified UpdateResponse message, length delimited. Does not implicitly {@link PB_System.UpdateResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_System.UpdateResponse
         * @static
         * @param {PB_System.UpdateResponse.$Properties} message UpdateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes an UpdateResponse message from the specified reader or buffer.
         * @function decode
         * @memberof PB_System.UpdateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_System.UpdateResponse & PB_System.UpdateResponse.$Shape} UpdateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_System.UpdateResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.code = value;
                        else
                            delete message.code;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an UpdateResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_System.UpdateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_System.UpdateResponse & PB_System.UpdateResponse.$Shape} UpdateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for UpdateResponse
         * @function getTypeUrl
         * @memberof PB_System.UpdateResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        UpdateResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.UpdateResponse";
        };

        /**
         * UpdateResultCode enum.
         * @name PB_System.UpdateResponse.UpdateResultCode
         * @enum {number}
         * @property {number} OK=0 OK value
         * @property {number} ManifestPathInvalid=1 ManifestPathInvalid value
         * @property {number} ManifestFolderNotFound=2 ManifestFolderNotFound value
         * @property {number} ManifestInvalid=3 ManifestInvalid value
         * @property {number} StageMissing=4 StageMissing value
         * @property {number} StageIntegrityError=5 StageIntegrityError value
         * @property {number} ManifestPointerError=6 ManifestPointerError value
         * @property {number} TargetMismatch=7 TargetMismatch value
         * @property {number} OutdatedManifestVersion=8 OutdatedManifestVersion value
         * @property {number} IntFull=9 IntFull value
         * @property {number} UnspecifiedError=10 UnspecifiedError value
         */
        UpdateResponse.UpdateResultCode = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "OK"] = 0;
            values[valuesById[1] = "ManifestPathInvalid"] = 1;
            values[valuesById[2] = "ManifestFolderNotFound"] = 2;
            values[valuesById[3] = "ManifestInvalid"] = 3;
            values[valuesById[4] = "StageMissing"] = 4;
            values[valuesById[5] = "StageIntegrityError"] = 5;
            values[valuesById[6] = "ManifestPointerError"] = 6;
            values[valuesById[7] = "TargetMismatch"] = 7;
            values[valuesById[8] = "OutdatedManifestVersion"] = 8;
            values[valuesById[9] = "IntFull"] = 9;
            values[valuesById[10] = "UnspecifiedError"] = 10;
            return values;
        })();

        return UpdateResponse;
    })();

    PB_System.PowerInfoRequest = (function() {

        /**
         * Properties of a PowerInfoRequest.
         * @typedef {Object} PB_System.PowerInfoRequest.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a PowerInfoRequest.
         * @memberof PB_System
         * @interface IPowerInfoRequest
         * @augments PB_System.PowerInfoRequest.$Properties
         * @deprecated Use PB_System.PowerInfoRequest.$Properties instead.
         */

        /**
         * Shape of a PowerInfoRequest.
         * @typedef {PB_System.PowerInfoRequest.$Properties} PB_System.PowerInfoRequest.$Shape
         */

        /**
         * Constructs a new PowerInfoRequest.
         * @memberof PB_System
         * @classdesc Represents a PowerInfoRequest.
         * @constructor
         * @param {PB_System.PowerInfoRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const PowerInfoRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Encodes the specified PowerInfoRequest message. Does not implicitly {@link PB_System.PowerInfoRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_System.PowerInfoRequest
         * @static
         * @param {PB_System.PowerInfoRequest.$Properties} message PowerInfoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PowerInfoRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified PowerInfoRequest message, length delimited. Does not implicitly {@link PB_System.PowerInfoRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_System.PowerInfoRequest
         * @static
         * @param {PB_System.PowerInfoRequest.$Properties} message PowerInfoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PowerInfoRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a PowerInfoRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_System.PowerInfoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_System.PowerInfoRequest & PB_System.PowerInfoRequest.$Shape} PowerInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PowerInfoRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_System.PowerInfoRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                reader.skipType(tag & 7, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a PowerInfoRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_System.PowerInfoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_System.PowerInfoRequest & PB_System.PowerInfoRequest.$Shape} PowerInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PowerInfoRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for PowerInfoRequest
         * @function getTypeUrl
         * @memberof PB_System.PowerInfoRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PowerInfoRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.PowerInfoRequest";
        };

        return PowerInfoRequest;
    })();

    PB_System.PowerInfoResponse = (function() {

        /**
         * Properties of a PowerInfoResponse.
         * @typedef {Object} PB_System.PowerInfoResponse.$Properties
         * @property {string|null} [key] PowerInfoResponse key
         * @property {string|null} [value] PowerInfoResponse value
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a PowerInfoResponse.
         * @memberof PB_System
         * @interface IPowerInfoResponse
         * @augments PB_System.PowerInfoResponse.$Properties
         * @deprecated Use PB_System.PowerInfoResponse.$Properties instead.
         */

        /**
         * Shape of a PowerInfoResponse.
         * @typedef {PB_System.PowerInfoResponse.$Properties} PB_System.PowerInfoResponse.$Shape
         */

        /**
         * Constructs a new PowerInfoResponse.
         * @memberof PB_System
         * @classdesc Represents a PowerInfoResponse.
         * @constructor
         * @param {PB_System.PowerInfoResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const PowerInfoResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * PowerInfoResponse key.
         * @member {string} key
         * @memberof PB_System.PowerInfoResponse
         * @instance
         */
        PowerInfoResponse.prototype.key = "";

        /**
         * PowerInfoResponse value.
         * @member {string} value
         * @memberof PB_System.PowerInfoResponse
         * @instance
         */
        PowerInfoResponse.prototype.value = "";

        /**
         * Encodes the specified PowerInfoResponse message. Does not implicitly {@link PB_System.PowerInfoResponse.verify|verify} messages.
         * @function encode
         * @memberof PB_System.PowerInfoResponse
         * @static
         * @param {PB_System.PowerInfoResponse.$Properties} message PowerInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PowerInfoResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.key != null && $Object.hasOwnProperty.call(message, "key") && message.key !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.value != null && $Object.hasOwnProperty.call(message, "value") && message.value !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified PowerInfoResponse message, length delimited. Does not implicitly {@link PB_System.PowerInfoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_System.PowerInfoResponse
         * @static
         * @param {PB_System.PowerInfoResponse.$Properties} message PowerInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PowerInfoResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a PowerInfoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof PB_System.PowerInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_System.PowerInfoResponse & PB_System.PowerInfoResponse.$Shape} PowerInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PowerInfoResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_System.PowerInfoResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.key = value;
                        else
                            delete message.key;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.value = value;
                        else
                            delete message.value;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a PowerInfoResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_System.PowerInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_System.PowerInfoResponse & PB_System.PowerInfoResponse.$Shape} PowerInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PowerInfoResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for PowerInfoResponse
         * @function getTypeUrl
         * @memberof PB_System.PowerInfoResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PowerInfoResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.PowerInfoResponse";
        };

        return PowerInfoResponse;
    })();

    return PB_System;
})();

export const PB_App = $root.PB_App = (() => {

    /**
     * Namespace PB_App.
     * @exports PB_App
     * @namespace
     */
    const PB_App = {};

    PB_App.StartRequest = (function() {

        /**
         * Properties of a StartRequest.
         * @typedef {Object} PB_App.StartRequest.$Properties
         * @property {string|null} [name] StartRequest name
         * @property {string|null} [args] StartRequest args
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a StartRequest.
         * @memberof PB_App
         * @interface IStartRequest
         * @augments PB_App.StartRequest.$Properties
         * @deprecated Use PB_App.StartRequest.$Properties instead.
         */

        /**
         * Shape of a StartRequest.
         * @typedef {PB_App.StartRequest.$Properties} PB_App.StartRequest.$Shape
         */

        /**
         * Constructs a new StartRequest.
         * @memberof PB_App
         * @classdesc Represents a StartRequest.
         * @constructor
         * @param {PB_App.StartRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const StartRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * StartRequest name.
         * @member {string} name
         * @memberof PB_App.StartRequest
         * @instance
         */
        StartRequest.prototype.name = "";

        /**
         * StartRequest args.
         * @member {string} args
         * @memberof PB_App.StartRequest
         * @instance
         */
        StartRequest.prototype.args = "";

        /**
         * Encodes the specified StartRequest message. Does not implicitly {@link PB_App.StartRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_App.StartRequest
         * @static
         * @param {PB_App.StartRequest.$Properties} message StartRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.name != null && $Object.hasOwnProperty.call(message, "name") && message.name !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.args != null && $Object.hasOwnProperty.call(message, "args") && message.args !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.args);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified StartRequest message, length delimited. Does not implicitly {@link PB_App.StartRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_App.StartRequest
         * @static
         * @param {PB_App.StartRequest.$Properties} message StartRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a StartRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_App.StartRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_App.StartRequest & PB_App.StartRequest.$Shape} StartRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_App.StartRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.name = value;
                        else
                            delete message.name;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.args = value;
                        else
                            delete message.args;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a StartRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_App.StartRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_App.StartRequest & PB_App.StartRequest.$Shape} StartRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for StartRequest
         * @function getTypeUrl
         * @memberof PB_App.StartRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        StartRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_App.StartRequest";
        };

        return StartRequest;
    })();

    PB_App.LockStatusRequest = (function() {

        /**
         * Properties of a LockStatusRequest.
         * @typedef {Object} PB_App.LockStatusRequest.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a LockStatusRequest.
         * @memberof PB_App
         * @interface ILockStatusRequest
         * @augments PB_App.LockStatusRequest.$Properties
         * @deprecated Use PB_App.LockStatusRequest.$Properties instead.
         */

        /**
         * Shape of a LockStatusRequest.
         * @typedef {PB_App.LockStatusRequest.$Properties} PB_App.LockStatusRequest.$Shape
         */

        /**
         * Constructs a new LockStatusRequest.
         * @memberof PB_App
         * @classdesc Represents a LockStatusRequest.
         * @constructor
         * @param {PB_App.LockStatusRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const LockStatusRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Encodes the specified LockStatusRequest message. Does not implicitly {@link PB_App.LockStatusRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_App.LockStatusRequest
         * @static
         * @param {PB_App.LockStatusRequest.$Properties} message LockStatusRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LockStatusRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified LockStatusRequest message, length delimited. Does not implicitly {@link PB_App.LockStatusRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_App.LockStatusRequest
         * @static
         * @param {PB_App.LockStatusRequest.$Properties} message LockStatusRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LockStatusRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a LockStatusRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_App.LockStatusRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_App.LockStatusRequest & PB_App.LockStatusRequest.$Shape} LockStatusRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LockStatusRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_App.LockStatusRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                reader.skipType(tag & 7, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a LockStatusRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_App.LockStatusRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_App.LockStatusRequest & PB_App.LockStatusRequest.$Shape} LockStatusRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LockStatusRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for LockStatusRequest
         * @function getTypeUrl
         * @memberof PB_App.LockStatusRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        LockStatusRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_App.LockStatusRequest";
        };

        return LockStatusRequest;
    })();

    PB_App.LockStatusResponse = (function() {

        /**
         * Properties of a LockStatusResponse.
         * @typedef {Object} PB_App.LockStatusResponse.$Properties
         * @property {boolean|null} [locked] LockStatusResponse locked
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a LockStatusResponse.
         * @memberof PB_App
         * @interface ILockStatusResponse
         * @augments PB_App.LockStatusResponse.$Properties
         * @deprecated Use PB_App.LockStatusResponse.$Properties instead.
         */

        /**
         * Shape of a LockStatusResponse.
         * @typedef {PB_App.LockStatusResponse.$Properties} PB_App.LockStatusResponse.$Shape
         */

        /**
         * Constructs a new LockStatusResponse.
         * @memberof PB_App
         * @classdesc Represents a LockStatusResponse.
         * @constructor
         * @param {PB_App.LockStatusResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const LockStatusResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * LockStatusResponse locked.
         * @member {boolean} locked
         * @memberof PB_App.LockStatusResponse
         * @instance
         */
        LockStatusResponse.prototype.locked = false;

        /**
         * Encodes the specified LockStatusResponse message. Does not implicitly {@link PB_App.LockStatusResponse.verify|verify} messages.
         * @function encode
         * @memberof PB_App.LockStatusResponse
         * @static
         * @param {PB_App.LockStatusResponse.$Properties} message LockStatusResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LockStatusResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.locked != null && $Object.hasOwnProperty.call(message, "locked") && message.locked !== false)
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.locked);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified LockStatusResponse message, length delimited. Does not implicitly {@link PB_App.LockStatusResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_App.LockStatusResponse
         * @static
         * @param {PB_App.LockStatusResponse.$Properties} message LockStatusResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LockStatusResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a LockStatusResponse message from the specified reader or buffer.
         * @function decode
         * @memberof PB_App.LockStatusResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_App.LockStatusResponse & PB_App.LockStatusResponse.$Shape} LockStatusResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LockStatusResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_App.LockStatusResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.locked = value;
                        else
                            delete message.locked;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a LockStatusResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_App.LockStatusResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_App.LockStatusResponse & PB_App.LockStatusResponse.$Shape} LockStatusResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LockStatusResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for LockStatusResponse
         * @function getTypeUrl
         * @memberof PB_App.LockStatusResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        LockStatusResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_App.LockStatusResponse";
        };

        return LockStatusResponse;
    })();

    PB_App.AppExitRequest = (function() {

        /**
         * Properties of an AppExitRequest.
         * @typedef {Object} PB_App.AppExitRequest.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an AppExitRequest.
         * @memberof PB_App
         * @interface IAppExitRequest
         * @augments PB_App.AppExitRequest.$Properties
         * @deprecated Use PB_App.AppExitRequest.$Properties instead.
         */

        /**
         * Shape of an AppExitRequest.
         * @typedef {PB_App.AppExitRequest.$Properties} PB_App.AppExitRequest.$Shape
         */

        /**
         * Constructs a new AppExitRequest.
         * @memberof PB_App
         * @classdesc Represents an AppExitRequest.
         * @constructor
         * @param {PB_App.AppExitRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const AppExitRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Encodes the specified AppExitRequest message. Does not implicitly {@link PB_App.AppExitRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_App.AppExitRequest
         * @static
         * @param {PB_App.AppExitRequest.$Properties} message AppExitRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppExitRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified AppExitRequest message, length delimited. Does not implicitly {@link PB_App.AppExitRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_App.AppExitRequest
         * @static
         * @param {PB_App.AppExitRequest.$Properties} message AppExitRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppExitRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes an AppExitRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_App.AppExitRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_App.AppExitRequest & PB_App.AppExitRequest.$Shape} AppExitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppExitRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_App.AppExitRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                reader.skipType(tag & 7, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an AppExitRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_App.AppExitRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_App.AppExitRequest & PB_App.AppExitRequest.$Shape} AppExitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppExitRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for AppExitRequest
         * @function getTypeUrl
         * @memberof PB_App.AppExitRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        AppExitRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_App.AppExitRequest";
        };

        return AppExitRequest;
    })();

    PB_App.AppLoadFileRequest = (function() {

        /**
         * Properties of an AppLoadFileRequest.
         * @typedef {Object} PB_App.AppLoadFileRequest.$Properties
         * @property {string|null} [path] AppLoadFileRequest path
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an AppLoadFileRequest.
         * @memberof PB_App
         * @interface IAppLoadFileRequest
         * @augments PB_App.AppLoadFileRequest.$Properties
         * @deprecated Use PB_App.AppLoadFileRequest.$Properties instead.
         */

        /**
         * Shape of an AppLoadFileRequest.
         * @typedef {PB_App.AppLoadFileRequest.$Properties} PB_App.AppLoadFileRequest.$Shape
         */

        /**
         * Constructs a new AppLoadFileRequest.
         * @memberof PB_App
         * @classdesc Represents an AppLoadFileRequest.
         * @constructor
         * @param {PB_App.AppLoadFileRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const AppLoadFileRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * AppLoadFileRequest path.
         * @member {string} path
         * @memberof PB_App.AppLoadFileRequest
         * @instance
         */
        AppLoadFileRequest.prototype.path = "";

        /**
         * Encodes the specified AppLoadFileRequest message. Does not implicitly {@link PB_App.AppLoadFileRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_App.AppLoadFileRequest
         * @static
         * @param {PB_App.AppLoadFileRequest.$Properties} message AppLoadFileRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppLoadFileRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.path != null && $Object.hasOwnProperty.call(message, "path") && message.path !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified AppLoadFileRequest message, length delimited. Does not implicitly {@link PB_App.AppLoadFileRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_App.AppLoadFileRequest
         * @static
         * @param {PB_App.AppLoadFileRequest.$Properties} message AppLoadFileRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppLoadFileRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes an AppLoadFileRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_App.AppLoadFileRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_App.AppLoadFileRequest & PB_App.AppLoadFileRequest.$Shape} AppLoadFileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppLoadFileRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_App.AppLoadFileRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.path = value;
                        else
                            delete message.path;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an AppLoadFileRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_App.AppLoadFileRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_App.AppLoadFileRequest & PB_App.AppLoadFileRequest.$Shape} AppLoadFileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppLoadFileRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for AppLoadFileRequest
         * @function getTypeUrl
         * @memberof PB_App.AppLoadFileRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        AppLoadFileRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_App.AppLoadFileRequest";
        };

        return AppLoadFileRequest;
    })();

    PB_App.AppButtonPressRequest = (function() {

        /**
         * Properties of an AppButtonPressRequest.
         * @typedef {Object} PB_App.AppButtonPressRequest.$Properties
         * @property {string|null} [args] AppButtonPressRequest args
         * @property {number|null} [index] AppButtonPressRequest index
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an AppButtonPressRequest.
         * @memberof PB_App
         * @interface IAppButtonPressRequest
         * @augments PB_App.AppButtonPressRequest.$Properties
         * @deprecated Use PB_App.AppButtonPressRequest.$Properties instead.
         */

        /**
         * Shape of an AppButtonPressRequest.
         * @typedef {PB_App.AppButtonPressRequest.$Properties} PB_App.AppButtonPressRequest.$Shape
         */

        /**
         * Constructs a new AppButtonPressRequest.
         * @memberof PB_App
         * @classdesc Represents an AppButtonPressRequest.
         * @constructor
         * @param {PB_App.AppButtonPressRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const AppButtonPressRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * AppButtonPressRequest args.
         * @member {string} args
         * @memberof PB_App.AppButtonPressRequest
         * @instance
         */
        AppButtonPressRequest.prototype.args = "";

        /**
         * AppButtonPressRequest index.
         * @member {number} index
         * @memberof PB_App.AppButtonPressRequest
         * @instance
         */
        AppButtonPressRequest.prototype.index = 0;

        /**
         * Encodes the specified AppButtonPressRequest message. Does not implicitly {@link PB_App.AppButtonPressRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_App.AppButtonPressRequest
         * @static
         * @param {PB_App.AppButtonPressRequest.$Properties} message AppButtonPressRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppButtonPressRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.args != null && $Object.hasOwnProperty.call(message, "args") && message.args !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.args);
            if (message.index != null && $Object.hasOwnProperty.call(message, "index") && message.index !== 0)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.index);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified AppButtonPressRequest message, length delimited. Does not implicitly {@link PB_App.AppButtonPressRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_App.AppButtonPressRequest
         * @static
         * @param {PB_App.AppButtonPressRequest.$Properties} message AppButtonPressRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppButtonPressRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes an AppButtonPressRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_App.AppButtonPressRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_App.AppButtonPressRequest & PB_App.AppButtonPressRequest.$Shape} AppButtonPressRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppButtonPressRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_App.AppButtonPressRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.args = value;
                        else
                            delete message.args;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.index = value;
                        else
                            delete message.index;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an AppButtonPressRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_App.AppButtonPressRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_App.AppButtonPressRequest & PB_App.AppButtonPressRequest.$Shape} AppButtonPressRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppButtonPressRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for AppButtonPressRequest
         * @function getTypeUrl
         * @memberof PB_App.AppButtonPressRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        AppButtonPressRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_App.AppButtonPressRequest";
        };

        return AppButtonPressRequest;
    })();

    PB_App.AppButtonReleaseRequest = (function() {

        /**
         * Properties of an AppButtonReleaseRequest.
         * @typedef {Object} PB_App.AppButtonReleaseRequest.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an AppButtonReleaseRequest.
         * @memberof PB_App
         * @interface IAppButtonReleaseRequest
         * @augments PB_App.AppButtonReleaseRequest.$Properties
         * @deprecated Use PB_App.AppButtonReleaseRequest.$Properties instead.
         */

        /**
         * Shape of an AppButtonReleaseRequest.
         * @typedef {PB_App.AppButtonReleaseRequest.$Properties} PB_App.AppButtonReleaseRequest.$Shape
         */

        /**
         * Constructs a new AppButtonReleaseRequest.
         * @memberof PB_App
         * @classdesc Represents an AppButtonReleaseRequest.
         * @constructor
         * @param {PB_App.AppButtonReleaseRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const AppButtonReleaseRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Encodes the specified AppButtonReleaseRequest message. Does not implicitly {@link PB_App.AppButtonReleaseRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_App.AppButtonReleaseRequest
         * @static
         * @param {PB_App.AppButtonReleaseRequest.$Properties} message AppButtonReleaseRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppButtonReleaseRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified AppButtonReleaseRequest message, length delimited. Does not implicitly {@link PB_App.AppButtonReleaseRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_App.AppButtonReleaseRequest
         * @static
         * @param {PB_App.AppButtonReleaseRequest.$Properties} message AppButtonReleaseRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppButtonReleaseRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes an AppButtonReleaseRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_App.AppButtonReleaseRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_App.AppButtonReleaseRequest & PB_App.AppButtonReleaseRequest.$Shape} AppButtonReleaseRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppButtonReleaseRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_App.AppButtonReleaseRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                reader.skipType(tag & 7, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an AppButtonReleaseRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_App.AppButtonReleaseRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_App.AppButtonReleaseRequest & PB_App.AppButtonReleaseRequest.$Shape} AppButtonReleaseRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppButtonReleaseRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for AppButtonReleaseRequest
         * @function getTypeUrl
         * @memberof PB_App.AppButtonReleaseRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        AppButtonReleaseRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_App.AppButtonReleaseRequest";
        };

        return AppButtonReleaseRequest;
    })();

    PB_App.AppButtonPressReleaseRequest = (function() {

        /**
         * Properties of an AppButtonPressReleaseRequest.
         * @typedef {Object} PB_App.AppButtonPressReleaseRequest.$Properties
         * @property {string|null} [args] AppButtonPressReleaseRequest args
         * @property {number|null} [index] AppButtonPressReleaseRequest index
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an AppButtonPressReleaseRequest.
         * @memberof PB_App
         * @interface IAppButtonPressReleaseRequest
         * @augments PB_App.AppButtonPressReleaseRequest.$Properties
         * @deprecated Use PB_App.AppButtonPressReleaseRequest.$Properties instead.
         */

        /**
         * Shape of an AppButtonPressReleaseRequest.
         * @typedef {PB_App.AppButtonPressReleaseRequest.$Properties} PB_App.AppButtonPressReleaseRequest.$Shape
         */

        /**
         * Constructs a new AppButtonPressReleaseRequest.
         * @memberof PB_App
         * @classdesc Represents an AppButtonPressReleaseRequest.
         * @constructor
         * @param {PB_App.AppButtonPressReleaseRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const AppButtonPressReleaseRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * AppButtonPressReleaseRequest args.
         * @member {string} args
         * @memberof PB_App.AppButtonPressReleaseRequest
         * @instance
         */
        AppButtonPressReleaseRequest.prototype.args = "";

        /**
         * AppButtonPressReleaseRequest index.
         * @member {number} index
         * @memberof PB_App.AppButtonPressReleaseRequest
         * @instance
         */
        AppButtonPressReleaseRequest.prototype.index = 0;

        /**
         * Encodes the specified AppButtonPressReleaseRequest message. Does not implicitly {@link PB_App.AppButtonPressReleaseRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_App.AppButtonPressReleaseRequest
         * @static
         * @param {PB_App.AppButtonPressReleaseRequest.$Properties} message AppButtonPressReleaseRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppButtonPressReleaseRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.args != null && $Object.hasOwnProperty.call(message, "args") && message.args !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.args);
            if (message.index != null && $Object.hasOwnProperty.call(message, "index") && message.index !== 0)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.index);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified AppButtonPressReleaseRequest message, length delimited. Does not implicitly {@link PB_App.AppButtonPressReleaseRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_App.AppButtonPressReleaseRequest
         * @static
         * @param {PB_App.AppButtonPressReleaseRequest.$Properties} message AppButtonPressReleaseRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppButtonPressReleaseRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes an AppButtonPressReleaseRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_App.AppButtonPressReleaseRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_App.AppButtonPressReleaseRequest & PB_App.AppButtonPressReleaseRequest.$Shape} AppButtonPressReleaseRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppButtonPressReleaseRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_App.AppButtonPressReleaseRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.args = value;
                        else
                            delete message.args;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.index = value;
                        else
                            delete message.index;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an AppButtonPressReleaseRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_App.AppButtonPressReleaseRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_App.AppButtonPressReleaseRequest & PB_App.AppButtonPressReleaseRequest.$Shape} AppButtonPressReleaseRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppButtonPressReleaseRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for AppButtonPressReleaseRequest
         * @function getTypeUrl
         * @memberof PB_App.AppButtonPressReleaseRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        AppButtonPressReleaseRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_App.AppButtonPressReleaseRequest";
        };

        return AppButtonPressReleaseRequest;
    })();

    /**
     * AppState enum.
     * @name PB_App.AppState
     * @enum {number}
     * @property {number} APP_CLOSED=0 APP_CLOSED value
     * @property {number} APP_STARTED=1 APP_STARTED value
     */
    PB_App.AppState = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "APP_CLOSED"] = 0;
        values[valuesById[1] = "APP_STARTED"] = 1;
        return values;
    })();

    PB_App.AppStateResponse = (function() {

        /**
         * Properties of an AppStateResponse.
         * @typedef {Object} PB_App.AppStateResponse.$Properties
         * @property {PB_App.AppState|null} [state] AppStateResponse state
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an AppStateResponse.
         * @memberof PB_App
         * @interface IAppStateResponse
         * @augments PB_App.AppStateResponse.$Properties
         * @deprecated Use PB_App.AppStateResponse.$Properties instead.
         */

        /**
         * Shape of an AppStateResponse.
         * @typedef {PB_App.AppStateResponse.$Properties} PB_App.AppStateResponse.$Shape
         */

        /**
         * Constructs a new AppStateResponse.
         * @memberof PB_App
         * @classdesc Represents an AppStateResponse.
         * @constructor
         * @param {PB_App.AppStateResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const AppStateResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * AppStateResponse state.
         * @member {PB_App.AppState} state
         * @memberof PB_App.AppStateResponse
         * @instance
         */
        AppStateResponse.prototype.state = 0;

        /**
         * Encodes the specified AppStateResponse message. Does not implicitly {@link PB_App.AppStateResponse.verify|verify} messages.
         * @function encode
         * @memberof PB_App.AppStateResponse
         * @static
         * @param {PB_App.AppStateResponse.$Properties} message AppStateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppStateResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.state != null && $Object.hasOwnProperty.call(message, "state") && message.state !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified AppStateResponse message, length delimited. Does not implicitly {@link PB_App.AppStateResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_App.AppStateResponse
         * @static
         * @param {PB_App.AppStateResponse.$Properties} message AppStateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppStateResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes an AppStateResponse message from the specified reader or buffer.
         * @function decode
         * @memberof PB_App.AppStateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_App.AppStateResponse & PB_App.AppStateResponse.$Shape} AppStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppStateResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_App.AppStateResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.state = value;
                        else
                            delete message.state;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an AppStateResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_App.AppStateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_App.AppStateResponse & PB_App.AppStateResponse.$Shape} AppStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppStateResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for AppStateResponse
         * @function getTypeUrl
         * @memberof PB_App.AppStateResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        AppStateResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_App.AppStateResponse";
        };

        return AppStateResponse;
    })();

    PB_App.GetErrorRequest = (function() {

        /**
         * Properties of a GetErrorRequest.
         * @typedef {Object} PB_App.GetErrorRequest.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a GetErrorRequest.
         * @memberof PB_App
         * @interface IGetErrorRequest
         * @augments PB_App.GetErrorRequest.$Properties
         * @deprecated Use PB_App.GetErrorRequest.$Properties instead.
         */

        /**
         * Shape of a GetErrorRequest.
         * @typedef {PB_App.GetErrorRequest.$Properties} PB_App.GetErrorRequest.$Shape
         */

        /**
         * Constructs a new GetErrorRequest.
         * @memberof PB_App
         * @classdesc Represents a GetErrorRequest.
         * @constructor
         * @param {PB_App.GetErrorRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const GetErrorRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Encodes the specified GetErrorRequest message. Does not implicitly {@link PB_App.GetErrorRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_App.GetErrorRequest
         * @static
         * @param {PB_App.GetErrorRequest.$Properties} message GetErrorRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetErrorRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified GetErrorRequest message, length delimited. Does not implicitly {@link PB_App.GetErrorRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_App.GetErrorRequest
         * @static
         * @param {PB_App.GetErrorRequest.$Properties} message GetErrorRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetErrorRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a GetErrorRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_App.GetErrorRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_App.GetErrorRequest & PB_App.GetErrorRequest.$Shape} GetErrorRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetErrorRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_App.GetErrorRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                reader.skipType(tag & 7, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a GetErrorRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_App.GetErrorRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_App.GetErrorRequest & PB_App.GetErrorRequest.$Shape} GetErrorRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetErrorRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for GetErrorRequest
         * @function getTypeUrl
         * @memberof PB_App.GetErrorRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        GetErrorRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_App.GetErrorRequest";
        };

        return GetErrorRequest;
    })();

    PB_App.GetErrorResponse = (function() {

        /**
         * Properties of a GetErrorResponse.
         * @typedef {Object} PB_App.GetErrorResponse.$Properties
         * @property {number|null} [code] GetErrorResponse code
         * @property {string|null} [text] GetErrorResponse text
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a GetErrorResponse.
         * @memberof PB_App
         * @interface IGetErrorResponse
         * @augments PB_App.GetErrorResponse.$Properties
         * @deprecated Use PB_App.GetErrorResponse.$Properties instead.
         */

        /**
         * Shape of a GetErrorResponse.
         * @typedef {PB_App.GetErrorResponse.$Properties} PB_App.GetErrorResponse.$Shape
         */

        /**
         * Constructs a new GetErrorResponse.
         * @memberof PB_App
         * @classdesc Represents a GetErrorResponse.
         * @constructor
         * @param {PB_App.GetErrorResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const GetErrorResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * GetErrorResponse code.
         * @member {number} code
         * @memberof PB_App.GetErrorResponse
         * @instance
         */
        GetErrorResponse.prototype.code = 0;

        /**
         * GetErrorResponse text.
         * @member {string} text
         * @memberof PB_App.GetErrorResponse
         * @instance
         */
        GetErrorResponse.prototype.text = "";

        /**
         * Encodes the specified GetErrorResponse message. Does not implicitly {@link PB_App.GetErrorResponse.verify|verify} messages.
         * @function encode
         * @memberof PB_App.GetErrorResponse
         * @static
         * @param {PB_App.GetErrorResponse.$Properties} message GetErrorResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetErrorResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.code != null && $Object.hasOwnProperty.call(message, "code") && message.code !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
            if (message.text != null && $Object.hasOwnProperty.call(message, "text") && message.text !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified GetErrorResponse message, length delimited. Does not implicitly {@link PB_App.GetErrorResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_App.GetErrorResponse
         * @static
         * @param {PB_App.GetErrorResponse.$Properties} message GetErrorResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetErrorResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a GetErrorResponse message from the specified reader or buffer.
         * @function decode
         * @memberof PB_App.GetErrorResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_App.GetErrorResponse & PB_App.GetErrorResponse.$Shape} GetErrorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetErrorResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_App.GetErrorResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.code = value;
                        else
                            delete message.code;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.text = value;
                        else
                            delete message.text;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a GetErrorResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_App.GetErrorResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_App.GetErrorResponse & PB_App.GetErrorResponse.$Shape} GetErrorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetErrorResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for GetErrorResponse
         * @function getTypeUrl
         * @memberof PB_App.GetErrorResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        GetErrorResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_App.GetErrorResponse";
        };

        return GetErrorResponse;
    })();

    PB_App.DataExchangeRequest = (function() {

        /**
         * Properties of a DataExchangeRequest.
         * @typedef {Object} PB_App.DataExchangeRequest.$Properties
         * @property {Uint8Array|null} [data] DataExchangeRequest data
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a DataExchangeRequest.
         * @memberof PB_App
         * @interface IDataExchangeRequest
         * @augments PB_App.DataExchangeRequest.$Properties
         * @deprecated Use PB_App.DataExchangeRequest.$Properties instead.
         */

        /**
         * Shape of a DataExchangeRequest.
         * @typedef {PB_App.DataExchangeRequest.$Properties} PB_App.DataExchangeRequest.$Shape
         */

        /**
         * Constructs a new DataExchangeRequest.
         * @memberof PB_App
         * @classdesc Represents a DataExchangeRequest.
         * @constructor
         * @param {PB_App.DataExchangeRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const DataExchangeRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * DataExchangeRequest data.
         * @member {Uint8Array} data
         * @memberof PB_App.DataExchangeRequest
         * @instance
         */
        DataExchangeRequest.prototype.data = $util.newBuffer([]);

        /**
         * Encodes the specified DataExchangeRequest message. Does not implicitly {@link PB_App.DataExchangeRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_App.DataExchangeRequest
         * @static
         * @param {PB_App.DataExchangeRequest.$Properties} message DataExchangeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DataExchangeRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.data != null && $Object.hasOwnProperty.call(message, "data") && message.data.length)
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified DataExchangeRequest message, length delimited. Does not implicitly {@link PB_App.DataExchangeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_App.DataExchangeRequest
         * @static
         * @param {PB_App.DataExchangeRequest.$Properties} message DataExchangeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DataExchangeRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a DataExchangeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_App.DataExchangeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_App.DataExchangeRequest & PB_App.DataExchangeRequest.$Shape} DataExchangeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DataExchangeRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_App.DataExchangeRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.bytes()).length)
                            message.data = value;
                        else
                            delete message.data;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a DataExchangeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_App.DataExchangeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_App.DataExchangeRequest & PB_App.DataExchangeRequest.$Shape} DataExchangeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DataExchangeRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for DataExchangeRequest
         * @function getTypeUrl
         * @memberof PB_App.DataExchangeRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        DataExchangeRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_App.DataExchangeRequest";
        };

        return DataExchangeRequest;
    })();

    return PB_App;
})();

export const PB_Gui = $root.PB_Gui = (() => {

    /**
     * Namespace PB_Gui.
     * @exports PB_Gui
     * @namespace
     */
    const PB_Gui = {};

    /**
     * InputKey enum.
     * @name PB_Gui.InputKey
     * @enum {number}
     * @property {number} UP=0 UP value
     * @property {number} DOWN=1 DOWN value
     * @property {number} RIGHT=2 RIGHT value
     * @property {number} LEFT=3 LEFT value
     * @property {number} OK=4 OK value
     * @property {number} BACK=5 BACK value
     */
    PB_Gui.InputKey = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "UP"] = 0;
        values[valuesById[1] = "DOWN"] = 1;
        values[valuesById[2] = "RIGHT"] = 2;
        values[valuesById[3] = "LEFT"] = 3;
        values[valuesById[4] = "OK"] = 4;
        values[valuesById[5] = "BACK"] = 5;
        return values;
    })();

    /**
     * InputType enum.
     * @name PB_Gui.InputType
     * @enum {number}
     * @property {number} PRESS=0 PRESS value
     * @property {number} RELEASE=1 RELEASE value
     * @property {number} SHORT=2 SHORT value
     * @property {number} LONG=3 LONG value
     * @property {number} REPEAT=4 REPEAT value
     */
    PB_Gui.InputType = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "PRESS"] = 0;
        values[valuesById[1] = "RELEASE"] = 1;
        values[valuesById[2] = "SHORT"] = 2;
        values[valuesById[3] = "LONG"] = 3;
        values[valuesById[4] = "REPEAT"] = 4;
        return values;
    })();

    /**
     * ScreenOrientation enum.
     * @name PB_Gui.ScreenOrientation
     * @enum {number}
     * @property {number} HORIZONTAL=0 HORIZONTAL value
     * @property {number} HORIZONTAL_FLIP=1 HORIZONTAL_FLIP value
     * @property {number} VERTICAL=2 VERTICAL value
     * @property {number} VERTICAL_FLIP=3 VERTICAL_FLIP value
     */
    PB_Gui.ScreenOrientation = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "HORIZONTAL"] = 0;
        values[valuesById[1] = "HORIZONTAL_FLIP"] = 1;
        values[valuesById[2] = "VERTICAL"] = 2;
        values[valuesById[3] = "VERTICAL_FLIP"] = 3;
        return values;
    })();

    PB_Gui.ScreenFrame = (function() {

        /**
         * Properties of a ScreenFrame.
         * @typedef {Object} PB_Gui.ScreenFrame.$Properties
         * @property {Uint8Array|null} [data] ScreenFrame data
         * @property {PB_Gui.ScreenOrientation|null} [orientation] ScreenFrame orientation
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ScreenFrame.
         * @memberof PB_Gui
         * @interface IScreenFrame
         * @augments PB_Gui.ScreenFrame.$Properties
         * @deprecated Use PB_Gui.ScreenFrame.$Properties instead.
         */

        /**
         * Shape of a ScreenFrame.
         * @typedef {PB_Gui.ScreenFrame.$Properties} PB_Gui.ScreenFrame.$Shape
         */

        /**
         * Constructs a new ScreenFrame.
         * @memberof PB_Gui
         * @classdesc Represents a ScreenFrame.
         * @constructor
         * @param {PB_Gui.ScreenFrame.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const ScreenFrame = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ScreenFrame data.
         * @member {Uint8Array} data
         * @memberof PB_Gui.ScreenFrame
         * @instance
         */
        ScreenFrame.prototype.data = $util.newBuffer([]);

        /**
         * ScreenFrame orientation.
         * @member {PB_Gui.ScreenOrientation} orientation
         * @memberof PB_Gui.ScreenFrame
         * @instance
         */
        ScreenFrame.prototype.orientation = 0;

        /**
         * Encodes the specified ScreenFrame message. Does not implicitly {@link PB_Gui.ScreenFrame.verify|verify} messages.
         * @function encode
         * @memberof PB_Gui.ScreenFrame
         * @static
         * @param {PB_Gui.ScreenFrame.$Properties} message ScreenFrame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScreenFrame.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.data != null && $Object.hasOwnProperty.call(message, "data") && message.data.length)
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
            if (message.orientation != null && $Object.hasOwnProperty.call(message, "orientation") && message.orientation !== 0)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.orientation);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ScreenFrame message, length delimited. Does not implicitly {@link PB_Gui.ScreenFrame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Gui.ScreenFrame
         * @static
         * @param {PB_Gui.ScreenFrame.$Properties} message ScreenFrame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ScreenFrame.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a ScreenFrame message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Gui.ScreenFrame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Gui.ScreenFrame & PB_Gui.ScreenFrame.$Shape} ScreenFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScreenFrame.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Gui.ScreenFrame();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.bytes()).length)
                            message.data = value;
                        else
                            delete message.data;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.orientation = value;
                        else
                            delete message.orientation;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a ScreenFrame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Gui.ScreenFrame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Gui.ScreenFrame & PB_Gui.ScreenFrame.$Shape} ScreenFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ScreenFrame.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for ScreenFrame
         * @function getTypeUrl
         * @memberof PB_Gui.ScreenFrame
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ScreenFrame.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gui.ScreenFrame";
        };

        return ScreenFrame;
    })();

    PB_Gui.StartScreenStreamRequest = (function() {

        /**
         * Properties of a StartScreenStreamRequest.
         * @typedef {Object} PB_Gui.StartScreenStreamRequest.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a StartScreenStreamRequest.
         * @memberof PB_Gui
         * @interface IStartScreenStreamRequest
         * @augments PB_Gui.StartScreenStreamRequest.$Properties
         * @deprecated Use PB_Gui.StartScreenStreamRequest.$Properties instead.
         */

        /**
         * Shape of a StartScreenStreamRequest.
         * @typedef {PB_Gui.StartScreenStreamRequest.$Properties} PB_Gui.StartScreenStreamRequest.$Shape
         */

        /**
         * Constructs a new StartScreenStreamRequest.
         * @memberof PB_Gui
         * @classdesc Represents a StartScreenStreamRequest.
         * @constructor
         * @param {PB_Gui.StartScreenStreamRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const StartScreenStreamRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Encodes the specified StartScreenStreamRequest message. Does not implicitly {@link PB_Gui.StartScreenStreamRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_Gui.StartScreenStreamRequest
         * @static
         * @param {PB_Gui.StartScreenStreamRequest.$Properties} message StartScreenStreamRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartScreenStreamRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified StartScreenStreamRequest message, length delimited. Does not implicitly {@link PB_Gui.StartScreenStreamRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Gui.StartScreenStreamRequest
         * @static
         * @param {PB_Gui.StartScreenStreamRequest.$Properties} message StartScreenStreamRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartScreenStreamRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a StartScreenStreamRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Gui.StartScreenStreamRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Gui.StartScreenStreamRequest & PB_Gui.StartScreenStreamRequest.$Shape} StartScreenStreamRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartScreenStreamRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Gui.StartScreenStreamRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                reader.skipType(tag & 7, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a StartScreenStreamRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Gui.StartScreenStreamRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Gui.StartScreenStreamRequest & PB_Gui.StartScreenStreamRequest.$Shape} StartScreenStreamRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartScreenStreamRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for StartScreenStreamRequest
         * @function getTypeUrl
         * @memberof PB_Gui.StartScreenStreamRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        StartScreenStreamRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gui.StartScreenStreamRequest";
        };

        return StartScreenStreamRequest;
    })();

    PB_Gui.StopScreenStreamRequest = (function() {

        /**
         * Properties of a StopScreenStreamRequest.
         * @typedef {Object} PB_Gui.StopScreenStreamRequest.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a StopScreenStreamRequest.
         * @memberof PB_Gui
         * @interface IStopScreenStreamRequest
         * @augments PB_Gui.StopScreenStreamRequest.$Properties
         * @deprecated Use PB_Gui.StopScreenStreamRequest.$Properties instead.
         */

        /**
         * Shape of a StopScreenStreamRequest.
         * @typedef {PB_Gui.StopScreenStreamRequest.$Properties} PB_Gui.StopScreenStreamRequest.$Shape
         */

        /**
         * Constructs a new StopScreenStreamRequest.
         * @memberof PB_Gui
         * @classdesc Represents a StopScreenStreamRequest.
         * @constructor
         * @param {PB_Gui.StopScreenStreamRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const StopScreenStreamRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Encodes the specified StopScreenStreamRequest message. Does not implicitly {@link PB_Gui.StopScreenStreamRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_Gui.StopScreenStreamRequest
         * @static
         * @param {PB_Gui.StopScreenStreamRequest.$Properties} message StopScreenStreamRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopScreenStreamRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified StopScreenStreamRequest message, length delimited. Does not implicitly {@link PB_Gui.StopScreenStreamRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Gui.StopScreenStreamRequest
         * @static
         * @param {PB_Gui.StopScreenStreamRequest.$Properties} message StopScreenStreamRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopScreenStreamRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a StopScreenStreamRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Gui.StopScreenStreamRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Gui.StopScreenStreamRequest & PB_Gui.StopScreenStreamRequest.$Shape} StopScreenStreamRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopScreenStreamRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Gui.StopScreenStreamRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                reader.skipType(tag & 7, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a StopScreenStreamRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Gui.StopScreenStreamRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Gui.StopScreenStreamRequest & PB_Gui.StopScreenStreamRequest.$Shape} StopScreenStreamRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopScreenStreamRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for StopScreenStreamRequest
         * @function getTypeUrl
         * @memberof PB_Gui.StopScreenStreamRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        StopScreenStreamRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gui.StopScreenStreamRequest";
        };

        return StopScreenStreamRequest;
    })();

    PB_Gui.SendInputEventRequest = (function() {

        /**
         * Properties of a SendInputEventRequest.
         * @typedef {Object} PB_Gui.SendInputEventRequest.$Properties
         * @property {PB_Gui.InputKey|null} [key] SendInputEventRequest key
         * @property {PB_Gui.InputType|null} [type] SendInputEventRequest type
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a SendInputEventRequest.
         * @memberof PB_Gui
         * @interface ISendInputEventRequest
         * @augments PB_Gui.SendInputEventRequest.$Properties
         * @deprecated Use PB_Gui.SendInputEventRequest.$Properties instead.
         */

        /**
         * Shape of a SendInputEventRequest.
         * @typedef {PB_Gui.SendInputEventRequest.$Properties} PB_Gui.SendInputEventRequest.$Shape
         */

        /**
         * Constructs a new SendInputEventRequest.
         * @memberof PB_Gui
         * @classdesc Represents a SendInputEventRequest.
         * @constructor
         * @param {PB_Gui.SendInputEventRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const SendInputEventRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * SendInputEventRequest key.
         * @member {PB_Gui.InputKey} key
         * @memberof PB_Gui.SendInputEventRequest
         * @instance
         */
        SendInputEventRequest.prototype.key = 0;

        /**
         * SendInputEventRequest type.
         * @member {PB_Gui.InputType} type
         * @memberof PB_Gui.SendInputEventRequest
         * @instance
         */
        SendInputEventRequest.prototype.type = 0;

        /**
         * Encodes the specified SendInputEventRequest message. Does not implicitly {@link PB_Gui.SendInputEventRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_Gui.SendInputEventRequest
         * @static
         * @param {PB_Gui.SendInputEventRequest.$Properties} message SendInputEventRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendInputEventRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.key != null && $Object.hasOwnProperty.call(message, "key") && message.key !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.key);
            if (message.type != null && $Object.hasOwnProperty.call(message, "type") && message.type !== 0)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified SendInputEventRequest message, length delimited. Does not implicitly {@link PB_Gui.SendInputEventRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Gui.SendInputEventRequest
         * @static
         * @param {PB_Gui.SendInputEventRequest.$Properties} message SendInputEventRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendInputEventRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a SendInputEventRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Gui.SendInputEventRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Gui.SendInputEventRequest & PB_Gui.SendInputEventRequest.$Shape} SendInputEventRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendInputEventRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Gui.SendInputEventRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.key = value;
                        else
                            delete message.key;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.type = value;
                        else
                            delete message.type;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a SendInputEventRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Gui.SendInputEventRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Gui.SendInputEventRequest & PB_Gui.SendInputEventRequest.$Shape} SendInputEventRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendInputEventRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for SendInputEventRequest
         * @function getTypeUrl
         * @memberof PB_Gui.SendInputEventRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        SendInputEventRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gui.SendInputEventRequest";
        };

        return SendInputEventRequest;
    })();

    PB_Gui.StartVirtualDisplayRequest = (function() {

        /**
         * Properties of a StartVirtualDisplayRequest.
         * @typedef {Object} PB_Gui.StartVirtualDisplayRequest.$Properties
         * @property {PB_Gui.ScreenFrame.$Properties|null} [firstFrame] StartVirtualDisplayRequest firstFrame
         * @property {boolean|null} [sendInput] StartVirtualDisplayRequest sendInput
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a StartVirtualDisplayRequest.
         * @memberof PB_Gui
         * @interface IStartVirtualDisplayRequest
         * @augments PB_Gui.StartVirtualDisplayRequest.$Properties
         * @deprecated Use PB_Gui.StartVirtualDisplayRequest.$Properties instead.
         */

        /**
         * Shape of a StartVirtualDisplayRequest.
         * @typedef {PB_Gui.StartVirtualDisplayRequest.$Properties} PB_Gui.StartVirtualDisplayRequest.$Shape
         */

        /**
         * Constructs a new StartVirtualDisplayRequest.
         * @memberof PB_Gui
         * @classdesc Represents a StartVirtualDisplayRequest.
         * @constructor
         * @param {PB_Gui.StartVirtualDisplayRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const StartVirtualDisplayRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * StartVirtualDisplayRequest firstFrame.
         * @member {PB_Gui.ScreenFrame.$Properties|null|undefined} firstFrame
         * @memberof PB_Gui.StartVirtualDisplayRequest
         * @instance
         */
        StartVirtualDisplayRequest.prototype.firstFrame = null;

        /**
         * StartVirtualDisplayRequest sendInput.
         * @member {boolean} sendInput
         * @memberof PB_Gui.StartVirtualDisplayRequest
         * @instance
         */
        StartVirtualDisplayRequest.prototype.sendInput = false;

        /**
         * Encodes the specified StartVirtualDisplayRequest message. Does not implicitly {@link PB_Gui.StartVirtualDisplayRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_Gui.StartVirtualDisplayRequest
         * @static
         * @param {PB_Gui.StartVirtualDisplayRequest.$Properties} message StartVirtualDisplayRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartVirtualDisplayRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.firstFrame != null && $Object.hasOwnProperty.call(message, "firstFrame"))
                $root.PB_Gui.ScreenFrame.encode(message.firstFrame, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.sendInput != null && $Object.hasOwnProperty.call(message, "sendInput") && message.sendInput !== false)
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.sendInput);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified StartVirtualDisplayRequest message, length delimited. Does not implicitly {@link PB_Gui.StartVirtualDisplayRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Gui.StartVirtualDisplayRequest
         * @static
         * @param {PB_Gui.StartVirtualDisplayRequest.$Properties} message StartVirtualDisplayRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartVirtualDisplayRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a StartVirtualDisplayRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Gui.StartVirtualDisplayRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Gui.StartVirtualDisplayRequest & PB_Gui.StartVirtualDisplayRequest.$Shape} StartVirtualDisplayRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartVirtualDisplayRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Gui.StartVirtualDisplayRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.firstFrame = $root.PB_Gui.ScreenFrame.decode(reader, reader.uint32(), $undefined, _depth + 1, message.firstFrame);
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.sendInput = value;
                        else
                            delete message.sendInput;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a StartVirtualDisplayRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Gui.StartVirtualDisplayRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Gui.StartVirtualDisplayRequest & PB_Gui.StartVirtualDisplayRequest.$Shape} StartVirtualDisplayRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartVirtualDisplayRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for StartVirtualDisplayRequest
         * @function getTypeUrl
         * @memberof PB_Gui.StartVirtualDisplayRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        StartVirtualDisplayRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gui.StartVirtualDisplayRequest";
        };

        return StartVirtualDisplayRequest;
    })();

    PB_Gui.StopVirtualDisplayRequest = (function() {

        /**
         * Properties of a StopVirtualDisplayRequest.
         * @typedef {Object} PB_Gui.StopVirtualDisplayRequest.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a StopVirtualDisplayRequest.
         * @memberof PB_Gui
         * @interface IStopVirtualDisplayRequest
         * @augments PB_Gui.StopVirtualDisplayRequest.$Properties
         * @deprecated Use PB_Gui.StopVirtualDisplayRequest.$Properties instead.
         */

        /**
         * Shape of a StopVirtualDisplayRequest.
         * @typedef {PB_Gui.StopVirtualDisplayRequest.$Properties} PB_Gui.StopVirtualDisplayRequest.$Shape
         */

        /**
         * Constructs a new StopVirtualDisplayRequest.
         * @memberof PB_Gui
         * @classdesc Represents a StopVirtualDisplayRequest.
         * @constructor
         * @param {PB_Gui.StopVirtualDisplayRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const StopVirtualDisplayRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Encodes the specified StopVirtualDisplayRequest message. Does not implicitly {@link PB_Gui.StopVirtualDisplayRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_Gui.StopVirtualDisplayRequest
         * @static
         * @param {PB_Gui.StopVirtualDisplayRequest.$Properties} message StopVirtualDisplayRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopVirtualDisplayRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified StopVirtualDisplayRequest message, length delimited. Does not implicitly {@link PB_Gui.StopVirtualDisplayRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Gui.StopVirtualDisplayRequest
         * @static
         * @param {PB_Gui.StopVirtualDisplayRequest.$Properties} message StopVirtualDisplayRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopVirtualDisplayRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a StopVirtualDisplayRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Gui.StopVirtualDisplayRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Gui.StopVirtualDisplayRequest & PB_Gui.StopVirtualDisplayRequest.$Shape} StopVirtualDisplayRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopVirtualDisplayRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Gui.StopVirtualDisplayRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                reader.skipType(tag & 7, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a StopVirtualDisplayRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Gui.StopVirtualDisplayRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Gui.StopVirtualDisplayRequest & PB_Gui.StopVirtualDisplayRequest.$Shape} StopVirtualDisplayRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopVirtualDisplayRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for StopVirtualDisplayRequest
         * @function getTypeUrl
         * @memberof PB_Gui.StopVirtualDisplayRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        StopVirtualDisplayRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gui.StopVirtualDisplayRequest";
        };

        return StopVirtualDisplayRequest;
    })();

    return PB_Gui;
})();

export const PB_Gpio = $root.PB_Gpio = (() => {

    /**
     * Namespace PB_Gpio.
     * @exports PB_Gpio
     * @namespace
     */
    const PB_Gpio = {};

    /**
     * GpioPin enum.
     * @name PB_Gpio.GpioPin
     * @enum {number}
     * @property {number} PC0=0 PC0 value
     * @property {number} PC1=1 PC1 value
     * @property {number} PC3=2 PC3 value
     * @property {number} PB2=3 PB2 value
     * @property {number} PB3=4 PB3 value
     * @property {number} PA4=5 PA4 value
     * @property {number} PA6=6 PA6 value
     * @property {number} PA7=7 PA7 value
     */
    PB_Gpio.GpioPin = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "PC0"] = 0;
        values[valuesById[1] = "PC1"] = 1;
        values[valuesById[2] = "PC3"] = 2;
        values[valuesById[3] = "PB2"] = 3;
        values[valuesById[4] = "PB3"] = 4;
        values[valuesById[5] = "PA4"] = 5;
        values[valuesById[6] = "PA6"] = 6;
        values[valuesById[7] = "PA7"] = 7;
        return values;
    })();

    /**
     * GpioPinMode enum.
     * @name PB_Gpio.GpioPinMode
     * @enum {number}
     * @property {number} OUTPUT=0 OUTPUT value
     * @property {number} INPUT=1 INPUT value
     */
    PB_Gpio.GpioPinMode = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "OUTPUT"] = 0;
        values[valuesById[1] = "INPUT"] = 1;
        return values;
    })();

    /**
     * GpioInputPull enum.
     * @name PB_Gpio.GpioInputPull
     * @enum {number}
     * @property {number} NO=0 NO value
     * @property {number} UP=1 UP value
     * @property {number} DOWN=2 DOWN value
     */
    PB_Gpio.GpioInputPull = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "NO"] = 0;
        values[valuesById[1] = "UP"] = 1;
        values[valuesById[2] = "DOWN"] = 2;
        return values;
    })();

    /**
     * GpioOtgMode enum.
     * @name PB_Gpio.GpioOtgMode
     * @enum {number}
     * @property {number} OFF=0 OFF value
     * @property {number} ON=1 ON value
     */
    PB_Gpio.GpioOtgMode = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "OFF"] = 0;
        values[valuesById[1] = "ON"] = 1;
        return values;
    })();

    PB_Gpio.SetPinMode = (function() {

        /**
         * Properties of a SetPinMode.
         * @typedef {Object} PB_Gpio.SetPinMode.$Properties
         * @property {PB_Gpio.GpioPin|null} [pin] SetPinMode pin
         * @property {PB_Gpio.GpioPinMode|null} [mode] SetPinMode mode
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a SetPinMode.
         * @memberof PB_Gpio
         * @interface ISetPinMode
         * @augments PB_Gpio.SetPinMode.$Properties
         * @deprecated Use PB_Gpio.SetPinMode.$Properties instead.
         */

        /**
         * Shape of a SetPinMode.
         * @typedef {PB_Gpio.SetPinMode.$Properties} PB_Gpio.SetPinMode.$Shape
         */

        /**
         * Constructs a new SetPinMode.
         * @memberof PB_Gpio
         * @classdesc Represents a SetPinMode.
         * @constructor
         * @param {PB_Gpio.SetPinMode.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const SetPinMode = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * SetPinMode pin.
         * @member {PB_Gpio.GpioPin} pin
         * @memberof PB_Gpio.SetPinMode
         * @instance
         */
        SetPinMode.prototype.pin = 0;

        /**
         * SetPinMode mode.
         * @member {PB_Gpio.GpioPinMode} mode
         * @memberof PB_Gpio.SetPinMode
         * @instance
         */
        SetPinMode.prototype.mode = 0;

        /**
         * Encodes the specified SetPinMode message. Does not implicitly {@link PB_Gpio.SetPinMode.verify|verify} messages.
         * @function encode
         * @memberof PB_Gpio.SetPinMode
         * @static
         * @param {PB_Gpio.SetPinMode.$Properties} message SetPinMode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetPinMode.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.pin != null && $Object.hasOwnProperty.call(message, "pin") && message.pin !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pin);
            if (message.mode != null && $Object.hasOwnProperty.call(message, "mode") && message.mode !== 0)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mode);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified SetPinMode message, length delimited. Does not implicitly {@link PB_Gpio.SetPinMode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Gpio.SetPinMode
         * @static
         * @param {PB_Gpio.SetPinMode.$Properties} message SetPinMode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetPinMode.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a SetPinMode message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Gpio.SetPinMode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Gpio.SetPinMode & PB_Gpio.SetPinMode.$Shape} SetPinMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetPinMode.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Gpio.SetPinMode();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.pin = value;
                        else
                            delete message.pin;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.mode = value;
                        else
                            delete message.mode;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a SetPinMode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Gpio.SetPinMode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Gpio.SetPinMode & PB_Gpio.SetPinMode.$Shape} SetPinMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetPinMode.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for SetPinMode
         * @function getTypeUrl
         * @memberof PB_Gpio.SetPinMode
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        SetPinMode.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gpio.SetPinMode";
        };

        return SetPinMode;
    })();

    PB_Gpio.SetInputPull = (function() {

        /**
         * Properties of a SetInputPull.
         * @typedef {Object} PB_Gpio.SetInputPull.$Properties
         * @property {PB_Gpio.GpioPin|null} [pin] SetInputPull pin
         * @property {PB_Gpio.GpioInputPull|null} [pullMode] SetInputPull pullMode
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a SetInputPull.
         * @memberof PB_Gpio
         * @interface ISetInputPull
         * @augments PB_Gpio.SetInputPull.$Properties
         * @deprecated Use PB_Gpio.SetInputPull.$Properties instead.
         */

        /**
         * Shape of a SetInputPull.
         * @typedef {PB_Gpio.SetInputPull.$Properties} PB_Gpio.SetInputPull.$Shape
         */

        /**
         * Constructs a new SetInputPull.
         * @memberof PB_Gpio
         * @classdesc Represents a SetInputPull.
         * @constructor
         * @param {PB_Gpio.SetInputPull.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const SetInputPull = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * SetInputPull pin.
         * @member {PB_Gpio.GpioPin} pin
         * @memberof PB_Gpio.SetInputPull
         * @instance
         */
        SetInputPull.prototype.pin = 0;

        /**
         * SetInputPull pullMode.
         * @member {PB_Gpio.GpioInputPull} pullMode
         * @memberof PB_Gpio.SetInputPull
         * @instance
         */
        SetInputPull.prototype.pullMode = 0;

        /**
         * Encodes the specified SetInputPull message. Does not implicitly {@link PB_Gpio.SetInputPull.verify|verify} messages.
         * @function encode
         * @memberof PB_Gpio.SetInputPull
         * @static
         * @param {PB_Gpio.SetInputPull.$Properties} message SetInputPull message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetInputPull.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.pin != null && $Object.hasOwnProperty.call(message, "pin") && message.pin !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pin);
            if (message.pullMode != null && $Object.hasOwnProperty.call(message, "pullMode") && message.pullMode !== 0)
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pullMode);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified SetInputPull message, length delimited. Does not implicitly {@link PB_Gpio.SetInputPull.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Gpio.SetInputPull
         * @static
         * @param {PB_Gpio.SetInputPull.$Properties} message SetInputPull message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetInputPull.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a SetInputPull message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Gpio.SetInputPull
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Gpio.SetInputPull & PB_Gpio.SetInputPull.$Shape} SetInputPull
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetInputPull.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Gpio.SetInputPull();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.pin = value;
                        else
                            delete message.pin;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.pullMode = value;
                        else
                            delete message.pullMode;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a SetInputPull message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Gpio.SetInputPull
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Gpio.SetInputPull & PB_Gpio.SetInputPull.$Shape} SetInputPull
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetInputPull.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for SetInputPull
         * @function getTypeUrl
         * @memberof PB_Gpio.SetInputPull
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        SetInputPull.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gpio.SetInputPull";
        };

        return SetInputPull;
    })();

    PB_Gpio.GetPinMode = (function() {

        /**
         * Properties of a GetPinMode.
         * @typedef {Object} PB_Gpio.GetPinMode.$Properties
         * @property {PB_Gpio.GpioPin|null} [pin] GetPinMode pin
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a GetPinMode.
         * @memberof PB_Gpio
         * @interface IGetPinMode
         * @augments PB_Gpio.GetPinMode.$Properties
         * @deprecated Use PB_Gpio.GetPinMode.$Properties instead.
         */

        /**
         * Shape of a GetPinMode.
         * @typedef {PB_Gpio.GetPinMode.$Properties} PB_Gpio.GetPinMode.$Shape
         */

        /**
         * Constructs a new GetPinMode.
         * @memberof PB_Gpio
         * @classdesc Represents a GetPinMode.
         * @constructor
         * @param {PB_Gpio.GetPinMode.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const GetPinMode = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * GetPinMode pin.
         * @member {PB_Gpio.GpioPin} pin
         * @memberof PB_Gpio.GetPinMode
         * @instance
         */
        GetPinMode.prototype.pin = 0;

        /**
         * Encodes the specified GetPinMode message. Does not implicitly {@link PB_Gpio.GetPinMode.verify|verify} messages.
         * @function encode
         * @memberof PB_Gpio.GetPinMode
         * @static
         * @param {PB_Gpio.GetPinMode.$Properties} message GetPinMode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPinMode.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.pin != null && $Object.hasOwnProperty.call(message, "pin") && message.pin !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pin);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified GetPinMode message, length delimited. Does not implicitly {@link PB_Gpio.GetPinMode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Gpio.GetPinMode
         * @static
         * @param {PB_Gpio.GetPinMode.$Properties} message GetPinMode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPinMode.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a GetPinMode message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Gpio.GetPinMode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Gpio.GetPinMode & PB_Gpio.GetPinMode.$Shape} GetPinMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPinMode.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Gpio.GetPinMode();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.pin = value;
                        else
                            delete message.pin;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a GetPinMode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Gpio.GetPinMode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Gpio.GetPinMode & PB_Gpio.GetPinMode.$Shape} GetPinMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPinMode.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for GetPinMode
         * @function getTypeUrl
         * @memberof PB_Gpio.GetPinMode
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        GetPinMode.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gpio.GetPinMode";
        };

        return GetPinMode;
    })();

    PB_Gpio.GetPinModeResponse = (function() {

        /**
         * Properties of a GetPinModeResponse.
         * @typedef {Object} PB_Gpio.GetPinModeResponse.$Properties
         * @property {PB_Gpio.GpioPinMode|null} [mode] GetPinModeResponse mode
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a GetPinModeResponse.
         * @memberof PB_Gpio
         * @interface IGetPinModeResponse
         * @augments PB_Gpio.GetPinModeResponse.$Properties
         * @deprecated Use PB_Gpio.GetPinModeResponse.$Properties instead.
         */

        /**
         * Shape of a GetPinModeResponse.
         * @typedef {PB_Gpio.GetPinModeResponse.$Properties} PB_Gpio.GetPinModeResponse.$Shape
         */

        /**
         * Constructs a new GetPinModeResponse.
         * @memberof PB_Gpio
         * @classdesc Represents a GetPinModeResponse.
         * @constructor
         * @param {PB_Gpio.GetPinModeResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const GetPinModeResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * GetPinModeResponse mode.
         * @member {PB_Gpio.GpioPinMode} mode
         * @memberof PB_Gpio.GetPinModeResponse
         * @instance
         */
        GetPinModeResponse.prototype.mode = 0;

        /**
         * Encodes the specified GetPinModeResponse message. Does not implicitly {@link PB_Gpio.GetPinModeResponse.verify|verify} messages.
         * @function encode
         * @memberof PB_Gpio.GetPinModeResponse
         * @static
         * @param {PB_Gpio.GetPinModeResponse.$Properties} message GetPinModeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPinModeResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.mode != null && $Object.hasOwnProperty.call(message, "mode") && message.mode !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mode);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified GetPinModeResponse message, length delimited. Does not implicitly {@link PB_Gpio.GetPinModeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Gpio.GetPinModeResponse
         * @static
         * @param {PB_Gpio.GetPinModeResponse.$Properties} message GetPinModeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPinModeResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a GetPinModeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Gpio.GetPinModeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Gpio.GetPinModeResponse & PB_Gpio.GetPinModeResponse.$Shape} GetPinModeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPinModeResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Gpio.GetPinModeResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.mode = value;
                        else
                            delete message.mode;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a GetPinModeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Gpio.GetPinModeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Gpio.GetPinModeResponse & PB_Gpio.GetPinModeResponse.$Shape} GetPinModeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPinModeResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for GetPinModeResponse
         * @function getTypeUrl
         * @memberof PB_Gpio.GetPinModeResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        GetPinModeResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gpio.GetPinModeResponse";
        };

        return GetPinModeResponse;
    })();

    PB_Gpio.ReadPin = (function() {

        /**
         * Properties of a ReadPin.
         * @typedef {Object} PB_Gpio.ReadPin.$Properties
         * @property {PB_Gpio.GpioPin|null} [pin] ReadPin pin
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ReadPin.
         * @memberof PB_Gpio
         * @interface IReadPin
         * @augments PB_Gpio.ReadPin.$Properties
         * @deprecated Use PB_Gpio.ReadPin.$Properties instead.
         */

        /**
         * Shape of a ReadPin.
         * @typedef {PB_Gpio.ReadPin.$Properties} PB_Gpio.ReadPin.$Shape
         */

        /**
         * Constructs a new ReadPin.
         * @memberof PB_Gpio
         * @classdesc Represents a ReadPin.
         * @constructor
         * @param {PB_Gpio.ReadPin.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const ReadPin = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ReadPin pin.
         * @member {PB_Gpio.GpioPin} pin
         * @memberof PB_Gpio.ReadPin
         * @instance
         */
        ReadPin.prototype.pin = 0;

        /**
         * Encodes the specified ReadPin message. Does not implicitly {@link PB_Gpio.ReadPin.verify|verify} messages.
         * @function encode
         * @memberof PB_Gpio.ReadPin
         * @static
         * @param {PB_Gpio.ReadPin.$Properties} message ReadPin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadPin.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.pin != null && $Object.hasOwnProperty.call(message, "pin") && message.pin !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pin);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ReadPin message, length delimited. Does not implicitly {@link PB_Gpio.ReadPin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Gpio.ReadPin
         * @static
         * @param {PB_Gpio.ReadPin.$Properties} message ReadPin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadPin.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a ReadPin message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Gpio.ReadPin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Gpio.ReadPin & PB_Gpio.ReadPin.$Shape} ReadPin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadPin.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Gpio.ReadPin();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.pin = value;
                        else
                            delete message.pin;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a ReadPin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Gpio.ReadPin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Gpio.ReadPin & PB_Gpio.ReadPin.$Shape} ReadPin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadPin.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for ReadPin
         * @function getTypeUrl
         * @memberof PB_Gpio.ReadPin
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ReadPin.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gpio.ReadPin";
        };

        return ReadPin;
    })();

    PB_Gpio.ReadPinResponse = (function() {

        /**
         * Properties of a ReadPinResponse.
         * @typedef {Object} PB_Gpio.ReadPinResponse.$Properties
         * @property {number|null} [value] ReadPinResponse value
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ReadPinResponse.
         * @memberof PB_Gpio
         * @interface IReadPinResponse
         * @augments PB_Gpio.ReadPinResponse.$Properties
         * @deprecated Use PB_Gpio.ReadPinResponse.$Properties instead.
         */

        /**
         * Shape of a ReadPinResponse.
         * @typedef {PB_Gpio.ReadPinResponse.$Properties} PB_Gpio.ReadPinResponse.$Shape
         */

        /**
         * Constructs a new ReadPinResponse.
         * @memberof PB_Gpio
         * @classdesc Represents a ReadPinResponse.
         * @constructor
         * @param {PB_Gpio.ReadPinResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const ReadPinResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ReadPinResponse value.
         * @member {number} value
         * @memberof PB_Gpio.ReadPinResponse
         * @instance
         */
        ReadPinResponse.prototype.value = 0;

        /**
         * Encodes the specified ReadPinResponse message. Does not implicitly {@link PB_Gpio.ReadPinResponse.verify|verify} messages.
         * @function encode
         * @memberof PB_Gpio.ReadPinResponse
         * @static
         * @param {PB_Gpio.ReadPinResponse.$Properties} message ReadPinResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadPinResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.value != null && $Object.hasOwnProperty.call(message, "value") && message.value !== 0)
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.value);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ReadPinResponse message, length delimited. Does not implicitly {@link PB_Gpio.ReadPinResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Gpio.ReadPinResponse
         * @static
         * @param {PB_Gpio.ReadPinResponse.$Properties} message ReadPinResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadPinResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a ReadPinResponse message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Gpio.ReadPinResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Gpio.ReadPinResponse & PB_Gpio.ReadPinResponse.$Shape} ReadPinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadPinResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Gpio.ReadPinResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.value = value;
                        else
                            delete message.value;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a ReadPinResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Gpio.ReadPinResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Gpio.ReadPinResponse & PB_Gpio.ReadPinResponse.$Shape} ReadPinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadPinResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for ReadPinResponse
         * @function getTypeUrl
         * @memberof PB_Gpio.ReadPinResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ReadPinResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gpio.ReadPinResponse";
        };

        return ReadPinResponse;
    })();

    PB_Gpio.WritePin = (function() {

        /**
         * Properties of a WritePin.
         * @typedef {Object} PB_Gpio.WritePin.$Properties
         * @property {PB_Gpio.GpioPin|null} [pin] WritePin pin
         * @property {number|null} [value] WritePin value
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a WritePin.
         * @memberof PB_Gpio
         * @interface IWritePin
         * @augments PB_Gpio.WritePin.$Properties
         * @deprecated Use PB_Gpio.WritePin.$Properties instead.
         */

        /**
         * Shape of a WritePin.
         * @typedef {PB_Gpio.WritePin.$Properties} PB_Gpio.WritePin.$Shape
         */

        /**
         * Constructs a new WritePin.
         * @memberof PB_Gpio
         * @classdesc Represents a WritePin.
         * @constructor
         * @param {PB_Gpio.WritePin.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const WritePin = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * WritePin pin.
         * @member {PB_Gpio.GpioPin} pin
         * @memberof PB_Gpio.WritePin
         * @instance
         */
        WritePin.prototype.pin = 0;

        /**
         * WritePin value.
         * @member {number} value
         * @memberof PB_Gpio.WritePin
         * @instance
         */
        WritePin.prototype.value = 0;

        /**
         * Encodes the specified WritePin message. Does not implicitly {@link PB_Gpio.WritePin.verify|verify} messages.
         * @function encode
         * @memberof PB_Gpio.WritePin
         * @static
         * @param {PB_Gpio.WritePin.$Properties} message WritePin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WritePin.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.pin != null && $Object.hasOwnProperty.call(message, "pin") && message.pin !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pin);
            if (message.value != null && $Object.hasOwnProperty.call(message, "value") && message.value !== 0)
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.value);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified WritePin message, length delimited. Does not implicitly {@link PB_Gpio.WritePin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Gpio.WritePin
         * @static
         * @param {PB_Gpio.WritePin.$Properties} message WritePin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WritePin.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a WritePin message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Gpio.WritePin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Gpio.WritePin & PB_Gpio.WritePin.$Shape} WritePin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WritePin.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Gpio.WritePin();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.pin = value;
                        else
                            delete message.pin;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.value = value;
                        else
                            delete message.value;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a WritePin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Gpio.WritePin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Gpio.WritePin & PB_Gpio.WritePin.$Shape} WritePin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WritePin.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for WritePin
         * @function getTypeUrl
         * @memberof PB_Gpio.WritePin
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        WritePin.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gpio.WritePin";
        };

        return WritePin;
    })();

    PB_Gpio.GetOtgMode = (function() {

        /**
         * Properties of a GetOtgMode.
         * @typedef {Object} PB_Gpio.GetOtgMode.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a GetOtgMode.
         * @memberof PB_Gpio
         * @interface IGetOtgMode
         * @augments PB_Gpio.GetOtgMode.$Properties
         * @deprecated Use PB_Gpio.GetOtgMode.$Properties instead.
         */

        /**
         * Shape of a GetOtgMode.
         * @typedef {PB_Gpio.GetOtgMode.$Properties} PB_Gpio.GetOtgMode.$Shape
         */

        /**
         * Constructs a new GetOtgMode.
         * @memberof PB_Gpio
         * @classdesc Represents a GetOtgMode.
         * @constructor
         * @param {PB_Gpio.GetOtgMode.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const GetOtgMode = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Encodes the specified GetOtgMode message. Does not implicitly {@link PB_Gpio.GetOtgMode.verify|verify} messages.
         * @function encode
         * @memberof PB_Gpio.GetOtgMode
         * @static
         * @param {PB_Gpio.GetOtgMode.$Properties} message GetOtgMode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetOtgMode.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified GetOtgMode message, length delimited. Does not implicitly {@link PB_Gpio.GetOtgMode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Gpio.GetOtgMode
         * @static
         * @param {PB_Gpio.GetOtgMode.$Properties} message GetOtgMode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetOtgMode.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a GetOtgMode message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Gpio.GetOtgMode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Gpio.GetOtgMode & PB_Gpio.GetOtgMode.$Shape} GetOtgMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetOtgMode.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Gpio.GetOtgMode();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                reader.skipType(tag & 7, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a GetOtgMode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Gpio.GetOtgMode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Gpio.GetOtgMode & PB_Gpio.GetOtgMode.$Shape} GetOtgMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetOtgMode.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for GetOtgMode
         * @function getTypeUrl
         * @memberof PB_Gpio.GetOtgMode
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        GetOtgMode.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gpio.GetOtgMode";
        };

        return GetOtgMode;
    })();

    PB_Gpio.GetOtgModeResponse = (function() {

        /**
         * Properties of a GetOtgModeResponse.
         * @typedef {Object} PB_Gpio.GetOtgModeResponse.$Properties
         * @property {PB_Gpio.GpioOtgMode|null} [mode] GetOtgModeResponse mode
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a GetOtgModeResponse.
         * @memberof PB_Gpio
         * @interface IGetOtgModeResponse
         * @augments PB_Gpio.GetOtgModeResponse.$Properties
         * @deprecated Use PB_Gpio.GetOtgModeResponse.$Properties instead.
         */

        /**
         * Shape of a GetOtgModeResponse.
         * @typedef {PB_Gpio.GetOtgModeResponse.$Properties} PB_Gpio.GetOtgModeResponse.$Shape
         */

        /**
         * Constructs a new GetOtgModeResponse.
         * @memberof PB_Gpio
         * @classdesc Represents a GetOtgModeResponse.
         * @constructor
         * @param {PB_Gpio.GetOtgModeResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const GetOtgModeResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * GetOtgModeResponse mode.
         * @member {PB_Gpio.GpioOtgMode} mode
         * @memberof PB_Gpio.GetOtgModeResponse
         * @instance
         */
        GetOtgModeResponse.prototype.mode = 0;

        /**
         * Encodes the specified GetOtgModeResponse message. Does not implicitly {@link PB_Gpio.GetOtgModeResponse.verify|verify} messages.
         * @function encode
         * @memberof PB_Gpio.GetOtgModeResponse
         * @static
         * @param {PB_Gpio.GetOtgModeResponse.$Properties} message GetOtgModeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetOtgModeResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.mode != null && $Object.hasOwnProperty.call(message, "mode") && message.mode !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mode);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified GetOtgModeResponse message, length delimited. Does not implicitly {@link PB_Gpio.GetOtgModeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Gpio.GetOtgModeResponse
         * @static
         * @param {PB_Gpio.GetOtgModeResponse.$Properties} message GetOtgModeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetOtgModeResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a GetOtgModeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Gpio.GetOtgModeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Gpio.GetOtgModeResponse & PB_Gpio.GetOtgModeResponse.$Shape} GetOtgModeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetOtgModeResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Gpio.GetOtgModeResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.mode = value;
                        else
                            delete message.mode;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a GetOtgModeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Gpio.GetOtgModeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Gpio.GetOtgModeResponse & PB_Gpio.GetOtgModeResponse.$Shape} GetOtgModeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetOtgModeResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for GetOtgModeResponse
         * @function getTypeUrl
         * @memberof PB_Gpio.GetOtgModeResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        GetOtgModeResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gpio.GetOtgModeResponse";
        };

        return GetOtgModeResponse;
    })();

    PB_Gpio.SetOtgMode = (function() {

        /**
         * Properties of a SetOtgMode.
         * @typedef {Object} PB_Gpio.SetOtgMode.$Properties
         * @property {PB_Gpio.GpioOtgMode|null} [mode] SetOtgMode mode
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a SetOtgMode.
         * @memberof PB_Gpio
         * @interface ISetOtgMode
         * @augments PB_Gpio.SetOtgMode.$Properties
         * @deprecated Use PB_Gpio.SetOtgMode.$Properties instead.
         */

        /**
         * Shape of a SetOtgMode.
         * @typedef {PB_Gpio.SetOtgMode.$Properties} PB_Gpio.SetOtgMode.$Shape
         */

        /**
         * Constructs a new SetOtgMode.
         * @memberof PB_Gpio
         * @classdesc Represents a SetOtgMode.
         * @constructor
         * @param {PB_Gpio.SetOtgMode.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const SetOtgMode = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * SetOtgMode mode.
         * @member {PB_Gpio.GpioOtgMode} mode
         * @memberof PB_Gpio.SetOtgMode
         * @instance
         */
        SetOtgMode.prototype.mode = 0;

        /**
         * Encodes the specified SetOtgMode message. Does not implicitly {@link PB_Gpio.SetOtgMode.verify|verify} messages.
         * @function encode
         * @memberof PB_Gpio.SetOtgMode
         * @static
         * @param {PB_Gpio.SetOtgMode.$Properties} message SetOtgMode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetOtgMode.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.mode != null && $Object.hasOwnProperty.call(message, "mode") && message.mode !== 0)
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mode);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified SetOtgMode message, length delimited. Does not implicitly {@link PB_Gpio.SetOtgMode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Gpio.SetOtgMode
         * @static
         * @param {PB_Gpio.SetOtgMode.$Properties} message SetOtgMode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetOtgMode.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a SetOtgMode message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Gpio.SetOtgMode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Gpio.SetOtgMode & PB_Gpio.SetOtgMode.$Shape} SetOtgMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetOtgMode.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Gpio.SetOtgMode();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.mode = value;
                        else
                            delete message.mode;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a SetOtgMode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Gpio.SetOtgMode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Gpio.SetOtgMode & PB_Gpio.SetOtgMode.$Shape} SetOtgMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetOtgMode.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for SetOtgMode
         * @function getTypeUrl
         * @memberof PB_Gpio.SetOtgMode
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        SetOtgMode.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gpio.SetOtgMode";
        };

        return SetOtgMode;
    })();

    return PB_Gpio;
})();

export const PB_Property = $root.PB_Property = (() => {

    /**
     * Namespace PB_Property.
     * @exports PB_Property
     * @namespace
     */
    const PB_Property = {};

    PB_Property.GetRequest = (function() {

        /**
         * Properties of a GetRequest.
         * @typedef {Object} PB_Property.GetRequest.$Properties
         * @property {string|null} [key] GetRequest key
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a GetRequest.
         * @memberof PB_Property
         * @interface IGetRequest
         * @augments PB_Property.GetRequest.$Properties
         * @deprecated Use PB_Property.GetRequest.$Properties instead.
         */

        /**
         * Shape of a GetRequest.
         * @typedef {PB_Property.GetRequest.$Properties} PB_Property.GetRequest.$Shape
         */

        /**
         * Constructs a new GetRequest.
         * @memberof PB_Property
         * @classdesc Represents a GetRequest.
         * @constructor
         * @param {PB_Property.GetRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const GetRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * GetRequest key.
         * @member {string} key
         * @memberof PB_Property.GetRequest
         * @instance
         */
        GetRequest.prototype.key = "";

        /**
         * Encodes the specified GetRequest message. Does not implicitly {@link PB_Property.GetRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_Property.GetRequest
         * @static
         * @param {PB_Property.GetRequest.$Properties} message GetRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.key != null && $Object.hasOwnProperty.call(message, "key") && message.key !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified GetRequest message, length delimited. Does not implicitly {@link PB_Property.GetRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Property.GetRequest
         * @static
         * @param {PB_Property.GetRequest.$Properties} message GetRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a GetRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Property.GetRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Property.GetRequest & PB_Property.GetRequest.$Shape} GetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Property.GetRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.key = value;
                        else
                            delete message.key;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a GetRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Property.GetRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Property.GetRequest & PB_Property.GetRequest.$Shape} GetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for GetRequest
         * @function getTypeUrl
         * @memberof PB_Property.GetRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        GetRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Property.GetRequest";
        };

        return GetRequest;
    })();

    PB_Property.GetResponse = (function() {

        /**
         * Properties of a GetResponse.
         * @typedef {Object} PB_Property.GetResponse.$Properties
         * @property {string|null} [key] GetResponse key
         * @property {string|null} [value] GetResponse value
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a GetResponse.
         * @memberof PB_Property
         * @interface IGetResponse
         * @augments PB_Property.GetResponse.$Properties
         * @deprecated Use PB_Property.GetResponse.$Properties instead.
         */

        /**
         * Shape of a GetResponse.
         * @typedef {PB_Property.GetResponse.$Properties} PB_Property.GetResponse.$Shape
         */

        /**
         * Constructs a new GetResponse.
         * @memberof PB_Property
         * @classdesc Represents a GetResponse.
         * @constructor
         * @param {PB_Property.GetResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const GetResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * GetResponse key.
         * @member {string} key
         * @memberof PB_Property.GetResponse
         * @instance
         */
        GetResponse.prototype.key = "";

        /**
         * GetResponse value.
         * @member {string} value
         * @memberof PB_Property.GetResponse
         * @instance
         */
        GetResponse.prototype.value = "";

        /**
         * Encodes the specified GetResponse message. Does not implicitly {@link PB_Property.GetResponse.verify|verify} messages.
         * @function encode
         * @memberof PB_Property.GetResponse
         * @static
         * @param {PB_Property.GetResponse.$Properties} message GetResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.key != null && $Object.hasOwnProperty.call(message, "key") && message.key !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.value != null && $Object.hasOwnProperty.call(message, "value") && message.value !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified GetResponse message, length delimited. Does not implicitly {@link PB_Property.GetResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Property.GetResponse
         * @static
         * @param {PB_Property.GetResponse.$Properties} message GetResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a GetResponse message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Property.GetResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Property.GetResponse & PB_Property.GetResponse.$Shape} GetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Property.GetResponse();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.key = value;
                        else
                            delete message.key;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.value = value;
                        else
                            delete message.value;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a GetResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Property.GetResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Property.GetResponse & PB_Property.GetResponse.$Shape} GetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for GetResponse
         * @function getTypeUrl
         * @memberof PB_Property.GetResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        GetResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Property.GetResponse";
        };

        return GetResponse;
    })();

    return PB_Property;
})();

export const PB_Desktop = $root.PB_Desktop = (() => {

    /**
     * Namespace PB_Desktop.
     * @exports PB_Desktop
     * @namespace
     */
    const PB_Desktop = {};

    PB_Desktop.IsLockedRequest = (function() {

        /**
         * Properties of an IsLockedRequest.
         * @typedef {Object} PB_Desktop.IsLockedRequest.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an IsLockedRequest.
         * @memberof PB_Desktop
         * @interface IIsLockedRequest
         * @augments PB_Desktop.IsLockedRequest.$Properties
         * @deprecated Use PB_Desktop.IsLockedRequest.$Properties instead.
         */

        /**
         * Shape of an IsLockedRequest.
         * @typedef {PB_Desktop.IsLockedRequest.$Properties} PB_Desktop.IsLockedRequest.$Shape
         */

        /**
         * Constructs a new IsLockedRequest.
         * @memberof PB_Desktop
         * @classdesc Represents an IsLockedRequest.
         * @constructor
         * @param {PB_Desktop.IsLockedRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const IsLockedRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Encodes the specified IsLockedRequest message. Does not implicitly {@link PB_Desktop.IsLockedRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_Desktop.IsLockedRequest
         * @static
         * @param {PB_Desktop.IsLockedRequest.$Properties} message IsLockedRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IsLockedRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified IsLockedRequest message, length delimited. Does not implicitly {@link PB_Desktop.IsLockedRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Desktop.IsLockedRequest
         * @static
         * @param {PB_Desktop.IsLockedRequest.$Properties} message IsLockedRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IsLockedRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes an IsLockedRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Desktop.IsLockedRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Desktop.IsLockedRequest & PB_Desktop.IsLockedRequest.$Shape} IsLockedRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IsLockedRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Desktop.IsLockedRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                reader.skipType(tag & 7, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an IsLockedRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Desktop.IsLockedRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Desktop.IsLockedRequest & PB_Desktop.IsLockedRequest.$Shape} IsLockedRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IsLockedRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for IsLockedRequest
         * @function getTypeUrl
         * @memberof PB_Desktop.IsLockedRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        IsLockedRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Desktop.IsLockedRequest";
        };

        return IsLockedRequest;
    })();

    PB_Desktop.UnlockRequest = (function() {

        /**
         * Properties of an UnlockRequest.
         * @typedef {Object} PB_Desktop.UnlockRequest.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an UnlockRequest.
         * @memberof PB_Desktop
         * @interface IUnlockRequest
         * @augments PB_Desktop.UnlockRequest.$Properties
         * @deprecated Use PB_Desktop.UnlockRequest.$Properties instead.
         */

        /**
         * Shape of an UnlockRequest.
         * @typedef {PB_Desktop.UnlockRequest.$Properties} PB_Desktop.UnlockRequest.$Shape
         */

        /**
         * Constructs a new UnlockRequest.
         * @memberof PB_Desktop
         * @classdesc Represents an UnlockRequest.
         * @constructor
         * @param {PB_Desktop.UnlockRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const UnlockRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Encodes the specified UnlockRequest message. Does not implicitly {@link PB_Desktop.UnlockRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_Desktop.UnlockRequest
         * @static
         * @param {PB_Desktop.UnlockRequest.$Properties} message UnlockRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnlockRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified UnlockRequest message, length delimited. Does not implicitly {@link PB_Desktop.UnlockRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Desktop.UnlockRequest
         * @static
         * @param {PB_Desktop.UnlockRequest.$Properties} message UnlockRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnlockRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes an UnlockRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Desktop.UnlockRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Desktop.UnlockRequest & PB_Desktop.UnlockRequest.$Shape} UnlockRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnlockRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Desktop.UnlockRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                reader.skipType(tag & 7, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an UnlockRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Desktop.UnlockRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Desktop.UnlockRequest & PB_Desktop.UnlockRequest.$Shape} UnlockRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnlockRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for UnlockRequest
         * @function getTypeUrl
         * @memberof PB_Desktop.UnlockRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        UnlockRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Desktop.UnlockRequest";
        };

        return UnlockRequest;
    })();

    PB_Desktop.StatusSubscribeRequest = (function() {

        /**
         * Properties of a StatusSubscribeRequest.
         * @typedef {Object} PB_Desktop.StatusSubscribeRequest.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a StatusSubscribeRequest.
         * @memberof PB_Desktop
         * @interface IStatusSubscribeRequest
         * @augments PB_Desktop.StatusSubscribeRequest.$Properties
         * @deprecated Use PB_Desktop.StatusSubscribeRequest.$Properties instead.
         */

        /**
         * Shape of a StatusSubscribeRequest.
         * @typedef {PB_Desktop.StatusSubscribeRequest.$Properties} PB_Desktop.StatusSubscribeRequest.$Shape
         */

        /**
         * Constructs a new StatusSubscribeRequest.
         * @memberof PB_Desktop
         * @classdesc Represents a StatusSubscribeRequest.
         * @constructor
         * @param {PB_Desktop.StatusSubscribeRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const StatusSubscribeRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Encodes the specified StatusSubscribeRequest message. Does not implicitly {@link PB_Desktop.StatusSubscribeRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_Desktop.StatusSubscribeRequest
         * @static
         * @param {PB_Desktop.StatusSubscribeRequest.$Properties} message StatusSubscribeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StatusSubscribeRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified StatusSubscribeRequest message, length delimited. Does not implicitly {@link PB_Desktop.StatusSubscribeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Desktop.StatusSubscribeRequest
         * @static
         * @param {PB_Desktop.StatusSubscribeRequest.$Properties} message StatusSubscribeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StatusSubscribeRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a StatusSubscribeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Desktop.StatusSubscribeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Desktop.StatusSubscribeRequest & PB_Desktop.StatusSubscribeRequest.$Shape} StatusSubscribeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StatusSubscribeRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Desktop.StatusSubscribeRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                reader.skipType(tag & 7, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a StatusSubscribeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Desktop.StatusSubscribeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Desktop.StatusSubscribeRequest & PB_Desktop.StatusSubscribeRequest.$Shape} StatusSubscribeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StatusSubscribeRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for StatusSubscribeRequest
         * @function getTypeUrl
         * @memberof PB_Desktop.StatusSubscribeRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        StatusSubscribeRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Desktop.StatusSubscribeRequest";
        };

        return StatusSubscribeRequest;
    })();

    PB_Desktop.StatusUnsubscribeRequest = (function() {

        /**
         * Properties of a StatusUnsubscribeRequest.
         * @typedef {Object} PB_Desktop.StatusUnsubscribeRequest.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a StatusUnsubscribeRequest.
         * @memberof PB_Desktop
         * @interface IStatusUnsubscribeRequest
         * @augments PB_Desktop.StatusUnsubscribeRequest.$Properties
         * @deprecated Use PB_Desktop.StatusUnsubscribeRequest.$Properties instead.
         */

        /**
         * Shape of a StatusUnsubscribeRequest.
         * @typedef {PB_Desktop.StatusUnsubscribeRequest.$Properties} PB_Desktop.StatusUnsubscribeRequest.$Shape
         */

        /**
         * Constructs a new StatusUnsubscribeRequest.
         * @memberof PB_Desktop
         * @classdesc Represents a StatusUnsubscribeRequest.
         * @constructor
         * @param {PB_Desktop.StatusUnsubscribeRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const StatusUnsubscribeRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Encodes the specified StatusUnsubscribeRequest message. Does not implicitly {@link PB_Desktop.StatusUnsubscribeRequest.verify|verify} messages.
         * @function encode
         * @memberof PB_Desktop.StatusUnsubscribeRequest
         * @static
         * @param {PB_Desktop.StatusUnsubscribeRequest.$Properties} message StatusUnsubscribeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StatusUnsubscribeRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified StatusUnsubscribeRequest message, length delimited. Does not implicitly {@link PB_Desktop.StatusUnsubscribeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Desktop.StatusUnsubscribeRequest
         * @static
         * @param {PB_Desktop.StatusUnsubscribeRequest.$Properties} message StatusUnsubscribeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StatusUnsubscribeRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a StatusUnsubscribeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Desktop.StatusUnsubscribeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Desktop.StatusUnsubscribeRequest & PB_Desktop.StatusUnsubscribeRequest.$Shape} StatusUnsubscribeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StatusUnsubscribeRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Desktop.StatusUnsubscribeRequest();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                reader.skipType(tag & 7, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a StatusUnsubscribeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Desktop.StatusUnsubscribeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Desktop.StatusUnsubscribeRequest & PB_Desktop.StatusUnsubscribeRequest.$Shape} StatusUnsubscribeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StatusUnsubscribeRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for StatusUnsubscribeRequest
         * @function getTypeUrl
         * @memberof PB_Desktop.StatusUnsubscribeRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        StatusUnsubscribeRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Desktop.StatusUnsubscribeRequest";
        };

        return StatusUnsubscribeRequest;
    })();

    PB_Desktop.Status = (function() {

        /**
         * Properties of a Status.
         * @typedef {Object} PB_Desktop.Status.$Properties
         * @property {boolean|null} [locked] Status locked
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Status.
         * @memberof PB_Desktop
         * @interface IStatus
         * @augments PB_Desktop.Status.$Properties
         * @deprecated Use PB_Desktop.Status.$Properties instead.
         */

        /**
         * Shape of a Status.
         * @typedef {PB_Desktop.Status.$Properties} PB_Desktop.Status.$Shape
         */

        /**
         * Constructs a new Status.
         * @memberof PB_Desktop
         * @classdesc Represents a Status.
         * @constructor
         * @param {PB_Desktop.Status.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        const Status = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * Status locked.
         * @member {boolean} locked
         * @memberof PB_Desktop.Status
         * @instance
         */
        Status.prototype.locked = false;

        /**
         * Encodes the specified Status message. Does not implicitly {@link PB_Desktop.Status.verify|verify} messages.
         * @function encode
         * @memberof PB_Desktop.Status
         * @static
         * @param {PB_Desktop.Status.$Properties} message Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Status.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.locked != null && $Object.hasOwnProperty.call(message, "locked") && message.locked !== false)
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.locked);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Status message, length delimited. Does not implicitly {@link PB_Desktop.Status.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PB_Desktop.Status
         * @static
         * @param {PB_Desktop.Status.$Properties} message Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Status.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a Status message from the specified reader or buffer.
         * @function decode
         * @memberof PB_Desktop.Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PB_Desktop.Status & PB_Desktop.Status.$Shape} Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Status.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            let end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.PB_Desktop.Status();
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.locked = value;
                        else
                            delete message.locked;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a Status message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PB_Desktop.Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PB_Desktop.Status & PB_Desktop.Status.$Shape} Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Status.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Gets the type url for Status
         * @function getTypeUrl
         * @memberof PB_Desktop.Status
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Status.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Desktop.Status";
        };

        return Status;
    })();

    return PB_Desktop;
})();

export {
  $root as default
};
