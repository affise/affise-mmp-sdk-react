import { AffiseNative } from "../../native/AffiseNative";
import { AffiseModuleApi } from "./AffiseModuleApi";
import { AffiseModules } from "../AffiseModules";
import { OnKeyValueCallback } from "../OnKeyValueCallback";
import { AffiseProduct } from "../subscription/AffiseProduct";
import { AffiseProductType } from "../subscription/AffiseProductType";
import { AffisePurchasedInfo } from "../subscription/AffisePurchasedInfo";
import { AffiseProductsResult } from "../subscription/AffiseProductsResult";
import { AffiseResultCallback } from "../subscription/AffiseResultCallback";
import { AffiseLink} from "../link/AffiseLink"
import { AffiseModuleLinkApi} from "../link/AffiseModuleLinkApi"
import { AffiseLinkCallback} from "../link/AffiseLinkCallback"
import { AffiseSubscription } from "../subscription/AffiseSubscription";
import { AffiseModuleSubscriptionApi } from "../subscription/AffiseModuleSubscriptionApi";
import { AffiseAppsFlyer } from "../appsflyer/AffiseAppsFlyer";
import { AffiseModuleAppsFlyerApi } from "../appsflyer/AffiseModuleAppsFlyerApi";

export class AffiseModule implements AffiseModuleApi { 
    private native: AffiseNative

    appsFlyer: AffiseModuleAppsFlyerApi
    link: AffiseModuleLinkApi
    subscription: AffiseModuleSubscriptionApi

    constructor(native: AffiseNative) { 
        this.native = native
        this.appsFlyer = new AffiseAppsFlyer(native)
       	this.link = new AffiseLink(native)
        this.subscription = new AffiseSubscription(native)
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
     * Manual module start
     * @param module module name
     */
    moduleStart(module: AffiseModules): Promise<boolean> {
        return this.native.moduleStart(module);
    }

    /**
     * Get installed modules
     */
    getModulesInstalled(): Promise<AffiseModules[]> {
        return this.native.getModulesInstalled();
    }

    /**
     * @deprecated use Affise.module.link.resolve(url, callback)
     * Module Link url Resolve
     * @param url url
     * @param callback redirected url
     */
    linkResolve(url: string, callback: AffiseLinkCallback) {
        this.link.resolve(url, callback);
    }

    /**
     * @deprecated use Affise.module.subscription.fetchProducts(ids, callback)
     * Module subscription fetchProducts
     * @param ids list of product ids
     * @param callback result callback
     */
    fetchProducts(ids: string[], callback: AffiseResultCallback<AffiseProductsResult>) {
        this.subscription.fetchProducts(ids, callback);
    }

    /**
     * @deprecated use Affise.module.subscription.purchase(product, type, callback)
     * Module subscription purchase
     * @param product product
     * @param type product type
     * @param callback result callback
     */
    purchase(product: AffiseProduct, type: AffiseProductType, callback: AffiseResultCallback<AffisePurchasedInfo>) {
        this.subscription.purchase(product, type, callback);
    }
}