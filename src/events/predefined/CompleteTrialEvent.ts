import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class CompleteTrialEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.COMPLETE_TRIAL, userData, timeStampMillis);
    }
}
