import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class ScheduleEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.SCHEDULE, userData, timeStampMillis);
    }
}
