import { AffiseNative } from "../../native/AffiseNative";
import { AffiseModuleSubscriptionApi } from "./AffiseModuleSubscriptionApi";
import { AffiseProduct } from "./AffiseProduct";
import { AffiseProductType } from "./AffiseProductType";
import { AffisePurchasedInfo } from "./AffisePurchasedInfo";
import { AffiseProductsResult } from "./AffiseProductsResult";
import { AffiseResultCallback } from "./AffiseResultCallback";

export class AffiseSubscription implements AffiseModuleSubscriptionApi { 
    private native: AffiseNative

    constructor(native: AffiseNative) { 
        this.native = native
    }

    /**
     * Module subscription fetchProducts
     * @param ids list of product ids
     * @param callback result callback
     */
    fetchProducts(ids: string[], callback: AffiseResultCallback<AffiseProductsResult>) {
        this.native.fetchProducts(ids, callback);
    }

    /**
     * Module subscription purchase
     * @param product product
     * @param type product type
     * @param callback result callback
     */
    purchase(product: AffiseProduct, type: AffiseProductType, callback: AffiseResultCallback<AffisePurchasedInfo>) {
        this.native.purchase(product, type, callback);
    }
}