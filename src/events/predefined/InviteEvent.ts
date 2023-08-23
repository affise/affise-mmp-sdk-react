import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class InviteEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.INVITE, userData, timeStampMillis);
    }
}
