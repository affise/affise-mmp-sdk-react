import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class CompleteStreamEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.COMPLETE_STREAM, userData, timeStampMillis);
    }
}
