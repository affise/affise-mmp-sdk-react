import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class SearchEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.SEARCH, userData, timeStampMillis);
    }
}
