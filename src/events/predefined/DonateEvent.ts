import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class DonateEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.DONATE, userData, timeStampMillis);
    }
}
