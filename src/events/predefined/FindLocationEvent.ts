import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class FindLocationEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.FIND_LOCATION, userData, timeStampMillis);
    }
}
