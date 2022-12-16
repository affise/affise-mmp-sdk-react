import {NativeEvent} from "../base/NativeEvent";

export class CompleteRegistrationEvent extends NativeEvent {

    constructor(registration: Record<string, unknown>, timeStampMillis: number, userData: string) {
        super('CompleteRegistration');

        this.userData = userData;
        this.serialize = {
            affise_event_complete_registration: registration,
            affise_event_complete_registration_timestamp: timeStampMillis.toString()
        };
    }
}
