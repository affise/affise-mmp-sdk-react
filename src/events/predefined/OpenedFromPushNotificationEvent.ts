import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class OpenedFromPushNotificationEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.OPENED_FROM_PUSH_NOTIFICATION, userData, timeStampMillis);
    }
}
