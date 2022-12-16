import {NativeEvent} from "../base/NativeEvent";

export class UpdateEvent extends NativeEvent {

    constructor(details: Array<string>, userData: string) {
        super('Update');

        this.userData = userData;
        this.serialize = {
            affise_event_update: details,
        };
    }
}
