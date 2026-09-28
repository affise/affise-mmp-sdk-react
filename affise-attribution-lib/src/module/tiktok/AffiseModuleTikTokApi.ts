import type { AffiseHasModule } from "../AffiseHasModule";

export interface AffiseModuleTikTokApi extends AffiseHasModule { 
    /**
     * Send TikTok event data to affise
     * @param eventName event name
     * @param properties event data
     * @param eventId event id
     */
    sendEvent(eventName: string, properties: Record<string, any>, eventId: string): void;
}