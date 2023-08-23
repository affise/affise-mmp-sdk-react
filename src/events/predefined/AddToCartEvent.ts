import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class AddToCartEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.ADD_TO_CART, userData, timeStampMillis);
    }
}
