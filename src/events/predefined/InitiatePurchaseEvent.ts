import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class InitiatePurchaseEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.INITIATE_PURCHASE, userData, timeStampMillis);
    }
}
