import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class ViewAdvEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.VIEW_ADV, userData, timeStampMillis);
    }
}
