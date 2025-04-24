import {NativeBase} from "./NativeBase";
import {AffiseApiMethod} from "./AffiseApiMethod";
import type {AffiseInitPropertiesType} from "../AffiseInitProperties";
import {AffiseInitProperties, isAffiseInitPropertiesType} from "../AffiseInitProperties";
import type {AffiseEvent} from "../events/base/AffiseEvent";
import type {AutoCatchingType} from "../events/AutoCatchingType";
import type {ReferrerKey} from "../referrer/ReferrerKey";
import type {AffiseModules} from "../module/AffiseModules";
import type {ReferrerCallback} from "../referrer/ReferrerCallback";
import type {OnDeeplinkCallback} from "../deeplink/OnDeeplinkCallback";
import type {OnKeyValueCallback} from "../module/OnKeyValueCallback";
import type {ErrorCallback} from "../callback/ErrorCallback";
import type {CoarseValue} from "../skad/CoarseValue";
import {tryCast} from "../utils/TryCast";
import type {DebugOnValidateCallback} from "../debug/validate/DebugOnValidateCallback";
import type {DebugOnNetworkCallback} from "../debug/network/DebugOnNetworkCallback";
import {DebugUtils} from "./utils/DebugUtils";
import type {OnSendSuccessCallback} from "../events/OnSendSuccessCallback";
import type {OnSendFailedCallback} from "../events/OnSendFailedCallback";
import type {AffiseLinkCallback} from "../module/link/AffiseLinkCallback";
import {DataMapper} from "./data/DataMapper";
import type {AffiseResultCallback} from "../module/subscription/AffiseResultCallback";
import type {AffiseProductsResult} from "../module/subscription/AffiseProductsResult";
import type {AffiseProduct} from "../module/subscription/AffiseProduct";
import type {AffiseProductType} from "../module/subscription/AffiseProductType";
import type {AffisePurchasedInfo} from "../module/subscription/AffisePurchasedInfo";
import {DataName} from "./data/DataName";
import type { OnInitSuccessHandler } from "../settings/OnInitSuccessHandler";
import type { OnInitErrorHandler } from "../settings/OnInitErrorHandler";


export class AffiseNative extends NativeBase {

    init(initProperties: AffiseInitProperties | AffiseInitPropertiesType) {
        let option: AffiseInitProperties;
        if (isAffiseInitPropertiesType(initProperties)) {
            option = new AffiseInitProperties(initProperties as AffiseInitPropertiesType);
        } else {
            option = initProperties;
        }

        this.nativeCallbackOnly(
            AffiseApiMethod.ON_INIT_SUCCESS_HANDLER,
            initProperties.onInitSuccessHandler
        );

        this.nativeCallbackOnly(
            AffiseApiMethod.ON_INIT_ERROR_HANDLER,
            initProperties.onInitErrorHandler
        );

        this.native(AffiseApiMethod.INIT, option);
    }

    isInitialized(): Promise<boolean> {
        return this.nativeResult(AffiseApiMethod.IS_INITIALIZED);
    }

    sendEvent(event: AffiseEvent) {
        this.native(AffiseApiMethod.SEND_EVENT, event.toRecord());
    }

