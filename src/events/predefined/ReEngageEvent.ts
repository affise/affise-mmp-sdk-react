import {NativeEvent} from "../base/NativeEvent";

export class ReEngageEvent extends NativeEvent {

    constructor(reEngage: string, userData: string) {
        super('ReEngage');

        this.userData = userData;
        this.serialize = {
            affise_event_re_engage: reEngage,
        };
    }
}
