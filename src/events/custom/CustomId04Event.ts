import {NativeEvent} from "../base/NativeEvent";

/**
 * Event CustomId03
 *
 * @param custom the describing the meaning of the event.
 * @param timeStampMillis the timestamp event in milliseconds.
 * @param userData any custom string data.
 */
export class CustomId04Event extends NativeEvent {

    constructor(custom: string, timeStampMillis: number, userData: string) {
        super('CustomId04');

        this.userData = userData;
        this.serialize = {
            affise_event_custom_id_04: custom,
            affise_event_custom_id_04_timestamp: timeStampMillis.toString()
        };
    }
}
