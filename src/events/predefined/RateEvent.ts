import {NativeEvent} from "../base/NativeEvent";

export class RateEvent extends NativeEvent {

    constructor(rate: Record<string, unknown>, timeStampMillis: number, userData: string) {
        super('Rate');

        this.userData = userData;
        this.serialize = {
            affise_event_rate: rate,
            affise_event_rate_timestamp: timeStampMillis.toString()
        };
    }
}
