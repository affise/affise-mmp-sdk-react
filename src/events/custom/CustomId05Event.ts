import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

/**
 * Event CustomId04
 *
 * @param userData any custom string data.
 * @param timeStampMillis the timestamp event in milliseconds.
 */
export class CustomId05Event extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number }) {
        super(EventName.CUSTOM_ID_05, userData, timeStampMillis);
    }
}
