export class AffiseProductPrice {
    public readonly value: number;
    public readonly currencyCode: string;
    public readonly formattedPrice: string;

    constructor(
        {
            value,
            currencyCode,
            formattedPrice,
        }: {
            value: number,
            currencyCode: string,
            formattedPrice: string,
        }
    ) {
        this.value = value;
        this.currencyCode = currencyCode;
        this.formattedPrice = formattedPrice;
    }

    toString(): string {
        return `AffiseProductPrice(value=${this.value}, currencyCode=${this.currencyCode}, formattedPrice=${this.formattedPrice})`;
    }
}
