import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class OrderReturnRequestEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.ORDER_RETURN_REQUEST, userData, timeStampMillis);
    }
}
