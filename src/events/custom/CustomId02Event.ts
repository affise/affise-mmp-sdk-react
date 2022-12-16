import {NativeEvent} from "../base/NativeEvent";

/**
 * Event CustomId02
 *
 * @param custom the describing the meaning of the event.
 * @param timeStampMillis the timestamp event in milliseconds.
 * @param userData any custom string data.
 */
export class CustomId02Event extends NativeEvent {

    constructor(custom: string, timeStampMillis: number, userData: string) {
        super('CustomId02');

        this.userData = userData;
        this.serialize = {
            affise_event_custom_id_02: custom,
            affise_event_custom_id_02_timestamp: timeStampMillis.toString()
        };
    }
}
