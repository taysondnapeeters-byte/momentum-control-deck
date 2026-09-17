/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $RangeError = $util.global.RangeError;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const PB = $root.PB = (() => {

    const PB = {};

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

        const Empty = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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

        Empty.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        Empty.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Empty.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB.Empty";
        };

        return Empty;
    })();

    PB.StopSession = (function() {

        const StopSession = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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

        StopSession.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        StopSession.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        StopSession.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB.StopSession";
        };

        return StopSession;
    })();

    PB.Main = (function() {

        const Main = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        Main.prototype.commandId = 0;
        Main.prototype.commandStatus = 0;
        Main.prototype.hasNext = false;
        Main.prototype.empty = null;
        Main.prototype.stopSession = null;
        Main.prototype.systemPingRequest = null;
        Main.prototype.systemPingResponse = null;
        Main.prototype.systemRebootRequest = null;
        Main.prototype.systemDeviceInfoRequest = null;
        Main.prototype.systemDeviceInfoResponse = null;
        Main.prototype.systemFactoryResetRequest = null;
        Main.prototype.systemGetDatetimeRequest = null;
        Main.prototype.systemGetDatetimeResponse = null;
        Main.prototype.systemSetDatetimeRequest = null;
        Main.prototype.systemPlayAudiovisualAlertRequest = null;
        Main.prototype.systemProtobufVersionRequest = null;
        Main.prototype.systemProtobufVersionResponse = null;
        Main.prototype.systemUpdateRequest = null;
        Main.prototype.systemUpdateResponse = null;
        Main.prototype.systemPowerInfoRequest = null;
        Main.prototype.systemPowerInfoResponse = null;
        Main.prototype.storageInfoRequest = null;
        Main.prototype.storageInfoResponse = null;
        Main.prototype.storageTimestampRequest = null;
        Main.prototype.storageTimestampResponse = null;
        Main.prototype.storageStatRequest = null;
        Main.prototype.storageStatResponse = null;
        Main.prototype.storageListRequest = null;
        Main.prototype.storageListResponse = null;
        Main.prototype.storageReadRequest = null;
        Main.prototype.storageReadResponse = null;
        Main.prototype.storageWriteRequest = null;
        Main.prototype.storageDeleteRequest = null;
        Main.prototype.storageMkdirRequest = null;
        Main.prototype.storageMd5sumRequest = null;
        Main.prototype.storageMd5sumResponse = null;
        Main.prototype.storageRenameRequest = null;
        Main.prototype.storageBackupCreateRequest = null;
        Main.prototype.storageBackupRestoreRequest = null;
        Main.prototype.storageTarExtractRequest = null;
        Main.prototype.appStartRequest = null;
        Main.prototype.appLockStatusRequest = null;
        Main.prototype.appLockStatusResponse = null;
        Main.prototype.appExitRequest = null;
        Main.prototype.appLoadFileRequest = null;
        Main.prototype.appButtonPressRequest = null;
        Main.prototype.appButtonReleaseRequest = null;
        Main.prototype.appButtonPressReleaseRequest = null;
        Main.prototype.appGetErrorRequest = null;
        Main.prototype.appGetErrorResponse = null;
        Main.prototype.appDataExchangeRequest = null;
        Main.prototype.guiStartScreenStreamRequest = null;
        Main.prototype.guiStopScreenStreamRequest = null;
        Main.prototype.guiScreenFrame = null;
        Main.prototype.guiSendInputEventRequest = null;
        Main.prototype.guiStartVirtualDisplayRequest = null;
        Main.prototype.guiStopVirtualDisplayRequest = null;
        Main.prototype.gpioSetPinMode = null;
        Main.prototype.gpioSetInputPull = null;
        Main.prototype.gpioGetPinMode = null;
        Main.prototype.gpioGetPinModeResponse = null;
        Main.prototype.gpioReadPin = null;
        Main.prototype.gpioReadPinResponse = null;
        Main.prototype.gpioWritePin = null;
        Main.prototype.gpioGetOtgMode = null;
        Main.prototype.gpioGetOtgModeResponse = null;
        Main.prototype.gpioSetOtgMode = null;
        Main.prototype.appStateResponse = null;
        Main.prototype.propertyGetRequest = null;
        Main.prototype.propertyGetResponse = null;
        Main.prototype.desktopIsLockedRequest = null;
        Main.prototype.desktopUnlockRequest = null;
        Main.prototype.desktopStatusSubscribeRequest = null;
        Main.prototype.desktopStatusUnsubscribeRequest = null;
        Main.prototype.desktopStatus = null;

        let $oneOfFields;

        $Object.defineProperty(Main.prototype, "content", {
            get: $util.oneOfGetter($oneOfFields = ["empty", "stopSession", "systemPingRequest", "systemPingResponse", "systemRebootRequest", "systemDeviceInfoRequest", "systemDeviceInfoResponse", "systemFactoryResetRequest", "systemGetDatetimeRequest", "systemGetDatetimeResponse", "systemSetDatetimeRequest", "systemPlayAudiovisualAlertRequest", "systemProtobufVersionRequest", "systemProtobufVersionResponse", "systemUpdateRequest", "systemUpdateResponse", "systemPowerInfoRequest", "systemPowerInfoResponse", "storageInfoRequest", "storageInfoResponse", "storageTimestampRequest", "storageTimestampResponse", "storageStatRequest", "storageStatResponse", "storageListRequest", "storageListResponse", "storageReadRequest", "storageReadResponse", "storageWriteRequest", "storageDeleteRequest", "storageMkdirRequest", "storageMd5sumRequest", "storageMd5sumResponse", "storageRenameRequest", "storageBackupCreateRequest", "storageBackupRestoreRequest", "storageTarExtractRequest", "appStartRequest", "appLockStatusRequest", "appLockStatusResponse", "appExitRequest", "appLoadFileRequest", "appButtonPressRequest", "appButtonReleaseRequest", "appButtonPressReleaseRequest", "appGetErrorRequest", "appGetErrorResponse", "appDataExchangeRequest", "guiStartScreenStreamRequest", "guiStopScreenStreamRequest", "guiScreenFrame", "guiSendInputEventRequest", "guiStartVirtualDisplayRequest", "guiStopVirtualDisplayRequest", "gpioSetPinMode", "gpioSetInputPull", "gpioGetPinMode", "gpioGetPinModeResponse", "gpioReadPin", "gpioReadPinResponse", "gpioWritePin", "gpioGetOtgMode", "gpioGetOtgModeResponse", "gpioSetOtgMode", "appStateResponse", "propertyGetRequest", "propertyGetResponse", "desktopIsLockedRequest", "desktopUnlockRequest", "desktopStatusSubscribeRequest", "desktopStatusUnsubscribeRequest", "desktopStatus"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        Main.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.commandId != null && $Object.hasOwnProperty.call(message, "commandId") && message.commandId !== 0)
                writer.uint32(8).uint32(message.commandId);
            if (message.commandStatus != null && $Object.hasOwnProperty.call(message, "commandStatus") && message.commandStatus !== 0)
                writer.uint32(16).int32(message.commandStatus);
            if (message.hasNext != null && $Object.hasOwnProperty.call(message, "hasNext") && message.hasNext !== false)
                writer.uint32(24).bool(message.hasNext);
            if (message.empty != null && $Object.hasOwnProperty.call(message, "empty"))
                $root.PB.Empty.encode(message.empty, writer.uint32(34).fork(), _depth + 1).ldelim();
            if (message.systemPingRequest != null && $Object.hasOwnProperty.call(message, "systemPingRequest"))
                $root.PB_System.PingRequest.encode(message.systemPingRequest, writer.uint32(42).fork(), _depth + 1).ldelim();
            if (message.systemPingResponse != null && $Object.hasOwnProperty.call(message, "systemPingResponse"))
                $root.PB_System.PingResponse.encode(message.systemPingResponse, writer.uint32(50).fork(), _depth + 1).ldelim();
            if (message.storageListRequest != null && $Object.hasOwnProperty.call(message, "storageListRequest"))
                $root.PB_Storage.ListRequest.encode(message.storageListRequest, writer.uint32(58).fork(), _depth + 1).ldelim();
            if (message.storageListResponse != null && $Object.hasOwnProperty.call(message, "storageListResponse"))
                $root.PB_Storage.ListResponse.encode(message.storageListResponse, writer.uint32(66).fork(), _depth + 1).ldelim();
            if (message.storageReadRequest != null && $Object.hasOwnProperty.call(message, "storageReadRequest"))
                $root.PB_Storage.ReadRequest.encode(message.storageReadRequest, writer.uint32(74).fork(), _depth + 1).ldelim();
            if (message.storageReadResponse != null && $Object.hasOwnProperty.call(message, "storageReadResponse"))
                $root.PB_Storage.ReadResponse.encode(message.storageReadResponse, writer.uint32(82).fork(), _depth + 1).ldelim();
            if (message.storageWriteRequest != null && $Object.hasOwnProperty.call(message, "storageWriteRequest"))
                $root.PB_Storage.WriteRequest.encode(message.storageWriteRequest, writer.uint32(90).fork(), _depth + 1).ldelim();
            if (message.storageDeleteRequest != null && $Object.hasOwnProperty.call(message, "storageDeleteRequest"))
                $root.PB_Storage.DeleteRequest.encode(message.storageDeleteRequest, writer.uint32(98).fork(), _depth + 1).ldelim();
            if (message.storageMkdirRequest != null && $Object.hasOwnProperty.call(message, "storageMkdirRequest"))
                $root.PB_Storage.MkdirRequest.encode(message.storageMkdirRequest, writer.uint32(106).fork(), _depth + 1).ldelim();
            if (message.storageMd5sumRequest != null && $Object.hasOwnProperty.call(message, "storageMd5sumRequest"))
                $root.PB_Storage.Md5sumRequest.encode(message.storageMd5sumRequest, writer.uint32(114).fork(), _depth + 1).ldelim();
            if (message.storageMd5sumResponse != null && $Object.hasOwnProperty.call(message, "storageMd5sumResponse"))
                $root.PB_Storage.Md5sumResponse.encode(message.storageMd5sumResponse, writer.uint32(122).fork(), _depth + 1).ldelim();
            if (message.appStartRequest != null && $Object.hasOwnProperty.call(message, "appStartRequest"))
                $root.PB_App.StartRequest.encode(message.appStartRequest, writer.uint32(130).fork(), _depth + 1).ldelim();
            if (message.appLockStatusRequest != null && $Object.hasOwnProperty.call(message, "appLockStatusRequest"))
                $root.PB_App.LockStatusRequest.encode(message.appLockStatusRequest, writer.uint32(138).fork(), _depth + 1).ldelim();
            if (message.appLockStatusResponse != null && $Object.hasOwnProperty.call(message, "appLockStatusResponse"))
                $root.PB_App.LockStatusResponse.encode(message.appLockStatusResponse, writer.uint32(146).fork(), _depth + 1).ldelim();
            if (message.stopSession != null && $Object.hasOwnProperty.call(message, "stopSession"))
                $root.PB.StopSession.encode(message.stopSession, writer.uint32(154).fork(), _depth + 1).ldelim();
            if (message.guiStartScreenStreamRequest != null && $Object.hasOwnProperty.call(message, "guiStartScreenStreamRequest"))
                $root.PB_Gui.StartScreenStreamRequest.encode(message.guiStartScreenStreamRequest, writer.uint32(162).fork(), _depth + 1).ldelim();
            if (message.guiStopScreenStreamRequest != null && $Object.hasOwnProperty.call(message, "guiStopScreenStreamRequest"))
                $root.PB_Gui.StopScreenStreamRequest.encode(message.guiStopScreenStreamRequest, writer.uint32(170).fork(), _depth + 1).ldelim();
            if (message.guiScreenFrame != null && $Object.hasOwnProperty.call(message, "guiScreenFrame"))
                $root.PB_Gui.ScreenFrame.encode(message.guiScreenFrame, writer.uint32(178).fork(), _depth + 1).ldelim();
            if (message.guiSendInputEventRequest != null && $Object.hasOwnProperty.call(message, "guiSendInputEventRequest"))
                $root.PB_Gui.SendInputEventRequest.encode(message.guiSendInputEventRequest, writer.uint32(186).fork(), _depth + 1).ldelim();
            if (message.storageStatRequest != null && $Object.hasOwnProperty.call(message, "storageStatRequest"))
                $root.PB_Storage.StatRequest.encode(message.storageStatRequest, writer.uint32(194).fork(), _depth + 1).ldelim();
            if (message.storageStatResponse != null && $Object.hasOwnProperty.call(message, "storageStatResponse"))
                $root.PB_Storage.StatResponse.encode(message.storageStatResponse, writer.uint32(202).fork(), _depth + 1).ldelim();
            if (message.guiStartVirtualDisplayRequest != null && $Object.hasOwnProperty.call(message, "guiStartVirtualDisplayRequest"))
                $root.PB_Gui.StartVirtualDisplayRequest.encode(message.guiStartVirtualDisplayRequest, writer.uint32(210).fork(), _depth + 1).ldelim();
            if (message.guiStopVirtualDisplayRequest != null && $Object.hasOwnProperty.call(message, "guiStopVirtualDisplayRequest"))
                $root.PB_Gui.StopVirtualDisplayRequest.encode(message.guiStopVirtualDisplayRequest, writer.uint32(218).fork(), _depth + 1).ldelim();
            if (message.storageInfoRequest != null && $Object.hasOwnProperty.call(message, "storageInfoRequest"))
                $root.PB_Storage.InfoRequest.encode(message.storageInfoRequest, writer.uint32(226).fork(), _depth + 1).ldelim();
            if (message.storageInfoResponse != null && $Object.hasOwnProperty.call(message, "storageInfoResponse"))
                $root.PB_Storage.InfoResponse.encode(message.storageInfoResponse, writer.uint32(234).fork(), _depth + 1).ldelim();
            if (message.storageRenameRequest != null && $Object.hasOwnProperty.call(message, "storageRenameRequest"))
                $root.PB_Storage.RenameRequest.encode(message.storageRenameRequest, writer.uint32(242).fork(), _depth + 1).ldelim();
            if (message.systemRebootRequest != null && $Object.hasOwnProperty.call(message, "systemRebootRequest"))
                $root.PB_System.RebootRequest.encode(message.systemRebootRequest, writer.uint32(250).fork(), _depth + 1).ldelim();
            if (message.systemDeviceInfoRequest != null && $Object.hasOwnProperty.call(message, "systemDeviceInfoRequest"))
                $root.PB_System.DeviceInfoRequest.encode(message.systemDeviceInfoRequest, writer.uint32(258).fork(), _depth + 1).ldelim();
            if (message.systemDeviceInfoResponse != null && $Object.hasOwnProperty.call(message, "systemDeviceInfoResponse"))
                $root.PB_System.DeviceInfoResponse.encode(message.systemDeviceInfoResponse, writer.uint32(266).fork(), _depth + 1).ldelim();
            if (message.systemFactoryResetRequest != null && $Object.hasOwnProperty.call(message, "systemFactoryResetRequest"))
                $root.PB_System.FactoryResetRequest.encode(message.systemFactoryResetRequest, writer.uint32(274).fork(), _depth + 1).ldelim();
            if (message.systemGetDatetimeRequest != null && $Object.hasOwnProperty.call(message, "systemGetDatetimeRequest"))
                $root.PB_System.GetDateTimeRequest.encode(message.systemGetDatetimeRequest, writer.uint32(282).fork(), _depth + 1).ldelim();
            if (message.systemGetDatetimeResponse != null && $Object.hasOwnProperty.call(message, "systemGetDatetimeResponse"))
                $root.PB_System.GetDateTimeResponse.encode(message.systemGetDatetimeResponse, writer.uint32(290).fork(), _depth + 1).ldelim();
            if (message.systemSetDatetimeRequest != null && $Object.hasOwnProperty.call(message, "systemSetDatetimeRequest"))
                $root.PB_System.SetDateTimeRequest.encode(message.systemSetDatetimeRequest, writer.uint32(298).fork(), _depth + 1).ldelim();
            if (message.systemPlayAudiovisualAlertRequest != null && $Object.hasOwnProperty.call(message, "systemPlayAudiovisualAlertRequest"))
                $root.PB_System.PlayAudiovisualAlertRequest.encode(message.systemPlayAudiovisualAlertRequest, writer.uint32(306).fork(), _depth + 1).ldelim();
            if (message.systemProtobufVersionRequest != null && $Object.hasOwnProperty.call(message, "systemProtobufVersionRequest"))
                $root.PB_System.ProtobufVersionRequest.encode(message.systemProtobufVersionRequest, writer.uint32(314).fork(), _depth + 1).ldelim();
            if (message.systemProtobufVersionResponse != null && $Object.hasOwnProperty.call(message, "systemProtobufVersionResponse"))
                $root.PB_System.ProtobufVersionResponse.encode(message.systemProtobufVersionResponse, writer.uint32(322).fork(), _depth + 1).ldelim();
            if (message.systemUpdateRequest != null && $Object.hasOwnProperty.call(message, "systemUpdateRequest"))
                $root.PB_System.UpdateRequest.encode(message.systemUpdateRequest, writer.uint32(330).fork(), _depth + 1).ldelim();
            if (message.storageBackupCreateRequest != null && $Object.hasOwnProperty.call(message, "storageBackupCreateRequest"))
                $root.PB_Storage.BackupCreateRequest.encode(message.storageBackupCreateRequest, writer.uint32(338).fork(), _depth + 1).ldelim();
            if (message.storageBackupRestoreRequest != null && $Object.hasOwnProperty.call(message, "storageBackupRestoreRequest"))
                $root.PB_Storage.BackupRestoreRequest.encode(message.storageBackupRestoreRequest, writer.uint32(346).fork(), _depth + 1).ldelim();
            if (message.systemPowerInfoRequest != null && $Object.hasOwnProperty.call(message, "systemPowerInfoRequest"))
                $root.PB_System.PowerInfoRequest.encode(message.systemPowerInfoRequest, writer.uint32(354).fork(), _depth + 1).ldelim();
            if (message.systemPowerInfoResponse != null && $Object.hasOwnProperty.call(message, "systemPowerInfoResponse"))
                $root.PB_System.PowerInfoResponse.encode(message.systemPowerInfoResponse, writer.uint32(362).fork(), _depth + 1).ldelim();
            if (message.systemUpdateResponse != null && $Object.hasOwnProperty.call(message, "systemUpdateResponse"))
                $root.PB_System.UpdateResponse.encode(message.systemUpdateResponse, writer.uint32(370).fork(), _depth + 1).ldelim();
            if (message.appExitRequest != null && $Object.hasOwnProperty.call(message, "appExitRequest"))
                $root.PB_App.AppExitRequest.encode(message.appExitRequest, writer.uint32(378).fork(), _depth + 1).ldelim();
            if (message.appLoadFileRequest != null && $Object.hasOwnProperty.call(message, "appLoadFileRequest"))
                $root.PB_App.AppLoadFileRequest.encode(message.appLoadFileRequest, writer.uint32(386).fork(), _depth + 1).ldelim();
            if (message.appButtonPressRequest != null && $Object.hasOwnProperty.call(message, "appButtonPressRequest"))
                $root.PB_App.AppButtonPressRequest.encode(message.appButtonPressRequest, writer.uint32(394).fork(), _depth + 1).ldelim();
            if (message.appButtonReleaseRequest != null && $Object.hasOwnProperty.call(message, "appButtonReleaseRequest"))
                $root.PB_App.AppButtonReleaseRequest.encode(message.appButtonReleaseRequest, writer.uint32(402).fork(), _depth + 1).ldelim();
            if (message.gpioSetPinMode != null && $Object.hasOwnProperty.call(message, "gpioSetPinMode"))
                $root.PB_Gpio.SetPinMode.encode(message.gpioSetPinMode, writer.uint32(410).fork(), _depth + 1).ldelim();
            if (message.gpioSetInputPull != null && $Object.hasOwnProperty.call(message, "gpioSetInputPull"))
                $root.PB_Gpio.SetInputPull.encode(message.gpioSetInputPull, writer.uint32(418).fork(), _depth + 1).ldelim();
            if (message.gpioGetPinMode != null && $Object.hasOwnProperty.call(message, "gpioGetPinMode"))
                $root.PB_Gpio.GetPinMode.encode(message.gpioGetPinMode, writer.uint32(426).fork(), _depth + 1).ldelim();
            if (message.gpioGetPinModeResponse != null && $Object.hasOwnProperty.call(message, "gpioGetPinModeResponse"))
                $root.PB_Gpio.GetPinModeResponse.encode(message.gpioGetPinModeResponse, writer.uint32(434).fork(), _depth + 1).ldelim();
            if (message.gpioReadPin != null && $Object.hasOwnProperty.call(message, "gpioReadPin"))
                $root.PB_Gpio.ReadPin.encode(message.gpioReadPin, writer.uint32(442).fork(), _depth + 1).ldelim();
            if (message.gpioReadPinResponse != null && $Object.hasOwnProperty.call(message, "gpioReadPinResponse"))
                $root.PB_Gpio.ReadPinResponse.encode(message.gpioReadPinResponse, writer.uint32(450).fork(), _depth + 1).ldelim();
            if (message.gpioWritePin != null && $Object.hasOwnProperty.call(message, "gpioWritePin"))
                $root.PB_Gpio.WritePin.encode(message.gpioWritePin, writer.uint32(458).fork(), _depth + 1).ldelim();
            if (message.appStateResponse != null && $Object.hasOwnProperty.call(message, "appStateResponse"))
                $root.PB_App.AppStateResponse.encode(message.appStateResponse, writer.uint32(466).fork(), _depth + 1).ldelim();
            if (message.storageTimestampRequest != null && $Object.hasOwnProperty.call(message, "storageTimestampRequest"))
                $root.PB_Storage.TimestampRequest.encode(message.storageTimestampRequest, writer.uint32(474).fork(), _depth + 1).ldelim();
            if (message.storageTimestampResponse != null && $Object.hasOwnProperty.call(message, "storageTimestampResponse"))
                $root.PB_Storage.TimestampResponse.encode(message.storageTimestampResponse, writer.uint32(482).fork(), _depth + 1).ldelim();
            if (message.propertyGetRequest != null && $Object.hasOwnProperty.call(message, "propertyGetRequest"))
                $root.PB_Property.GetRequest.encode(message.propertyGetRequest, writer.uint32(490).fork(), _depth + 1).ldelim();
            if (message.propertyGetResponse != null && $Object.hasOwnProperty.call(message, "propertyGetResponse"))
                $root.PB_Property.GetResponse.encode(message.propertyGetResponse, writer.uint32(498).fork(), _depth + 1).ldelim();
            if (message.appGetErrorRequest != null && $Object.hasOwnProperty.call(message, "appGetErrorRequest"))
                $root.PB_App.GetErrorRequest.encode(message.appGetErrorRequest, writer.uint32(506).fork(), _depth + 1).ldelim();
            if (message.appGetErrorResponse != null && $Object.hasOwnProperty.call(message, "appGetErrorResponse"))
                $root.PB_App.GetErrorResponse.encode(message.appGetErrorResponse, writer.uint32(514).fork(), _depth + 1).ldelim();
            if (message.appDataExchangeRequest != null && $Object.hasOwnProperty.call(message, "appDataExchangeRequest"))
                $root.PB_App.DataExchangeRequest.encode(message.appDataExchangeRequest, writer.uint32(522).fork(), _depth + 1).ldelim();
            if (message.desktopIsLockedRequest != null && $Object.hasOwnProperty.call(message, "desktopIsLockedRequest"))
                $root.PB_Desktop.IsLockedRequest.encode(message.desktopIsLockedRequest, writer.uint32(530).fork(), _depth + 1).ldelim();
            if (message.desktopUnlockRequest != null && $Object.hasOwnProperty.call(message, "desktopUnlockRequest"))
                $root.PB_Desktop.UnlockRequest.encode(message.desktopUnlockRequest, writer.uint32(538).fork(), _depth + 1).ldelim();
            if (message.desktopStatusSubscribeRequest != null && $Object.hasOwnProperty.call(message, "desktopStatusSubscribeRequest"))
                $root.PB_Desktop.StatusSubscribeRequest.encode(message.desktopStatusSubscribeRequest, writer.uint32(546).fork(), _depth + 1).ldelim();
            if (message.desktopStatusUnsubscribeRequest != null && $Object.hasOwnProperty.call(message, "desktopStatusUnsubscribeRequest"))
                $root.PB_Desktop.StatusUnsubscribeRequest.encode(message.desktopStatusUnsubscribeRequest, writer.uint32(554).fork(), _depth + 1).ldelim();
            if (message.desktopStatus != null && $Object.hasOwnProperty.call(message, "desktopStatus"))
                $root.PB_Desktop.Status.encode(message.desktopStatus, writer.uint32(562).fork(), _depth + 1).ldelim();
            if (message.storageTarExtractRequest != null && $Object.hasOwnProperty.call(message, "storageTarExtractRequest"))
                $root.PB_Storage.TarExtractRequest.encode(message.storageTarExtractRequest, writer.uint32(570).fork(), _depth + 1).ldelim();
            if (message.gpioGetOtgMode != null && $Object.hasOwnProperty.call(message, "gpioGetOtgMode"))
                $root.PB_Gpio.GetOtgMode.encode(message.gpioGetOtgMode, writer.uint32(578).fork(), _depth + 1).ldelim();
            if (message.gpioGetOtgModeResponse != null && $Object.hasOwnProperty.call(message, "gpioGetOtgModeResponse"))
                $root.PB_Gpio.GetOtgModeResponse.encode(message.gpioGetOtgModeResponse, writer.uint32(586).fork(), _depth + 1).ldelim();
            if (message.gpioSetOtgMode != null && $Object.hasOwnProperty.call(message, "gpioSetOtgMode"))
                $root.PB_Gpio.SetOtgMode.encode(message.gpioSetOtgMode, writer.uint32(594).fork(), _depth + 1).ldelim();
            if (message.appButtonPressReleaseRequest != null && $Object.hasOwnProperty.call(message, "appButtonPressReleaseRequest"))
                $root.PB_App.AppButtonPressReleaseRequest.encode(message.appButtonPressReleaseRequest, writer.uint32(602).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        Main.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        Main.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Main.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB.Main";
        };

        return Main;
    })();

    PB.Region = (function() {

        const Region = function (properties) {
            this.bands = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        Region.prototype.countryCode = $util.newBuffer([]);
        Region.prototype.bands = $util.emptyArray;

        Region.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.countryCode != null && $Object.hasOwnProperty.call(message, "countryCode") && message.countryCode.length)
                writer.uint32(10).bytes(message.countryCode);
            if (message.bands != null && message.bands.length)
                for (let i = 0; i < message.bands.length; ++i)
                    $root.PB.Region.Band.encode(message.bands[i], writer.uint32(18).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        Region.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        Region.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Region.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB.Region";
        };

        Region.Band = (function() {

            const Band = function (properties) {
                if (properties)
                    for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            Band.prototype.start = 0;
            Band.prototype.end = 0;
            Band.prototype.powerLimit = 0;
            Band.prototype.dutyCycle = 0;

            Band.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.start != null && $Object.hasOwnProperty.call(message, "start") && message.start !== 0)
                    writer.uint32(8).uint32(message.start);
                if (message.end != null && $Object.hasOwnProperty.call(message, "end") && message.end !== 0)
                    writer.uint32(16).uint32(message.end);
                if (message.powerLimit != null && $Object.hasOwnProperty.call(message, "powerLimit") && message.powerLimit !== 0)
                    writer.uint32(24).int32(message.powerLimit);
                if (message.dutyCycle != null && $Object.hasOwnProperty.call(message, "dutyCycle") && message.dutyCycle !== 0)
                    writer.uint32(32).uint32(message.dutyCycle);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (let i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            Band.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

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

            Band.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

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

    const PB_Storage = {};

    PB_Storage.File = (function() {

        const File = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        File.prototype.type = 0;
        File.prototype.name = "";
        File.prototype.size = 0;
        File.prototype.data = $util.newBuffer([]);
        File.prototype.md5sum = "";

        File.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.type != null && $Object.hasOwnProperty.call(message, "type") && message.type !== 0)
                writer.uint32(8).int32(message.type);
            if (message.name != null && $Object.hasOwnProperty.call(message, "name") && message.name !== "")
                writer.uint32(18).string(message.name);
            if (message.size != null && $Object.hasOwnProperty.call(message, "size") && message.size !== 0)
                writer.uint32(24).uint32(message.size);
            if (message.data != null && $Object.hasOwnProperty.call(message, "data") && message.data.length)
                writer.uint32(34).bytes(message.data);
            if (message.md5sum != null && $Object.hasOwnProperty.call(message, "md5sum") && message.md5sum !== "")
                writer.uint32(42).string(message.md5sum);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        File.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        File.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        File.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.File";
        };

        File.FileType = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "FILE"] = 0;
            values[valuesById[1] = "DIR"] = 1;
            return values;
        })();

        return File;
    })();

    PB_Storage.InfoRequest = (function() {

        const InfoRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        InfoRequest.prototype.path = "";

        InfoRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.path != null && $Object.hasOwnProperty.call(message, "path") && message.path !== "")
                writer.uint32(10).string(message.path);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        InfoRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        InfoRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        InfoRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.InfoRequest";
        };

        return InfoRequest;
    })();

    PB_Storage.InfoResponse = (function() {

        const InfoResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        InfoResponse.prototype.totalSpace = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        InfoResponse.prototype.freeSpace = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        InfoResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.totalSpace != null && $Object.hasOwnProperty.call(message, "totalSpace") && (typeof message.totalSpace === "object" ? message.totalSpace.low || message.totalSpace.high : message.totalSpace !== 0))
                writer.uint32(8).uint64(message.totalSpace);
            if (message.freeSpace != null && $Object.hasOwnProperty.call(message, "freeSpace") && (typeof message.freeSpace === "object" ? message.freeSpace.low || message.freeSpace.high : message.freeSpace !== 0))
                writer.uint32(16).uint64(message.freeSpace);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        InfoResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        InfoResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        InfoResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.InfoResponse";
        };

        return InfoResponse;
    })();

    PB_Storage.TimestampRequest = (function() {

        const TimestampRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        TimestampRequest.prototype.path = "";

        TimestampRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.path != null && $Object.hasOwnProperty.call(message, "path") && message.path !== "")
                writer.uint32(10).string(message.path);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        TimestampRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        TimestampRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TimestampRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.TimestampRequest";
        };

        return TimestampRequest;
    })();

    PB_Storage.TimestampResponse = (function() {

        const TimestampResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        TimestampResponse.prototype.timestamp = 0;

        TimestampResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.timestamp != null && $Object.hasOwnProperty.call(message, "timestamp") && message.timestamp !== 0)
                writer.uint32(8).uint32(message.timestamp);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        TimestampResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        TimestampResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TimestampResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.TimestampResponse";
        };

        return TimestampResponse;
    })();

    PB_Storage.StatRequest = (function() {

        const StatRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        StatRequest.prototype.path = "";

        StatRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.path != null && $Object.hasOwnProperty.call(message, "path") && message.path !== "")
                writer.uint32(10).string(message.path);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        StatRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        StatRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        StatRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.StatRequest";
        };

        return StatRequest;
    })();

    PB_Storage.StatResponse = (function() {

        const StatResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        StatResponse.prototype.file = null;

        StatResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.file != null && $Object.hasOwnProperty.call(message, "file"))
                $root.PB_Storage.File.encode(message.file, writer.uint32(10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        StatResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        StatResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        StatResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.StatResponse";
        };

        return StatResponse;
    })();

    PB_Storage.ListRequest = (function() {

        const ListRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        ListRequest.prototype.path = "";
        ListRequest.prototype.includeMd5 = false;
        ListRequest.prototype.filterMaxSize = 0;

        ListRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.path != null && $Object.hasOwnProperty.call(message, "path") && message.path !== "")
                writer.uint32(10).string(message.path);
            if (message.includeMd5 != null && $Object.hasOwnProperty.call(message, "includeMd5") && message.includeMd5 !== false)
                writer.uint32(16).bool(message.includeMd5);
            if (message.filterMaxSize != null && $Object.hasOwnProperty.call(message, "filterMaxSize") && message.filterMaxSize !== 0)
                writer.uint32(24).uint32(message.filterMaxSize);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        ListRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        ListRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ListRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.ListRequest";
        };

        return ListRequest;
    })();

    PB_Storage.ListResponse = (function() {

        const ListResponse = function (properties) {
            this.file = [];
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        ListResponse.prototype.file = $util.emptyArray;

        ListResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.file != null && message.file.length)
                for (let i = 0; i < message.file.length; ++i)
                    $root.PB_Storage.File.encode(message.file[i], writer.uint32(10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        ListResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        ListResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ListResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.ListResponse";
        };

        return ListResponse;
    })();

    PB_Storage.ReadRequest = (function() {

        const ReadRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        ReadRequest.prototype.path = "";

        ReadRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.path != null && $Object.hasOwnProperty.call(message, "path") && message.path !== "")
                writer.uint32(10).string(message.path);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        ReadRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        ReadRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ReadRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.ReadRequest";
        };

        return ReadRequest;
    })();

    PB_Storage.ReadResponse = (function() {

        const ReadResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        ReadResponse.prototype.file = null;

        ReadResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.file != null && $Object.hasOwnProperty.call(message, "file"))
                $root.PB_Storage.File.encode(message.file, writer.uint32(10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        ReadResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        ReadResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ReadResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.ReadResponse";
        };

        return ReadResponse;
    })();

    PB_Storage.WriteRequest = (function() {

        const WriteRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        WriteRequest.prototype.path = "";
        WriteRequest.prototype.file = null;

        WriteRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.path != null && $Object.hasOwnProperty.call(message, "path") && message.path !== "")
                writer.uint32(10).string(message.path);
            if (message.file != null && $Object.hasOwnProperty.call(message, "file"))
                $root.PB_Storage.File.encode(message.file, writer.uint32(18).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        WriteRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        WriteRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        WriteRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.WriteRequest";
        };

        return WriteRequest;
    })();

    PB_Storage.DeleteRequest = (function() {

        const DeleteRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        DeleteRequest.prototype.path = "";
        DeleteRequest.prototype.recursive = false;

        DeleteRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.path != null && $Object.hasOwnProperty.call(message, "path") && message.path !== "")
                writer.uint32(10).string(message.path);
            if (message.recursive != null && $Object.hasOwnProperty.call(message, "recursive") && message.recursive !== false)
                writer.uint32(16).bool(message.recursive);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        DeleteRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        DeleteRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        DeleteRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.DeleteRequest";
        };

        return DeleteRequest;
    })();

    PB_Storage.MkdirRequest = (function() {

        const MkdirRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        MkdirRequest.prototype.path = "";

        MkdirRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.path != null && $Object.hasOwnProperty.call(message, "path") && message.path !== "")
                writer.uint32(10).string(message.path);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        MkdirRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        MkdirRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        MkdirRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.MkdirRequest";
        };

        return MkdirRequest;
    })();

    PB_Storage.Md5sumRequest = (function() {

        const Md5sumRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        Md5sumRequest.prototype.path = "";

        Md5sumRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.path != null && $Object.hasOwnProperty.call(message, "path") && message.path !== "")
                writer.uint32(10).string(message.path);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        Md5sumRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        Md5sumRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Md5sumRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.Md5sumRequest";
        };

        return Md5sumRequest;
    })();

    PB_Storage.Md5sumResponse = (function() {

        const Md5sumResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        Md5sumResponse.prototype.md5sum = "";

        Md5sumResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.md5sum != null && $Object.hasOwnProperty.call(message, "md5sum") && message.md5sum !== "")
                writer.uint32(10).string(message.md5sum);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        Md5sumResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        Md5sumResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        Md5sumResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.Md5sumResponse";
        };

        return Md5sumResponse;
    })();

    PB_Storage.RenameRequest = (function() {

        const RenameRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        RenameRequest.prototype.oldPath = "";
        RenameRequest.prototype.newPath = "";

        RenameRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.oldPath != null && $Object.hasOwnProperty.call(message, "oldPath") && message.oldPath !== "")
                writer.uint32(10).string(message.oldPath);
            if (message.newPath != null && $Object.hasOwnProperty.call(message, "newPath") && message.newPath !== "")
                writer.uint32(18).string(message.newPath);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        RenameRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        RenameRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RenameRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.RenameRequest";
        };

        return RenameRequest;
    })();

    PB_Storage.BackupCreateRequest = (function() {

        const BackupCreateRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        BackupCreateRequest.prototype.archivePath = "";

        BackupCreateRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.archivePath != null && $Object.hasOwnProperty.call(message, "archivePath") && message.archivePath !== "")
                writer.uint32(10).string(message.archivePath);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        BackupCreateRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        BackupCreateRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        BackupCreateRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.BackupCreateRequest";
        };

        return BackupCreateRequest;
    })();

    PB_Storage.BackupRestoreRequest = (function() {

        const BackupRestoreRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        BackupRestoreRequest.prototype.archivePath = "";

        BackupRestoreRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.archivePath != null && $Object.hasOwnProperty.call(message, "archivePath") && message.archivePath !== "")
                writer.uint32(10).string(message.archivePath);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        BackupRestoreRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        BackupRestoreRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        BackupRestoreRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Storage.BackupRestoreRequest";
        };

        return BackupRestoreRequest;
    })();

    PB_Storage.TarExtractRequest = (function() {

        const TarExtractRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        TarExtractRequest.prototype.tarPath = "";
        TarExtractRequest.prototype.outPath = "";

        TarExtractRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.tarPath != null && $Object.hasOwnProperty.call(message, "tarPath") && message.tarPath !== "")
                writer.uint32(10).string(message.tarPath);
            if (message.outPath != null && $Object.hasOwnProperty.call(message, "outPath") && message.outPath !== "")
                writer.uint32(18).string(message.outPath);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        TarExtractRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        TarExtractRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

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

    const PB_System = {};

    PB_System.PingRequest = (function() {

        const PingRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        PingRequest.prototype.data = $util.newBuffer([]);

        PingRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.data != null && $Object.hasOwnProperty.call(message, "data") && message.data.length)
                writer.uint32(10).bytes(message.data);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        PingRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        PingRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PingRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.PingRequest";
        };

        return PingRequest;
    })();

    PB_System.PingResponse = (function() {

        const PingResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        PingResponse.prototype.data = $util.newBuffer([]);

        PingResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.data != null && $Object.hasOwnProperty.call(message, "data") && message.data.length)
                writer.uint32(10).bytes(message.data);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        PingResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        PingResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PingResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.PingResponse";
        };

        return PingResponse;
    })();

    PB_System.RebootRequest = (function() {

        const RebootRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        RebootRequest.prototype.mode = 0;

        RebootRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.mode != null && $Object.hasOwnProperty.call(message, "mode") && message.mode !== 0)
                writer.uint32(8).int32(message.mode);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        RebootRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        RebootRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RebootRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.RebootRequest";
        };

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

        const DeviceInfoRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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

        DeviceInfoRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        DeviceInfoRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        DeviceInfoRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.DeviceInfoRequest";
        };

        return DeviceInfoRequest;
    })();

    PB_System.DeviceInfoResponse = (function() {

        const DeviceInfoResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        DeviceInfoResponse.prototype.key = "";
        DeviceInfoResponse.prototype.value = "";

        DeviceInfoResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.key != null && $Object.hasOwnProperty.call(message, "key") && message.key !== "")
                writer.uint32(10).string(message.key);
            if (message.value != null && $Object.hasOwnProperty.call(message, "value") && message.value !== "")
                writer.uint32(18).string(message.value);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        DeviceInfoResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        DeviceInfoResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        DeviceInfoResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.DeviceInfoResponse";
        };

        return DeviceInfoResponse;
    })();

    PB_System.FactoryResetRequest = (function() {

        const FactoryResetRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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

        FactoryResetRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        FactoryResetRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        FactoryResetRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.FactoryResetRequest";
        };

        return FactoryResetRequest;
    })();

    PB_System.GetDateTimeRequest = (function() {

        const GetDateTimeRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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

        GetDateTimeRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        GetDateTimeRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GetDateTimeRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.GetDateTimeRequest";
        };

        return GetDateTimeRequest;
    })();

    PB_System.GetDateTimeResponse = (function() {

        const GetDateTimeResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        GetDateTimeResponse.prototype.datetime = null;

        GetDateTimeResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.datetime != null && $Object.hasOwnProperty.call(message, "datetime"))
                $root.PB_System.DateTime.encode(message.datetime, writer.uint32(10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        GetDateTimeResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        GetDateTimeResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GetDateTimeResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.GetDateTimeResponse";
        };

        return GetDateTimeResponse;
    })();

    PB_System.SetDateTimeRequest = (function() {

        const SetDateTimeRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        SetDateTimeRequest.prototype.datetime = null;

        SetDateTimeRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.datetime != null && $Object.hasOwnProperty.call(message, "datetime"))
                $root.PB_System.DateTime.encode(message.datetime, writer.uint32(10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        SetDateTimeRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        SetDateTimeRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SetDateTimeRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.SetDateTimeRequest";
        };

        return SetDateTimeRequest;
    })();

    PB_System.DateTime = (function() {

        const DateTime = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        DateTime.prototype.hour = 0;
        DateTime.prototype.minute = 0;
        DateTime.prototype.second = 0;
        DateTime.prototype.day = 0;
        DateTime.prototype.month = 0;
        DateTime.prototype.year = 0;
        DateTime.prototype.weekday = 0;

        DateTime.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.hour != null && $Object.hasOwnProperty.call(message, "hour") && message.hour !== 0)
                writer.uint32(8).uint32(message.hour);
            if (message.minute != null && $Object.hasOwnProperty.call(message, "minute") && message.minute !== 0)
                writer.uint32(16).uint32(message.minute);
            if (message.second != null && $Object.hasOwnProperty.call(message, "second") && message.second !== 0)
                writer.uint32(24).uint32(message.second);
            if (message.day != null && $Object.hasOwnProperty.call(message, "day") && message.day !== 0)
                writer.uint32(32).uint32(message.day);
            if (message.month != null && $Object.hasOwnProperty.call(message, "month") && message.month !== 0)
                writer.uint32(40).uint32(message.month);
            if (message.year != null && $Object.hasOwnProperty.call(message, "year") && message.year !== 0)
                writer.uint32(48).uint32(message.year);
            if (message.weekday != null && $Object.hasOwnProperty.call(message, "weekday") && message.weekday !== 0)
                writer.uint32(56).uint32(message.weekday);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        DateTime.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        DateTime.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        DateTime.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.DateTime";
        };

        return DateTime;
    })();

    PB_System.PlayAudiovisualAlertRequest = (function() {

        const PlayAudiovisualAlertRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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

        PlayAudiovisualAlertRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        PlayAudiovisualAlertRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PlayAudiovisualAlertRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.PlayAudiovisualAlertRequest";
        };

        return PlayAudiovisualAlertRequest;
    })();

    PB_System.ProtobufVersionRequest = (function() {

        const ProtobufVersionRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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

        ProtobufVersionRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        ProtobufVersionRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ProtobufVersionRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.ProtobufVersionRequest";
        };

        return ProtobufVersionRequest;
    })();

    PB_System.ProtobufVersionResponse = (function() {

        const ProtobufVersionResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        ProtobufVersionResponse.prototype.major = 0;
        ProtobufVersionResponse.prototype.minor = 0;

        ProtobufVersionResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.major != null && $Object.hasOwnProperty.call(message, "major") && message.major !== 0)
                writer.uint32(8).uint32(message.major);
            if (message.minor != null && $Object.hasOwnProperty.call(message, "minor") && message.minor !== 0)
                writer.uint32(16).uint32(message.minor);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        ProtobufVersionResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        ProtobufVersionResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ProtobufVersionResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.ProtobufVersionResponse";
        };

        return ProtobufVersionResponse;
    })();

    PB_System.UpdateRequest = (function() {

        const UpdateRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        UpdateRequest.prototype.updateManifest = "";

        UpdateRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.updateManifest != null && $Object.hasOwnProperty.call(message, "updateManifest") && message.updateManifest !== "")
                writer.uint32(10).string(message.updateManifest);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        UpdateRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        UpdateRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        UpdateRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.UpdateRequest";
        };

        return UpdateRequest;
    })();

    PB_System.UpdateResponse = (function() {

        const UpdateResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        UpdateResponse.prototype.code = 0;

        UpdateResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.code != null && $Object.hasOwnProperty.call(message, "code") && message.code !== 0)
                writer.uint32(8).int32(message.code);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        UpdateResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        UpdateResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        UpdateResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.UpdateResponse";
        };

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

        const PowerInfoRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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

        PowerInfoRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        PowerInfoRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PowerInfoRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_System.PowerInfoRequest";
        };

        return PowerInfoRequest;
    })();

    PB_System.PowerInfoResponse = (function() {

        const PowerInfoResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        PowerInfoResponse.prototype.key = "";
        PowerInfoResponse.prototype.value = "";

        PowerInfoResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.key != null && $Object.hasOwnProperty.call(message, "key") && message.key !== "")
                writer.uint32(10).string(message.key);
            if (message.value != null && $Object.hasOwnProperty.call(message, "value") && message.value !== "")
                writer.uint32(18).string(message.value);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        PowerInfoResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        PowerInfoResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

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

    const PB_App = {};

    PB_App.StartRequest = (function() {

        const StartRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        StartRequest.prototype.name = "";
        StartRequest.prototype.args = "";

        StartRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.name != null && $Object.hasOwnProperty.call(message, "name") && message.name !== "")
                writer.uint32(10).string(message.name);
            if (message.args != null && $Object.hasOwnProperty.call(message, "args") && message.args !== "")
                writer.uint32(18).string(message.args);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        StartRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        StartRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        StartRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_App.StartRequest";
        };

        return StartRequest;
    })();

    PB_App.LockStatusRequest = (function() {

        const LockStatusRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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

        LockStatusRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        LockStatusRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LockStatusRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_App.LockStatusRequest";
        };

        return LockStatusRequest;
    })();

    PB_App.LockStatusResponse = (function() {

        const LockStatusResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        LockStatusResponse.prototype.locked = false;

        LockStatusResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.locked != null && $Object.hasOwnProperty.call(message, "locked") && message.locked !== false)
                writer.uint32(8).bool(message.locked);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        LockStatusResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        LockStatusResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        LockStatusResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_App.LockStatusResponse";
        };

        return LockStatusResponse;
    })();

    PB_App.AppExitRequest = (function() {

        const AppExitRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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

        AppExitRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        AppExitRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        AppExitRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_App.AppExitRequest";
        };

        return AppExitRequest;
    })();

    PB_App.AppLoadFileRequest = (function() {

        const AppLoadFileRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        AppLoadFileRequest.prototype.path = "";

        AppLoadFileRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.path != null && $Object.hasOwnProperty.call(message, "path") && message.path !== "")
                writer.uint32(10).string(message.path);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        AppLoadFileRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        AppLoadFileRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        AppLoadFileRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_App.AppLoadFileRequest";
        };

        return AppLoadFileRequest;
    })();

    PB_App.AppButtonPressRequest = (function() {

        const AppButtonPressRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        AppButtonPressRequest.prototype.args = "";
        AppButtonPressRequest.prototype.index = 0;

        AppButtonPressRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.args != null && $Object.hasOwnProperty.call(message, "args") && message.args !== "")
                writer.uint32(10).string(message.args);
            if (message.index != null && $Object.hasOwnProperty.call(message, "index") && message.index !== 0)
                writer.uint32(16).int32(message.index);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        AppButtonPressRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        AppButtonPressRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        AppButtonPressRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_App.AppButtonPressRequest";
        };

        return AppButtonPressRequest;
    })();

    PB_App.AppButtonReleaseRequest = (function() {

        const AppButtonReleaseRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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

        AppButtonReleaseRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        AppButtonReleaseRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        AppButtonReleaseRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_App.AppButtonReleaseRequest";
        };

        return AppButtonReleaseRequest;
    })();

    PB_App.AppButtonPressReleaseRequest = (function() {

        const AppButtonPressReleaseRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        AppButtonPressReleaseRequest.prototype.args = "";
        AppButtonPressReleaseRequest.prototype.index = 0;

        AppButtonPressReleaseRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.args != null && $Object.hasOwnProperty.call(message, "args") && message.args !== "")
                writer.uint32(10).string(message.args);
            if (message.index != null && $Object.hasOwnProperty.call(message, "index") && message.index !== 0)
                writer.uint32(16).int32(message.index);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        AppButtonPressReleaseRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        AppButtonPressReleaseRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        AppButtonPressReleaseRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_App.AppButtonPressReleaseRequest";
        };

        return AppButtonPressReleaseRequest;
    })();

    PB_App.AppState = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "APP_CLOSED"] = 0;
        values[valuesById[1] = "APP_STARTED"] = 1;
        return values;
    })();

    PB_App.AppStateResponse = (function() {

        const AppStateResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        AppStateResponse.prototype.state = 0;

        AppStateResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.state != null && $Object.hasOwnProperty.call(message, "state") && message.state !== 0)
                writer.uint32(8).int32(message.state);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        AppStateResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        AppStateResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        AppStateResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_App.AppStateResponse";
        };

        return AppStateResponse;
    })();

    PB_App.GetErrorRequest = (function() {

        const GetErrorRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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

        GetErrorRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        GetErrorRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GetErrorRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_App.GetErrorRequest";
        };

        return GetErrorRequest;
    })();

    PB_App.GetErrorResponse = (function() {

        const GetErrorResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        GetErrorResponse.prototype.code = 0;
        GetErrorResponse.prototype.text = "";

        GetErrorResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.code != null && $Object.hasOwnProperty.call(message, "code") && message.code !== 0)
                writer.uint32(8).uint32(message.code);
            if (message.text != null && $Object.hasOwnProperty.call(message, "text") && message.text !== "")
                writer.uint32(18).string(message.text);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        GetErrorResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        GetErrorResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GetErrorResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_App.GetErrorResponse";
        };

        return GetErrorResponse;
    })();

    PB_App.DataExchangeRequest = (function() {

        const DataExchangeRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        DataExchangeRequest.prototype.data = $util.newBuffer([]);

        DataExchangeRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.data != null && $Object.hasOwnProperty.call(message, "data") && message.data.length)
                writer.uint32(10).bytes(message.data);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        DataExchangeRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        DataExchangeRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

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

    const PB_Gui = {};

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

    PB_Gui.InputType = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "PRESS"] = 0;
        values[valuesById[1] = "RELEASE"] = 1;
        values[valuesById[2] = "SHORT"] = 2;
        values[valuesById[3] = "LONG"] = 3;
        values[valuesById[4] = "REPEAT"] = 4;
        return values;
    })();

    PB_Gui.ScreenOrientation = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "HORIZONTAL"] = 0;
        values[valuesById[1] = "HORIZONTAL_FLIP"] = 1;
        values[valuesById[2] = "VERTICAL"] = 2;
        values[valuesById[3] = "VERTICAL_FLIP"] = 3;
        return values;
    })();

    PB_Gui.ScreenFrame = (function() {

        const ScreenFrame = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        ScreenFrame.prototype.data = $util.newBuffer([]);
        ScreenFrame.prototype.orientation = 0;

        ScreenFrame.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.data != null && $Object.hasOwnProperty.call(message, "data") && message.data.length)
                writer.uint32(10).bytes(message.data);
            if (message.orientation != null && $Object.hasOwnProperty.call(message, "orientation") && message.orientation !== 0)
                writer.uint32(16).int32(message.orientation);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        ScreenFrame.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        ScreenFrame.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ScreenFrame.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gui.ScreenFrame";
        };

        return ScreenFrame;
    })();

    PB_Gui.StartScreenStreamRequest = (function() {

        const StartScreenStreamRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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

        StartScreenStreamRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        StartScreenStreamRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        StartScreenStreamRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gui.StartScreenStreamRequest";
        };

        return StartScreenStreamRequest;
    })();

    PB_Gui.StopScreenStreamRequest = (function() {

        const StopScreenStreamRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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

        StopScreenStreamRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        StopScreenStreamRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        StopScreenStreamRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gui.StopScreenStreamRequest";
        };

        return StopScreenStreamRequest;
    })();

    PB_Gui.SendInputEventRequest = (function() {

        const SendInputEventRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        SendInputEventRequest.prototype.key = 0;
        SendInputEventRequest.prototype.type = 0;

        SendInputEventRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.key != null && $Object.hasOwnProperty.call(message, "key") && message.key !== 0)
                writer.uint32(8).int32(message.key);
            if (message.type != null && $Object.hasOwnProperty.call(message, "type") && message.type !== 0)
                writer.uint32(16).int32(message.type);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        SendInputEventRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        SendInputEventRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SendInputEventRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gui.SendInputEventRequest";
        };

        return SendInputEventRequest;
    })();

    PB_Gui.StartVirtualDisplayRequest = (function() {

        const StartVirtualDisplayRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        StartVirtualDisplayRequest.prototype.firstFrame = null;
        StartVirtualDisplayRequest.prototype.sendInput = false;

        StartVirtualDisplayRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.firstFrame != null && $Object.hasOwnProperty.call(message, "firstFrame"))
                $root.PB_Gui.ScreenFrame.encode(message.firstFrame, writer.uint32(10).fork(), _depth + 1).ldelim();
            if (message.sendInput != null && $Object.hasOwnProperty.call(message, "sendInput") && message.sendInput !== false)
                writer.uint32(16).bool(message.sendInput);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        StartVirtualDisplayRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        StartVirtualDisplayRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        StartVirtualDisplayRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gui.StartVirtualDisplayRequest";
        };

        return StartVirtualDisplayRequest;
    })();

    PB_Gui.StopVirtualDisplayRequest = (function() {

        const StopVirtualDisplayRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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

        StopVirtualDisplayRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        StopVirtualDisplayRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

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

    const PB_Gpio = {};

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

    PB_Gpio.GpioPinMode = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "OUTPUT"] = 0;
        values[valuesById[1] = "INPUT"] = 1;
        return values;
    })();

    PB_Gpio.GpioInputPull = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "NO"] = 0;
        values[valuesById[1] = "UP"] = 1;
        values[valuesById[2] = "DOWN"] = 2;
        return values;
    })();

    PB_Gpio.GpioOtgMode = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "OFF"] = 0;
        values[valuesById[1] = "ON"] = 1;
        return values;
    })();

    PB_Gpio.SetPinMode = (function() {

        const SetPinMode = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        SetPinMode.prototype.pin = 0;
        SetPinMode.prototype.mode = 0;

        SetPinMode.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.pin != null && $Object.hasOwnProperty.call(message, "pin") && message.pin !== 0)
                writer.uint32(8).int32(message.pin);
            if (message.mode != null && $Object.hasOwnProperty.call(message, "mode") && message.mode !== 0)
                writer.uint32(16).int32(message.mode);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        SetPinMode.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        SetPinMode.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SetPinMode.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gpio.SetPinMode";
        };

        return SetPinMode;
    })();

    PB_Gpio.SetInputPull = (function() {

        const SetInputPull = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        SetInputPull.prototype.pin = 0;
        SetInputPull.prototype.pullMode = 0;

        SetInputPull.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.pin != null && $Object.hasOwnProperty.call(message, "pin") && message.pin !== 0)
                writer.uint32(8).int32(message.pin);
            if (message.pullMode != null && $Object.hasOwnProperty.call(message, "pullMode") && message.pullMode !== 0)
                writer.uint32(16).int32(message.pullMode);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        SetInputPull.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        SetInputPull.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SetInputPull.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gpio.SetInputPull";
        };

        return SetInputPull;
    })();

    PB_Gpio.GetPinMode = (function() {

        const GetPinMode = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        GetPinMode.prototype.pin = 0;

        GetPinMode.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.pin != null && $Object.hasOwnProperty.call(message, "pin") && message.pin !== 0)
                writer.uint32(8).int32(message.pin);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        GetPinMode.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        GetPinMode.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GetPinMode.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gpio.GetPinMode";
        };

        return GetPinMode;
    })();

    PB_Gpio.GetPinModeResponse = (function() {

        const GetPinModeResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        GetPinModeResponse.prototype.mode = 0;

        GetPinModeResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.mode != null && $Object.hasOwnProperty.call(message, "mode") && message.mode !== 0)
                writer.uint32(8).int32(message.mode);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        GetPinModeResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        GetPinModeResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GetPinModeResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gpio.GetPinModeResponse";
        };

        return GetPinModeResponse;
    })();

    PB_Gpio.ReadPin = (function() {

        const ReadPin = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        ReadPin.prototype.pin = 0;

        ReadPin.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.pin != null && $Object.hasOwnProperty.call(message, "pin") && message.pin !== 0)
                writer.uint32(8).int32(message.pin);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        ReadPin.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        ReadPin.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ReadPin.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gpio.ReadPin";
        };

        return ReadPin;
    })();

    PB_Gpio.ReadPinResponse = (function() {

        const ReadPinResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        ReadPinResponse.prototype.value = 0;

        ReadPinResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.value != null && $Object.hasOwnProperty.call(message, "value") && message.value !== 0)
                writer.uint32(16).uint32(message.value);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        ReadPinResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        ReadPinResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ReadPinResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gpio.ReadPinResponse";
        };

        return ReadPinResponse;
    })();

    PB_Gpio.WritePin = (function() {

        const WritePin = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        WritePin.prototype.pin = 0;
        WritePin.prototype.value = 0;

        WritePin.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.pin != null && $Object.hasOwnProperty.call(message, "pin") && message.pin !== 0)
                writer.uint32(8).int32(message.pin);
            if (message.value != null && $Object.hasOwnProperty.call(message, "value") && message.value !== 0)
                writer.uint32(16).uint32(message.value);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        WritePin.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        WritePin.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        WritePin.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gpio.WritePin";
        };

        return WritePin;
    })();

    PB_Gpio.GetOtgMode = (function() {

        const GetOtgMode = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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

        GetOtgMode.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        GetOtgMode.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GetOtgMode.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gpio.GetOtgMode";
        };

        return GetOtgMode;
    })();

    PB_Gpio.GetOtgModeResponse = (function() {

        const GetOtgModeResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        GetOtgModeResponse.prototype.mode = 0;

        GetOtgModeResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.mode != null && $Object.hasOwnProperty.call(message, "mode") && message.mode !== 0)
                writer.uint32(8).int32(message.mode);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        GetOtgModeResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        GetOtgModeResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GetOtgModeResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Gpio.GetOtgModeResponse";
        };

        return GetOtgModeResponse;
    })();

    PB_Gpio.SetOtgMode = (function() {

        const SetOtgMode = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        SetOtgMode.prototype.mode = 0;

        SetOtgMode.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.mode != null && $Object.hasOwnProperty.call(message, "mode") && message.mode !== 0)
                writer.uint32(8).int32(message.mode);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        SetOtgMode.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        SetOtgMode.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

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

    const PB_Property = {};

    PB_Property.GetRequest = (function() {

        const GetRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        GetRequest.prototype.key = "";

        GetRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.key != null && $Object.hasOwnProperty.call(message, "key") && message.key !== "")
                writer.uint32(10).string(message.key);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        GetRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        GetRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GetRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Property.GetRequest";
        };

        return GetRequest;
    })();

    PB_Property.GetResponse = (function() {

        const GetResponse = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        GetResponse.prototype.key = "";
        GetResponse.prototype.value = "";

        GetResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.key != null && $Object.hasOwnProperty.call(message, "key") && message.key !== "")
                writer.uint32(10).string(message.key);
            if (message.value != null && $Object.hasOwnProperty.call(message, "value") && message.value !== "")
                writer.uint32(18).string(message.value);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        GetResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        GetResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

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

    const PB_Desktop = {};

    PB_Desktop.IsLockedRequest = (function() {

        const IsLockedRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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

        IsLockedRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        IsLockedRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        IsLockedRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Desktop.IsLockedRequest";
        };

        return IsLockedRequest;
    })();

    PB_Desktop.UnlockRequest = (function() {

        const UnlockRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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

        UnlockRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        UnlockRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        UnlockRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Desktop.UnlockRequest";
        };

        return UnlockRequest;
    })();

    PB_Desktop.StatusSubscribeRequest = (function() {

        const StatusSubscribeRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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

        StatusSubscribeRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        StatusSubscribeRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        StatusSubscribeRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Desktop.StatusSubscribeRequest";
        };

        return StatusSubscribeRequest;
    })();

    PB_Desktop.StatusUnsubscribeRequest = (function() {

        const StatusUnsubscribeRequest = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

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

        StatusUnsubscribeRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        StatusUnsubscribeRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        StatusUnsubscribeRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/PB_Desktop.StatusUnsubscribeRequest";
        };

        return StatusUnsubscribeRequest;
    })();

    PB_Desktop.Status = (function() {

        const Status = function (properties) {
            if (properties)
                for (let keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        Status.prototype.locked = false;

        Status.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.locked != null && $Object.hasOwnProperty.call(message, "locked") && message.locked !== false)
                writer.uint32(8).bool(message.locked);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        Status.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

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

        Status.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

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
