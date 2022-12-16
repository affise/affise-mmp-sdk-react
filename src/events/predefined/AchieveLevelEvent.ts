import {NativeEvent} from "../base/NativeEvent";

export class AchieveLevelEvent extends NativeEvent {

    constructor(level: Record<string, unknown>, timeStampMillis: number, userData: string) {
        super('AchieveLevel');

        this.userData = userData;
        this.serialize = {
            affise_event_achieve_level: level,
            affise_event_achieve_level_timestamp: timeStampMillis.toString()
        };
    }
}
