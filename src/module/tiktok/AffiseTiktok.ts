import type { AffiseNative } from "../../native/AffiseNative";
import { isModuleInit } from "../AffiseHasModule";
import { AffiseModules } from "../AffiseModules";
import type { AffiseModuleTikTokApi } from "./AffiseModuleTikTokApi";

export class AffiseTikTok implements AffiseModuleTikTokApi { 
    private native: AffiseNative

    constructor(native: AffiseNative) { 
        this.native = native
    }
    
    /**
     * Send TikTok event data to affise
     * @param eventName event name
     * @param properties event data
     * @param eventId event id
     */
    sendEvent(eventName: string, properties: Record<string, any>, eventId: string) {
        this.native.tikTokSendEvent(eventName, properties, eventId)
    }

    hasModule(): Promise<boolean> {
        return isModuleInit(this.native, AffiseModules.TIKTOK)
    }
}