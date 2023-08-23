import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class LastAttributedTouchEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.LAST_ATTRIBUTED_TOUCH, userData, timeStampMillis);
    }
}
