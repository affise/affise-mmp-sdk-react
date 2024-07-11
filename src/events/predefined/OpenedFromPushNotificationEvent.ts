import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";
import type {AffiseEventProps} from "../base/AffiseEventProps";

export class OpenedFromPushNotificationEvent extends NativeEvent {

    constructor(props?: AffiseEventProps) {
        super({...props, eventName: EventName.OPENED_FROM_PUSH_NOTIFICATION});
    }
}
