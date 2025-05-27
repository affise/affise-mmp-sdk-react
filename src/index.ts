import type {
    AffiseEvent,
    AffiseInitPropertiesType,
    AffiseInitProperties,
    // AutoCatchingType,
    ReferrerKey,
    AffiseModules,
    ReferrerCallback,
    OnKeyValueCallback,
    OnDeeplinkCallback,
    OnSendSuccessCallback,
    OnSendFailedCallback,
} from "./Export";
import { AffiseNative } from "./native/AffiseNative";
import { AffiseSettings } from "./settings/AffiseSettings";
import { AffiseSettingsApi } from "./Export";
import {
    AffiseDebug,
    AffiseDebugApi,
} from "./debug/internal";
import {
    AffiseModuleApi,
    AffiseModule,
    AffiseIos,
    AffiseIosApi,
    AffiseAndroid,
    AffiseAndroidApi
} from "./module/internal";

export * from "./Export";

/**
 * Entry point to initialise Affise Attribution library
 */
export class Affise {

    private static native = new AffiseNative();

    /**
     * Affise SDK settings builder.
     * To start SDK call .start()
     *
     * @param affiseAppId - your app id
     * @param secretKey - your SDK secretKey
     */
    static settings({affiseAppId, secretKey}: { affiseAppId: string, secretKey: string }): AffiseSettingsApi {
        return new AffiseSettings(this.native, affiseAppId, secretKey);
    }

    /**
     * @deprecated Use Affise.settings({affiseAppId, secretKey}).start()
     * @param initProperties
     */
    static start(
        initProperties: AffiseInitProperties | AffiseInitPropertiesType
    ) {
        this.native.init(initProperties);
    }

    /**
     * @deprecated use `Affise.settings.setOnInitSuccess` instead
     * @returns 
     */
    static isInitialized(): Promise<boolean> {
        return this.native.isInitialized();
    }

    /**
     * Store and send [event]
     */
    static sendEvent(event: AffiseEvent) {
        this.native.sendEvent(event);
    }

    /**
     * Send [event] now
     */
    static sendEventNow(event: AffiseEvent, success: OnSendSuccessCallback, failed: OnSendFailedCallback) {
        this.native.sendEventNow(event, success, failed);
    }

    /**
     * Add [pushToken]
     */
    static addPushToken(pushToken: string) {
        this.native.addPushToken(pushToken);
    }

    /**
     * Register [callback] for deeplink
     */
    static registerDeeplinkCallback(callback: OnDeeplinkCallback) {
        this.native.registerDeeplinkCallback(callback);
    }

    /**
     * Set new secretKey
     */
    static setSecretKey(secretKey: string) {
        this.native.setSecretKey(secretKey);
    }

    /**
     * Send enabled autoCatching types
     */
    // static setAutoCatchingTypes(types: AutoCatchingType[]) {
    //     this.native.setAutoCatchingTypes(types);
    // }

    /**
     * Sets offline mode to [enabled] state
     *
     * When enabled, no network activity should be triggered by this library,
     * but background work is not paused. When offline mode is enabled,
     * all recorded events should be sent
     */
    static setOfflineModeEnabled(enabled: boolean) {
        this.native.setOfflineModeEnabled(enabled);
    }

    /**
     * Returns current offline mode state
     */
    static isOfflineModeEnabled(): Promise<boolean> {
        return this.native.isOfflineModeEnabled();
    }

    /**
     * Sets background tracking mode to [enabled] state
     *
     * When disabled, library should not generate any tracking events while in background
     */
    static setBackgroundTrackingEnabled(enabled: boolean) {
        this.native.setBackgroundTrackingEnabled(enabled);
    }

    /**
     * Returns current background tracking state
     */
    static isBackgroundTrackingEnabled(): Promise<boolean> {
        return this.native.isBackgroundTrackingEnabled();
    }

