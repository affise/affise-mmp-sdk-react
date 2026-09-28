import {NativeEvent} from "../base/NativeEvent";
import type {AffiseCustomEventProps} from "../base/AffiseCustomEventProps";

/**
 * UserCustomEvent
 *
 * @param eventName custom event name.
 * @param userData any custom string data.
 * @param timeStampMillis the timestamp event in milliseconds.
 */
export class UserCustomEvent extends NativeEvent {
    constructor(props: AffiseCustomEventProps) {
        super(props);
    }
}
