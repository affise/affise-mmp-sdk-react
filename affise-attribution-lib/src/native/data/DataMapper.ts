import {AffiseKeyValue} from "../../module/AffiseKeyValue";
import {tryCast} from "../../utils/TryCast";
import {DeeplinkValue} from "../../deeplink/DeeplinkValue";
import {AffiseProduct} from "../../module/subscription/AffiseProduct";
import {DataName} from "./DataName";
import {AffiseProductPrice} from "../../module/subscription/AffiseProductPrice";
import {AffiseProductSubscriptionDetail} from "../../module/subscription/AffiseProductSubscriptionDetail";
import {AffisePurchasedInfo} from "../../module/subscription/AffisePurchasedInfo";
import {AffiseResult} from "../../module/AffiseResult";
import {AffiseProductsResult} from "../../module/subscription/AffiseProductsResult";
import {AffiseProductType, affiseProductTypeFrom} from "../../module/subscription/AffiseProductType";
import {timeUnitTypeFrom} from "../../module/subscription/TimeUnitType";

type Transform<T> = (from: any) => T;

export class DataMapper {
    static toNonNullString(from: any): string {
        return from as string || "";
    }

    static toAffiseKeyValueList(from: any): AffiseKeyValue[] {
        const data = tryCast<Array<any>>(from) || [];
        const result: AffiseKeyValue[] = [];
        for (const item of data) {
            const cast: Record<string, string> = item as Record<string, string>;
            const key = cast["key"];
            const value = cast["value"];

            if (!(key && value)) continue;

            result.push(new AffiseKeyValue(key, value));
        }

        return result;
    }

    static toDeeplinkValue(from: any): DeeplinkValue {
        const data = tryCast<Record<string, any>>(from) || {};
        const parameters = tryCast<Record<string, string[]>>(data[DataName.PARAMETERS]) || {};
        return new DeeplinkValue(
            data[DataName.DEEPLINK],
            data[DataName.SCHEME],
            data[DataName.HOST],
            data[DataName.PATH],
            parameters
        );
    }

    static fromProduct(product: AffiseProduct): Record<string, any> {
        return {
            [DataName.PRODUCT_ID]: product.productId,
            [DataName.TITLE]: product.title,
            [DataName.DESCRIPTION]: product.description,
            [DataName.PRODUCT_TYPE]: product.productType,
            [DataName.PRICE]: this.fromPrice(product.price),
            [DataName.SUBSCRIPTION]: this.fromSubscription(product.subscription),
        };
    }

    static fromPrice(price: AffiseProductPrice | null | undefined): Record<string, any> | null {
        if (price == null) return null;

        return {
            [DataName.VALUE]: price.value,
            [DataName.CURRENCY_CODE]: price.currencyCode,
            [DataName.FORMATTED_PRICE]: price.formattedPrice,
        };
    }

    static fromSubscription(subscription: AffiseProductSubscriptionDetail | null | undefined): Record<string, any> | null {
        if (subscription == null) return null;

        return {
            [DataName.OFFER_TOKEN]: subscription.offerToken,
            [DataName.OFFER_ID]: subscription.offerId,
            [DataName.TIME_UNIT]: subscription.timeUnit,
            [DataName.NUMBER_OF_UNITS]: subscription.numberOfUnits,
        };
    }

    static toResultAffiseProductsResult(from: any): AffiseResult<AffiseProductsResult> {
        return this.toResult(from, this.toAffiseProductsResult);
    }

    static toResultAffisePurchasedInfo(from: any): AffiseResult<AffisePurchasedInfo> {
        return this.toResult(from, this.toAffisePurchasedInfo);
    }

    private static toResult<T>(from: any, transformer: Transform<T | null>): AffiseResult<T> {
        const json = tryCast<Record<string, any>>(from) || {};

        const error = json[DataName.ERROR];
        const success = json[DataName.SUCCESS];

        if (error != null) {
            return AffiseResult.Failure(error);
        }

        const data = transformer(success);
        if (data == null) {
            return AffiseResult.Failure(`serialization error. Data: ${from}`);
        }

        return AffiseResult.Success(data);
    }

    static toAffiseProductsResult(from: any): AffiseProductsResult | null {
        const data = tryCast<Record<string, any>>(from);
        if (data == null) return null;

        const invalidIds = tryCast<string[]>(data[DataName.INVALID_IDS]) || [];

        return new AffiseProductsResult({
            products: DataMapper.toProductsList(data[DataName.PRODUCTS]),
            invalidIds: invalidIds,
        });
    }

    static toAffisePurchasedInfo(from: any): AffisePurchasedInfo | null {
        const data = tryCast<Record<string, any>>(from);
        if (data == null) return null;

        return new AffisePurchasedInfo({
            product: DataMapper.toProduct(data[DataName.PRODUCT]),
            orderId: data[DataName.ORDER_ID],
            originalOrderId: data[DataName.ORIGINAL_ORDER_ID],
            purchase: data[DataName.PURCHASE],
        });
    }


    private static toProductsList(from: any): AffiseProduct[] {
        const result: AffiseProduct[] = [];

        const array = tryCast<Array<string>>(from) || [];
        for (const obj of array) {
            const product = this.toProduct(obj);
            if (product != null) {
                result.push(product);
            }
        }

        return result;
    }

    static toProduct(from: any): AffiseProduct | null {
        const data = tryCast<Record<string, any>>(from);
        if (data == null) return null;

        const productType = affiseProductTypeFrom(data[DataName.PRODUCT_TYPE]);

        const productId = data[DataName.PRODUCT_ID];
        const title = data[DataName.TITLE];
        const description = data[DataName.DESCRIPTION];

        if (productId == null) {
            return null;
        }

        return new AffiseProduct({
            productId: productId,
            title: title,
            description: description,
            productType: productType || AffiseProductType.CONSUMABLE,
            price: this.toPrice(data[DataName.PRICE]),
            subscription: this.toSubscriptionDetail(data[DataName.SUBSCRIPTION]),
            // productDetails: data[DataName.PRODUCT_DETAILS],
        });
    }

    static toPrice(from: any): AffiseProductPrice | null {
        const data = tryCast<Record<string, any>>(from);
        if (data == null) return null;

        return new AffiseProductPrice({
            value: Number(data[DataName.VALUE]) || 0.0,
            currencyCode: data[DataName.CURRENCY_CODE] || "",
            formattedPrice: data[DataName.FORMATTED_PRICE] || ""
        });
    }

    static toSubscriptionDetail(from: any): AffiseProductSubscriptionDetail | null {
        const data = tryCast<Record<string, any>>(from);
        if (data == null) return null;

        return new AffiseProductSubscriptionDetail({
            offerToken: data[DataName.OFFER_TOKEN],
            offerId: data[DataName.OFFER_ID],
            timeUnit: timeUnitTypeFrom(data[DataName.TIME_UNIT]),
            numberOfUnits: Number(data[DataName.NUMBER_OF_UNITS]) || null,
        });
    }
}
