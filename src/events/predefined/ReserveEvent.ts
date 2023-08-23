import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class ReserveEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.RESERVE, userData, timeStampMillis);
    }
}
