import {NativeEvent} from "../base/NativeEvent";

export class InviteEvent extends NativeEvent {

    constructor(invite: Record<string, unknown>, timeStampMillis: number, userData: string) {
        super('Invite');

        this.userData = userData;
        this.serialize = {
            affise_event_invite: invite,
            affise_event_invite_timestamp: timeStampMillis.toString()
        };
    }
}
