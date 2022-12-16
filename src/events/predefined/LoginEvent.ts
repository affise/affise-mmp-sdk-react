import {NativeEvent} from "../base/NativeEvent";

export class LoginEvent extends NativeEvent {

    constructor(login: Record<string, unknown>, timeStampMillis: number, userData: string) {
        super('Login');

        this.userData = userData;
        this.serialize = {
            affise_event_login: login,
            affise_event_login_timestamp: timeStampMillis.toString()
        };
    }
}
