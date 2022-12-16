import {NativeEvent} from "../base/NativeEvent";

export class UnsubscribeEvent extends NativeEvent {

    constructor(unsubscribe: Record<string, unknown>, timeStampMillis: number, userData: string) {
        super('Unsubscribe');

        this.userData = userData;
        this.serialize = {
            affise_event_unsubscribe: unsubscribe,
            affise_event_unsubscribe_timestamp: timeStampMillis.toString()
        };
    }
}
