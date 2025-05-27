import type { AffiseNative } from "../../native/AffiseNative";
import type { AffiseLinkCallback } from "./AffiseLinkCallback";
import type { AffiseModuleLinkApi } from "./AffiseModuleLinkApi";

export class AffiseLink implements AffiseModuleLinkApi {
    private native: AffiseNative

    constructor(native: AffiseNative) { 
        this.native = native
    }
    
    /**
     * Module Link url Resolve
     * @param url url
     * @param callback redirected url
     */
    resolve(url: string, callback: AffiseLinkCallback): void {
        this.native.linkResolve(url, callback);
    }
 }