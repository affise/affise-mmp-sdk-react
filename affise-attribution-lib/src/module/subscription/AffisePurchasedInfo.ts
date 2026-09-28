import type {AffiseProduct} from "./AffiseProduct";

export class AffisePurchasedInfo {
    public readonly product?: AffiseProduct | null;
    public readonly orderId?: string | null;
    public readonly originalOrderId?: string | null;
    public readonly purchase?: string | null;

    constructor(
        {
            product,
            orderId,
            originalOrderId,
            purchase,
        }: {
            product?: AffiseProduct | null,
            orderId?: string | null,
            originalOrderId?: string | null,
            purchase?: string | null,
        }
    ) {
        this.product = product;
        this.orderId = orderId;
        this.originalOrderId = originalOrderId;
        this.purchase = purchase;
    }

    toString(): string {
        return `AffisePurchasedInfo(product=${this.product}, orderId=${this.orderId}, originalOrderId=${this.originalOrderId}, purchase=${this.purchase})`;
    }
}
