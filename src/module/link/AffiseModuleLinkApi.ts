import { AffiseLinkCallback } from "./AffiseLinkCallback";

export interface AffiseModuleLinkApi {
    /**
     * Module Link url Resolve
     * @param url url
     * @param callback redirected url
     */
    resolve(url: string, callback: AffiseLinkCallback): void;
}