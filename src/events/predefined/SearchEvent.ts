import {NativeEvent} from "../base/NativeEvent";

export class SearchEvent extends NativeEvent {

    constructor(search: Array<unknown>, timeStampMillis: number, userData: string) {
        super('Search');

        this.userData = userData;
        this.serialize = {
            affise_event_search: search,
            affise_event_search_timestamp: timeStampMillis.toString()
        };
    }
}
