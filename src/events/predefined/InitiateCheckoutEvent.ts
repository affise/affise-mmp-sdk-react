import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class InitiateCheckoutEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.INITIATE_CHECKOUT, userData, timeStampMillis);
    }
}
