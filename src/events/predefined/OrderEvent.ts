import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class OrderEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.ORDER, userData, timeStampMillis);
    }
}
