import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class ViewCartEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.VIEW_CART, userData, timeStampMillis);
    }
}
