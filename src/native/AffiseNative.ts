import {NativeBase} from "./NativeBase";
import {AffiseApiMethod} from "./AffiseApiMethod";
import type {AffiseInitPropertiesType} from "../AffiseInitProperties";
import {AffiseInitProperties, isAffiseInitPropertiesType} from "../AffiseInitProperties";
import type {AffiseEvent} from "../events/base/AffiseEvent";
import type {AutoCatchingType} from "../events/AutoCatchingType";
import type {ReferrerKey} from "../referrer/ReferrerKey";
import type {AffiseModules} from "../module/AffiseModules";
import type {ReferrerCallback} from "../referrer/ReferrerCallback";
import type {OnDeeplinkCallback} from "../callback/OnDeeplinkCallback";
import type {OnKeyValueCallback} from "../module/OnKeyValueCallback";
import type {ErrorCallback} from "../callback/ErrorCallback";
import type {CoarseValue} from "../skad/CoarseValue";
import {tryCast} from "../utils/TryCast";
import {toAffiseKeyValueList} from "../module/AffiseKeyValue";

export class AffiseNative extends NativeBase {

    init(initProperties: AffiseInitProperties | AffiseInitPropertiesType) {
        let option: any;
        if (isAffiseInitPropertiesType(initProperties)) {
            option = new AffiseInitProperties(initProperties as AffiseInitPropertiesType);
        } else {
            option = initProperties;
        }

        this.native(AffiseApiMethod.INIT, option);
    }

    isInitialized(): Promise<boolean> {
        return this.nativeResult(AffiseApiMethod.IS_INITIALIZED);
    }

    sendEvents() {
        this.native(AffiseApiMethod.SEND_EVENTS);
    }

    sendEvent(event: AffiseEvent) {
        this.native(AffiseApiMethod.SEND_EVENT, event.toRecord());
    }

    addPushToken(pushToken: string) {
        this.native(AffiseApiMethod.ADD_PUSH_TOKEN, pushToken);
    }

    registerDeeplinkCallback(callback: OnDeeplinkCallback) {
        this.nativeCallback(AffiseApiMethod.REGISTER_DEEPLINK_CALLBACK, callback);
        this.reactHandleDeeplink();
    }

    setSecretKey(secretKey: string) {
        this.native(AffiseApiMethod.SET_SECRET_KEY, secretKey);
    }

    setAutoCatchingTypes(types: AutoCatchingType[]) {
        this.native(AffiseApiMethod.SET_AUTO_CATCHING_TYPES, types);
    }

    setOfflineModeEnabled(enabled: boolean) {
        this.native(AffiseApiMethod.SET_OFFLINE_MODE_ENABLED, enabled);
    }

    isOfflineModeEnabled(): Promise<boolean> {
        return this.nativeResult(AffiseApiMethod.IS_OFFLINE_MODE_ENABLED);
    }

    setBackgroundTrackingEnabled(enabled: boolean) {
        this.native(AffiseApiMethod.SET_BACKGROUND_TRACKING_ENABLED, enabled);
    }

    isBackgroundTrackingEnabled(): Promise<boolean> {
        return this.nativeResult(AffiseApiMethod.IS_BACKGROUND_TRACKING_ENABLED);
    }

    setTrackingEnabled(enabled: boolean) {
        this.native(AffiseApiMethod.SET_TRACKING_ENABLED, enabled);
    }

    isTrackingEnabled(): Promise<boolean> {
        return this.nativeResult(AffiseApiMethod.IS_TRACKING_ENABLED);
    }

    forget(userData: string) {
        this.native(AffiseApiMethod.FORGET, userData);
    }

    setEnabledMetrics(enabled: boolean) {
        this.native(AffiseApiMethod.SET_ENABLED_METRICS, enabled);
    }

    crashApplication() {
        this.native(AffiseApiMethod.CRASH_APPLICATION);
    }

    getReferrer(callback: ReferrerCallback) {
        this.nativeCallback(AffiseApiMethod.GET_REFERRER_CALLBACK, callback);
    }

    getReferrerValue(key: ReferrerKey, callback: ReferrerCallback) {
        this.nativeCallback(AffiseApiMethod.GET_REFERRER_VALUE_CALLBACK, callback, key);
    }

    getStatus(module: AffiseModules, callback: OnKeyValueCallback) {
        this.nativeCallback(AffiseApiMethod.GET_STATUS_CALLBACK, callback, module);
    }

    getRandomUserId(): Promise<string> {
        return this.nativeResult(AffiseApiMethod.GET_RANDOM_USER_ID);
    }

    getRandomDeviceId(): Promise<string> {
        return this.nativeResult(AffiseApiMethod.GET_RANDOM_DEVICE_ID);
    }

    getProviders(): Promise<Record<string, any>> {
        return this.nativeResult(AffiseApiMethod.GET_PROVIDERS);
    }

    registerAppForAdNetworkAttribution(completionHandler: ErrorCallback) {
        this.nativeCallback(AffiseApiMethod.SKAD_REGISTER_ERROR_CALLBACK, completionHandler);
    }

    updatePostbackConversionValue(fineValue: bigint, coarseValue: CoarseValue, completionHandler: ErrorCallback) {
        const value: Record<string, any> = {};
        value['fineValue'] = Number(fineValue);
        value['coarseValue'] = coarseValue.value;
        this.nativeCallback(AffiseApiMethod.SKAD_POSTBACK_ERROR_CALLBACK, completionHandler, value);
    }

    protected handleCallback(api: AffiseApiMethod, callback: unknown, data: any) {
        switch (api) {
            case AffiseApiMethod.GET_REFERRER_CALLBACK:
                tryCast<ReferrerCallback>(callback)?.(data as string || "");
                break;
            case AffiseApiMethod.GET_REFERRER_VALUE_CALLBACK:
                tryCast<ReferrerCallback>(callback)?.(data as string || "");
                break;
            case AffiseApiMethod.GET_STATUS_CALLBACK: {
                const list = toAffiseKeyValueList(tryCast<Array<any>>(data) || []);
                tryCast<OnKeyValueCallback>(callback)?.(list);
                break;
            }
            case AffiseApiMethod.REGISTER_DEEPLINK_CALLBACK:
                tryCast<OnDeeplinkCallback>(callback)?.(data as string || "");
                break;
            case AffiseApiMethod.SKAD_REGISTER_ERROR_CALLBACK:
                tryCast<ErrorCallback>(callback)?.(data as string || "");
                break;
            case AffiseApiMethod.SKAD_POSTBACK_ERROR_CALLBACK:
                tryCast<ErrorCallback>(callback)?.(data as string || "");
                break;
            default:
                break;
        }
    }
}
