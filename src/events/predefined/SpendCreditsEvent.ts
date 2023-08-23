import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class SpendCreditsEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.SPEND_CREDITS, userData, timeStampMillis);
    }
}
