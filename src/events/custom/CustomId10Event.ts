import {NativeEvent} from "../base/NativeEvent";

/**
 * Event CustomId10
 *
 * @param custom the describing the meaning of the event.
 * @param timeStampMillis the timestamp event in milliseconds.
 * @param userData any custom string data.
 */
export class CustomId10Event extends NativeEvent {

    constructor(custom: string, timeStampMillis: number, userData: string) {
        super('CustomId10');

        this.userData = userData;
        this.serialize = {
            affise_event_custom_id_10: custom,
            affise_event_custom_id_10_timestamp: timeStampMillis.toString()
        };
    }
}
