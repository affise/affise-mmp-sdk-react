import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class PurchaseEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.PURCHASE, userData, timeStampMillis);
    }
}
