import type { AffiseNative } from "../../native/AffiseNative";
import type { AffiseModuleAppsFlyerApi } from "./AffiseModuleAppsFlyerApi";

export class AffiseAppsFlyer implements AffiseModuleAppsFlyerApi { 
    private native: AffiseNative

    constructor(native: AffiseNative) { 
        this.native = native
    }
    
    /**
     * Send Appflyer event data to affise
     * @param eventName event name
     * @param eventValues event data
     */
    logEvent(eventName: string, eventValues: Record<string, any>) {
        this.native.logEvent(eventName, eventValues);
    }
}