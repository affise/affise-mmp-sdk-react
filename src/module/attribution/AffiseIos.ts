import { Platform } from "react-native";
import type { AffiseNative } from "../../native/AffiseNative";
import type { AffiseIosApi } from "./AffiseIosApi";
import type { ErrorCallback } from "../../callback/ErrorCallback";
import type { CoarseValue } from "../../skad/CoarseValue";
import type { ReferrerKey } from "../../referrer/ReferrerKey";
import type { ReferrerCallback } from "../../referrer/ReferrerCallback";

export class AffiseIos implements AffiseIosApi { 

    private native: AffiseNative

    constructor(native: AffiseNative) {
        this.native = native
    }
    
    /**
     * SKAd register app
     */
    registerAppForAdNetworkAttribution(completionHandler: ErrorCallback) {
        if (Platform.OS !== 'ios') return;
        this.native.registerAppForAdNetworkAttribution(completionHandler);
    }

    /**
     * SKAd updatePostbackConversionValue
     */
    updatePostbackConversionValue(fineValue: bigint, coarseValue: CoarseValue, completionHandler: ErrorCallback) {
        if (Platform.OS !== 'ios') return;
        this.native.updatePostbackConversionValue(fineValue, coarseValue, completionHandler);
    }

    /**
     * @deprecated use Affise.getDeferredDeeplink(callback)
     * Get referrer on server
     */
    getReferrerOnServer(callback: ReferrerCallback) {
        this.native.getDeferredDeeplink(callback);
    }

    /**
     * @deprecated use Affise.getDeferredDeeplinkValue(key, callback)
     * Get referrer on server value
     */
    getReferrerOnServerValue(key: ReferrerKey, callback: ReferrerCallback) {
        this.native.getDeferredDeeplinkValue(key, callback);
    }
}