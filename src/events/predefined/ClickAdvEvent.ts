import {NativeEvent} from "../base/NativeEvent";

export class ClickAdvEvent extends NativeEvent {

    constructor(advertisement: string, timeStampMillis: number, userData: string) {
        super('ClickAdv');

        this.userData = userData;
        this.serialize = {
            affise_event_click_adv: advertisement,
            affise_event_click_adv_timestamp: timeStampMillis.toString()
        };
    }
}
