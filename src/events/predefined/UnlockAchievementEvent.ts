import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class UnlockAchievementEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.UNLOCK_ACHIEVEMENT, userData, timeStampMillis);
    }
}
