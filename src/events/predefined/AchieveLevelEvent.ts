import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class AchieveLevelEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.ACHIEVE_LEVEL, userData, timeStampMillis);
    }
}
