import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

/**
 * Event CustomId06
 *
 * @param custom the describing the meaning of the event.
 * @param timeStampMillis the timestamp event in milliseconds.
 * @param userData any custom string data.
 */
export class CustomId06Event extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number }) {
        super(EventName.CUSTOM_ID_06, userData, timeStampMillis);
    }
}
