import {NativeEvent} from "../base/NativeEvent";

export class StartRegistrationEvent extends NativeEvent {

    constructor(registration: Record<string, unknown>, timeStampMillis: number, userData: string) {
        super('StartRegistration');

        this.userData = userData;
        this.serialize = {
            affise_event_start_registration: registration,
            affise_event_start_registration_timestamp: timeStampMillis.toString()
        };
    }
}
