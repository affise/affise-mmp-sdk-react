import {NativeEvent} from "../base/NativeEvent";

export class StartTrialEvent extends NativeEvent {

    constructor(trial: Record<string, unknown>, timeStampMillis: number, userData: string) {
        super('StartTrial');

        this.userData = userData;
        this.serialize = {
            affise_event_start_trial: trial,
            affise_event_start_trial_timestamp: timeStampMillis.toString()
        };
    }
}
