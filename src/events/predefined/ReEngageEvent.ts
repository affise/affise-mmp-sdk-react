import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class ReEngageEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.RE_ENGAGE, userData, timeStampMillis);
    }
}
