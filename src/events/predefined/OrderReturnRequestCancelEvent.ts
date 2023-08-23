import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class OrderReturnRequestCancelEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.ORDER_RETURN_REQUEST_CANCEL, userData, timeStampMillis);
    }
}
