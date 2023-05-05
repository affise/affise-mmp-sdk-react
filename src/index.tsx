import {EmitterSubscription, Linking, NativeEventEmitter, NativeModules, Platform} from 'react-native';
import type {AffiseInitProperties, AutoCatchingType, AffiseEvent, ReferrerKey} from "./Export";

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

const GET_REFERRER_VALUE_CALLBACK_EVENT = "getReferrerValueEvent";
const GET_REFERRER_VALUE_PARAMETER = "getReferrerValueParameter";
const DEEPLINK_CALLBACK_EVENT = "affiseDeeplinkEvent";
const DEEPLINK_CALLBACK_URI_PARAMETER = "uri";

const FLUTTER_SKAD_REGISTER_ERROR = "skadRegisterError";
const FLUTTER_SKAD_POSTBACK_ERROR = "skadPostbackError";
const FLUTTER_SKAD_ERROR_PARAMETER  = "error";

/**
 * Entry point to initialise Affise Attribution library
 */
export class Affise {

    private static deeplinkEmitter?: EmitterSubscription;
    private static referrerEmitter?: EmitterSubscription;
    private static skadEmitter?: EmitterSubscription;
    private static skadPostbackEmitter?: EmitterSubscription;

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
        this.deeplinkEmitter?.remove();
        const eventEmitter = new NativeEventEmitter(AffiseNative);
        this.deeplinkEmitter = eventEmitter.addListener(DEEPLINK_CALLBACK_EVENT, (event) => {
            callback(event[DEEPLINK_CALLBACK_URI_PARAMETER]);
        });

        AffiseNative.nativeRegisterDeeplinkCallback();
        this.reactHandleDeeplink();
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

    private static reactHandleDeeplink() {
        Linking.getInitialURL().then(this.deeplinkCallback);
        Linking.addEventListener('url', (evt) => this.deeplinkCallback(evt.url))
    }

    private static deeplinkCallback(url: string | null) {
        if (url != null && url.trim().length > 0) {
            AffiseNative.nativeHandleDeeplink(url);
        }
    }

    static android = class {

        /**
         * Get referrer Value
         */
        static getReferrerValue(key: ReferrerKey, callback: (value: string) => void) {
            if (Platform.OS !== 'android') return;

            Affise.referrerEmitter?.remove()
            const eventEmitter = new NativeEventEmitter(AffiseNative);
            Affise.referrerEmitter = eventEmitter.addListener(GET_REFERRER_VALUE_CALLBACK_EVENT, (event) => {
                callback(event[GET_REFERRER_VALUE_PARAMETER]);
            });
            AffiseNative.nativeGetReferrerValue(key);
        }
    }

    static ios = class {
        /**
         * SKAd register app
         */
        static registerAppForAdNetworkAttribution(completionHandler: (error: string) => void) {
            if (Platform.OS !== 'ios') return;

            Affise.skadEmitter?.remove();
            const eventEmitter = new NativeEventEmitter(AffiseNative);
            Affise.skadEmitter = eventEmitter.addListener(FLUTTER_SKAD_REGISTER_ERROR, (event) => {
                completionHandler(event[FLUTTER_SKAD_ERROR_PARAMETER]);
            });
            AffiseNative.nativeSkadRegister();
        }

        /**
         * SKAd updatePostbackConversionValue
         */
        static updatePostbackConversionValue(fineValue: number, coarseValue: string, completionHandler: (error: string) => void) {
            if (Platform.OS !== 'ios') return;

            Affise.skadPostbackEmitter?.remove();
            const eventEmitter = new NativeEventEmitter(AffiseNative);
            Affise.skadPostbackEmitter = eventEmitter.addListener(FLUTTER_SKAD_POSTBACK_ERROR, (event) => {
                completionHandler(event[FLUTTER_SKAD_ERROR_PARAMETER]);
            });
            AffiseNative.nativeSkadPostback(fineValue, coarseValue);
        }
    }
}
