import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class CompleteRegistrationEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.COMPLETE_REGISTRATION, userData, timeStampMillis);
    }
}
