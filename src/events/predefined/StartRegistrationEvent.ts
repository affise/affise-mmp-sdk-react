import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class StartRegistrationEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.START_REGISTRATION, userData, timeStampMillis);
    }
}
