import {NativeEvent} from "../base/NativeEvent";

/**
 * Event CustomId01
 *
 * @param custom the describing the meaning of the event.
 * @param timeStampMillis the timestamp event in milliseconds.
 * @param userData any custom string data.
 */
export class CustomId01Event extends NativeEvent {

    constructor(custom: string, timeStampMillis: number, userData: string) {
        super('CustomId01');

        this.userData = userData;
        this.serialize = {
            affise_event_custom_id_01: custom,
            affise_event_custom_id_01_timestamp: timeStampMillis.toString()
        };
    }
}
