import type { ErrorCallback } from "../../callback/ErrorCallback";
import type { CoarseValue } from "../../skad/CoarseValue";

export interface AffiseIosApi { 
        /**
     * SKAd register app
     */
    registerAppForAdNetworkAttribution(completionHandler: ErrorCallback): void;

    /**
     * SKAd updatePostbackConversionValue
     */
    updatePostbackConversionValue(fineValue: bigint, coarseValue: CoarseValue, completionHandler: ErrorCallback): void;
}