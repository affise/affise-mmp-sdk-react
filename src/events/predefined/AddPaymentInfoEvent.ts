import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class AddPaymentInfoEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.ADD_PAYMENT_INFO, userData, timeStampMillis);
    }
}
