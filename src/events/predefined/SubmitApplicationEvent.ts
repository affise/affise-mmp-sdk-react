import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class SubmitApplicationEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.SUBMIT_APPLICATION, userData, timeStampMillis);
    }
}
