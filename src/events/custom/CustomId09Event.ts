import {NativeEvent} from "../base/NativeEvent";

/**
 * Event CustomId09
 *
 * @param custom the describing the meaning of the event.
 * @param timeStampMillis the timestamp event in milliseconds.
 * @param userData any custom string data.
 */
export class CustomId09Event extends NativeEvent {

    constructor(custom: string, timeStampMillis: number, userData: string) {
        super('CustomId09');

        this.userData = userData;
        this.serialize = {
            affise_event_custom_id_09: custom,
            affise_event_custom_id_09_timestamp: timeStampMillis.toString()
        };
    }
}
