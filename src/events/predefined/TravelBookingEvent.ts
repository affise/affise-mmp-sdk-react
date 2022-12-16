import {NativeEvent} from "../base/NativeEvent";

export class TravelBookingEvent extends NativeEvent {

    constructor(details: Array<string>, userData: string) {
        super('TravelBooking');

        this.userData = userData;
        this.serialize = {
            affise_event_travel_booking: details,
        };
    }
}
