import {NativeEvent} from "../base/NativeEvent";

export class CompleteTrialEvent extends NativeEvent {

    constructor(trial: Record<string, unknown>, timeStampMillis: number, userData: string) {
        super('CompleteTrial');

        this.userData = userData;
        this.serialize = {
            affise_event_complete_trial: trial,
            affise_event_complete_trial_timestamp: timeStampMillis.toString()
        };
    }
}
