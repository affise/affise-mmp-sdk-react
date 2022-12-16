import {NativeEvent} from "../base/NativeEvent";

export class OpenedFromPushNotificationEvent extends NativeEvent {

    constructor(details: string, userData: string) {
        super('OpenedFromPushNotification');

        this.userData = userData;
        this.serialize = {
            affise_event_opened_from_push_notification: details,
        };
    }
}
