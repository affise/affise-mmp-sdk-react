import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class RateEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.RATE, userData, timeStampMillis);
    }
}
