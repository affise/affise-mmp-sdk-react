import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class UpdateEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.UPDATE, userData, timeStampMillis);
    }
}
