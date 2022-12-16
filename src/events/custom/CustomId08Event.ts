import {NativeEvent} from "../base/NativeEvent";

/**
 * Event CustomId08
 *
 * @param custom the describing the meaning of the event.
 * @param timeStampMillis the timestamp event in milliseconds.
 * @param userData any custom string data.
 */
export class CustomId08Event extends NativeEvent {

    constructor(custom: string, timeStampMillis: number, userData: string) {
        super('CustomId08');

        this.userData = userData;
        this.serialize = {
            affise_event_custom_id_08: custom,
            affise_event_custom_id_08_timestamp: timeStampMillis.toString()
        };
    }
}
