import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class LoginEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.LOGIN, userData, timeStampMillis);
    }
}
