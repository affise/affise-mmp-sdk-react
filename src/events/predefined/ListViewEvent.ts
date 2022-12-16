import {NativeEvent} from "../base/NativeEvent";

export class ListViewEvent extends NativeEvent {

    constructor(list: Record<string, unknown>, userData: string) {
        super('ListView');

        this.userData = userData;
        this.serialize = {
            affise_event_list_view: list,
        };
    }
}
