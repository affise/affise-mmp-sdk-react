import {NativeEvent} from "../base/NativeEvent";

/**
 * Event CustomId07
 *
 * @param custom the describing the meaning of the event.
 * @param timeStampMillis the timestamp event in milliseconds.
 * @param userData any custom string data.
 */
export class CustomId07Event extends NativeEvent {

    constructor(custom: string, timeStampMillis: number, userData: string) {
        super('CustomId07');

        this.userData = userData;
        this.serialize = {
            affise_event_custom_id_07: custom,
            affise_event_custom_id_07_timestamp: timeStampMillis.toString()
        };
    }
}
