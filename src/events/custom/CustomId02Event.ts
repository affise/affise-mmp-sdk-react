import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";
import type {AffiseEventProps} from "../base/AffiseEventProps";

/**
 * Event CustomId02
 *
 * @param userData any custom string data.
 * @param timeStampMillis the timestamp event in milliseconds.
 */
export class CustomId02Event extends NativeEvent {

    constructor(props?: AffiseEventProps) {
        super({...props, eventName: EventName.CUSTOM_ID_02});
    }
}
