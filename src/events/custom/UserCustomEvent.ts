import {NativeEvent} from "../base/NativeEvent";

/**
 * UserCustomEvent
 *
 * @param eventName custom event name.
 * @param userData any custom string data.
 * @param timeStampMillis the timestamp event in milliseconds.
 */
export class UserCustomEvent extends NativeEvent {

    constructor({eventName, userData, timeStampMillis}: { eventName: string, userData?: string, timeStampMillis?: number }) {
        super(eventName, userData, timeStampMillis);
    }
}
