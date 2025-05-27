import { AffiseModules } from "../AffiseModules";
import { OnKeyValueCallback } from "../OnKeyValueCallback";
import { AffiseModuleLinkApi} from "../link/AffiseModuleLinkApi"
import { AffiseLinkCallback} from "../link/AffiseLinkCallback"
import { AffiseProduct } from "../subscription/AffiseProduct";
import { AffiseModuleSubscriptionApi } from "../subscription/AffiseModuleSubscriptionApi";
import { AffiseProductType } from "../subscription/AffiseProductType";
import { AffisePurchasedInfo } from "../subscription/AffisePurchasedInfo";
import { AffiseProductsResult } from "../subscription/AffiseProductsResult";
import { AffiseResultCallback } from "../subscription/AffiseResultCallback";
import { AffiseModuleAppsFlyerApi } from "../appsflyer/AffiseModuleAppsFlyerApi";

export interface AffiseModuleApi { 

    appsFlyer: AffiseModuleAppsFlyerApi;
    link: AffiseModuleLinkApi;
    subscription: AffiseModuleSubscriptionApi;

    /**
     * Get module status
     * @param module module name
     * @param callback status response
     */
    getStatus(module: AffiseModules, callback: OnKeyValueCallback): void;

    /**
     * Manual module start
     * @param module module name
     */
    moduleStart(module: AffiseModules): Promise<boolean>

    /**
     * Get installed modules
     */
    getModulesInstalled(): Promise<AffiseModules[]>

    /**
     * @deprecated use Affise.module.link.resolve(url, callback)
     * Module Link url Resolve
     * @param url url
     * @param callback redirected url
     */
    linkResolve(url: string, callback: AffiseLinkCallback): void;

    /**
     * @deprecated use Affise.module.subscription.fetchProducts(ids, callback)
     * Module subscription fetchProducts
     * @param ids list of product ids
     * @param callback result callback
     */
    fetchProducts(ids: string[], callback: AffiseResultCallback<AffiseProductsResult>): void;

    /**
     * @deprecated use Affise.module.subscription.purchase(product, type, callback)
     * Module subscription purchase
     * @param product product
     * @param type product type
     * @param callback result callback
     */
    purchase(product: AffiseProduct, type: AffiseProductType, callback: AffiseResultCallback<AffisePurchasedInfo>): void;
}