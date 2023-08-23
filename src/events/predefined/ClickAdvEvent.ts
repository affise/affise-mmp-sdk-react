import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class ClickAdvEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.CLICK_ADV, userData, timeStampMillis);
    }
}
