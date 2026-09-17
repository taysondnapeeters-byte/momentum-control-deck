import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace PB. */
export namespace PB {

    /** CommandStatus enum. */
    enum CommandStatus {

        /** OK value */
        OK = 0,

        /** < Common Errors */
        ERROR = 1,

        /** ERROR_DECODE value */
        ERROR_DECODE = 2,

        /** ERROR_NOT_IMPLEMENTED value */
        ERROR_NOT_IMPLEMENTED = 3,

        /** ERROR_BUSY value */
        ERROR_BUSY = 4,

        /** ERROR_CONTINUOUS_COMMAND_INTERRUPTED value */
        ERROR_CONTINUOUS_COMMAND_INTERRUPTED = 14,

        /** ERROR_INVALID_PARAMETERS value */
        ERROR_INVALID_PARAMETERS = 15,

        /** < Storage Errors */
        ERROR_STORAGE_NOT_READY = 5,

        /** ERROR_STORAGE_EXIST value */
        ERROR_STORAGE_EXIST = 6,

        /** ERROR_STORAGE_NOT_EXIST value */
        ERROR_STORAGE_NOT_EXIST = 7,

        /** ERROR_STORAGE_INVALID_PARAMETER value */
        ERROR_STORAGE_INVALID_PARAMETER = 8,

        /** ERROR_STORAGE_DENIED value */
        ERROR_STORAGE_DENIED = 9,

        /** ERROR_STORAGE_INVALID_NAME value */
        ERROR_STORAGE_INVALID_NAME = 10,

        /** ERROR_STORAGE_INTERNAL value */
        ERROR_STORAGE_INTERNAL = 11,

        /** ERROR_STORAGE_NOT_IMPLEMENTED value */
        ERROR_STORAGE_NOT_IMPLEMENTED = 12,

        /** ERROR_STORAGE_ALREADY_OPEN value */
        ERROR_STORAGE_ALREADY_OPEN = 13,

        /** ERROR_STORAGE_DIR_NOT_EMPTY value */
        ERROR_STORAGE_DIR_NOT_EMPTY = 18,

        /** < Application Errors */
        ERROR_APP_CANT_START = 16,

        /** ERROR_APP_SYSTEM_LOCKED value */
        ERROR_APP_SYSTEM_LOCKED = 17,

        /** ERROR_APP_NOT_RUNNING value */
        ERROR_APP_NOT_RUNNING = 21,

        /** ERROR_APP_CMD_ERROR value */
        ERROR_APP_CMD_ERROR = 22,

        /** < Virtual Display Errors */
        ERROR_VIRTUAL_DISPLAY_ALREADY_STARTED = 19,

        /** ERROR_VIRTUAL_DISPLAY_NOT_STARTED value */
        ERROR_VIRTUAL_DISPLAY_NOT_STARTED = 20,

        /** < GPIO Errors */
        ERROR_GPIO_MODE_INCORRECT = 58,

        /** ERROR_GPIO_UNKNOWN_PIN_MODE value */
        ERROR_GPIO_UNKNOWN_PIN_MODE = 59
    }

    /**
     * Properties of an Empty.
     * @deprecated Use PB.Empty.$Properties instead.
     */
    interface IEmpty extends PB.Empty.$Properties {
    }

    /** Represents an Empty. */
    class Empty {

        /**
         * Constructs a new Empty.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.Empty.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified Empty message. Does not implicitly {@link PB.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB.Empty.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link PB.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB.Empty.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB.Empty & PB.Empty.$Shape} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB.Empty & PB.Empty.$Shape;

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB.Empty & PB.Empty.$Shape} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB.Empty & PB.Empty.$Shape;

        /**
         * Gets the type url for Empty
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Empty {

        /** Properties of an Empty. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an Empty. */
        type $Shape = PB.Empty.$Properties;
    }

    /**
     * Properties of a StopSession.
     * @deprecated Use PB.StopSession.$Properties instead.
     */
    interface IStopSession extends PB.StopSession.$Properties {
    }

    /** Represents a StopSession. */
    class StopSession {

        /**
         * Constructs a new StopSession.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.StopSession.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified StopSession message. Does not implicitly {@link PB.StopSession.verify|verify} messages.
         * @param message StopSession message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB.StopSession.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StopSession message, length delimited. Does not implicitly {@link PB.StopSession.verify|verify} messages.
         * @param message StopSession message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB.StopSession.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StopSession message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB.StopSession & PB.StopSession.$Shape} StopSession
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB.StopSession & PB.StopSession.$Shape;

        /**
         * Decodes a StopSession message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB.StopSession & PB.StopSession.$Shape} StopSession
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB.StopSession & PB.StopSession.$Shape;

        /**
         * Gets the type url for StopSession
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace StopSession {

        /** Properties of a StopSession. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a StopSession. */
        type $Shape = PB.StopSession.$Properties;
    }

    /**
     * Properties of a Main.
     * @deprecated Use PB.Main.$Properties instead.
     */
    interface IMain extends PB.Main.$Properties {
    }

    /** Represents a Main. */
    class Main {

        /**
         * Constructs a new Main.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.Main.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Main commandId. */
        commandId: number;

        /** Main commandStatus. */
        commandStatus: PB.CommandStatus;

        /** Main hasNext. */
        hasNext: boolean;

        /** Main empty. */
        empty?: (PB.Empty.$Properties|null);

        /** Main stopSession. */
        stopSession?: (PB.StopSession.$Properties|null);

        /** Main systemPingRequest. */
        systemPingRequest?: (PB_System.PingRequest.$Properties|null);

        /** Main systemPingResponse. */
        systemPingResponse?: (PB_System.PingResponse.$Properties|null);

        /** Main systemRebootRequest. */
        systemRebootRequest?: (PB_System.RebootRequest.$Properties|null);

        /** Main systemDeviceInfoRequest. */
        systemDeviceInfoRequest?: (PB_System.DeviceInfoRequest.$Properties|null);

        /** Main systemDeviceInfoResponse. */
        systemDeviceInfoResponse?: (PB_System.DeviceInfoResponse.$Properties|null);

        /** Main systemFactoryResetRequest. */
        systemFactoryResetRequest?: (PB_System.FactoryResetRequest.$Properties|null);

        /** Main systemGetDatetimeRequest. */
        systemGetDatetimeRequest?: (PB_System.GetDateTimeRequest.$Properties|null);

        /** Main systemGetDatetimeResponse. */
        systemGetDatetimeResponse?: (PB_System.GetDateTimeResponse.$Properties|null);

        /** Main systemSetDatetimeRequest. */
        systemSetDatetimeRequest?: (PB_System.SetDateTimeRequest.$Properties|null);

        /** Main systemPlayAudiovisualAlertRequest. */
        systemPlayAudiovisualAlertRequest?: (PB_System.PlayAudiovisualAlertRequest.$Properties|null);

        /** Main systemProtobufVersionRequest. */
        systemProtobufVersionRequest?: (PB_System.ProtobufVersionRequest.$Properties|null);

        /** Main systemProtobufVersionResponse. */
        systemProtobufVersionResponse?: (PB_System.ProtobufVersionResponse.$Properties|null);

        /** Main systemUpdateRequest. */
        systemUpdateRequest?: (PB_System.UpdateRequest.$Properties|null);

        /** Main systemUpdateResponse. */
        systemUpdateResponse?: (PB_System.UpdateResponse.$Properties|null);

        /** Main systemPowerInfoRequest. */
        systemPowerInfoRequest?: (PB_System.PowerInfoRequest.$Properties|null);

        /** Main systemPowerInfoResponse. */
        systemPowerInfoResponse?: (PB_System.PowerInfoResponse.$Properties|null);

        /** Main storageInfoRequest. */
        storageInfoRequest?: (PB_Storage.InfoRequest.$Properties|null);

        /** Main storageInfoResponse. */
        storageInfoResponse?: (PB_Storage.InfoResponse.$Properties|null);

        /** Main storageTimestampRequest. */
        storageTimestampRequest?: (PB_Storage.TimestampRequest.$Properties|null);

        /** Main storageTimestampResponse. */
        storageTimestampResponse?: (PB_Storage.TimestampResponse.$Properties|null);

        /** Main storageStatRequest. */
        storageStatRequest?: (PB_Storage.StatRequest.$Properties|null);

        /** Main storageStatResponse. */
        storageStatResponse?: (PB_Storage.StatResponse.$Properties|null);

        /** Main storageListRequest. */
        storageListRequest?: (PB_Storage.ListRequest.$Properties|null);

        /** Main storageListResponse. */
        storageListResponse?: (PB_Storage.ListResponse.$Properties|null);

        /** Main storageReadRequest. */
        storageReadRequest?: (PB_Storage.ReadRequest.$Properties|null);

        /** Main storageReadResponse. */
        storageReadResponse?: (PB_Storage.ReadResponse.$Properties|null);

        /** Main storageWriteRequest. */
        storageWriteRequest?: (PB_Storage.WriteRequest.$Properties|null);

        /** Main storageDeleteRequest. */
        storageDeleteRequest?: (PB_Storage.DeleteRequest.$Properties|null);

        /** Main storageMkdirRequest. */
        storageMkdirRequest?: (PB_Storage.MkdirRequest.$Properties|null);

        /** Main storageMd5sumRequest. */
        storageMd5sumRequest?: (PB_Storage.Md5sumRequest.$Properties|null);

        /** Main storageMd5sumResponse. */
        storageMd5sumResponse?: (PB_Storage.Md5sumResponse.$Properties|null);

        /** Main storageRenameRequest. */
        storageRenameRequest?: (PB_Storage.RenameRequest.$Properties|null);

        /** Main storageBackupCreateRequest. */
        storageBackupCreateRequest?: (PB_Storage.BackupCreateRequest.$Properties|null);

        /** Main storageBackupRestoreRequest. */
        storageBackupRestoreRequest?: (PB_Storage.BackupRestoreRequest.$Properties|null);

        /** Main storageTarExtractRequest. */
        storageTarExtractRequest?: (PB_Storage.TarExtractRequest.$Properties|null);

        /** Main appStartRequest. */
        appStartRequest?: (PB_App.StartRequest.$Properties|null);

        /** Main appLockStatusRequest. */
        appLockStatusRequest?: (PB_App.LockStatusRequest.$Properties|null);

        /** Main appLockStatusResponse. */
        appLockStatusResponse?: (PB_App.LockStatusResponse.$Properties|null);

        /** Main appExitRequest. */
        appExitRequest?: (PB_App.AppExitRequest.$Properties|null);

        /** Main appLoadFileRequest. */
        appLoadFileRequest?: (PB_App.AppLoadFileRequest.$Properties|null);

        /** Main appButtonPressRequest. */
        appButtonPressRequest?: (PB_App.AppButtonPressRequest.$Properties|null);

        /** Main appButtonReleaseRequest. */
        appButtonReleaseRequest?: (PB_App.AppButtonReleaseRequest.$Properties|null);

        /** Main appButtonPressReleaseRequest. */
        appButtonPressReleaseRequest?: (PB_App.AppButtonPressReleaseRequest.$Properties|null);

        /** Main appGetErrorRequest. */
        appGetErrorRequest?: (PB_App.GetErrorRequest.$Properties|null);

        /** Main appGetErrorResponse. */
        appGetErrorResponse?: (PB_App.GetErrorResponse.$Properties|null);

        /** Main appDataExchangeRequest. */
        appDataExchangeRequest?: (PB_App.DataExchangeRequest.$Properties|null);

        /** Main guiStartScreenStreamRequest. */
        guiStartScreenStreamRequest?: (PB_Gui.StartScreenStreamRequest.$Properties|null);

        /** Main guiStopScreenStreamRequest. */
        guiStopScreenStreamRequest?: (PB_Gui.StopScreenStreamRequest.$Properties|null);

        /** Main guiScreenFrame. */
        guiScreenFrame?: (PB_Gui.ScreenFrame.$Properties|null);

        /** Main guiSendInputEventRequest. */
        guiSendInputEventRequest?: (PB_Gui.SendInputEventRequest.$Properties|null);

        /** Main guiStartVirtualDisplayRequest. */
        guiStartVirtualDisplayRequest?: (PB_Gui.StartVirtualDisplayRequest.$Properties|null);

        /** Main guiStopVirtualDisplayRequest. */
        guiStopVirtualDisplayRequest?: (PB_Gui.StopVirtualDisplayRequest.$Properties|null);

        /** Main gpioSetPinMode. */
        gpioSetPinMode?: (PB_Gpio.SetPinMode.$Properties|null);

        /** Main gpioSetInputPull. */
        gpioSetInputPull?: (PB_Gpio.SetInputPull.$Properties|null);

        /** Main gpioGetPinMode. */
        gpioGetPinMode?: (PB_Gpio.GetPinMode.$Properties|null);

        /** Main gpioGetPinModeResponse. */
        gpioGetPinModeResponse?: (PB_Gpio.GetPinModeResponse.$Properties|null);

        /** Main gpioReadPin. */
        gpioReadPin?: (PB_Gpio.ReadPin.$Properties|null);

        /** Main gpioReadPinResponse. */
        gpioReadPinResponse?: (PB_Gpio.ReadPinResponse.$Properties|null);

        /** Main gpioWritePin. */
        gpioWritePin?: (PB_Gpio.WritePin.$Properties|null);

        /** Main gpioGetOtgMode. */
        gpioGetOtgMode?: (PB_Gpio.GetOtgMode.$Properties|null);

        /** Main gpioGetOtgModeResponse. */
        gpioGetOtgModeResponse?: (PB_Gpio.GetOtgModeResponse.$Properties|null);

        /** Main gpioSetOtgMode. */
        gpioSetOtgMode?: (PB_Gpio.SetOtgMode.$Properties|null);

        /** Main appStateResponse. */
        appStateResponse?: (PB_App.AppStateResponse.$Properties|null);

        /** Main propertyGetRequest. */
        propertyGetRequest?: (PB_Property.GetRequest.$Properties|null);

        /** Main propertyGetResponse. */
        propertyGetResponse?: (PB_Property.GetResponse.$Properties|null);

        /** Main desktopIsLockedRequest. */
        desktopIsLockedRequest?: (PB_Desktop.IsLockedRequest.$Properties|null);

        /** Main desktopUnlockRequest. */
        desktopUnlockRequest?: (PB_Desktop.UnlockRequest.$Properties|null);

        /** Main desktopStatusSubscribeRequest. */
        desktopStatusSubscribeRequest?: (PB_Desktop.StatusSubscribeRequest.$Properties|null);

        /** Main desktopStatusUnsubscribeRequest. */
        desktopStatusUnsubscribeRequest?: (PB_Desktop.StatusUnsubscribeRequest.$Properties|null);

        /** Main desktopStatus. */
        desktopStatus?: (PB_Desktop.Status.$Properties|null);

        /** Main content. */
        content?: ("empty"|"stopSession"|"systemPingRequest"|"systemPingResponse"|"systemRebootRequest"|"systemDeviceInfoRequest"|"systemDeviceInfoResponse"|"systemFactoryResetRequest"|"systemGetDatetimeRequest"|"systemGetDatetimeResponse"|"systemSetDatetimeRequest"|"systemPlayAudiovisualAlertRequest"|"systemProtobufVersionRequest"|"systemProtobufVersionResponse"|"systemUpdateRequest"|"systemUpdateResponse"|"systemPowerInfoRequest"|"systemPowerInfoResponse"|"storageInfoRequest"|"storageInfoResponse"|"storageTimestampRequest"|"storageTimestampResponse"|"storageStatRequest"|"storageStatResponse"|"storageListRequest"|"storageListResponse"|"storageReadRequest"|"storageReadResponse"|"storageWriteRequest"|"storageDeleteRequest"|"storageMkdirRequest"|"storageMd5sumRequest"|"storageMd5sumResponse"|"storageRenameRequest"|"storageBackupCreateRequest"|"storageBackupRestoreRequest"|"storageTarExtractRequest"|"appStartRequest"|"appLockStatusRequest"|"appLockStatusResponse"|"appExitRequest"|"appLoadFileRequest"|"appButtonPressRequest"|"appButtonReleaseRequest"|"appButtonPressReleaseRequest"|"appGetErrorRequest"|"appGetErrorResponse"|"appDataExchangeRequest"|"guiStartScreenStreamRequest"|"guiStopScreenStreamRequest"|"guiScreenFrame"|"guiSendInputEventRequest"|"guiStartVirtualDisplayRequest"|"guiStopVirtualDisplayRequest"|"gpioSetPinMode"|"gpioSetInputPull"|"gpioGetPinMode"|"gpioGetPinModeResponse"|"gpioReadPin"|"gpioReadPinResponse"|"gpioWritePin"|"gpioGetOtgMode"|"gpioGetOtgModeResponse"|"gpioSetOtgMode"|"appStateResponse"|"propertyGetRequest"|"propertyGetResponse"|"desktopIsLockedRequest"|"desktopUnlockRequest"|"desktopStatusSubscribeRequest"|"desktopStatusUnsubscribeRequest"|"desktopStatus");

        /**
         * Encodes the specified Main message. Does not implicitly {@link PB.Main.verify|verify} messages.
         * @param message Main message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB.Main.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Main message, length delimited. Does not implicitly {@link PB.Main.verify|verify} messages.
         * @param message Main message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB.Main.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Main message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB.Main & PB.Main.$Shape} Main
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB.Main & PB.Main.$Shape;

        /**
         * Decodes a Main message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB.Main & PB.Main.$Shape} Main
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB.Main & PB.Main.$Shape;

        /**
         * Gets the type url for Main
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Main {

        /** Properties of a Main. */
        interface $Properties {

            /** Main commandId */
            commandId?: (number|null);

            /** Main commandStatus */
            commandStatus?: (PB.CommandStatus|null);

            /** Main hasNext */
            hasNext?: (boolean|null);

            /** Main empty */
            empty?: (PB.Empty.$Properties|null);

            /** Main stopSession */
            stopSession?: (PB.StopSession.$Properties|null);

            /** Main systemPingRequest */
            systemPingRequest?: (PB_System.PingRequest.$Properties|null);

            /** Main systemPingResponse */
            systemPingResponse?: (PB_System.PingResponse.$Properties|null);

            /** Main systemRebootRequest */
            systemRebootRequest?: (PB_System.RebootRequest.$Properties|null);

            /** Main systemDeviceInfoRequest */
            systemDeviceInfoRequest?: (PB_System.DeviceInfoRequest.$Properties|null);

            /** Main systemDeviceInfoResponse */
            systemDeviceInfoResponse?: (PB_System.DeviceInfoResponse.$Properties|null);

            /** Main systemFactoryResetRequest */
            systemFactoryResetRequest?: (PB_System.FactoryResetRequest.$Properties|null);

            /** Main systemGetDatetimeRequest */
            systemGetDatetimeRequest?: (PB_System.GetDateTimeRequest.$Properties|null);

            /** Main systemGetDatetimeResponse */
            systemGetDatetimeResponse?: (PB_System.GetDateTimeResponse.$Properties|null);

            /** Main systemSetDatetimeRequest */
            systemSetDatetimeRequest?: (PB_System.SetDateTimeRequest.$Properties|null);

            /** Main systemPlayAudiovisualAlertRequest */
            systemPlayAudiovisualAlertRequest?: (PB_System.PlayAudiovisualAlertRequest.$Properties|null);

            /** Main systemProtobufVersionRequest */
            systemProtobufVersionRequest?: (PB_System.ProtobufVersionRequest.$Properties|null);

            /** Main systemProtobufVersionResponse */
            systemProtobufVersionResponse?: (PB_System.ProtobufVersionResponse.$Properties|null);

            /** Main systemUpdateRequest */
            systemUpdateRequest?: (PB_System.UpdateRequest.$Properties|null);

            /** Main systemUpdateResponse */
            systemUpdateResponse?: (PB_System.UpdateResponse.$Properties|null);

            /** Main systemPowerInfoRequest */
            systemPowerInfoRequest?: (PB_System.PowerInfoRequest.$Properties|null);

            /** Main systemPowerInfoResponse */
            systemPowerInfoResponse?: (PB_System.PowerInfoResponse.$Properties|null);

            /** Main storageInfoRequest */
            storageInfoRequest?: (PB_Storage.InfoRequest.$Properties|null);

            /** Main storageInfoResponse */
            storageInfoResponse?: (PB_Storage.InfoResponse.$Properties|null);

