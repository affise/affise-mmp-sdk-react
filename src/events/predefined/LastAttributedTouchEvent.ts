import {NativeEvent} from "../base/NativeEvent";

export class LastAttributedTouchEvent extends NativeEvent {

    constructor(touchType: string, timeStampMillis: number, touchData: Record<string, unknown>, userData: string) {
        super('LastAttributedTouch');

        this.userData = userData;
        this.serialize = {
            affise_event_last_attributed_touch_type: touchType,
            affise_event_last_attributed_touch_timestamp: timeStampMillis.toString(),
            affise_event_last_attributed_touch_data: touchData,
        };
    }
}
