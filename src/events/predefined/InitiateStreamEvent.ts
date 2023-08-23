import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class InitiateStreamEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.INITIATE_STREAM, userData, timeStampMillis);
    }
}