            /** Main storageTimestampRequest */
            storageTimestampRequest?: (PB_Storage.TimestampRequest.$Properties|null);

            /** Main storageTimestampResponse */
            storageTimestampResponse?: (PB_Storage.TimestampResponse.$Properties|null);

            /** Main storageStatRequest */
            storageStatRequest?: (PB_Storage.StatRequest.$Properties|null);

            /** Main storageStatResponse */
            storageStatResponse?: (PB_Storage.StatResponse.$Properties|null);

            /** Main storageListRequest */
            storageListRequest?: (PB_Storage.ListRequest.$Properties|null);

            /** Main storageListResponse */
            storageListResponse?: (PB_Storage.ListResponse.$Properties|null);

            /** Main storageReadRequest */
            storageReadRequest?: (PB_Storage.ReadRequest.$Properties|null);

            /** Main storageReadResponse */
            storageReadResponse?: (PB_Storage.ReadResponse.$Properties|null);

            /** Main storageWriteRequest */
            storageWriteRequest?: (PB_Storage.WriteRequest.$Properties|null);

            /** Main storageDeleteRequest */
            storageDeleteRequest?: (PB_Storage.DeleteRequest.$Properties|null);

            /** Main storageMkdirRequest */
            storageMkdirRequest?: (PB_Storage.MkdirRequest.$Properties|null);

            /** Main storageMd5sumRequest */
            storageMd5sumRequest?: (PB_Storage.Md5sumRequest.$Properties|null);

            /** Main storageMd5sumResponse */
            storageMd5sumResponse?: (PB_Storage.Md5sumResponse.$Properties|null);

            /** Main storageRenameRequest */
            storageRenameRequest?: (PB_Storage.RenameRequest.$Properties|null);

            /** Main storageBackupCreateRequest */
            storageBackupCreateRequest?: (PB_Storage.BackupCreateRequest.$Properties|null);

            /** Main storageBackupRestoreRequest */
            storageBackupRestoreRequest?: (PB_Storage.BackupRestoreRequest.$Properties|null);

            /** Main storageTarExtractRequest */
            storageTarExtractRequest?: (PB_Storage.TarExtractRequest.$Properties|null);

            /** Main appStartRequest */
            appStartRequest?: (PB_App.StartRequest.$Properties|null);

            /** Main appLockStatusRequest */
            appLockStatusRequest?: (PB_App.LockStatusRequest.$Properties|null);

            /** Main appLockStatusResponse */
            appLockStatusResponse?: (PB_App.LockStatusResponse.$Properties|null);

            /** Main appExitRequest */
            appExitRequest?: (PB_App.AppExitRequest.$Properties|null);

            /** Main appLoadFileRequest */
            appLoadFileRequest?: (PB_App.AppLoadFileRequest.$Properties|null);

            /** Main appButtonPressRequest */
            appButtonPressRequest?: (PB_App.AppButtonPressRequest.$Properties|null);

            /** Main appButtonReleaseRequest */
            appButtonReleaseRequest?: (PB_App.AppButtonReleaseRequest.$Properties|null);

            /** Main appButtonPressReleaseRequest */
            appButtonPressReleaseRequest?: (PB_App.AppButtonPressReleaseRequest.$Properties|null);

            /** Main appGetErrorRequest */
            appGetErrorRequest?: (PB_App.GetErrorRequest.$Properties|null);

            /** Main appGetErrorResponse */
            appGetErrorResponse?: (PB_App.GetErrorResponse.$Properties|null);

            /** Main appDataExchangeRequest */
            appDataExchangeRequest?: (PB_App.DataExchangeRequest.$Properties|null);

            /** Main guiStartScreenStreamRequest */
            guiStartScreenStreamRequest?: (PB_Gui.StartScreenStreamRequest.$Properties|null);

            /** Main guiStopScreenStreamRequest */
            guiStopScreenStreamRequest?: (PB_Gui.StopScreenStreamRequest.$Properties|null);

            /** Main guiScreenFrame */
            guiScreenFrame?: (PB_Gui.ScreenFrame.$Properties|null);

            /** Main guiSendInputEventRequest */
            guiSendInputEventRequest?: (PB_Gui.SendInputEventRequest.$Properties|null);

            /** Main guiStartVirtualDisplayRequest */
            guiStartVirtualDisplayRequest?: (PB_Gui.StartVirtualDisplayRequest.$Properties|null);

            /** Main guiStopVirtualDisplayRequest */
            guiStopVirtualDisplayRequest?: (PB_Gui.StopVirtualDisplayRequest.$Properties|null);

            /** Main gpioSetPinMode */
            gpioSetPinMode?: (PB_Gpio.SetPinMode.$Properties|null);

            /** Main gpioSetInputPull */
            gpioSetInputPull?: (PB_Gpio.SetInputPull.$Properties|null);

            /** Main gpioGetPinMode */
            gpioGetPinMode?: (PB_Gpio.GetPinMode.$Properties|null);

            /** Main gpioGetPinModeResponse */
            gpioGetPinModeResponse?: (PB_Gpio.GetPinModeResponse.$Properties|null);

            /** Main gpioReadPin */
            gpioReadPin?: (PB_Gpio.ReadPin.$Properties|null);

            /** Main gpioReadPinResponse */
            gpioReadPinResponse?: (PB_Gpio.ReadPinResponse.$Properties|null);

            /** Main gpioWritePin */
            gpioWritePin?: (PB_Gpio.WritePin.$Properties|null);

            /** Main gpioGetOtgMode */
            gpioGetOtgMode?: (PB_Gpio.GetOtgMode.$Properties|null);

            /** Main gpioGetOtgModeResponse */
            gpioGetOtgModeResponse?: (PB_Gpio.GetOtgModeResponse.$Properties|null);

            /** Main gpioSetOtgMode */
            gpioSetOtgMode?: (PB_Gpio.SetOtgMode.$Properties|null);

            /** Main appStateResponse */
            appStateResponse?: (PB_App.AppStateResponse.$Properties|null);

            /** Main propertyGetRequest */
            propertyGetRequest?: (PB_Property.GetRequest.$Properties|null);

            /** Main propertyGetResponse */
            propertyGetResponse?: (PB_Property.GetResponse.$Properties|null);

            /** Main desktopIsLockedRequest */
            desktopIsLockedRequest?: (PB_Desktop.IsLockedRequest.$Properties|null);

            /** Main desktopUnlockRequest */
            desktopUnlockRequest?: (PB_Desktop.UnlockRequest.$Properties|null);

            /** Main desktopStatusSubscribeRequest */
            desktopStatusSubscribeRequest?: (PB_Desktop.StatusSubscribeRequest.$Properties|null);

            /** Main desktopStatusUnsubscribeRequest */
            desktopStatusUnsubscribeRequest?: (PB_Desktop.StatusUnsubscribeRequest.$Properties|null);

            /** Main desktopStatus */
            desktopStatus?: (PB_Desktop.Status.$Properties|null);