    sendEventNow(event: AffiseEvent, success: OnSendSuccessCallback, failed: OnSendFailedCallback) {
        this.nativeCallbackGroup(
            AffiseApiMethod.SEND_EVENT_NOW,
            new Map([
                [DataName.SUCCESS, success],
                [DataName.FAILED, failed],
            ]),
            event.toRecord()
        );
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

    getReferrerUrl(callback: ReferrerCallback) {
        this.nativeCallbackOnce(AffiseApiMethod.GET_REFERRER_URL_CALLBACK, callback);
    }

    getReferrerUrlValue(key: ReferrerKey, callback: ReferrerCallback) {
        this.nativeCallbackOnce(AffiseApiMethod.GET_REFERRER_URL_VALUE_CALLBACK, callback, key);
    }

    getDeferredDeeplink(callback: ReferrerCallback) {
        this.nativeCallbackOnce(AffiseApiMethod.GET_DEFERRED_DEEPLINK_CALLBACK, callback);
    }

    getDeferredDeeplinkValue(key: ReferrerKey, callback: ReferrerCallback) {
        this.nativeCallbackOnce(AffiseApiMethod.GET_DEFERRED_DEEPLINK_VALUE_CALLBACK, callback, key);
    }

    isFirstRun(): Promise<boolean> {
        return this.nativeResult(AffiseApiMethod.IS_FIRST_RUN);
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
        this.nativeCallbackOnce(AffiseApiMethod.SKAD_REGISTER_ERROR_CALLBACK, completionHandler);
    }

    updatePostbackConversionValue(fineValue: bigint, coarseValue: CoarseValue, completionHandler: ErrorCallback) {
        const value: Record<string, any> = {};
        value[DataName.FINE_VALUE] = Number(fineValue);
        value[DataName.COARSE_VALUE] = coarseValue.value;
        this.nativeCallbackOnce(AffiseApiMethod.SKAD_POSTBACK_ERROR_CALLBACK, completionHandler, value);
    }

    ////////////////////////////////////////
    // debug
    ////////////////////////////////////////
    validate(callback: DebugOnValidateCallback) {
        this.nativeCallbackOnce(AffiseApiMethod.DEBUG_VALIDATE_CALLBACK, callback);
    }

    network(callback: DebugOnNetworkCallback) {
        this.nativeCallback(AffiseApiMethod.DEBUG_NETWORK_CALLBACK, callback);
    }

    versionNative(): Promise<string> {
        return this.nativeResult(AffiseApiMethod.DEBUG_VERSION_NATIVE);
    }

    ////////////////////////////////////////
    // modules
    ////////////////////////////////////////
    getStatus(module: AffiseModules, callback: OnKeyValueCallback) {
        this.nativeCallbackOnce(AffiseApiMethod.GET_STATUS_CALLBACK, callback, module);
    }

    moduleStart(module: AffiseModules): Promise<boolean> {
        return this.nativeResult(AffiseApiMethod.MODULE_START, module);
    }

    getModulesInstalled(): Promise<AffiseModules[]> {
        return this.nativeResult(AffiseApiMethod.GET_MODULES_INSTALLED);
    }

    // Link Module
    linkResolve(url: string, callback: AffiseLinkCallback) {
        this.nativeCallbackOnce(
            AffiseApiMethod.MODULE_LINK_LINK_RESOLVE_CALLBACK,
            callback,
            url
        );
    }

    // Subscription Module
    fetchProducts(ids: string[], callback: AffiseResultCallback<AffiseProductsResult>) {
        this.nativeCallbackOnce(
            AffiseApiMethod.MODULE_SUBS_FETCH_PRODUCTS_CALLBACK,
            callback,
            ids,
        );
    }

    // Subscription Module
    purchase(product: AffiseProduct, type: AffiseProductType, callback: AffiseResultCallback<AffisePurchasedInfo>) {
        const data: Record<string, any> = {};
        data[DataName.PRODUCT] = DataMapper.fromProduct(product);
        data[DataName.TYPE] = type;

        this.nativeCallbackOnce(
            AffiseApiMethod.MODULE_SUBS_PURCHASE_CALLBACK,
            callback,
            data,
        );
    }
    ////////////////////////////////////////
    // modules
    ////////////////////////////////////////

    protected handleCallback(api: AffiseApiMethod, callback: unknown, data: any, tag: string | null) {
        switch (api) {
            case AffiseApiMethod.SEND_EVENT_NOW:
                switch (tag) {
                    case DataName.SUCCESS:
                        tryCast<OnSendSuccessCallback>(callback)?.();
                        break;
                    case DataName.FAILED:
                        tryCast<OnSendFailedCallback>(callback)?.(DebugUtils.toResponse(data));
                        break;
                    default:
                        break;
                }
                break;
            case AffiseApiMethod.ON_INIT_SUCCESS_HANDLER:
                tryCast<OnInitSuccessHandler>(callback)?.();
                this.removeApiCallback(api);
                break;
            case AffiseApiMethod.ON_INIT_ERROR_HANDLER:
                tryCast<OnInitErrorHandler>(callback)?.(DataMapper.toNonNullString(data));
                this.removeApiCallback(api);
                break;
            case AffiseApiMethod.GET_REFERRER_URL_CALLBACK:
                tryCast<ReferrerCallback>(callback)?.(DataMapper.toNonNullString(data));
                break;
            case AffiseApiMethod.GET_REFERRER_URL_VALUE_CALLBACK:
                tryCast<ReferrerCallback>(callback)?.(DataMapper.toNonNullString(data));
                break;
            case AffiseApiMethod.GET_DEFERRED_DEEPLINK_CALLBACK:
                tryCast<ReferrerCallback>(callback)?.(DataMapper.toNonNullString(data));
                break;
            case AffiseApiMethod.GET_DEFERRED_DEEPLINK_VALUE_CALLBACK:
                tryCast<ReferrerCallback>(callback)?.(DataMapper.toNonNullString(data));
                break;
            case AffiseApiMethod.REGISTER_DEEPLINK_CALLBACK:
                tryCast<OnDeeplinkCallback>(callback)?.(DataMapper.toDeeplinkValue(data));
                break;
            case AffiseApiMethod.SKAD_REGISTER_ERROR_CALLBACK:
                tryCast<ErrorCallback>(callback)?.(DataMapper.toNonNullString(data));
                break;
            case AffiseApiMethod.SKAD_POSTBACK_ERROR_CALLBACK:
                tryCast<ErrorCallback>(callback)?.(DataMapper.toNonNullString(data));
                break;
            case AffiseApiMethod.DEBUG_VALIDATE_CALLBACK:
                tryCast<DebugOnValidateCallback>(callback)?.(DebugUtils.getValidationStatus(data));
                break;
            case AffiseApiMethod.DEBUG_NETWORK_CALLBACK:
                tryCast<DebugOnNetworkCallback>(callback)?.(
                    DebugUtils.toRequestWithKey(data, DataName.REQUEST),
                    DebugUtils.toResponseWithKey(data, DataName.RESPONSE)
                );
                break;
            ////////////////////////////////////////
            // modules
            ////////////////////////////////////////
            case AffiseApiMethod.GET_STATUS_CALLBACK:
                tryCast<OnKeyValueCallback>(callback)?.(DataMapper.toAffiseKeyValueList(data));
                break;
            case AffiseApiMethod.MODULE_LINK_LINK_RESOLVE_CALLBACK:
                tryCast<AffiseLinkCallback>(callback)?.(DataMapper.toNonNullString(data));
                break;
            // Subscription Module
            case AffiseApiMethod.MODULE_SUBS_FETCH_PRODUCTS_CALLBACK:
                tryCast<AffiseResultCallback<AffiseProductsResult>>(callback)
                    ?.(DataMapper.toResultAffiseProductsResult(data));
                break;
            case AffiseApiMethod.MODULE_SUBS_PURCHASE_CALLBACK:
                tryCast<AffiseResultCallback<AffisePurchasedInfo>>(callback)
                    ?.(DataMapper.toResultAffisePurchasedInfo(data));
                break;
            ////////////////////////////////////////
            // modules
            ////////////////////////////////////////
            default:
                break;
        }
    }
}
