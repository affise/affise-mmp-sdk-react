import type {AffiseProduct} from "./AffiseProduct";

export class AffiseProductsResult {
    public readonly products: AffiseProduct[];
    public readonly invalidIds: string[];

    constructor(
        {
            products,
            invalidIds,
        }: {
            products: AffiseProduct[],
            invalidIds: string[],
        }
    ) {
        this.products = products || [];
        this.invalidIds = invalidIds || [];
    }


    toString(): string {
        return `AffiseProductsResult(products=[${this.products.join(", ")}], invalidIds=[${this.invalidIds.join(", ")}])`;
    }
}
