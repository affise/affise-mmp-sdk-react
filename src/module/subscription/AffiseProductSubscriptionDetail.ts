import type {TimeUnitType} from "./TimeUnitType";

export class AffiseProductSubscriptionDetail {
    public readonly offerToken?: string | null;
    public readonly offerId?: string | null;
    public readonly timeUnit?: TimeUnitType | null;
    public readonly numberOfUnits?: number | null;

    constructor(
        {
            offerToken,
            offerId,
            timeUnit,
            numberOfUnits,
        }: {
            offerToken?: string | null,
            offerId?: string | null,
            timeUnit?: TimeUnitType | null,
            numberOfUnits?: number | null,
        }
    ) {
        this.offerToken = offerToken;
        this.offerId = offerId;
        this.timeUnit = timeUnit;
        this.numberOfUnits = numberOfUnits;
    }

    toString(): string {
        return `AffiseProductSubscriptionDetail(offerToken=${this.offerToken}, offerId=${this.offerId}, timeUnit=${this.timeUnit}, numberOfUnits=${this.numberOfUnits})`;
    }
}
