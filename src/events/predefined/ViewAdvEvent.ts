import {NativeEvent} from "../base/NativeEvent";

export class ViewAdvEvent extends NativeEvent {

    constructor(ad: Record<string, unknown>, timeStampMillis: number, userData: string) {
        super('ViewAdv');

        this.userData = userData;
        this.serialize = {
            affise_event_view_adv: ad,
            affise_event_view_adv_timestamp: timeStampMillis.toString()
        };
    }
}
