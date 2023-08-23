import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class CustomizeProductEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.CUSTOMIZE_PRODUCT, userData, timeStampMillis);
    }
}