    /**
     * Sets offline mode to [enabled] state
     *
     * When disabled, library should not generate any tracking events
     */
    static setTrackingEnabled(enabled: boolean) {
        this.native.setTrackingEnabled(enabled);
    }

    /**
     * Returns current tracking state
     */
    static isTrackingEnabled(): Promise<boolean> {
        return this.native.isTrackingEnabled();
    }

    /**
     * @deprecated use Affise.module.getStatus
     * Get module status
     * @param module module name
     * @param callback status response
     */
    static getStatus(module: AffiseModules, callback: OnKeyValueCallback) {
        this.module.getStatus(module, callback);
    }

    /**
     * @deprecated use Affise.module.moduleStart
     * Manual module start
     * @param module module name
     */
    static moduleStart(module: AffiseModules): Promise<boolean> {
        return this.module.moduleStart(module);
    }

    /**
     * @deprecated use Affise.module.getModulesInstalled
     * Get installed modules
     */
    static getModulesInstalled(): Promise<AffiseModules[]> {
        return this.module.getModulesInstalled();
    }

    /**
     * getRandomUserId
     */
    static getRandomUserId(): Promise<string> {
        return this.native.getRandomUserId();
    }

    /**
     * Get random Device Id
     */
    static getRandomDeviceId(): Promise<string> {
        return this.native.getRandomDeviceId();
    }

    /**
     * Get providers map
     */
    static getProviders(): Promise<Record<string, any>> {
        return this.native.getProviders();
    }

    /**
     * Is it first run
     */
    static isFirstRun(): Promise<boolean> {
        return this.native.isFirstRun();
    }

    /**
     * @deprecated use Affise.getReferrerUrl(callback)
     * Get referrer
     */
    static getReferrer(callback: ReferrerCallback) {
        this.getReferrerUrl(callback);
    }

    /**
     * @deprecated use Affise.getReferrerUrlValue(key, callback)
     * Get referrer Value
     */
    static getReferrerValue(key: ReferrerKey, callback: ReferrerCallback) {
        this.getReferrerUrlValue(key, callback);
    }

    /**
     * Get referrer
     */
    static getReferrerUrl(callback: ReferrerCallback) {
        this.native.getReferrerUrl(callback);
    }

    /**
     * Get referrer Value
     */
    static getReferrerUrlValue(key: ReferrerKey, callback: ReferrerCallback) {
        this.native.getReferrerUrlValue(key, callback);
    }

    /**
     * @deprecated use Affise.getDeferredDeeplink(callback)
     * Get referrer on server
     */
    static getReferrerOnServer(callback: ReferrerCallback) {
        this.getDeferredDeeplink(callback);
    }

    /**
     * @deprecated use Affise.getDeferredDeeplinkValue(key, callback)
     * Get referrer on server value
     */
    static getReferrerOnServerValue(key: ReferrerKey, callback: ReferrerCallback) {
        this.getDeferredDeeplinkValue(key, callback);
    }

    /**
     * Get deferred deeplink on server 
     */
    static getDeferredDeeplink(callback: ReferrerCallback) {
        this.native.getDeferredDeeplink(callback);
    }

    /**
     * Get deferred deeplink value on server 
     */
    static getDeferredDeeplinkValue(key: ReferrerKey, callback: ReferrerCallback) {
        this.native.getDeferredDeeplinkValue(key, callback);
    }

    /**
     * Set [enabled] collect metrics
     *
     * When disabled, library should not generate any metrics events,
     * but will send the saved metrics events
     */
    // static setEnabledMetrics(enabled: boolean) {
    //     this.native.setEnabledMetrics(enabled);
    // }

    static android: AffiseAndroidApi = new AffiseAndroid(this.native);
    static ios: AffiseIosApi = new AffiseIos(this.native);

    static module: AffiseModuleApi = new AffiseModule(this.native);

    static debug: AffiseDebugApi = new AffiseDebug(this.native);
}
