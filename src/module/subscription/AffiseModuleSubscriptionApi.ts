import { AffiseProduct } from "./AffiseProduct";
import { AffiseProductType } from "./AffiseProductType";
import { AffisePurchasedInfo } from "./AffisePurchasedInfo";
import { AffiseProductsResult } from "./AffiseProductsResult";
import { AffiseResultCallback } from "./AffiseResultCallback";

export interface AffiseModuleSubscriptionApi { 
    /**
     * Module subscription fetchProducts
     * @param ids list of product ids
     * @param callback result callback
     */
    fetchProducts(ids: string[], callback: AffiseResultCallback<AffiseProductsResult>): void;

    /**
     * Module subscription purchase
     * @param product product
     * @param type product type
     * @param callback result callback
     */
    purchase(product: AffiseProduct, type: AffiseProductType, callback: AffiseResultCallback<AffisePurchasedInfo>): void;
}