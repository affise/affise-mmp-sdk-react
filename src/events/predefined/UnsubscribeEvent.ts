import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class UnsubscribeEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.UNSUBSCRIBE, userData, timeStampMillis);
    }
}
