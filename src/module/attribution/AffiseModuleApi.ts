import { AffiseModules } from "../AffiseModules";
import type { OnKeyValueCallback } from "../OnKeyValueCallback";
import type { AffiseModuleLinkApi} from "../link/AffiseModuleLinkApi"
import type { AffiseModuleSubscriptionApi } from "../subscription/AffiseModuleSubscriptionApi";
import type { AffiseModuleAppsFlyerApi } from "../appsflyer/AffiseModuleAppsFlyerApi";
import type { AffiseModuleTikTokApi } from "../tiktok/AffiseModuleTikTokApi";
import type { AffiseModuleAdvertisingApi } from "../advertising/AffiseModuleAdvertisingApi";

export interface AffiseModuleApi {

    advertising: AffiseModuleAdvertisingApi;
    appsFlyer: AffiseModuleAppsFlyerApi;
    link: AffiseModuleLinkApi;
    subscription: AffiseModuleSubscriptionApi;
    tikTok: AffiseModuleTikTokApi;

    /**
     * Get module status
     * @param module module name
     * @param callback status response
     */
    getStatus(module: AffiseModules, callback: OnKeyValueCallback): void;

    /**
     * Get installed modules
     */
    getModulesInstalled(): Promise<AffiseModules[]>
}
