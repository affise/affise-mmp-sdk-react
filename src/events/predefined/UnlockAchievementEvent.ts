import {NativeEvent} from "../base/NativeEvent";

export class UnlockAchievementEvent extends NativeEvent {

    constructor(achievement: Record<string, unknown>, timeStampMillis: number, userData: string) {
        super('UnlockAchievement');

        this.userData = userData;
        this.serialize = {
            affise_event_unlock_achievement: achievement,
            affise_event_unlock_achievement_timestamp: timeStampMillis.toString()
        };
    }
}
