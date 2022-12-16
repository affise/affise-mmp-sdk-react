import {NativeEvent} from "../base/NativeEvent";

/**
 * Event CustomId03
 *
 * @param custom the describing the meaning of the event.
 * @param timeStampMillis the timestamp event in milliseconds.
 * @param userData any custom string data.
 */
export class CustomId03Event extends NativeEvent {

    constructor(custom: string, timeStampMillis: number, userData: string) {
        super('CustomId03');

        this.userData = userData;
        this.serialize = {
            affise_event_custom_id_03: custom,
            affise_event_custom_id_03_timestamp: timeStampMillis.toString()
        };
    }
}
