import type {
    AffiseEvent,
    AffiseInitPropertiesType,
    AffiseInitProperties,
    AutoCatchingType,
    ReferrerKey,
    CoarseValue,
    AffiseModules,
    ReferrerCallback,
    OnKeyValueCallback,
    ErrorCallback,
    OnDeeplinkCallback,
    DebugOnValidateCallback,
    DebugOnNetworkCallback
} from "./Export";
import {AffiseNative} from "./native/AffiseNative";
import {Platform} from "react-native";
import {AffiseSettings} from "./Export";

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
    static settings({affiseAppId, secretKey}: { affiseAppId: string, secretKey: string }): AffiseSettings {
        return new AffiseSettings(affiseAppId, secretKey);
    }

    /**
     * Use Affise.settings({affiseAppId, secretKey}).start()
     * @param initProperties
     */
    static start(
        initProperties: AffiseInitProperties | AffiseInitPropertiesType
    ) {
        this.native.init(initProperties);
    }

    static isInitialized(): Promise<boolean> {
        return this.native.isInitialized();
    }

    /**
     * Send events
     */
    static sendEvents() {
        this.native.sendEvents();
    }

    /**
     * Store and send [event]
     */
    static sendEvent(event: AffiseEvent) {
        this.native.sendEvent(event);
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
    static setAutoCatchingTypes(types: AutoCatchingType[]) {
        this.native.setAutoCatchingTypes(types);
    }

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
     * Get module status
     * @param module module name
     * @param callback status response
     */
    static getStatus(module: AffiseModules, callback: OnKeyValueCallback) {
        this.native.getStatus(module, callback);
    }

    /**
     * Manual module start
     * @param module module name
     */
    static moduleStart(module: AffiseModules) {
        this.native.moduleStart(module);
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
     * Get referrer
     */
    static getReferrer(callback: ReferrerCallback) {
        this.native.getReferrer(callback);
    }

    /**
     * Get referrer Value
     */
    static getReferrerValue(key: ReferrerKey, callback: ReferrerCallback) {
        this.native.getReferrerValue(key, callback);
    }

    /**
     * Set [enabled] collect metrics
     *
     * When disabled, library should not generate any metrics events,
     * but will send the saved metrics events
     */
    static setEnabledMetrics(enabled: boolean) {
        this.native.setEnabledMetrics(enabled);
    }

    static android = class {
        /**
         * Erases all user data from mobile and sends [GDPREvent]
         */
        static forget(userData: string) {
            Affise.native.forget(userData);
        }

        static crashApplication() {
            Affise.native.crashApplication();
        }
    };

    static ios = class {
        /**
         * SKAd register app
         */
        static registerAppForAdNetworkAttribution(completionHandler: ErrorCallback) {
            if (Platform.OS !== 'ios') return;
            Affise.native.registerAppForAdNetworkAttribution(completionHandler);
        }

        /**
         * SKAd updatePostbackConversionValue
         */
        static updatePostbackConversionValue(fineValue: bigint, coarseValue: CoarseValue, completionHandler: ErrorCallback) {
            if (Platform.OS !== 'ios') return;
            Affise.native.updatePostbackConversionValue(fineValue, coarseValue, completionHandler);
        }
    };

    static debug = class {
        /**
         * Won't work on Production
         *
         * Validate credentials
         */
        static validate(callback: DebugOnValidateCallback) {
            Affise.native.validate(callback);
        }

        /**
         * Won't work on Production
         *
         * Show request/response data
         */
        static network(callback: DebugOnNetworkCallback) {
            Affise.native.network(callback);
        }
    };
}
