import {NativeEvent} from "../base/NativeEvent";

/**
 * Event CustomId04
 *
 * @param custom the describing the meaning of the event.
 * @param timeStampMillis the timestamp event in milliseconds.
 * @param userData any custom string data.
 */
export class CustomId05Event extends NativeEvent {

    constructor(custom: string, timeStampMillis: number, userData: string) {
        super('CustomId05');

        this.userData = userData;
        this.serialize = {
            affise_event_custom_id_05: custom,
            affise_event_custom_id_05_timestamp: timeStampMillis.toString()
        };
    }
}
