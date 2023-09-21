import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class OrderItemRemoveEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.ORDER_ITEM_REMOVE, userData, timeStampMillis);
    }
}
