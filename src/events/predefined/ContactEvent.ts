import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class ContactEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.CONTACT, userData, timeStampMillis);
    }
}
