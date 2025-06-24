import type { AffiseHasModule } from "../AffiseHasModule";

export interface AffiseModuleAppsFlyerApi extends AffiseHasModule { 
    /**
     * Send Appflyer event data to affise
     * @param eventName event name
     * @param eventValues event data
     */
    logEvent(eventName: string, eventValues: Record<string, any>): void;
}