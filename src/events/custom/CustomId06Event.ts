import {NativeEvent} from "../base/NativeEvent";

/**
 * Event CustomId06
 *
 * @param custom the describing the meaning of the event.
 * @param timeStampMillis the timestamp event in milliseconds.
 * @param userData any custom string data.
 */
export class CustomId06Event extends NativeEvent {

    constructor(custom: string, timeStampMillis: number, userData: string) {
        super('CustomId06');

        this.userData = userData;
        this.serialize = {
            affise_event_custom_id_06: custom,
            affise_event_custom_id_06_timestamp: timeStampMillis.toString()
        };
    }
}
