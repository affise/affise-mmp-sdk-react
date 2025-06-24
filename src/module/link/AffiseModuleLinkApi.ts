import type { AffiseLinkCallback } from "./AffiseLinkCallback";
import type { AffiseHasModule } from "../AffiseHasModule";

export interface AffiseModuleLinkApi extends AffiseHasModule {
    /**
     * Module Link url Resolve
     * @param url url
     * @param callback redirected url
     */
    resolve(url: string, callback: AffiseLinkCallback): void;
}