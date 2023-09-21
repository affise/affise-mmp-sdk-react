import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class AdRevenueEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.AD_REVENUE, userData, timeStampMillis);
    }
}
