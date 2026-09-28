import type {
    AffiseEvent,
    ReferrerKey,
    ReferrerCallback,
    OnDeeplinkCallback,
    OnSendSuccessCallback,
    OnSendFailedCallback,
    PushTokenService,
} from "./Export";
import { AffiseNative } from "./native/AffiseNative";
import { AffiseSettings } from "./settings/AffiseSettings";
import type { AffiseSettingsApi } from "./Export";
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
     * Add [pushToken] from [service]
     */
    static addPushToken(pushToken: string, service: PushTokenService) {
        this.native.addPushToken(pushToken, service);
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
