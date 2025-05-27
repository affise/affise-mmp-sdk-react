import type { ErrorCallback } from "../../callback/ErrorCallback";
import type { CoarseValue } from "../../skad/CoarseValue";
import type { ReferrerKey } from "../../referrer/ReferrerKey";
import type { ReferrerCallback } from "../../referrer/ReferrerCallback";

export interface AffiseIosApi { 
        /**
     * SKAd register app
     */
    registerAppForAdNetworkAttribution(completionHandler: ErrorCallback): void;

    /**
     * SKAd updatePostbackConversionValue
     */
    updatePostbackConversionValue(fineValue: bigint, coarseValue: CoarseValue, completionHandler: ErrorCallback): void;

    /**
     * @deprecated use Affise.getDeferredDeeplink(callback)
     * Get referrer on server
     */
    getReferrerOnServer(callback: ReferrerCallback): void;

    /**
     * @deprecated use Affise.getDeferredDeeplinkValue(key, callback)
     * Get referrer on server value
     */
    getReferrerOnServerValue(key: ReferrerKey, callback: ReferrerCallback): void;
}