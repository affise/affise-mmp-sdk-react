import {NativeEvent} from "../base/NativeEvent";

export class SubscribeEvent extends NativeEvent {

    constructor(tutorial: Record<string, unknown>, timeStampMillis: number, userData: string) {
        super('Subscribe');

        this.userData = userData;
        this.serialize = {
            affise_event_subscribe: tutorial,
            affise_event_subscribe_timestamp: timeStampMillis.toString()
        };
    }
}
