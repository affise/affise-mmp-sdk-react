import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

/**
 * Event CustomId03
 *
 * @param userData any custom string data.
 * @param timeStampMillis the timestamp event in milliseconds.
 */
export class CustomId04Event extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number }) {
        super(EventName.CUSTOM_ID_04, userData, timeStampMillis);
    }
}