            /** Main content */
            content?: ("empty"|"stopSession"|"systemPingRequest"|"systemPingResponse"|"systemRebootRequest"|"systemDeviceInfoRequest"|"systemDeviceInfoResponse"|"systemFactoryResetRequest"|"systemGetDatetimeRequest"|"systemGetDatetimeResponse"|"systemSetDatetimeRequest"|"systemPlayAudiovisualAlertRequest"|"systemProtobufVersionRequest"|"systemProtobufVersionResponse"|"systemUpdateRequest"|"systemUpdateResponse"|"systemPowerInfoRequest"|"systemPowerInfoResponse"|"storageInfoRequest"|"storageInfoResponse"|"storageTimestampRequest"|"storageTimestampResponse"|"storageStatRequest"|"storageStatResponse"|"storageListRequest"|"storageListResponse"|"storageReadRequest"|"storageReadResponse"|"storageWriteRequest"|"storageDeleteRequest"|"storageMkdirRequest"|"storageMd5sumRequest"|"storageMd5sumResponse"|"storageRenameRequest"|"storageBackupCreateRequest"|"storageBackupRestoreRequest"|"storageTarExtractRequest"|"appStartRequest"|"appLockStatusRequest"|"appLockStatusResponse"|"appExitRequest"|"appLoadFileRequest"|"appButtonPressRequest"|"appButtonReleaseRequest"|"appButtonPressReleaseRequest"|"appGetErrorRequest"|"appGetErrorResponse"|"appDataExchangeRequest"|"guiStartScreenStreamRequest"|"guiStopScreenStreamRequest"|"guiScreenFrame"|"guiSendInputEventRequest"|"guiStartVirtualDisplayRequest"|"guiStopVirtualDisplayRequest"|"gpioSetPinMode"|"gpioSetInputPull"|"gpioGetPinMode"|"gpioGetPinModeResponse"|"gpioReadPin"|"gpioReadPinResponse"|"gpioWritePin"|"gpioGetOtgMode"|"gpioGetOtgModeResponse"|"gpioSetOtgMode"|"appStateResponse"|"propertyGetRequest"|"propertyGetResponse"|"desktopIsLockedRequest"|"desktopUnlockRequest"|"desktopStatusSubscribeRequest"|"desktopStatusUnsubscribeRequest"|"desktopStatus");

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of a Main. */
        type $Shape = {
          commandId?: number|null;
          commandStatus?: PB.CommandStatus|null;
          hasNext?: boolean|null;
          empty?: PB.Empty.$Shape|null;
          stopSession?: PB.StopSession.$Shape|null;
          systemPingRequest?: PB_System.PingRequest.$Shape|null;
          systemPingResponse?: PB_System.PingResponse.$Shape|null;
          systemRebootRequest?: PB_System.RebootRequest.$Shape|null;
          systemDeviceInfoRequest?: PB_System.DeviceInfoRequest.$Shape|null;
          systemDeviceInfoResponse?: PB_System.DeviceInfoResponse.$Shape|null;
          systemFactoryResetRequest?: PB_System.FactoryResetRequest.$Shape|null;
          systemGetDatetimeRequest?: PB_System.GetDateTimeRequest.$Shape|null;
          systemGetDatetimeResponse?: PB_System.GetDateTimeResponse.$Shape|null;
          systemSetDatetimeRequest?: PB_System.SetDateTimeRequest.$Shape|null;
          systemPlayAudiovisualAlertRequest?: PB_System.PlayAudiovisualAlertRequest.$Shape|null;
          systemProtobufVersionRequest?: PB_System.ProtobufVersionRequest.$Shape|null;
          systemProtobufVersionResponse?: PB_System.ProtobufVersionResponse.$Shape|null;
          systemUpdateRequest?: PB_System.UpdateRequest.$Shape|null;
          systemUpdateResponse?: PB_System.UpdateResponse.$Shape|null;
          systemPowerInfoRequest?: PB_System.PowerInfoRequest.$Shape|null;
          systemPowerInfoResponse?: PB_System.PowerInfoResponse.$Shape|null;
          storageInfoRequest?: PB_Storage.InfoRequest.$Shape|null;
          storageInfoResponse?: PB_Storage.InfoResponse.$Shape|null;
          storageTimestampRequest?: PB_Storage.TimestampRequest.$Shape|null;
          storageTimestampResponse?: PB_Storage.TimestampResponse.$Shape|null;
          storageStatRequest?: PB_Storage.StatRequest.$Shape|null;
          storageStatResponse?: PB_Storage.StatResponse.$Shape|null;
          storageListRequest?: PB_Storage.ListRequest.$Shape|null;
          storageListResponse?: PB_Storage.ListResponse.$Shape|null;
          storageReadRequest?: PB_Storage.ReadRequest.$Shape|null;
          storageReadResponse?: PB_Storage.ReadResponse.$Shape|null;
          storageWriteRequest?: PB_Storage.WriteRequest.$Shape|null;
          storageDeleteRequest?: PB_Storage.DeleteRequest.$Shape|null;
          storageMkdirRequest?: PB_Storage.MkdirRequest.$Shape|null;
          storageMd5sumRequest?: PB_Storage.Md5sumRequest.$Shape|null;
          storageMd5sumResponse?: PB_Storage.Md5sumResponse.$Shape|null;
          storageRenameRequest?: PB_Storage.RenameRequest.$Shape|null;
          storageBackupCreateRequest?: PB_Storage.BackupCreateRequest.$Shape|null;
          storageBackupRestoreRequest?: PB_Storage.BackupRestoreRequest.$Shape|null;
          storageTarExtractRequest?: PB_Storage.TarExtractRequest.$Shape|null;
          appStartRequest?: PB_App.StartRequest.$Shape|null;
          appLockStatusRequest?: PB_App.LockStatusRequest.$Shape|null;
          appLockStatusResponse?: PB_App.LockStatusResponse.$Shape|null;
          appExitRequest?: PB_App.AppExitRequest.$Shape|null;
          appLoadFileRequest?: PB_App.AppLoadFileRequest.$Shape|null;
          appButtonPressRequest?: PB_App.AppButtonPressRequest.$Shape|null;
          appButtonReleaseRequest?: PB_App.AppButtonReleaseRequest.$Shape|null;
          appButtonPressReleaseRequest?: PB_App.AppButtonPressReleaseRequest.$Shape|null;
          appGetErrorRequest?: PB_App.GetErrorRequest.$Shape|null;
          appGetErrorResponse?: PB_App.GetErrorResponse.$Shape|null;
          appDataExchangeRequest?: PB_App.DataExchangeRequest.$Shape|null;
          guiStartScreenStreamRequest?: PB_Gui.StartScreenStreamRequest.$Shape|null;
          guiStopScreenStreamRequest?: PB_Gui.StopScreenStreamRequest.$Shape|null;
          guiScreenFrame?: PB_Gui.ScreenFrame.$Shape|null;
          guiSendInputEventRequest?: PB_Gui.SendInputEventRequest.$Shape|null;
          guiStartVirtualDisplayRequest?: PB_Gui.StartVirtualDisplayRequest.$Shape|null;
          guiStopVirtualDisplayRequest?: PB_Gui.StopVirtualDisplayRequest.$Shape|null;
          gpioSetPinMode?: PB_Gpio.SetPinMode.$Shape|null;
          gpioSetInputPull?: PB_Gpio.SetInputPull.$Shape|null;
          gpioGetPinMode?: PB_Gpio.GetPinMode.$Shape|null;
          gpioGetPinModeResponse?: PB_Gpio.GetPinModeResponse.$Shape|null;
          gpioReadPin?: PB_Gpio.ReadPin.$Shape|null;
          gpioReadPinResponse?: PB_Gpio.ReadPinResponse.$Shape|null;
          gpioWritePin?: PB_Gpio.WritePin.$Shape|null;
          gpioGetOtgMode?: PB_Gpio.GetOtgMode.$Shape|null;
          gpioGetOtgModeResponse?: PB_Gpio.GetOtgModeResponse.$Shape|null;
          gpioSetOtgMode?: PB_Gpio.SetOtgMode.$Shape|null;
          appStateResponse?: PB_App.AppStateResponse.$Shape|null;
          propertyGetRequest?: PB_Property.GetRequest.$Shape|null;
          propertyGetResponse?: PB_Property.GetResponse.$Shape|null;
          desktopIsLockedRequest?: PB_Desktop.IsLockedRequest.$Shape|null;
          desktopUnlockRequest?: PB_Desktop.UnlockRequest.$Shape|null;
          desktopStatusSubscribeRequest?: PB_Desktop.StatusSubscribeRequest.$Shape|null;
          desktopStatusUnsubscribeRequest?: PB_Desktop.StatusUnsubscribeRequest.$Shape|null;
          desktopStatus?: PB_Desktop.Status.$Shape|null;
          $unknowns?: Uint8Array[];
        } & (
          ({ content?: undefined; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "empty"; empty: PB.Empty.$Shape; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "stopSession"; empty?: null; stopSession: PB.StopSession.$Shape; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemPingRequest"; empty?: null; stopSession?: null; systemPingRequest: PB_System.PingRequest.$Shape; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemPingResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse: PB_System.PingResponse.$Shape; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemRebootRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest: PB_System.RebootRequest.$Shape; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemDeviceInfoRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest: PB_System.DeviceInfoRequest.$Shape; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemDeviceInfoResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse: PB_System.DeviceInfoResponse.$Shape; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemFactoryResetRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest: PB_System.FactoryResetRequest.$Shape; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemGetDatetimeRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest: PB_System.GetDateTimeRequest.$Shape; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemGetDatetimeResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse: PB_System.GetDateTimeResponse.$Shape; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemSetDatetimeRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest: PB_System.SetDateTimeRequest.$Shape; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemPlayAudiovisualAlertRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest: PB_System.PlayAudiovisualAlertRequest.$Shape; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemProtobufVersionRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest: PB_System.ProtobufVersionRequest.$Shape; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemProtobufVersionResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse: PB_System.ProtobufVersionResponse.$Shape; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemUpdateRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest: PB_System.UpdateRequest.$Shape; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemUpdateResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse: PB_System.UpdateResponse.$Shape; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemPowerInfoRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest: PB_System.PowerInfoRequest.$Shape; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "systemPowerInfoResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse: PB_System.PowerInfoResponse.$Shape; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageInfoRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest: PB_Storage.InfoRequest.$Shape; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageInfoResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse: PB_Storage.InfoResponse.$Shape; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageTimestampRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest: PB_Storage.TimestampRequest.$Shape; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageTimestampResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse: PB_Storage.TimestampResponse.$Shape; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageStatRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest: PB_Storage.StatRequest.$Shape; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageStatResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse: PB_Storage.StatResponse.$Shape; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageListRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest: PB_Storage.ListRequest.$Shape; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageListResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse: PB_Storage.ListResponse.$Shape; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageReadRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest: PB_Storage.ReadRequest.$Shape; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageReadResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse: PB_Storage.ReadResponse.$Shape; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageWriteRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest: PB_Storage.WriteRequest.$Shape; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageDeleteRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest: PB_Storage.DeleteRequest.$Shape; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageMkdirRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest: PB_Storage.MkdirRequest.$Shape; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageMd5sumRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest: PB_Storage.Md5sumRequest.$Shape; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageMd5sumResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse: PB_Storage.Md5sumResponse.$Shape; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageRenameRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest: PB_Storage.RenameRequest.$Shape; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageBackupCreateRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest: PB_Storage.BackupCreateRequest.$Shape; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageBackupRestoreRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest: PB_Storage.BackupRestoreRequest.$Shape; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "storageTarExtractRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest: PB_Storage.TarExtractRequest.$Shape; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "appStartRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest: PB_App.StartRequest.$Shape; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "appLockStatusRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest: PB_App.LockStatusRequest.$Shape; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "appLockStatusResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse: PB_App.LockStatusResponse.$Shape; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "appExitRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest: PB_App.AppExitRequest.$Shape; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "appLoadFileRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest: PB_App.AppLoadFileRequest.$Shape; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "appButtonPressRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest: PB_App.AppButtonPressRequest.$Shape; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "appButtonReleaseRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest: PB_App.AppButtonReleaseRequest.$Shape; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "appButtonPressReleaseRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest: PB_App.AppButtonPressReleaseRequest.$Shape; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "appGetErrorRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest: PB_App.GetErrorRequest.$Shape; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "appGetErrorResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse: PB_App.GetErrorResponse.$Shape; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "appDataExchangeRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest: PB_App.DataExchangeRequest.$Shape; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "guiStartScreenStreamRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest: PB_Gui.StartScreenStreamRequest.$Shape; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "guiStopScreenStreamRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest: PB_Gui.StopScreenStreamRequest.$Shape; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "guiScreenFrame"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame: PB_Gui.ScreenFrame.$Shape; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "guiSendInputEventRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest: PB_Gui.SendInputEventRequest.$Shape; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "guiStartVirtualDisplayRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest: PB_Gui.StartVirtualDisplayRequest.$Shape; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "guiStopVirtualDisplayRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest: PB_Gui.StopVirtualDisplayRequest.$Shape; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "gpioSetPinMode"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode: PB_Gpio.SetPinMode.$Shape; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "gpioSetInputPull"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull: PB_Gpio.SetInputPull.$Shape; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "gpioGetPinMode"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode: PB_Gpio.GetPinMode.$Shape; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "gpioGetPinModeResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse: PB_Gpio.GetPinModeResponse.$Shape; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "gpioReadPin"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin: PB_Gpio.ReadPin.$Shape; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "gpioReadPinResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse: PB_Gpio.ReadPinResponse.$Shape; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "gpioWritePin"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin: PB_Gpio.WritePin.$Shape; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "gpioGetOtgMode"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode: PB_Gpio.GetOtgMode.$Shape; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "gpioGetOtgModeResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse: PB_Gpio.GetOtgModeResponse.$Shape; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "gpioSetOtgMode"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode: PB_Gpio.SetOtgMode.$Shape; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "appStateResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse: PB_App.AppStateResponse.$Shape; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "propertyGetRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest: PB_Property.GetRequest.$Shape; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "propertyGetResponse"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse: PB_Property.GetResponse.$Shape; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "desktopIsLockedRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest: PB_Desktop.IsLockedRequest.$Shape; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "desktopUnlockRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest: PB_Desktop.UnlockRequest.$Shape; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "desktopStatusSubscribeRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest: PB_Desktop.StatusSubscribeRequest.$Shape; desktopStatusUnsubscribeRequest?: null; desktopStatus?: null }|{ content?: "desktopStatusUnsubscribeRequest"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest: PB_Desktop.StatusUnsubscribeRequest.$Shape; desktopStatus?: null }|{ content?: "desktopStatus"; empty?: null; stopSession?: null; systemPingRequest?: null; systemPingResponse?: null; systemRebootRequest?: null; systemDeviceInfoRequest?: null; systemDeviceInfoResponse?: null; systemFactoryResetRequest?: null; systemGetDatetimeRequest?: null; systemGetDatetimeResponse?: null; systemSetDatetimeRequest?: null; systemPlayAudiovisualAlertRequest?: null; systemProtobufVersionRequest?: null; systemProtobufVersionResponse?: null; systemUpdateRequest?: null; systemUpdateResponse?: null; systemPowerInfoRequest?: null; systemPowerInfoResponse?: null; storageInfoRequest?: null; storageInfoResponse?: null; storageTimestampRequest?: null; storageTimestampResponse?: null; storageStatRequest?: null; storageStatResponse?: null; storageListRequest?: null; storageListResponse?: null; storageReadRequest?: null; storageReadResponse?: null; storageWriteRequest?: null; storageDeleteRequest?: null; storageMkdirRequest?: null; storageMd5sumRequest?: null; storageMd5sumResponse?: null; storageRenameRequest?: null; storageBackupCreateRequest?: null; storageBackupRestoreRequest?: null; storageTarExtractRequest?: null; appStartRequest?: null; appLockStatusRequest?: null; appLockStatusResponse?: null; appExitRequest?: null; appLoadFileRequest?: null; appButtonPressRequest?: null; appButtonReleaseRequest?: null; appButtonPressReleaseRequest?: null; appGetErrorRequest?: null; appGetErrorResponse?: null; appDataExchangeRequest?: null; guiStartScreenStreamRequest?: null; guiStopScreenStreamRequest?: null; guiScreenFrame?: null; guiSendInputEventRequest?: null; guiStartVirtualDisplayRequest?: null; guiStopVirtualDisplayRequest?: null; gpioSetPinMode?: null; gpioSetInputPull?: null; gpioGetPinMode?: null; gpioGetPinModeResponse?: null; gpioReadPin?: null; gpioReadPinResponse?: null; gpioWritePin?: null; gpioGetOtgMode?: null; gpioGetOtgModeResponse?: null; gpioSetOtgMode?: null; appStateResponse?: null; propertyGetRequest?: null; propertyGetResponse?: null; desktopIsLockedRequest?: null; desktopUnlockRequest?: null; desktopStatusSubscribeRequest?: null; desktopStatusUnsubscribeRequest?: null; desktopStatus: PB_Desktop.Status.$Shape })
        );
    }

    /**
     * Properties of a Region.
     * @deprecated Use PB.Region.$Properties instead.
     */
    interface IRegion extends PB.Region.$Properties {
    }

    /** Represents a Region. */
    class Region {

        /**
         * Constructs a new Region.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB.Region.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Region countryCode. */
        countryCode: Uint8Array;

        /** Region bands. */
        bands: PB.Region.Band.$Properties[];

        /**
         * Encodes the specified Region message. Does not implicitly {@link PB.Region.verify|verify} messages.
         * @param message Region message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB.Region.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Region message, length delimited. Does not implicitly {@link PB.Region.verify|verify} messages.
         * @param message Region message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB.Region.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Region message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB.Region & PB.Region.$Shape} Region
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB.Region & PB.Region.$Shape;

        /**
         * Decodes a Region message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB.Region & PB.Region.$Shape} Region
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB.Region & PB.Region.$Shape;

        /**
         * Gets the type url for Region
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Region {

        /** Properties of a Region. */
        interface $Properties {

            /** Region countryCode */
            countryCode?: (Uint8Array|null);

            /** Region bands */
            bands?: (PB.Region.Band.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Region. */
        type $Shape = PB.Region.$Properties;

        /**
         * Properties of a Band.
         * @deprecated Use PB.Region.Band.$Properties instead.
         */
        interface IBand extends PB.Region.Band.$Properties {
        }

        /** Represents a Band. */
        class Band {

            /**
             * Constructs a new Band.
             * @param [properties] Properties to set
             */
            constructor(properties?: PB.Region.Band.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Band start. */
            start: number;

            /** Band end. */
            end: number;

            /** Band powerLimit. */
            powerLimit: number;

            /** Band dutyCycle. */
            dutyCycle: number;

            /**
             * Encodes the specified Band message. Does not implicitly {@link PB.Region.Band.verify|verify} messages.
             * @param message Band message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: PB.Region.Band.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Band message, length delimited. Does not implicitly {@link PB.Region.Band.verify|verify} messages.
             * @param message Band message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: PB.Region.Band.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Band message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {PB.Region.Band & PB.Region.Band.$Shape} Band
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB.Region.Band & PB.Region.Band.$Shape;

            /**
             * Decodes a Band message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {PB.Region.Band & PB.Region.Band.$Shape} Band
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB.Region.Band & PB.Region.Band.$Shape;

            /**
             * Gets the type url for Band
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Band {

            /** Properties of a Band. */
            interface $Properties {

                /** Band start */
                start?: (number|null);

                /** Band end */
                end?: (number|null);

                /** Band powerLimit */
                powerLimit?: (number|null);

                /** Band dutyCycle */
                dutyCycle?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Band. */
            type $Shape = PB.Region.Band.$Properties;
        }
    }
}

/** Namespace PB_Storage. */
export namespace PB_Storage {

    /**
     * Properties of a File.
     * @deprecated Use PB_Storage.File.$Properties instead.
     */
    interface IFile extends PB_Storage.File.$Properties {
    }

    /** Represents a File. */
    class File {

        /**
         * Constructs a new File.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Storage.File.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** File type. */
        type: PB_Storage.File.FileType;

        /** File name. */
        name: string;

        /** File size. */
        size: number;

        /** File data. */
        data: Uint8Array;

        /** File md5sum. */
        md5sum: string;

        /**
         * Encodes the specified File message. Does not implicitly {@link PB_Storage.File.verify|verify} messages.
         * @param message File message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Storage.File.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified File message, length delimited. Does not implicitly {@link PB_Storage.File.verify|verify} messages.
         * @param message File message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Storage.File.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a File message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Storage.File & PB_Storage.File.$Shape} File
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Storage.File & PB_Storage.File.$Shape;

        /**
         * Decodes a File message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Storage.File & PB_Storage.File.$Shape} File
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Storage.File & PB_Storage.File.$Shape;

        /**
         * Gets the type url for File
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace File {

        /** Properties of a File. */
        interface $Properties {

            /** File type */
            type?: (PB_Storage.File.FileType|null);

            /** File name */
            name?: (string|null);

            /** File size */
            size?: (number|null);

            /** File data */
            data?: (Uint8Array|null);

            /** File md5sum */
            md5sum?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a File. */
        type $Shape = PB_Storage.File.$Properties;

        /** FileType enum. */
        enum FileType {

            /** FILE value */
            FILE = 0,

            /** DIR value */
            DIR = 1
        }
    }

    /**
     * Properties of an InfoRequest.
     * @deprecated Use PB_Storage.InfoRequest.$Properties instead.
     */
    interface IInfoRequest extends PB_Storage.InfoRequest.$Properties {
    }

    /** Represents an InfoRequest. */
    class InfoRequest {

        /**
         * Constructs a new InfoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Storage.InfoRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** InfoRequest path. */
        path: string;

        /**
         * Encodes the specified InfoRequest message. Does not implicitly {@link PB_Storage.InfoRequest.verify|verify} messages.
         * @param message InfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Storage.InfoRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InfoRequest message, length delimited. Does not implicitly {@link PB_Storage.InfoRequest.verify|verify} messages.
         * @param message InfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Storage.InfoRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InfoRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Storage.InfoRequest & PB_Storage.InfoRequest.$Shape} InfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Storage.InfoRequest & PB_Storage.InfoRequest.$Shape;

        /**
         * Decodes an InfoRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Storage.InfoRequest & PB_Storage.InfoRequest.$Shape} InfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Storage.InfoRequest & PB_Storage.InfoRequest.$Shape;

        /**
         * Gets the type url for InfoRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace InfoRequest {

        /** Properties of an InfoRequest. */
        interface $Properties {

            /** InfoRequest path */
            path?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an InfoRequest. */
        type $Shape = PB_Storage.InfoRequest.$Properties;
    }

    /**
     * Properties of an InfoResponse.
     * @deprecated Use PB_Storage.InfoResponse.$Properties instead.
     */
    interface IInfoResponse extends PB_Storage.InfoResponse.$Properties {
    }

    /** Represents an InfoResponse. */
    class InfoResponse {

        /**
         * Constructs a new InfoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Storage.InfoResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** InfoResponse totalSpace. */
        totalSpace: (number|Long);

        /** InfoResponse freeSpace. */
        freeSpace: (number|Long);

        /**
         * Encodes the specified InfoResponse message. Does not implicitly {@link PB_Storage.InfoResponse.verify|verify} messages.
         * @param message InfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Storage.InfoResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InfoResponse message, length delimited. Does not implicitly {@link PB_Storage.InfoResponse.verify|verify} messages.
         * @param message InfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Storage.InfoResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InfoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Storage.InfoResponse & PB_Storage.InfoResponse.$Shape} InfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Storage.InfoResponse & PB_Storage.InfoResponse.$Shape;

        /**
         * Decodes an InfoResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Storage.InfoResponse & PB_Storage.InfoResponse.$Shape} InfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Storage.InfoResponse & PB_Storage.InfoResponse.$Shape;

        /**
         * Gets the type url for InfoResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace InfoResponse {

        /** Properties of an InfoResponse. */
        interface $Properties {

            /** InfoResponse totalSpace */
            totalSpace?: (number|Long|null);

            /** InfoResponse freeSpace */
            freeSpace?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an InfoResponse. */
        type $Shape = PB_Storage.InfoResponse.$Properties;
    }

    /**
     * Properties of a TimestampRequest.
     * @deprecated Use PB_Storage.TimestampRequest.$Properties instead.
     */
    interface ITimestampRequest extends PB_Storage.TimestampRequest.$Properties {
    }

    /** Represents a TimestampRequest. */
    class TimestampRequest {

        /**
         * Constructs a new TimestampRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Storage.TimestampRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** TimestampRequest path. */
        path: string;

        /**
         * Encodes the specified TimestampRequest message. Does not implicitly {@link PB_Storage.TimestampRequest.verify|verify} messages.
         * @param message TimestampRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Storage.TimestampRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TimestampRequest message, length delimited. Does not implicitly {@link PB_Storage.TimestampRequest.verify|verify} messages.
         * @param message TimestampRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Storage.TimestampRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TimestampRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Storage.TimestampRequest & PB_Storage.TimestampRequest.$Shape} TimestampRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Storage.TimestampRequest & PB_Storage.TimestampRequest.$Shape;

        /**
         * Decodes a TimestampRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Storage.TimestampRequest & PB_Storage.TimestampRequest.$Shape} TimestampRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Storage.TimestampRequest & PB_Storage.TimestampRequest.$Shape;

        /**
         * Gets the type url for TimestampRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace TimestampRequest {

        /** Properties of a TimestampRequest. */
        interface $Properties {

            /** TimestampRequest path */
            path?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a TimestampRequest. */
        type $Shape = PB_Storage.TimestampRequest.$Properties;
    }

    /**
     * Properties of a TimestampResponse.
     * @deprecated Use PB_Storage.TimestampResponse.$Properties instead.
     */
    interface ITimestampResponse extends PB_Storage.TimestampResponse.$Properties {
    }

    /** Represents a TimestampResponse. */
    class TimestampResponse {

        /**
         * Constructs a new TimestampResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Storage.TimestampResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** TimestampResponse timestamp. */
        timestamp: number;

        /**
         * Encodes the specified TimestampResponse message. Does not implicitly {@link PB_Storage.TimestampResponse.verify|verify} messages.
         * @param message TimestampResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Storage.TimestampResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TimestampResponse message, length delimited. Does not implicitly {@link PB_Storage.TimestampResponse.verify|verify} messages.
         * @param message TimestampResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Storage.TimestampResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TimestampResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Storage.TimestampResponse & PB_Storage.TimestampResponse.$Shape} TimestampResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Storage.TimestampResponse & PB_Storage.TimestampResponse.$Shape;

        /**
         * Decodes a TimestampResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Storage.TimestampResponse & PB_Storage.TimestampResponse.$Shape} TimestampResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Storage.TimestampResponse & PB_Storage.TimestampResponse.$Shape;

        /**
         * Gets the type url for TimestampResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace TimestampResponse {

        /** Properties of a TimestampResponse. */
        interface $Properties {

            /** TimestampResponse timestamp */
            timestamp?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a TimestampResponse. */
        type $Shape = PB_Storage.TimestampResponse.$Properties;
    }

    /**
     * Properties of a StatRequest.
     * @deprecated Use PB_Storage.StatRequest.$Properties instead.
     */
    interface IStatRequest extends PB_Storage.StatRequest.$Properties {
    }

    /** Represents a StatRequest. */
    class StatRequest {

        /**
         * Constructs a new StatRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Storage.StatRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** StatRequest path. */
        path: string;

        /**
         * Encodes the specified StatRequest message. Does not implicitly {@link PB_Storage.StatRequest.verify|verify} messages.
         * @param message StatRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Storage.StatRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StatRequest message, length delimited. Does not implicitly {@link PB_Storage.StatRequest.verify|verify} messages.
         * @param message StatRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Storage.StatRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StatRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Storage.StatRequest & PB_Storage.StatRequest.$Shape} StatRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Storage.StatRequest & PB_Storage.StatRequest.$Shape;

        /**
         * Decodes a StatRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Storage.StatRequest & PB_Storage.StatRequest.$Shape} StatRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Storage.StatRequest & PB_Storage.StatRequest.$Shape;

        /**
         * Gets the type url for StatRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace StatRequest {

        /** Properties of a StatRequest. */
        interface $Properties {

            /** StatRequest path */
            path?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a StatRequest. */
        type $Shape = PB_Storage.StatRequest.$Properties;
    }

    /**
     * Properties of a StatResponse.
     * @deprecated Use PB_Storage.StatResponse.$Properties instead.
     */
    interface IStatResponse extends PB_Storage.StatResponse.$Properties {
    }

    /** Represents a StatResponse. */
    class StatResponse {

        /**
         * Constructs a new StatResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Storage.StatResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** StatResponse file. */
        file?: (PB_Storage.File.$Properties|null);

        /**
         * Encodes the specified StatResponse message. Does not implicitly {@link PB_Storage.StatResponse.verify|verify} messages.
         * @param message StatResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Storage.StatResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StatResponse message, length delimited. Does not implicitly {@link PB_Storage.StatResponse.verify|verify} messages.
         * @param message StatResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Storage.StatResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StatResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Storage.StatResponse & PB_Storage.StatResponse.$Shape} StatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Storage.StatResponse & PB_Storage.StatResponse.$Shape;

        /**
         * Decodes a StatResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Storage.StatResponse & PB_Storage.StatResponse.$Shape} StatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Storage.StatResponse & PB_Storage.StatResponse.$Shape;

        /**
         * Gets the type url for StatResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace StatResponse {

        /** Properties of a StatResponse. */
        interface $Properties {

            /** StatResponse file */
            file?: (PB_Storage.File.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a StatResponse. */
        type $Shape = PB_Storage.StatResponse.$Properties;
    }

    /**
     * Properties of a ListRequest.
     * @deprecated Use PB_Storage.ListRequest.$Properties instead.
     */
    interface IListRequest extends PB_Storage.ListRequest.$Properties {
    }

    /** Represents a ListRequest. */
    class ListRequest {

        /**
         * Constructs a new ListRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Storage.ListRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ListRequest path. */
        path: string;

        /** ListRequest includeMd5. */
        includeMd5: boolean;

        /** ListRequest filterMaxSize. */
        filterMaxSize: number;

        /**
         * Encodes the specified ListRequest message. Does not implicitly {@link PB_Storage.ListRequest.verify|verify} messages.
         * @param message ListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Storage.ListRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListRequest message, length delimited. Does not implicitly {@link PB_Storage.ListRequest.verify|verify} messages.
         * @param message ListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Storage.ListRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Storage.ListRequest & PB_Storage.ListRequest.$Shape} ListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Storage.ListRequest & PB_Storage.ListRequest.$Shape;

        /**
         * Decodes a ListRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Storage.ListRequest & PB_Storage.ListRequest.$Shape} ListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Storage.ListRequest & PB_Storage.ListRequest.$Shape;

        /**
         * Gets the type url for ListRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ListRequest {

        /** Properties of a ListRequest. */
        interface $Properties {

            /** ListRequest path */
            path?: (string|null);

            /** ListRequest includeMd5 */
            includeMd5?: (boolean|null);

            /** ListRequest filterMaxSize */
            filterMaxSize?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ListRequest. */
        type $Shape = PB_Storage.ListRequest.$Properties;
    }

    /**
     * Properties of a ListResponse.
     * @deprecated Use PB_Storage.ListResponse.$Properties instead.
     */
    interface IListResponse extends PB_Storage.ListResponse.$Properties {
    }

    /** Represents a ListResponse. */
    class ListResponse {

        /**
         * Constructs a new ListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Storage.ListResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ListResponse file. */
        file: PB_Storage.File.$Properties[];

        /**
         * Encodes the specified ListResponse message. Does not implicitly {@link PB_Storage.ListResponse.verify|verify} messages.
         * @param message ListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Storage.ListResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListResponse message, length delimited. Does not implicitly {@link PB_Storage.ListResponse.verify|verify} messages.
         * @param message ListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Storage.ListResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Storage.ListResponse & PB_Storage.ListResponse.$Shape} ListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Storage.ListResponse & PB_Storage.ListResponse.$Shape;

        /**
         * Decodes a ListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Storage.ListResponse & PB_Storage.ListResponse.$Shape} ListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Storage.ListResponse & PB_Storage.ListResponse.$Shape;

        /**
         * Gets the type url for ListResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ListResponse {

        /** Properties of a ListResponse. */
        interface $Properties {

            /** ListResponse file */
            file?: (PB_Storage.File.$Properties[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ListResponse. */
        type $Shape = PB_Storage.ListResponse.$Properties;
    }

    /**
     * Properties of a ReadRequest.
     * @deprecated Use PB_Storage.ReadRequest.$Properties instead.
     */
    interface IReadRequest extends PB_Storage.ReadRequest.$Properties {
    }

    /** Represents a ReadRequest. */
    class ReadRequest {

        /**
         * Constructs a new ReadRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Storage.ReadRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ReadRequest path. */
        path: string;

        /**
         * Encodes the specified ReadRequest message. Does not implicitly {@link PB_Storage.ReadRequest.verify|verify} messages.
         * @param message ReadRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Storage.ReadRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadRequest message, length delimited. Does not implicitly {@link PB_Storage.ReadRequest.verify|verify} messages.
         * @param message ReadRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Storage.ReadRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Storage.ReadRequest & PB_Storage.ReadRequest.$Shape} ReadRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Storage.ReadRequest & PB_Storage.ReadRequest.$Shape;

        /**
         * Decodes a ReadRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Storage.ReadRequest & PB_Storage.ReadRequest.$Shape} ReadRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Storage.ReadRequest & PB_Storage.ReadRequest.$Shape;

        /**
         * Gets the type url for ReadRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ReadRequest {

        /** Properties of a ReadRequest. */
        interface $Properties {

            /** ReadRequest path */
            path?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ReadRequest. */
        type $Shape = PB_Storage.ReadRequest.$Properties;
    }

    /**
     * Properties of a ReadResponse.
     * @deprecated Use PB_Storage.ReadResponse.$Properties instead.
     */
    interface IReadResponse extends PB_Storage.ReadResponse.$Properties {
    }

    /** Represents a ReadResponse. */
    class ReadResponse {

        /**
         * Constructs a new ReadResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Storage.ReadResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ReadResponse file. */
        file?: (PB_Storage.File.$Properties|null);

        /**
         * Encodes the specified ReadResponse message. Does not implicitly {@link PB_Storage.ReadResponse.verify|verify} messages.
         * @param message ReadResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Storage.ReadResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadResponse message, length delimited. Does not implicitly {@link PB_Storage.ReadResponse.verify|verify} messages.
         * @param message ReadResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Storage.ReadResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Storage.ReadResponse & PB_Storage.ReadResponse.$Shape} ReadResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Storage.ReadResponse & PB_Storage.ReadResponse.$Shape;

        /**
         * Decodes a ReadResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Storage.ReadResponse & PB_Storage.ReadResponse.$Shape} ReadResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Storage.ReadResponse & PB_Storage.ReadResponse.$Shape;

        /**
         * Gets the type url for ReadResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ReadResponse {

        /** Properties of a ReadResponse. */
        interface $Properties {

            /** ReadResponse file */
            file?: (PB_Storage.File.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ReadResponse. */
        type $Shape = PB_Storage.ReadResponse.$Properties;
    }

    /**
     * Properties of a WriteRequest.
     * @deprecated Use PB_Storage.WriteRequest.$Properties instead.
     */
    interface IWriteRequest extends PB_Storage.WriteRequest.$Properties {
    }

    /** Represents a WriteRequest. */
    class WriteRequest {

        /**
         * Constructs a new WriteRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Storage.WriteRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** WriteRequest path. */
        path: string;

        /** WriteRequest file. */
        file?: (PB_Storage.File.$Properties|null);

        /**
         * Encodes the specified WriteRequest message. Does not implicitly {@link PB_Storage.WriteRequest.verify|verify} messages.
         * @param message WriteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Storage.WriteRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WriteRequest message, length delimited. Does not implicitly {@link PB_Storage.WriteRequest.verify|verify} messages.
         * @param message WriteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Storage.WriteRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WriteRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Storage.WriteRequest & PB_Storage.WriteRequest.$Shape} WriteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Storage.WriteRequest & PB_Storage.WriteRequest.$Shape;

        /**
         * Decodes a WriteRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Storage.WriteRequest & PB_Storage.WriteRequest.$Shape} WriteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Storage.WriteRequest & PB_Storage.WriteRequest.$Shape;

        /**
         * Gets the type url for WriteRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace WriteRequest {

        /** Properties of a WriteRequest. */
        interface $Properties {

            /** WriteRequest path */
            path?: (string|null);

            /** WriteRequest file */
            file?: (PB_Storage.File.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a WriteRequest. */
        type $Shape = PB_Storage.WriteRequest.$Properties;
    }

    /**
     * Properties of a DeleteRequest.
     * @deprecated Use PB_Storage.DeleteRequest.$Properties instead.
     */
    interface IDeleteRequest extends PB_Storage.DeleteRequest.$Properties {
    }

    /** Represents a DeleteRequest. */
    class DeleteRequest {

        /**
         * Constructs a new DeleteRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Storage.DeleteRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DeleteRequest path. */
        path: string;

        /** DeleteRequest recursive. */
        recursive: boolean;

        /**
         * Encodes the specified DeleteRequest message. Does not implicitly {@link PB_Storage.DeleteRequest.verify|verify} messages.
         * @param message DeleteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Storage.DeleteRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteRequest message, length delimited. Does not implicitly {@link PB_Storage.DeleteRequest.verify|verify} messages.
         * @param message DeleteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Storage.DeleteRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Storage.DeleteRequest & PB_Storage.DeleteRequest.$Shape} DeleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Storage.DeleteRequest & PB_Storage.DeleteRequest.$Shape;

        /**
         * Decodes a DeleteRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Storage.DeleteRequest & PB_Storage.DeleteRequest.$Shape} DeleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Storage.DeleteRequest & PB_Storage.DeleteRequest.$Shape;

        /**
         * Gets the type url for DeleteRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DeleteRequest {

        /** Properties of a DeleteRequest. */
        interface $Properties {

            /** DeleteRequest path */
            path?: (string|null);

            /** DeleteRequest recursive */
            recursive?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DeleteRequest. */
        type $Shape = PB_Storage.DeleteRequest.$Properties;
    }

    /**
     * Properties of a MkdirRequest.
     * @deprecated Use PB_Storage.MkdirRequest.$Properties instead.
     */
    interface IMkdirRequest extends PB_Storage.MkdirRequest.$Properties {
    }

    /** Represents a MkdirRequest. */
    class MkdirRequest {

        /**
         * Constructs a new MkdirRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Storage.MkdirRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** MkdirRequest path. */
        path: string;

        /**
         * Encodes the specified MkdirRequest message. Does not implicitly {@link PB_Storage.MkdirRequest.verify|verify} messages.
         * @param message MkdirRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Storage.MkdirRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MkdirRequest message, length delimited. Does not implicitly {@link PB_Storage.MkdirRequest.verify|verify} messages.
         * @param message MkdirRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Storage.MkdirRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MkdirRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Storage.MkdirRequest & PB_Storage.MkdirRequest.$Shape} MkdirRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Storage.MkdirRequest & PB_Storage.MkdirRequest.$Shape;

        /**
         * Decodes a MkdirRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Storage.MkdirRequest & PB_Storage.MkdirRequest.$Shape} MkdirRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Storage.MkdirRequest & PB_Storage.MkdirRequest.$Shape;

        /**
         * Gets the type url for MkdirRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace MkdirRequest {

        /** Properties of a MkdirRequest. */
        interface $Properties {

            /** MkdirRequest path */
            path?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a MkdirRequest. */
        type $Shape = PB_Storage.MkdirRequest.$Properties;
    }

    /**
     * Properties of a Md5sumRequest.
     * @deprecated Use PB_Storage.Md5sumRequest.$Properties instead.
     */
    interface IMd5sumRequest extends PB_Storage.Md5sumRequest.$Properties {
    }

    /** Represents a Md5sumRequest. */
    class Md5sumRequest {

        /**
         * Constructs a new Md5sumRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Storage.Md5sumRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Md5sumRequest path. */
        path: string;

        /**
         * Encodes the specified Md5sumRequest message. Does not implicitly {@link PB_Storage.Md5sumRequest.verify|verify} messages.
         * @param message Md5sumRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Storage.Md5sumRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Md5sumRequest message, length delimited. Does not implicitly {@link PB_Storage.Md5sumRequest.verify|verify} messages.
         * @param message Md5sumRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Storage.Md5sumRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Md5sumRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Storage.Md5sumRequest & PB_Storage.Md5sumRequest.$Shape} Md5sumRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Storage.Md5sumRequest & PB_Storage.Md5sumRequest.$Shape;

        /**
         * Decodes a Md5sumRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Storage.Md5sumRequest & PB_Storage.Md5sumRequest.$Shape} Md5sumRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Storage.Md5sumRequest & PB_Storage.Md5sumRequest.$Shape;

        /**
         * Gets the type url for Md5sumRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Md5sumRequest {

        /** Properties of a Md5sumRequest. */
        interface $Properties {

            /** Md5sumRequest path */
            path?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Md5sumRequest. */
        type $Shape = PB_Storage.Md5sumRequest.$Properties;
    }

    /**
     * Properties of a Md5sumResponse.
     * @deprecated Use PB_Storage.Md5sumResponse.$Properties instead.
     */
    interface IMd5sumResponse extends PB_Storage.Md5sumResponse.$Properties {
    }

    /** Represents a Md5sumResponse. */
    class Md5sumResponse {

        /**
         * Constructs a new Md5sumResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Storage.Md5sumResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Md5sumResponse md5sum. */
        md5sum: string;

        /**
         * Encodes the specified Md5sumResponse message. Does not implicitly {@link PB_Storage.Md5sumResponse.verify|verify} messages.
         * @param message Md5sumResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Storage.Md5sumResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Md5sumResponse message, length delimited. Does not implicitly {@link PB_Storage.Md5sumResponse.verify|verify} messages.
         * @param message Md5sumResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Storage.Md5sumResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Md5sumResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Storage.Md5sumResponse & PB_Storage.Md5sumResponse.$Shape} Md5sumResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Storage.Md5sumResponse & PB_Storage.Md5sumResponse.$Shape;

        /**
         * Decodes a Md5sumResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Storage.Md5sumResponse & PB_Storage.Md5sumResponse.$Shape} Md5sumResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Storage.Md5sumResponse & PB_Storage.Md5sumResponse.$Shape;

        /**
         * Gets the type url for Md5sumResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Md5sumResponse {

        /** Properties of a Md5sumResponse. */
        interface $Properties {

            /** Md5sumResponse md5sum */
            md5sum?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Md5sumResponse. */
        type $Shape = PB_Storage.Md5sumResponse.$Properties;
    }

    /**
     * Properties of a RenameRequest.
     * @deprecated Use PB_Storage.RenameRequest.$Properties instead.
     */
    interface IRenameRequest extends PB_Storage.RenameRequest.$Properties {
    }

    /** Represents a RenameRequest. */
    class RenameRequest {

        /**
         * Constructs a new RenameRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Storage.RenameRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RenameRequest oldPath. */
        oldPath: string;

        /** RenameRequest newPath. */
        newPath: string;

        /**
         * Encodes the specified RenameRequest message. Does not implicitly {@link PB_Storage.RenameRequest.verify|verify} messages.
         * @param message RenameRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Storage.RenameRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RenameRequest message, length delimited. Does not implicitly {@link PB_Storage.RenameRequest.verify|verify} messages.
         * @param message RenameRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Storage.RenameRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RenameRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Storage.RenameRequest & PB_Storage.RenameRequest.$Shape} RenameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Storage.RenameRequest & PB_Storage.RenameRequest.$Shape;

        /**
         * Decodes a RenameRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Storage.RenameRequest & PB_Storage.RenameRequest.$Shape} RenameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Storage.RenameRequest & PB_Storage.RenameRequest.$Shape;

        /**
         * Gets the type url for RenameRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RenameRequest {

        /** Properties of a RenameRequest. */
        interface $Properties {

            /** RenameRequest oldPath */
            oldPath?: (string|null);

            /** RenameRequest newPath */
            newPath?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RenameRequest. */
        type $Shape = PB_Storage.RenameRequest.$Properties;
    }

    /**
     * Properties of a BackupCreateRequest.
     * @deprecated Use PB_Storage.BackupCreateRequest.$Properties instead.
     */
    interface IBackupCreateRequest extends PB_Storage.BackupCreateRequest.$Properties {
    }

    /** Represents a BackupCreateRequest. */
    class BackupCreateRequest {

        /**
         * Constructs a new BackupCreateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Storage.BackupCreateRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BackupCreateRequest archivePath. */
        archivePath: string;

        /**
         * Encodes the specified BackupCreateRequest message. Does not implicitly {@link PB_Storage.BackupCreateRequest.verify|verify} messages.
         * @param message BackupCreateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Storage.BackupCreateRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BackupCreateRequest message, length delimited. Does not implicitly {@link PB_Storage.BackupCreateRequest.verify|verify} messages.
         * @param message BackupCreateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Storage.BackupCreateRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BackupCreateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Storage.BackupCreateRequest & PB_Storage.BackupCreateRequest.$Shape} BackupCreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Storage.BackupCreateRequest & PB_Storage.BackupCreateRequest.$Shape;

        /**
         * Decodes a BackupCreateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Storage.BackupCreateRequest & PB_Storage.BackupCreateRequest.$Shape} BackupCreateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Storage.BackupCreateRequest & PB_Storage.BackupCreateRequest.$Shape;

        /**
         * Gets the type url for BackupCreateRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BackupCreateRequest {

        /** Properties of a BackupCreateRequest. */
        interface $Properties {

            /** BackupCreateRequest archivePath */
            archivePath?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BackupCreateRequest. */
        type $Shape = PB_Storage.BackupCreateRequest.$Properties;
    }

    /**
     * Properties of a BackupRestoreRequest.
     * @deprecated Use PB_Storage.BackupRestoreRequest.$Properties instead.
     */
    interface IBackupRestoreRequest extends PB_Storage.BackupRestoreRequest.$Properties {
    }

    /** Represents a BackupRestoreRequest. */
    class BackupRestoreRequest {

        /**
         * Constructs a new BackupRestoreRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Storage.BackupRestoreRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** BackupRestoreRequest archivePath. */
        archivePath: string;

        /**
         * Encodes the specified BackupRestoreRequest message. Does not implicitly {@link PB_Storage.BackupRestoreRequest.verify|verify} messages.
         * @param message BackupRestoreRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Storage.BackupRestoreRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BackupRestoreRequest message, length delimited. Does not implicitly {@link PB_Storage.BackupRestoreRequest.verify|verify} messages.
         * @param message BackupRestoreRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Storage.BackupRestoreRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BackupRestoreRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Storage.BackupRestoreRequest & PB_Storage.BackupRestoreRequest.$Shape} BackupRestoreRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Storage.BackupRestoreRequest & PB_Storage.BackupRestoreRequest.$Shape;

        /**
         * Decodes a BackupRestoreRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Storage.BackupRestoreRequest & PB_Storage.BackupRestoreRequest.$Shape} BackupRestoreRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Storage.BackupRestoreRequest & PB_Storage.BackupRestoreRequest.$Shape;

        /**
         * Gets the type url for BackupRestoreRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace BackupRestoreRequest {

        /** Properties of a BackupRestoreRequest. */
        interface $Properties {

            /** BackupRestoreRequest archivePath */
            archivePath?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a BackupRestoreRequest. */
        type $Shape = PB_Storage.BackupRestoreRequest.$Properties;
    }

    /**
     * Properties of a TarExtractRequest.
     * @deprecated Use PB_Storage.TarExtractRequest.$Properties instead.
     */
    interface ITarExtractRequest extends PB_Storage.TarExtractRequest.$Properties {
    }

    /** Represents a TarExtractRequest. */
    class TarExtractRequest {

        /**
         * Constructs a new TarExtractRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Storage.TarExtractRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** TarExtractRequest tarPath. */
        tarPath: string;

        /** TarExtractRequest outPath. */
        outPath: string;

        /**
         * Encodes the specified TarExtractRequest message. Does not implicitly {@link PB_Storage.TarExtractRequest.verify|verify} messages.
         * @param message TarExtractRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Storage.TarExtractRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TarExtractRequest message, length delimited. Does not implicitly {@link PB_Storage.TarExtractRequest.verify|verify} messages.
         * @param message TarExtractRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Storage.TarExtractRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TarExtractRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Storage.TarExtractRequest & PB_Storage.TarExtractRequest.$Shape} TarExtractRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Storage.TarExtractRequest & PB_Storage.TarExtractRequest.$Shape;

        /**
         * Decodes a TarExtractRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Storage.TarExtractRequest & PB_Storage.TarExtractRequest.$Shape} TarExtractRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Storage.TarExtractRequest & PB_Storage.TarExtractRequest.$Shape;

        /**
         * Gets the type url for TarExtractRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace TarExtractRequest {

        /** Properties of a TarExtractRequest. */
        interface $Properties {

            /** TarExtractRequest tarPath */
            tarPath?: (string|null);

            /** TarExtractRequest outPath */
            outPath?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a TarExtractRequest. */
        type $Shape = PB_Storage.TarExtractRequest.$Properties;
    }
}

/** Namespace PB_System. */
export namespace PB_System {

    /**
     * Properties of a PingRequest.
     * @deprecated Use PB_System.PingRequest.$Properties instead.
     */
    interface IPingRequest extends PB_System.PingRequest.$Properties {
    }

    /** Represents a PingRequest. */
    class PingRequest {

        /**
         * Constructs a new PingRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_System.PingRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PingRequest data. */
        data: Uint8Array;

        /**
         * Encodes the specified PingRequest message. Does not implicitly {@link PB_System.PingRequest.verify|verify} messages.
         * @param message PingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_System.PingRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PingRequest message, length delimited. Does not implicitly {@link PB_System.PingRequest.verify|verify} messages.
         * @param message PingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_System.PingRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PingRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_System.PingRequest & PB_System.PingRequest.$Shape} PingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_System.PingRequest & PB_System.PingRequest.$Shape;

        /**
         * Decodes a PingRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_System.PingRequest & PB_System.PingRequest.$Shape} PingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_System.PingRequest & PB_System.PingRequest.$Shape;

        /**
         * Gets the type url for PingRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PingRequest {

        /** Properties of a PingRequest. */
        interface $Properties {

            /** PingRequest data */
            data?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PingRequest. */
        type $Shape = PB_System.PingRequest.$Properties;
    }

    /**
     * Properties of a PingResponse.
     * @deprecated Use PB_System.PingResponse.$Properties instead.
     */
    interface IPingResponse extends PB_System.PingResponse.$Properties {
    }

    /** Represents a PingResponse. */
    class PingResponse {

        /**
         * Constructs a new PingResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_System.PingResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PingResponse data. */
        data: Uint8Array;

        /**
         * Encodes the specified PingResponse message. Does not implicitly {@link PB_System.PingResponse.verify|verify} messages.
         * @param message PingResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_System.PingResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link PB_System.PingResponse.verify|verify} messages.
         * @param message PingResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_System.PingResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PingResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_System.PingResponse & PB_System.PingResponse.$Shape} PingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_System.PingResponse & PB_System.PingResponse.$Shape;

        /**
         * Decodes a PingResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_System.PingResponse & PB_System.PingResponse.$Shape} PingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_System.PingResponse & PB_System.PingResponse.$Shape;

        /**
         * Gets the type url for PingResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PingResponse {

        /** Properties of a PingResponse. */
        interface $Properties {

            /** PingResponse data */
            data?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PingResponse. */
        type $Shape = PB_System.PingResponse.$Properties;
    }

    /**
     * Properties of a RebootRequest.
     * @deprecated Use PB_System.RebootRequest.$Properties instead.
     */
    interface IRebootRequest extends PB_System.RebootRequest.$Properties {
    }

    /** Represents a RebootRequest. */
    class RebootRequest {

        /**
         * Constructs a new RebootRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_System.RebootRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** RebootRequest mode. */
        mode: PB_System.RebootRequest.RebootMode;

        /**
         * Encodes the specified RebootRequest message. Does not implicitly {@link PB_System.RebootRequest.verify|verify} messages.
         * @param message RebootRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_System.RebootRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RebootRequest message, length delimited. Does not implicitly {@link PB_System.RebootRequest.verify|verify} messages.
         * @param message RebootRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_System.RebootRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RebootRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_System.RebootRequest & PB_System.RebootRequest.$Shape} RebootRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_System.RebootRequest & PB_System.RebootRequest.$Shape;

        /**
         * Decodes a RebootRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_System.RebootRequest & PB_System.RebootRequest.$Shape} RebootRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_System.RebootRequest & PB_System.RebootRequest.$Shape;

        /**
         * Gets the type url for RebootRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace RebootRequest {

        /** Properties of a RebootRequest. */
        interface $Properties {

            /** RebootRequest mode */
            mode?: (PB_System.RebootRequest.RebootMode|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a RebootRequest. */
        type $Shape = PB_System.RebootRequest.$Properties;

        /** RebootMode enum. */
        enum RebootMode {

            /** OS value */
            OS = 0,

            /** DFU value */
            DFU = 1,

            /** UPDATE value */
            UPDATE = 2
        }
    }

    /**
     * Properties of a DeviceInfoRequest.
     * @deprecated Use PB_System.DeviceInfoRequest.$Properties instead.
     */
    interface IDeviceInfoRequest extends PB_System.DeviceInfoRequest.$Properties {
    }

    /** Represents a DeviceInfoRequest. */
    class DeviceInfoRequest {

        /**
         * Constructs a new DeviceInfoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_System.DeviceInfoRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified DeviceInfoRequest message. Does not implicitly {@link PB_System.DeviceInfoRequest.verify|verify} messages.
         * @param message DeviceInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_System.DeviceInfoRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceInfoRequest message, length delimited. Does not implicitly {@link PB_System.DeviceInfoRequest.verify|verify} messages.
         * @param message DeviceInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_System.DeviceInfoRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceInfoRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_System.DeviceInfoRequest & PB_System.DeviceInfoRequest.$Shape} DeviceInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_System.DeviceInfoRequest & PB_System.DeviceInfoRequest.$Shape;

        /**
         * Decodes a DeviceInfoRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_System.DeviceInfoRequest & PB_System.DeviceInfoRequest.$Shape} DeviceInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_System.DeviceInfoRequest & PB_System.DeviceInfoRequest.$Shape;

        /**
         * Gets the type url for DeviceInfoRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DeviceInfoRequest {

        /** Properties of a DeviceInfoRequest. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DeviceInfoRequest. */
        type $Shape = PB_System.DeviceInfoRequest.$Properties;
    }

    /**
     * Properties of a DeviceInfoResponse.
     * @deprecated Use PB_System.DeviceInfoResponse.$Properties instead.
     */
    interface IDeviceInfoResponse extends PB_System.DeviceInfoResponse.$Properties {
    }

    /** Represents a DeviceInfoResponse. */
    class DeviceInfoResponse {

        /**
         * Constructs a new DeviceInfoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_System.DeviceInfoResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DeviceInfoResponse key. */
        key: string;

        /** DeviceInfoResponse value. */
        value: string;

        /**
         * Encodes the specified DeviceInfoResponse message. Does not implicitly {@link PB_System.DeviceInfoResponse.verify|verify} messages.
         * @param message DeviceInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_System.DeviceInfoResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceInfoResponse message, length delimited. Does not implicitly {@link PB_System.DeviceInfoResponse.verify|verify} messages.
         * @param message DeviceInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_System.DeviceInfoResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceInfoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_System.DeviceInfoResponse & PB_System.DeviceInfoResponse.$Shape} DeviceInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_System.DeviceInfoResponse & PB_System.DeviceInfoResponse.$Shape;

        /**
         * Decodes a DeviceInfoResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_System.DeviceInfoResponse & PB_System.DeviceInfoResponse.$Shape} DeviceInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_System.DeviceInfoResponse & PB_System.DeviceInfoResponse.$Shape;

        /**
         * Gets the type url for DeviceInfoResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DeviceInfoResponse {

        /** Properties of a DeviceInfoResponse. */
        interface $Properties {

            /** DeviceInfoResponse key */
            key?: (string|null);

            /** DeviceInfoResponse value */
            value?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DeviceInfoResponse. */
        type $Shape = PB_System.DeviceInfoResponse.$Properties;
    }

    /**
     * Properties of a FactoryResetRequest.
     * @deprecated Use PB_System.FactoryResetRequest.$Properties instead.
     */
    interface IFactoryResetRequest extends PB_System.FactoryResetRequest.$Properties {
    }

    /** Represents a FactoryResetRequest. */
    class FactoryResetRequest {

        /**
         * Constructs a new FactoryResetRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_System.FactoryResetRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified FactoryResetRequest message. Does not implicitly {@link PB_System.FactoryResetRequest.verify|verify} messages.
         * @param message FactoryResetRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_System.FactoryResetRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FactoryResetRequest message, length delimited. Does not implicitly {@link PB_System.FactoryResetRequest.verify|verify} messages.
         * @param message FactoryResetRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_System.FactoryResetRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FactoryResetRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_System.FactoryResetRequest & PB_System.FactoryResetRequest.$Shape} FactoryResetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_System.FactoryResetRequest & PB_System.FactoryResetRequest.$Shape;

        /**
         * Decodes a FactoryResetRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_System.FactoryResetRequest & PB_System.FactoryResetRequest.$Shape} FactoryResetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_System.FactoryResetRequest & PB_System.FactoryResetRequest.$Shape;

        /**
         * Gets the type url for FactoryResetRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace FactoryResetRequest {

        /** Properties of a FactoryResetRequest. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a FactoryResetRequest. */
        type $Shape = PB_System.FactoryResetRequest.$Properties;
    }

    /**
     * Properties of a GetDateTimeRequest.
     * @deprecated Use PB_System.GetDateTimeRequest.$Properties instead.
     */
    interface IGetDateTimeRequest extends PB_System.GetDateTimeRequest.$Properties {
    }

    /** Represents a GetDateTimeRequest. */
    class GetDateTimeRequest {

        /**
         * Constructs a new GetDateTimeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_System.GetDateTimeRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified GetDateTimeRequest message. Does not implicitly {@link PB_System.GetDateTimeRequest.verify|verify} messages.
         * @param message GetDateTimeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_System.GetDateTimeRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetDateTimeRequest message, length delimited. Does not implicitly {@link PB_System.GetDateTimeRequest.verify|verify} messages.
         * @param message GetDateTimeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_System.GetDateTimeRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetDateTimeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_System.GetDateTimeRequest & PB_System.GetDateTimeRequest.$Shape} GetDateTimeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_System.GetDateTimeRequest & PB_System.GetDateTimeRequest.$Shape;

        /**
         * Decodes a GetDateTimeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_System.GetDateTimeRequest & PB_System.GetDateTimeRequest.$Shape} GetDateTimeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_System.GetDateTimeRequest & PB_System.GetDateTimeRequest.$Shape;

        /**
         * Gets the type url for GetDateTimeRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetDateTimeRequest {

        /** Properties of a GetDateTimeRequest. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetDateTimeRequest. */
        type $Shape = PB_System.GetDateTimeRequest.$Properties;
    }

    /**
     * Properties of a GetDateTimeResponse.
     * @deprecated Use PB_System.GetDateTimeResponse.$Properties instead.
     */
    interface IGetDateTimeResponse extends PB_System.GetDateTimeResponse.$Properties {
    }

    /** Represents a GetDateTimeResponse. */
    class GetDateTimeResponse {

        /**
         * Constructs a new GetDateTimeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_System.GetDateTimeResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetDateTimeResponse datetime. */
        datetime?: (PB_System.DateTime.$Properties|null);

        /**
         * Encodes the specified GetDateTimeResponse message. Does not implicitly {@link PB_System.GetDateTimeResponse.verify|verify} messages.
         * @param message GetDateTimeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_System.GetDateTimeResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetDateTimeResponse message, length delimited. Does not implicitly {@link PB_System.GetDateTimeResponse.verify|verify} messages.
         * @param message GetDateTimeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_System.GetDateTimeResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetDateTimeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_System.GetDateTimeResponse & PB_System.GetDateTimeResponse.$Shape} GetDateTimeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_System.GetDateTimeResponse & PB_System.GetDateTimeResponse.$Shape;

        /**
         * Decodes a GetDateTimeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_System.GetDateTimeResponse & PB_System.GetDateTimeResponse.$Shape} GetDateTimeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_System.GetDateTimeResponse & PB_System.GetDateTimeResponse.$Shape;

        /**
         * Gets the type url for GetDateTimeResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetDateTimeResponse {

        /** Properties of a GetDateTimeResponse. */
        interface $Properties {

            /** GetDateTimeResponse datetime */
            datetime?: (PB_System.DateTime.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetDateTimeResponse. */
        type $Shape = PB_System.GetDateTimeResponse.$Properties;
    }

    /**
     * Properties of a SetDateTimeRequest.
     * @deprecated Use PB_System.SetDateTimeRequest.$Properties instead.
     */
    interface ISetDateTimeRequest extends PB_System.SetDateTimeRequest.$Properties {
    }

    /** Represents a SetDateTimeRequest. */
    class SetDateTimeRequest {

        /**
         * Constructs a new SetDateTimeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_System.SetDateTimeRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SetDateTimeRequest datetime. */
        datetime?: (PB_System.DateTime.$Properties|null);

        /**
         * Encodes the specified SetDateTimeRequest message. Does not implicitly {@link PB_System.SetDateTimeRequest.verify|verify} messages.
         * @param message SetDateTimeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_System.SetDateTimeRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetDateTimeRequest message, length delimited. Does not implicitly {@link PB_System.SetDateTimeRequest.verify|verify} messages.
         * @param message SetDateTimeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_System.SetDateTimeRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetDateTimeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_System.SetDateTimeRequest & PB_System.SetDateTimeRequest.$Shape} SetDateTimeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_System.SetDateTimeRequest & PB_System.SetDateTimeRequest.$Shape;

        /**
         * Decodes a SetDateTimeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_System.SetDateTimeRequest & PB_System.SetDateTimeRequest.$Shape} SetDateTimeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_System.SetDateTimeRequest & PB_System.SetDateTimeRequest.$Shape;

        /**
         * Gets the type url for SetDateTimeRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SetDateTimeRequest {

        /** Properties of a SetDateTimeRequest. */
        interface $Properties {

            /** SetDateTimeRequest datetime */
            datetime?: (PB_System.DateTime.$Properties|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SetDateTimeRequest. */
        type $Shape = PB_System.SetDateTimeRequest.$Properties;
    }

    /**
     * Properties of a DateTime.
     * @deprecated Use PB_System.DateTime.$Properties instead.
     */
    interface IDateTime extends PB_System.DateTime.$Properties {
    }

    /** Represents a DateTime. */
    class DateTime {

        /**
         * Constructs a new DateTime.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_System.DateTime.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DateTime hour. */
        hour: number;

        /** DateTime minute. */
        minute: number;

        /** DateTime second. */
        second: number;

        /** DateTime day. */
        day: number;

        /** DateTime month. */
        month: number;

        /** DateTime year. */
        year: number;

        /** DateTime weekday. */
        weekday: number;

        /**
         * Encodes the specified DateTime message. Does not implicitly {@link PB_System.DateTime.verify|verify} messages.
         * @param message DateTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_System.DateTime.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DateTime message, length delimited. Does not implicitly {@link PB_System.DateTime.verify|verify} messages.
         * @param message DateTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_System.DateTime.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DateTime message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_System.DateTime & PB_System.DateTime.$Shape} DateTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_System.DateTime & PB_System.DateTime.$Shape;

        /**
         * Decodes a DateTime message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_System.DateTime & PB_System.DateTime.$Shape} DateTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_System.DateTime & PB_System.DateTime.$Shape;

        /**
         * Gets the type url for DateTime
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DateTime {

        /** Properties of a DateTime. */
        interface $Properties {

            /** DateTime hour */
            hour?: (number|null);

            /** DateTime minute */
            minute?: (number|null);

            /** DateTime second */
            second?: (number|null);

            /** DateTime day */
            day?: (number|null);

            /** DateTime month */
            month?: (number|null);

            /** DateTime year */
            year?: (number|null);

            /** DateTime weekday */
            weekday?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DateTime. */
        type $Shape = PB_System.DateTime.$Properties;
    }

    /**
     * Properties of a PlayAudiovisualAlertRequest.
     * @deprecated Use PB_System.PlayAudiovisualAlertRequest.$Properties instead.
     */
    interface IPlayAudiovisualAlertRequest extends PB_System.PlayAudiovisualAlertRequest.$Properties {
    }

    /** Represents a PlayAudiovisualAlertRequest. */
    class PlayAudiovisualAlertRequest {

        /**
         * Constructs a new PlayAudiovisualAlertRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_System.PlayAudiovisualAlertRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified PlayAudiovisualAlertRequest message. Does not implicitly {@link PB_System.PlayAudiovisualAlertRequest.verify|verify} messages.
         * @param message PlayAudiovisualAlertRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_System.PlayAudiovisualAlertRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayAudiovisualAlertRequest message, length delimited. Does not implicitly {@link PB_System.PlayAudiovisualAlertRequest.verify|verify} messages.
         * @param message PlayAudiovisualAlertRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_System.PlayAudiovisualAlertRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayAudiovisualAlertRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_System.PlayAudiovisualAlertRequest & PB_System.PlayAudiovisualAlertRequest.$Shape} PlayAudiovisualAlertRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_System.PlayAudiovisualAlertRequest & PB_System.PlayAudiovisualAlertRequest.$Shape;

        /**
         * Decodes a PlayAudiovisualAlertRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_System.PlayAudiovisualAlertRequest & PB_System.PlayAudiovisualAlertRequest.$Shape} PlayAudiovisualAlertRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_System.PlayAudiovisualAlertRequest & PB_System.PlayAudiovisualAlertRequest.$Shape;

        /**
         * Gets the type url for PlayAudiovisualAlertRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PlayAudiovisualAlertRequest {

        /** Properties of a PlayAudiovisualAlertRequest. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PlayAudiovisualAlertRequest. */
        type $Shape = PB_System.PlayAudiovisualAlertRequest.$Properties;
    }

    /**
     * Properties of a ProtobufVersionRequest.
     * @deprecated Use PB_System.ProtobufVersionRequest.$Properties instead.
     */
    interface IProtobufVersionRequest extends PB_System.ProtobufVersionRequest.$Properties {
    }

    /** Represents a ProtobufVersionRequest. */
    class ProtobufVersionRequest {

        /**
         * Constructs a new ProtobufVersionRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_System.ProtobufVersionRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified ProtobufVersionRequest message. Does not implicitly {@link PB_System.ProtobufVersionRequest.verify|verify} messages.
         * @param message ProtobufVersionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_System.ProtobufVersionRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProtobufVersionRequest message, length delimited. Does not implicitly {@link PB_System.ProtobufVersionRequest.verify|verify} messages.
         * @param message ProtobufVersionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_System.ProtobufVersionRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProtobufVersionRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_System.ProtobufVersionRequest & PB_System.ProtobufVersionRequest.$Shape} ProtobufVersionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_System.ProtobufVersionRequest & PB_System.ProtobufVersionRequest.$Shape;

        /**
         * Decodes a ProtobufVersionRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_System.ProtobufVersionRequest & PB_System.ProtobufVersionRequest.$Shape} ProtobufVersionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_System.ProtobufVersionRequest & PB_System.ProtobufVersionRequest.$Shape;

        /**
         * Gets the type url for ProtobufVersionRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ProtobufVersionRequest {

        /** Properties of a ProtobufVersionRequest. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ProtobufVersionRequest. */
        type $Shape = PB_System.ProtobufVersionRequest.$Properties;
    }

    /**
     * Properties of a ProtobufVersionResponse.
     * @deprecated Use PB_System.ProtobufVersionResponse.$Properties instead.
     */
    interface IProtobufVersionResponse extends PB_System.ProtobufVersionResponse.$Properties {
    }

    /** Represents a ProtobufVersionResponse. */
    class ProtobufVersionResponse {

        /**
         * Constructs a new ProtobufVersionResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_System.ProtobufVersionResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ProtobufVersionResponse major. */
        major: number;

        /** ProtobufVersionResponse minor. */
        minor: number;

        /**
         * Encodes the specified ProtobufVersionResponse message. Does not implicitly {@link PB_System.ProtobufVersionResponse.verify|verify} messages.
         * @param message ProtobufVersionResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_System.ProtobufVersionResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProtobufVersionResponse message, length delimited. Does not implicitly {@link PB_System.ProtobufVersionResponse.verify|verify} messages.
         * @param message ProtobufVersionResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_System.ProtobufVersionResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProtobufVersionResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_System.ProtobufVersionResponse & PB_System.ProtobufVersionResponse.$Shape} ProtobufVersionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_System.ProtobufVersionResponse & PB_System.ProtobufVersionResponse.$Shape;

        /**
         * Decodes a ProtobufVersionResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_System.ProtobufVersionResponse & PB_System.ProtobufVersionResponse.$Shape} ProtobufVersionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_System.ProtobufVersionResponse & PB_System.ProtobufVersionResponse.$Shape;

        /**
         * Gets the type url for ProtobufVersionResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ProtobufVersionResponse {

        /** Properties of a ProtobufVersionResponse. */
        interface $Properties {

            /** ProtobufVersionResponse major */
            major?: (number|null);

            /** ProtobufVersionResponse minor */
            minor?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ProtobufVersionResponse. */
        type $Shape = PB_System.ProtobufVersionResponse.$Properties;
    }

    /**
     * Properties of an UpdateRequest.
     * @deprecated Use PB_System.UpdateRequest.$Properties instead.
     */
    interface IUpdateRequest extends PB_System.UpdateRequest.$Properties {
    }

    /** Represents an UpdateRequest. */
    class UpdateRequest {

        /**
         * Constructs a new UpdateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_System.UpdateRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** UpdateRequest updateManifest. */
        updateManifest: string;

        /**
         * Encodes the specified UpdateRequest message. Does not implicitly {@link PB_System.UpdateRequest.verify|verify} messages.
         * @param message UpdateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_System.UpdateRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateRequest message, length delimited. Does not implicitly {@link PB_System.UpdateRequest.verify|verify} messages.
         * @param message UpdateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_System.UpdateRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_System.UpdateRequest & PB_System.UpdateRequest.$Shape} UpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_System.UpdateRequest & PB_System.UpdateRequest.$Shape;

        /**
         * Decodes an UpdateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_System.UpdateRequest & PB_System.UpdateRequest.$Shape} UpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_System.UpdateRequest & PB_System.UpdateRequest.$Shape;

        /**
         * Gets the type url for UpdateRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace UpdateRequest {

        /** Properties of an UpdateRequest. */
        interface $Properties {

            /** UpdateRequest updateManifest */
            updateManifest?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an UpdateRequest. */
        type $Shape = PB_System.UpdateRequest.$Properties;
    }

    /**
     * Properties of an UpdateResponse.
     * @deprecated Use PB_System.UpdateResponse.$Properties instead.
     */
    interface IUpdateResponse extends PB_System.UpdateResponse.$Properties {
    }

    /** Represents an UpdateResponse. */
    class UpdateResponse {

        /**
         * Constructs a new UpdateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_System.UpdateResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** UpdateResponse code. */
        code: PB_System.UpdateResponse.UpdateResultCode;

        /**
         * Encodes the specified UpdateResponse message. Does not implicitly {@link PB_System.UpdateResponse.verify|verify} messages.
         * @param message UpdateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_System.UpdateResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateResponse message, length delimited. Does not implicitly {@link PB_System.UpdateResponse.verify|verify} messages.
         * @param message UpdateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_System.UpdateResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_System.UpdateResponse & PB_System.UpdateResponse.$Shape} UpdateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_System.UpdateResponse & PB_System.UpdateResponse.$Shape;

        /**
         * Decodes an UpdateResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_System.UpdateResponse & PB_System.UpdateResponse.$Shape} UpdateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_System.UpdateResponse & PB_System.UpdateResponse.$Shape;

        /**
         * Gets the type url for UpdateResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace UpdateResponse {

        /** Properties of an UpdateResponse. */
        interface $Properties {

            /** UpdateResponse code */
            code?: (PB_System.UpdateResponse.UpdateResultCode|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an UpdateResponse. */
        type $Shape = PB_System.UpdateResponse.$Properties;

        /** UpdateResultCode enum. */
        enum UpdateResultCode {

            /** OK value */
            OK = 0,

            /** ManifestPathInvalid value */
            ManifestPathInvalid = 1,

            /** ManifestFolderNotFound value */
            ManifestFolderNotFound = 2,

            /** ManifestInvalid value */
            ManifestInvalid = 3,

            /** StageMissing value */
            StageMissing = 4,

            /** StageIntegrityError value */
            StageIntegrityError = 5,

            /** ManifestPointerError value */
            ManifestPointerError = 6,

            /** TargetMismatch value */
            TargetMismatch = 7,

            /** OutdatedManifestVersion value */
            OutdatedManifestVersion = 8,

            /** IntFull value */
            IntFull = 9,

            /** UnspecifiedError value */
            UnspecifiedError = 10
        }
    }

    /**
     * Properties of a PowerInfoRequest.
     * @deprecated Use PB_System.PowerInfoRequest.$Properties instead.
     */
    interface IPowerInfoRequest extends PB_System.PowerInfoRequest.$Properties {
    }

    /** Represents a PowerInfoRequest. */
    class PowerInfoRequest {

        /**
         * Constructs a new PowerInfoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_System.PowerInfoRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified PowerInfoRequest message. Does not implicitly {@link PB_System.PowerInfoRequest.verify|verify} messages.
         * @param message PowerInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_System.PowerInfoRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PowerInfoRequest message, length delimited. Does not implicitly {@link PB_System.PowerInfoRequest.verify|verify} messages.
         * @param message PowerInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_System.PowerInfoRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PowerInfoRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_System.PowerInfoRequest & PB_System.PowerInfoRequest.$Shape} PowerInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_System.PowerInfoRequest & PB_System.PowerInfoRequest.$Shape;

        /**
         * Decodes a PowerInfoRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_System.PowerInfoRequest & PB_System.PowerInfoRequest.$Shape} PowerInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_System.PowerInfoRequest & PB_System.PowerInfoRequest.$Shape;

        /**
         * Gets the type url for PowerInfoRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PowerInfoRequest {

        /** Properties of a PowerInfoRequest. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PowerInfoRequest. */
        type $Shape = PB_System.PowerInfoRequest.$Properties;
    }

    /**
     * Properties of a PowerInfoResponse.
     * @deprecated Use PB_System.PowerInfoResponse.$Properties instead.
     */
    interface IPowerInfoResponse extends PB_System.PowerInfoResponse.$Properties {
    }

    /** Represents a PowerInfoResponse. */
    class PowerInfoResponse {

        /**
         * Constructs a new PowerInfoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_System.PowerInfoResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PowerInfoResponse key. */
        key: string;

        /** PowerInfoResponse value. */
        value: string;

        /**
         * Encodes the specified PowerInfoResponse message. Does not implicitly {@link PB_System.PowerInfoResponse.verify|verify} messages.
         * @param message PowerInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_System.PowerInfoResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PowerInfoResponse message, length delimited. Does not implicitly {@link PB_System.PowerInfoResponse.verify|verify} messages.
         * @param message PowerInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_System.PowerInfoResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PowerInfoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_System.PowerInfoResponse & PB_System.PowerInfoResponse.$Shape} PowerInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_System.PowerInfoResponse & PB_System.PowerInfoResponse.$Shape;

        /**
         * Decodes a PowerInfoResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_System.PowerInfoResponse & PB_System.PowerInfoResponse.$Shape} PowerInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_System.PowerInfoResponse & PB_System.PowerInfoResponse.$Shape;

        /**
         * Gets the type url for PowerInfoResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PowerInfoResponse {

        /** Properties of a PowerInfoResponse. */
        interface $Properties {

            /** PowerInfoResponse key */
            key?: (string|null);

            /** PowerInfoResponse value */
            value?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PowerInfoResponse. */
        type $Shape = PB_System.PowerInfoResponse.$Properties;
    }
}

/** Namespace PB_App. */
export namespace PB_App {

    /**
     * Properties of a StartRequest.
     * @deprecated Use PB_App.StartRequest.$Properties instead.
     */
    interface IStartRequest extends PB_App.StartRequest.$Properties {
    }

    /** Represents a StartRequest. */
    class StartRequest {

        /**
         * Constructs a new StartRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_App.StartRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** StartRequest name. */
        name: string;

        /** StartRequest args. */
        args: string;

        /**
         * Encodes the specified StartRequest message. Does not implicitly {@link PB_App.StartRequest.verify|verify} messages.
         * @param message StartRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_App.StartRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartRequest message, length delimited. Does not implicitly {@link PB_App.StartRequest.verify|verify} messages.
         * @param message StartRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_App.StartRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_App.StartRequest & PB_App.StartRequest.$Shape} StartRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_App.StartRequest & PB_App.StartRequest.$Shape;

        /**
         * Decodes a StartRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_App.StartRequest & PB_App.StartRequest.$Shape} StartRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_App.StartRequest & PB_App.StartRequest.$Shape;

        /**
         * Gets the type url for StartRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace StartRequest {

        /** Properties of a StartRequest. */
        interface $Properties {

            /** StartRequest name */
            name?: (string|null);

            /** StartRequest args */
            args?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a StartRequest. */
        type $Shape = PB_App.StartRequest.$Properties;
    }

    /**
     * Properties of a LockStatusRequest.
     * @deprecated Use PB_App.LockStatusRequest.$Properties instead.
     */
    interface ILockStatusRequest extends PB_App.LockStatusRequest.$Properties {
    }

    /** Represents a LockStatusRequest. */
    class LockStatusRequest {

        /**
         * Constructs a new LockStatusRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_App.LockStatusRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified LockStatusRequest message. Does not implicitly {@link PB_App.LockStatusRequest.verify|verify} messages.
         * @param message LockStatusRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_App.LockStatusRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LockStatusRequest message, length delimited. Does not implicitly {@link PB_App.LockStatusRequest.verify|verify} messages.
         * @param message LockStatusRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_App.LockStatusRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LockStatusRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_App.LockStatusRequest & PB_App.LockStatusRequest.$Shape} LockStatusRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_App.LockStatusRequest & PB_App.LockStatusRequest.$Shape;

        /**
         * Decodes a LockStatusRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_App.LockStatusRequest & PB_App.LockStatusRequest.$Shape} LockStatusRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_App.LockStatusRequest & PB_App.LockStatusRequest.$Shape;

        /**
         * Gets the type url for LockStatusRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace LockStatusRequest {

        /** Properties of a LockStatusRequest. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a LockStatusRequest. */
        type $Shape = PB_App.LockStatusRequest.$Properties;
    }

    /**
     * Properties of a LockStatusResponse.
     * @deprecated Use PB_App.LockStatusResponse.$Properties instead.
     */
    interface ILockStatusResponse extends PB_App.LockStatusResponse.$Properties {
    }

    /** Represents a LockStatusResponse. */
    class LockStatusResponse {

        /**
         * Constructs a new LockStatusResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_App.LockStatusResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** LockStatusResponse locked. */
        locked: boolean;

        /**
         * Encodes the specified LockStatusResponse message. Does not implicitly {@link PB_App.LockStatusResponse.verify|verify} messages.
         * @param message LockStatusResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_App.LockStatusResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LockStatusResponse message, length delimited. Does not implicitly {@link PB_App.LockStatusResponse.verify|verify} messages.
         * @param message LockStatusResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_App.LockStatusResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LockStatusResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_App.LockStatusResponse & PB_App.LockStatusResponse.$Shape} LockStatusResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_App.LockStatusResponse & PB_App.LockStatusResponse.$Shape;

        /**
         * Decodes a LockStatusResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_App.LockStatusResponse & PB_App.LockStatusResponse.$Shape} LockStatusResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_App.LockStatusResponse & PB_App.LockStatusResponse.$Shape;

        /**
         * Gets the type url for LockStatusResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace LockStatusResponse {

        /** Properties of a LockStatusResponse. */
        interface $Properties {

            /** LockStatusResponse locked */
            locked?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a LockStatusResponse. */
        type $Shape = PB_App.LockStatusResponse.$Properties;
    }

    /**
     * Properties of an AppExitRequest.
     * @deprecated Use PB_App.AppExitRequest.$Properties instead.
     */
    interface IAppExitRequest extends PB_App.AppExitRequest.$Properties {
    }

    /** Represents an AppExitRequest. */
    class AppExitRequest {

        /**
         * Constructs a new AppExitRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_App.AppExitRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified AppExitRequest message. Does not implicitly {@link PB_App.AppExitRequest.verify|verify} messages.
         * @param message AppExitRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_App.AppExitRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppExitRequest message, length delimited. Does not implicitly {@link PB_App.AppExitRequest.verify|verify} messages.
         * @param message AppExitRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_App.AppExitRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppExitRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_App.AppExitRequest & PB_App.AppExitRequest.$Shape} AppExitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_App.AppExitRequest & PB_App.AppExitRequest.$Shape;

        /**
         * Decodes an AppExitRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_App.AppExitRequest & PB_App.AppExitRequest.$Shape} AppExitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_App.AppExitRequest & PB_App.AppExitRequest.$Shape;

        /**
         * Gets the type url for AppExitRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AppExitRequest {

        /** Properties of an AppExitRequest. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AppExitRequest. */
        type $Shape = PB_App.AppExitRequest.$Properties;
    }

    /**
     * Properties of an AppLoadFileRequest.
     * @deprecated Use PB_App.AppLoadFileRequest.$Properties instead.
     */
    interface IAppLoadFileRequest extends PB_App.AppLoadFileRequest.$Properties {
    }

    /** Represents an AppLoadFileRequest. */
    class AppLoadFileRequest {

        /**
         * Constructs a new AppLoadFileRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_App.AppLoadFileRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AppLoadFileRequest path. */
        path: string;

        /**
         * Encodes the specified AppLoadFileRequest message. Does not implicitly {@link PB_App.AppLoadFileRequest.verify|verify} messages.
         * @param message AppLoadFileRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_App.AppLoadFileRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppLoadFileRequest message, length delimited. Does not implicitly {@link PB_App.AppLoadFileRequest.verify|verify} messages.
         * @param message AppLoadFileRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_App.AppLoadFileRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppLoadFileRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_App.AppLoadFileRequest & PB_App.AppLoadFileRequest.$Shape} AppLoadFileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_App.AppLoadFileRequest & PB_App.AppLoadFileRequest.$Shape;

        /**
         * Decodes an AppLoadFileRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_App.AppLoadFileRequest & PB_App.AppLoadFileRequest.$Shape} AppLoadFileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_App.AppLoadFileRequest & PB_App.AppLoadFileRequest.$Shape;

        /**
         * Gets the type url for AppLoadFileRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AppLoadFileRequest {

        /** Properties of an AppLoadFileRequest. */
        interface $Properties {

            /** AppLoadFileRequest path */
            path?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AppLoadFileRequest. */
        type $Shape = PB_App.AppLoadFileRequest.$Properties;
    }

    /**
     * Properties of an AppButtonPressRequest.
     * @deprecated Use PB_App.AppButtonPressRequest.$Properties instead.
     */
    interface IAppButtonPressRequest extends PB_App.AppButtonPressRequest.$Properties {
    }

    /** Represents an AppButtonPressRequest. */
    class AppButtonPressRequest {

        /**
         * Constructs a new AppButtonPressRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_App.AppButtonPressRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AppButtonPressRequest args. */
        args: string;

        /** AppButtonPressRequest index. */
        index: number;

        /**
         * Encodes the specified AppButtonPressRequest message. Does not implicitly {@link PB_App.AppButtonPressRequest.verify|verify} messages.
         * @param message AppButtonPressRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_App.AppButtonPressRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppButtonPressRequest message, length delimited. Does not implicitly {@link PB_App.AppButtonPressRequest.verify|verify} messages.
         * @param message AppButtonPressRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_App.AppButtonPressRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppButtonPressRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_App.AppButtonPressRequest & PB_App.AppButtonPressRequest.$Shape} AppButtonPressRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_App.AppButtonPressRequest & PB_App.AppButtonPressRequest.$Shape;

        /**
         * Decodes an AppButtonPressRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_App.AppButtonPressRequest & PB_App.AppButtonPressRequest.$Shape} AppButtonPressRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_App.AppButtonPressRequest & PB_App.AppButtonPressRequest.$Shape;

        /**
         * Gets the type url for AppButtonPressRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AppButtonPressRequest {

        /** Properties of an AppButtonPressRequest. */
        interface $Properties {

            /** AppButtonPressRequest args */
            args?: (string|null);

            /** AppButtonPressRequest index */
            index?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AppButtonPressRequest. */
        type $Shape = PB_App.AppButtonPressRequest.$Properties;
    }

    /**
     * Properties of an AppButtonReleaseRequest.
     * @deprecated Use PB_App.AppButtonReleaseRequest.$Properties instead.
     */
    interface IAppButtonReleaseRequest extends PB_App.AppButtonReleaseRequest.$Properties {
    }

    /** Represents an AppButtonReleaseRequest. */
    class AppButtonReleaseRequest {

        /**
         * Constructs a new AppButtonReleaseRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_App.AppButtonReleaseRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified AppButtonReleaseRequest message. Does not implicitly {@link PB_App.AppButtonReleaseRequest.verify|verify} messages.
         * @param message AppButtonReleaseRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_App.AppButtonReleaseRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppButtonReleaseRequest message, length delimited. Does not implicitly {@link PB_App.AppButtonReleaseRequest.verify|verify} messages.
         * @param message AppButtonReleaseRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_App.AppButtonReleaseRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppButtonReleaseRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_App.AppButtonReleaseRequest & PB_App.AppButtonReleaseRequest.$Shape} AppButtonReleaseRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_App.AppButtonReleaseRequest & PB_App.AppButtonReleaseRequest.$Shape;

        /**
         * Decodes an AppButtonReleaseRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_App.AppButtonReleaseRequest & PB_App.AppButtonReleaseRequest.$Shape} AppButtonReleaseRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_App.AppButtonReleaseRequest & PB_App.AppButtonReleaseRequest.$Shape;

        /**
         * Gets the type url for AppButtonReleaseRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AppButtonReleaseRequest {

        /** Properties of an AppButtonReleaseRequest. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AppButtonReleaseRequest. */
        type $Shape = PB_App.AppButtonReleaseRequest.$Properties;
    }

    /**
     * Properties of an AppButtonPressReleaseRequest.
     * @deprecated Use PB_App.AppButtonPressReleaseRequest.$Properties instead.
     */
    interface IAppButtonPressReleaseRequest extends PB_App.AppButtonPressReleaseRequest.$Properties {
    }

    /** Represents an AppButtonPressReleaseRequest. */
    class AppButtonPressReleaseRequest {

        /**
         * Constructs a new AppButtonPressReleaseRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_App.AppButtonPressReleaseRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AppButtonPressReleaseRequest args. */
        args: string;

        /** AppButtonPressReleaseRequest index. */
        index: number;

        /**
         * Encodes the specified AppButtonPressReleaseRequest message. Does not implicitly {@link PB_App.AppButtonPressReleaseRequest.verify|verify} messages.
         * @param message AppButtonPressReleaseRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_App.AppButtonPressReleaseRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppButtonPressReleaseRequest message, length delimited. Does not implicitly {@link PB_App.AppButtonPressReleaseRequest.verify|verify} messages.
         * @param message AppButtonPressReleaseRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_App.AppButtonPressReleaseRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppButtonPressReleaseRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_App.AppButtonPressReleaseRequest & PB_App.AppButtonPressReleaseRequest.$Shape} AppButtonPressReleaseRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_App.AppButtonPressReleaseRequest & PB_App.AppButtonPressReleaseRequest.$Shape;

        /**
         * Decodes an AppButtonPressReleaseRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_App.AppButtonPressReleaseRequest & PB_App.AppButtonPressReleaseRequest.$Shape} AppButtonPressReleaseRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_App.AppButtonPressReleaseRequest & PB_App.AppButtonPressReleaseRequest.$Shape;

        /**
         * Gets the type url for AppButtonPressReleaseRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AppButtonPressReleaseRequest {

        /** Properties of an AppButtonPressReleaseRequest. */
        interface $Properties {

            /** AppButtonPressReleaseRequest args */
            args?: (string|null);

            /** AppButtonPressReleaseRequest index */
            index?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AppButtonPressReleaseRequest. */
        type $Shape = PB_App.AppButtonPressReleaseRequest.$Properties;
    }

    /** AppState enum. */
    enum AppState {

        /** APP_CLOSED value */
        APP_CLOSED = 0,

        /** APP_STARTED value */
        APP_STARTED = 1
    }

    /**
     * Properties of an AppStateResponse.
     * @deprecated Use PB_App.AppStateResponse.$Properties instead.
     */
    interface IAppStateResponse extends PB_App.AppStateResponse.$Properties {
    }

    /** Represents an AppStateResponse. */
    class AppStateResponse {

        /**
         * Constructs a new AppStateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_App.AppStateResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** AppStateResponse state. */
        state: PB_App.AppState;

        /**
         * Encodes the specified AppStateResponse message. Does not implicitly {@link PB_App.AppStateResponse.verify|verify} messages.
         * @param message AppStateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_App.AppStateResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppStateResponse message, length delimited. Does not implicitly {@link PB_App.AppStateResponse.verify|verify} messages.
         * @param message AppStateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_App.AppStateResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppStateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_App.AppStateResponse & PB_App.AppStateResponse.$Shape} AppStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_App.AppStateResponse & PB_App.AppStateResponse.$Shape;

        /**
         * Decodes an AppStateResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_App.AppStateResponse & PB_App.AppStateResponse.$Shape} AppStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_App.AppStateResponse & PB_App.AppStateResponse.$Shape;

        /**
         * Gets the type url for AppStateResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace AppStateResponse {

        /** Properties of an AppStateResponse. */
        interface $Properties {

            /** AppStateResponse state */
            state?: (PB_App.AppState|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an AppStateResponse. */
        type $Shape = PB_App.AppStateResponse.$Properties;
    }

    /**
     * Properties of a GetErrorRequest.
     * @deprecated Use PB_App.GetErrorRequest.$Properties instead.
     */
    interface IGetErrorRequest extends PB_App.GetErrorRequest.$Properties {
    }

    /** Represents a GetErrorRequest. */
    class GetErrorRequest {

        /**
         * Constructs a new GetErrorRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_App.GetErrorRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified GetErrorRequest message. Does not implicitly {@link PB_App.GetErrorRequest.verify|verify} messages.
         * @param message GetErrorRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_App.GetErrorRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetErrorRequest message, length delimited. Does not implicitly {@link PB_App.GetErrorRequest.verify|verify} messages.
         * @param message GetErrorRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_App.GetErrorRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetErrorRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_App.GetErrorRequest & PB_App.GetErrorRequest.$Shape} GetErrorRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_App.GetErrorRequest & PB_App.GetErrorRequest.$Shape;

        /**
         * Decodes a GetErrorRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_App.GetErrorRequest & PB_App.GetErrorRequest.$Shape} GetErrorRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_App.GetErrorRequest & PB_App.GetErrorRequest.$Shape;

        /**
         * Gets the type url for GetErrorRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetErrorRequest {

        /** Properties of a GetErrorRequest. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetErrorRequest. */
        type $Shape = PB_App.GetErrorRequest.$Properties;
    }

    /**
     * Properties of a GetErrorResponse.
     * @deprecated Use PB_App.GetErrorResponse.$Properties instead.
     */
    interface IGetErrorResponse extends PB_App.GetErrorResponse.$Properties {
    }

    /** Represents a GetErrorResponse. */
    class GetErrorResponse {

        /**
         * Constructs a new GetErrorResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_App.GetErrorResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetErrorResponse code. */
        code: number;

        /** GetErrorResponse text. */
        text: string;

        /**
         * Encodes the specified GetErrorResponse message. Does not implicitly {@link PB_App.GetErrorResponse.verify|verify} messages.
         * @param message GetErrorResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_App.GetErrorResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetErrorResponse message, length delimited. Does not implicitly {@link PB_App.GetErrorResponse.verify|verify} messages.
         * @param message GetErrorResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_App.GetErrorResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetErrorResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_App.GetErrorResponse & PB_App.GetErrorResponse.$Shape} GetErrorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_App.GetErrorResponse & PB_App.GetErrorResponse.$Shape;

        /**
         * Decodes a GetErrorResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_App.GetErrorResponse & PB_App.GetErrorResponse.$Shape} GetErrorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_App.GetErrorResponse & PB_App.GetErrorResponse.$Shape;

        /**
         * Gets the type url for GetErrorResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetErrorResponse {

        /** Properties of a GetErrorResponse. */
        interface $Properties {

            /** GetErrorResponse code */
            code?: (number|null);

            /** GetErrorResponse text */
            text?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetErrorResponse. */
        type $Shape = PB_App.GetErrorResponse.$Properties;
    }

    /**
     * Properties of a DataExchangeRequest.
     * @deprecated Use PB_App.DataExchangeRequest.$Properties instead.
     */
    interface IDataExchangeRequest extends PB_App.DataExchangeRequest.$Properties {
    }

    /** Represents a DataExchangeRequest. */
    class DataExchangeRequest {

        /**
         * Constructs a new DataExchangeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_App.DataExchangeRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DataExchangeRequest data. */
        data: Uint8Array;

        /**
         * Encodes the specified DataExchangeRequest message. Does not implicitly {@link PB_App.DataExchangeRequest.verify|verify} messages.
         * @param message DataExchangeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_App.DataExchangeRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DataExchangeRequest message, length delimited. Does not implicitly {@link PB_App.DataExchangeRequest.verify|verify} messages.
         * @param message DataExchangeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_App.DataExchangeRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DataExchangeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_App.DataExchangeRequest & PB_App.DataExchangeRequest.$Shape} DataExchangeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_App.DataExchangeRequest & PB_App.DataExchangeRequest.$Shape;

        /**
         * Decodes a DataExchangeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_App.DataExchangeRequest & PB_App.DataExchangeRequest.$Shape} DataExchangeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_App.DataExchangeRequest & PB_App.DataExchangeRequest.$Shape;

        /**
         * Gets the type url for DataExchangeRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DataExchangeRequest {

        /** Properties of a DataExchangeRequest. */
        interface $Properties {

            /** DataExchangeRequest data */
            data?: (Uint8Array|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DataExchangeRequest. */
        type $Shape = PB_App.DataExchangeRequest.$Properties;
    }
}

/** Namespace PB_Gui. */
export namespace PB_Gui {

    /** InputKey enum. */
    enum InputKey {

        /** UP value */
        UP = 0,

        /** DOWN value */
        DOWN = 1,

        /** RIGHT value */
        RIGHT = 2,

        /** LEFT value */
        LEFT = 3,

        /** OK value */
        OK = 4,

        /** BACK value */
        BACK = 5
    }

    /** InputType enum. */
    enum InputType {

        /** PRESS value */
        PRESS = 0,

        /** RELEASE value */
        RELEASE = 1,

        /** SHORT value */
        SHORT = 2,

        /** LONG value */
        LONG = 3,

        /** REPEAT value */
        REPEAT = 4
    }

    /** ScreenOrientation enum. */
    enum ScreenOrientation {

        /** HORIZONTAL value */
        HORIZONTAL = 0,

        /** HORIZONTAL_FLIP value */
        HORIZONTAL_FLIP = 1,

        /** VERTICAL value */
        VERTICAL = 2,

        /** VERTICAL_FLIP value */
        VERTICAL_FLIP = 3
    }

    /**
     * Properties of a ScreenFrame.
     * @deprecated Use PB_Gui.ScreenFrame.$Properties instead.
     */
    interface IScreenFrame extends PB_Gui.ScreenFrame.$Properties {
    }

    /** Represents a ScreenFrame. */
    class ScreenFrame {

        /**
         * Constructs a new ScreenFrame.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Gui.ScreenFrame.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ScreenFrame data. */
        data: Uint8Array;

        /** ScreenFrame orientation. */
        orientation: PB_Gui.ScreenOrientation;

        /** ScreenFrame bgColor. */
        bgColor: number;

        /** ScreenFrame fgColor. */
        fgColor: number;

        /**
         * Encodes the specified ScreenFrame message. Does not implicitly {@link PB_Gui.ScreenFrame.verify|verify} messages.
         * @param message ScreenFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Gui.ScreenFrame.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ScreenFrame message, length delimited. Does not implicitly {@link PB_Gui.ScreenFrame.verify|verify} messages.
         * @param message ScreenFrame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Gui.ScreenFrame.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ScreenFrame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Gui.ScreenFrame & PB_Gui.ScreenFrame.$Shape} ScreenFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Gui.ScreenFrame & PB_Gui.ScreenFrame.$Shape;

        /**
         * Decodes a ScreenFrame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Gui.ScreenFrame & PB_Gui.ScreenFrame.$Shape} ScreenFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Gui.ScreenFrame & PB_Gui.ScreenFrame.$Shape;

        /**
         * Gets the type url for ScreenFrame
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ScreenFrame {

        /** Properties of a ScreenFrame. */
        interface $Properties {

            /** ScreenFrame data */
            data?: (Uint8Array|null);

            /** ScreenFrame orientation */
            orientation?: (PB_Gui.ScreenOrientation|null);

            /** ScreenFrame bgColor */
            bgColor?: (number|null);

            /** ScreenFrame fgColor */
            fgColor?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ScreenFrame. */
        type $Shape = PB_Gui.ScreenFrame.$Properties;
    }

    /**
     * Properties of a StartScreenStreamRequest.
     * @deprecated Use PB_Gui.StartScreenStreamRequest.$Properties instead.
     */
    interface IStartScreenStreamRequest extends PB_Gui.StartScreenStreamRequest.$Properties {
    }

    /** Represents a StartScreenStreamRequest. */
    class StartScreenStreamRequest {

        /**
         * Constructs a new StartScreenStreamRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Gui.StartScreenStreamRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified StartScreenStreamRequest message. Does not implicitly {@link PB_Gui.StartScreenStreamRequest.verify|verify} messages.
         * @param message StartScreenStreamRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Gui.StartScreenStreamRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartScreenStreamRequest message, length delimited. Does not implicitly {@link PB_Gui.StartScreenStreamRequest.verify|verify} messages.
         * @param message StartScreenStreamRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Gui.StartScreenStreamRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartScreenStreamRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Gui.StartScreenStreamRequest & PB_Gui.StartScreenStreamRequest.$Shape} StartScreenStreamRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Gui.StartScreenStreamRequest & PB_Gui.StartScreenStreamRequest.$Shape;

        /**
         * Decodes a StartScreenStreamRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Gui.StartScreenStreamRequest & PB_Gui.StartScreenStreamRequest.$Shape} StartScreenStreamRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Gui.StartScreenStreamRequest & PB_Gui.StartScreenStreamRequest.$Shape;

        /**
         * Gets the type url for StartScreenStreamRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace StartScreenStreamRequest {

        /** Properties of a StartScreenStreamRequest. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a StartScreenStreamRequest. */
        type $Shape = PB_Gui.StartScreenStreamRequest.$Properties;
    }

    /**
     * Properties of a StopScreenStreamRequest.
     * @deprecated Use PB_Gui.StopScreenStreamRequest.$Properties instead.
     */
    interface IStopScreenStreamRequest extends PB_Gui.StopScreenStreamRequest.$Properties {
    }

    /** Represents a StopScreenStreamRequest. */
    class StopScreenStreamRequest {

        /**
         * Constructs a new StopScreenStreamRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Gui.StopScreenStreamRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified StopScreenStreamRequest message. Does not implicitly {@link PB_Gui.StopScreenStreamRequest.verify|verify} messages.
         * @param message StopScreenStreamRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Gui.StopScreenStreamRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StopScreenStreamRequest message, length delimited. Does not implicitly {@link PB_Gui.StopScreenStreamRequest.verify|verify} messages.
         * @param message StopScreenStreamRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Gui.StopScreenStreamRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StopScreenStreamRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Gui.StopScreenStreamRequest & PB_Gui.StopScreenStreamRequest.$Shape} StopScreenStreamRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Gui.StopScreenStreamRequest & PB_Gui.StopScreenStreamRequest.$Shape;

        /**
         * Decodes a StopScreenStreamRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Gui.StopScreenStreamRequest & PB_Gui.StopScreenStreamRequest.$Shape} StopScreenStreamRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Gui.StopScreenStreamRequest & PB_Gui.StopScreenStreamRequest.$Shape;

        /**
         * Gets the type url for StopScreenStreamRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace StopScreenStreamRequest {

        /** Properties of a StopScreenStreamRequest. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a StopScreenStreamRequest. */
        type $Shape = PB_Gui.StopScreenStreamRequest.$Properties;
    }

    /**
     * Properties of a SendInputEventRequest.
     * @deprecated Use PB_Gui.SendInputEventRequest.$Properties instead.
     */
    interface ISendInputEventRequest extends PB_Gui.SendInputEventRequest.$Properties {
    }

    /** Represents a SendInputEventRequest. */
    class SendInputEventRequest {

        /**
         * Constructs a new SendInputEventRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Gui.SendInputEventRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SendInputEventRequest key. */
        key: PB_Gui.InputKey;

        /** SendInputEventRequest type. */
        type: PB_Gui.InputType;

        /**
         * Encodes the specified SendInputEventRequest message. Does not implicitly {@link PB_Gui.SendInputEventRequest.verify|verify} messages.
         * @param message SendInputEventRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Gui.SendInputEventRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendInputEventRequest message, length delimited. Does not implicitly {@link PB_Gui.SendInputEventRequest.verify|verify} messages.
         * @param message SendInputEventRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Gui.SendInputEventRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendInputEventRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Gui.SendInputEventRequest & PB_Gui.SendInputEventRequest.$Shape} SendInputEventRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Gui.SendInputEventRequest & PB_Gui.SendInputEventRequest.$Shape;

        /**
         * Decodes a SendInputEventRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Gui.SendInputEventRequest & PB_Gui.SendInputEventRequest.$Shape} SendInputEventRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Gui.SendInputEventRequest & PB_Gui.SendInputEventRequest.$Shape;

        /**
         * Gets the type url for SendInputEventRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SendInputEventRequest {

        /** Properties of a SendInputEventRequest. */
        interface $Properties {

            /** SendInputEventRequest key */
            key?: (PB_Gui.InputKey|null);

            /** SendInputEventRequest type */
            type?: (PB_Gui.InputType|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SendInputEventRequest. */
        type $Shape = PB_Gui.SendInputEventRequest.$Properties;
    }

    /**
     * Properties of a StartVirtualDisplayRequest.
     * @deprecated Use PB_Gui.StartVirtualDisplayRequest.$Properties instead.
     */
    interface IStartVirtualDisplayRequest extends PB_Gui.StartVirtualDisplayRequest.$Properties {
    }

    /** Represents a StartVirtualDisplayRequest. */
    class StartVirtualDisplayRequest {

        /**
         * Constructs a new StartVirtualDisplayRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Gui.StartVirtualDisplayRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** StartVirtualDisplayRequest firstFrame. */
        firstFrame?: (PB_Gui.ScreenFrame.$Properties|null);

        /** StartVirtualDisplayRequest sendInput. */
        sendInput: boolean;

        /**
         * Encodes the specified StartVirtualDisplayRequest message. Does not implicitly {@link PB_Gui.StartVirtualDisplayRequest.verify|verify} messages.
         * @param message StartVirtualDisplayRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Gui.StartVirtualDisplayRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartVirtualDisplayRequest message, length delimited. Does not implicitly {@link PB_Gui.StartVirtualDisplayRequest.verify|verify} messages.
         * @param message StartVirtualDisplayRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Gui.StartVirtualDisplayRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartVirtualDisplayRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Gui.StartVirtualDisplayRequest & PB_Gui.StartVirtualDisplayRequest.$Shape} StartVirtualDisplayRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Gui.StartVirtualDisplayRequest & PB_Gui.StartVirtualDisplayRequest.$Shape;

        /**
         * Decodes a StartVirtualDisplayRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Gui.StartVirtualDisplayRequest & PB_Gui.StartVirtualDisplayRequest.$Shape} StartVirtualDisplayRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Gui.StartVirtualDisplayRequest & PB_Gui.StartVirtualDisplayRequest.$Shape;

        /**
         * Gets the type url for StartVirtualDisplayRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace StartVirtualDisplayRequest {

        /** Properties of a StartVirtualDisplayRequest. */
        interface $Properties {

            /** StartVirtualDisplayRequest firstFrame */
            firstFrame?: (PB_Gui.ScreenFrame.$Properties|null);

            /** StartVirtualDisplayRequest sendInput */
            sendInput?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a StartVirtualDisplayRequest. */
        type $Shape = PB_Gui.StartVirtualDisplayRequest.$Properties;
    }

    /**
     * Properties of a StopVirtualDisplayRequest.
     * @deprecated Use PB_Gui.StopVirtualDisplayRequest.$Properties instead.
     */
    interface IStopVirtualDisplayRequest extends PB_Gui.StopVirtualDisplayRequest.$Properties {
    }

    /** Represents a StopVirtualDisplayRequest. */
    class StopVirtualDisplayRequest {

        /**
         * Constructs a new StopVirtualDisplayRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Gui.StopVirtualDisplayRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified StopVirtualDisplayRequest message. Does not implicitly {@link PB_Gui.StopVirtualDisplayRequest.verify|verify} messages.
         * @param message StopVirtualDisplayRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Gui.StopVirtualDisplayRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StopVirtualDisplayRequest message, length delimited. Does not implicitly {@link PB_Gui.StopVirtualDisplayRequest.verify|verify} messages.
         * @param message StopVirtualDisplayRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Gui.StopVirtualDisplayRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StopVirtualDisplayRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Gui.StopVirtualDisplayRequest & PB_Gui.StopVirtualDisplayRequest.$Shape} StopVirtualDisplayRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Gui.StopVirtualDisplayRequest & PB_Gui.StopVirtualDisplayRequest.$Shape;

        /**
         * Decodes a StopVirtualDisplayRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Gui.StopVirtualDisplayRequest & PB_Gui.StopVirtualDisplayRequest.$Shape} StopVirtualDisplayRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Gui.StopVirtualDisplayRequest & PB_Gui.StopVirtualDisplayRequest.$Shape;

        /**
         * Gets the type url for StopVirtualDisplayRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace StopVirtualDisplayRequest {

        /** Properties of a StopVirtualDisplayRequest. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a StopVirtualDisplayRequest. */
        type $Shape = PB_Gui.StopVirtualDisplayRequest.$Properties;
    }
}

/** Namespace PB_Gpio. */
export namespace PB_Gpio {

    /** GpioPin enum. */
    enum GpioPin {

        /** PC0 value */
        PC0 = 0,

        /** PC1 value */
        PC1 = 1,

        /** PC3 value */
        PC3 = 2,

        /** PB2 value */
        PB2 = 3,

        /** PB3 value */
        PB3 = 4,

        /** PA4 value */
        PA4 = 5,

        /** PA6 value */
        PA6 = 6,

        /** PA7 value */
        PA7 = 7
    }

    /** GpioPinMode enum. */
    enum GpioPinMode {

        /** OUTPUT value */
        OUTPUT = 0,

        /** INPUT value */
        INPUT = 1
    }

    /** GpioInputPull enum. */
    enum GpioInputPull {

        /** NO value */
        NO = 0,

        /** UP value */
        UP = 1,

        /** DOWN value */
        DOWN = 2
    }

    /** GpioOtgMode enum. */
    enum GpioOtgMode {

        /** OFF value */
        OFF = 0,

        /** ON value */
        ON = 1
    }

    /**
     * Properties of a SetPinMode.
     * @deprecated Use PB_Gpio.SetPinMode.$Properties instead.
     */
    interface ISetPinMode extends PB_Gpio.SetPinMode.$Properties {
    }

    /** Represents a SetPinMode. */
    class SetPinMode {

        /**
         * Constructs a new SetPinMode.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Gpio.SetPinMode.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SetPinMode pin. */
        pin: PB_Gpio.GpioPin;

        /** SetPinMode mode. */
        mode: PB_Gpio.GpioPinMode;

        /**
         * Encodes the specified SetPinMode message. Does not implicitly {@link PB_Gpio.SetPinMode.verify|verify} messages.
         * @param message SetPinMode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Gpio.SetPinMode.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetPinMode message, length delimited. Does not implicitly {@link PB_Gpio.SetPinMode.verify|verify} messages.
         * @param message SetPinMode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Gpio.SetPinMode.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetPinMode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Gpio.SetPinMode & PB_Gpio.SetPinMode.$Shape} SetPinMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Gpio.SetPinMode & PB_Gpio.SetPinMode.$Shape;

        /**
         * Decodes a SetPinMode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Gpio.SetPinMode & PB_Gpio.SetPinMode.$Shape} SetPinMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Gpio.SetPinMode & PB_Gpio.SetPinMode.$Shape;

        /**
         * Gets the type url for SetPinMode
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SetPinMode {

        /** Properties of a SetPinMode. */
        interface $Properties {

            /** SetPinMode pin */
            pin?: (PB_Gpio.GpioPin|null);

            /** SetPinMode mode */
            mode?: (PB_Gpio.GpioPinMode|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SetPinMode. */
        type $Shape = PB_Gpio.SetPinMode.$Properties;
    }

    /**
     * Properties of a SetInputPull.
     * @deprecated Use PB_Gpio.SetInputPull.$Properties instead.
     */
    interface ISetInputPull extends PB_Gpio.SetInputPull.$Properties {
    }

    /** Represents a SetInputPull. */
    class SetInputPull {

        /**
         * Constructs a new SetInputPull.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Gpio.SetInputPull.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SetInputPull pin. */
        pin: PB_Gpio.GpioPin;

        /** SetInputPull pullMode. */
        pullMode: PB_Gpio.GpioInputPull;

        /**
         * Encodes the specified SetInputPull message. Does not implicitly {@link PB_Gpio.SetInputPull.verify|verify} messages.
         * @param message SetInputPull message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Gpio.SetInputPull.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetInputPull message, length delimited. Does not implicitly {@link PB_Gpio.SetInputPull.verify|verify} messages.
         * @param message SetInputPull message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Gpio.SetInputPull.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetInputPull message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Gpio.SetInputPull & PB_Gpio.SetInputPull.$Shape} SetInputPull
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Gpio.SetInputPull & PB_Gpio.SetInputPull.$Shape;

        /**
         * Decodes a SetInputPull message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Gpio.SetInputPull & PB_Gpio.SetInputPull.$Shape} SetInputPull
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Gpio.SetInputPull & PB_Gpio.SetInputPull.$Shape;

        /**
         * Gets the type url for SetInputPull
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SetInputPull {

        /** Properties of a SetInputPull. */
        interface $Properties {

            /** SetInputPull pin */
            pin?: (PB_Gpio.GpioPin|null);

            /** SetInputPull pullMode */
            pullMode?: (PB_Gpio.GpioInputPull|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SetInputPull. */
        type $Shape = PB_Gpio.SetInputPull.$Properties;
    }

    /**
     * Properties of a GetPinMode.
     * @deprecated Use PB_Gpio.GetPinMode.$Properties instead.
     */
    interface IGetPinMode extends PB_Gpio.GetPinMode.$Properties {
    }

    /** Represents a GetPinMode. */
    class GetPinMode {

        /**
         * Constructs a new GetPinMode.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Gpio.GetPinMode.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetPinMode pin. */
        pin: PB_Gpio.GpioPin;

        /**
         * Encodes the specified GetPinMode message. Does not implicitly {@link PB_Gpio.GetPinMode.verify|verify} messages.
         * @param message GetPinMode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Gpio.GetPinMode.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetPinMode message, length delimited. Does not implicitly {@link PB_Gpio.GetPinMode.verify|verify} messages.
         * @param message GetPinMode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Gpio.GetPinMode.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetPinMode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Gpio.GetPinMode & PB_Gpio.GetPinMode.$Shape} GetPinMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Gpio.GetPinMode & PB_Gpio.GetPinMode.$Shape;

        /**
         * Decodes a GetPinMode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Gpio.GetPinMode & PB_Gpio.GetPinMode.$Shape} GetPinMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Gpio.GetPinMode & PB_Gpio.GetPinMode.$Shape;

        /**
         * Gets the type url for GetPinMode
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetPinMode {

        /** Properties of a GetPinMode. */
        interface $Properties {

            /** GetPinMode pin */
            pin?: (PB_Gpio.GpioPin|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetPinMode. */
        type $Shape = PB_Gpio.GetPinMode.$Properties;
    }

    /**
     * Properties of a GetPinModeResponse.
     * @deprecated Use PB_Gpio.GetPinModeResponse.$Properties instead.
     */
    interface IGetPinModeResponse extends PB_Gpio.GetPinModeResponse.$Properties {
    }

    /** Represents a GetPinModeResponse. */
    class GetPinModeResponse {

        /**
         * Constructs a new GetPinModeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Gpio.GetPinModeResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetPinModeResponse mode. */
        mode: PB_Gpio.GpioPinMode;

        /**
         * Encodes the specified GetPinModeResponse message. Does not implicitly {@link PB_Gpio.GetPinModeResponse.verify|verify} messages.
         * @param message GetPinModeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Gpio.GetPinModeResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetPinModeResponse message, length delimited. Does not implicitly {@link PB_Gpio.GetPinModeResponse.verify|verify} messages.
         * @param message GetPinModeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Gpio.GetPinModeResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetPinModeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Gpio.GetPinModeResponse & PB_Gpio.GetPinModeResponse.$Shape} GetPinModeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Gpio.GetPinModeResponse & PB_Gpio.GetPinModeResponse.$Shape;

        /**
         * Decodes a GetPinModeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Gpio.GetPinModeResponse & PB_Gpio.GetPinModeResponse.$Shape} GetPinModeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Gpio.GetPinModeResponse & PB_Gpio.GetPinModeResponse.$Shape;

        /**
         * Gets the type url for GetPinModeResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetPinModeResponse {

        /** Properties of a GetPinModeResponse. */
        interface $Properties {

            /** GetPinModeResponse mode */
            mode?: (PB_Gpio.GpioPinMode|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetPinModeResponse. */
        type $Shape = PB_Gpio.GetPinModeResponse.$Properties;
    }

    /**
     * Properties of a ReadPin.
     * @deprecated Use PB_Gpio.ReadPin.$Properties instead.
     */
    interface IReadPin extends PB_Gpio.ReadPin.$Properties {
    }

    /** Represents a ReadPin. */
    class ReadPin {

        /**
         * Constructs a new ReadPin.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Gpio.ReadPin.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ReadPin pin. */
        pin: PB_Gpio.GpioPin;

        /**
         * Encodes the specified ReadPin message. Does not implicitly {@link PB_Gpio.ReadPin.verify|verify} messages.
         * @param message ReadPin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Gpio.ReadPin.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadPin message, length delimited. Does not implicitly {@link PB_Gpio.ReadPin.verify|verify} messages.
         * @param message ReadPin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Gpio.ReadPin.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadPin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Gpio.ReadPin & PB_Gpio.ReadPin.$Shape} ReadPin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Gpio.ReadPin & PB_Gpio.ReadPin.$Shape;

        /**
         * Decodes a ReadPin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Gpio.ReadPin & PB_Gpio.ReadPin.$Shape} ReadPin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Gpio.ReadPin & PB_Gpio.ReadPin.$Shape;

        /**
         * Gets the type url for ReadPin
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ReadPin {

        /** Properties of a ReadPin. */
        interface $Properties {

            /** ReadPin pin */
            pin?: (PB_Gpio.GpioPin|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ReadPin. */
        type $Shape = PB_Gpio.ReadPin.$Properties;
    }

    /**
     * Properties of a ReadPinResponse.
     * @deprecated Use PB_Gpio.ReadPinResponse.$Properties instead.
     */
    interface IReadPinResponse extends PB_Gpio.ReadPinResponse.$Properties {
    }

    /** Represents a ReadPinResponse. */
    class ReadPinResponse {

        /**
         * Constructs a new ReadPinResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Gpio.ReadPinResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ReadPinResponse value. */
        value: number;

        /**
         * Encodes the specified ReadPinResponse message. Does not implicitly {@link PB_Gpio.ReadPinResponse.verify|verify} messages.
         * @param message ReadPinResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Gpio.ReadPinResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadPinResponse message, length delimited. Does not implicitly {@link PB_Gpio.ReadPinResponse.verify|verify} messages.
         * @param message ReadPinResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Gpio.ReadPinResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadPinResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Gpio.ReadPinResponse & PB_Gpio.ReadPinResponse.$Shape} ReadPinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Gpio.ReadPinResponse & PB_Gpio.ReadPinResponse.$Shape;

        /**
         * Decodes a ReadPinResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Gpio.ReadPinResponse & PB_Gpio.ReadPinResponse.$Shape} ReadPinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Gpio.ReadPinResponse & PB_Gpio.ReadPinResponse.$Shape;

        /**
         * Gets the type url for ReadPinResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ReadPinResponse {

        /** Properties of a ReadPinResponse. */
        interface $Properties {

            /** ReadPinResponse value */
            value?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ReadPinResponse. */
        type $Shape = PB_Gpio.ReadPinResponse.$Properties;
    }

    /**
     * Properties of a WritePin.
     * @deprecated Use PB_Gpio.WritePin.$Properties instead.
     */
    interface IWritePin extends PB_Gpio.WritePin.$Properties {
    }

    /** Represents a WritePin. */
    class WritePin {

        /**
         * Constructs a new WritePin.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Gpio.WritePin.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** WritePin pin. */
        pin: PB_Gpio.GpioPin;

        /** WritePin value. */
        value: number;

        /**
         * Encodes the specified WritePin message. Does not implicitly {@link PB_Gpio.WritePin.verify|verify} messages.
         * @param message WritePin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Gpio.WritePin.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WritePin message, length delimited. Does not implicitly {@link PB_Gpio.WritePin.verify|verify} messages.
         * @param message WritePin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Gpio.WritePin.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WritePin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Gpio.WritePin & PB_Gpio.WritePin.$Shape} WritePin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Gpio.WritePin & PB_Gpio.WritePin.$Shape;

        /**
         * Decodes a WritePin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Gpio.WritePin & PB_Gpio.WritePin.$Shape} WritePin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Gpio.WritePin & PB_Gpio.WritePin.$Shape;

        /**
         * Gets the type url for WritePin
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace WritePin {

        /** Properties of a WritePin. */
        interface $Properties {

            /** WritePin pin */
            pin?: (PB_Gpio.GpioPin|null);

            /** WritePin value */
            value?: (number|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a WritePin. */
        type $Shape = PB_Gpio.WritePin.$Properties;
    }

    /**
     * Properties of a GetOtgMode.
     * @deprecated Use PB_Gpio.GetOtgMode.$Properties instead.
     */
    interface IGetOtgMode extends PB_Gpio.GetOtgMode.$Properties {
    }

    /** Represents a GetOtgMode. */
    class GetOtgMode {

        /**
         * Constructs a new GetOtgMode.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Gpio.GetOtgMode.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified GetOtgMode message. Does not implicitly {@link PB_Gpio.GetOtgMode.verify|verify} messages.
         * @param message GetOtgMode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Gpio.GetOtgMode.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetOtgMode message, length delimited. Does not implicitly {@link PB_Gpio.GetOtgMode.verify|verify} messages.
         * @param message GetOtgMode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Gpio.GetOtgMode.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetOtgMode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Gpio.GetOtgMode & PB_Gpio.GetOtgMode.$Shape} GetOtgMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Gpio.GetOtgMode & PB_Gpio.GetOtgMode.$Shape;

        /**
         * Decodes a GetOtgMode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Gpio.GetOtgMode & PB_Gpio.GetOtgMode.$Shape} GetOtgMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Gpio.GetOtgMode & PB_Gpio.GetOtgMode.$Shape;

        /**
         * Gets the type url for GetOtgMode
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetOtgMode {

        /** Properties of a GetOtgMode. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetOtgMode. */
        type $Shape = PB_Gpio.GetOtgMode.$Properties;
    }

    /**
     * Properties of a GetOtgModeResponse.
     * @deprecated Use PB_Gpio.GetOtgModeResponse.$Properties instead.
     */
    interface IGetOtgModeResponse extends PB_Gpio.GetOtgModeResponse.$Properties {
    }

    /** Represents a GetOtgModeResponse. */
    class GetOtgModeResponse {

        /**
         * Constructs a new GetOtgModeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Gpio.GetOtgModeResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetOtgModeResponse mode. */
        mode: PB_Gpio.GpioOtgMode;

        /**
         * Encodes the specified GetOtgModeResponse message. Does not implicitly {@link PB_Gpio.GetOtgModeResponse.verify|verify} messages.
         * @param message GetOtgModeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Gpio.GetOtgModeResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetOtgModeResponse message, length delimited. Does not implicitly {@link PB_Gpio.GetOtgModeResponse.verify|verify} messages.
         * @param message GetOtgModeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Gpio.GetOtgModeResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetOtgModeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Gpio.GetOtgModeResponse & PB_Gpio.GetOtgModeResponse.$Shape} GetOtgModeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Gpio.GetOtgModeResponse & PB_Gpio.GetOtgModeResponse.$Shape;

        /**
         * Decodes a GetOtgModeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Gpio.GetOtgModeResponse & PB_Gpio.GetOtgModeResponse.$Shape} GetOtgModeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Gpio.GetOtgModeResponse & PB_Gpio.GetOtgModeResponse.$Shape;

        /**
         * Gets the type url for GetOtgModeResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetOtgModeResponse {

        /** Properties of a GetOtgModeResponse. */
        interface $Properties {

            /** GetOtgModeResponse mode */
            mode?: (PB_Gpio.GpioOtgMode|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetOtgModeResponse. */
        type $Shape = PB_Gpio.GetOtgModeResponse.$Properties;
    }

    /**
     * Properties of a SetOtgMode.
     * @deprecated Use PB_Gpio.SetOtgMode.$Properties instead.
     */
    interface ISetOtgMode extends PB_Gpio.SetOtgMode.$Properties {
    }

    /** Represents a SetOtgMode. */
    class SetOtgMode {

        /**
         * Constructs a new SetOtgMode.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Gpio.SetOtgMode.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** SetOtgMode mode. */
        mode: PB_Gpio.GpioOtgMode;

        /**
         * Encodes the specified SetOtgMode message. Does not implicitly {@link PB_Gpio.SetOtgMode.verify|verify} messages.
         * @param message SetOtgMode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Gpio.SetOtgMode.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetOtgMode message, length delimited. Does not implicitly {@link PB_Gpio.SetOtgMode.verify|verify} messages.
         * @param message SetOtgMode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Gpio.SetOtgMode.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetOtgMode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Gpio.SetOtgMode & PB_Gpio.SetOtgMode.$Shape} SetOtgMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Gpio.SetOtgMode & PB_Gpio.SetOtgMode.$Shape;

        /**
         * Decodes a SetOtgMode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Gpio.SetOtgMode & PB_Gpio.SetOtgMode.$Shape} SetOtgMode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Gpio.SetOtgMode & PB_Gpio.SetOtgMode.$Shape;

        /**
         * Gets the type url for SetOtgMode
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SetOtgMode {

        /** Properties of a SetOtgMode. */
        interface $Properties {

            /** SetOtgMode mode */
            mode?: (PB_Gpio.GpioOtgMode|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SetOtgMode. */
        type $Shape = PB_Gpio.SetOtgMode.$Properties;
    }
}

/** Namespace PB_Property. */
export namespace PB_Property {

    /**
     * Properties of a GetRequest.
     * @deprecated Use PB_Property.GetRequest.$Properties instead.
     */
    interface IGetRequest extends PB_Property.GetRequest.$Properties {
    }

    /** Represents a GetRequest. */
    class GetRequest {

        /**
         * Constructs a new GetRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Property.GetRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetRequest key. */
        key: string;

        /**
         * Encodes the specified GetRequest message. Does not implicitly {@link PB_Property.GetRequest.verify|verify} messages.
         * @param message GetRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Property.GetRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRequest message, length delimited. Does not implicitly {@link PB_Property.GetRequest.verify|verify} messages.
         * @param message GetRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Property.GetRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Property.GetRequest & PB_Property.GetRequest.$Shape} GetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Property.GetRequest & PB_Property.GetRequest.$Shape;

        /**
         * Decodes a GetRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Property.GetRequest & PB_Property.GetRequest.$Shape} GetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Property.GetRequest & PB_Property.GetRequest.$Shape;

        /**
         * Gets the type url for GetRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetRequest {

        /** Properties of a GetRequest. */
        interface $Properties {

            /** GetRequest key */
            key?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetRequest. */
        type $Shape = PB_Property.GetRequest.$Properties;
    }

    /**
     * Properties of a GetResponse.
     * @deprecated Use PB_Property.GetResponse.$Properties instead.
     */
    interface IGetResponse extends PB_Property.GetResponse.$Properties {
    }

    /** Represents a GetResponse. */
    class GetResponse {

        /**
         * Constructs a new GetResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Property.GetResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetResponse key. */
        key: string;

        /** GetResponse value. */
        value: string;

        /**
         * Encodes the specified GetResponse message. Does not implicitly {@link PB_Property.GetResponse.verify|verify} messages.
         * @param message GetResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Property.GetResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetResponse message, length delimited. Does not implicitly {@link PB_Property.GetResponse.verify|verify} messages.
         * @param message GetResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Property.GetResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Property.GetResponse & PB_Property.GetResponse.$Shape} GetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Property.GetResponse & PB_Property.GetResponse.$Shape;

        /**
         * Decodes a GetResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Property.GetResponse & PB_Property.GetResponse.$Shape} GetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Property.GetResponse & PB_Property.GetResponse.$Shape;

        /**
         * Gets the type url for GetResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetResponse {

        /** Properties of a GetResponse. */
        interface $Properties {

            /** GetResponse key */
            key?: (string|null);

            /** GetResponse value */
            value?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetResponse. */
        type $Shape = PB_Property.GetResponse.$Properties;
    }
}

/** Namespace PB_Desktop. */
export namespace PB_Desktop {

    /**
     * Properties of an IsLockedRequest.
     * @deprecated Use PB_Desktop.IsLockedRequest.$Properties instead.
     */
    interface IIsLockedRequest extends PB_Desktop.IsLockedRequest.$Properties {
    }

    /** Represents an IsLockedRequest. */
    class IsLockedRequest {

        /**
         * Constructs a new IsLockedRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Desktop.IsLockedRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified IsLockedRequest message. Does not implicitly {@link PB_Desktop.IsLockedRequest.verify|verify} messages.
         * @param message IsLockedRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Desktop.IsLockedRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IsLockedRequest message, length delimited. Does not implicitly {@link PB_Desktop.IsLockedRequest.verify|verify} messages.
         * @param message IsLockedRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Desktop.IsLockedRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IsLockedRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Desktop.IsLockedRequest & PB_Desktop.IsLockedRequest.$Shape} IsLockedRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Desktop.IsLockedRequest & PB_Desktop.IsLockedRequest.$Shape;

        /**
         * Decodes an IsLockedRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Desktop.IsLockedRequest & PB_Desktop.IsLockedRequest.$Shape} IsLockedRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Desktop.IsLockedRequest & PB_Desktop.IsLockedRequest.$Shape;

        /**
         * Gets the type url for IsLockedRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace IsLockedRequest {

        /** Properties of an IsLockedRequest. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an IsLockedRequest. */
        type $Shape = PB_Desktop.IsLockedRequest.$Properties;
    }

    /**
     * Properties of an UnlockRequest.
     * @deprecated Use PB_Desktop.UnlockRequest.$Properties instead.
     */
    interface IUnlockRequest extends PB_Desktop.UnlockRequest.$Properties {
    }

    /** Represents an UnlockRequest. */
    class UnlockRequest {

        /**
         * Constructs a new UnlockRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Desktop.UnlockRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified UnlockRequest message. Does not implicitly {@link PB_Desktop.UnlockRequest.verify|verify} messages.
         * @param message UnlockRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Desktop.UnlockRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnlockRequest message, length delimited. Does not implicitly {@link PB_Desktop.UnlockRequest.verify|verify} messages.
         * @param message UnlockRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Desktop.UnlockRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnlockRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Desktop.UnlockRequest & PB_Desktop.UnlockRequest.$Shape} UnlockRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Desktop.UnlockRequest & PB_Desktop.UnlockRequest.$Shape;

        /**
         * Decodes an UnlockRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Desktop.UnlockRequest & PB_Desktop.UnlockRequest.$Shape} UnlockRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Desktop.UnlockRequest & PB_Desktop.UnlockRequest.$Shape;

        /**
         * Gets the type url for UnlockRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace UnlockRequest {

        /** Properties of an UnlockRequest. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an UnlockRequest. */
        type $Shape = PB_Desktop.UnlockRequest.$Properties;
    }

    /**
     * Properties of a StatusSubscribeRequest.
     * @deprecated Use PB_Desktop.StatusSubscribeRequest.$Properties instead.
     */
    interface IStatusSubscribeRequest extends PB_Desktop.StatusSubscribeRequest.$Properties {
    }

    /** Represents a StatusSubscribeRequest. */
    class StatusSubscribeRequest {

        /**
         * Constructs a new StatusSubscribeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Desktop.StatusSubscribeRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified StatusSubscribeRequest message. Does not implicitly {@link PB_Desktop.StatusSubscribeRequest.verify|verify} messages.
         * @param message StatusSubscribeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Desktop.StatusSubscribeRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StatusSubscribeRequest message, length delimited. Does not implicitly {@link PB_Desktop.StatusSubscribeRequest.verify|verify} messages.
         * @param message StatusSubscribeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Desktop.StatusSubscribeRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StatusSubscribeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Desktop.StatusSubscribeRequest & PB_Desktop.StatusSubscribeRequest.$Shape} StatusSubscribeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Desktop.StatusSubscribeRequest & PB_Desktop.StatusSubscribeRequest.$Shape;

        /**
         * Decodes a StatusSubscribeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Desktop.StatusSubscribeRequest & PB_Desktop.StatusSubscribeRequest.$Shape} StatusSubscribeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Desktop.StatusSubscribeRequest & PB_Desktop.StatusSubscribeRequest.$Shape;

        /**
         * Gets the type url for StatusSubscribeRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace StatusSubscribeRequest {

        /** Properties of a StatusSubscribeRequest. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a StatusSubscribeRequest. */
        type $Shape = PB_Desktop.StatusSubscribeRequest.$Properties;
    }

    /**
     * Properties of a StatusUnsubscribeRequest.
     * @deprecated Use PB_Desktop.StatusUnsubscribeRequest.$Properties instead.
     */
    interface IStatusUnsubscribeRequest extends PB_Desktop.StatusUnsubscribeRequest.$Properties {
    }

    /** Represents a StatusUnsubscribeRequest. */
    class StatusUnsubscribeRequest {

        /**
         * Constructs a new StatusUnsubscribeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Desktop.StatusUnsubscribeRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /**
         * Encodes the specified StatusUnsubscribeRequest message. Does not implicitly {@link PB_Desktop.StatusUnsubscribeRequest.verify|verify} messages.
         * @param message StatusUnsubscribeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Desktop.StatusUnsubscribeRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StatusUnsubscribeRequest message, length delimited. Does not implicitly {@link PB_Desktop.StatusUnsubscribeRequest.verify|verify} messages.
         * @param message StatusUnsubscribeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Desktop.StatusUnsubscribeRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StatusUnsubscribeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Desktop.StatusUnsubscribeRequest & PB_Desktop.StatusUnsubscribeRequest.$Shape} StatusUnsubscribeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Desktop.StatusUnsubscribeRequest & PB_Desktop.StatusUnsubscribeRequest.$Shape;

        /**
         * Decodes a StatusUnsubscribeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Desktop.StatusUnsubscribeRequest & PB_Desktop.StatusUnsubscribeRequest.$Shape} StatusUnsubscribeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Desktop.StatusUnsubscribeRequest & PB_Desktop.StatusUnsubscribeRequest.$Shape;

        /**
         * Gets the type url for StatusUnsubscribeRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace StatusUnsubscribeRequest {

        /** Properties of a StatusUnsubscribeRequest. */
        interface $Properties {

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a StatusUnsubscribeRequest. */
        type $Shape = PB_Desktop.StatusUnsubscribeRequest.$Properties;
    }

    /**
     * Properties of a Status.
     * @deprecated Use PB_Desktop.Status.$Properties instead.
     */
    interface IStatus extends PB_Desktop.Status.$Properties {
    }

    /** Represents a Status. */
    class Status {

        /**
         * Constructs a new Status.
         * @param [properties] Properties to set
         */
        constructor(properties?: PB_Desktop.Status.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** Status locked. */
        locked: boolean;

        /**
         * Encodes the specified Status message. Does not implicitly {@link PB_Desktop.Status.verify|verify} messages.
         * @param message Status message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: PB_Desktop.Status.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Status message, length delimited. Does not implicitly {@link PB_Desktop.Status.verify|verify} messages.
         * @param message Status message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: PB_Desktop.Status.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Status message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {PB_Desktop.Status & PB_Desktop.Status.$Shape} Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PB_Desktop.Status & PB_Desktop.Status.$Shape;

        /**
         * Decodes a Status message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {PB_Desktop.Status & PB_Desktop.Status.$Shape} Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PB_Desktop.Status & PB_Desktop.Status.$Shape;

        /**
         * Gets the type url for Status
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Status {

        /** Properties of a Status. */
        interface $Properties {

            /** Status locked */
            locked?: (boolean|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Status. */
        type $Shape = PB_Desktop.Status.$Properties;
    }
}
