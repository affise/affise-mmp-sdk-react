import {NativeEvent} from "../base/NativeEvent";

export class ReserveEvent extends NativeEvent {

    constructor(reserve: Array<Record<string, unknown>>, timeStampMillis: number, userData: string) {
        super('Reserve');

        this.userData = userData;
        this.serialize = {
            affise_event_reserve: reserve,
            affise_event_reserve_timestamp: timeStampMillis.toString()
        };
    }
}
