import {NativeEvent} from "../base/NativeEvent";

export class PurchaseEvent extends NativeEvent {

    constructor(purchaseData: Record<string, unknown>, timeStampMillis: number, userData: string) {
        super('Purchase');

        this.userData = userData;
        this.serialize = {
            affise_event_purchase: purchaseData,
            affise_event_purchase_timestamp: timeStampMillis.toString()
        };
    }
}
