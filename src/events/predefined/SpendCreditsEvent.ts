import {NativeEvent} from "../base/NativeEvent";

export class SpendCreditsEvent extends NativeEvent {

    constructor(credits: number, timeStampMillis: number, userData: string) {
        super('SpendCredits');

        this.userData = userData;
        this.serialize = {
            affise_event_spend_credits: credits,
            affise_event_spend_credits_timestamp: timeStampMillis.toString()
        };
    }
}
