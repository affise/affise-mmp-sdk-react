import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class ShareEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.SHARE, userData, timeStampMillis);
    }
}
