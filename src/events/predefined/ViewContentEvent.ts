import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class ViewContentEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.VIEW_CONTENT, userData, timeStampMillis);
    }
}
