import {NativeEvent} from "../base/NativeEvent";

export class InitiatePurchaseEvent extends NativeEvent {

    constructor(purchaseData: Record<string, unknown>, timeStampMillis: number, userData: string) {
        super('InitiatePurchase');

        this.userData = userData;
        this.serialize = {
            affise_event_initiate_purchase: purchaseData,
            affise_event_initiate_purchase_timestamp: timeStampMillis.toString()
        };
    }
}
