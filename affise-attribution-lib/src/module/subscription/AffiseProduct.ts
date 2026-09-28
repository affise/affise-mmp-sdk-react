import type {AffiseProductType} from "./AffiseProductType";
import type {AffiseProductPrice} from "./AffiseProductPrice";
import type {AffiseProductSubscriptionDetail} from "./AffiseProductSubscriptionDetail";

export class AffiseProduct {
    public productId: string;
    public title: string;
    public description: string;

    public productType: AffiseProductType;

    public price?: AffiseProductPrice | null;

    public subscription?: AffiseProductSubscriptionDetail | null;

    // public productDetails?: string | null;

    constructor(
        {
            productId,
            title,
            description,
            productType,
            price,
            subscription,
        }: {
            productId: string,
            title: string,
            description: string,
            productType: AffiseProductType,
            price?: AffiseProductPrice | null,
            subscription?: AffiseProductSubscriptionDetail | null,
        }
    ) {
        this.productId = productId;
        this.title = title;
        this.description = description;
        this.productType = productType;
        this.price = price;
        this.subscription = subscription;
    }

    toString(): string {
        return `AffiseProduct(productId=${this.productId}, title=${this.title}, description=${this.description}, productType=${this.productType}, price=${this.price?.toString()}, subscription=${this.subscription?.toString()})`;
    }
}
