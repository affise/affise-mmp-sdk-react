import type { AffiseNative } from "../../native/AffiseNative";
import type { AffiseModuleApi } from "./AffiseModuleApi";
import type { AffiseModules } from "../AffiseModules";
import type { OnKeyValueCallback } from "../OnKeyValueCallback";
import { AffiseLink} from "../link/AffiseLink"
import type { AffiseModuleLinkApi} from "../link/AffiseModuleLinkApi"
import { AffiseSubscription } from "../subscription/AffiseSubscription";
import { AffiseModuleSubscriptionApi } from "../subscription/AffiseModuleSubscriptionApi";
import { AffiseAppsFlyer } from "../appsflyer/AffiseAppsFlyer";
import type { AffiseModuleAppsFlyerApi } from "../appsflyer/AffiseModuleAppsFlyerApi";
import { AffiseTikTok } from "../tiktok/AffiseTiktok";
import type { AffiseModuleTikTokApi } from "../tiktok/AffiseModuleTikTokApi";
import { AffiseAdvertising } from "../advertising/AffiseAdvertising";
import type { AffiseModuleAdvertisingApi } from "../advertising/AffiseModuleAdvertisingApi";

export class AffiseModule implements AffiseModuleApi {
    private native: AffiseNative

    advertising: AffiseModuleAdvertisingApi
    appsFlyer: AffiseModuleAppsFlyerApi
    link: AffiseModuleLinkApi
    subscription: AffiseModuleSubscriptionApi
    tikTok: AffiseModuleTikTokApi

    constructor(native: AffiseNative) {
        this.native = native
        this.advertising = new AffiseAdvertising(native)
        this.appsFlyer = new AffiseAppsFlyer(native)
       	this.link = new AffiseLink(native)
        this.subscription = new AffiseSubscription(native)
        this.tikTok = new AffiseTikTok(native)
    }

    /**
     * Get module status
     * @param module module name
     * @param callback status response
     */
    getStatus(module: AffiseModules, callback: OnKeyValueCallback) {
        this.native.getStatus(module, callback);
    }

    /**
     * Get installed modules
     */
    getModulesInstalled(): Promise<AffiseModules[]> {
        return this.native.getModulesInstalled();
    }
}
