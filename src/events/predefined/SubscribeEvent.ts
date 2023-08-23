import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class SubscribeEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.SUBSCRIBE, userData, timeStampMillis);
    }
}
