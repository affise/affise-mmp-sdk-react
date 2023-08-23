import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class OrderCancelEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.ORDER_CANCEL, userData, timeStampMillis);
    }
}
