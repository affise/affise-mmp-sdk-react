import {EmitterSubscription, NativeEventEmitter, NativeModules, Platform} from 'react-native';
import type {AffiseInitProperties, AutoCatchingType, AffiseEvent} from "./Export";

export * from "./Export";


const LINKING_ERROR =
    `The package 'affise-attribution-lib' doesn't seem to be linked. Make sure: \n\n` +
    Platform.select({ios: "- You have run 'pod install'\n", default: ''}) +
    '- You rebuilt the app after installing the package\n' +
    '- You are not using Expo Go\n';

const AffiseNative = NativeModules.AffiseAttributionNative
    ? NativeModules.AffiseAttributionNative
    : new Proxy(
        {},
        {
            get() {
                throw new Error(LINKING_ERROR);
            },
        }
    );

const DEEPLINK_CALLBACK_EVENT = "affiseDeeplinkEvent";
const DEEPLINK_CALLBACK_URI_PARAMETER = "uri";

/**
 * Entry point to initialise Affise Attribution library
 */
export class Affise {
    private static eventListener?: EmitterSubscription;

    /**
     * @param initProperties
     */
    static init(
        initProperties: AffiseInitProperties
    ) {
        AffiseNative.nativeInit(initProperties);
    }

    /**
     * Send events
     */
    static sendEvents() {
        AffiseNative.nativeSendEvents();
    }

    /**
     * Store and send [event]
     */
    static sendEvent(event: AffiseEvent) {
        AffiseNative.nativeSendEvent(event);
    }

    /**
     * Add [pushToken]
     */
    static addPushToken(pushToken: string) {
        AffiseNative.nativeAddPushToken(pushToken);
    }

    /**
     * Register [callback] for deeplink
     */
    static registerDeeplinkCallback(callback: (uri: string) => void) {
        this.unregisterDeeplinkCallback();
        const eventEmitter = new NativeEventEmitter(AffiseNative);
        this.eventListener = eventEmitter.addListener(DEEPLINK_CALLBACK_EVENT, (event) => {
            callback(event[DEEPLINK_CALLBACK_URI_PARAMETER]);
        });

        AffiseNative.nativeRegisterDeeplinkCallback();
    }

    static unregisterDeeplinkCallback() {
        this.eventListener?.remove();
    }

    /**
     * Set new secretId
     */
    static setSecretId(secretId: string) {
        AffiseNative.nativeSetSecretId(secretId);
    }

    /**
     * Send enabled autoCatching types
     */

    static setAutoCatchingTypes(types: AutoCatchingType[]) {
        AffiseNative.nativeSetAutoCatchingTypes(types);
    }

    /**
     * Sets offline mode to [enabled] state
     *
     * When enabled, no network activity should be triggered by this library,
     * but background work is not paused. When offline mode is enabled,
     * all recorded events should be sent
     */
    static setOfflineModeEnabled(enabled: boolean) {
        AffiseNative.nativeSetOfflineModeEnabled(enabled);
    }

    /**
     * Returns current offline mode state
     */
    static isOfflineModeEnabled(): Promise<boolean> {
        return AffiseNative.nativeIsOfflineModeEnabled();
    }

    /**
     * Sets background tracking mode to [enabled] state
     *
     * When disabled, library should not generate any tracking events while in background
     */
    static setBackgroundTrackingEnabled(enabled: boolean) {
        AffiseNative.nativeSetBackgroundTrackingEnabled(enabled);
    }

    /**
     * Returns current background tracking state
     */
    static isBackgroundTrackingEnabled(): Promise<boolean> {
        return AffiseNative.nativeIsBackgroundTrackingEnabled();
    }

    /**
     * Sets offline mode to [enabled] state
     *
     * When disabled, library should not generate any tracking events
     */
    static setTrackingEnabled(enabled: boolean) {
        AffiseNative.nativeSetTrackingEnabled(enabled);
    }

    /**
     * Returns current tracking state
     */
    static isTrackingEnabled(): Promise<boolean> {
        return AffiseNative.nativeIsTrackingEnabled();
    }

    /**
     * Erases all user data from mobile and sends [GDPREvent]
     */
    static forget(userData: string) {
        AffiseNative.nativeForget(userData);
    }

    /**
     * Set [enabled] collect metrics
     *
     * When disabled, library should not generate any metrics events,
     * but will send the saved metrics events
     */
    static setEnabledMetrics(enabled: boolean) {
        AffiseNative.nativeSetEnabledMetrics(enabled);
    }

    static crashApplication() {
        AffiseNative.nativeCrashApplication();
    }

    /**
     * Get referrer
     */
    static getReferrer(): Promise<string> {
        return AffiseNative.nativeGetReferrer();
    }
}
