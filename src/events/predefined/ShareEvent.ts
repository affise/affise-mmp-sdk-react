import {NativeEvent} from "../base/NativeEvent";

export class ShareEvent extends NativeEvent {

    constructor(share: Record<string, unknown>, timeStampMillis: number, userData: string) {
        super('Share');

        this.userData = userData;
        this.serialize = {
            affise_event_share: share,
            affise_event_share_timestamp: timeStampMillis.toString()
        };
    }
}
