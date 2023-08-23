import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

/**
 * Event CustomId02
 *
 * @param custom the describing the meaning of the event.
 * @param timeStampMillis the timestamp event in milliseconds.
 * @param userData any custom string data.
 */
export class CustomId02Event extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number }) {
        super(EventName.CUSTOM_ID_02, userData, timeStampMillis);
    }
}
