import {NativeEvent} from "../base/NativeEvent";
import {EventName} from "../EventName";

export class TravelBookingEvent extends NativeEvent {

    constructor({userData, timeStampMillis}: { userData?: string, timeStampMillis?: number } = {}) {
        super(EventName.TRAVEL_BOOKING, userData, timeStampMillis);
    }
}
